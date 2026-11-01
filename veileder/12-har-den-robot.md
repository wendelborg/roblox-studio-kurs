# Oppdrag 12: Har den! Del 3: Robotmotspiller

[← Oppdrag 11: Har den! Del 2: Powerups og felter](11-har-den-powerups.md) · [Innhold](../README.md) · [Oppdrag 13: Har den! Del 4: Frysepistol →](13-har-den-frysepistol.md)

> Barnets side for dette kapitlet: [wendelborg.github.io/roblox-studio-kurs/oppdrag/12/](https://wendelborg.github.io/roblox-studio-kurs/oppdrag/12/)

**Barnet lærer:** å lage en datastyrt figur (NPC) med en enkel «hjerne», og å utvide et eksisterende skript så det håndterer både spillere og roboter.

**Forutsetning:** Oppdrag 10 må være ferdig, med dommerskriptet `HarDen` i ServerScriptService. Oppdrag 11 er ikke nødvendig, men sakte-feltet derfra virker også med roboten.

**Den store ideen:** Roboten er en figur med Humanoid, akkurat som en spiller, men den styres av et skript. Hjernen har to regler: Har roboten den, jager den nærmeste spiller. Har en spiller den, løper roboten vekk. Nå kan barnet spille Har den alene, og det gjør testing mye enklere.

**Del A – lag roboten:** Fanen **Avatar → Rig Builder**, velg for eksempel **Block Rig**. Gi den navnet `Robot` og legg den rett i Workspace. Sjekk at ingen deler er Anchored.

**Del B – robotens hjerne (Script inni Robot):** Koden står i sin helhet på barnets side. Kjernen er en `while true`-løkke som tre ganger i sekundet:

1. finner nærmeste spiller (løkke over `Players:GetPlayers()` og avstand med `.Magnitude`)
2. sjekker attributten `HarDen` på roboten
3. går mot spilleren med `humanoid:MoveTo(...)`, eller mot et punkt 20 skritt i motsatt retning

Nye ting:

- `MoveTo` får en Humanoid til å gå et sted.
- `(a - b).Magnitude` er avstanden mellom to punkter. `(a - b).Unit * 20` er «20 skritt i retning fra b til a».
- `math.huge` er et uendelig stort tall, brukt som startverdi når vi leter etter den korteste avstanden. Dette er en klassisk «finn minste»-algoritme, og verdt å forklare med et eksempel: «Hvem i familien er kortest? Start med å si at den korteste er uendelig høy, og sammenlign én og én.»
- `rot:SetNetworkOwner(nil)` sørger for at serveren styrer roboten. Uten den kan roboten hakke når en spiller kommer nær.

**Del C – dommer 2.0:** Dommerskriptet fra oppdrag 10 jobber med *spillere*. Roboten er ikke en spiller, bare en figur. Den nye versjonen jobber derfor med *figurer*:

- `den` er nå figuren som har den.
- `settLapp` setter attributten både på figuren og eventuelt spilleren, slik at sakte-feltet fra oppdrag 11 fortsatt virker.
- En figur er «med i leken» hvis den har en Humanoid.
- Nederst følger dommeren med på roboten og gir den den fra start.

Barnet erstatter hele skriptet. Sammenlign gjerne den gamle og den nye versjonen side om side. Hva er likt, og hva er nytt? Det er god trening i å lese kode.

**Tippeoppgave:** «Hva skjer om roboten får `WalkSpeed = 30`?» (Den blir uslåelig. Snakk om spillbalanse: et spill skal være spennende, ikke umulig.)

**Utfordringer:**

- [ ] Finn en balansert fart.
- [ ] La roboten hoppe når den står fast.
- [ ] To roboter (mappe `Roboter` og løkke i dommeren).
- [ ] Roboten kan ta powerups.
- [ ] For spesielt interesserte: `PathfindingService`, så roboten går rundt vegger.

**Hemmelig ord å forklare tilbake:** NPC

---

[← Oppdrag 11: Har den! Del 2: Powerups og felter](11-har-den-powerups.md) · [Innhold](../README.md) · [Oppdrag 13: Har den! Del 4: Frysepistol →](13-har-den-frysepistol.md)
