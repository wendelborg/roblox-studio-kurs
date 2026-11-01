# Bonus: 3D-modell i Blender

[← Bonus: 3D-modell i Tinkercad](15-bonus-tinkercad.md) · [Innhold](../README.md) · [Dele spillet med andre →](17-dele-spillet.md)

> Barnets side for dette kapitlet: [wendelborg.github.io/roblox-studio-kurs/bonus-blender/](https://wendelborg.github.io/roblox-studio-kurs/bonus-blender/)

**Barnet lærer:** å lage en 3D-modell i et profesjonelt verktøy, og å gjøre den om til en interaktiv del av spillet.

**Den store ideen:** I Tinkercad bygger man med ferdige former. I Blender kan man forme alt selv. Det er kraftigere, men har en brattere læringskurve. Det er lurt, men ikke nødvendig, å ha gjort Tinkercad-bonusen først.

**Del A – Blender:** Blender er et gratis og svært kraftig 3D-program, det samme som brukes av profesjonelle. Det har mange knapper og kan virke overveldende, men barnet trenger bare en håndfull: **Shift+A** (legg til form), **G** (flytt), **S** (skaler), **R** (roter), **X** (slett) og Ctrl/Cmd+Z (angre). Etter G, S eller R kan man trykke X, Y eller Z for å låse til én akse.

- Last ned fra blender.org og installer det for barnet. Det trengs ingen konto.
- På en bærbar uten mus med hjul: Bruk navigasjonskorset oppe til høyre i 3D-vinduet, eller slå på **Edit → Preferences → Input → Emulate 3 Button Mouse** (Alt + venstreklikk for å rotere visningen).
- Byggeoppgaven er en sopp av en sylinder og en flatklemt kule, slått sammen med **Object → Join** og glattet med **Object → Shade Smooth**. Den er valgt fordi den bare bruker de grunnleggende knappene.
- Eksport: **File → Export → FBX**, med **Selected Objects** avhuket.
- Sett av god tid første gang, og sitt gjerne sammen. Blender kan fort bli frustrerende hvis man trykker feil knapp. Ctrl/Cmd+Z redder det meste.

**Del B – importer til Roblox:** **File → Import 3D**, velg FBX-filen og trykk Import. Skaler med Scale-verktøyet, husk **Anchored**, og gi farge med **Color** i Properties. Opplastede modeller blir sjekket av Roblox, og Studio kan be om innlogging eller godkjenning. Gjør dette sammen. Veldig detaljerte modeller kan bli avvist fordi de har for mange flater, så hold det enkelt.

**Del C – sprettsoppen:** Et skript inni soppen klemmer den sammen i 0,2 sekunder (`Size * Vector3.new(1, 0.7, 1)`) og gir spilleren `JumpHeight = 30` i 5 sekunder. Det er nesten samme kode som hopp-powerupen i oppdrag 11, med debounce fra oppdrag 8. Barnet kjenner altså igjen det meste.

**Eksempelmodell:** Barnets side har en ferdig sopp (`docs/assets/modeller/sopp.obj`). Den kan importeres i Roblox hvis Blender-delen strander, så barnet likevel kan lage sprettsoppen. Den kan også åpnes i Blender for å se hvordan den er bygget.

**Forklar sammen:**

- `Vector3.new(1, 0.7, 1)` betyr «like bred, 70 % så høy, like dyp». Å gange en størrelse med det gjør modellen lavere.
- `vanlig` husker den opprinnelige størrelsen, så soppen kan settes tilbake nøyaktig.

**Utfordringer:**

- [ ] En hoppebane med tre sprettsopper.
- [ ] En rakett av sylinder, kjegle og kuber.
- [ ] Prøv Edit Mode (**Tab**) og ekstruder en side med **E**.
- [ ] En egen powerup-modell til Har den!

---

[← Bonus: 3D-modell i Tinkercad](15-bonus-tinkercad.md) · [Innhold](../README.md) · [Dele spillet med andre →](17-dele-spillet.md)
