// Lagrer avkrysninger i nettleseren, så fremgangen huskes til neste gang.
(function () {
  var PREFIKS = "roblox-kurs:";

  function les(nokkel) {
    try { return localStorage.getItem(PREFIKS + nokkel); } catch (e) { return null; }
  }
  function skriv(nokkel, verdi) {
    try {
      if (verdi === null) localStorage.removeItem(PREFIKS + nokkel);
      else localStorage.setItem(PREFIKS + nokkel, verdi);
    } catch (e) { /* privat vindu e.l. – siden virker likevel */ }
  }

  var side = document.body.getAttribute("data-side") || "side";

  // 0. Gi innholdet fra markdown klassene til Designsystemet
  //    (designsystemet.no), så overskrifter, avsnitt, lister, lenker og
  //    tabeller ser ut som komponentene der.
  var main = document.querySelector("main");
  function klasse(sel, k, attr) {
    main.querySelectorAll(sel).forEach(function (el) {
      if (el.closest(".ds-tag, .ds-button, pre, .highlight")) return;
      if (/\bds-/.test(el.className)) return;
      el.classList.add(k);
      if (attr) Object.keys(attr).forEach(function (a) { if (!el.hasAttribute(a)) el.setAttribute(a, attr[a]); });
    });
  }
  if (main) {
    var storrelser = { H1: "xl", H2: "lg", H3: "md", H4: "sm" };
    main.querySelectorAll("h1, h2, h3, h4").forEach(function (h) {
      if (/\bds-/.test(h.className)) return;
      var iBoks = h.closest(".ds-alert, .ds-card, .ds-details");
      h.classList.add("ds-heading");
      h.setAttribute("data-size", iBoks ? (h.tagName === "H4" ? "2xs" : "xs") : storrelser[h.tagName]);
    });
    klasse("p", "ds-paragraph");
    klasse("ul, ol", "ds-list");
    klasse("a:not(.ds-button):not(.ds-card)", "ds-link");
    main.querySelectorAll("table").forEach(function (t) {
      t.classList.add("ds-table");
      t.setAttribute("data-border", "true");
    });
    // Merkelapp over kode som skal skrives av for hånd
    main.querySelectorAll(".skriv-selv").forEach(function (b) {
      var tag = document.createElement("span");
      tag.className = "ds-tag skriv-selv-merke";
      tag.setAttribute("data-color", "warning");
      tag.textContent = "Skriv selv – ikke kopier!";
      b.parentNode.insertBefore(tag, b);
    });
  }

  // Lager en kort, fast nøkkel fra en tekst. Nøkkelen avhenger av hva
  // som står i punktet, ikke av hvor det står, så fremgangen overlever
  // at oppdrag og punkter flyttes eller nummereres om.
  function nokkelFra(tekst) {
    var h = 5381;
    tekst = tekst.replace(/\s+/g, " ").trim();
    for (var i = 0; i < tekst.length; i++) {
      h = ((h << 5) + h + tekst.charCodeAt(i)) | 0;
    }
    return (h >>> 0).toString(36);
  }
  var brukt = {};

  // 1a. Ordboka har ferdige bokser. Nøkkelen lages av den samme teksten
  //     som før, så avkrysninger fra den gamle utgaven av siden huskes.
  document.querySelectorAll(".ordliste > li").forEach(function (li) {
    var boks = li.querySelector("input[type=checkbox]");
    var d = li.querySelector("details");
    var tekst = li.querySelector(".ord").textContent + li.querySelector(".hvor").textContent + " " +
      li.querySelector(".sprak").textContent + " " + d.querySelector("summary").textContent +
      d.querySelector(":scope > div").textContent;
    var n = side + "-" + nokkelFra(tekst);
    if (brukt[n]) { brukt[n] += 1; n += "-" + brukt[n]; } else { brukt[n] = 1; }
    boks.setAttribute("data-lagre", n);
  });

  // Lenker mellom ord i ordboka: åpne forklaringen til ordet man hopper til.
  function aapneOrd() {
    var mal = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
    var d = mal && mal.matches(".ordliste > li") && mal.querySelector("details");
    if (d) d.open = true;
  }
  window.addEventListener("hashchange", aapneOrd);
  aapneOrd();

  // 1b. Gjør «- [ ]»-lister om til ekte avkrysningsbokser.
  document.querySelectorAll("main li").forEach(function (li) {
    var boks = li.querySelector(":scope > input[type=checkbox]");
    if (!boks) {
      var forste = li.firstChild;
      if (!forste || forste.nodeType !== 3 || !/^\s*\[[ xX]\]\s/.test(forste.nodeValue)) return;
      forste.nodeValue = forste.nodeValue.replace(/^\s*\[[ xX]\]\s/, "");
      boks = document.createElement("input");
      boks.type = "checkbox";
      li.insertBefore(boks, li.firstChild);
    }
    boks.disabled = false;
    boks.removeAttribute("disabled");
    boks.checked = false;
    var tekstUtenBoks = li.textContent;
    var n = side + "-" + nokkelFra(tekstUtenBoks);
    if (brukt[n]) { brukt[n] += 1; n += "-" + brukt[n]; } else { brukt[n] = 1; }
    boks.setAttribute("data-lagre", n);
    li.classList.add("sjekk");
    // Gjør punktet om til et Designsystemet-felt: boks + label
    boks.className = "ds-input";
    boks.id = "sjekk-" + n;
    var felt = document.createElement("div");
    felt.className = "ds-field";
    var etikett = document.createElement("label");
    etikett.setAttribute("for", boks.id);
    etikett.className = "sjekk-tekst";
    var etterpå = [];
    while (boks.nextSibling) {
      var neste = boks.nextSibling;
      // Underlister og «enklere»-bokser legges under feltet, ikke i labelen
      if (neste.nodeType === 1 && /^(UL|OL|DETAILS|DIV|PRE)$/.test(neste.tagName)) { etterpå.push(neste); li.removeChild(neste); }
      else etikett.appendChild(neste);
    }
    felt.appendChild(boks);
    felt.appendChild(etikett);
    li.appendChild(felt);
    etterpå.forEach(function (el) { li.appendChild(el); });
    var ul = li.parentElement;
    if (ul) ul.classList.add("sjekkliste");
  });

  // 2. Last inn og lagre alt som har data-lagre.
  document.querySelectorAll("[data-lagre]").forEach(function (el) {
    var n = el.getAttribute("data-lagre");
    var v = les(n);
    if (el.type === "checkbox") {
      el.checked = v === "1";
      el.addEventListener("change", function () {
        skriv(n, el.checked ? "1" : null);
        oppdater();
      });
    } else {
      if (v !== null) el.value = v;
      el.addEventListener("input", function () { skriv(n, el.value); oppdater(); });
    }
  });

  // 3. Vis fremgang på forsiden og diplom i ordboka.
  function oppdater() {
    var kort = document.querySelectorAll("[data-oppdrag]");
    if (kort.length) {
      var ferdig = 0;
      kort.forEach(function (k) {
        var ok = les("ferdig-" + k.getAttribute("data-oppdrag")) === "1";
        k.classList.toggle("ferdig", ok);
        if (ok) ferdig += 1;
      });
      var tekst = document.getElementById("fremgang-tekst");
      var stolpe = document.getElementById("fremgang-stolpe");
      if (tekst) tekst.textContent = ferdig === kort.length
        ? "Alle oppdrag fullført! Nå er du klar for sluttprosjektet."
        : ferdig + " av " + kort.length + " oppdrag fullført";
      if (stolpe) stolpe.style.width = (100 * ferdig / kort.length) + "%";
    }

    var ord = document.querySelectorAll(".ordliste.hemmelige input[type=checkbox]");
    if (ord.length) {
      var kan = 0;
      ord.forEach(function (b) { if (b.checked) kan += 1; });
      var t = document.getElementById("ord-teller");
      if (t) t.textContent = kan + " av " + ord.length + " ord";
      var diplom = document.getElementById("diplom");
      if (diplom) diplom.hidden = kan < ord.length;
      var navn = document.getElementById("diplom-navn");
      var ut = document.getElementById("diplom-navn-ut");
      if (navn && ut) ut.textContent = navn.value.trim() || "…";
    }
  }
  oppdater();

  // 4. Knappen som bytter mellom lyst og mørkt utseende.
  var temaKnapp = document.getElementById("tema-knapp");
  if (temaKnapp) temaKnapp.addEventListener("click", function () {
    var rot = document.documentElement;
    var satt = rot.getAttribute("data-color-scheme");
    var erMork = satt === "dark" || (satt !== "light" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    var nytt = erMork ? "light" : "dark";
    rot.setAttribute("data-color-scheme", nytt);
    skriv("tema", nytt);
  });

  var skrivUt = document.getElementById("skriv-ut");
  if (skrivUt) skrivUt.addEventListener("click", function () { window.print(); });
})();
