// «Forklar hver linje»: lager en forklaring på barnespråk for hver linje i et Luau-skript.
// Forklaringene lages av regler som kjenner igjen byggeklossene kurset bruker.
// Står en linje i SPESIELLE, brukes den teksten i stedet.
(function () {
  "use strict";

  // ---------- Ord og egenskaper ----------

  // navn: hva egenskapen heter på norsk. tips: en liten ekstra forklaring.
  var EGENSKAP = {
    Transparency: { navn: "gjennomsiktighet", tips: "0 er helt synlig, 1 er usynlig." },
    CanCollide: { navn: "om man kan krasje i den", tips: "false betyr at man går rett gjennom." },
    Anchored: { navn: "om den er festet", tips: "true betyr at den henger fast og ikke faller ned." },
    BrickColor: { navn: "farge" },
    Color: { navn: "farge" },
    Size: { navn: "størrelse" },
    Position: { navn: "plass i verden" },
    Name: { navn: "navn" },
    Value: { navn: "verdi" },
    WalkSpeed: { navn: "gåfart", tips: "Vanlig gåfart er 16." },
    JumpHeight: { navn: "hopphøyde", tips: "Vanlig hopphøyde er 7.2." },
    JumpPower: { navn: "hoppkraft" },
    Health: { navn: "liv", tips: "Fullt liv er 100, og 0 betyr at du er ute." },
    Material: { navn: "materiale" },
    CFrame: { navn: "plass og retning" },
    FillColor: { navn: "fyllfarge" },
    Gravity: { navn: "tyngdekraft" }
  };

  // Hvordan vi sier «X sin Y» på en naturlig måte.
  function sin(x, prop) {
    if (prop === "Parent") return "det " + x + " ligger inni";
    if (prop === "Character") return "figuren til " + x;
    if (prop === "Terrain" && x === "workspace") return "terrenget i verden";
    if (prop === "HumanoidRootPart") return "midten av " + x;
    var e = EGENSKAP[prop];
    var n = e ? e.navn : prop;
    var bestemt = { "gjennomsiktighet": "gjennomsiktigheten", "farge": "fargen", "størrelse": "størrelsen",
      "navn": "navnet", "verdi": "verdien", "gåfart": "gåfarten", "hopphøyde": "hopphøyden", "liv": "livet",
      "materiale": "materialet", "fyllfarge": "fyllfargen", "tyngdekraft": "tyngdekraften",
      "plass i verden": "plassen i verden", "plass og retning": "plassen og retningen" };
    return (bestemt[n] || n) + " til " + x;
  }

  var HENDELSE = {
    Touched: "noe rører",
    PlayerAdded: "en ny spiller kommer inn i spillet",
    PlayerRemoving: "en spiller forlater spillet",
    CharacterAdded: "figuren til spilleren dukker opp",
    Activated: "spilleren klikker med verktøyet"
  };

  var SPESIELLE = {
    "local avstand = (figur.HumanoidRootPart.Position - rot.Position).Magnitude":
      "Regn ut hvor langt det er fra roboten til denne spilleren, og legg svaret i boksen avstand.",
    "local vekk = rot.Position + (rot.Position - der).Unit * 20":
      "Regn ut et punkt 20 skritt unna spilleren, i motsatt retning, og legg det i boksen vekk. Dit skal roboten flykte.",
    "pokal.CFrame = pokal.CFrame * CFrame.Angles(0, math.rad(10), 0)":
      "Snu pokalen 10 grader rundt seg selv. CFrame er både hvor den er og hvilken vei den peker.",
    "local der = spiller.HumanoidRootPart.Position":
      "Finn ut hvor spilleren står, og legg det i boksen der.",
    "rot:SetNetworkOwner(nil)":
      "Bestem at serveren alltid styrer roboten, så den ikke hakker.",
    "sopp.Size = vanlig * Vector3.new(1, 0.7, 1)":
      "Gjør soppen 70 % så høy som vanlig, men like bred. Det ser ut som den blir klemt!",
    "figur = figur.Parent":
      "Gå ett hakk opp i slektstreet: Det var nøkkelen som traff, så vi vil ha den som holder nøkkelen.",
    "terreng:FillBlock(CFrame.new(0, -2, 0), Vector3.new(500, 8, 500), Enum.Material.Water)":
      "Fyll en kjempestor, flat boks med vann, 500 bred og 500 dyp. Det blir havet.",
    "terreng:FillBall(Vector3.new(x, 0, z), storrelse, Enum.Material.Grass)":
      "Fyll en kule med gress på det tilfeldige stedet. Halve kula stikker opp av havet og blir en øy.",
    "terreng:FillBall(Vector3.new(x, storrelse - 4, z), 4, Enum.Material.Snow)":
      "Legg en liten snøkule på toppen av øya.",
    "spiller.leaderstats.Mynter.Value += 1":
      "Gi spilleren én mynt til. += 1 betyr «ta det som er der, og legg til 1».",
    "local Players = game:GetService(\"Players\")":
      "Hent Players, lista over alle som spiller, og legg den i boksen Players."
  };

  // ---------- Hjelpere ----------

  function delArgs(s) {
    var ut = [], dybde = 0, start = 0, iTekst = false;
    for (var i = 0; i < s.length; i++) {
      var c = s[i];
      if (c === '"') iTekst = !iTekst;
      if (iTekst) continue;
      if (c === "(") dybde++;
      else if (c === ")") dybde--;
      else if (c === "," && dybde === 0) { ut.push(s.slice(start, i).trim()); start = i + 1; }
    }
    if (s.trim()) ut.push(s.slice(start).trim());
    return ut;
  }

  function liste(ord) {
    if (ord.length <= 1) return ord.join("");
    return ord.slice(0, -1).join(", ") + " og " + ord[ord.length - 1];
  }

  function sek(n) { return n + (n === "1" ? " sekund" : " sekunder"); }

  // Beskriver et uttrykk (det som står til høyre for =) med ord.
  function hva(e) {
    var m;
    e = e.trim();
    if (e === "script.Parent") return "tingen skriptet ligger inni";
    if (e === "script.Parent.Name") return "navnet til tingen skriptet ligger inni";
    if (e === "i") return "tallet i";
    if (e === "nil") return "ingenting (nil)";
    if (e === "true") return "true (ja)";
    if (e === "false") return "false (nei)";
    if (e === "math.huge") return "et uendelig stort tall";
    if (e === "workspace") return "Workspace, altså selve verdenen";
    if (/^-?\d+(\.\d+)?$/.test(e)) return e;
    if ((m = e.match(/^"(.*)"$/))) return "teksten «" + m[1] + "»";
    if ((m = e.match(/^game:GetService\("(\w+)"\)$/))) return "tjenesten " + m[1];
    if ((m = e.match(/^Instance\.new\("(\w+)"\)$/))) return "en helt ny " + m[1];
    if ((m = e.match(/^(\w+(?:\.\w+)*):FindFirstChild\("(\w+)"\)$/)))
      return "barnet til " + m[1] + " som heter " + m[2] + " (eller ingenting hvis det ikke finnes)";
    if ((m = e.match(/^(\w+):WaitForChild\("(\w+)"\)$/)))
      return m[2] + " som ligger i " + (m[1] === "workspace" ? "Workspace" : m[1]) + " (koden venter til den finnes)";
    if ((m = e.match(/^Players:GetPlayerFromCharacter\((.+)\)$/)))
      return "spilleren som eier figuren " + m[1] + " (eller ingenting hvis det ikke er en spiller)";
    if ((m = e.match(/^workspace:GetPartsInPart\((\w+)\)$/)))
      return "en liste over alle deler som er inni " + m[1] + " akkurat nå";
    if ((m = e.match(/^math\.random\((.+)\)$/))) {
      var a = delArgs(m[1]);
      return "et tilfeldig tall mellom " + a[0] + " og " + a[1];
    }
    if ((m = e.match(/^BrickColor\.new\("(.+)"\)$/))) return "fargen «" + m[1] + "»";
    if ((m = e.match(/^BrickColor\.new\((\w+)\)$/))) return "fargen som står i " + m[1];
    if (e === "BrickColor.random()") return "en tilfeldig farge";
    if ((m = e.match(/^Color3\.new\((.+)\)$/))) {
      var c = delArgs(m[1]).join(",");
      if (c === "1,0,0") return "rød farge";
      return "fargen (" + delArgs(m[1]).join(", ") + ")";
    }
    if ((m = e.match(/^Vector3\.new\((.+)\)$/))) {
      var v = delArgs(m[1]);
      return "tre tall: " + v[0] + " til siden, " + v[1] + " i høyden og " + v[2] + " i dybden";
    }
    if ((m = e.match(/^Enum\.Material\.(\w+)$/))) return "materialet " + m[1];
    if ((m = e.match(/^(\w+)\s*\/\s*(\w+)$/))) return m[1] + " delt på " + m[2];
    if ((m = e.match(/^(\w+)\((.*)\)$/))) {
      var args = delArgs(m[2]);
      return "det funksjonen " + m[1] + " gir tilbake" + (args.length ? ", når den får " + liste(args) : "");
    }
    if ((m = e.match(/^(\w+)\.(\w+)$/))) return sin(m[1], m[2]);
    if (/^[A-Za-z_]\w*$/.test(e)) return "det som ligger i boksen " + e;
    return "`" + e + "`";
  }

  // Oversetter en betingelse (det mellom if og then) til et spørsmål.
  function sporsmal(b) {
    var m;
    b = b.trim();
    var deler = b.split(/\s+or\s+/);
    if (deler.length > 1) return deler.map(sporsmal).join(", eller ");
    deler = b.split(/\s+and\s+/);
    if (deler.length > 1) return deler.map(sporsmal).join(", og ");
    if ((m = b.match(/^(.+?):FindFirstChild\("(\w+)"\)\s*==\s*nil$/))) return m[1] + " ikke har noe barn som heter " + m[2];
    if ((m = b.match(/^(.+?):FindFirstChild\("(\w+)"\)$/))) return m[1] + " har et barn som heter " + m[2];
    if ((m = b.match(/^(.+?):IsA\("(\w+)"\)$/))) return m[1] + " er en " + m[2];
    if ((m = b.match(/^(.+?):GetAttribute\("(\w+)"\)$/))) return m[1] + " har lappen " + m[2] + " satt til true";
    if ((m = b.match(/^(.+?)\s*==\s*nil$/))) return m[1] + " er ingenting (nil)";
    if ((m = b.match(/^(.+?)\s*==\s*false$/))) return m[1] + " er false";
    if ((m = b.match(/^(\w+)\.Name\s*==\s*(.+)$/))) return "navnet til " + m[1] + " er " + m[2];
    if ((m = b.match(/^(.+?)\s*==\s*(.+)$/))) return m[1] + " er lik " + m[2];
    if ((m = b.match(/^(.+?)\s*~=\s*(.+)$/))) return m[1] + " ikke er lik " + m[2];
    if ((m = b.match(/^(.+?)\s*<\s*(.+)$/))) return m[1] + " er mindre enn " + m[2];
    if ((m = b.match(/^(.+?)\s*>\s*(.+)$/))) return m[1] + " er større enn " + m[2];
    if (/^[\w.]+$/.test(b)) return b + " er true (eller finnes)";
    return "`" + b + "`";
  }

  function beskrivPrint(arg) {
    var biter = arg.split(/\s*\.\.\s*/).map(function (b) {
      var m = b.match(/^"(.*)"$/);
      if (m) return "«" + m[1] + "»";
      return hva(b);
    });
    return "Skriv dette i Output-vinduet: " + biter.join(" + ");
  }

  // ---------- Selve forklaringen ----------

  function forklarLinje(rå, stabel) {
    var linje = rå.trim();
    var kommentar = "";
    var iTekst = false;
    for (var i = 0; i < linje.length - 1; i++) {
      if (linje[i] === '"') iTekst = !iTekst;
      if (!iTekst && linje[i] === "-" && linje[i + 1] === "-") {
        kommentar = linje.slice(i + 2).trim();
        linje = linje.slice(0, i).trim();
        break;
      }
    }

    var tekst = tolk(linje, stabel);
    if (linje === "" && kommentar) return "Dette er en kommentar. Datamaskinen hopper over den. Den er bare for mennesker og sier: «" + kommentar + "».";
    if (kommentar) tekst += " (Kommentaren sier: «" + kommentar + "».)";
    return tekst;
  }

  function tolk(l, stabel) {
    var m;
    if (SPESIELLE[l]) return SPESIELLE[l];

    if ((m = l.match(/^local function (\w+)\((.*)\)$/))) {
      stabel.push({ type: "funksjon", navn: m[1] });
      var p = delArgs(m[2]);
      return "Her starter en funksjon (en oppskrift) som heter " + m[1] + "." +
        (p.length ? " Den får inn " + liste(p) + " når den brukes." : "") +
        " Linjene under hører til oppskriften, men de kjører ikke før noen bruker den.";
    }
    if ((m = l.match(/^([\w.]+)\.(\w+):Connect\(function\((.*)\)$/))) {
      stabel.push({ type: "anonym" });
      var naar = m[2] === "Touched" ? "noe rører " + m[1] : (HENDELSE[m[2]] || m[2] + " skjer");
      return "Hver gang " + naar + ", skal funksjonen som starter her, kjøre. Den har ikke noe navn." +
        (m[3] ? " " + m[3] + " er det vi får vite fra hendelsen." : "");
    }
    if ((m = l.match(/^([\w.]+)\.(\w+):Connect\((\w+)\)$/))) {
      var hendelse = m[2] === "Touched" ? "noe rører " + m[1] : (HENDELSE[m[2]] || m[2] + " skjer");
      return "Koble dørklokka: Hver gang " + hendelse + ", skal funksjonen " + m[3] + " kjøre.";
    }
    if (l === "end)") {
      stabel.pop();
      return "Her slutter funksjonen uten navn. Parentesen lukker Connect fra linja der funksjonen startet.";
    }
    if (l === "end") {
      var b = stabel.pop() || {};
      if (b.type === "funksjon") return "Her slutter funksjonen " + b.navn + ".";
      if (b.type === "if") return "Her slutter if-en.";
      if (b.type === "løkke") return "Her slutter løkka. Datamaskinen hopper tilbake til toppen av løkka og tar en runde til.";
      return "Her slutter blokka som startet lenger opp.";
    }
    if ((m = l.match(/^if (.+) then$/))) {
      stabel.push({ type: "if" });
      return "Spør: Er det sånn at " + sporsmal(m[1]) + "? Hvis ja, gjør linjene under. Hvis nei, hopp over dem.";
    }
    if ((m = l.match(/^elseif (.+) then$/))) {
      return "Hvis svaret over var nei, spør i stedet: Er det sånn at " + sporsmal(m[1]) + "?";
    }
    if (l === "else") return "Hvis svaret på spørsmålet over var nei, gjør linjene under i stedet.";
    if (l === "while true do") {
      stabel.push({ type: "løkke" });
      return "Start en løkke som går for alltid. Linjene under gjentas om og om igjen.";
    }
    if ((m = l.match(/^for (\w+) = (-?\w+), (-?\w+)(?:, (-?\d+))? do$/))) {
      stabel.push({ type: "løkke" });
      return "Start en telle-løkke: " + m[1] + " blir " + m[2] + ", så " + (m[4] === "-1" ? "ett mindre" : "ett mer") +
        " hver runde, helt til " + m[3] + ". Linjene under gjøres én gang for hvert tall.";
    }
    if ((m = l.match(/^for _, (\w+) in (.+) do$/))) {
      stabel.push({ type: "løkke" });
      var hvilke = m[2];
      var mm;
      if ((mm = hvilke.match(/^(\w+):GetChildren\(\)$/))) hvilke = "alle barna til " + mm[1];
      else if (hvilke === "Players:GetPlayers()") hvilke = "alle spillerne i spillet";
      else hvilke = "lista " + hvilke;
      return "Start en løkke som går gjennom " + hvilke + ", én om gangen. Hver gang heter den vi ser på, " + m[1] + ".";
    }
    if (l === "return") return "Stopp funksjonen her. Linjene under i funksjonen blir hoppet over.";
    if ((m = l.match(/^return (.+)$/))) return "Stopp funksjonen og gi tilbake " + m[1] + " til den som brukte den.";
    if ((m = l.match(/^task\.wait\((.+)\)$/))) return "Vent " + sek(m[1]) + ". Ingenting skjer i dette skriptet imens.";
    if ((m = l.match(/^print\((.+)\)$/))) return beskrivPrint(m[1]);

    if ((m = l.match(/^local (\w+) = (.+)$/)))
      return "Lag en boks (variabel) som heter " + m[1] + ". Oppi den legger vi " + hva(m[2]) + ".";

    if ((m = l.match(/^([\w.]+)\.(\w+) \+= (.+)$/)))
      return "Legg " + m[3] + " til " + sin(m[1], m[2]) + ".";

    if ((m = l.match(/^([\w.]+)\.(\w+) = (.+)$/))) {
      if (m[2] === "Parent") return "Legg " + m[1] + " inni " + (m[3] === "workspace" ? "Workspace, så den dukker opp i verden" : m[3]) + ".";
      var eg = EGENSKAP[m[2]];
      return "Endre " + (eg ? eg.navn + " (" + m[2] + ")" : m[2]) + " på " + m[1] + " til " + hva(m[3]) + "." + (eg && eg.tips ? " " + eg.tips : "");
    }
    if ((m = l.match(/^(\w+) = (.+)$/))) return "Bytt ut det som ligger i boksen " + m[1] + " med " + hva(m[2]) + ".";

    if ((m = l.match(/^(\w+):(\w+)\((.*)\)$/))) {
      var a = delArgs(m[3]);
      switch (m[2]) {
        case "SetAttribute": return "Klistre en lapp på " + m[1] + ": " + a[0].replace(/"/g, "") + " = " + a[1] + ".";
        case "Destroy": return "Slett " + m[1] + " helt.";
        case "PivotTo": return "Flytt hele " + m[1] + " til et nytt sted på én gang.";
        case "MoveTo": return "Be " + m[1] + " om å gå til stedet som ligger i boksen " + a[0] + ".";
        case "TakeDamage": return /^\d+$/.test(a[0]) ? "Ta " + a[0] + " liv fra figuren." : "Ta liv fra figuren. Hvor mye står i boksen " + a[0] + ".";
      }
      return "Bruk " + m[2] + " på " + m[1] + (a.length ? " med " + liste(a) : "") + ".";
    }
    if ((m = l.match(/^(\w+)\((.*)\)$/))) {
      var args = delArgs(m[2]);
      return "Bruk funksjonen " + m[1] + (args.length ? " med " + liste(args) : "") + ". Datamaskinen hopper opp til oppskriften og følger den.";
    }
    return null;
  }

  function forklarKode(kode) {
    var stabel = [];
    var ut = [];
    kode.replace(/\s+$/, "").split("\n").forEach(function (linje, i) {
      if (!linje.trim()) return;
      var t = forklarLinje(linje, stabel);
      ut.push({ nr: i + 1, kode: linje, tekst: t || "Denne linjen har ingen ferdig forklaring ennå. Spør en voksen!" , ukjent: !t });
    });
    return ut;
  }

  if (typeof module !== "undefined") { module.exports = { forklarKode: forklarKode }; return; }

  // ---------- Knappen på siden ----------

  document.querySelectorAll("div.language-lua").forEach(function (blokk) {
    var kode = blokk.querySelector("code");
    if (!kode) return;
    var linjer = forklarKode(kode.textContent);

    var detaljer = document.createElement("details");
    detaljer.className = "forklaring";
    var knapp = document.createElement("summary");
    knapp.textContent = "Forklar hver linje";
    detaljer.appendChild(knapp);

    var ol = document.createElement("ol");
    linjer.forEach(function (l) {
      var li = document.createElement("li");
      var k = document.createElement("code");
      k.textContent = l.kode.trim();
      var p = document.createElement("span");
      p.textContent = l.tekst;
      var nr = document.createElement("span");
      nr.className = "linjenr";
      nr.textContent = "Linje " + l.nr;
      li.appendChild(nr);
      li.appendChild(k);
      li.appendChild(p);
      ol.appendChild(li);
    });
    detaljer.appendChild(ol);

    var etter = blokk.closest(".skriv-selv") || blokk;
    etter.parentNode.insertBefore(detaljer, etter.nextSibling);
  });
})();
