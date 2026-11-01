---
utforsk: Camera
permalink: /utforsk/kamera/
---

## Hva er det?

**Kameraet** er øynene dine i spillet. Vanligvis følger det etter figuren din, og du kan snu det med musa. Men med kode kan du ta over kameraet og bestemme nøyaktig hvor det skal være og hva det skal se på.

Hver spiller har sitt eget kamera. Derfor styres det fra et **LocalScript**.

<details class="ds-details enklere" data-variant="tinted" markdown="1"><summary>Dette ble for vanskelig – forklar enklere</summary>
<div markdown="1">
Tenk på en filmfotograf som vanligvis går rett bak deg. Med kode kan du be fotografen om å klatre opp i et tre og filme hele banen ovenfra, og så komme ned igjen.
</div>
</details>

## Hva kan du lage?

- En flyover av obbyen når spillet starter
- Et spill sett rett ovenfra, som et brettspill
- Et filmklipp når du låser opp den gylne døra

## Prøv selv: Se banen ovenfra

Legg et LocalScript i **StarterPlayer → StarterPlayerScripts**.

<div class="skriv-selv" markdown="1">
```lua
local kamera = workspace.CurrentCamera
task.wait(2)

kamera.CameraType = Enum.CameraType.Scriptable
kamera.CFrame = CFrame.lookAt(Vector3.new(0, 80, 60), Vector3.new(0, 0, 0))

task.wait(5)
kamera.CameraType = Enum.CameraType.Custom
```
</div>

<div class="ds-card hva-skjer" data-variant="tinted" markdown="1">
### Hva skjer når du trykker Play?

1. `workspace.CurrentCamera` er kameraet ditt.
2. Etter 2 sekunder tar skriptet over kameraet med `Scriptable`.
3. `CFrame.lookAt` plasserer kameraet høyt oppe, 80 i høyden, og får det til å se mot midten av verden.
4. Etter 5 sekunder gir skriptet kameraet tilbake med `Custom`, og det følger figuren din igjen.
</div>

## Utfordringer

- [ ] Flytt kameraet slik at det ser på målet ditt i obbyen.
- [ ] Bruk TweenService på `kamera.CFrame`, så kameraet glir mykt over banen.
- [ ] Lag et brettspill-kamera som alltid er rett over figuren din. Tips: en løkke og `figur.HumanoidRootPart.Position`.
