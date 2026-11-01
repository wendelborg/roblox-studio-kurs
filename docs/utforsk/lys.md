---
utforsk: Lighting
permalink: /utforsk/lys/
---

## Hva er det?

**Lighting** bestemmer lyset i hele verdenen din: om det er dag eller natt, hvor sterk sola er og hvilken farge lyset har. Du finner Lighting i Explorer.

Den viktigste egenskapen er **ClockTime**, som er klokka i spillet. Den går fra 0 til 24. 12 er midt på dagen, og 0 er midt på natta.

Vil du ha lys bare ett sted, for eksempel en lampe eller en fakkel, kan du legge en **PointLight** inni en kloss.

<details class="ds-details enklere" data-variant="tinted" markdown="1"><summary>Dette ble for vanskelig – forklar enklere</summary>
<div markdown="1">
Lighting er lysbryteren for hele verden. Du kan skru på sola, skru den av, eller la den gå ned sakte, som en solnedgang.
</div>
</details>

## Hva kan du lage?

- En skummel nattbane der bare noen lamper lyser
- En dag som blir til natt mens du spiller
- En hule som er mørk, med fakler på veggene
- Rødt lys når du nærmer deg lava

## Lek uten kode

1. Klikk på **Lighting** i Explorer.
2. Endre **ClockTime** til 0. Det blir natt!
3. Prøv **Brightness** og **Ambient** også.
4. Lag en kloss, høyreklikk den og velg **Insert Object → PointLight**. Endre **Range** og **Color**. Nå har du en lampe.

## Prøv selv: Dag og natt

Lag et Script i **ServerScriptService**.

<div class="skriv-selv" markdown="1">
```lua
local Lighting = game:GetService("Lighting")

while true do
	Lighting.ClockTime = (Lighting.ClockTime + 0.05) % 24
	task.wait(0.1)
end
```
</div>

<div class="ds-card hva-skjer" data-variant="tinted" markdown="1">
### Hva skjer når du trykker Play?

1. Skriptet henter Lighting.
2. Løkka går for alltid. Hver gang flytter den klokka litt fram.
3. `% 24` betyr «det som blir igjen når du deler på 24». Når klokka når 24, starter den på 0 igjen, akkurat som en ekte klokke.
4. Sola går opp og ned mens du spiller!
</div>

## Utfordringer

- [ ] Gjør dagen kortere eller lengre ved å endre `0.05`.
- [ ] Lag fakler: en tynn kloss med **Fire** og **PointLight** inni.
- [ ] Lag en hule der det blir natt når du går inn. Tips: `Touched` og `Lighting.ClockTime = 0`.
