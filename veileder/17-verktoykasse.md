# Verktøykasse

[← Dele spillet med andre](16-dele-spillet.md) · [Innhold](../README.md) · [Om nettsiden →](18-om-nettsiden.md)

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

**Når kurset er ferdig:** Roblox sin egen dokumentasjon på create.roblox.com/docs har gode, gratis gjennomganger. Neste naturlige steg er LocalScripts og knapper på skjermen (GUI), og ModuleScripts for å dele kode mellom skript.

---

[← Dele spillet med andre](16-dele-spillet.md) · [Innhold](../README.md) · [Om nettsiden →](18-om-nettsiden.md)
