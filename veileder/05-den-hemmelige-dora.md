# Oppdrag 5: Den hemmelige døra

[← Oppdrag 4: Gulvet er lava](04-gulvet-er-lava.md) · [Innhold](../README.md) · [Oppdrag 6: Disko og forsvinnende trapp →](06-disko-og-forsvinnende-trapp.md)

> Barnets side for dette kapitlet: [wendelborg.github.io/roblox-studio-kurs/oppdrag/5/](https://wendelborg.github.io/roblox-studio-kurs/oppdrag/5/)

**Barnet lærer:** `if`, `elseif` og `else` – å la koden ta valg.

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

**Tippeoppgave:** Før koden kjøres: «Hva skjer hvis du skriver navnet ditt med liten forbokstav?» (Døra åpner seg ikke – datamaskinen er pirkete.)

**Utfordringer:**

- [ ] Legg til en `elseif` som gjør døra rød for alle andre.
- [ ] Lag en dør som bare åpner seg for spillere med under 50 i liv: `if humanoid.Health < 50 then`.
- [ ] Test med en venn eller med Studio-fanen **Test → Players: 2**. Fungerer døra bare for den riktige?

**Hemmelig ord å forklare tilbake:** betingelse

---

[← Oppdrag 4: Gulvet er lava](04-gulvet-er-lava.md) · [Innhold](../README.md) · [Oppdrag 6: Disko og forsvinnende trapp →](06-disko-og-forsvinnende-trapp.md)
