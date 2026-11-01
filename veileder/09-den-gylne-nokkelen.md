# Oppdrag 9: Den gylne nøkkelen

[← Oppdrag 8: Myntjakt med poengtavle](08-myntjakt-med-poengtavle.md) · [Innhold](../README.md) · [Oppdrag 10: Har den! →](10-har-den.md)

> Barnets side for dette kapitlet: [wendelborg.github.io/roblox-studio-kurs/oppdrag/9/](https://wendelborg.github.io/roblox-studio-kurs/oppdrag/9/)

**Barnet lærer:** verktøy (Tool), forskjellen på å *ha* noe og å *holde* noe, og å sjekke hva en spiller bærer på.

**Den store ideen:** Et **verktøy** er en ting spilleren kan plukke opp og bære. Når spilleren plukker det opp, havner det i ryggsekken (**Backpack**). Når spilleren holder det i hånden, flytter det seg inn i selve spillerfiguren. Døra kan derfor spørre: «Har figuren en nøkkel i hånden akkurat nå?»

**Steg 1 – lag nøkkelen (ingen kode ennå):**

1. Høyreklikk Workspace → Insert Object → **Tool**. Gi den navnet `Nokkel` (uten ø).
2. Høyreklikk Nokkel → Insert Object → **Part**. Gi parten navnet `Handle`, nøyaktig slik, med stor H. Det er den delen spilleren holder i.
3. Gjør Handle liten og gul, for eksempel størrelse 1 × 1 × 3.
4. **Viktig:** Handle må *ikke* være Anchored. Da sitter spilleren fast i lufta når nøkkelen tas opp.
5. Gjem nøkkelen et sted i verden. Den plukkes opp ved å gå på den.

**Detektivoppgave:** Trykk Play, plukk opp nøkkelen og se i Explorer. Hvor ligger den nå? Trykk 1 for å holde den, og se igjen. Trykk 1 en gang til. Barnet vil se at nøkkelen hopper mellom `Players → spillernavnet → Backpack` og `Workspace → spillernavnet`. Det er hele hemmeligheten bak dette oppdraget.

**Steg 2 – døra med nøkkelhull (lag en dør som heter Laast, med et Script inni):**

```lua
local Players = game:GetService("Players")
local dor = script.Parent
local aapen = false

local function naarNoeRorer(treff)
	if aapen then
		return
	end

	local figur = treff.Parent
	if figur:IsA("Tool") then
		figur = figur.Parent -- det var nøkkelen som traff, gå ett hakk opp
	end

	local spiller = Players:GetPlayerFromCharacter(figur)
	if spiller == nil then
		return
	end

	local nokkel = figur:FindFirstChild("Nokkel")
	if nokkel then
		aapen = true
		print(spiller.Name .. " låste opp døra!")
		dor.Transparency = 0.8
		dor.CanCollide = false
		task.wait(3)
		dor.Transparency = 0
		dor.CanCollide = true
		aapen = false
	else
		print("Døra er låst. Du må holde en nøkkel!")
	end
end

dor.Touched:Connect(naarNoeRorer)
```

**Forklar sammen:**

- `figur:FindFirstChild("Nokkel")` leter etter et barn med det navnet. Finnes det ikke, får vi `nil`.
- Nøkkelen i ryggsekken teller ikke, fordi den ikke er barn av figuren. Spilleren må *holde* den.
- `IsA("Tool")` spør «er du et verktøy?». Hvis det var nøkkelen som traff døra, er forelderen nøkkelen og ikke figuren, så vi går ett hakk opp i slektstreet.
- `aapen` er den samme vakten (debounce) som i oppdrag 8.

**Tippeoppgave:** «Hva skjer hvis du går inn i døra med nøkkelen i ryggsekken, men ikke i hånden?» La barnet gjette, så teste.

**Utfordringer:**

- [ ] Gjør nøkkelen engangs: legg til `nokkel:Destroy()` når døra åpnes. Nå må spilleren finne en ny nøkkel neste gang.
- [ ] Lag to nøkler, `RodNokkel` og `BlaaNokkel`, og to dører som hver bare åpner for sin farge.
- [ ] Lag en butikk som selger nøkkelen for 10 mynter (kombinerer med oppdrag 8). Tips: `nokkel:Clone()` og legg kopien i `spiller.Backpack`.
- [ ] Bonus – et verktøy som gjør noe når du klikker: legg et Script i verktøyet med `script.Parent.Activated:Connect(...)` og la det for eksempel gi superhopp.

**Hemmelig ord å forklare tilbake:** Backpack

---

[← Oppdrag 8: Myntjakt med poengtavle](08-myntjakt-med-poengtavle.md) · [Innhold](../README.md) · [Oppdrag 10: Har den! →](10-har-den.md)
