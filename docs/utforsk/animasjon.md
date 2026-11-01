---
utforsk: Animation
permalink: /utforsk/animasjon/
---

## Hva er det?

En **animasjon** er en bevegelse for en figur: en dans, en vinking, et salto eller et superhelt-hopp. Du lager animasjoner i **Animation Editor**, som du finner under fanen **Avatar** i Studio.

En animasjon består av **keyframes**, bilder av hvordan figuren står på bestemte tidspunkter. Studio fyller inn bevegelsen mellom dem, akkurat som en tween.

<details class="enklere" markdown="1"><summary>Dette ble for vanskelig – forklar enklere</summary>
<div class="enkel-tekst" markdown="1">
Tenk på en flipbok der du tegner en figur på hver side. Når du blar fort, ser det ut som figuren beveger seg.

I Animation Editor setter du figuren i noen stillinger, og Studio lager flipboka for deg.
</div>
</details>

## Hva kan du lage?

- En seiersdans når du kommer i mål
- En robot i Har den! som vinker
- En vakt som går fram og tilbake og ser seg rundt

## Prøv selv: Lag en vinking

1. Gå til fanen **Avatar** og lag en figur med **Rig Builder**, for eksempel en **Block Rig**.
2. Åpne **Animation Editor** fra samme fane, og klikk på figuren. Gi animasjonen navnet `Vinking`.
3. Klikk på armen og drei den opp. Det blir den første keyframen.
4. Flytt den lille tidslinjen litt bort, og drei armen litt til siden. Det blir en ny keyframe.
5. Gjør det noen ganger til, og trykk på play-knappen i Animation Editor for å se vinkingen.
6. Slå på **Looping** hvis den skal gjenta seg.

## Bruk animasjonen i spillet

For å bruke animasjonen i spillet må den lagres hos Roblox. Velg **Publish to Roblox** i Animation Editor. Da får den et nummer, en **AnimationId**.

Dette LocalScriptet i **StarterPlayer → StarterCharacterScripts** får din egen figur til å spille animasjonen når den dukker opp:

<div class="skriv-selv" markdown="1">
```lua
local figur = script.Parent
local humanoid = figur:WaitForChild("Humanoid")
local animator = humanoid:WaitForChild("Animator")

local dans = Instance.new("Animation")
dans.AnimationId = "rbxassetid://SKRIV_NUMMERET_HER"

local spor = animator:LoadAnimation(dans)
spor:Play()
```
</div>

<div class="boks obs" markdown="1">
### Be en voksen om hjelp med å publisere

Animasjonen må lastes opp av den samme kontoen som eier spillet, ellers vil den ikke spille. Studio kan be om innlogging eller godkjenning.
</div>

## Utfordringer

- [ ] Lag en dans med minst fem keyframes.
- [ ] Spill dansen når noen rører målklossen.
- [ ] Gi roboten fra oppdrag 12 en egen vinke-animasjon.
