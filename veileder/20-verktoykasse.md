# Verktøykasse

[← Tips og triks](19-tips-og-triks.md) · [Innhold](../README.md) · [Om nettsiden →](21-om-nettsiden.md)

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

**Ordliste – ordene barnet samler:**

| Ord | Med egne ord |
| --- | --- |
| Parent / Child | Forelder og barn i Explorer-treet |
| String | Tekst i anførselstegn |
| Variabel | En boks med navnelapp |
| Boolean | Ja eller nei (`true` / `false`) |
| Anchored | Festet med en usynlig spiker, faller ikke |
| Hendelse (event) | En dørklokke koden venter på |
| Betingelse | Et ja/nei-spørsmål med `if` |
| Løkke | Et refreng som gjentas |
| Funksjon | En oppskrift med navn |
| Parameter | Ingrediensen du sender inn i oppskriften |
| Attributt | En lapp med navn som alle skript kan lese |
| Debounce | En vakt som hindrer at ting skjer for mange ganger |

**Gjør det til et spill:** Skriv ut ordlista og la barnet krysse av hvert ord det kan forklare. Når alle ordene er krysset av, blir det diplom og en belønning dere har avtalt på forhånd.

**Oppslagsverk:** Roblox har et fullstendig oppslagsverk på engelsk. Bør barnet bruke det? Ja, men gradvis og sammen med deg. Å slå opp er en av de viktigste ferdighetene en programmerer har, og barnet merker fort at navnene i oppslagsverket er de samme som i koden.

- **Fra rundt oppdrag 4** (Humanoid) kan dere slå opp sammen: «Hva mer kan en Humanoid gjøre?» Hjelp-siden på barnets side har en del som heter «Slå opp selv», med en tabell som forklarer Properties, Methods og Events, og tre små oppgaver.
- **Etter Har den!** kan barnet ofte prøve selv, med nettleserens oversettelse som hjelp. Kortene under «Utforsk videre» på forsiden lenker rett til riktig side i oppslagsverket.
- **For deg som voksen** er disse mest nyttige:
  - [Engine API reference](https://create.roblox.com/docs/reference/engine): alle klasser, egenskaper, metoder og hendelser.
  - [Luau i Roblox Creator Hub](https://create.roblox.com/docs/luau): språket, med datatyper, løkker, funksjoner og tabeller.
  - [Roblox Studio-dokumentasjonen](https://create.roblox.com/docs/studio): selve programmet, med vinduer, verktøy, testing, samarbeid og innstillinger. Nyttig når dere lurer på hvor en knapp er, eller hva et vindu gjør.
  - [Hurtigtaster i Studio](https://create.roblox.com/docs/studio/shortcuts): hele lista. Se også [Tips og triks](19-tips-og-triks.md).
  - [luau.org](https://luau.org): den offisielle siden til språket, med en kort gjennomgang av syntaksen. Fint for deg som kan programmere fra før.
- **Søketips:** Søk på «roblox» pluss navnet på det dere lurer på, for eksempel «roblox Humanoid WalkSpeed». Treffet fra create.roblox.com er det offisielle. Svar fra Roblox Developer Forum er ofte gode, men kan være gamle.

**Når kurset er ferdig:** Forsiden på barnets side har en bolk som heter «Utforsk videre». Den har 14 konsepter sortert etter vanskelighetsgrad, fra «Trykk E»-knapper, lyd og partikler til GUI, RemoteEvent og DataStore. Hvert konsept lenker til Roblox sin engelske dokumentasjon. Listen ligger i `docs/_data/utforsk.yml` og er lett å utvide. Roblox har også egne gratis kurs på create.roblox.com/docs.

---

[← Tips og triks](19-tips-og-triks.md) · [Innhold](../README.md) · [Om nettsiden →](21-om-nettsiden.md)
