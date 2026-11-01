---
utforsk: ParticleEmitter
permalink: /utforsk/partikler/
---

## Hva er det?

En **ParticleEmitter** sender ut mange små bilder, kalt partikler, som flyr, svever og forsvinner. Med partikler kan du lage gnister, røyk, bobler, snø, stjerner, regn og magi.

Det finnes også tre ferdige effekter som er enda enklere: **Fire** (ild), **Smoke** (røyk) og **Sparkles** (glitter). Høyreklikk en kloss, velg **Insert Object** og prøv dem!

<details class="ds-details enklere" data-variant="tinted" markdown="1"><summary>Dette ble for vanskelig – forklar enklere</summary>
<div markdown="1">
En ParticleEmitter er som en liten fontene. I stedet for vann spruter den ut små bilder, for eksempel gnister eller bobler. Du bestemmer fargen, hvor fort de flyr og hvor mange det er.
</div>
</details>

## Hva kan du lage?

- Gnister som spruter fra lavaen
- Glitter rundt en powerup
- Grønne bobler i giftdammen fra terreng-bonusen
- Fyrverkeri når du kommer i mål

## Lek med innstillingene

Høyreklikk en kloss og velg **Insert Object → ParticleEmitter**. Klikk på den og prøv disse i Properties:

| Egenskap | Hva den gjør |
| --- | --- |
| **Color** | Fargen på partiklene |
| **Rate** | Hvor mange partikler som kommer hvert sekund |
| **Speed** | Hvor fort de flyr |
| **Lifetime** | Hvor lenge hver partikkel lever |
| **Size** | Hvor store de er |
| **Texture** | Bildet som brukes. Prøv et av eksempelbildene fra oppdrag 11! |

## Prøv selv: Gnister når du tråkker

Lag en kloss med en ParticleEmitter inni, og legg et Script i klossen.

<div class="skriv-selv" markdown="1">
```lua
local kloss = script.Parent
local gnister = kloss:WaitForChild("ParticleEmitter")
gnister.Enabled = false

local function naarNoeRorer(treff)
	gnister:Emit(30)
end

kloss.Touched:Connect(naarNoeRorer)
```
</div>

<div class="ds-card hva-skjer" data-variant="tinted" markdown="1">
### Hva skjer?

1. `Enabled = false` gjør at klossen ikke sender ut gnister av seg selv.
2. Når noe rører klossen, sender `Emit(30)` ut 30 gnister på én gang.
3. Fordi mange kroppsdeler rører klossen, kommer det mange gnister. Det ser ganske kult ut!
</div>

## Utfordringer

- [ ] Gi lavaen fra oppdrag 4 gnister som spruter hele tiden.
- [ ] Lag fyrverkeri i mål: mange farger og `Emit(200)`.
- [ ] Legg **Sparkles** på en powerup, så den glitrer.
