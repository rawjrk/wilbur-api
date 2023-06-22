# wilbur-api

Generating random quotes of Don't Starve character Wilbur.

## Example Quotes

- Ooo!
- Ooh? Ooae!
- Ooae Oooh Oaoa! Ooooe.

## Algorythm

The quotes are generated based on [wiki page](https://dontstarve.fandom.com/wiki/Wilbur/Quotes "Wilbur (Quotes) | Don't Starve Wiki | Fandom").

<details><blockquote>
The quotes are generated with 1 to 6 "words", each of which contain 2 to 5 characters.

- The first character in each word is always an "O".
- The next 1 to 3 characters consist of an "o" (70% chance) or an "a".
- There is a 1/3 chance the word ends there, if not the last character will be either an "e" or an "h" with equal chance.

Between each word, there is a 60% chance that there will only be a space. Otherwise, with equal likelihood, a comma, a period, a question mark or an exclamation mark can be placed.

After all the words, the "sentence" will end with a period, a question mark or an exclamation mark with equal chance for each.</blockquote></details>
