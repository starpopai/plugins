---
name: cinematic-3d-animation
description: "Activate when the user wants a video, ad, or B-roll in a cinematic, semi-realistic 3D animated look — feature-film quality with photographic light and materials."
---

# cinematic-3d-animation SKILL

The cinematic 3D visual style for AI video ads: one look, a still from a premium 3D animated feature that renders light and materials like a photograph. Every image made under this skill exists to be animated: a start frame, shot reference, or canonical reference for a video generation — one shot of the ad, visualizing what the voiceover says at that moment. Two things make the output win: **believable, stylized characters** (adult proportions, refined faces, slightly enlarged expressive eyes), and **photographic light and materials** — real reflections, fabric weave, wood grain, glass — wrapped around designed animated forms.

## Scope

This is solely a visual rendering style, nothing more. It never drives scene content — the storyboard belongs to the ad; this skill only decides how the world is designed, lit, and rendered. Canonical references, speech, workflow, and video models follow the visual and media generation foundations. The style carries lifestyle, emotion, exterior, product-only, and mechanism shots (a serum absorbing through skin layers) equally well. Every character is original, never a recreation of an existing franchise character, and no studio logo appears in frame.

## What makes anything read as cinematic 3D

1. **Photographic light and materials.** Real-world light behaviour, ray-traced reflections, and physically accurate textures — fabric weave, wood grain, glass, liquid.
2. **Designed, animated forms.** Everything keeps the designed shapes of an animated feature; this is animation rendered with real light, never live action.
3. **Believable adult proportions.** About six heads tall, with a refined face structure — defined cheekbones, jaw, and brow — and a simplified nose.
4. **The eye.** Slightly enlarged and expressive, with detailed realistic irises: enlarged enough to read as animated, never cartoon-big.
5. **Filmic finish.** Filmic colour grading and anamorphic depth of field, composed like a frame from a film.

## The camera: a film still

Every image is a still the video model will animate, so it is a self-contained scene: the world extends past every edge of the frame and the camera sits inside it, composed like a cinematic film still.

**The blocks set defaults; the scene overrides them.** The style block's photographic light and the camera block's film-still composition are the defaults for every shot. When a shot needs something else, say it in the scene and keep the blocks verbatim — the scene's light and framing win:

- **Light:** rain, night, a cold screen — "soft grey light from a window with rain-speckled glass. Muted and cool in mood."
- **Framing:** "A close-up of a hand holding up…", "A zoomed-in macro view…". Close-ups suit hands, products, and mechanism shots.

## Image model

**Nano Banana 2.1 by default for stills, start frames, and canonical references.** Set the model in the generation settings. Recommend Nano Banana 2.1: it follows the blocks closely and held this style on every scene tested. Seedream 4.5 is not suited to this style: in testing it pulled every frame back to a rounded Disney look whatever the prompt said. When a result misses, **reroll the identical prompt before rewriting it** — once the blocks are locked, variance is almost always the cause.

## The style blocks

Every image prompt is assembled in one order: **style block → character block (only when people are in frame) → the scene → camera block.** Paste each block word for word.

**Style block** — opens every image prompt:

```
A frame from a premium 3D animated feature with photographic realism in its light and materials: real-world light behaviour, ray-traced reflections, physically accurate textures — fabric weave, wood grain, glass, liquid — filmic colour grading and anamorphic depth of field, all with the designed, stylized forms of an animated feature.
```

**Character block** — add it only when the shot has people in frame. Leave it out of product-only and mechanism shots: its character language summons people into scenes that should have none.

```
Characters are stylized 3D animated humans with believable adult proportions about six heads tall: slightly enlarged expressive eyes with detailed realistic irises, a refined stylized face structure with defined cheekbones, jaw and brow and a simplified nose, skin with realistic subsurface scattering and very fine texture, individually groomed hair strands with a natural sheen, and clothing with real fabric texture and natural drape. Unmistakably animated characters, rendered at feature-film quality.
```

**Camera block** — closes every image prompt:

```
Composed like a cinematic film still, with the camera inside the scene and the scene filling the entire frame. A high-end 3D animated feature render.
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
Smooth, cinematic 3D animation at feature-film quality, with natural weight and subtle, believable performance.
```

The start frame carries the look; after the motion line, the clip prompt describes the action, the speech, and the camera. One motion action per clip — stacked actions multiply drift.

## Cinematic transitions

For any transition clip, **build the frame pair by the media generation foundations' start/end-frame guidance** — one shared anchor generated from the same references in both frames, one action, compositional continuity, explained fates. Moves that suit this style:

- **Camera-bridge** (anchor fixed, camera moves): a slow push-in from the scene to the product label; a rack focus from a foreground object to the character behind it; a push into the skin at macro to reveal the mechanism (problem shot → mechanism shot).
- **World-bridge** (camera fixed, the world changes around the anchor): the light shifts from grey morning to golden evening around the character (time passing); a dark, cold room warms as the curtains open (problem → solution).
- **Match cut** (shape or motion rhyme): a gesture continues across the cut into the next scene, or a round shape becomes the next scene's round shape.

The transition clip prompt names the one concrete visible action that carries frame A into frame B, plus the motion line, and nothing else — the frames carry the style.

## Known limitations & workarounds

| Failure | Fix |
| --- | --- |
| People appear in a product-only or mechanism shot | The character block went in — leave it out whenever no people are in frame |
| A product-only shot reads like a product photograph | That is this style's photographic material at work; when the shot should read as animation, keep a character or a stylized prop in frame |
| The named emotion doesn't show on the face | Emotion written as an adjective — name the feeling, then the brows, lids, and mouth |
| Label garbled | State the label copy exactly, with its colour, and attach the product reference |
| One character looks different between shots | Lock the character as a canonical reference, opened with the style and character blocks, and attach it to every shot they appear in |
