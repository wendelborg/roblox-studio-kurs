---
utforsk: ModuleScript
permalink: /utforsk/modulescript/
---

## Hva er det?

I oppdrag 7 lagde du funksjonen `lagKloss`. Men hva om du vil bruke den i mange skript? Du vil ikke skrive den av hver gang.

Et **ModuleScript** er en verktøykasse med funksjoner som andre skript kan låne. Du skriver funksjonen én gang i ModuleScriptet, og så kan alle skript hente den med `require`.

<details class="ds-details enklere" data-variant="tinted" markdown="1"><summary>Dette ble for vanskelig – forklar enklere</summary>
<div markdown="1">
Et ModuleScript er som en kokebok på kjøkkenbenken. Alle i familien kan slå opp i den og lage den samme pannekaka, uten at hver person må skrive sin egen oppskrift.
</div>
</details>

## Hva kan du lage?

- En verktøykasse med `lagKloss`, `lagLava` og `lagMynt`
- Ett sted for alle reglene i spillet, som hvor mange mynter en ting koster
- Felles kode for alle powerups

## Prøv selv: Byggeklosser

1. Høyreklikk **ServerScriptService** og sett inn et **ModuleScript**. Gi det navnet `Byggeklosser`.
2. Skriv dette i ModuleScriptet:

<div class="skriv-selv" markdown="1">
```lua
local Byggeklosser = {}

function Byggeklosser.lagKloss(farge, storrelse, hoyde)
	local kloss = Instance.new("Part")
	kloss.BrickColor = BrickColor.new(farge)
	kloss.Size = Vector3.new(storrelse, storrelse, storrelse)
	kloss.Position = Vector3.new(0, hoyde, 0)
	kloss.Anchored = true
	kloss.Parent = workspace
	return kloss
end

return Byggeklosser
```
</div>

3. Lag et vanlig **Script** i ServerScriptService:

<div class="skriv-selv" markdown="1">
```lua
local Byggeklosser = require(script.Parent.Byggeklosser)

Byggeklosser.lagKloss("Really red", 4, 5)
Byggeklosser.lagKloss("Bright blue", 8, 15)
```
</div>

<div class="ds-card hva-skjer" data-variant="tinted" markdown="1">
### Hva skjer når du trykker Play?

1. ModuleScriptet lager en tom huskeliste som heter `Byggeklosser`.
2. Funksjonen `lagKloss` legges inn i huskelista.
3. `return Byggeklosser` gir hele verktøykassa til den som spør.
4. Det vanlige skriptet henter verktøykassa med `require` og bruker `lagKloss` to ganger.
</div>

## Utfordringer

- [ ] Legg til `Byggeklosser.lagLava(x, z)` i ModuleScriptet.
- [ ] Bruk Byggeklosser fra to forskjellige skript.
- [ ] Flytt ModuleScriptet til **ReplicatedStorage**. Da kan også LocalScript bruke det.
