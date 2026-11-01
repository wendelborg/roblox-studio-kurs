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

  // 1. Gjør «- [ ]»-lister om til ekte avkrysningsbokser.
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
    // Pakk teksten inn i ett element, så flex-layouten ikke deler den opp
    var tekst = document.createElement("span");
    tekst.className = "sjekk-tekst";
    while (boks.nextSibling) tekst.appendChild(boks.nextSibling);
    li.appendChild(tekst);
    var ul = li.parentElement;
    if (ul) ul.classList.add("sjekkliste");
    // Hele raden er klikkbar
    li.addEventListener("click", function (e) {
      if (e.target === boks || e.target.closest("a, details")) return;
      boks.checked = !boks.checked;
      boks.dispatchEvent(new Event("change", { bubbles: true }));
    });
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

    var ord = document.querySelectorAll(".ordliste input[type=checkbox]");
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

  var skrivUt = document.getElementById("skriv-ut");
  if (skrivUt) skrivUt.addEventListener("click", function () { window.print(); });
})();
