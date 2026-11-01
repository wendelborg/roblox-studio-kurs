# Oppdrag 3: Gulvet er lava

[← Oppdrag 2: Trylleformler](02-trylleformler.md) · [Innhold](../README.md) · [Oppdrag 4: Den hemmelige døra →](04-den-hemmelige-dora.md)

> Barnets side for dette kapitlet: [wendelborg.github.io/roblox-studio-kurs/oppdrag/3/](https://wendelborg.github.io/roblox-studio-kurs/oppdrag/3/)

**Barnet lærer:** hendelser (events) – kode som venter på at noe skal skje.

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

---

[← Oppdrag 2: Trylleformler](02-trylleformler.md) · [Innhold](../README.md) · [Oppdrag 4: Den hemmelige døra →](04-den-hemmelige-dora.md)
