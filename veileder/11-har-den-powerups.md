# Oppdrag 11: Har den! Del 2: Powerups og felter

[← Oppdrag 10: Har den! Del 1: Hvem har den?](10-har-den.md) · [Innhold](../README.md) · [Oppdrag 12: Har den! Del 3: Robotmotspiller →](12-har-den-robot.md)

> Barnets side for dette kapitlet: [wendelborg.github.io/roblox-studio-kurs/oppdrag/11/](https://wendelborg.github.io/roblox-studio-kurs/oppdrag/11/)

**Barnet lærer:** å lage powerups med egne bilder, å bruke tilfeldige tall, og å lage felter som bare rammer noen spillere.

**Forutsetning:** Dommerskriptet fra oppdrag 10.

**Den store ideen:** En powerup gir en superkraft en liten stund, og et sakte-felt gjør det motsatte. Sakte-feltet leser attributten `HarDen` som dommerskriptet setter. Det er første gang to skript barnet har laget, samarbeider om én felles opplysning. Delene kan tas i hvilken rekkefølge som helst.

**Powerups:** Et skript inni en liten kloss (Anchored på, CanCollide av). Variabelen `kraft` bestemmer om boksen gir fart (`WalkSpeed`) eller hopp (`JumpHeight`). Barnet kan kopiere boksen og bare endre ett ord. Det er en fin repetisjon av `if`/`elseif` og variabler.

Vi bruker `JumpHeight` (standard 7.2) i stedet for `JumpPower` fra oppdrag 4. Det virker uten at noe annet må slås på.

Teleport-boksen bruker `math.random(-50, 50)` for å finne et tilfeldig sted, og `figur:PivotTo(...)` for å flytte hele figuren dit.

**Egne bilder på powerups:** Barnet tegner et bilde (PNG), setter inn et **Decal** i boksen (Insert Object → Decal) og velger bildet under **Texture** i Properties. **Face** bestemmer hvilken side bildet havner på. Kopier Decal-et for flere sider. Vil barnet ikke tegne selv, ligger det fire ferdige eksempelbilder på barnets side (lyn, pil opp, portal og snegle). Bildene ligger også i `docs/assets/powerups/`.

- Bilder som lastes opp, blir sjekket av Roblox før de vises. Det kan ta litt tid.
- Opplasting kan kreve innlogging eller godkjenning på kontoen. Gjør dette sammen.
- Snakk om at bildet skal være tegnet selv, og ikke være et bilde av ekte mennesker.
- **Tippeoppgave:** «Blir bildet usynlig når boksen blir usynlig?» (Nei, Decal-et har sin egen Transparency. Det må koden også endre.)

**Sakte-feltet:** Et skript i en stor, gjennomsiktig kloss. Det leser `HarDen`-attributten og lar spilleren som har den løpe som vanlig. Alle andre får fart 5 i 2 sekunder.

**Detektivoppgave:** Ta fart-powerupen og gå inn i sakte-feltet. Superfarten forsvinner for tidlig, fordi to skript styrer samme verdi. Det er et ekte programmeringsproblem. La barnet foreslå løsninger. Én mulighet er en egen attributt for «har superfart» som sakte-feltet sjekker.

**Forklar sammen:**

- `math.random(a, b)` er en terning med tallene fra a til b.
- Sakte-feltet og dommeren «snakker sammen» gjennom attributten.

**Utfordringer:**

- [ ] Usynlighets-powerup.
- [ ] Et felt som bare den som har den kan gå gjennom.
- [ ] En powerup som velger kraft tilfeldig.

**Hemmelig ord å forklare tilbake:** Tilfeldig (random)

---

[← Oppdrag 10: Har den! Del 1: Hvem har den?](10-har-den.md) · [Innhold](../README.md) · [Oppdrag 12: Har den! Del 3: Robotmotspiller →](12-har-den-robot.md)
