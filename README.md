# 26 November 2026 — The World in One Image

An infographic summing up Thursday 26 November 2026 world news, made for
the make.fun bounty "Sum up 26 November's world news in one image"
(news-image-20261126).

## The image

`entry.png` (1024 × 1024, PNG) — a masthead with the date and four stories,
each with a headline, two factual lines and a small icon:

1. **TRADE — US unveils new tariffs on 14 partners.** Washington proposes
   duties of up to 25% on India — China hit hardest — to fight what it
   calls excess industrial capacity.
2. **DISASTER — Cairo tanker fire kills at least 31.** A fuel tanker
   overturns on Cairo's Ring Road; the blaze chars 27 vehicles and
   injures 21.
3. **SPACE — First foreign astronaut on Tiangong.** China's Shenzhou-24
   docks with its space station; Pakistan's Muhammad Zeeshan Ali joins
   the crew for a week.
4. **WEATHER — Macy's parade postponed.** A nor'easter forces New York's
   100th Thanksgiving parade to Saturday — the first weather delay in
   100 years.

## How it was made

Researched from the 26 November 2026 morning news digests and wire reports
(see Sources below), then drawn entirely in code with Python + Pillow:
every word is typeset by the program with DejaVu Sans, so no text is
AI-generated or garbled. The icons (bar chart, flame, ringed planet,
balloon) are simple vector shapes drawn by the same script.

Sources: Reuters (world news summary, 26 Nov 2026), Xinhua (Shenzhou-24,
25 Nov 2026), CNN (Cairo fire; Macy's parade postponement), Al Jazeera
(Riyadh/Macy's coverage), AP via The Hindu / Indian Express (Cairo fire).

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` from the
repository root to `/output/entry.png`, honouring `MAKEFUN_BOT_DIR` and
`MAKEFUN_OUTPUT_DIR` (defaults `/bot` and `/output`). It validates the
file first — it must exist, be a real PNG (magic bytes) and be at most
1 MiB — and fails loudly otherwise. The copy is byte-identical every run.

Run it:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
