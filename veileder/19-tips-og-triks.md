# Tips og triks

[← Slik fungerer serveren](18-serveren.md) · [Innhold](../README.md) · [Verktøykasse →](20-verktoykasse.md)

Små ting som sparer tid i Roblox Studio, både for deg og barnet. Ta gjerne ett tips om gangen. Barn liker å lære hurtigtaster, og det føles som en superkraft å kunne dem.

## Hurtigtaster

På Mac bruker du **Cmd** der det står **Ctrl**.

**Bygge**

| Tast | Hva den gjør |
| --- | --- |
| **Ctrl+D** | Dupliser det som er valgt. Kopien legger seg oppå originalen, så dra den bort. |
| **Ctrl+G** | Grupper det som er valgt, til en Model |
| **Ctrl+U** | Løs opp en gruppe |
| **Ctrl+1 / 2 / 3 / 4** | Bytt verktøy: Select, Move, Scale og Rotate |
| **Ctrl+Z** og **Ctrl+Shift+Z** | Angre og gjør om |
| **Ctrl+I** | Insert Object, altså sett inn noe i det som er valgt |
| **Ctrl+P** | Quick Open: Søk etter noe i Explorer med navn |
| **Esc** | Fjern det som er valgt |

**Kamera**

| Tast | Hva den gjør |
| --- | --- |
| **F** | Zoom inn på det som er valgt. Det beste tipset av alle når man har «mistet» en kloss! |
| **W A S D** | Fly rundt i verden. Klikk i 3D-ruta først. |
| **Q** og **E** | Fly ned og opp |
| Høyre museknapp + dra | Snu deg og se deg rundt |
| **Shift** | Hold inne for å fly saktere og mer nøyaktig |
| Terningen øverst til høyre | Klikk en side eller et hjørne for å se fra den vinkelen. Toppen gir oversikt ovenfra. Slås på under **View → View Selector**. |

**Teste**

| Tast | Hva den gjør |
| --- | --- |
| **F5** | Play: Start spillet med figuren din |
| **F8** | Run: Start spillet uten figur. Fint for å se på fysikk eller roboten. |
| **Shift+F5** | Stopp testen |

Hurtigtaster kan endres under **File → Advanced → Customize Shortcuts**. Der kan du også gi taster til ting som ikke har noen fra før.

## Lagre ting du har laget, og bruke dem igjen

Barnet bygger lavaklosser, mynter, dører og powerups i flere oppdrag. I stedet for å bygge dem på nytt i hvert spill, kan dere lagre dem og hente dem fram igjen.

### I Toolbox (Lagre til Roblox)

1. Grupper tingen til en Model (Ctrl+G), med skriptet inni. For eksempel en lavakloss med lava-skriptet.
2. Gi modellen et godt navn, for eksempel `Lava`.
3. Høyreklikk modellen i Explorer og velg **Save to Roblox**. Fyll inn navn og beskrivelse, og la den være privat.
4. Nå ligger den i **Toolbox → Inventory → My Models**, eller **Creations** i nyere Studio-versjoner. Derfra kan den dras inn i hvilket som helst spill.

**Lurt å lagre slik:** lavaklossen, mynten, poengtavla (skriptet fra oppdrag 8), dommerskriptet fra Har den!, powerups og roboten. Da kan barnet sette sammen et nytt spill av sine egne «byggeklosser» på noen minutter.

### Som fil på datamaskinen

Høyreklikk en modell eller et skript og velg **Save to File**. Da lagres den som en `.rbxm`-fil. Med **Insert from File** kan den hentes inn igjen. Det er fint som sikkerhetskopi, eller for å flytte ting mellom maskiner uten å laste opp noe.

### Packages: én kopi, mange steder

Høyreklikk en modell og velg **Convert to Package**. En package er en modell som oppdateres overalt når du endrer den ett sted. Bruker barnet den samme lavaklossen i ti spill og vil endre farge eller skade, holder det å endre den én gang. Dette er mer avansert, og tar seg best ut når barnet har flere spill.

## Gjør Studio barnevennlig

- **Større skrift i skriptene:** **File → Studio Settings → Script Editor → Font size**. Stor skrift hjelper mye for barn som skriver av kode.
- **Hold de tre vinduene åpne:** Explorer, Properties og Output. Lukkes de ved et uhell, ligger de under fanen **View** eller menyen **Window**.
- **Filtrer Explorer:** Søkefeltet øverst i Explorer finner ting med navn. Det er fint når verden blir full.
- **Rydd i Output:** Med knappen for å tømme Output slipper dere gamle meldinger som forvirrer.
- **Snap:** Under fanen Model kan dere velge hvor langt Move og Rotate flytter hver gang. 1 stud og 15 grader gjør det lettere å bygge pent.
- **Collisions:** Slås dette av under fanen Model, kan klosser legges inni hverandre mens man bygger.

## Unngå å miste arbeid

- **Lagre ofte** med **Ctrl+S**. Studio har automatisk gjenoppretting, men stol ikke på den.
- **Publiserte spill har versjonshistorikk.** I Creator Dashboard kan dere gå tilbake til en tidligere versjon hvis noe går helt galt.
- **Lag en kopi før store endringer.** **File → Save to File As…** med et nytt navn, for eksempel `obby-før-har-den.rbxl`.

## Om AI-assistenten i Studio

Nyere versjoner av Studio har en innebygd AI-assistent som kan skrive skript. Den kan være nyttig senere, men kurset handler om at barnet skriver og forstår koden selv. Avtal gjerne at den først brukes etter kurset, eller bare til å forklare feilmeldinger.

## Små triks som gir stor effekt

- **Høyreklikk → Select Children** velger alt inni en modell. Det er raskt for å endre farge eller materiale på mange klosser samtidig.
- **Velg flere og endre i Properties:** Endrer du en egenskap mens flere ting er valgt, endres den på alle.
- **Skriv `print` overalt** når noe ikke virker. Det er den enkleste feilsøkingen som finnes, og den samme som proffene bruker.

## Kilder

- [Roblox: Studio shortcuts](https://create.roblox.com/docs/studio/shortcuts)
- [Roblox: Collaboration](https://create.roblox.com/docs/projects/collaboration)

---

[← Slik fungerer serveren](18-serveren.md) · [Innhold](../README.md) · [Verktøykasse →](20-verktoykasse.md)
