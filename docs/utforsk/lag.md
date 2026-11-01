---
utforsk: Teams
permalink: /utforsk/lag/
---

## Hva er det?

Med **Teams** kan du dele spillerne i lag, for eksempel Rødt lag og Blått lag. Hvert lag har sin egen farge, og lagene vises på poengtavla. Hvert lag kan også ha sitt eget startsted.

<details class="ds-details enklere" data-variant="tinted" markdown="1"><summary>Dette ble for vanskelig – forklar enklere</summary>
<div markdown="1">
Tenk på når dere deler dere i lag i gymtimen. Alle på samme lag har samme farge på vesten, og hvert lag starter på sin side av banen.
</div>
</details>

## Hva kan du lage?

- Rødt mot blått: Hvilket lag samler flest mynter?
- Fangst: Ett lag fanger, det andre løper
- Hvert lag starter på hver sin øy (se terreng-bonusen)

## Prøv selv: To lag

Her trenger du nesten ingen kode.

1. Finn **Teams** i Explorer. Hold musa over den, trykk på pluss-tegnet og sett inn en **Team**.
2. Gi laget et navn, for eksempel `Rødt lag`, og velg en **TeamColor**.
3. Lag ett lag til, for eksempel `Blått lag`, med en annen farge.
4. Lag to **SpawnLocation**-er. På hver av dem slår du **Neutral** av og setter **TeamColor** til samme farge som laget.
5. Test med 2 spillere under fanen **Test**. Roblox fordeler spillerne på lagene av seg selv.

Vil du se lagene i koden, kan du legge dette i et Script i **ServerScriptService**:

<div class="skriv-selv" markdown="1">
```lua
local Players = game:GetService("Players")

local function nySpiller(spiller)
	task.wait(1)
	if spiller.Team then
		print(spiller.Name .. " er på " .. spiller.Team.Name)
	end
end

Players.PlayerAdded:Connect(nySpiller)
```
</div>

## Utfordringer

- [ ] Lag en kloss som bare det røde laget kan gå gjennom.
- [ ] Gi spillerne poeng for laget sitt, og se hvilket lag som vinner.
- [ ] Slå av **AutoAssignable** på lagene, og lag en kloss som setter `spiller.Team` når man tråkker på den.
