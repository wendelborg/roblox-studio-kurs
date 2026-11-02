---
utforsk: Sky
permalink: /utforsk/himmel/
---

## Hva er det?

Himmelen i spillet ditt er en stor, usynlig kube rundt hele verden. På innsiden av kuben er det seks bilder: ett foran, ett bak, ett til venstre, ett til høyre, ett oppe og ett nede. Når de seks bildene passer sammen, ser det ut som en ekte himmel. Det heter en **skybox**.

I Roblox lager du skyboxen med en **Sky** som ligger inni **Lighting**. Ligger det ingen Sky der, får du den vanlige blå himmelen.

Sky bestemmer også om du ser sola, månen og stjernene, og hvor store de er.

<details class="ds-details enklere" data-variant="tinted" markdown="1"><summary>Dette ble for vanskelig – forklar enklere</summary>
<div markdown="1">
Tenk deg at du står inni en stor pappeske. På alle sidene av esken har noen malt himmel: blå himmel og skyer på veggene, og sola i taket.

Står du i midten og ser deg rundt, ser det ut som om du er ute. Det er en skybox! Sky-tingen i Roblox er malingen på esken.
</div>
</details>

## Hva kan du lage?

- En bane i verdensrommet med stjerner og planeter
- En skummel bane med rød himmel og stor måne
- En solnedgang over obbyen din
- En himmel som bytter når en runde starter i Har den!

## Lek uten kode

1. Åpne **Toolbox** (menyen **Window**) og søk etter `sky`, for eksempel `space sky` eller `sunset sky`.
2. Klikk på en himmel du liker. Den legger seg i **Lighting** av seg selv, og himmelen endrer seg med en gang.
3. Klikk på **Sky** i Explorer og se i Properties:
   - **StarCount** er hvor mange stjerner du ser om natta. Prøv 0 og 5000.
   - **SunAngularSize** og **MoonAngularSize** er hvor store sola og månen er. Prøv 60!
   - **CelestialBodiesShown** slår sola, månen og stjernene av og på.
4. Endre **ClockTime** i Lighting til 0. Nå ser du nattehimmelen og stjernene.

Ligger det to Sky i Lighting, vet ikke Roblox hvilken den skal bruke. Slett den gamle før du legger inn en ny.

<div class="ds-alert" data-color="danger" markdown="1">
### Pass på med Toolbox

Noen ting i Toolbox har skjulte skript inni. En Sky skal ikke ha noe inni seg. Ser du et skript inni den, slett hele Sky-en og velg en annen. Spør en voksen hvis du er usikker.
</div>

## Prøv selv: Himmelen som bytter

Du trenger to himler. Legg inn to fra Toolbox, og gi dem navnene `Dagshimmel` og `Natthimmel`. Flytt begge to inn i **ServerStorage**. Der er de gjemt, så ingen av dem vises ennå.

Lag så et Script i **ServerScriptService**.

<div class="skriv-selv" markdown="1">
```lua
local Lighting = game:GetService("Lighting")
local ServerStorage = game:GetService("ServerStorage")

local dag = ServerStorage:WaitForChild("Dagshimmel")
local natt = ServerStorage:WaitForChild("Natthimmel")

while true do
	natt.Parent = ServerStorage
	dag.Parent = Lighting
	task.wait(10)

	dag.Parent = ServerStorage
	natt.Parent = Lighting
	task.wait(10)
end
```
</div>

<div class="ds-card hva-skjer" data-variant="tinted" markdown="1">
### Hva skjer når du trykker Play?

1. Skriptet finner de to himlene i ServerStorage.
2. Løkka går for alltid.
3. Først flyttes nattehimmelen til ServerStorage, og dagshimmelen til Lighting. Nå ser du dagshimmelen.
4. Etter 10 sekunder bytter de plass. Nå ser du nattehimmelen.
5. Roblox bruker alltid den Sky-en som ligger i Lighting. Det er derfor det holder å flytte dem.
</div>

<div class="ds-alert gjett" data-color="warning" markdown="1">
### Gjett først!

Hva skjer hvis du fjerner linjen `natt.Parent = ServerStorage`?

<details class="ds-details" markdown="1"><summary>Se svaret</summary>
Etter den første runden ligger begge himlene i Lighting samtidig. Da må Roblox velge én av dem, og du vet ikke hvilken. Derfor må den ene alltid gjemmes før den andre vises.
</details>
</div>

## Tegn din egen himmel

Du kan lage din egen skybox med seks bilder du har tegnet. Bildene må passe sammen i kantene, og det er vanskeligere enn det høres ut. Start gjerne med én farge på hver side, for eksempel lilla vegger og et gult tak.

1. Tegn seks firkantede bilder av samme størrelse.
2. Last dem opp, akkurat som powerup-bildene i oppdrag 11. Gjør det sammen med en voksen.
3. Lag en Sky i Lighting (trykk **+** ved Lighting og velg **Sky**).
4. Lim inn bildene i **SkyboxFt** (foran), **SkyboxBk** (bak), **SkyboxLf** (venstre), **SkyboxRt** (høyre), **SkyboxUp** (opp) og **SkyboxDn** (ned).

## Utfordringer

- [ ] Gjør sola enorm og månen bitteliten.
- [ ] Bytt himmel når det blir natt i dag-og-natt-skriptet fra [Lys, dag og natt]({{ '/utforsk/lys/' | relative_url }}). Tips: Sjekk om `Lighting.ClockTime` er større enn 18.
- [ ] Bytt himmel når en runde starter i Har den! (oppdrag 14). Tips: Lytt på lappen `RundeAktiv`, akkurat som butikken i oppdrag 15.
