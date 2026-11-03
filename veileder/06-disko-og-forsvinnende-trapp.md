# Oppdrag 6: Disko og forsvinnende trapp

[← Oppdrag 5: Den hemmelige døra](05-den-hemmelige-dora.md) · [Innhold](../README.md) · [Oppdrag 7: Lag dine egne trylleord →](07-lag-dine-egne-trylleord.md)

> Barnets side for dette kapitlet: [wendelborg.github.io/roblox-studio-kurs/oppdrag/6/](https://wendelborg.github.io/roblox-studio-kurs/oppdrag/6/)

**Barnet lærer:** løkker – å gjenta noe uten å skrive det mange ganger.

**Ferdig eksempel:** [solutions/lesson6.rbxl](../solutions/lesson6.rbxl) har diskoklossen, klossen som blekner og en trapp med 9 trinn fra byggeoppgaven. Åpne den i Roblox Studio med **File → Open from File**.

**Den store ideen:** En **løkke** er som et refreng i en sang. `while true do` gjentar for alltid. `for i = 1, 10 do` gjentar et bestemt antall ganger og teller underveis.

**Del A – diskoklossen (for alltid):**

```lua
local kloss = script.Parent

while true do
	kloss.BrickColor = BrickColor.random()
	task.wait(0.3)
end
```

**Viktig:** En `while true`-løkke *må* ha `task.wait()`. Uten den prøver datamaskinen å gjøre alt på null sekunder, og Studio fryser. La barnet gjerne oppleve det én gang – det blir aldri glemt.

**Del B – klossen som forsvinner gradvis (telle-løkke):**

```lua
local kloss = script.Parent

for i = 1, 10 do
	kloss.Transparency = i / 10
	print("Runde " .. i)
	task.wait(0.2)
end

kloss.CanCollide = false
```

**Forklar sammen:**

- `i` er en teller som blir 1, så 2, så 3 … helt til 10.
- `i / 10` blir 0.1, 0.2 … 1.0. Derfor blekner klossen litt hver runde.

**Byggeoppgave – trappa som forsvinner:** Kombiner oppdrag 4 og 6. Lag en trinnkloss som begynner å blekne når noen tråkker på den, forsvinner, og kommer tilbake etter 3 sekunder. Kopier den til en hel trapp.

**Utfordringer:**

- [ ] Få diskoklossen til å vokse og krympe i stedet for å bytte farge.
- [ ] Lag en nedtelling i Output: 10, 9, 8 … (tips: `for i = 10, 1, -1 do`).
- [ ] Bruk en løkke til å *lage* 20 klosser i en rad med `Instance.new("Part")`.

**Hemmelig ord å forklare tilbake:** løkke

---

[← Oppdrag 5: Den hemmelige døra](05-den-hemmelige-dora.md) · [Innhold](../README.md) · [Oppdrag 7: Lag dine egne trylleord →](07-lag-dine-egne-trylleord.md)
