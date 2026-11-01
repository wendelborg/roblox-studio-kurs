# Sluttprosjekt: Min egen obby

[← Oppdrag 12: Har den! Del 3: Robotmotspiller](12-har-den-robot.md) · [Innhold](../README.md) · [Bonus: Terreng →](14-bonus-terreng.md)

> Barnets side for dette kapitlet: [wendelborg.github.io/roblox-studio-kurs/sluttprosjekt/](https://wendelborg.github.io/roblox-studio-kurs/sluttprosjekt/)

Sluttprosjektet er en hinderløype barnet designer selv, der alt fra oppdrag 1–12 brukes. Sett av 3–4 økter. Her er det *barnet* som er sjefen, og du er kunden som tester.

**Økt 1 – tegn før du bygger:** På papir tegner barnet løypa fra start til mål. Hver hindring får et navn og en kort forklaring på hvilken kode den trenger. Dette er ekte spillutvikling: plan først.

**Krav til løypa (kryss av underveis):**

- [ ] En plattform som faller ned, eller noe som velter (oppdrag 3)
- [ ] Minst 3 lavaklosser (oppdrag 4)
- [ ] Én hemmelig dør eller snarvei (oppdrag 5)
- [ ] Én forsvinnende trapp eller blinkende plattform (oppdrag 6)
- [ ] Noe som er bygget med en egen funksjon (oppdrag 7)
- [ ] Mynter og poengtavle (oppdrag 8)
- [ ] En låst dør og en gjemt nøkkel (oppdrag 9)
- [ ] Et sjekkpunkt: sett inn en **SpawnLocation** midt i løypa
- [ ] En målkloss som skriver «Du vant!» og gir 50 mynter

**Bonusideer for den som vil ha mer:**

- En bevegelig plattform som går fram og tilbake med en `while`-løkke.
- En tidtaker som teller sekunder fra start til mål.
- En ny stat `Fullfort` som teller hvor mange ganger spilleren har kommet i mål.

**Siste økt – testdag:** Inviter noen i familien til å spille. Barnet ser på mens de spiller, uten å hjelpe. Hva var for vanskelig? Hva var kjedelig? Så får barnet fikse én ting. Dette lærer barnet at spill blir gode gjennom testing.

**Rekordtavle (raskeste tid):** Barnets side har et server-skript, `Tidtaker` i ServerScriptService, som tar tida fra en kloss som heter `Start` til en som heter `Maal`. Det viser hver spillers beste tid som **Tid** på poengtavla, og den raskeste av alle på en tavle med SurfaceGui og TextLabel. Nye ting:

- En tabell som huskeliste: `startTid[spiller] = os.clock()`. Når spilleren er i mål, settes den til `nil`. Det fungerer også som debounce.
- `os.clock()` er klokka på serveren. Forskjellen mellom start og mål er tida.
- `math.floor(tid * 100) / 100` runder av til to desimaler.
- Skriptet bruker `leaderstats` fra oppdrag 8 og venter på den med `WaitForChild`.

**Viktig å vite:** Rekorden ligger bare i serverens minne. En Roblox-server stenges når den siste spilleren går, og da er rekorden borte. Den deles heller ikke mellom flere servere. Derfor har siden en del «for de modige» som lagrer rekorden i **DataStore**:

- Spillet må være publisert, og for testing i Studio må **File → Experience Settings → Security → Enable Studio Access to API Services** være på.
- `GetAsync` henter rekorden når serveren starter.
- `UpdateAsync` lagrer en ny rekord bare hvis den er bedre enn den som allerede ligger i lageret. Det er riktig når flere servere kan sette rekord samtidig. `SetAsync` ville overskrevet blindt.
- `pcall` fanger feil, fordi DataStore-kall kan feile, for eksempel ved nettverksproblemer eller kvoter.

**Publisering:** Les kapitlet [Dele spillet med andre](17-dele-spillet.md) før dere publiserer. Kortversjonen: publiser privat og inviter noen få dere kjenner.

**Vil barnet mer?** Det finnes tre bonuser etter sluttprosjektet: [terreng](14-bonus-terreng.md), [3D-modell i Tinkercad](15-bonus-tinkercad.md) og [3D-modell i Blender](16-bonus-blender.md).

---

[← Oppdrag 12: Har den! Del 3: Robotmotspiller](12-har-den-robot.md) · [Innhold](../README.md) · [Bonus: Terreng →](14-bonus-terreng.md)
