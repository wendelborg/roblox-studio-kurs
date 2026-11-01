---
title: "Bonus: 3D-modell i Blender"
permalink: /bonus-blender/
---

Har du prøvd Tinkercad og vil lage enda kulere modeller? Da er det tid for **Blender**! Dette er en bonus. Du gjør den bare hvis du har lyst.

## Den store ideen

I Tinkercad bygger du med ferdige former. I Blender kan du **forme alt selv**: dra, strekke, vri og glatte ut, nesten som leire. Det er derfor proffene bruker det.

Modellen du lager, lagres som en fil og hentes inn i Roblox. Der blir den en **MeshPart**, akkurat som Tinkercad-modellen.

<details class="enklere" markdown="1"><summary>Dette ble for vanskelig – forklar enklere</summary>
<div class="enkel-tekst" markdown="1">
Tinkercad er som Lego: du setter sammen ferdige biter.

Blender er som leire: du kan forme akkurat det du vil, men det tar litt lengre tid å lære.
</div>
</details>

## Del A: Bli kjent med Blender

**Blender** er et gratis 3D-program. Det er det samme programmet som ekte spillutviklere og filmskapere bruker! Blender har veldig mange knapper, men du trenger bare noen få av dem.

<div class="boks obs" markdown="1">
### Be en voksen om hjelp

- En voksen må laste ned og installere Blender fra **blender.org**. Du trenger ingen konto.
- Sett av god tid første gang, og gjør det gjerne sammen.
</div>

### De viktigste knappene

Hold musepekeren over 3D-vinduet når du trykker.

| Knapp | Hva den gjør |
| --- | --- |
| **Shift+A** | Legg til en ny form (Mesh → Cube, UV Sphere, Cylinder …) |
| **G** | Flytt |
| **S** | Skaler, altså gjør større eller mindre |
| **R** | Roter |
| **X** | Slett |
| **Ctrl+Z** (Mac: **Cmd+Z**) | Angre |

Trykker du **Z** rett etter **S**, **G** eller **R**, gjelder det bare opp og ned. **X** og **Y** gjelder bare til siden. Klikk med musa når du er fornøyd. Høyreklikk avbryter.

<details class="enklere" markdown="1"><summary>Jeg har ikke mus med hjul, hvordan snur jeg modellen?</summary>
<div class="enkel-tekst" markdown="1">
Oppe til høyre i 3D-vinduet er det et lite kors med fargede kuler. Klikk og dra i det for å snu deg rundt modellen. Klikk på en farget kule for å se rett fra siden eller ovenfra.

Bruker du en bærbar med styreplate, kan en voksen slå på **Emulate 3 Button Mouse** under **Edit → Preferences → Input**. Da kan du snu med **Alt** og venstre museknapp.
</div>
</details>

### Byggeoppgave: En sopp

1. Blender starter med en kube. Trykk **X** og slett den.
2. Trykk **Shift+A → Mesh → Cylinder**. Det blir stilken.
3. Trykk **S** og gjør den smalere. Trykk så **S**, **Z** og gjør den høyere.
4. Trykk **Shift+A → Mesh → UV Sphere**. Det blir hatten.
5. Trykk **S** og gjør den stor. Trykk så **S**, **Z** og gjør den flat.
6. Trykk **G**, **Z** og flytt hatten opp på toppen av stilken.
7. Marker begge: klikk på den ene, hold inne **Shift** og klikk på den andre. Velg **Object → Join** i menyen. Nå er de én modell.
8. Velg **Object → Shade Smooth**, så blir soppen glatt og fin.

### Lagre modellen for Roblox

1. Klikk på soppen så den er valgt.
2. Velg **File → Export → FBX (.fbx)**.
3. Huk av for **Selected Objects** til høyre, så bare soppen blir med.
4. Gi filen et navn og trykk **Export FBX**.


## Del B: Hent modellen inn i Roblox

1. I Roblox Studio velger du **File → Import 3D**.
2. Finn FBX-filen du lagret, og trykk **Import**.
3. Modellen dukker opp i verdenen din og i Explorer. Den er en **MeshPart**.
4. Er den altfor stor eller altfor liten? Bruk **Scale**-verktøyet i fanen Home.
5. Husk å sette **Anchored** på, ellers faller den ned!
6. Gi soppen farge med **Color** i Properties.

<div class="boks obs" markdown="1">
### Litt tålmodighet

Roblox sjekker alle modeller som lastes opp, akkurat som bilder. Det kan ta litt tid før den vises for andre spillere. Ber Studio om noe du ikke skjønner, så spør en voksen.
</div>

<div class="boks ide" markdown="1">
### Hold det enkelt

Roblox liker modeller som ikke er altfor detaljerte. Lager du noe veldig avansert i Blender, kan Roblox si at modellen er for stor. Enkle former ser ofte best ut i spill uansett!
</div>


## Del C: Sprettsoppen

Nå skal soppen din bli en sprettsopp! Når du rører den, blir den klemt sammen, og du kan hoppe superhøyt i 5 sekunder. Legg et Script inni soppen.

<div class="skriv-selv" markdown="1">
```lua
local sopp = script.Parent
local vanlig = sopp.Size
local opptatt = false

local function naarNoeRorer(treff)
	if opptatt then
		return
	end

	local humanoid = treff.Parent:FindFirstChild("Humanoid")
	if humanoid == nil then
		return
	end

	opptatt = true
	sopp.Size = vanlig * Vector3.new(1, 0.7, 1)   -- klem!
	humanoid.JumpHeight = 30
	task.wait(0.2)
	sopp.Size = vanlig

	task.wait(5)
	humanoid.JumpHeight = 7.2
	opptatt = false
end

sopp.Touched:Connect(naarNoeRorer)
```
</div>

<div class="hva-skjer" markdown="1">
### Hva skjer når du rører soppen?

1. Koden husker hvor stor soppen er fra starten, i variabelen `vanlig`.
2. Du rører soppen. Debounce passer på at det bare skjer én gang om gangen.
3. Soppen blir 30 % lavere i 0,2 sekunder. Det ser ut som den blir klemt!
4. Samtidig får du `JumpHeight = 30`. Vanlig er 7.2. Nå kan du hoppe superhøyt.
5. Etter 5 sekunder er hoppekraften borte, og soppen er klar igjen.
</div>

<details class="enklere" markdown="1"><summary>Dette ble for vanskelig – forklar enklere</summary>
<div class="enkel-tekst" markdown="1">
Sprettsoppen er nesten den samme som hopp-powerupen fra oppdrag 11. Forskjellen er at den ser ut som en sopp du har laget selv, og at den blir klemt flat et lite øyeblikk når du rører den.

`Vector3.new(1, 0.7, 1)` betyr: like bred, 70 % så høy, like dyp.
</div>
</details>

## Hva betyr ordene?

- **Mesh** er formen til en 3D-modell, laget av mange små flater.
- **FBX** er et filformat for 3D-modeller.
- **Join** slår sammen flere former til én.
- **Shade Smooth** gjør at modellen ser glatt ut i stedet for kantete.

## Utfordringer

- [ ] Lag tre sprettsopper i forskjellige farger og størrelser, og bygg en hoppebane.
- [ ] Lag en rakett i Blender: en sylinder, en kjegle (**Cone**) på toppen og tre små kuber som vinger.
- [ ] Bruk **Tab** i Blender for å gå inn i *Edit Mode*. Velg én side av en kube og trekk den ut med **E**. Hva skjer?
- [ ] Lag din egen powerup-modell til Har den! (oppdrag 11), og legg powerup-skriptet inni den.

<nav class="bla">
  <a href="{{ '/bonus-tinkercad/' | relative_url }}">← Bonus: Tinkercad</a>
  <a class="neste" href="{{ '/' | relative_url }}">Tilbake til alle oppdrag →</a>
</nav>
