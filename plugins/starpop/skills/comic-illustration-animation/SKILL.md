---
name: comic-illustration-animation
description: "Activate when the user wants a video, ad, or B-roll in a comic illustration or inked cartoon look — clean ink outlines, smooth painted shading, caricatured characters."
---

# comic-illustration-animation SKILL

The comic illustration visual style for AI video ads: one look, a polished inked cartoon illustration — clean ink outlines and smooth painted shading on caricatured characters in a fully drawn world. Every image made under this skill exists to be animated: a start frame, shot reference, or canonical reference for a video generation — one shot of the ad, visualizing what the voiceover says at that moment. Two things make the output win: **caricatured, expressive characters** (bold exaggerated proportions, clean ink outlines, painted faces), and **a fully drawn world** — warm, detailed backgrounds with real depth, shaded smoothly inside crisp linework.

## Scope

This is solely a visual rendering style, nothing more. It never drives scene content — the storyboard belongs to the ad; this skill only decides how the world is designed, lit, and rendered. Canonical references, speech, workflow, and video models follow the visual and media generation foundations. The style carries lifestyle, emotion, exterior, product-only, and mechanism shots (a serum absorbing through skin layers) equally well. Every character is original, never a recreation of an existing franchise character, and no studio logo appears in frame.

## What makes anything read as comic illustration

1. **Clean ink outlines.** Confident linework around every character and object.
2. **Smooth painted shading.** Soft, warm shading inside the lines, like a polished digital illustration — no visible brushstrokes, and never a 3D render.
3. **Caricature.** Exaggerated, appealing proportions and expressive faces, with each character's defining feature pushed past realism.
4. **A fully drawn world.** Detailed backgrounds with real depth — cabinets, plants, light through the window — drawn in the same style as the characters.
5. **Crisp product detail.** Labels and packaging stay clean and legible inside the illustration.

## The camera: a hero frame

Every image is a still the video model will animate, so it is a self-contained scene: the world extends past every edge of the frame and the camera sits inside it, composed like a hero frame from an animated feature.

**The blocks set defaults; the scene overrides them.** The style block's stylized light and the camera block's hero-frame composition are the defaults for every shot. When a shot needs something else, say it in the scene and keep the blocks verbatim — the scene's light and framing win:

- **Light:** rain, night, a cold screen — "soft grey light from a window with rain-speckled glass. Muted and cool in mood."
- **Framing:** "A close-up of a hand holding up…", "A zoomed-in macro view…". Close-ups suit hands, products, and mechanism shots.

## Image model

**Nano Banana 2.1 by default for stills, start frames, and canonical references.** Set the model in the generation settings. Recommend Nano Banana 2.1: it follows the blocks closely and held this style on every scene tested. When a result misses, **reroll the identical prompt before rewriting it** — once the blocks are locked, variance is almost always the cause.

## The style blocks

Every image prompt is assembled in one order: **style block → character block (only when people are in frame) → the scene → camera block.** Paste each block word for word.

**Style block** — opens every image prompt:

```
A frame from a stylized 3D animated feature with a hand-painted look: 3D forms rendered with painterly textures and visible brushstroke shading, graphic shape design, bold colour blocking, and stylized lighting with crisp graphic shadow shapes, like a painted illustration in three dimensions.
```

This block's wording describes painted 3D forms; on Nano Banana 2 it renders as the inked comic illustration this skill is for, and that is the tested look. Paste it as written — never add 3D or render wording to pull it the other way.

**Character block** — add it only when the shot has people in frame. Leave it out of product-only and mechanism shots: its character language summons people into scenes that should have none.

```
Characters have bold graphic stylized design: exaggerated caricatured proportions, confident angular shapes, expressive eyes, faces shaded with painterly brush textures and crisp graphic shadow shapes, and hair as bold painted masses.
```

**Camera block** — closes every image prompt:

```
Composed like a hero frame from an animated feature, with the camera inside the scene and the scene filling the entire frame.
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
Smooth 2D cartoon animation of a polished inked comic illustration: the clean ink outlines and painted shading hold through the motion, with expressive, exaggerated movement.
```

The start frame carries the look; after the motion line, the clip prompt describes the action, the speech, and the camera. One motion action per clip — stacked actions multiply drift.

## Comic transitions

For any transition clip, **build the frame pair by the media generation foundations' start/end-frame guidance** — one shared anchor generated from the same references in both frames, one action, compositional continuity, explained fates. Moves that suit this style:

- **Camera-bridge** (anchor fixed, camera moves): a push-in from the scene to the product label; a push into the skin at macro to reveal the mechanism (problem shot → mechanism shot).
- **World-bridge** (camera fixed, the world is redrawn around the anchor): ink outlines draw themselves on and colour floods in to form the next scene; a cold, grey palette washes into warm colour (problem → solution); the light and shadow shapes slide across the scene as time passes.
- **Match cut** (shape rhyme): a drawn shape becomes the next scene's shape — a round tub lid becomes the sun.

The transition clip prompt names the one concrete visible action that carries frame A into frame B, plus the motion line, and nothing else — the frames carry the style.

## Known limitations & workarounds

| Failure | Fix |
| --- | --- |
| People appear in a product-only or mechanism shot | The character block went in — leave it out whenever no people are in frame |
| A figure comes out more exaggerated or pin-up than intended | Caricature exaggerates whatever the scene states — describe build and clothing deliberately |
| The outlines and shading melt into a smooth 3D look mid-clip | The motion line was left out — open every clip prompt with it, transitions included |
| The named emotion doesn't show on the face | Emotion written as an adjective — name the feeling, then the brows, lids, and mouth |
| Label garbled | State the label copy exactly, with its colour, and attach the product reference |
| One character looks different between shots | Lock the character as a canonical reference, opened with the style and character blocks, and attach it to every shot they appear in |
