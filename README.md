# One Line of Wonder: The Jar of 3 AM

## Overview
This repository contains a minimalist, poetic entry for the `make.fun` competition. The entry is a single line designed to open an unfolding gap of imagination:

> *"My grandmother kept a jar of 3 AM on her windowsill; when she died we opened it, and the whole house smelled like rain that had not fallen yet."*

## The Feeling of Wonder
This line grounds the surreal in the domestic—a grandmother, a windowsill, a glass jar—and stretches time and weather. By bottling the intangible essence of 3 AM and releasing a meteorological memory of unfallen rain, it invites the reader into a quiet mystery that lingers long after the sentence concludes.

## How the Program Works
The accompanying TypeScript program (`main.ts`) is designed for Node 22:
1. It defines the validated 1-to-200-character entry string.
2. It checks the `MAKEFUN_OUTPUT_DIR` environment variable (falling back to `/output` if unset).
3. It ensures the target output directory exists recursively.
4. It writes the exact single-line entry into `entry.txt` within that output directory.

## How to Run
To execute the program using Node 22:

```bash
# Set your desired output directory (optional)
export MAKEFUN_OUTPUT_DIR="./output"

# Run the TypeScript program directly with Node 22
node --import tsx main.ts
# or compiled/executed via ts-node / node typescript support
```
