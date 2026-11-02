# Verktøykasse

[← Tips og triks](22-tips-og-triks.md) · [Innhold](../README.md) · [Om nettsiden →](24-om-nettsiden.md)

> Barnets side for dette kapitlet: [wendelborg.github.io/roblox-studio-kurs/hjelp/](https://wendelborg.github.io/roblox-studio-kurs/hjelp/)

**Detektivmetoden når noe ikke virker:**

1. **Les den røde teksten** i Output. Den sier nesten alltid hvilken linje det gjelder.
2. **Sett inn `print`** før og etter linjen du lurer på. Kommer begge meldingene? Da vet du hvor det stopper.
3. **Sjekk stavingen.** `Workspace` og `workspace` er ikke det samme for alle ting. `Humanoid` med liten h finnes ikke.
4. **Sjekk Anchored.** Faller klossen ned eller forsvinner? Den mangler `Anchored = true`.
5. **Forklar koden til en bamse,** linje for linje, høyt. Det høres tullete ut, men proffe programmerere gjør dette også.

**De vanligste feilene:**

| Feilmelding eller symptom | Hva det betyr |
| --- | --- |
| `Expected 'end'` | En `if`, `for`, `while` eller `function` mangler sin `end` |
| `attempt to index nil` | Du prøvde å finne noe som ikke finnes, ofte en skrivefeil i et navn |
| `is not a valid member of` | Navnet stemmer ikke med det som står i Explorer |
| Studio fryser | En `while true`-løkke mangler `task.wait()` |
| Ingenting skjer | Skriptet ligger feil sted, eller det er et LocalScript i stedet for Script |

**Ordliste – ordene barnet samler:** Hvert oppdrag har ett hemmelig ord. De femten ordene gir diplom i ordboka på barnets side.

| Oppdrag | Ord | Engelsk | Med egne ord |
| --- | --- | --- | --- |
| 1 | Parent / Child | parent / child | Forelder og barn i Explorer-treet |
| 2 | Variabel | variable | En boks med navnelapp |
| 3 | Anchored | anchored | Festet med en usynlig spiker, faller ikke |
| 4 | Hendelse (event) | event | En dørklokke koden venter på |
| 5 | Betingelse | condition | Et ja/nei-spørsmål med `if` |
| 6 | Løkke | loop | Et refreng som gjentas |
| 7 | Funksjon | function | En oppskrift med navn |
| 8 | Debounce | debounce | En vakt som hindrer at ting skjer for mange ganger |
| 9 | Backpack | backpack | Ryggsekken. Et verktøy der er ikke i hånden. |
| 10 | Attributt | attribute | En lapp med navn som alle skript kan lese |
| 11 | Tilfeldig (random) | random | Et tall datamaskinen velger, som en terning |
| 12 | NPC | non-player character | En figur som styres av datamaskinen |

Ordboka har også en del med flere ord barnet møter, som String, Boolean, nil, Humanoid, Model, leaderstats, server og klient, huskeliste (tabell), sjekkpunkt og DataStore. Alle ordene har både det engelske ordet og hva det betyr på norsk, så barnet kjenner dem igjen i oppslagsverket. De er ikke nødvendige for diplomet. Alle ordene ligger i `docs/_data/ordbok.yml`, og `hemmelig: true` bestemmer hvilke som teller for diplomet.

**Gjør det til et spill:** Skriv ut ordlista og la barnet krysse av hvert ord det kan forklare. Når alle de hemmelige ordene er krysset av, blir det diplom og en belønning dere har avtalt på forhånd.

**Oppslagsverk:** Roblox har et fullstendig oppslagsverk på engelsk. Bør barnet bruke det? Ja, men gradvis og sammen med deg. Å slå opp er en av de viktigste ferdighetene en programmerer har, og barnet merker fort at navnene i oppslagsverket er de samme som i koden.

- **Fra rundt oppdrag 4** (Humanoid) kan dere slå opp sammen: «Hva mer kan en Humanoid gjøre?» Hjelp-siden på barnets side har en del som heter «Slå opp selv», med en tabell som forklarer Properties, Methods og Events, og tre små oppgaver.
- **Etter Har den!** kan barnet ofte prøve selv, med nettleserens oversettelse som hjelp. Kortene under «Utforsk videre» på forsiden lenker rett til riktig side i oppslagsverket.
- **For deg som voksen** er disse mest nyttige:
  - [Engine API reference](https://create.roblox.com/docs/reference/engine): alle klasser, egenskaper, metoder og hendelser.
  - [Luau i Roblox Creator Hub](https://create.roblox.com/docs/luau): språket, med datatyper, løkker, funksjoner og tabeller.
  - [Roblox Studio-dokumentasjonen](https://create.roblox.com/docs/studio): selve programmet, med vinduer, verktøy, testing, samarbeid og innstillinger. Nyttig når dere lurer på hvor en knapp er, eller hva et vindu gjør.
  - [Hurtigtaster i Studio](https://create.roblox.com/docs/studio/shortcuts): hele lista. Se også [Tips og triks](22-tips-og-triks.md).
  - [luau.org](https://luau.org): den offisielle siden til språket, med en kort gjennomgang av syntaksen. Fint for deg som kan programmere fra før.
- **Søketips:** Søk på «roblox» pluss navnet på det dere lurer på, for eksempel «roblox Humanoid WalkSpeed». Treffet fra create.roblox.com er det offisielle. Svar fra Roblox Developer Forum er ofte gode, men kan være gamle.

**Når kurset er ferdig:** Forsiden på barnets side har en bolk som heter «Utforsk videre» med 15 konsepter sortert etter vanskelighetsgrad, fra «Trykk E»-knapper, lyd, partikler og himmel til GUI, RemoteEvent og DataStore. Hvert konsept har en egen side under `docs/utforsk/` med forklaring, ideer, et lite eksempel med «Forklar hver linje», utfordringer og lenker videre til Roblox sin dokumentasjon: både en forklarende side og oppslagsverket. Lista ligger i `docs/_data/utforsk.yml`, der `slug` er adressen til siden og `guide` er lenken til Roblox sin forklaring. Roblox har også egne gratis kurs på create.roblox.com/docs.

---

[← Tips og triks](22-tips-og-triks.md) · [Innhold](../README.md) · [Om nettsiden →](24-om-nettsiden.md)
