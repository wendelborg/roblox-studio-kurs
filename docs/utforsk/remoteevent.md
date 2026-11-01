---
utforsk: RemoteEvent
permalink: /utforsk/remoteevent/
---

## Hva er det?

Knapper på skjermen og tastetrykk styres av et **LocalScript** på maskinen din. Men poeng, fart og dører styres av **serveren**. Hvordan kan en knapp på skjermen få noe til å skje i spillet for alle?

Svaret er en **RemoteEvent**. Det er en beskjed som LocalScriptet sender til serveren: «Spilleren trykket på kjøp-knappen!» Serveren bestemmer så om det skal skje noe.

<details class="enklere" markdown="1"><summary>Dette ble for vanskelig – forklar enklere</summary>
<div class="enkel-tekst" markdown="1">
Tenk på en restaurant. Du sitter ved bordet og bestemmer hva du vil ha, men det er kjøkkenet som lager maten.

LocalScriptet er deg ved bordet. Serveren er kjøkkenet. RemoteEvent er bestillingslappen du gir til kelneren.
</div>
</details>

## Hva kan du lage?

- En butikk med knapper på skjermen: Kjøp fart, kjøp nøkkel
- En knapp som setter deg tilbake til start
- En «Klar!»-knapp som starter runden for alle

## Prøv selv: Kjøp fart for 5 mynter

Du trenger poengtavla med Mynter fra oppdrag 8.

1. Høyreklikk **ReplicatedStorage** og sett inn en **RemoteEvent**. Gi den navnet `KjopFart`.
2. Lag en **ScreenGui** i StarterGui, med en **TextButton** inni. Skriv `Kjøp fart (5 mynter)` på knappen.
3. Legg et **LocalScript** i knappen:

<div class="skriv-selv" markdown="1">
```lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local hendelse = ReplicatedStorage:WaitForChild("KjopFart")
local knapp = script.Parent

local function naarKlikket()
	hendelse:FireServer()
end

knapp.Activated:Connect(naarKlikket)
```
</div>

4. Legg et vanlig **Script** i ServerScriptService:

<div class="skriv-selv" markdown="1">
```lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local hendelse = ReplicatedStorage:WaitForChild("KjopFart")

local function naarKjop(spiller)
	local mynter = spiller.leaderstats.Mynter
	if mynter.Value >= 5 then
		mynter.Value -= 5
		local humanoid = spiller.Character:FindFirstChild("Humanoid")
		if humanoid then
			humanoid.WalkSpeed = 30
		end
	end
end

hendelse.OnServerEvent:Connect(naarKjop)
```
</div>

<div class="hva-skjer" markdown="1">
### Hva skjer når du klikker?

1. LocalScriptet merker klikket med `Activated` og sender en beskjed med `FireServer`.
2. På serveren ringer `OnServerEvent`. Roblox forteller automatisk hvilken spiller som sendte beskjeden.
3. Serveren sjekker selv om spilleren har nok mynter. Den stoler ikke bare på knappen!
4. Har spilleren minst 5 mynter, trekkes 5 fra, og spilleren får superfart.
</div>

<div class="boks ide" markdown="1">
### Hvorfor sjekker serveren myntene?

Alt som skjer på din egen maskin, kan i teorien jukses med. Derfor er regelen: **Serveren bestemmer.** LocalScriptet ber bare om noe. Det er serveren som sjekker og sier ja eller nei.
</div>

## Utfordringer

- [ ] Lag en knapp som kjøper superhopp i stedet.
- [ ] Lag en «Tilbake til start»-knapp. Tips: `spiller:LoadCharacter()` på serveren.
- [ ] Lag en butikk med tre knapper og tre RemoteEvent-er.
