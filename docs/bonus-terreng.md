---
title: "Bonus: Lag din egen verden med terreng"
permalink: /bonus-terreng/
---

Til nå har alt i verdenen din vært klosser. Nå skal du lage **terreng**: fjell, daler, innsjøer, huler og strender. Dette er en bonus. Du gjør den bare hvis du har lyst!

## Den store ideen

Terreng er ikke klosser. Det er som **leire** du kan forme med en pensel: Du kan bygge det opp, grave det bort, glatte det ut og male det med gress, sand, stein, snø eller vann.

Alt terreng ligger i én ting i Explorer: **Workspace → Terrain**.

<details class="enklere" markdown="1"><summary>Dette ble for vanskelig – forklar enklere</summary>
<div class="enkel-tekst" markdown="1">
Tenk på en sandkasse. Du kan lage en haug, grave et hull, klappe sanden flat og helle vann i en grop.

Terrengverktøyet i Roblox er en digital sandkasse. Du bruker musa i stedet for spaden.
</div>
</details>

## Del A: La Roblox lage en verden

1. Åpne **Terrain Editor**. Du finner den under fanen **Home** eller **Model**.
2. Velg **Generate**. Her kan du velge hvor stor verdenen skal være, og hva slags landskap du vil ha: fjell, sletter, ørken, snø og mer.
3. Trykk **Generate** og se verdenen vokse fram!

Liker du den ikke? Trykk **Ctrl+Z** (på Mac: **Cmd+Z**) for å angre, eller bruk **Clear** for å slette alt terreng og prøve på nytt.

## Del B: Form landskapet selv

I Terrain Editor finner du penselverktøy. De heter litt forskjellig i ulike versjoner av Studio, men disse finnes nesten alltid:

| Verktøy | Hva det gjør |
| --- | --- |
| **Add** eller **Draw** | Bygger opp terreng, som å legge på mer leire |
| **Subtract** | Graver bort terreng, perfekt for huler og tunneler |
| **Grow** og **Erode** | Gjør bakker høyere eller lavere, litt etter litt |
| **Smooth** | Glatter ut, så det ser naturlig ut |
| **Flatten** | Gjør bakken helt flat, fint når du skal bygge |
| **Paint** | Maler terrenget med et annet materiale |
| **Sea Level** | Fyller lavt terreng med vann |

For hvert verktøy kan du velge **størrelse** (hvor stor penselen er) og **styrke** (hvor mye den gjør hver gang).

<div class="boks gjett" markdown="1">
### Gjett først!

Lag en innsjø og gå ut i vannet. Hva skjer med figuren din?

<details markdown="1"><summary>Se svaret</summary>
Figuren begynner å svømme! Vann i terreng er ekte vann i Roblox. Du kan dykke med mellomromstasten og svømme opp igjen.
</details>
</div>

### Byggeoppgave: Min øy

1. Bruk **Sea Level** eller **Paint** med vann for å lage et hav.
2. Bygg en øy med **Add**. Mal stranda med **Sand** og toppen med **Grass**.
3. Lag et fjell med **Snow** på toppen.
4. Grav en hule inn i fjellet med **Subtract**.
5. Glatt ut det hele med **Smooth**.

## Del C: Terreng med kode

Du kan også lage terreng med kode, og da kan du bruke tilfeldige tall fra oppdrag 11! Lag et Script i **ServerScriptService**.

<div class="skriv-selv" markdown="1">
```lua
local terreng = workspace.Terrain

-- et stort, flatt hav
terreng:FillBlock(CFrame.new(0, -2, 0), Vector3.new(500, 8, 500), Enum.Material.Water)

-- ti øyer på tilfeldige steder
for i = 1, 10 do
	local x = math.random(-200, 200)
	local z = math.random(-200, 200)
	local storrelse = math.random(8, 25)

	terreng:FillBall(Vector3.new(x, 0, z), storrelse, Enum.Material.Grass)
	terreng:FillBall(Vector3.new(x, storrelse - 4, z), 4, Enum.Material.Snow)
end
```
</div>

<div class="hva-skjer" markdown="1">
### Hva skjer når du trykker Play?

1. `FillBlock` fyller en stor firkantet boks med vann. Det blir havet.
2. Løkka går ti ganger, akkurat som i oppdrag 6.
3. Hver gang finner den et tilfeldig sted (`x` og `z`) og en tilfeldig størrelse.
4. `FillBall` fyller en kule med gress der. Halve kula stikker opp av havet og blir en øy.
5. En liten snøkule legges på toppen av øya.
6. Hver gang du trykker Play, får du en ny verden!
</div>

<details class="enklere" markdown="1"><summary>Dette ble for vanskelig – forklar enklere</summary>
<div class="enkel-tekst" markdown="1">
Koden er som en robot med en bøtte:

1. Først heller den ut et helt hav.
2. Så kaster den ti gressballer ut i havet, på steder den velger helt tilfeldig.
3. Til slutt legger den litt snø på toppen av hver ball.

Fordi stedene er tilfeldige, ser verdenen forskjellig ut hver gang.
</div>
</details>

## Del D: Den giftige dammen

Nå skal du lage en dam med grønt, giftig vann. Den som bader i den, mister litt og litt liv. Pass på!

### Bygg dammen

1. Grav en grop med **Subtract** og fyll den med vann. Bruk **Sea Level** eller mal med **Water**.
2. Klikk på **Terrain** i Explorer og finn **WaterColor** i Properties. Gjør vannet giftgrønt!
3. Lag en kloss som dekker hele dammen, fra bunnen og litt opp over vannet. Gi den navnet `Gift`.
4. Sett **Anchored** på, **CanCollide** av og **Transparency** til 1. Nå er den en usynlig giftsone.
5. Legg et Script inni `Gift`.

<div class="boks obs" markdown="1">
### Vannfargen gjelder alt vann

`WaterColor` endrer fargen på **alt** vannet i verdenen din, også havet. Vil du ha vanlig blått vann et annet sted? Da kan du lage dammen av et annet materiale i stedet, for eksempel **Mud**, eller la den usynlige giftsonen gjøre jobben alene.
</div>

<div class="skriv-selv" markdown="1">
```lua
local gift = script.Parent   -- den usynlige klossen over dammen
local skade = 5              -- hvor mye liv du mister hver gang

while true do
	local deler = workspace:GetPartsInPart(gift)

	for _, del in deler do
		if del.Name == "HumanoidRootPart" then
			local humanoid = del.Parent:FindFirstChild("Humanoid")
			if humanoid then
				humanoid:TakeDamage(skade)
			end
		end
	end

	task.wait(0.5)
end
```
</div>

<div class="hva-skjer" markdown="1">
### Hva skjer når du hopper uti?

1. Løkka går for alltid, to ganger i sekundet.
2. `GetPartsInPart` spør: «Hvilke deler er inni giftsonen akkurat nå?» Svaret er en liste.
3. Løkka går gjennom lista, del for del, akkurat som i Har den! (oppdrag 10).
4. Er delen en **HumanoidRootPart**, altså midten av en figur, er det noen som bader!
5. `TakeDamage(5)` tar 5 liv fra den som bader.
6. Etter et halvt sekund sjekker løkka igjen. Blir du i vannet, mister du 5 liv til, og 5 til …
</div>

<details class="enklere" markdown="1"><summary>Dette ble for vanskelig – forklar enklere</summary>
<div class="enkel-tekst" markdown="1">
Tenk på en badevakt som ser på dammen to ganger i sekundet og roper: «Hvem er i vannet nå?»

Alle som er i vannet, mister litt liv. Kommer du deg opp i tide, går det bra. Blir du for lenge, er du ute!

Vi sjekker bare **HumanoidRootPart**, den usynlige midten av figuren. Ellers ville du mistet liv én gang for hver arm, hvert bein og hver fot!
</div>
</details>

<div class="boks gjett" markdown="1">
### Gjett først!

Du starter med 100 liv. Hvor mange sekunder kan du bade før du er ute?

<details markdown="1"><summary>Se svaret</summary>
Cirka 10 sekunder. Du mister 5 liv to ganger i sekundet, det blir 10 liv i sekundet. 100 delt på 10 er 10. Kanskje litt lenger, fordi Roblox gir deg litt liv tilbake av seg selv.
</details>
</div>

## Hva betyr ordene?

- **Terrain** er alt terrenget i verdenen din.
- `FillBlock` fyller en boks med et materiale. `FillBall` fyller en kule.
- `GetPartsInPart` gir deg en liste over alle deler som er inni en kloss.
- `TakeDamage` tar liv fra en Humanoid.
- `WaterColor` er fargen på vannet i terrenget.
- `Enum.Material.Grass` er materialet. Prøv også `Sand`, `Rock`, `Snow`, `Water` og `CrackedLava`.

## Utfordringer

- [ ] Bygg obbyen din på en øy, med havet rundt. Faller man av, havner man i vannet.
- [ ] Lag en vulkan: et fjell av `Rock` med `CrackedLava` på toppen.
- [ ] Endre koden så det blir 30 små øyer i stedet for 10 store.
- [ ] Lag en tunnel gjennom et fjell med **Subtract**, og gjem en mynt inni.
- [ ] Gjør dammen farligere eller snillere ved å endre `skade`. Hva er gøyest?
- [ ] Legg en **ParticleEmitter** i `Gift` og lag grønne bobler som stiger opp av dammen.
- [ ] Lag en helbredende kilde i stedet: bytt `TakeDamage(skade)` med `humanoid.Health += 5`.

<nav class="bla">
  <a href="{{ '/sluttprosjekt/' | relative_url }}">← Sluttprosjekt</a>
  <a class="neste" href="{{ '/bonus-tinkercad/' | relative_url }}">Bonus: Tinkercad →</a>
</nav>
