# Oppdrag 3: Fysikk-laben

[← Oppdrag 2: Trylleformler](02-trylleformler.md) · [Innhold](../README.md) · [Oppdrag 4: Gulvet er lava →](04-gulvet-er-lava.md)

> Barnets side for dette kapitlet: [wendelborg.github.io/roblox-studio-kurs/oppdrag/3/](https://wendelborg.github.io/roblox-studio-kurs/oppdrag/3/)

**Barnet lærer:** at Roblox har fysikk, hva Anchored betyr, forskjellen på å gruppere og å sveise klosser, og hvordan tyngdekraften kan endres.

**Den store ideen:** Ting i Roblox faller, ruller og velter nesten som i virkeligheten. En kloss med **Anchored** på er festet med en usynlig spiker og blir hengende der den er. En kloss uten Anchored er fri, og da bestemmer tyngdekraften. Barnet har sett `Anchored = true` i oppdrag 2. Nå får barnet oppleve hva det faktisk betyr.

Dette oppdraget er mest bygging og eksperimentering, og bare ett lite skript. Det er et godt pusterom etter to oppdrag med kode, og det gjør senere oppdrag lettere: lavaklosser, trapper og plattformer må alle være forankret.

**Del A – slipp klossene (ingen kode):**

1. Lag en kloss høyt oppe i lufta med Anchored av. Trykk Play.
2. Bygg et tårn av 5 uforankrede klosser. Trykk Play og la barnet løpe inn i det.

**Del B – gruppering:**

1. Bygg en bil eller figur av 3–4 klosser.
2. Marker alle med Ctrl-klikk (Mac: Cmd-klikk) og trykk **Ctrl+G** (Mac: **Cmd+G**). Nå er de samlet i en **Model**.
3. Se i Explorer at klossene ligger inni modellen. Det er det samme «ting inni ting» som i oppdrag 1.
4. Flytt modellen. Alle klossene blir med.

**Tippeoppgave:** «Hvis bilen henger i lufta uten Anchored, faller den ned i ett stykke eller i biter?» (I biter. En Model er bare en mappe, den limer ingenting sammen. Mange voksne tror også at gruppering limer.)

**Del C – sveising:**

1. Marker alle klossene i bilen (klikk den første i Explorer, Shift-klikk den siste).
2. Fanen **Model** → **Weld**. Klosser som rører eller overlapper hverandre, sveises automatisk, og det dukker opp en **WeldConstraint** per sveis.
3. Trykk Play. Nå faller bilen i ett stykke. Faller en kloss av, rørte den ikke de andre. Flytt den inntil og trykk Weld igjen.

Det går også an å lage sveisen for hånd: legg inn en WeldConstraint med **+** i Explorer og sett **Part0** og **Part1** i Properties. Det er nyttig å vite når barnet senere ser sveiser i skript, men knappen er enklest å starte med.

Fortell gjerne at det holder å forankre **én** kloss i en sveiset gruppe for at hele gruppen skal stå stille.

**Del D – plattformen som faller (flat kloss høyt oppe, Anchored på, Script inni):**

```lua
local plattform = script.Parent

print("Plattformen henger i lufta …")
task.wait(3)

plattform.BrickColor = BrickColor.new("Really red")
task.wait(1)

plattform.Anchored = false
print("… og nå faller den!")
```

**Lek med tyngdekraften:** Klikk på Workspace og finn **Gravity** i Properties. Standard er 196.2. Prøv 30 (månehopp) og 0 (barnet svever bort). Husk å sette verdien tilbake.

**Forklar sammen:**

- `Anchored` er en boolean, akkurat som i oppdrag 2. `true` betyr festet, `false` betyr fri.
- Koden endrer ikke hvor klossen er, bare om den er festet. Resten gjør fysikken.
- **Model** = mappe. **WeldConstraint** = lim. Det er hele forskjellen.
- `workspace` med liten w er en snarvei til Workspace.

**Utfordringer:**

- [ ] Endre tyngdekraften med kode: `workspace.Gravity = 30` i et Script i ServerScriptService.
- [ ] Lag tre plattformer som faller etter 2, 4 og 6 sekunder.
- [ ] Lag en ball (Shape = Ball) og la den rulle ned en Wedge.
- [ ] Bygg et høyt tårn, sveis det sammen uten Anchored, og løp inn i det.

**Hemmelig ord å forklare tilbake:** Anchored

---

[← Oppdrag 2: Trylleformler](02-trylleformler.md) · [Innhold](../README.md) · [Oppdrag 4: Gulvet er lava →](04-gulvet-er-lava.md)
