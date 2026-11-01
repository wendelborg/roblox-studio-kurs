# Oppdrag 15: Har den! Del 6: Butikken

[← Oppdrag 14: Har den! Del 5: Poeng og runder](14-har-den-runder.md) · [Innhold](../README.md) · [Sluttprosjekt: Min egen obby →](16-sluttprosjekt.md)

> Barnets side for dette kapitlet: [wendelborg.github.io/roblox-studio-kurs/oppdrag/15/](https://wendelborg.github.io/roblox-studio-kurs/oppdrag/15/)

**Barnet lærer:** å lage en butikk med en enkel økonomi, å lese attributter som er laget i Properties, og å reagere når en attributt endrer seg.

**Forutsetning:** Oppdrag 14 med poengtavla, spill-løkka og venteområdet.

**Den store ideen:** I venteområdet står det bokser med en ProximityPrompt («trykk E»). Hver boks har to attributter laget i Properties: `Pris` og `Kraft`. Butikkskriptet sjekker tre regler før et kjøp: butikken er bare åpen mellom rundene, man må ha nok poeng, og man kan kjøpe én ting per runde. Kjøpet lagres som en attributt `Kjopt` på spilleren, en «kvittering». Når `RundeAktiv` blir `true`, får spilleren kraften i 20 sekunder.

**Nye ting:**

- **Attributter i Properties:** Helt nederst i Properties, under Attributes, kan man lage attributter med musa. Det viser barnet at det er de samme lappene som `SetAttribute` lager. Det er også en fin måte å skille data (pris) fra kode.
- **ProximityPrompt:** Står også i Utforsk («Trykk E»-knapper). `Triggered` gir spilleren som trykket.
- **`GetAttributeChangedSignal`:** Butikken trenger ikke vite noe om spill-løkka. Den reagerer bare når lappen `RundeAktiv` endrer seg. Dette er et godt eksempel på løs kobling mellom skript.
- **Rekkefølge i sjekker:** Poengene trekkes først når alle reglene er sjekket. Den første tippeoppgaven handler om dette.

**Detektivoppgaven** viser en ekte feil: Sakte-feltet fra oppdrag 11 setter `WalkSpeed` tilbake til 16 og sletter superfarten. To skript som skriver til samme verdi, er en klassisk feilkilde. En løsning er at sakte-feltet husker farten før det endrer den, og setter den tilbake etterpå.

**Robux:** Kurset bruker bare poeng. Butikker med ekte Robux bruker Developer Products og `MarketplaceService`, krever et publisert spill og innebærer ekte penger. Det bør være en bevisst beslutning hos den voksne, og hører ikke hjemme i et nybegynnerkurs. Snakk gjerne med barnet om hvordan spill bruker butikker for å få spillere til å bruke penger.

**Utfordringer:** En tredje vare (usynlighet), en dyrere og bedre vare (attributt `Tid`), vise kjøpet på skjermen, rask lading for frysepistolen og å fikse detektivoppgaven.

**Hemmelig ord å forklare tilbake:** Valuta

## Kilder

- [Roblox: ProximityPrompt](https://create.roblox.com/docs/ui/proximity-prompts)
- [Roblox: Attributes](https://create.roblox.com/docs/studio/properties#attributes)
- [Roblox: Developer products](https://create.roblox.com/docs/production/monetization/developer-products)

---

[← Oppdrag 14: Har den! Del 5: Poeng og runder](14-har-den-runder.md) · [Innhold](../README.md) · [Sluttprosjekt: Min egen obby →](16-sluttprosjekt.md)
