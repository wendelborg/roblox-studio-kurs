---
title: "Bonus: Lag din egen 3D-modell"
permalink: /bonus-3d/
---

Klosser er fine, men hva om du vil ha en pokal, et romskip eller en figur du har funnet på selv? Da lager du en **3D-modell**. Dette er en bonus. Du gjør den bare hvis du har lyst!

## Den store ideen

Det finnes to måter å lage egne former på:

1. **Inni Roblox Studio:** Du setter sammen klosser og skjærer bort biter. Det heter **solid modellering**.
2. **I et eget 3D-program:** Du tegner modellen i et program som **Tinkercad** og henter den inn i Roblox. Da blir den en **MeshPart**.

<details class="enklere" markdown="1"><summary>Dette ble for vanskelig – forklar enklere</summary>
<div class="enkel-tekst" markdown="1">
Tenk på en ostehøvel og en leirklump.

- **Solid modellering** er som å lime klosser sammen og skjære hull i dem.
- **Et 3D-program** er som å forme noe av leire på et annet bord, og så bære det inn i spillet ditt.
</div>
</details>

## Del A: Solid modellering i Studio

Her lager du en mynt med hull i midten, som en smultring.

1. Lag en **Cylinder** (velg den under **Part** i fanen Home). Gjør den flat og rund som en mynt.
2. Lag en mindre Cylinder og legg den midt i den første. Den skal bli hullet.
3. Velg den lille og trykk **Negate** i fanen **Model** (eller **Ctrl+Shift+N**, på Mac **Cmd+Shift+N**). Den blir gjennomsiktig og rød. Det betyr «skjær bort».
4. Marker begge og trykk **Union** (**Ctrl+Shift+G**, på Mac **Cmd+Shift+G**).
5. Nå har du én mynt med hull i!

<div class="boks gjett" markdown="1">
### Gjett først!

Hva skjer hvis du velger mynten og trykker **Separate** (**Ctrl+Shift+U**, på Mac **Cmd+Shift+U**)?

<details markdown="1"><summary>Se svaret</summary>
Den deles opp i de to sylindrene igjen. Solid modellering kan alltid angres. Du ødelegger aldri noe!
</details>
</div>

**Byggeoppgave:** Lag en pokal. Bruk en sylinder til foten, en tynn sylinder til stangen og en kule med en negativ kule inni til koppen.

## Del B: Lag en modell i Tinkercad

**Tinkercad** er et gratis 3D-program som virker i nettleseren, og det er laget for barn og nybegynnere. Du bygger med ferdige former, akkurat som i Studio, men med flere former å velge mellom.

<div class="boks obs" markdown="1">
### Be en voksen om hjelp

Du trenger en konto i Tinkercad. For barn må en voksen hjelpe til med å lage den.
</div>

1. Gå til **tinkercad.com**, logg inn og lag et nytt **3D Design**.
2. Dra former inn på arbeidsflaten. Gjør noen av dem til **Hole** for å skjære hull, akkurat som Negate i Studio.
3. Marker alt og trykk **Group** når modellen er ferdig.
4. Trykk **Export** og velg formatet **OBJ**. Da lagres modellen som en fil på datamaskinen.

## Del C: Hent modellen inn i Roblox

1. I Roblox Studio velger du **File → Import 3D**.
2. Finn OBJ-filen du lagret, og trykk **Import**.
3. Modellen dukker opp i verdenen din og i Explorer. Den er en **MeshPart**.
4. Er den altfor stor eller altfor liten? Bruk **Scale**-verktøyet i fanen Home.
5. Husk å sette **Anchored** på, ellers faller den ned!

<div class="boks obs" markdown="1">
### Litt tålmodighet

Roblox sjekker alle modeller som lastes opp, akkurat som bilder. Det kan ta litt tid før den vises for andre spillere. Ber Studio om noe du ikke skjønner, så spør en voksen.
</div>

## Del D: Bruk modellen i spillet

En MeshPart er en ekte del, akkurat som en kloss. Den har `Touched`, `Anchored`, `Transparency` og alt det andre du kjenner.

Gjør pokalen din til målet i obbyen! Legg et Script inni den:

<div class="skriv-selv" markdown="1">
```lua
local Players = game:GetService("Players")
local pokal = script.Parent
local opptatt = false

local function naarNoeRorer(treff)
	if opptatt then
		return
	end

	local spiller = Players:GetPlayerFromCharacter(treff.Parent)
	if spiller then
		opptatt = true
		print(spiller.Name .. " vant pokalen!")

		for i = 1, 36 do
			pokal.CFrame = pokal.CFrame * CFrame.Angles(0, math.rad(10), 0)
			task.wait(0.03)
		end

		opptatt = false
	end
end

pokal.Touched:Connect(naarNoeRorer)
```
</div>

<div class="hva-skjer" markdown="1">
### Hva skjer når du rører pokalen?

1. Debounce passer på at det bare skjer én gang om gangen, som i oppdrag 8.
2. Koden sjekker at det var en spiller, og skriver hvem som vant.
3. Løkka går 36 ganger. Hver gang snur pokalen seg 10 grader.
4. 36 × 10 = 360 grader. Det er én hel runde! Pokalen snurrer rundt for å feire.
</div>

<details class="enklere" markdown="1"><summary>Dette ble for vanskelig – forklar enklere</summary>
<div class="enkel-tekst" markdown="1">
Når du rører pokalen, snurrer den én runde rundt seg selv, som en ballerina. Den snur seg litt om gangen, 36 ganger, helt til den er tilbake der den startet.

`CFrame` er hvor noe er og hvilken vei det peker. `CFrame.Angles` snur det.
</div>
</details>

## Hva betyr ordene?

- **Union** setter flere deler sammen til én.
- **Negate** gjør en del om til et «hull» som skjærer bort.
- **MeshPart** er en del med en form du har laget selv.
- **OBJ** er et filformat for 3D-modeller.
- `math.rad(10)` gjør om 10 grader til et tall Roblox forstår.

## Utfordringer

- [ ] Lag en powerup-modell til Har den! (oppdrag 10) og legg powerup-skriptet inni den.
- [ ] Få pokalen til å snurre for alltid med en `while`-løkke.
- [ ] Lag en modell av deg selv, kjæledyret ditt eller drømmebilen din i Tinkercad.
- [ ] Gi modellen din en farge og et materiale i Properties (`Color` og `Material`).

<nav class="bla">
  <a href="{{ '/bonus-terreng/' | relative_url }}">← Bonus: Terreng</a>
  <a class="neste" href="{{ '/' | relative_url }}">Tilbake til alle oppdrag →</a>
</nav>
