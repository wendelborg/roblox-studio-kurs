# Oppdrag 13: Har den! Del 4: Frysepistol

[← Oppdrag 12: Har den! Del 3: Robotmotspiller](12-har-den-robot.md) · [Innhold](../README.md) · [Oppdrag 14: Har den! Del 5: Poeng og runder →](14-har-den-runder.md)

> Barnets side for dette kapitlet: [wendelborg.github.io/roblox-studio-kurs/oppdrag/13/](https://wendelborg.github.io/roblox-studio-kurs/oppdrag/13/)

**Barnet lærer:** å lage et verktøy som skyter, å bruke raycast for å finne ut hva noe treffer, og å fryse en figur en kort stund.

**Forutsetning:** Oppdrag 10 må være ferdig, med dommerskriptet `HarDen`. Oppdrag 12 er ikke nødvendig, men det er morsommest med roboten, for da kan barnet teste alene.

**Den store ideen:** Alle som løper unna, får en frysepistol. Den som har den, kan ikke skyte. Treffer et skudd en figur, blir den isblå og står fast i 3 sekunder. Pistolen må lade i 5 sekunder mellom skuddene.

Det helt nye er **raycast**: Roblox sender en usynlig strek fra et punkt i en retning og forteller hva den traff først. Forklar det som en lommelykt man ikke kan se. Resten er ting barnet kjenner: verktøy (oppdrag 9), `Anchored` (oppdrag 3), debounce (oppdrag 8), `Highlight` og attributter (oppdrag 10).

**Del A – pistolen:** Et **Tool** i **StarterPack** med en Part som heter `Handle`. Alt i StarterPack havner i ryggsekken til alle spillere. Slå av **CanBeDropped** på verktøyet, så ingen mister den med Backspace.

**Del B – skriptet (Script inni Frysepistol):** Koden står i sin helhet på barnets side. Den har tre funksjoner:

- `skyt` kjører når spilleren klikker (`Tool.Activated`). Den sjekker at spilleren ikke har den og at pistolen er ladet, og sender så en raycast 60 studs i retningen figuren ser (`HumanoidRootPart.CFrame.LookVector`).
- `tegnStraale` lager en tynn neon-Part mellom pistolen og treffpunktet, og lar `Debris` slette den etter 0,2 sekunder. Den er bare pynt, men gjør det mye lettere å sikte.
- `frys` setter `Anchored` på figurens HumanoidRootPart i 3 sekunder og legger på en isblå Highlight. Attributten `Frosset` hindrer at samme figur fryses to ganger samtidig.

Ting som er verdt å forklare:

- `RaycastParams.FilterDescendantsInstances = { figur }` gjør at streken ikke treffer skytterens egen figur. Uten den fryser barnet seg selv, og det er en morsom feil å la barnet oppdage (det er den andre tippeoppgaven).
- `FindFirstAncestorOfClass("Model")` går oppover fra det som ble truffet. Treffer streken en hatt (Accessory) eller en arm, finner den likevel hele figuren.
- `task.spawn(frys, truffet)` kjører frysingen ved siden av, så pistolen kan begynne å lade med en gang i stedet for å vente 3 sekunder først.
- Skriptet kjører på serveren. `Tool.Activated` kommer fram dit av seg selv, så det trengs ingen RemoteEvent. Ulempen er at pistolen skyter dit figuren ser, ikke dit musepekeren peker. Å sikte med musa krever et LocalScript og en RemoteEvent, se «Utforsk videre».
- Det virker også på roboten fra oppdrag 12, fordi `frys` bare trenger en figur med HumanoidRootPart. Mens roboten er Anchored, gjør `MoveTo` ingenting.

**Tippeoppgaver:**

1. «Du fryser den som har den, men står inntil hen. Blir du tatt?» (Ja. Dommeren ser bare at to figurer rører hverandre. Den siste utfordringen fikser dette.)
2. «Hva skjer uten filter-linjen?» (Barnet fryser seg selv.)

**Utfordringer:**

- [ ] Juster frysetida for balanse.
- [ ] Lyd når man skyter (se Utforsk: Lyd og musikk).
- [ ] Tre skudd før lang lading (en teller i stedet for `ladet`).
- [ ] En powerup som gir et ekstra skudd.
- [ ] Frosne figurer kan ikke ta noen: sjekk `figur:GetAttribute("Frosset")` i dommerens `naarFigurRorer`. Det virker med dommeren fra oppdrag 12, der `den` er en figur.

**Hemmelig ord å forklare tilbake:** Raycast

## Kilder

- [Roblox: Raycasting](https://create.roblox.com/docs/workspace/raycasting)
- [Roblox: Tools](https://create.roblox.com/docs/players/tools)

---

[← Oppdrag 12: Har den! Del 3: Robotmotspiller](12-har-den-robot.md) · [Innhold](../README.md) · [Oppdrag 14: Har den! Del 5: Poeng og runder →](14-har-den-runder.md)
