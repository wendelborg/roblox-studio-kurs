# Oppdrag 10: Har den! Del 1: Hvem har den?

[← Oppdrag 9: Den gylne nøkkelen](09-den-gylne-nokkelen.md) · [Innhold](../README.md) · [Oppdrag 11: Har den! Del 2: Powerups og felter →](11-har-den-powerups.md)

> Barnets side for dette kapitlet: [wendelborg.github.io/roblox-studio-kurs/oppdrag/10/](https://wendelborg.github.io/roblox-studio-kurs/oppdrag/10/)

**Barnet lærer:** å lage et flerspillerspill med regler, og å bruke attributter som flere skript kan lese.

**Den store ideen:** Én spiller har den og lyser rødt. Rører hen en annen spiller, går den videre. Et dommerskript i ServerScriptService holder styr på hvem som har den, og klistrer en **attributt** (`HarDen = true`) på spilleren. Andre skript, som sakte-feltet, kan lese den samme attributten. Dette er første gang flere skript samarbeider om én felles opplysning.

Har den! er delt i fire oppdrag: 10 er selve leken, 11 er powerups og sakte-felt, 12 er en robot som spiller med barnet, og 13 er en frysepistol. Oppdrag 10 er det tyngste av de fire. Det er helt greit å bruke to økter på det.

**Testing:** Start en lokal test med 2 spillere i testmenyen øverst til venstre i Studio (der det står **Test**, ved siden av Play-knappen): velg **Server & Clients** og antall spillere, og trykk Play. Studio åpner da ett vindu per spiller. Det er tungt for maskinen, så lukk andre programmer. Enda morsommere: publiser spillet og spill sammen med en venn eller et søsken.

**Del A – dommerskriptet (Script i ServerScriptService, kalt `HarDen`):** Koden står i sin helhet på barnets side. Det er mye kode å skrive, så det er helt greit å dele den over to økter. Stopp gjerne etter funksjonen `giDen` og test med `print`.

Nye ting i koden:

- `for _, del in figur:GetChildren() do` går gjennom alle barna i figuren. Det er en ny type løkke. Forklar den som «for hver kroppsdel, gjør dette».
- `function(treff) ... end` er en funksjon uten navn. Den trengs fordi `Touched` bare gir oss det som ble rørt, mens vi også vil vite *hvem* sin kroppsdel det var.
- `SetAttribute` og `GetAttribute` setter og leser en lapp på spilleren.
- `Highlight` gir figuren et rødt lys.
- `or` og `and` kombinerer to ja/nei-spørsmål.

**Tippeoppgave:** «Hva skjer hvis du fjerner `task.wait(2)` og `kanTas`?» (Den går fram og tilbake mange ganger i sekundet, fordi kroppsdelene fortsetter å røre hverandre. Det er debounce fra oppdrag 8 igjen.)

**Del B – tilfeldige startsteder:** Ingen kode. Sett inn 4–5 SpawnLocation (fanen Model → Spawn). Roblox velger en tilfeldig av dem hver gang en spiller starter.

**Forklar sammen:**

- Attributten er en lapp alle skript kan lese. I oppdrag 11 bruker sakte-feltet den samme lappen.
- Dommerskriptet er på serveren. Det er bare serveren som bestemmer hvem som har den. Det er derfor ingen spiller kan jukse.

**Utfordringer:**

- [ ] Tell til tre: Den nye som har den, står stille i 3 sekunder (`WalkSpeed = 0`).
- [ ] Poengtavle som teller hvor mange ganger hver spiller har tatt noen.
- [ ] Gi den videre hvis den som har den, forlater spillet (`Players.PlayerRemoving`).

**Hemmelig ord å forklare tilbake:** Attributt

---

[← Oppdrag 9: Den gylne nøkkelen](09-den-gylne-nokkelen.md) · [Innhold](../README.md) · [Oppdrag 11: Har den! Del 2: Powerups og felter →](11-har-den-powerups.md)
