# Oppdrag 6: Lag dine egne trylleord

[← Oppdrag 5: Disko og forsvinnende trapp](05-disko-og-forsvinnende-trapp.md) · [Innhold](../README.md) · [Oppdrag 7: Myntjakt med poengtavle →](07-myntjakt-med-poengtavle.md)

> Barnets side for dette kapitlet: [wendelborg.github.io/roblox-studio-kurs/oppdrag/6/](https://wendelborg.github.io/roblox-studio-kurs/oppdrag/6/)

**Barnet lærer:** funksjoner med parametere – å finne opp egne kommandoer.

**Den store ideen:** En **funksjon** er en oppskrift med et navn. Du skriver oppskriften én gang, og bruker den så mange ganger du vil. **Parametere** er ingrediensene du sender inn, for eksempel hvilken farge eller hvor stor.

Barnet har faktisk allerede laget funksjoner (`naarNoeRorer`). Nå lages en funksjon som barnet kaller på selv.

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

**Sammenlign:** Be barnet skrive tre klosser *uten* funksjon først. Hvor mange linjer ble det? Så med funksjon. Det er hele poenget med funksjoner.

**Utfordringer:**

- [ ] Legg til en parameter for posisjon, så klossene ikke havner oppå hverandre.
- [ ] Lag funksjonen `lagTrapp(antall)` som bruker en løkke og `lagKloss` til å bygge en trapp.
- [ ] Lag `lagLava(x, z)` som lager en lavakloss med Touched-koden fra oppdrag 3 innebygd.

**Hemmelig ord å forklare tilbake:** funksjon

---

[← Oppdrag 5: Disko og forsvinnende trapp](05-disko-og-forsvinnende-trapp.md) · [Innhold](../README.md) · [Oppdrag 7: Myntjakt med poengtavle →](07-myntjakt-med-poengtavle.md)
