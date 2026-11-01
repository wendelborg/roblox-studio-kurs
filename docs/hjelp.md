---
title: Hjelp, det virker ikke!
permalink: /hjelp/
---

Ikke få panikk. Alle programmerere har feil i koden sin, hele tiden. Det som gjør deg god, er å **finne** feilen. Bruk detektivmetoden.

## Detektivmetoden

1. **Les den røde teksten** i Output. Den forteller nesten alltid hvilken linje feilen er på.
2. **Sett inn `print`** før og etter linjen du lurer på. Kommer begge meldingene i Output? Da vet du hvor koden stopper.
3. **Sjekk stavingen.** Store og små bokstaver betyr noe. `Humanoid` med liten h finnes ikke.
4. **Sjekk Anchored.** Faller klossen ned eller forsvinner? Da mangler den `Anchored = true`.
5. **Forklar koden til en bamse,** linje for linje, høyt. Det høres tullete ut, men ekte programmerere gjør dette også. Det har til og med et navn: gummiand-metoden.

<details class="ds-details enklere" data-variant="tinted" markdown="1"><summary>Dette ble for vanskelig – forklar enklere</summary>
<div markdown="1">
Når noe ikke virker, gjør du dette:

1. Se etter **rød tekst** nederst i Studio. Les den høyt.
2. Finn **tallet** i den røde teksten. Det er linjen der feilen er.
3. Se nøye på den linjen. Mangler det et tegn? Er noe stavet feil?

Finner du det ikke? Spør en voksen. Det er helt lov!
</div>
</details>

## De vanligste feilene

| Feilmelding eller det som skjer | Hva det betyr |
| --- | --- |
| `Expected 'end'` | En `if`, `for`, `while` eller `function` mangler sin `end`. |
| `attempt to index nil` | Du prøvde å finne noe som ikke finnes. Ofte er det en skrivefeil i et navn. |
| `is not a valid member of` | Navnet i koden er ikke likt navnet i Explorer. |
| Studio fryser | En `while true`-løkke mangler `task.wait()`. |
| Ingenting skjer | Skriptet ligger på feil sted, eller det er et LocalScript i stedet for et Script. |

## Slå opp selv {#sla-opp}

Ekte programmerere husker ikke alt. De slår opp! Roblox har et stort oppslagsverk som forteller alt om alle tingene i Studio. Det er på engelsk, så gjør det gjerne sammen med en voksen første gangene.

Hver ting i Roblox, som en **Part** eller en **Humanoid**, har sin egen side. Siden er delt i tre:

| På siden står det | Det betyr | Eksempel fra Humanoid |
| --- | --- | --- |
| **Properties** | Egenskaper, det du kan endre | `WalkSpeed`, `JumpHeight`, `Health` |
| **Methods** | Ting den kan gjøre, med kolon | `TakeDamage`, `MoveTo` |
| **Events** | Dørklokker som ringer | `Died`, `Running` |

Prøv selv:

- [ ] Åpne siden om [Humanoid](https://create.roblox.com/docs/reference/engine/classes/Humanoid) og finn `WalkSpeed`. Hva står det om den? Prøv å finne `JumpHeight` også.
- [ ] Finn en Event på Humanoid-siden som heter `Died`. Kan du lage en kloss som skriver «Å nei!» i Output når du dør?
- [ ] Åpne siden om [Part](https://create.roblox.com/docs/reference/engine/classes/Part) og finn en egenskap du ikke har prøvd før. Prøv den!

<details class="ds-details enklere" data-variant="tinted" markdown="1"><summary>Dette ble for vanskelig – hvordan leser jeg en engelsk side?</summary>
<div markdown="1">
Du trenger ikke forstå alt. Se etter **navnene** du kjenner fra koden, som `WalkSpeed`. De er de samme på engelsk og i koden din.

Nettleseren kan også oversette siden til norsk. Høyreklikk og velg **Oversett** eller **Translate**. Navnene i koden blir ikke oversatt, og det er bra, for de må skrives akkurat sånn.
</div>
</details>

Roblox har også en side om [selve Luau-språket](https://create.roblox.com/docs/luau), med variabler, if, løkker og funksjoner, og en egen guide til [Roblox Studio](https://create.roblox.com/docs/studio), som forklarer knappene, vinduene og verktøyene i programmet.

## Liten ordbok for feilmeldinger

- **Expected** betyr «forventet». Datamaskinen ventet på noe som ikke kom.
- **nil** betyr «ingenting».
- **index** betyr å slå opp noe, for eksempel `kloss.Size`.
- **not a valid member** betyr «finnes ikke her».

Ferdig med kurset? Roblox har flere gode, gratis gjennomganger på [create.roblox.com/docs](https://create.roblox.com/docs). Neste steg kan være knapper på skjermen (GUI) og LocalScripts.
