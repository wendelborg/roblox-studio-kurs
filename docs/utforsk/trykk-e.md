---
utforsk: ProximityPrompt
permalink: /utforsk/trykk-e/
---

## Hva er det?

Har du sett en liten knapp dukke opp i et spill når du går nær en dør eller en kiste, med teksten «E Åpne»? Det er en **ProximityPrompt**. «Proximity» betyr nærhet. Knappen dukker bare opp når du står nær nok, og når du trykker på den, ringer en dørklokke i koden.

<details class="ds-details enklere" data-variant="tinted" markdown="1"><summary>Dette ble for vanskelig – forklar enklere</summary>
<div markdown="1">
Tenk på en ringeklokke ved en dør. Du ser den først når du står foran døra. Trykker du på den, skjer det noe inne i huset.

ProximityPrompt er en sånn ringeklokke i spillet ditt.
</div>
</details>

## Hva kan du lage?

- En skattekiste som åpner seg og gir mynter
- En dør du må trykke på for å åpne, i stedet for å gå inn i den
- En person (NPC) du kan snakke med
- En knapp som må holdes inne i tre sekunder, for eksempel for å låse opp en bombe-dør

## Prøv selv: Skattekista

1. Lag en kloss og gi den navnet `Kiste`. Sett **Anchored** på.
2. Høyreklikk Kiste og velg **Insert Object → ProximityPrompt**.
3. Klikk på ProximityPrompt. I Properties kan du endre **ActionText** til `Åpne` og **ObjectText** til `Skattekiste`.
4. Legg et Script inni Kiste.

<div class="skriv-selv" markdown="1">
```lua
local kiste = script.Parent
local knapp = kiste.ProximityPrompt

local function naarTrykket(spiller)
	print(spiller.Name .. " åpnet kista!")
	kiste.BrickColor = BrickColor.new("Bright yellow")
	knapp.Enabled = false
end

knapp.Triggered:Connect(naarTrykket)
```
</div>

<div class="ds-card hva-skjer" data-variant="tinted" markdown="1">
### Hva skjer når du trykker E?

1. Skriptet finner kista og knappen som ligger inni den.
2. Hendelsen `Triggered` er dørklokka. Den ringer når noen trykker på knappen, og den forteller hvilken spiller det var.
3. Kista blir gul, og det står i Output hvem som åpnet den.
4. `Enabled = false` skjuler knappen, så kista bare kan åpnes én gang.
</div>

## Utfordringer

- [ ] Gi spilleren 10 mynter når kista åpnes. Du trenger poengtavla fra oppdrag 8.
- [ ] Sett **HoldDuration** til 3. Nå må du holde inne knappen i tre sekunder!
- [ ] Bytt ut Touched-døra fra oppdrag 5 med en dør som åpnes med E.
