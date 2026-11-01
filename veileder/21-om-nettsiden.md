# Om nettsiden

[← Verktøykasse](20-verktoykasse.md) · [Innhold](../README.md)

Barnets side ligger i mappa `docs/` og bygges automatisk av GitHub Pages med Jekyll.

**Slå på GitHub Pages (én gang):** Gå til **Settings → Pages** i repoet. Under **Build and deployment** velger du **Deploy from a branch**, så branch `main` og mappe `/docs`. Etter et par minutter ligger siden på https://wendelborg.github.io/roblox-studio-kurs/.

**Slik er den bygget opp:**

| Fil | Innhold |
| --- | --- |
| `docs/index.html` | Forsiden med oppdragskart, fremdrift og oppsett av Studio |
| `docs/oppdrag/1.md` … `12.md` | Ett oppdrag per fil |
| `docs/sluttprosjekt.md` | Min egen obby |
| `docs/bonus-terreng.md` | Bonus: terreng |
| `docs/bonus-tinkercad.md` | Bonus: 3D-modell i Tinkercad |
| `docs/bonus-blender.md` | Bonus: 3D-modell i Blender |
| `docs/hjelp.md` | Detektivmetoden og vanlige feilmeldinger |
| `docs/ordbok.html` | Ordbok og diplom |
| `docs/_data/oppdrag.yml` | Titler, hemmelige ord og farger for hvert oppdrag |

| `docs/_data/ordbok.yml` | Ordene i ordboka |
| `veileder/` | Veilederguiden, ett kapittel per fil. README.md er innholdsfortegnelsen. |

Oppdragene er vanlig Markdown. Disse byggeklossene kan brukes i dem:

- `- [ ] tekst` blir en avkrysningsboks som huskes.
- `<details class="enklere" markdown="1">` gir en «Dette ble for vanskelig»-knapp.
- `<div class="boks gjett" markdown="1">` lager en «Gjett først!»-boks. Bytt `gjett` med `obs`, `ide` eller `detektiv` for andre typer bokser.
- `<div class="hva-skjer" markdown="1">` gjør en nummerert liste til en tidslinje.
- `<div class="skriv-selv" markdown="1">` rundt en kodeblokk hindrer kopiering.

**Teste lokalt:** `cd docs && jekyll serve`, og åpne http://localhost:4000/roblox-studio-kurs/

---

[← Verktøykasse](20-verktoykasse.md) · [Innhold](../README.md)

**Lagret fremgang:** Avkrysningene lagres i nettleseren med faste nøkler, ikke med oppdragsnummer. Hvert oppdrag har en `nokkel` i `docs/_data/oppdrag.yml` som aldri skal endres. Utfordringer og ord lagres med en nøkkel laget av selve teksten. Derfor kan oppdrag flyttes og nummereres om uten at fremgangen havner feil. Endrer du teksten i en utfordring, regnes den som en ny utfordring og må krysses av på nytt.

**Forklar hver linje:** Under hvert skript på barnets side er det en knapp som viser en forklaring på barnespråk for hver linje. Forklaringene lages automatisk av `docs/assets/forklar.js`, som kjenner igjen byggeklossene kurset bruker: variabler, egenskaper, if, løkker, funksjoner, hendelser og så videre. Hvis du skriver et nytt skript med en linje den ikke forstår, står det «Denne linjen har ingen ferdig forklaring ennå». Da kan du legge linjen og en egen forklaring i `SPESIELLE` øverst i filen.
