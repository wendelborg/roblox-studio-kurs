# Oppdrag 14: Har den! Del 5: Poeng og runder

[← Oppdrag 13: Har den! Del 4: Frysepistol](13-har-den-frysepistol.md) · [Innhold](../README.md) · [Oppdrag 15: Har den! Del 6: Butikken →](15-har-den-butikk.md)

> Barnets side for dette kapitlet: [wendelborg.github.io/roblox-studio-kurs/oppdrag/14/](https://wendelborg.github.io/roblox-studio-kurs/oppdrag/14/)

**Barnet lærer:** å lage en poengtavle som endrer seg over tid, å styre et helt spill med en spill-løkke (game loop), og å la flere skript samarbeide.

**Forutsetning:** Dommerskriptet fra oppdrag 12 (versjonen som jobber med figurer). Roboten er valgfri. Dette er det mest omfattende oppdraget i kurset. Sett gjerne av to økter: del A–C i den første, del D–E i den andre.

**Den store ideen:** Har den! får runder. Hver spiller har to tall i `leaderstats`:

- **Sekunder:** stillingen i runden. +1 per sekund uten den, −1 per sekund med den. Nullstilles hver runde. Den som er nede på −60, mister den automatisk til en tilfeldig spiller.
- **Poeng:** lommeboka. Når runden er slutt, legges sekundene til (minus teller som 0), og vinneren får 20 i bonus. Poengene brukes i butikken i oppdrag 15.

Grunnen til to tall: Hvis det samme tallet brukes til å vinne og til å handle, faller man på tavla hver gang man kjøper noe. Det er forvirrende for barn.

**Arkitektur – fire skript som samarbeider:**

| Skript | Jobb | Snakker med de andre via |
| --- | --- | --- |
| `HarDen` (dommeren) | Hvem har den, hvem tar hvem | lytter på `DenBeskjed`, leser `RundeAktiv` |
| `Poeng` | Teller sekunder, minus-regelen | leser `RundeAktiv` og `HarDen`, sender `DenBeskjed` |
| `Runder` (spill-løkka) | Venteområde, runde, poengutdeling | setter `RundeAktiv`, sender `DenBeskjed` |
| `Frysepistol` | Som før | (uendret) |

To nye kommunikasjonsmåter:

- **Attributt på Workspace:** `RundeAktiv` er en felles «lapp» alle skript kan lese.
- **BindableEvent** (`ServerStorage/DenBeskjed`): en hendelse ett serverskript kan sende til et annet. Spill-løkka og poengskriptet ber dommeren om å velge en tilfeldig spiller (`"tilfeldig"`) eller fjerne den (`"ingen"`). Kun dommeren endrer hvem som har den, og det gjør koden lettere å feilsøke.

**Del A – bygging:** `Venteomraade` (stor plattform med vegger, gjerne i lufta), `Arena` (usynlig, ikke-kolliderende merke midt i lekeområdet) og `Klokke` (tavle med SurfaceGui og TextLabel, som rekordtavla i sluttprosjektet).

**Del B – BindableEvent** `DenBeskjed` i ServerStorage.

**Del C – endre dommeren:** To endringer, ikke hele skriptet på nytt:

1. Tillegg i den første `if`-en i `naarFigurRorer`: ingen kan ta noen når `RundeAktiv` ikke er `true`.
2. De fire nederste linjene (der roboten fikk den fra start) byttes med `velgTilfeldig` og en lytter på `DenBeskjed`. `velgTilfeldig` bygger en liste over kandidater (alle spillerfigurer og roboten, unntatt den som har den) og trekker en med `math.random(1, #kandidater)`. Det er første gang barnet lager en liste selv med `{}` og `table.insert`. Lodd-i-hatt-metaforen på barnets side fungerer godt.

Hjelp gjerne til med å finne riktig sted å endre. Det er en ny ferdighet å redigere et eksisterende skript fra en beskrivelse.

**Del D – `Poeng`:** Lager `leaderstats` med to `IntValue`, og en løkke som tikker hvert sekund. Merk: Hvis spillet også har poengtavla fra oppdrag 8, får spilleren to `leaderstats`-mapper. Lag Har den! i et eget spill, eller slå av det gamle skriptet (Enabled av).

**Del E – `Runder`:** En `while true`-løkke med tre faser. `PivotTo` flytter figurene. Nedtellingen bruker en tellende løkke baklengs (`for t = VENTETID, 1, -1`). `finnVinner` er samme «finn største»-mønster som «finn nærmeste» i oppdrag 12. Konstanter med store bokstaver (`RUNDETID`) er en vanlig konvensjon. Be barnet sette dem lavt mens dere tester.

**Kjente begrensninger** (fine samtaleemner, og noen er utfordringer):

- Den som dør i venteområdet, dukker opp ved en SpawnLocation i arenaen. Det gjør ikke noe, siden ingen kan ta noen før runden starter.
- Uavgjort: Den første med flest sekunder vinner (`>` og ikke `>=`).
- Poengene forsvinner når serveren stenger. DataStore er beskrevet i Utforsk og i [Slik fungerer serveren](21-serveren.md).

**Tippeoppgaver:** Hvorfor korte tider mens man tester? Hvem vinner ved uavgjort?

**Hemmelig ord å forklare tilbake:** Spill-løkke (game loop)

## Kilder

- [Roblox: In-experience leaderboards](https://create.roblox.com/docs/players/leaderboards)
- [Roblox: BindableEvent](https://create.roblox.com/docs/reference/engine/classes/BindableEvent)
- [Roblox: Attributes](https://create.roblox.com/docs/studio/properties#attributes)

---

[← Oppdrag 13: Har den! Del 4: Frysepistol](13-har-den-frysepistol.md) · [Innhold](../README.md) · [Oppdrag 15: Har den! Del 6: Butikken →](15-har-den-butikk.md)
