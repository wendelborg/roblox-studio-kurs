# Slik fungerer serveren

[← Dele spillet med andre](18-dele-spillet.md) · [Innhold](../README.md) · [Tips og triks →](20-tips-og-triks.md)

Mange av oppdragene handler egentlig om én ting: hva som skjer på **serveren**, og hva som skjer hos **hver spiller**. Dette kapitlet forklarer det for deg som voksen, så du kan svare når barnet lurer på hvorfor noe virker for én spiller men ikke for en annen, eller hvorfor rekorden forsvant.

## Server og klient

Når noen spiller et Roblox-spill, er det alltid to slags datamaskiner med:

- **Serveren** er en maskin hos Roblox som kjører selve spillet. Den bestemmer hva som er sant: hvem som har den, hvor mange mynter du har og om døra er åpen.
- **Klienten** er maskinen til hver spiller, altså PC-en, nettbrettet eller telefonen. Den tegner verden på skjermen, leser tastetrykk og sender dem til serveren.

| | Script | LocalScript |
| --- | --- | --- |
| Kjører på | serveren | hver spillers maskin |
| Ligger typisk i | ServerScriptService eller i en kloss i Workspace | StarterPlayerScripts, StarterGui eller i et verktøy |
| Endringer synes for | alle spillerne | bare den ene spilleren |
| Brukes til | regler, poeng, skade, dører, lagring | knapper på skjermen, kamera, tastetrykk |

Alle skriptene i kurset er vanlige **Script**, og de kjører på serveren. Derfor ser alle spillerne den samme døra åpne seg, og derfor kan ingen jukse seg til flere mynter. LocalScript nevnes bare under «Utforsk videre».

**Et vanlig problem:** Et barn legger et LocalScript på en kloss i Workspace, og ingenting skjer. LocalScript kjører ikke der. Feiltabellen i [Verktøykasse](21-verktoykasse.md) nevner dette.

## Hva deles mellom spillerne?

Alt serveren endrer i Workspace, blir sendt til alle spillerne. Det kalles **replikering**.

- Gjør serveren en kloss rød, blir den rød for alle.
- Gjør et LocalScript en kloss rød, blir den rød bare for den ene spilleren. Serveren og de andre spillerne ser den som før.
- `leaderstats` ligger på spilleren på serveren, og derfor ser alle poengtavla.

Når barnet senere vil lage knapper på skjermen som skal gjøre noe i verden, trengs en **RemoteEvent**. Det er en beskjed fra klienten til serveren, og den står også under «Utforsk videre».

## Mange servere samtidig

Et publisert spill kjører ikke på én server, men på mange. Hver server har plass til et visst antall spillere, og Roblox starter nye servere ved behov.

- Spillere på forskjellige servere ser ikke hverandre.
- Variabler i et skript gjelder bare på den ene serveren. Rekordtavla i sluttprosjektet viser derfor rekorden for den serveren du er på.
- Venner som vil spille sammen, kan bli med hverandre fra vennelista i Roblox. Da havner de på samme server.

## Serveren glemmer når alle går

En server stenges kort tid etter at den siste spilleren har gått. Da forsvinner alt som bare lå i variablene: rekorder, hvem som hadde den og poeng.

For at noe skal huskes til neste gang, må det lagres i **DataStore**. Det er Roblox sitt lager, og det deles mellom alle serverne til spillet. Sluttprosjektet har en del «for de modige» som viser hvordan rekorden lagres.

- DataStore virker bare i publiserte spill.
- For å teste i Studio må **File → Experience Settings → Security → Enable Studio Access to API Services** være slått på. Da bruker Studio det ekte lageret, så testdata blir liggende igjen. Roblox anbefaler å gjøre dette i en egen testkopi av spillet, ikke i det spillet venner spiller.
- Lagring kan feile, og derfor pakkes kallene inn i `pcall`.
- Når flere servere kan skrive samtidig, bør man bruke `UpdateAsync` og ikke `SetAsync`. Ellers kan en dårligere rekord overskrive en bedre.

## Hvordan Studio later som det er en server

Når dere trykker **Play** i Studio, starter Studio en liten server og en klient på samme maskin. Det er derfor skript på serveren og spilleren virker som i et ekte spill.

- **Play** (den blå knappen øverst til venstre) gir én spiller.
- **Run** (velges i testmenyen ved siden av Play) starter bare serveren, uten spiller. Det er nyttig for å se på fysikk eller roboten i oppdrag 12.
- Velger dere **Server & Clients** i testmenyen, kan dere teste med **flere spillere**. Da åpner Studio ett vindu for serveren og ett per spiller. **End Session** stopper alt. Dette brukes i Har den!
- Mens testen kjører, kan dere bytte mellom **Client** og **Server** øverst i Studio. Da ser dere Explorer slik serveren eller spilleren ser den. Det er en fin måte å vise forskjellen for barnet på.

## Bygge sammen (Team Create)

Vil to personer bygge på samme spill, for eksempel barnet og en venn eller dere sammen fra hver deres maskin, kan dere bruke **Collaborate** i Studio. Det kalles også Team Create.

- Spillet lagres på Roblox sine servere, og alle som er invitert, kan jobbe i det samtidig.
- Den som eier spillet, inviterer andre fra Collaborate-panelet og gir dem tilgang til å redigere.
- Roblox krever en aldersjekk for å samarbeide med andre. Aldersgrupper, foreldrekontroll og om dere er venner på Roblox kan også begrense hvem som kan inviteres.
- Skript kan redigeres samtidig, eller som utkast (drafts) som må lagres inn før de andre ser endringene.

For de fleste familier er det enklest at én person bygger av gangen, og at dere deler spillet som fil eller med privat publisering. Se [Dele spillet med andre](18-dele-spillet.md).

## Kilder

- [Roblox: Client-server runtime](https://create.roblox.com/docs/projects/client-server)
- [Roblox: Data stores](https://create.roblox.com/docs/cloud-services/data-stores)
- [Roblox: Collaboration](https://create.roblox.com/docs/projects/collaboration)

---

[← Dele spillet med andre](18-dele-spillet.md) · [Innhold](../README.md) · [Tips og triks →](20-tips-og-triks.md)
