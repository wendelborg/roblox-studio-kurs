# Bonus: 3D-modell i Tinkercad

[← Bonus: Terreng](14-bonus-terreng.md) · [Innhold](../README.md) · [Bonus: 3D-modell i Blender →](16-bonus-blender.md)

> Barnets side for dette kapitlet: [wendelborg.github.io/roblox-studio-kurs/bonus-tinkercad/](https://wendelborg.github.io/roblox-studio-kurs/bonus-tinkercad/)

**Barnet lærer:** å lage egne former, først med solid modellering i Studio og så i Tinkercad, og å bruke modellen i spillet med kode.

Dette er den enkleste av de to 3D-bonusene. Blender-bonusen er for den som vil videre.

**Den store ideen:** Det finnes to veier til egne former. **Solid modellering** i Studio setter sammen deler (Union) og skjærer bort biter (Negate). **Et eget 3D-program** som Tinkercad lager en fil som importeres og blir en **MeshPart**. En MeshPart oppfører seg som en vanlig kloss, med `Touched`, `Anchored` og alt det andre.

**Del A – solid modellering (en mynt med hull):**

1. Lag en flat Cylinder og en mindre Cylinder midt i den.
2. Gjør den lille til et hull med **Negate** (fanen Model, eller Ctrl+Shift+N, på Mac Cmd+Shift+N).
3. Marker begge og trykk **Union** (Ctrl+Shift+G, på Mac Cmd+Shift+G).
4. **Separate** (Ctrl+Shift+U, på Mac Cmd+Shift+U) deler den opp igjen. Ingenting blir ødelagt.

**Byggeoppgave:** En pokal av sylindre og en hul kule.

**Del B – Tinkercad:** Tinkercad er et gratis 3D-program i nettleseren, laget for barn og nybegynnere. Barn trenger hjelp fra en voksen til å lage konto. Modellen bygges av ferdige former, der noen kan gjøres om til **Hole** (samme idé som Negate). Til slutt eksporterer dere den som **OBJ**.

**Del C – importer til Roblox:** **File → Import 3D**, velg OBJ-filen og trykk Import. Skaler med Scale-verktøyet, og husk **Anchored**. Opplastede modeller blir sjekket av Roblox, og Studio kan be om innlogging eller godkjenning. Gjør dette sammen.

**Del D – bruk modellen:** Pokalen blir målet i obbyen. Et skript inni den bruker `Touched` og debounce (oppdrag 8), og en `for`-løkke som snur pokalen 10 grader 36 ganger:

```lua
pokal.CFrame = pokal.CFrame * CFrame.Angles(0, math.rad(10), 0)
```

**Eksempelmodell:** Barnets side har en ferdig pokal (`docs/assets/modeller/pokal.obj`) som kan importeres hvis Tinkercad-delen blir for mye, eller for å se hvordan resultatet blir.

**Forklar sammen:**

- `CFrame` er både hvor noe er og hvilken vei det peker.
- `CFrame.Angles` snur. `math.rad` gjør om grader til radianer, som er det Roblox regner i. Det holder å si «gjør om grader til Roblox-tall».
- 36 × 10 = 360 grader, altså én hel runde. Fin hoderegning!

**Utfordringer:**

- [ ] En egen powerup-modell til Har den!
- [ ] En pokal som snurrer for alltid (`while`-løkke).
- [ ] En modell av kjæledyret eller drømmebilen.
- [ ] Farge og materiale med `Color` og `Material`.

---

[← Bonus: Terreng](14-bonus-terreng.md) · [Innhold](../README.md) · [Bonus: 3D-modell i Blender →](16-bonus-blender.md)
