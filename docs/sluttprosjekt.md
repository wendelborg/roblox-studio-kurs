---
title: "Sluttprosjekt: Min egen obby"
permalink: /sluttprosjekt/
---

Nå er det **du** som er sjefen! Du skal lage din egen hinderløype, og der skal du bruke alt du har lært i oppdrag 1–12. Den voksne er kunden som tester spillet ditt.

Sett av 3–4 økter. Det trenger ikke bli ferdig på én dag.

<details class="enklere" markdown="1"><summary>Dette ble for vanskelig – hvor skal jeg begynne?</summary>
<div class="enkel-tekst" markdown="1">
Ikke prøv å lage alt på en gang. Gjør én ting om gangen:

1. Lag en start og et mål.
2. Legg til **én** lavakloss mellom dem. Test.
3. Legg til **én** ting til. Test igjen.

Alle løyper er bygget én kloss om gangen. Du kan kopiere kode fra dine egne oppdrag, for det er det ekte programmerere gjør også.
</div>
</details>

## Økt 1: Tegn før du bygger

Ta fram et ark og tegn løypa fra start til mål. Gi hver hindring et navn, og skriv kort hvilken kode den trenger. Ekte spillutviklere planlegger alltid før de bygger.

<div class="boks ide" markdown="1">
### Eksempel på en plan

**Start** → tre lavaklosser du må hoppe over → en trapp som forsvinner → en låst dør (nøkkelen er gjemt bak en stein) → mynter på taket → **Mål**
</div>

## Dette skal være med i løypa

- [ ] En plattform som faller ned, eller noe som velter (oppdrag 3)
- [ ] Minst 3 lavaklosser (oppdrag 4)
- [ ] Én hemmelig dør eller snarvei (oppdrag 5)
- [ ] Én forsvinnende trapp eller blinkende plattform (oppdrag 6)
- [ ] Noe som er bygget med en egen funksjon (oppdrag 7)
- [ ] Mynter og poengtavle (oppdrag 8)
- [ ] En låst dør og en gjemt nøkkel (oppdrag 9)
- [ ] Et sjekkpunkt midt i løypa, så du slipper å begynne helt på nytt når du dør (se under)
- [ ] En målkloss som skriver «Du vant!» og gir 50 mynter

<details markdown="1"><summary>Hint: målklossen</summary>
Målklossen ligner mye på mynten fra oppdrag 8. Bruk `Touched`, finn spilleren, legg til 50 i stedet for 1, og skriv «Du vant!» med `print`. Husk debounce, ellers får du mange hundre mynter!
</details>

## Sjekkpunkt: Start herfra neste gang

Lang løype? Da er det kjedelig å begynne helt fra start hver gang du dør. Et **sjekkpunkt** husker hvor langt du har kommet.

<div class="boks obs" markdown="1">
### Felle: Bare en SpawnLocation er ikke nok!

Har spillet flere **SpawnLocation**-er, velger Roblox en av dem **tilfeldig**. Det var smart i Har den!, men her ville du kanskje startet midt i løypa, eller havnet tilbake på start selv om du hadde nådd sjekkpunktet. Derfor trenger vi et lite skript som bestemmer hvor hver spiller skal starte.
</div>

<details class="enklere" markdown="1"><summary>Dette ble for vanskelig – forklar enklere</summary>
<div class="enkel-tekst" markdown="1">
Tenk på et brettspill der du flytter brikken din. Når du kommer til en stjerne på brettet, legger du en lapp der det står «Her begynner jeg igjen hvis jeg må gå tilbake».

Hver spiller har sin egen lapp. Skriptet flytter lappen din når du rører sjekkpunktet.
</div>
</details>

### Bygg det

1. Finn SpawnLocation-en som ligger der løypa starter, og gi den navnet `Startpunkt`.
2. Sett inn en ny **SpawnLocation** midt i løypa (fanen Model → Spawn). Gi den navnet `Sjekkpunkt`.
3. Sjekk at det ikke finnes flere SpawnLocation-er i Workspace. Slett eventuelle ekstra.

### Skriv koden

Lag et nytt Script i **ServerScriptService** og gi det navnet `Sjekkpunkter`.

<div class="skriv-selv" markdown="1">
```lua
local Players = game:GetService("Players")

local startpunkt = workspace:WaitForChild("Startpunkt")
local sjekkpunkt = workspace:WaitForChild("Sjekkpunkt")

local function nySpiller(spiller)
	spiller.RespawnLocation = startpunkt
end

local function naarSjekkpunktRores(treff)
	local spiller = Players:GetPlayerFromCharacter(treff.Parent)
	if spiller and spiller.RespawnLocation ~= sjekkpunkt then
		spiller.RespawnLocation = sjekkpunkt
		print(spiller.Name .. " nådde sjekkpunktet!")
	end
end

Players.PlayerAdded:Connect(nySpiller)
sjekkpunkt.Touched:Connect(naarSjekkpunktRores)
```
</div>

<div class="hva-skjer" markdown="1">
### Hva skjer når du spiller?

1. Når du kommer inn i spillet, setter skriptet **RespawnLocation** din til `Startpunkt`. Det er lappen som sier hvor du skal starte. Derfor starter alle ved start, ikke på et tilfeldig sted.
2. Du løper og rører sjekkpunktet. Skriptet flytter lappen din til `Sjekkpunkt` og skriver det i Output.
3. Du faller i lava (au!). Roblox ser på lappen din og sender deg tilbake til sjekkpunktet, ikke til start.
4. Sjekken `~= sjekkpunkt` gjør at meldingen bare kommer første gang. Det er en slags debounce.
</div>

<div class="boks gjett" markdown="1">
### Gjett først!

Du har nådd sjekkpunktet. En venn har ikke det. Dere faller begge i lavaen. Hvor havner dere?

<details markdown="1"><summary>Se svaret</summary>
Du havner på sjekkpunktet, og vennen din havner på start. Hver spiller har sin egen RespawnLocation, sin egen lapp.
</details>
</div>

**Utfordring:** Lag flere sjekkpunkter. Legg dem i en mappe som heter `Sjekkpunkter`, og bruk en løkke over `Sjekkpunkter:GetChildren()` som kobler `Touched` på hvert av dem, akkurat som kroppsdelene i Har den!. Tips: For at du ikke skal kunne gå *tilbake* til et tidligere sjekkpunkt, kan du gi dem navnene `1`, `2`, `3` og sammenligne tallene med `tonumber`.

## Rekordtavle: Hvem er raskest?

Nå skal obbyen din holde styr på hvem som kommer raskest i mål! Tida starter når du rører startklossen og stopper når du rører målklossen. Den beste tida vises på en tavle i spillet.

<details class="enklere" markdown="1"><summary>Dette ble for vanskelig – forklar enklere</summary>
<div class="enkel-tekst" markdown="1">
Tenk på en stoppeklokke i gymtimen. Læreren trykker «start» når du løper fra streken, og «stopp» når du er i mål. Den beste tida skrives på tavla.

Skriptet er læreren med stoppeklokka. Det husker når hver spiller startet, regner ut tida i mål og skriver rekorden på tavla.
</div>
</details>

### Bygg det

1. Gi startklossen i løypa navnet `Start`.
2. Gi målklossen navnet `Maal` (uten å).
3. Lag en stor, flat kloss som skal være rekordtavla, og gi den navnet `Rekordtavle`. Sett **Anchored** på.
4. Høyreklikk `Rekordtavle` og velg **Insert Object → SurfaceGui**. Høyreklikk SurfaceGui og velg **Insert Object → TextLabel**.
5. Klikk på TextLabel. I Properties setter du **Size** til `{1, 0},{1, 0}`, så teksten fyller hele tavla, og slår på **TextScaled**, så teksten blir stor.
6. Står teksten på feil side av tavla? Klikk på SurfaceGui og endre **Face**.

Skriptet bruker poengtavla fra oppdrag 8, så den må også være med i spillet.

### Skriv koden

Lag et nytt Script i **ServerScriptService** og gi det navnet `Tidtaker`.

<div class="skriv-selv" markdown="1">
```lua
local Players = game:GetService("Players")

local start = workspace:WaitForChild("Start")
local maal = workspace:WaitForChild("Maal")
local tavle = workspace:WaitForChild("Rekordtavle")
local tekst = tavle.SurfaceGui.TextLabel

local startTid = {}       -- huskeliste: når startet hver spiller?
local rekord = math.huge  -- den raskeste tida så langt
local rekordHolder = "ingen"

tekst.Text = "Ingen rekord ennå!"

local function nySpiller(spiller)
	local leaderstats = spiller:WaitForChild("leaderstats")
	local beste = Instance.new("NumberValue")
	beste.Name = "Tid"
	beste.Value = 0
	beste.Parent = leaderstats
end

local function naarStartRores(treff)
	local spiller = Players:GetPlayerFromCharacter(treff.Parent)
	if spiller then
		startTid[spiller] = os.clock()
	end
end

local function naarMaalRores(treff)
	local spiller = Players:GetPlayerFromCharacter(treff.Parent)
	if spiller == nil or startTid[spiller] == nil then
		return
	end

	local tid = os.clock() - startTid[spiller]
	startTid[spiller] = nil
	tid = math.floor(tid * 100) / 100
	print(spiller.Name .. " brukte " .. tid .. " sekunder")

	local beste = spiller.leaderstats.Tid
	if beste.Value == 0 or tid < beste.Value then
		beste.Value = tid
	end

	if tid < rekord then
		rekord = tid
		rekordHolder = spiller.Name
		tekst.Text = "Rekord: " .. rekord .. " sekunder av " .. rekordHolder
	end
end

Players.PlayerAdded:Connect(nySpiller)
start.Touched:Connect(naarStartRores)
maal.Touched:Connect(naarMaalRores)
```
</div>

<div class="hva-skjer" markdown="1">
### Hva skjer når du løper løypa?

1. Når du kommer inn i spillet, får du en ny verdi på poengtavla som heter **Tid**. Den starter på 0.
2. Du rører startklossen. Skriptet skriver ned klokkeslettet i huskelista `startTid`, ved siden av navnet ditt.
3. Du løper løypa. Skriptet gjør ingenting imens.
4. Du rører målklossen. Skriptet ser i huskelista når du startet, og regner ut: nå minus da = tida di.
5. Skriptet visker deg ut av huskelista. Da kan du ikke få en ny tid før du har vært innom start igjen. Det er debounce!
6. Tida rundes av til to desimaler og skrives i Output.
7. Er tida bedre enn din forrige beste, oppdateres **Tid** på poengtavla.
8. Er den bedre enn rekorden til **alle**, får du rekorden, og tavla viser navnet ditt!
</div>

<details class="enklere" markdown="1"><summary>Dette ble for vanskelig – forklar enklere</summary>
<div class="enkel-tekst" markdown="1">
`startTid` er en **huskeliste**, som en liste på kjøleskapet:

- Ola startet klokka 12.
- Kari startet klokka 15.

Når Ola kommer i mål klokka 40, regner skriptet 40 minus 12. Ola brukte 28 sekunder!

`math.huge` er et uendelig stort tall. Den første som kommer i mål, er alltid raskere enn uendelig, så den første tida blir alltid rekord.
</div>
</details>

<div class="boks gjett" markdown="1">
### Gjett først!

Hva skjer med rekorden hvis alle forlater spillet og du starter det igjen?

<details markdown="1"><summary>Se svaret</summary>
Den er borte! Når den siste spilleren går, slår Roblox av serveren, og alt i variablene forsvinner. Vil du at rekorden skal huskes for alltid, må du lagre den. Det lærer du i neste del.
</details>
</div>

### For de modige: Husk rekorden for alltid

Roblox har et lager som heter **DataStore**. Der kan du lagre ting som skal huskes, selv når ingen spiller.

<div class="boks obs" markdown="1">
### Gjør dette sammen med en voksen

- Spillet må være **publisert** (se Publisering lenger ned).
- For å teste i Studio må dere slå på **Enable Studio Access to API Services** under **File → Experience Settings → Security**.
</div>

Legg til dette i `Tidtaker`-skriptet. De to første linjene skal ligge øverst, rett under `local Players = …`:

<div class="skriv-selv" markdown="1">
```lua
local DataStoreService = game:GetService("DataStoreService")
local lager = DataStoreService:GetDataStore("Rekorder")
```
</div>

Denne biten skal ligge rett under `tekst.Text = "Ingen rekord ennå!"`. Den henter den gamle rekorden når serveren starter:

<div class="skriv-selv" markdown="1">
```lua
local ok, lagret = pcall(function()
	return lager:GetAsync("Raskeste")
end)

if ok and lagret then
	rekord = lagret.tid
	rekordHolder = lagret.navn
	tekst.Text = "Rekord: " .. rekord .. " sekunder av " .. rekordHolder
end
```
</div>

Og denne biten skal ligge inni `if tid < rekord then`, rett under `tekst.Text = …`. Den lagrer den nye rekorden:

<div class="skriv-selv" markdown="1">
```lua
pcall(function()
	lager:UpdateAsync("Raskeste", function(gammel)
		if gammel == nil or tid < gammel.tid then
			return { tid = tid, navn = spiller.Name }
		end
		return nil
	end)
end)
```
</div>

<div class="hva-skjer" markdown="1">
### Hva skjer nå?

1. Når serveren starter, spør skriptet lageret: «Har du en rekord som heter Raskeste?» Får det et svar, settes den på tavla.
2. Når noen setter ny rekord, ber skriptet lageret om å oppdatere den.
3. `UpdateAsync` sjekker først den gamle rekorden i lageret. Kanskje noen på en annen server har satt en enda bedre rekord i mellomtiden! Bare hvis den nye tida er bedre, lagres den.
4. `pcall` betyr «prøv, men ikke krasj hvis det går galt». Lageret ligger på Roblox sine maskiner, og av og til svarer det ikke.
</div>

## Vil du ha mer?

- [ ] En plattform som flytter seg fram og tilbake med en `while`-løkke.
- [ ] Vis tida på skjermen mens du løper. Se «Knapper og tekst på skjermen» under Utforsk videre på forsiden.
- [ ] Lagre hver spillers beste tid i DataStore også, med `spiller.UserId` som navn i lageret.
- [ ] En ny stat, `Fullfort`, som teller hvor mange ganger du har kommet i mål.

## Siste økt: Testdag

Inviter noen i familien til å spille løypa di. Se på mens de spiller, men **ikke hjelp dem**! Det er vanskeligere enn det høres ut.

Etterpå spør du:

- Hva var for vanskelig?
- Hva var kjedelig?
- Hva var mest gøy?

Så får du fikse én ting. Det er sånn alle gode spill blir laget: man tester, fikser og tester igjen.

## Publisering

Vil du at venner skal spille obbyen din på sine egne maskiner? Da må spillet publiseres. **Gjør det sammen med en voksen.** Den voksne har en egen forklaring på hvordan dere gjør det trygt.

## Bonusoppdrag

Når obbyen er ferdig, kan du prøve disse:

- [Lag din egen verden med terreng]({{ '/bonus-terreng/' | relative_url }})
- [Lag en 3D-modell i Tinkercad]({{ '/bonus-tinkercad/' | relative_url }})
- [Lag en 3D-modell i Blender]({{ '/bonus-blender/' | relative_url }})
