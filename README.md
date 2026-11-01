# Roblox-koding: fra «hæ?» til eget spill

## Om kurset

Åtte oppdrag på 45–60 minutter tar ham fra å endre en kloss til å bygge sin egen obby med poeng, feller og mål. Hvert oppdrag gir noe som virker i spillet med en gang, men målet er at han skal skjønne *hvorfor* det virker.

**Slik kjøres en økt (for deg som voksen):**

1. **Lek først (5 min):** Han tester ferdig oppførsel i spillet eller leser oppdraget høyt.
2. **Tipp før du kjører (5 min):** Han gjetter hva koden vil gjøre før han trykker Play. Feil gjetning er gull – det er der forståelsen bygges.
3. **Skriv selv (20–30 min):** Han skriver koden selv, ikke kopierer. Skrivefeil og feilmeldinger er en del av læringen.
4. **Endre og ødelegg (10 min):** «Hva skjer hvis du bytter 5 med 50?» Hvert oppdrag har slike utfordringer.
5. **Forklar tilbake (2 min):** Han forklarer deg ett nytt ord med egne ord. Kan han det, sitter det.

**Tre regler som gjør det gøy:**

- Han eier tastaturet. Du peker og spør, men skriver ikke for ham.
- Han får lov til å pynte, tulle og gjøre spillet sitt rart. Eierskap gir motivasjon.
- Stopp mens det fortsatt er gøy. Heller én økt for kort enn én for lang.

**Oppsett:**

- Last ned Roblox Studio fra create.roblox.com og logg inn med kontoen hans.
- Lag et nytt **Baseplate**-spill. Lagre det med et navn han velger selv.
- Åpne vinduene **Explorer**, **Properties** og **Output** under fanen **View**. Disse tre skal alltid være åpne.
- Koden i Roblox heter **Luau**. Den er laget for å være lett å lese, nesten som engelsk.

## Oppdrag 1: Hei, verden!

**Han lærer:** at et spill er en stor familie av ting, og at et skript er en beskjed til datamaskinen.

**Den store ideen:** Alt i Explorer henger sammen som et slektstre. En kloss (Part) som ligger i Workspace er **barn** av Workspace. Workspace er **forelder** til klossen. Et skript inni klossen kan si `script.Parent` og mener da «klossen jeg bor i».

**Steg for steg:**

1. Sett inn en Part (fanen Home → Part). Gi den navnet `Magikloss` i Explorer.
2. Høyreklikk Magikloss → Insert Object → **Script**.
3. Slett det som står der og skriv:

```lua
print("Hei! Jeg er en magisk kloss!")
print("Jeg heter " .. script.Parent.Name)
```

4. Trykk Play og se i Output-vinduet.

**Forklar sammen:**

- `print` er robotens munn. Den sier ting i Output, ikke i selve spillet.
- Tekst står i anførselstegn. Det kalles en **string**.
- `..` limer to tekster sammen.
- `script.Parent.Name` leses fra venstre: «dette skriptet → forelderen → navnet».

**Utfordringer:**

- [ ] Endre navnet på klossen i Explorer. Hva skriver skriptet nå?
- [ ] Flytt skriptet slik at det ligger rett i Workspace. Hva blir `script.Parent` nå?
- [ ] Fjern ett anførselstegn med vilje. Les den røde feilmeldingen sammen. Hvilket linjenummer peker den på?

**Hemmelig ord å forklare tilbake:** Parent

## Oppdrag 2: Trylleformler

**Han lærer:** variabler (navngitte bokser) og egenskaper (det som står i Properties-vinduet).

**Den store ideen:** Alt du kan endre i Properties-vinduet med musa, kan koden også endre. En **variabel** er en boks med navnelapp som vi legger noe i, så vi slipper å skrive det samme om og om igjen.

**Kode (i et Script inni Magikloss):**

```lua
local kloss = script.Parent

kloss.BrickColor = BrickColor.new("Really red")
kloss.Size = Vector3.new(10, 2, 10)
kloss.Transparency = 0.5
kloss.Anchored = true

task.wait(3)

kloss.BrickColor = BrickColor.new("Lime green")
print("Pang! Klossen byttet farge.")
```

**Forklar sammen:**

- `local kloss = ...` betyr «lag en boks som heter kloss, og legg klossen oppi».
- Punktum betyr «sin»: `kloss.Size` = «klossens størrelse».
- `Vector3.new(10, 2, 10)` er tre tall: bredde, høyde, dybde.
- `true` og `false` er ja og nei. De kalles **boolean**.
- `task.wait(3)` sier «vent 3 sekunder».

**Lekeoppgave før koding:** Klikk på klossen og endre Transparency i Properties med hånden. Spør: «Hvilket tall gjør den usynlig?» Så lar han koden gjøre det samme.

**Utfordringer:**

- [ ] Lag en kloss som vokser i tre steg, med `task.wait(1)` mellom hvert.
- [ ] Gjør klossen helt usynlig, og så synlig igjen. Gratulerer, du har laget et spøkelse.
- [ ] Lag en ny variabel `local fart = 2` og bruk den i `task.wait(fart)`. Endre tallet ett sted og se hva som skjer.

**Hemmelig ord å forklare tilbake:** variabel

## Oppdrag 3: Gulvet er lava

**Han lærer:** hendelser (events) – kode som venter på at noe skal skje.

**Den store ideen:** Til nå har koden kjørt fra topp til bunn med en gang. En **hendelse** er som en dørklokke: koden står og venter, og når noen ringer på, kjører den. `Touched` ringer hver gang noe rører klossen.

**Kode (lag en ny, rød kloss som heter Lava, med et Script inni):**

```lua
local lava = script.Parent

local function naarNoeRorer(treff)
	print("Noe rørte lavaen: " .. treff.Name)

	local figur = treff.Parent
	local humanoid = figur:FindFirstChild("Humanoid")

	if humanoid then
		humanoid.Health = 0
	end
end

lava.Touched:Connect(naarNoeRorer)
```

**Forklar sammen:**

- `treff` er den delen som rørte lavaen, for eksempel en fot (`LeftFoot`).
- Foten er barn av spillerfiguren. Derfor er `treff.Parent` hele figuren.
- Alle spillerfigurer har en **Humanoid** – det er den som har liv (Health).
- `:Connect(...)` betyr «når dørklokka ringer, kjør denne funksjonen».

**Detektivoppgave:** Kjør spillet og hopp på lavaen. Se i Output hvilke kroppsdeler som treffer. Hvorfor kommer det så mange meldinger? (Svar: flere kroppsdeler treffer, og hver treff ringer på.)

**Utfordringer:**

- [ ] Lag en helbredelsesblokk som setter `Health` til 100 i stedet.
- [ ] Lag en blokk som gjør spilleren superrask: `humanoid.WalkSpeed = 50` (vanlig er 16).
- [ ] Lag en sprettblokk: `humanoid.JumpPower = 120`. Husk at `UseJumpPower` må være på i Humanoid.

**Hemmelig ord å forklare tilbake:** hendelse (event)

## Oppdrag 4: Den hemmelige døra

**Han lærer:** `if`, `elseif` og `else` – å la koden ta valg.

**Den store ideen:** En **betingelse** er et ja/nei-spørsmål koden stiller. «*Hvis* det er deg, åpne døra. *Ellers* si nei.» Sammenligning bruker `==` (er lik), `~=` (er ikke lik), `<` og `>`.

**Kode (lag en høy, smal kloss som heter Dor, med et Script inni):**

```lua
local Players = game:GetService("Players")
local dor = script.Parent
local hemmeligNavn = "SKRIV_BRUKERNAVNET_DITT_HER"

local function naarNoeRorer(treff)
	local spiller = Players:GetPlayerFromCharacter(treff.Parent)

	if spiller == nil then
		return -- det var ikke en spiller, bare glem det
	end

	if spiller.Name == hemmeligNavn then
		dor.Transparency = 0.8
		dor.CanCollide = false
		task.wait(2)
		dor.Transparency = 0
		dor.CanCollide = true
	else
		print(spiller.Name .. " kan ikke passordet!")
	end
end

dor.Touched:Connect(naarNoeRorer)
```

**Forklar sammen:**

- `=` betyr «legg i boksen». `==` betyr «er disse like?». Denne forvekslingen gjør alle, også voksne programmerere.
- `nil` betyr «ingenting». Hvis det ikke var en spiller som rørte døra, får vi `nil`.
- `CanCollide = false` betyr at man kan gå gjennom klossen.
- Innrykk (tab) viser hva som hører til `if`-en. Det gjør koden lettere å lese.

**Tippeoppgave:** Før han kjører: «Hva skjer hvis du skriver navnet ditt med liten forbokstav?» (Døra åpner seg ikke – datamaskinen er pirkete.)

**Utfordringer:**

- [ ] Legg til en `elseif` som gjør døra rød for alle andre.
- [ ] Lag en dør som bare åpner seg for spillere med under 50 i liv: `if humanoid.Health < 50 then`.
- [ ] Test med en venn eller med Studio-fanen **Test → Players: 2**. Fungerer døra bare for den riktige?

**Hemmelig ord å forklare tilbake:** betingelse

## Oppdrag 5: Disko og forsvinnende trapp

**Han lærer:** løkker – å gjenta noe uten å skrive det mange ganger.

**Den store ideen:** En **løkke** er som et refreng i en sang. `while true do` gjentar for alltid. `for i = 1, 10 do` gjentar et bestemt antall ganger og teller underveis.

**Del A – diskoklossen (for alltid):**

```lua
local kloss = script.Parent

while true do
	kloss.BrickColor = BrickColor.random()
	task.wait(0.3)
end
```

**Viktig:** En `while true`-løkke *må* ha `task.wait()`. Uten den prøver datamaskinen å gjøre alt på null sekunder, og Studio fryser. La ham gjerne oppleve det én gang – det glemmer han aldri.

**Del B – klossen som forsvinner gradvis (telle-løkke):**

```lua
local kloss = script.Parent

for i = 1, 10 do
	kloss.Transparency = i / 10
	print("Runde " .. i)
	task.wait(0.2)
end

kloss.CanCollide = false
```

**Forklar sammen:**

- `i` er en teller som blir 1, så 2, så 3 … helt til 10.
- `i / 10` blir 0.1, 0.2 … 1.0. Derfor blekner klossen litt hver runde.

**Byggeoppgave – trappa som forsvinner:** Kombiner oppdrag 3 og 5. Lag en trinnkloss som begynner å blekne når noen tråkker på den, forsvinner, og kommer tilbake etter 3 sekunder. Kopier den til en hel trapp.

**Utfordringer:**

- [ ] Få diskoklossen til å vokse og krympe i stedet for å bytte farge.
- [ ] Lag en nedtelling i Output: 10, 9, 8 … (tips: `for i = 10, 1, -1 do`).
- [ ] Bruk en løkke til å *lage* 20 klosser i en rad med `Instance.new("Part")`.

**Hemmelig ord å forklare tilbake:** løkke

## Oppdrag 6: Lag dine egne trylleord

**Han lærer:** funksjoner med parametere – å finne opp egne kommandoer.

**Den store ideen:** En **funksjon** er en oppskrift med et navn. Du skriver oppskriften én gang, og bruker den så mange ganger du vil. **Parametere** er ingrediensene du sender inn, for eksempel hvilken farge eller hvor stor.

Han har faktisk allerede laget funksjoner (`naarNoeRorer`). Nå lager han en som han kaller på selv.

**Kode (Script i ServerScriptService):**

```lua
local function lagKloss(farge, storrelse, hoyde)
	local kloss = Instance.new("Part")
	kloss.BrickColor = BrickColor.new(farge)
	kloss.Size = Vector3.new(storrelse, storrelse, storrelse)
	kloss.Position = Vector3.new(0, hoyde, 0)
	kloss.Anchored = true
	kloss.Parent = workspace
	return kloss
end

lagKloss("Really red", 4, 5)
lagKloss("Bright blue", 8, 15)
local kjempe = lagKloss("Lime green", 20, 40)
kjempe.Material = Enum.Material.Neon
```

**Forklar sammen:**

- `farge`, `storrelse` og `hoyde` er tomme bokser som fylles når funksjonen kalles.
- `return kloss` gir klossen tilbake, så vi kan gjøre mer med den etterpå.
- `kloss.Parent = workspace` er det som gjør at klossen dukker opp i verden. Uten den finnes den bare i lufta.

**Sammenlign:** Be ham skrive tre klosser *uten* funksjon først. Hvor mange linjer ble det? Så med funksjon. Det er hele poenget med funksjoner.

**Utfordringer:**

- [ ] Legg til en parameter for posisjon, så klossene ikke havner oppå hverandre.
- [ ] Lag funksjonen `lagTrapp(antall)` som bruker en løkke og `lagKloss` til å bygge en trapp.
- [ ] Lag `lagLava(x, z)` som lager en lavakloss med Touched-koden fra oppdrag 3 innebygd.

**Hemmelig ord å forklare tilbake:** funksjon

## Oppdrag 7: Myntjakt med poengtavle

**Han lærer:** å lagre poeng per spiller, og «debounce» – å hindre at noe skjer for mange ganger.

**Den store ideen:** Roblox viser automatisk en poengtavle oppe i hjørnet hvis hver spiller har en mappe som heter nøyaktig `leaderstats`. Det er en avtale mellom deg og Roblox: følger du navnet, gjør Roblox resten.

**Skript 1 – poengtavla (Script i ServerScriptService):**

```lua
local Players = game:GetService("Players")

local function nySpiller(spiller)
	local leaderstats = Instance.new("Folder")
	leaderstats.Name = "leaderstats"
	leaderstats.Parent = spiller

	local mynter = Instance.new("IntValue")
	mynter.Name = "Mynter"
	mynter.Value = 0
	mynter.Parent = leaderstats
end

Players.PlayerAdded:Connect(nySpiller)
```

**Skript 2 – mynten (en liten gul kloss, Anchored, CanCollide av, med Script inni):**

```lua
local Players = game:GetService("Players")
local mynt = script.Parent
local opptatt = false

local function naarNoeRorer(treff)
	if opptatt then
		return
	end

	local spiller = Players:GetPlayerFromCharacter(treff.Parent)
	if spiller then
		opptatt = true
		spiller.leaderstats.Mynter.Value += 1

		mynt.Transparency = 1
		task.wait(5)
		mynt.Transparency = 0
		opptatt = false
	end
end

mynt.Touched:Connect(naarNoeRorer)
```

**Detektivoppgave:** Kjør først mynt-skriptet *uten* `opptatt`-linjene. Hvor mange poeng får han for én mynt? (Mange, fordi flere kroppsdeler treffer – akkurat som i oppdrag 3.) Så legger han inn `opptatt` og ser forskjellen. Det er **debounce**.

**Forklar sammen:**

- `+= 1` er kortversjonen av «ta det som er der, og legg til 1».
- `opptatt` er en vakt i døra: mens den er `true`, slipper ingen inn.

**Utfordringer:**

- [ ] Lag en gullmynt som er verdt 10.
- [ ] Legg til en ekstra stat, for eksempel `Dodsfall` (uten ø – kode tåler ikke æøå i navn), og tell opp i lavaskriptet.
- [ ] Lag en butikk-kloss: hvis spilleren har minst 5 mynter, trekk fra 5 og gi ham superfart.

**Hemmelig ord å forklare tilbake:** debounce

## Oppdrag 8: Den gylne nøkkelen

**Han lærer:** verktøy (Tool), forskjellen på å *ha* noe og å *holde* noe, og å sjekke hva en spiller bærer på.

**Den store ideen:** Et **verktøy** er en ting spilleren kan plukke opp og bære. Når han plukker det opp, havner det i ryggsekken (**Backpack**). Når han holder det i hånden, flytter det seg inn i selve spillerfiguren. Døra kan derfor spørre: «Har figuren en nøkkel i hånden akkurat nå?»

**Steg 1 – lag nøkkelen (ingen kode ennå):**

1. Høyreklikk Workspace → Insert Object → **Tool**. Gi den navnet `Nokkel` (uten ø).
2. Høyreklikk Nokkel → Insert Object → **Part**. Gi parten navnet `Handle`, nøyaktig slik, med stor H. Det er den delen spilleren holder i.
3. Gjør Handle liten og gul, for eksempel størrelse 1 × 1 × 3.
4. **Viktig:** Handle må *ikke* være Anchored. Da sitter spilleren fast i lufta når han tar den opp.
5. Gjem nøkkelen et sted i verden. Den plukkes opp ved å gå på den.

**Detektivoppgave:** Trykk Play, plukk opp nøkkelen og se i Explorer. Hvor ligger den nå? Trykk 1 for å holde den, og se igjen. Trykk 1 en gang til. Han vil se at nøkkelen hopper mellom `Players → navnet hans → Backpack` og `Workspace → navnet hans`. Det er hele hemmeligheten bak dette oppdraget.

**Steg 2 – døra med nøkkelhull (lag en dør som heter Laast, med et Script inni):**

```lua
local Players = game:GetService("Players")
local dor = script.Parent
local aapen = false

local function naarNoeRorer(treff)
	if aapen then
		return
	end

	local figur = treff.Parent
	if figur:IsA("Tool") then
		figur = figur.Parent -- det var nøkkelen som traff, gå ett hakk opp
	end

	local spiller = Players:GetPlayerFromCharacter(figur)
	if spiller == nil then
		return
	end

	local nokkel = figur:FindFirstChild("Nokkel")
	if nokkel then
		aapen = true
		print(spiller.Name .. " låste opp døra!")
		dor.Transparency = 0.8
		dor.CanCollide = false
		task.wait(3)
		dor.Transparency = 0
		dor.CanCollide = true
		aapen = false
	else
		print("Døra er låst. Du må holde en nøkkel!")
	end
end

dor.Touched:Connect(naarNoeRorer)
```

**Forklar sammen:**

- `figur:FindFirstChild("Nokkel")` leter etter et barn med det navnet. Finnes det ikke, får vi `nil`.
- Nøkkelen i ryggsekken teller ikke, fordi den ikke er barn av figuren. Han må *holde* den.
- `IsA("Tool")` spør «er du et verktøy?». Hvis det var nøkkelen som traff døra, er forelderen nøkkelen og ikke figuren, så vi går ett hakk opp i slektstreet.
- `aapen` er den samme vakten (debounce) som i oppdrag 7.

**Tippeoppgave:** «Hva skjer hvis du går inn i døra med nøkkelen i ryggsekken, men ikke i hånden?» La ham gjette, så teste.

**Utfordringer:**

- [ ] Gjør nøkkelen engangs: legg til `nokkel:Destroy()` når døra åpnes. Nå må han finne en ny nøkkel neste gang.
- [ ] Lag to nøkler, `RodNokkel` og `BlaaNokkel`, og to dører som hver bare åpner for sin farge.
- [ ] Lag en butikk som selger nøkkelen for 10 mynter (kombinerer med oppdrag 7). Tips: `nokkel:Clone()` og legg kopien i `spiller.Backpack`.
- [ ] Bonus – et verktøy som gjør noe når du klikker: legg et Script i verktøyet med `script.Parent.Activated:Connect(...)` og la det for eksempel gi superhopp.

**Hemmelig ord å forklare tilbake:** Backpack

## Sluttprosjekt: Min egen obby

Sluttprosjektet er en hinderløype han designer selv, der alt fra oppdrag 1–8 brukes. Sett av 3–4 økter. Her er det *han* som er sjefen, og du er kunden som tester.

**Økt 1 – tegn før du bygger:** På papir tegner han løypa fra start til mål. Hver hindring får et navn og en kort forklaring på hvilken kode den trenger. Dette er ekte spillutvikling: plan først.

**Krav til løypa (kryss av underveis):**

- [ ] Minst 3 lavaklosser (oppdrag 3)
- [ ] Én hemmelig dør eller snarvei (oppdrag 4)
- [ ] Én forsvinnende trapp eller blinkende plattform (oppdrag 5)
- [ ] Noe som er bygget med en egen funksjon (oppdrag 6)
- [ ] Mynter og poengtavle (oppdrag 7)
- [ ] En låst dør og en gjemt nøkkel (oppdrag 8)
- [ ] Et sjekkpunkt: sett inn en **SpawnLocation** midt i løypa
- [ ] En målkloss som skriver «Du vant!» og gir 50 mynter

**Bonusideer hvis han vil mer:**

- En bevegelig plattform som går fram og tilbake med en `while`-løkke.
- En tidtaker som teller sekunder fra start til mål.
- En ny stat `Fullfort` som teller hvor mange ganger han har kommet i mål.

**Siste økt – testdag:** Inviter noen i familien til å spille. Han ser på mens de spiller, uten å hjelpe. Hva var for vanskelig? Hva var kjedelig? Så får han fikse én ting. Dette lærer ham at spill blir gode gjennom testing.

**Publisering:** Via **File → Publish to Roblox** kan spillet lagres i skyen. Han kan beholde det privat, eller dele det med venner. Snakk sammen om hvem som skal kunne spille det før du gjør det offentlig.

## Verktøykasse

**Detektivmetoden når noe ikke virker:**

1. **Les den røde teksten** i Output. Den sier nesten alltid hvilken linje det gjelder.
2. **Sett inn `print`** før og etter linjen du lurer på. Kommer begge meldingene? Da vet du hvor det stopper.
3. **Sjekk stavingen.** `Workspace` og `workspace` er ikke det samme for alle ting. `Humanoid` med liten h finnes ikke.
4. **Sjekk Anchored.** Faller klossen ned eller forsvinner? Den mangler `Anchored = true`.
5. **Forklar koden til en bamse,** linje for linje, høyt. Det høres tullete ut, men proffe programmerere gjør dette også.

**De vanligste feilene:**

| Feilmelding eller symptom | Hva det betyr |
| --- | --- |
| `Expected 'end'` | En `if`, `for`, `while` eller `function` mangler sin `end` |
| `attempt to index nil` | Du prøvde å finne noe som ikke finnes, ofte en skrivefeil i et navn |
| `is not a valid member of` | Navnet stemmer ikke med det som står i Explorer |
| Studio fryser | En `while true`-løkke mangler `task.wait()` |
| Ingenting skjer | Skriptet ligger feil sted, eller det er et LocalScript i stedet for Script |

**Ordliste – ordene han samler:**

| Ord | Med egne ord |
| --- | --- |
| Parent / Child | Forelder og barn i Explorer-treet |
| String | Tekst i anførselstegn |
| Variabel | En boks med navnelapp |
| Boolean | Ja eller nei (`true` / `false`) |
| Hendelse (event) | En dørklokke koden venter på |
| Betingelse | Et ja/nei-spørsmål med `if` |
| Løkke | Et refreng som gjentas |
| Funksjon | En oppskrift med navn |
| Parameter | Ingrediensen du sender inn i oppskriften |
| Debounce | En vakt som hindrer at ting skjer for mange ganger |

**Gjør det til et spill:** Skriv ut ordlista og la ham krysse av hvert ord han kan forklare. Ti kryss betyr diplom og en belønning dere har avtalt på forhånd.

**Når kurset er ferdig:** Roblox sin egen dokumentasjon på create.roblox.com/docs har gode, gratis gjennomganger. Neste naturlige steg er LocalScripts og knapper på skjermen (GUI), og ModuleScripts for å dele kode mellom skript.
