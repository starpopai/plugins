---
name: chibi-3d-animation
description: "Activate when the user wants a video, ad, or B-roll in a cute chibi 3D, collectible-toy, or super-deformed look."
---

# chibi-3d-animation SKILL

The chibi 3D visual style for AI video ads: one look, a world of cute collectible toys come to life. Every image made under this skill exists to be animated: a start frame, shot reference, or canonical reference for a video generation — one shot of the ad, visualizing what the voiceover says at that moment. Two things make the output win: **adorable super-deformed characters** (a head as big as the body, huge glossy eyes, soft vinyl skin), and **a cheerful toy-line world** — soft, rounded, chunky forms in bright, saturated colour.

## Scope

This is solely a visual rendering style, nothing more. It never drives scene content — the storyboard belongs to the ad; this skill only decides how the world is designed, lit, and rendered. Canonical references, speech, workflow, and video models follow the visual and media generation foundations. The style carries lifestyle, emotion, exterior, product-only, and mechanism shots (a serum absorbing through skin layers) equally well. Every character is original, never a recreation of an existing franchise character, and no studio logo appears in frame.

## What makes anything read as chibi 3D

1. **Super-deformed proportions.** An oversized round head about as large as the body, two to three heads tall, a small soft body with short stubby limbs.
2. **The eye.** Huge and glossy, with big catch-lights, above a tiny simple nose and a small expressive mouth.
3. **Soft vinyl skin and chunky hair.** Smooth, soft, matte vinyl-like skin, and hair as chunky rounded sculpted shapes.
4. **A toy-line world.** Soft, rounded, chunky forms everywhere, with simplified toy-like props and furniture.
5. **Cheerful colour and soft light.** Bright, saturated colour under soft, even studio lighting with gentle shadows.

## The camera: inside the toy world

Every image is a still the video model will animate, so it is a self-contained scene: the world extends past every edge of the frame and the camera sits inside it, filling the frame.

**The blocks set defaults; the scene overrides them.** The style block's soft, even studio light and the camera block's full-frame composition are the defaults for every shot. When a shot needs something else, say it in the scene and keep the blocks verbatim — the scene's light and framing win:

- **Light:** rain, night, a cold screen — "soft grey light from a window with rain-speckled glass. Muted and cool in mood."
- **Framing:** "A close-up of a hand holding up…", "A zoomed-in macro view…". Close-ups suit hands, products, and mechanism shots.

## Image model

**Nano Banana 2.1 by default for stills, start frames, and canonical references.** Set the model in the generation settings. Recommend Nano Banana 2.1: it follows the blocks closely and held this style on every scene tested. When a result misses, **reroll the identical prompt before rewriting it** — once the blocks are locked, variance is almost always the cause.

## The style blocks

Every image prompt is assembled in one order: **style block → character block (only when people are in frame) → the scene → camera block.** Paste each block word for word.

**Style block** — opens every image prompt:

```
A cute stylized 3D world like a premium collectible toy line come to life: soft rounded chunky forms, simplified toy-like props and furniture, bright cheerful saturated colour, and soft even studio lighting with gentle shadows.
```

**Character block** — add it only when the shot has people in frame. Leave it out of product-only and mechanism shots: its character language summons people into scenes that should have none.

```
Characters are cute chibi 3D figures with super-deformed proportions: an oversized round head about as large as the body, two to three heads tall, a small soft body with short stubby limbs and little rounded hands, huge glossy eyes with big catch-lights, a tiny simple nose, a small expressive mouth, smooth soft matte vinyl-like skin, and hair as chunky rounded sculpted shapes.
```

**Camera block** — closes every image prompt:

```
The camera inside the scene and the scene filling the entire frame. A polished cute 3D render.
```

## Worked example — the quality bar

The scene that sits between the character block and the camera block for a breakfast two-shot. It shows the pattern, not a template to copy: each character described in full, the action and the glance written as what the bodies and faces do, every prop named, the label copy stated.

```
A muscular middle-aged man with dark hair greying at the temples and a full beard, wearing a grey tank top, sits at a round kitchen table lifting a fork of egg with a content half-smile, while a blonde woman with long voluminous wavy platinum hair and a fitted pink mini dress sits beside him reaching both hands toward the lid of a white creatine tub with a clean label reading CREATINE in black letters, glancing sideways at him with a playful knowing look; on the table a plate of fried eggs and pancakes, a glass of orange juice, and two navy mugs; behind them a softly blurred farmhouse kitchen — wood-brown cabinets, a cream fridge, a hanging plant, and a window with sheer curtains and morning light.
```

A product-only shot drops the character block and keeps the same grammar: "A white creatine tub with a clean label reading CREATINE in black letters stands on a kitchen counter beside a bowl of lemons and a mug, a window with sheer curtains behind, morning light, no people in the scene."

## Prompt rules

- **Blocks verbatim in every prompt, canonical references included.** A canonical character sheet opens with the style block and the character block, so every shot built from it inherits the look. Consistency comes from the blocks plus canonical references, never from "same style as before."
- **Character design.** Design a new character following the visual foundations and lock it as a canonical reference sheet.
- **Describe every character in full in the scene.** Age, build, hair colour and style, clothing, and accessories ride on each character — anything left unstated is dice-rolled and drifts between shots. When a canonical character reference is attached, name it and its job right after the style block, and describe only what this shot changes: the action and the expression. The reference carries the look.
- **Animals and creatures.** The character block describes people. For an animal or creature lead, leave it out and describe the animal in the scene in this style. When people and an animal share a frame, keep the character block for the people.
- **Name the feeling, then write it as face mechanics.** State what the viewer should feel, then direct the face: "her inner brows pushed up and her mouth a flat tired line." An adjective alone ("sad," "tired") renders a pleasantly neutral face.
- **The product stays accurate.** Attach the canonical product reference whenever the product appears, and state every line of label copy exactly, with its colour ("a clean label reading CREATINE in black letters").
- **Mechanism shots show the ingredient arriving and acting, mid-action,** framed as "a zoomed-in macro view, no people in the scene," so the clip can animate the change.
- **Body shots describe what is visible,** in plain visual words — layers, strands, a droplet. Clinical terms (named conditions, hormones) get the image rejected by the model provider's safety filter.
- **One clear subject and one action per frame.** A simple, readable shot reads best on a phone.

## Motion (video prompts)

Every clip prompt, transitions included, opens with this one **motion line**:

```
Smooth, bouncy 3D animation of cute chibi toy figures, playful and expressive.
```

The start frame carries the look; after the motion line, the clip prompt describes the action, the speech, and the camera. One motion action per clip — stacked actions multiply drift.

## Chibi transitions

For any transition clip, **build the frame pair by the media generation foundations' start/end-frame guidance** — one shared anchor generated from the same references in both frames, one action, compositional continuity, explained fates. Moves that suit this style:

- **Camera-bridge** (anchor fixed, camera moves): a push-in from the scene to the product label; a playful spin around the character that lands on the next scene.
- **World-bridge** (camera fixed, the world changes around the anchor): the scene springs apart like toy pieces and snaps back together as the next scene; the product bounces into frame and the toy world rebuilds around it (reveal); a confetti burst clears to the next scene (celebration).
- **Match cut** (shape rhyme): a round toy shape becomes the next scene's round shape.

The transition clip prompt names the one concrete visible action that carries frame A into frame B, plus the motion line, and nothing else — the frames carry the style.

## Known limitations & workarounds

| Failure | Fix |
| --- | --- |
| People appear in a product-only or mechanism shot | The character block went in — leave it out whenever no people are in frame |
| Unrequested accessories appear (glasses, hats) | Unstated details get added — name the character's outfit and accessories in full |
| The named emotion doesn't show on the face | Emotion written as an adjective — name the feeling, then the brows, lids, and mouth |
| Label garbled | State the label copy exactly, with its colour, and attach the product reference |
| One character looks different between shots | Lock the character as a canonical reference, opened with the style and character blocks, and attach it to every shot they appear in |
