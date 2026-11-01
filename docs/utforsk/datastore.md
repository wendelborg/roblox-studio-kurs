---
utforsk: DataStoreService
permalink: /utforsk/datastore/
---

## Hva er det?

Når alle spillerne går ut, slår Roblox av serveren, og alt i variablene forsvinner. Myntene dine er borte neste gang du spiller!

Med **DataStore** kan spillet huske ting til neste gang: mynter, rekorder og hva du har kjøpt. DataStore er et lager hos Roblox som ligger trygt, selv når ingen spiller.

Du har kanskje allerede prøvd DataStore i rekordtavla i sluttprosjektet.

<details class="enklere" markdown="1"><summary>Dette ble for vanskelig – forklar enklere</summary>
<div class="enkel-tekst" markdown="1">
Tenk på et dataspill med «lagre spill». Uten lagring må du begynne helt på nytt hver gang. DataStore er lagringen i Roblox-spillet ditt.
</div>
</details>

<div class="boks obs" markdown="1">
### Gjør dette sammen med en voksen

- Spillet må være **publisert** til Roblox.
- For å teste i Studio må dere slå på **Enable Studio Access to API Services** under **File → Experience Settings → Security**. Roblox anbefaler å gjøre det i en egen testkopi av spillet.
</div>

## Prøv selv: Husk myntene

Du trenger poengtavla med Mynter fra oppdrag 8. Lag et nytt Script i **ServerScriptService**.

<div class="skriv-selv" markdown="1">
```lua
local Players = game:GetService("Players")
local DataStoreService = game:GetService("DataStoreService")
local lager = DataStoreService:GetDataStore("Mynter")

local function nySpiller(spiller)
	local leaderstats = spiller:WaitForChild("leaderstats")
	local mynter = leaderstats:WaitForChild("Mynter")

	local ok, lagret = pcall(function()
		return lager:GetAsync(spiller.UserId)
	end)

	if ok and lagret then
		mynter.Value = lagret
	end
end

local function spillerGikk(spiller)
	local antall = spiller.leaderstats.Mynter.Value
	pcall(function()
		lager:SetAsync(spiller.UserId, antall)
	end)
end

Players.PlayerAdded:Connect(nySpiller)
Players.PlayerRemoving:Connect(spillerGikk)
```
</div>

<div class="hva-skjer" markdown="1">
### Hva skjer?

1. Når du kommer inn, spør skriptet lageret: «Har du noen mynter lagret for denne spilleren?»
2. Hver spiller har et eget nummer, `UserId`, som aldri endrer seg. Det brukes som navn i lageret.
3. Finnes det mynter, legges de på poengtavla.
4. Når du går ut av spillet, lagres myntene dine.
5. `pcall` passer på at spillet ikke krasjer hvis lageret ikke svarer.
</div>

<div class="boks ide" markdown="1">
### Hvorfor forsvant myntene i Studio?

Når du trykker Stop i Studio, slås alt av med en gang, og det er ikke sikkert lagringen rekker å skje. I et publisert spill går det som regel fint. Proffene bruker i tillegg `game:BindToClose` for å lagre helt til slutt.
</div>

## Utfordringer

- [ ] Lagre hvor mange ganger hver spiller har kommet i mål.
- [ ] Lagre en rekord for hver spiller, i tillegg til rekorden for alle.
- [ ] Les om `UpdateAsync` i rekordtavla i sluttprosjektet. Når er den bedre enn `SetAsync`?
