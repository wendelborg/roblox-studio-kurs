---
utforsk: table
permalink: /utforsk/tabeller/
---

## Hva er det?

En vanlig variabel er en boks med én ting i. En **tabell** er en boks med mange ting i. I kurset har vi kalt den en **huskeliste**.

Det finnes to slags tabeller:

- **Lister**, der tingene står i rekkefølge: `{ "rød", "blå", "grønn" }`. Den første er nummer 1, den andre nummer 2 og så videre.
- **Oppslag**, der hver ting har et navn: `{ tid = 12, navn = "Ola" }`. Den så du i rekordtavla i sluttprosjektet.

<details class="ds-details enklere" data-variant="tinted" markdown="1"><summary>Dette ble for vanskelig – forklar enklere</summary>
<div markdown="1">
En liste er som en handleliste: melk, brød, egg. Du kan spørre «Hva står på plass nummer 2?» og få svaret «brød».

Et oppslag er som en navneskilt-vegg: Ved navnet «Ola» står det 12.
</div>
</details>

## Hva kan du lage?

- En liste over farger som en kloss velger tilfeldig fra
- En liste over alle powerups i spillet
- En toppliste med de fem beste tidene

## Prøv selv: Tilfeldig farge fra lista

Lag en kloss med et Script inni.

<div class="skriv-selv" markdown="1">
```lua
local farger = { "Really red", "Bright blue", "Lime green", "New Yeller" }

print("Lista har " .. #farger .. " farger")

for _, farge in farger do
	print(farge)
end

table.insert(farger, "Hot pink")

local kloss = script.Parent
local tall = math.random(1, #farger)
kloss.BrickColor = BrickColor.new(farger[tall])
```
</div>

<div class="ds-card hva-skjer" data-variant="tinted" markdown="1">
### Hva skjer når du trykker Play?

1. Skriptet lager en liste med fire farger.
2. `#farger` betyr «hvor mange ting er det i lista». Svaret er 4.
3. Løkka går gjennom lista og skriver hver farge i Output.
4. `table.insert` legger til en farge til på slutten av lista. Nå er det 5.
5. `math.random(1, #farger)` velger et tilfeldig tall fra 1 til 5, og klossen får fargen på den plassen i lista.
</div>

## Utfordringer

- [ ] Lag en liste med navn på powerups, og velg en tilfeldig når noen tar en powerup-boks.
- [ ] Lag en liste over alle mynter i spillet med `workspace.Mynter:GetChildren()`, og skriv hvor mange det er.
- [ ] Lag en toppliste: et oppslag der navnet er spilleren og verdien er tida.
