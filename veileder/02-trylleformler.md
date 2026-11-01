# Oppdrag 2: Trylleformler

[← Oppdrag 1: Hei, verden!](01-hei-verden.md) · [Innhold](../README.md) · [Oppdrag 3: Fysikk-laben →](03-fysikk-laben.md)

> Barnets side for dette kapitlet: [wendelborg.github.io/roblox-studio-kurs/oppdrag/2/](https://wendelborg.github.io/roblox-studio-kurs/oppdrag/2/)

**Barnet lærer:** variabler (navngitte bokser) og egenskaper (det som står i Properties-vinduet).

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

**Lekeoppgave før koding:** Klikk på klossen og endre Transparency i Properties med hånden. Spør: «Hvilket tall gjør den usynlig?» Så får koden gjøre det samme.

**Utfordringer:**

- [ ] Lag en kloss som vokser i tre steg, med `task.wait(1)` mellom hvert.
- [ ] Gjør klossen helt usynlig, og så synlig igjen. Gratulerer, du har laget et spøkelse.
- [ ] Lag en ny variabel `local fart = 2` og bruk den i `task.wait(fart)`. Endre tallet ett sted og se hva som skjer.

**Hemmelig ord å forklare tilbake:** variabel

---

[← Oppdrag 1: Hei, verden!](01-hei-verden.md) · [Innhold](../README.md) · [Oppdrag 3: Fysikk-laben →](03-fysikk-laben.md)
