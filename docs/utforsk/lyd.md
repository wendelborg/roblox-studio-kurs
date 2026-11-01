---
utforsk: Sound
permalink: /utforsk/lyd/
---

## Hva er det?

En **Sound** er en lyd du legger inn i spillet: et «pling», et smell, en fottramp eller musikk. Lyder gjør et spill mye mer levende. Prøv å spille et spill uten lyd, så merker du det!

En lyd som ligger inni en kloss, høres best når du står nær klossen, akkurat som i virkeligheten. En lyd som ligger rett i **Workspace** eller i **SoundService**, høres like godt overalt. Det passer for bakgrunnsmusikk.

<details class="ds-details enklere" data-variant="tinted" markdown="1"><summary>Dette ble for vanskelig – forklar enklere</summary>
<div markdown="1">
En Sound er som en liten høyttaler du kan sette hvor du vil. Legger du den i en mynt, kommer lyden fra mynten. Koden bestemmer når høyttaleren skal spille.
</div>
</details>

## Hva kan du lage?

- Et «pling» når du tar en mynt
- Et skrik når du faller i lavaen
- Bakgrunnsmusikk som spiller hele tiden
- En dør som knirker når den åpner seg

## Finn en lyd

1. Åpne **Toolbox** (i menyen **Window**) og velg **Audio**.
2. Søk etter for eksempel `coin`, `pop` eller `jump`. Trykk på en lyd for å høre den.
3. Dra lyden du liker, inn på en kloss i Explorer. Da ligger det et **Sound**-objekt inni klossen.

Lydene i Toolbox kommer fra Roblox sin butikk for skapere (Creator Store). Der er det mange tusen gratis lyder og musikkspor.

## Prøv selv: Lydklossen

Lag en kloss med en lyd inni, og legg et Script i klossen.

<div class="skriv-selv" markdown="1">
```lua
local kloss = script.Parent
local lyd = kloss:WaitForChild("Sound")
local opptatt = false

local function naarNoeRorer(treff)
	if opptatt then
		return
	end
	opptatt = true
	lyd:Play()
	task.wait(1)
	opptatt = false
end

kloss.Touched:Connect(naarNoeRorer)
```
</div>

<div class="ds-card hva-skjer" data-variant="tinted" markdown="1">
### Hva skjer når du tråkker på klossen?

1. Skriptet finner lyden som ligger inni klossen.
2. Når noe rører klossen, spilles lyden med `Play`.
3. Debounce fra oppdrag 8 passer på at lyden ikke starter hundre ganger på én gang.
</div>

### Bakgrunnsmusikk uten kode

Dra et musikkspor fra Toolbox inn i **Workspace**. Klikk på det og slå på **Looped** og **Playing** i Properties. Da spiller musikken hele tiden, og starter på nytt når den er ferdig.

## Utfordringer

- [ ] Legg til et «pling» i myntskriptet fra oppdrag 8. Tips: `mynt.Sound:Play()`
- [ ] Endre **Volume** og **PlaybackSpeed** på en lyd. Hva skjer hvis PlaybackSpeed er 2? Eller 0.5?
- [ ] Gi lavaen et eget dødsskrik.
