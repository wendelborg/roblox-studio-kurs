---
utforsk: LocalScript
permalink: /utforsk/localscript/
---

## Hva er det?

Alle skriptene du har laget i kurset, er vanlige **Script**. De kjører på **serveren**, maskinen hos Roblox som bestemmer i spillet.

Et **LocalScript** kjører på **din egen maskin**. Det kan gjøre ting som serveren ikke kan: lese hvilke taster du trykker på, styre kameraet og vise ting på skjermen din.

Men et LocalScript kan ikke bestemme over spillet for alle andre. Endrer et LocalScript fargen på en kloss, er det bare du som ser det!

<details class="enklere" markdown="1"><summary>Dette ble for vanskelig – forklar enklere</summary>
<div class="enkel-tekst" markdown="1">
Serveren er dommeren på banen. Den bestemmer reglene for alle.

Et LocalScript er som tankene dine mens du spiller. Du vet hvilke taster du trykker på, og hva du ser på, men du kan ikke bestemme over de andre spillerne.
</div>
</details>

## Hvor skal et LocalScript ligge?

Et LocalScript kjører ikke hvis det ligger i Workspace. Det må ligge et sted som hører til spilleren:

| Sted | Når det kjører |
| --- | --- |
| **StarterPlayer → StarterPlayerScripts** | Når spilleren kommer inn i spillet |
| **StarterPlayer → StarterCharacterScripts** | Hver gang figuren dukker opp |
| **StarterGui** | Sammen med det som vises på skjermen |

## Prøv selv: Trykk på en tast

Legg et LocalScript i **StarterPlayer → StarterPlayerScripts**.

<div class="skriv-selv" markdown="1">
```lua
local UserInputService = game:GetService("UserInputService")

local function tastTrykket(input, opptatt)
	if opptatt then
		return
	end
	if input.KeyCode == Enum.KeyCode.F then
		print("Du trykket på F!")
	end
end

UserInputService.InputBegan:Connect(tastTrykket)
```
</div>

<div class="hva-skjer" markdown="1">
### Hva skjer når du trykker på F?

1. `UserInputService` følger med på tastaturet, musa og skjermen din.
2. Hendelsen `InputBegan` ringer hver gang du trykker på noe.
3. `opptatt` er true hvis du skriver i chatten. Da skal vi ikke gjøre noe.
4. Var det F du trykket på, skrives det i Output.
</div>

## Utfordringer

- [ ] Gjør det sånn at du hopper ekstra høyt når du trykker J.
- [ ] Endre fargen på en kloss med en tast. Test med 2 spillere: Ser den andre spilleren fargen?
- [ ] Les om **RemoteEvent** under Utforsk videre for å finne ut hvordan et LocalScript kan be serveren om å gjøre noe for alle.
