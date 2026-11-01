# Bonus: Terreng

[← Sluttprosjekt: Min egen obby](13-sluttprosjekt.md) · [Innhold](../README.md) · [Bonus: 3D-modell i Tinkercad →](15-bonus-tinkercad.md)

> Barnets side for dette kapitlet: [wendelborg.github.io/roblox-studio-kurs/bonus-terreng/](https://wendelborg.github.io/roblox-studio-kurs/bonus-terreng/)

**Barnet lærer:** å forme landskap med Terrain Editor, og å lage terreng med kode og tilfeldige tall.

**Den store ideen:** Terreng er ikke klosser, men «leire» som formes med pensel: bygges opp, graves bort, glattes ut og males med materialer som gress, sand, stein, snø og vann. Alt terreng ligger i ett objekt: **Workspace → Terrain**.

Dette er en ren kreativ bonus. Det meste skjer med musa, og bare den siste delen har kode. Fin å ta på en dag med lite energi til kode, eller som en belønning etter obbyen.

**Del A – generer en verden:** Åpne **Terrain Editor** (fanen Home eller Model) og velg **Generate**. Velg størrelse og landskapstyper, og trykk Generate. **Ctrl+Z** (Mac: Cmd+Z) angrer, og **Clear** sletter alt terreng.

**Del B – form selv:** Penselverktøyene heter litt forskjellig i ulike Studio-versjoner, men nesten alltid finnes **Add/Draw**, **Subtract**, **Grow/Erode**, **Smooth**, **Flatten**, **Paint** og **Sea Level**. Hver pensel har størrelse og styrke.

**Tippeoppgave:** «Hva skjer når du går ut i vannet?» (Figuren svømmer. Vann i terreng er ekte, svømbart vann.)

**Byggeoppgave:** En øy med strand, et snøfjell med hule, og alt glattet ut.

**Del C – terreng med kode (Script i ServerScriptService):**

```lua
local terreng = workspace.Terrain

-- et stort, flatt hav
terreng:FillBlock(CFrame.new(0, -2, 0), Vector3.new(500, 8, 500), Enum.Material.Water)

-- ti øyer på tilfeldige steder
for i = 1, 10 do
	local x = math.random(-200, 200)
	local z = math.random(-200, 200)
	local storrelse = math.random(8, 25)

	terreng:FillBall(Vector3.new(x, 0, z), storrelse, Enum.Material.Grass)
	terreng:FillBall(Vector3.new(x, storrelse - 4, z), 4, Enum.Material.Snow)
end
```

**Del D – den giftige dammen:** Barnet graver en dam, fyller den med vann og gjør vannet grønt med **WaterColor** på Terrain. Merk at fargen gjelder alt vann i verdenen. Over dammen ligger en usynlig kloss, `Gift` (Anchored, CanCollide av, Transparency 1), med et skript som to ganger i sekundet:

1. henter alle deler inni klossen med `workspace:GetPartsInPart(gift)`
2. finner `HumanoidRootPart`-delene, så hver figur bare telles én gang
3. trekker 5 liv med `humanoid:TakeDamage(skade)`

Terreng har ikke `Touched` som virker på samme måte som en kloss, derfor brukes en usynlig sone over vannet. Løkken over delene er den samme typen som i dommerskriptet i oppdrag 10.

**Tippeoppgave:** «Hvor lenge kan du bade med 100 liv?» (Cirka 10 sekunder: 10 liv i sekundet. Litt lenger fordi Roblox gir liv tilbake av seg selv.)

**Forklar sammen:**

- `FillBlock` fyller en boks og `FillBall` en kule med et materiale.
- Halve kula ligger under havflaten. Derfor blir det en øy og ikke en ball som svever.
- Løkka (oppdrag 6) og `math.random` (oppdrag 11) gir en ny verden hver gang man trykker Play.

**Utfordringer:**

- [ ] Bygg obbyen på en øy.
- [ ] Lag en vulkan med `Rock` og `CrackedLava`.
- [ ] 30 små øyer i stedet for 10 store.
- [ ] En tunnel gjennom et fjell med en gjemt mynt.
- [ ] Grønne bobler i giftdammen med en ParticleEmitter.
- [ ] En helbredende kilde i stedet for gift.

---

[← Sluttprosjekt: Min egen obby](13-sluttprosjekt.md) · [Innhold](../README.md) · [Bonus: 3D-modell i Tinkercad →](15-bonus-tinkercad.md)
