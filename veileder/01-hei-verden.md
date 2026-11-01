# Oppdrag 1: Hei, verden!

[← Før dere starter](00-slik-bruker-du-kurset.md) · [Innhold](../README.md) · [Oppdrag 2: Trylleformler →](02-trylleformler.md)

> Barnets side for dette kapitlet: [wendelborg.github.io/roblox-studio-kurs/oppdrag/1/](https://wendelborg.github.io/roblox-studio-kurs/oppdrag/1/)

**Barnet lærer:** at et spill er en stor familie av ting, og at et skript er en beskjed til datamaskinen.

**Den store ideen:** Alt i Explorer henger sammen som et slektstre. En kloss (Part) som ligger i Workspace er **barn** av Workspace. Workspace er **forelder** til klossen. Et skript inni klossen kan si `script.Parent` og mener da «klossen jeg bor i».

**Steg for steg:**

1. Sett inn en Part (fanen Home → Part). Gi den navnet `Magikloss` i Explorer.
2. Høyreklikk Magikloss → Insert Object → **Script**.
3. Slett det som står der og skriv:

```lua
print("Hei! Jeg er en magisk kloss!")
print("Jeg heter " .. script.Parent.Name)
```

4. Trykk Play og se i Output-vinduet.

**Forklar sammen:**

- `print` er robotens munn. Den sier ting i Output, ikke i selve spillet.
- Tekst står i anførselstegn. Det kalles en **string**.
- `..` limer to tekster sammen.
- `script.Parent.Name` leses fra venstre: «dette skriptet → forelderen → navnet».

**Utfordringer:**

- [ ] Endre navnet på klossen i Explorer. Hva skriver skriptet nå?
- [ ] Flytt skriptet slik at det ligger rett i Workspace. Hva blir `script.Parent` nå?
- [ ] Fjern ett anførselstegn med vilje. Les den røde feilmeldingen sammen. Hvilket linjenummer peker den på?

**Hemmelig ord å forklare tilbake:** Parent

---

[← Før dere starter](00-slik-bruker-du-kurset.md) · [Innhold](../README.md) · [Oppdrag 2: Trylleformler →](02-trylleformler.md)
