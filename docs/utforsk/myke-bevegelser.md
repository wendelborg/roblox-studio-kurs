---
utforsk: TweenService
permalink: /utforsk/myke-bevegelser/
---

## Hva er det?

Når du flytter noe med kode, hopper det rett til det nye stedet. Med **TweenService** glir det i stedet mykt fra ett sted til et annet, så det ser ut som en film. Du kan også få farge, størrelse og gjennomsiktighet til å endre seg mykt.

Ordet «tween» kommer fra «in-between», altså alt som skjer *mellom* start og slutt.

<details class="enklere" markdown="1"><summary>Dette ble for vanskelig – forklar enklere</summary>
<div class="enkel-tekst" markdown="1">
Tenk på en tegnefilm. Tegneren lager bildet der figuren starter, og bildet der den slutter. Datamaskinen tegner alle bildene i mellom.

TweenService gjør det samme: Du sier hvor klossen skal ende, og den glir dit av seg selv.
</div>
</details>

## Hva kan du lage?

- En plattform som flyter fram og tilbake i obbyen
- En dør som glir opp i stedet for å forsvinne
- En mynt som snurrer og svever opp og ned
- En kloss som blinker sakte mellom to farger

## Prøv selv: Den flytende plattformen

Lag en flat kloss, sett **Anchored** på, og legg et Script inni den.

<div class="skriv-selv" markdown="1">
```lua
local TweenService = game:GetService("TweenService")
local plattform = script.Parent

local info = TweenInfo.new(3, Enum.EasingStyle.Sine, Enum.EasingDirection.InOut, -1, true)
local maal = { Position = plattform.Position + Vector3.new(0, 0, 20) }

local tween = TweenService:Create(plattform, info, maal)
tween:Play()
```
</div>

<div class="hva-skjer" markdown="1">
### Hva skjer når du trykker Play?

1. `TweenInfo` er oppskriften på bevegelsen: den tar 3 sekunder, starter og slutter mykt (Sine), gjentas for alltid (-1) og går tilbake igjen (true).
2. `maal` er en liten huskeliste som sier hvor plattformen skal ende: 20 skritt bortover.
3. `TweenService:Create` lager selve bevegelsen, og `Play` starter den.
4. Plattformen glir fram og tilbake for alltid.
</div>

<div class="boks obs" markdown="1">
### Står du fast på plattformen?

En plattform som er Anchored og flyttes med en tween, tar ikke alltid med seg spilleren som står på den. Prøv selv! Vil du at spilleren skal bli med, må plattformen flyttes med fysikk i stedet. Det er et godt prosjekt for de modige.
</div>

## Utfordringer

- [ ] Få plattformen til å gå opp og ned i stedet for bortover.
- [ ] Prøv andre stiler enn `Sine`, for eksempel `Bounce` eller `Elastic`.
- [ ] Lag en dør som glir opp i taket når du rører den. Tips: Lag tweenen inni Touched-funksjonen.
