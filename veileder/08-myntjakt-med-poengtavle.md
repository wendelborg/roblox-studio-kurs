# Oppdrag 8: Myntjakt med poengtavle

[← Oppdrag 7: Lag dine egne trylleord](07-lag-dine-egne-trylleord.md) · [Innhold](../README.md) · [Oppdrag 9: Den gylne nøkkelen →](09-den-gylne-nokkelen.md)

> Barnets side for dette kapitlet: [wendelborg.github.io/roblox-studio-kurs/oppdrag/8/](https://wendelborg.github.io/roblox-studio-kurs/oppdrag/8/)

**Barnet lærer:** å lagre poeng per spiller, og «debounce» – å hindre at noe skjer for mange ganger.

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

**Detektivoppgave:** Kjør først mynt-skriptet *uten* `opptatt`-linjene. Hvor mange poeng gir én mynt? (Mange, fordi flere kroppsdeler treffer – akkurat som i oppdrag 4.) Så legges `opptatt` inn og ser forskjellen. Det er **debounce**.

**Forklar sammen:**

- `+= 1` er kortversjonen av «ta det som er der, og legg til 1».
- `opptatt` er en vakt i døra: mens den er `true`, slipper ingen inn.

**Utfordringer:**

- [ ] Lag en gullmynt som er verdt 10.
- [ ] Legg til en ekstra stat, for eksempel `Dodsfall` (uten ø – kode tåler ikke æøå i navn), og tell opp i lavaskriptet.
- [ ] Lag en butikk-kloss: hvis spilleren har minst 5 mynter, trekk fra 5 og gi spilleren superfart.

**Hemmelig ord å forklare tilbake:** debounce

---

[← Oppdrag 7: Lag dine egne trylleord](07-lag-dine-egne-trylleord.md) · [Innhold](../README.md) · [Oppdrag 9: Den gylne nøkkelen →](09-den-gylne-nokkelen.md)
