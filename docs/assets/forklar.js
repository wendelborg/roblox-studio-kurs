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
    Gravity: { navn: "tyngdekraft" },
    Text: { navn: "tekst" },
    Enabled: { navn: "på eller av", tips: "false betyr at den er slått av." },
    AnimationId: { navn: "animasjonsnummer" },
    CameraType: { navn: "kameratype" },
    RespawnLocation: { navn: "startsted", tips: "Det er her spilleren dukker opp igjen etter å ha dødd." }
  };

  // Hvordan vi sier «X sin Y» på en naturlig måte.
  function sin(x, prop) {
    if (prop === "Parent") return "det " + x + " ligger inni";
    if (prop === "Character") return "figuren til " + x;
    if (prop === "Terrain" && x === "workspace") return "terrenget i verden";
    if (prop === "HumanoidRootPart") return "midten av " + x;
    if (prop === "LocalPlayer") return "deg, spilleren ved denne maskinen";
    if (prop === "CurrentCamera") return "kameraet ditt";
    if (prop === "UserId") return "det faste nummeret til " + x;
    var e = EGENSKAP[prop];
    if (!e && /^[a-z]/.test(prop)) return "«" + prop + "» fra " + x;
    if (!e) return prop + " som ligger i " + x;
    var n = e ? e.navn : prop;
    var bestemt = { "gjennomsiktighet": "gjennomsiktigheten", "farge": "fargen", "størrelse": "størrelsen",
      "navn": "navnet", "verdi": "verdien", "gåfart": "gåfarten", "hopphøyde": "hopphøyden", "liv": "livet",
      "materiale": "materialet", "fyllfarge": "fyllfargen", "tyngdekraft": "tyngdekraften",
      "plass i verden": "plassen i verden", "plass og retning": "plassen og retningen", "tekst": "teksten", "startsted": "startstedet" };
    return (bestemt[n] || n) + " til " + x;
  }

  var HENDELSE = {
    Touched: "noe rører",
    PlayerAdded: "en ny spiller kommer inn i spillet",
    PlayerRemoving: "en spiller forlater spillet",
    CharacterAdded: "figuren til spilleren dukker opp",
    Activated: "noen klikker på knappen eller med verktøyet",
    Triggered: "noen trykker på knappen",
    InputBegan: "du trykker på en tast, musa eller skjermen",
    OnServerEvent: "en spiller sender en beskjed til serveren",
    Changed: "verdien endrer seg"
  };

  var SPESIELLE = {
    "local tid = os.clock() - startTid[spiller]":
      "Regn ut tida: klokka nå minus klokka da spilleren startet. Legg svaret i boksen tid.",
    "Lighting.ClockTime = (Lighting.ClockTime + 0.05) % 24":
      "Flytt klokka i spillet litt fram. % 24 gjør at den starter på 0 igjen når den når 24, som en ekte klokke.",
    "local maal = { Position = plattform.Position + Vector3.new(0, 0, 20) }":
      "Lag en huskeliste som sier hvor plattformen skal ende: 20 skritt bortover fra der den står nå.",
    "tid = math.floor(tid * 100) / 100":
      "Rund av tida til to desimaler. 12.3456 blir for eksempel til 12.34.",
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
      "Det var nøkkelen som traff, så vi ser på tingen nøkkelen ligger inni. Det er figuren som holder den.",
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

  // Deler et uttrykk på en operator som ikke står inni tekst eller parenteser.
  function splitTopp(s, op) {
    var ut = [], dybde = 0, start = 0, iTekst = false;
    for (var i = 0; i < s.length; i++) {
      var c = s[i];
      if (c === '"') iTekst = !iTekst;
      if (iTekst) continue;
      if (c === "(" || c === "{" || c === "[") dybde++;
      else if (c === ")" || c === "}" || c === "]") dybde--;
      else if (dybde === 0 && s.substr(i, op.length) === op) { ut.push(s.slice(start, i).trim()); start = i + op.length; i += op.length - 1; }
    }
    ut.push(s.slice(start).trim());
    return ut;
  }

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
    if (e === "{}") return "en tom huskeliste (en tabell)";
    if ((m = e.match(/^#(\w+)$/))) return "antall ting i lista " + m[1];
    if ((m = e.match(/^Enum\.(\w+)\.(\w+)$/))) return m[2] + " (en ferdig verdi fra Roblox)";
    if ((m = e.match(/^require\((.+)\)$/))) return "verktøykassa som ligger i " + m[1];
    if ((m = e.match(/^(\w+):LoadAnimation\((\w+)\)$/))) return "animasjonen " + m[2] + ", klar til å spilles";
    if ((m = e.match(/^TweenService:Create\((\w+), (\w+), (\w+)\)$/))) return "en ny myk bevegelse for " + m[1] + ", laget fra " + m[2] + " og " + m[3];
    if ((m = e.match(/^TweenInfo\.new\((.+)\)$/))) return "oppskriften på bevegelsen: Den tar " + delArgs(m[1])[0] + " sekunder";
    if ((m = e.match(/^CFrame\.lookAt\((.+)\)$/))) { var c2 = delArgs(m[1]); return "en plass ved " + c2[0].replace(/^Vector3\.new/, "") + " som ser mot " + c2[1].replace(/^Vector3\.new/, ""); }
    if ((m = e.match(/^BrickColor\.new\((\w+)\[(\w+)\]\)$/))) return "fargen som står på plass " + m[2] + " i lista " + m[1];
    if ((m = e.match(/^(\w+):GetAsync\(([\w.]+)\)$/))) return "det som er lagret i " + m[1] + " for " + hva(m[2]);
    if ((m = e.match(/^(\w+(?:\.\w+){3,})$/))) { var d = m[1].split("."); return (d[d.length - 1] === "Value" ? "verdien til " + d.slice(0, -1).reverse().join(" inni ") : d.reverse().join(" inni ")); }
    if (e === "os.clock()") return "klokka akkurat nå, i sekunder";
    if (splitTopp(e, "..").length > 1) return splitTopp(e, "..").map(function (b) {
      var t = b.match(/^"(.*)"$/); return t ? "«" + t[1] + "»" : hva(b); }).join(" + ");
    if ((m = e.match(/^(\w+)\[(\w+)\]$/))) return "det som står ved " + m[2] + " i huskelista " + m[1];
    if ((m = e.match(/^(\w+):GetDataStore\("(\w+)"\)$/))) return "lageret som heter «" + m[2] + "»";
    if ((m = e.match(/^(\w+):GetAsync\("(\w+)"\)$/))) return "det som er lagret under «" + m[2] + "» i " + m[1];
    if ((m = e.match(/^\{(.*)\}$/))) return "en liten huskeliste med " + liste(delArgs(m[1]).map(function (d) { return d.split("=")[0].trim(); }));
    if ((m = e.match(/^(\w+)\.(\w+)\.Name$/))) return "navnet til " + m[2] + " som ligger i " + m[1];
    if ((m = e.match(/^(\w+)\.(\w+)\.(\w+)$/))) return m[3] + " inni " + m[2] + " inni " + m[1];
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
      return "et tilfeldig tall mellom " + hvaKort(a[0]) + " og " + hvaKort(a[1]);
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

  function hvaKort(x) { var m = x.match(/^#(\w+)$/); return m ? "antall ting i " + m[1] : x; }

  // Oversetter en betingelse (det mellom if og then) til et spørsmål.
  function ledd(x) {
    var m;
    x = x.trim();
    if ((m = x.match(/^Enum\.KeyCode\.(\w+)$/))) return "tasten " + m[1];
    if ((m = x.match(/^Enum\.(\w+)\.(\w+)$/))) return m[2];
    if ((m = x.match(/^(\w+)\.(\w+)$/)) && !/^(nil|true|false)$/.test(x)) return sin(m[1], m[2]);
    return x;
  }

  function sporsmal(b) {
    var m;
    b = b.trim();
    if ((m = b.match(/^(\w+)\[(\w+)\]\s*==\s*nil$/))) return m[2] + " ikke står i huskelista " + m[1];
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
    if ((m = b.match(/^(.+?)\s*==\s*(.+)$/))) return ledd(m[1]) + " er lik " + ledd(m[2]);
    if ((m = b.match(/^(.+?)\s*~=\s*(.+)$/))) return ledd(m[1]) + " ikke er lik " + ledd(m[2]);
    if ((m = b.match(/^(.+?)\s*>=\s*(.+)$/))) return ledd(m[1]) + " er minst " + ledd(m[2]);
    if ((m = b.match(/^(.+?)\s*<=\s*(.+)$/))) return ledd(m[1]) + " er høyst " + ledd(m[2]);
    if ((m = b.match(/^(.+?)\s*<\s*(.+)$/))) return ledd(m[1]) + " er mindre enn " + ledd(m[2]);
    if ((m = b.match(/^(.+?)\s*>\s*(.+)$/))) return m[1] + " er større enn " + m[2];
    if (/^\w+\.\w+$/.test(b)) return ledd(b) + " finnes";
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

    if ((m = l.match(/^function (\w+)\.(\w+)\((.*)\)$/))) {
      stabel.push({ type: "funksjon", navn: m[2] });
      var pp = delArgs(m[3]);
      return "Her starter en funksjon som heter " + m[2] + ", og den legges i verktøykassa " + m[1] + "." +
        (pp.length ? " Den får inn " + liste(pp) + " når den brukes." : "");
    }
    if ((m = l.match(/^table\.insert\((\w+), (.+)\)$/))) return "Legg " + hva(m[2]) + " til på slutten av lista " + m[1] + ".";
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
    if ((m = l.match(/^local (\w+), (\w+) = pcall\(function\(\)$/))) {
      stabel.push({ type: "anonym" });
      return "Prøv å kjøre funksjonen som starter her, uten at spillet krasjer hvis noe går galt. " + m[1] +
        " blir true hvis det gikk bra, og " + m[2] + " blir det funksjonen gir tilbake.";
    }
    if (l === "pcall(function()") {
      stabel.push({ type: "anonym" });
      return "Prøv å kjøre funksjonen som starter her, uten at spillet krasjer hvis noe går galt.";
    }
    if ((m = l.match(/^(\w+):UpdateAsync\("(\w+)", function\((\w+)\)$/))) {
      stabel.push({ type: "anonym" });
      return "Be " + m[1] + " om å oppdatere «" + m[2] + "». Funksjonen som starter her, får det som er lagret fra før (" + m[3] + "), og bestemmer hva som skal lagres i stedet.";
    }
    if (l === "end)") {
      stabel.pop();
      return "Her slutter funksjonen uten navn, og parentesen fra linja der den startet, lukkes.";
    }
    if ((m = l.match(/^(\w+)\[(\w+)\] = nil$/))) return "Visk ut " + m[2] + " fra huskelista " + m[1] + ".";
    if ((m = l.match(/^(\w+)\[(\w+)\] = (.+)$/))) return "Skriv inn i huskelista " + m[1] + ", ved " + m[2] + ": " + hva(m[3]) + ".";
    if (l === "return nil") return "Stopp funksjonen og gi tilbake ingenting (nil). Da blir ingenting endret.";
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
    if ((m = l.match(/^return (.+)$/))) return "Stopp funksjonen og gi tilbake " + hva(m[1]) + ".";
    if ((m = l.match(/^task\.wait\((.+)\)$/))) return "Vent " + sek(m[1]) + ". Ingenting skjer i dette skriptet imens.";
    if ((m = l.match(/^print\((.+)\)$/))) return beskrivPrint(m[1]);

    if ((m = l.match(/^local (\w+) = (.+)$/)))
      return "Lag en boks (variabel) som heter " + m[1] + ". Oppi den legger vi " + hva(m[2]) + ".";

    if ((m = l.match(/^([\w.]+)\.(\w+) -= (.+)$/)))
      return "Trekk " + m[3] + " fra " + sin(m[1], m[2]) + ".";
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
        case "Play": return "Start " + m[1] + ". Nå spilles den av.";
        case "Emit": return "Send ut " + a[0] + " partikler fra " + m[1] + " på én gang.";
        case "FireServer": return "Send en beskjed til serveren gjennom " + m[1] + ".";
        case "SetAsync": return "Lagre " + hva(a[1]) + " i " + m[1] + ", under " + hva(a[0]) + ".";
        case "PivotTo": return "Flytt hele " + m[1] + " til et nytt sted på én gang.";
        case "MoveTo": return "Be " + m[1] + " om å gå til stedet som ligger i boksen " + a[0] + ".";
        case "TakeDamage": return /^\d+$/.test(a[0]) ? "Ta " + a[0] + " liv fra figuren." : "Ta liv fra figuren. Hvor mye står i boksen " + a[0] + ".";
      }
      return "Bruk " + m[2] + " på " + m[1] + (a.length ? " med " + liste(a) : "") + ".";
    }
    if ((m = l.match(/^(\w+)\.(\w+)\((.*)\)$/))) {
      var aa = delArgs(m[3]);
      return "Bruk funksjonen " + m[2] + " fra verktøykassa " + m[1] + (aa.length ? " med " + liste(aa) : "") + ".";
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
    detaljer.className = "ds-details forklaring";
    detaljer.setAttribute("data-variant", "tinted");
    var knapp = document.createElement("summary");
    knapp.textContent = "Forklar hver linje";
    detaljer.appendChild(knapp);

    var innhold = document.createElement("div");
    var tabell = document.createElement("table");
    tabell.className = "ds-table";
    tabell.setAttribute("data-zebra", "true");
    tabell.innerHTML = "<thead><tr><th>Linje</th><th>Kode</th><th>Forklaring</th></tr></thead>";
    var tbody = document.createElement("tbody");
    linjer.forEach(function (l) {
      var tr = document.createElement("tr");
      var nr = document.createElement("td");
      nr.className = "linjenr";
      nr.textContent = l.nr;
      var kd = document.createElement("td");
      var k = document.createElement("code");
      k.textContent = l.kode.trim();
      kd.appendChild(k);
      var p = document.createElement("td");
      p.textContent = l.tekst;
      tr.appendChild(nr); tr.appendChild(kd); tr.appendChild(p);
      tbody.appendChild(tr);
    });
    tabell.appendChild(tbody);
    innhold.appendChild(tabell);
    detaljer.appendChild(innhold);

    var etter = blokk.closest(".skriv-selv") || blokk;
    etter.parentNode.insertBefore(detaljer, etter.nextSibling);
  });
})();
