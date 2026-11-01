---
utforsk: ScreenGui
permalink: /utforsk/skjerm/
---

## Hva er det?

En **ScreenGui** er en flate som ligger oppå skjermen din, foran selve spillet. Der kan du legge tekst, bilder og knapper. Det kalles **GUI**, som står for «graphical user interface».

En ScreenGui legges i **StarterGui**. Når en spiller kommer inn i spillet, får hen sin egen kopi. Derfor styres alt på skjermen av et **LocalScript**, som kjører hos hver enkelt spiller.

<details class="ds-details enklere" data-variant="tinted" markdown="1"><summary>Dette ble for vanskelig – forklar enklere</summary>
<div markdown="1">
Tenk deg at du har et klistremerke på innsiden av brilleglasset ditt. Uansett hvor du ser, er klistremerket der.

En ScreenGui er et sånt klistremerke på skjermen. Den flytter seg ikke når du går rundt i spillet.
</div>
</details>

## Hva kan du lage?

- Din egen myntteller midt på skjermen
- En tidtaker som viser tida mens du løper obbyen
- En startmeny med en «Spill!»-knapp
- En melding som dukker opp: «Du har den!»

## Prøv selv: Myntteller på skjermen

Du trenger poengtavla med Mynter fra oppdrag 8.

1. Høyreklikk **StarterGui** og velg **Insert Object → ScreenGui**.
2. Høyreklikk ScreenGui og velg **Insert Object → TextLabel**. Nå ser du en tekstboks på skjermen.
3. Flytt og skaler tekstboksen dit du vil ha den. Slå på **TextScaled**, så teksten blir stor.
4. Høyreklikk TextLabel og velg **Insert Object → LocalScript**. Det må være et LocalScript, ikke et vanlig Script!

<div class="skriv-selv" markdown="1">
```lua
local Players = game:GetService("Players")
local spiller = Players.LocalPlayer
local tekst = script.Parent

local leaderstats = spiller:WaitForChild("leaderstats")
local mynter = leaderstats:WaitForChild("Mynter")

local function oppdater()
	tekst.Text = "Mynter: " .. mynter.Value
end

oppdater()
mynter.Changed:Connect(oppdater)
```
</div>

<div class="ds-card hva-skjer" data-variant="tinted" markdown="1">
### Hva skjer når du tar en mynt?

1. `Players.LocalPlayer` er deg, spilleren som sitter ved denne maskinen. Det finnes bare i et LocalScript.
2. Skriptet venter til poengtavla og Mynter finnes.
3. `oppdater` skriver antall mynter i tekstboksen. Den brukes én gang med en gang.
4. Hendelsen `Changed` ringer hver gang tallet endrer seg. Da oppdateres teksten igjen.
</div>

## Utfordringer

- [ ] Gi tekstboksen en kul farge og font med **TextColor3**, **BackgroundColor3** og **Font**.
- [ ] Vis tida fra rekordtavla i sluttprosjektet på skjermen også.
- [ ] Lag en **TextButton** som skriver «Hei!» i Output når du klikker. Tips: `knapp.Activated:Connect(...)`.
