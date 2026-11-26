# The Best Advice I Ever Got

[![The Best Advice I Ever Got](https://make.fun/badge/u-pangg7-the-best-advice-i-ever-got-358cefb0.svg)](https://make.fun/bounty/u-pangg7-the-best-advice-i-ever-got-358cefb0)
[![Rank](https://make.fun/badge/u-pangg7-the-best-advice-i-ever-got-358cefb0/jehan771/best-advice-i-ever-got/rank.svg)](https://make.fun/bounty/u-pangg7-the-best-advice-i-ever-got-358cefb0)
[![Reward](https://make.fun/badge/u-pangg7-the-best-advice-i-ever-got-358cefb0/jehan771/best-advice-i-ever-got/reward.svg)](https://make.fun/bounty/u-pangg7-the-best-advice-i-ever-got-358cefb0)

One sentence, 169 characters, about the best advice I ever received — a grandfather's
last-cup-of-coffee counsel on marrying for a laugh that never gets tired.

## The entry

> My grandfather, hands shaking over his last cup of coffee, told me to marry someone whose laugh I never get tired of, because everything else fades and that sound stays.

## How it works

`main.ts` holds the sentence in a single constant, enforces the competition gate
itself before writing (1–200 characters, not only whitespace, exactly one sentence
with one terminal full stop, no newline), writes it to `/output/entry.txt`, then
reads the file back and fails unless the bytes match the intended sentence.

## Run

```sh
node main.ts
```

Deterministic: the same sentence is written on every run.
