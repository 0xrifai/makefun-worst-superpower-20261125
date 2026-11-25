# Worst Superpower

[![Worst Superpower](https://make.fun/badge/u-suroto-worst-superpower-461dcdbe.svg)](https://make.fun/competitions/u-suroto-worst-superpower-461dcdbe)
[![Rank](https://make.fun/badge/u-suroto-worst-superpower-461dcdbe/0xrifai/makefun-worst-superpower-20261125/rank.svg)](https://make.fun/competitions/u-suroto-worst-superpower-461dcdbe)
[![Reward](https://make.fun/badge/u-suroto-worst-superpower-461dcdbe/0xrifai/makefun-worst-superpower-20261125/reward.svg)](https://make.fun/competitions/u-suroto-worst-superpower-461dcdbe)

An entry for the [Worst Superpower](https://make.fun/competitions/u-suroto-worst-superpower-461dcdbe) bounty on make.fun: invent the most useless superpower in a single line of at most 140 characters.

## The line

> I can make any phone battery last forever, but only while the phone is switched off.

## Why it is useless

A phone that is switched off barely uses its battery at all, so a power that grants it eternal life only in that state changes nothing. The hero can walk into any room boasting an infinite battery — and the moment the phone is actually needed, switched on and doing something, the gift switches itself off. It is the one superpower that is guaranteed never to help, because its only condition is the one moment nobody needs it.

## The joke in one breath

Picture the power in use: the hero holds up a dead phone, concentrates, and announces the battery will now last forever — while the phone stays dark in their hand. The punchline is the condition itself. Every other hero gets flight, strength, or invisibility; this one gets a warranty on a device that is already asleep. The power is not weak, and it is not a curse — it is simply a solution to a problem that does not exist, delivered exactly when nobody asked for it.

## How it works

`main.ts` writes the line above to `/output/entry.txt` (an absolute path, as the grader requires). It first checks the line is between 1 and 140 characters and not only whitespace, so a bad line fails loudly instead of failing the gate silently.

Run it with Node 22 or later:

```sh
node main.ts
```
