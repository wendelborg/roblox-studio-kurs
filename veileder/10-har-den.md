# Oppdrag 10: Har den!

[← Oppdrag 9: Den gylne nøkkelen](09-den-gylne-nokkelen.md) · [Innhold](../README.md) · [Sluttprosjekt: Min egen obby →](11-sluttprosjekt.md)

> Barnets side for dette kapitlet: [wendelborg.github.io/roblox-studio-kurs/oppdrag/10/](https://wendelborg.github.io/roblox-studio-kurs/oppdrag/10/)

**Barnet lærer:** å lage et flerspillerspill med regler, attributter, tilfeldige tall, powerups med egne bilder og felter som bare rammer noen spillere.

**Den store ideen:** Én spiller har den og lyser rødt. Rører hen en annen spiller, går den videre. Et dommerskript i ServerScriptService holder styr på hvem som har den, og klistrer en **attributt** (`HarDen = true`) på spilleren. Andre skript, som sakte-feltet, kan lese den samme attributten. Dette er første gang flere skript samarbeider om én felles opplysning.

Dette er kursets sjefsnivå. Del det gjerne opp i fire økter, én per del. Del A må være først. Del B, C og D kan tas i hvilken rekkefølge som helst.

**Testing:** Under fanen **Test** kan dere starte en lokal test med 2 spillere. Studio åpner da ett vindu per spiller. Det er tungt for maskinen, så lukk andre programmer. Enda morsommere: publiser spillet og spill sammen med en venn eller et søsken.

**Del A – dommerskriptet (Script i ServerScriptService, kalt `HarDen`):** Koden står i sin helhet på barnets side. Det er mye kode å skrive, så det er helt greit å dele den over to økter. Stopp gjerne etter funksjonen `giDen` og test med `print`.

Nye ting i koden:

- `for _, del in figur:GetChildren() do` går gjennom alle barna i figuren. Det er en ny type løkke. Forklar den som «for hver kroppsdel, gjør dette».
- `function(treff) ... end` er en funksjon uten navn. Den trengs fordi `Touched` bare gir oss det som ble rørt, mens vi også vil vite *hvem* sin kroppsdel det var.
- `SetAttribute` og `GetAttribute` setter og leser en lapp på spilleren.
- `Highlight` gir figuren et rødt lys.
- `or` og `and` kombinerer to ja/nei-spørsmål.

**Tippeoppgave:** «Hva skjer hvis du fjerner `task.wait(2)` og `kanTas`?» (Den går fram og tilbake mange ganger i sekundet, fordi kroppsdelene fortsetter å røre hverandre. Det er debounce fra oppdrag 8 igjen.)

**Del B – tilfeldige startsteder:** Ingen kode. Sett inn 4–5 SpawnLocation (fanen Model → Spawn). Roblox velger en tilfeldig av dem hver gang en spiller starter.

**Del C – powerups:** Et skript inni en liten kloss (Anchored på, CanCollide av). Variabelen `kraft` bestemmer om boksen gir fart (`WalkSpeed`) eller hopp (`JumpHeight`). Barnet kan kopiere boksen og bare endre ett ord. Det er en fin repetisjon av `if`/`elseif` og variabler.

Vi bruker `JumpHeight` (standard 7.2) i stedet for `JumpPower` fra oppdrag 4. Det virker uten at noe annet må slås på.

Teleport-boksen bruker `math.random(-50, 50)` for å finne et tilfeldig sted, og `figur:PivotTo(...)` for å flytte hele figuren dit.

**Egne bilder på powerups:** Barnet tegner et bilde (PNG), setter inn et **Decal** i boksen (Insert Object → Decal) og velger bildet under **Texture** i Properties. **Face** bestemmer hvilken side bildet havner på. Kopier Decal-et for flere sider.

- Bilder som lastes opp, blir sjekket av Roblox før de vises. Det kan ta litt tid.
- Opplasting kan kreve innlogging eller godkjenning på kontoen. Gjør dette sammen.
- Snakk om at bildet skal være tegnet selv, og ikke være et bilde av ekte mennesker.
- **Tippeoppgave:** «Blir bildet usynlig når boksen blir usynlig?» (Nei, Decal-et har sin egen Transparency. Det må koden også endre.)

**Del D – sakte-feltet:** Et skript i en stor, gjennomsiktig kloss. Det leser `HarDen`-attributten og lar spilleren som har den løpe som vanlig. Alle andre får fart 5 i 2 sekunder.

**Detektivoppgave:** Ta fart-powerupen og gå inn i sakte-feltet. Superfarten forsvinner for tidlig, fordi to skript styrer samme verdi. Det er et ekte programmeringsproblem. La barnet foreslå løsninger. Én mulighet er en egen attributt for «har superfart» som sakte-feltet sjekker.

**Forklar sammen:**

- Attributten er en lapp alle skript kan lese. Det er slik dommeren og sakte-feltet «snakker sammen».
- `math.random(a, b)` er en terning med tallene fra a til b.
- Dommerskriptet er på serveren. Det er bare serveren som bestemmer hvem som har den. Det er derfor ingen spiller kan jukse.

**Utfordringer:**

- [ ] Tell til tre: Den nye som har den, står stille i 3 sekunder (`WalkSpeed = 0`).
- [ ] Poengtavle som teller hvor mange ganger hver spiller har tatt noen.
- [ ] Usynlighets-powerup.
- [ ] Gi den videre hvis den som har den, forlater spillet (`Players.PlayerRemoving`).
- [ ] Et felt som bare den som har den kan gå gjennom.

**Hemmelig ord å forklare tilbake:** Attributt

---

[← Oppdrag 9: Den gylne nøkkelen](09-den-gylne-nokkelen.md) · [Innhold](../README.md) · [Sluttprosjekt: Min egen obby →](11-sluttprosjekt.md)
