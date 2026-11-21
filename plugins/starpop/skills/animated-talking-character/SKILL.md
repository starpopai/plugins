---
name: animated-talking-character
description: "Activate when the user wants an animated talking character ad — one or more characters in any animated rendering style (a person, animal, creature, or anthropomorphized object given a face and a voice) talking to camera."
---

# How to make animated talking character ads

A video ad whose engine is a character talking to camera, rendered in an animated style.

The character can be anything: a person, an animal, a creature, or an object, product, ingredient, organ, or molecule given a face and a voice.

One character or several.

A creative, unexpected character (an ingredient, an object) often helps — but it isn't required; an animated person or animal is just as valid when it fits the script.

The hard constraints of the format are exactly two: the video is animated, and a character is talking.

Everything else is a creative variable — who the character is, how many, the rendering style, and the narrative angle.

- Every character has a face and can emote. A person, animal, or creature already is a character — render it in the chosen style and it talks. An object, product, ingredient, organ, or molecule must be _anthropomorphized_: give it eyes, a mouth, and a way to gesture, and decide where the face lives (a jar with eyes on the label and a mouth below; a pill where the dent is the mouth; a molecule whose central atom is the head). If a subject can't look at camera and emote, it isn't a character yet.

- Don't over-bias to the exotic. A creative, unexpected character is great when it serves the script, but an animated person or animal is equally valid — choose what carries the message, not novelty for its own sake.

- Rendering style is a swappable skin, not the format. "Pixar style" means 3D-rendered, "claymation" means stop-motion clay, plus watercolor, paper-craft, Lego, and others. The format is "a character talks"; the style is a parameter you pick once and hold across every shot.

- The visual is the proof of the line. The script carries the message; every environment and action is the visual proof of what's being said at that exact moment. A viewer should understand the message with the sound off.

- Don't be static. A character standing still and talking is a static shot that loses the viewer. Every shot moves, and shots flow into each other with intentional transitions — especially when handing off between characters.

## The pipeline — storyboard to start frame

This is the high-control workflow this format runs on.

Order matters.

1. Design the character(s) and lock each as a reference sheet. Follow the visual foundations to design and render one sheet per character in the chosen style. Iterate until you love it — this is the reusable source of truth for that character's look across the whole video (and future videos). R1 covers what the design must carry for this format.

2. Write the script, pick the hook, and storyboard. Choose the script variation and tone (see The script layer), write and lock the script one line per shot, and choose the visual hook — the first frame, before a word is spoken, that must stop the scroll with the sound off. Then storyboard each shot: its environment, the character's action, the framing.

3. Generate one start frame per shot. For each shot, take the character's reference sheet as a reference image and render that character _in that shot's environment, doing that shot's action_, in the chosen style. A separate image generation per shot (two-step: sheet → in-shot start frame). Multiple characters in a shot → attach each character's sheet.

4. Batch the start frames into video generations. Group consecutive shots into one multi-shot generation up to the chosen model's duration cap; attach each shot's start frame and address each one (see R3 — the heart of the workflow).

5. Assemble. Cut the batched clips into the finished hook or ad.

Pace is script-driven — lean fast and punchy, avoid monologues, but don't force a fixed shot length; the line decides.

For native dialogue, estimate each clip's duration with the native-speech estimate in the media generation foundations (words ÷ 3 = seconds), rounded up to the model's next allowed duration.

Negative result to respect: don't skip the reference sheet and generate each shot from scratch — the character drifts.

Sheet first, then derive every shot from it.

## Locked rules

### R1 — Give every character a face that can emote, in a layered design prompt

Rule: Each character must be able to look at camera, emote, and gesture.

A person/animal/creature has this inherently — render it in the chosen style.

An object/product/ingredient/organ/molecule must be anthropomorphized: give it eyes, a mouth, and a way to gesture, and decide where the face lives.

Why: the format's hard constraint is a character _talking_; a subject that can't emote isn't a character yet.

Pattern: write the character's design in layers (the one-liner the sheet is rendered from) — opening line anchors the rendering style + subject + 2–3 defining adjectives, then body form, then color/texture, then face, then limbs, then a pose of active intent.

Push the design slightly past the obvious so the character is memorable.

### R2 — One reference sheet, re-attached and identified every shot

Rule: Select one character reference sheet as each character's canonical reference, then derive every shot's start frame from that sheet — re-attaching it and identifying it by name each time.

Why: generations are self-contained; "the same character as before" means nothing to the model, so consistency comes from re-attaching the sheet — the sheet carries the look, and the prompt describes only the shot's new environment and action.

### R3 — Batch start frames into one multi-shot generation; role-label every reference and write the line in

Rule: Pass multiple shot start frames into a single multi-shot generation, label which attached image is which shot's start frame, describe each shot's action and the transition to the next, and write each spoken line into the prompt with an explicit voice emotion.

Why: a video model generates a capped number of seconds per generation; batching consecutive shots under one prompt holds continuity and pacing instead of stitching disconnected clips.

Pattern — the labeled prompt structure (Style → References → Shots → Camera → Script → Constraints), e.g.:

Default to native dialogue written into the prompt like this; only when a line has complex/unusual words the video model would mangle, generate the speech first  and attach it to lip-sync over.

### R4 — Move every shot: the three-layer rule

Rule: Every shot needs at least two of these three layers of motion at once (three is better): camera moving (orbit, push-in, pull-back, whip-pan, tilt), character moving (entering, leaning, gesturing, performing the action that matches the line), environment reacting (walls responding, particles radiating, light shifting).

Why: a static character in a static environment is boring no matter how good the script is; stacked motion is what carries the line.

Pattern: per shot pick the entrance (the arrival is a reveal — always specify the direction), the character's action, the camera move, and the environment reaction; when handing off between characters, choreograph the transition rather than hard-cutting between two static heads.

### R5 — The character carries the brand; the setting can travel

Rule: A character's design must carry the brand's visual identity — palette, mood, and lighting are brand signal, not defaults.

Lock that brand DNA in the character's design and sheet (R1); then the per-shot _setting_ can change freely with the script (a gym, a kitchen, the body interior) while the character stays brand-consistent.

Why: the most-missed mistake is defaulting the look (a generic "dark premium" background) and throwing away brand signal.

The only exception is intentional contrast — a villain, or a deliberately ugly "before" state.

Pattern: understand the product and brand before designing; a feminine pink brand → warm peachy palette and soft pink world; a bold masculine brand → deeper saturation, harder rim light, grounded energy; premium clinical → cool clean whites, sharp light.

### R6 — Make the visual the proof of the line

Rule: Every shot's environment and action is a direct visual translation of the exact line being said.

Read the line, ask "what would this look like if you could see it happening?", and show that.

Environment reactions are literal metaphors for the line — never effects for decoration.

Why: the visuals exist to communicate the message; if they don't depict the line, they're wasted.

The test: a viewer understands the message with the sound off.

Pattern: "I seal the holes in your gut wall" → the character presses both hands to the wall and the cracks close around it; "I calm the inflammation" → cool light pulses out and red walls turn healthy pink.

## The script layer

The core script structure — "I am X. I do Y. So Z." Each character self-identifies, states its mechanism, then states the physical or emotional consequence: _"I'm X. I do Y. So Z happens to you."_ It is modular (works with one character or twenty), inherently visual (each "I am X" is a character-reveal moment), and credible (mechanism + consequence).

Everything below is a variation of it.

Three proven variations:

- Pure Introduction — straight positive, no problem framing. Each character introduces itself, states what it does, states the benefit; the closing character/packaging delivers the CTA. Best for premium brands, awareness, ingredient-ensemble ads.

- Problem then Solution — open by agitating a real problem the viewer lives with (stated by a narrator, the product, or the body — not a villain), then the solution characters arrive and the "I am X" structure kicks in. Best for cold audiences and scroll-stopping hooks. (The HolyCow worked example is this — a "guide enters" cut of it.)

- Villain to Hero — the problem is personified as a villain who speaks first with the structure turned negative ("I'm X. I'm the reason you suffer"), then a dramatic transition and the hero takes over with the positive version. Best for maximum drama and entertainment-first cold-audience content.

Tone — pick one register before writing and hold it across every line (e.g. calm specialist crew; quiet ancient defenders; the unbothered fixer; frustrated-and-direct; exhausted-but-hopeful).

Offer the user a few options with a vivid analogy each, then lock it.

The hook — both layers matter and are format-specific: the visual hook is the first frame before any word (stop the scroll with sound off — see step 2), and the verbal hook is the first line (call out the viewer's exact problem or desire).

Always brainstorm the hook deliberately; never default it.

One format-specific copy note: write consequences as visceral, physical, see-able effects ("I seal the holes so toxins stop leaking into your blood"), because each line has to become a visual (R6) — abstract benefit language gives the visuals nothing to show.

---

## Style register (rendering styles)

Pick one rendering style per video and hold it across every sheet, start frame, and clip — the style one-liner is the first line of every prompt (it carries the most weight).

Common styles: Pixar-style 3D, claymation (stop-motion clay), watercolor / aquarelle, paper-craft / cut-paper, Lego.

The style is a creative parameter, never the substance of the format — the same script and storyboard can be rendered in any of them.

---

## Character types

A quick menu of what the character can be and where its face lives — anthropomorphized ingredient/molecule, object/product, packaging (usually the hero closer that delivers the CTA), body part/organ, or a person/animal rendered in the style.
