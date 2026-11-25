---
name: starpop-foundations
description: "Starpop's production rules for ads: storyboarding, advertising, generation, model choice, visual consistency, music, and editing. Load once before planning, prompting, or generating."
---

# Storyboarding

The storyboard is an important step in the production planning.

It is a visual representation of the ad script.

A video is planned as shots. 

A shot is one continuous visual passage: its subject, setting, framing, and action over time. 

One storyboard row represents one shot; keep its identity through start frames and video prompts. A shot can contain several spoken lines, actions, or camera moves. 

A frame is a still image anchoring a shot.

Columns: Shot | Visual | Timing | Script / Audio | References | Transition-in.

- As a default, aim for a new visual roughly every 3-4 seconds to keep it fast-paced.

- A subject, setting, framing, and action an outside observer could film — never a paraphrase of the script line. If a line cannot earn a picturable visual, flag the line rather than write a vague cell.

- Every recurring character, environment, or product a shot uses is listed, and each resolves to a canonical reference — existing, or flagged as image work to do before generation.

- Timing holds the time range and duration for every shot, with or without words. Use measured audio timing when it exists; otherwise use the planned action or native-speech estimate.

- Audio holds the words or audio cue. Prefix it ON CAMERA when a character in the shot speaks or sings, and VOICEOVER when the words are off camera; label silent picture or instrumental audio explicitly. 

## Pacing

The audio sets the pace: generate the voiceover or song first and storyboard on its measured timing.

Shots with native audio have estimated timing.

## When to make a storyboard

The storyboard is the interface between the user and you, the starpop agent.

It's a communication device to help the user understand the ad and the production process.

Make a storyboard after the script is written and before making images.

When all reference images are generated, update the storyboard with the references.

When all media is generated, update the storyboard with the media.




# Advertising foundations

Honor the user's script and creative direction. 

Preserve supplied wording, claims, premise, tone, and structure, even when you believe a claim is factually incorrect or unverified. 

If the user requests changes, change only what they asked for; do not quietly correct, soften, or replace other lines.

Only fact-check, correct claims, add disclaimers or draft labels, or replace supplied copy with placeholders when the user asks. Do not make substantiation a condition of drafting, adapting, or producing their script. 

Help make the chosen concept work. Apply the principles below when developing original copy or making requested revisions, as guidance rather than requirements. They never authorize overriding the user's script or substituting your preferred angle.

Choose one problem, outcome, or desired identity and build the ad around it.

Translate product facts into concrete buyer outcomes:
- Feature: what the product has or does.
- Claim: the outcome it promises.
- Mechanism: why it works.
- Proof: why the claim should be believed.

When you write the problem yourself in the words real buyers use for it. 

Introduce the product as the answer to that problem.

Start from what the buyer already knows (awareness levels):
- Unaware: create relevance before introducing the product.
- Problem-aware: begin with their experience of the problem.
- Solution-aware: explain the mechanism or meaningful difference.
- Product-aware: answer objections and provide proof.
- Ready to buy: lead with the offer or next action.

The opening is the first expression of the ad's idea. A strong opening:
- is noticeable immediately;
- communicates one premise clearly;
- gives the intended audience an honest reason to continue;
- fits their awareness and the ad's objective;
- creates a natural path to the product.

It may lead with compelling content, a problem or desire, or the product and its proof. 

For broad or unaware audiences, it does not need to name the problem or product immediately; aim to connect them while preserving the user's chosen premise and structure.

Use one focal point and a deliberate reading order: attention, message, proof when available, then action. 

The destination must continue the same promise at the appropriate awareness level. 

The ad should carry one coherent path:
- earn attention;
- develop the problem, desire, result, or question;
- introduce the product as a relevant answer;
- make the answer believable;
- give the appropriate next action.

Use concrete, natural customer language. 

Cut repetition, jargon, hype, vague superlatives, and generic setup.

When developing an original concept, aim for a relevant connection between the opening and the product. 



# Generation models

Image models: Nano Banana (`nano-banana`), Nano Banana 2 (`nano-banana-2`), Nano Banana 2.1 (`nano-banana-2.1`), Nano Banana 2 Lite (`nano-banana-2-lite`), Nano Banana Pro (`nano-banana-pro`), GPT Image 1.5 (`gpt-image-1.5`), GPT Image 2 (`gpt-image-2`), GPT Image 2.5 Flare (`gpt-image-2.5-flare`), GPT Image 2.5 Sunburst (`gpt-image-2.5-sunburst`), GPT Image 2.6 Flare (`gpt-image-2.6-flare`), GPT Image 2.6 Sunburst (`gpt-image-2.6-sunburst`), P-Image (`p-image`), Seedream 4.5 (`seedream-v4.5`), Seedream 5 Lite (`seedream-v5-lite`), Seedream 5 Pro (`seedream-v5-pro`), Grok Imagine (`grok-imagine`).
Video models: Grok Imagine Video (`grok-imagine-video`), FLUX.3 (`flux-3`), FLUX.3 Max (`flux-3-max`), MiniMax H3 (`minimax-h3`), MiniMax H3 Max (`minimax-h3-max`), MiniMax H3 Max Turbo (`minimax-h3-max-turbo`), Gemini Omni Flash (`gemini-omni-flash`), Gemini Omni Flash 1.1 (`gemini-omni-flash-1.1`), Gemini Omni Flash 1.2 (`gemini-omni-flash-1.2`), Veo 3.1 (`veo-3.1`), Veo 3.1 Fast (`veo-3.1-fast`), Veo 3.1 Lite (`veo-3.1-lite`), Kling 2.6 Pro (`kling-2.6-pro`), Kling 3.0 (`kling-3.0`), Kling 3.0 Turbo (`kling-3.0-turbo`), Kling 4.0 (`kling-4.0`), Kling O3 Pro (`kling-o3-pro`), Seedance 1.5 Pro (`seedance-1.5-pro`), Seedance 2 (`seedance-2`), Seedance 2.5 (`seedance-2.5`), Seedance 2.5 Flash (`seedance-2.5-flash`), Seedance 2 Fast (`seedance-2-fast`), Seedance 2 Mini (`seedance-2-mini`), Happy Horse (`alibaba/happy-horse`), P-Video (`prunaai/p-video`), P-Video-2 (`prunaai/p-video-2`), P-Video-2 Pro (`prunaai/p-video-2-pro`).
Music models: V6 (`V6`), V5.5 (`V5_5`), V5 (`V5`), V4.5 Plus (`V4_5PLUS`), V4.5 (`V4_5`), V4.5 All (`V4_5ALL`), V4 (`V4`), MiniMax Music 3 (`minimax-music-3`).

If a name could identify several models, ask which one the user means.

## Choosing a model

Choose image and video models separately. Use the first that applies:
1. The user's explicit choice for this request.
2. The model already agreed for work being revised or continued.
3. A model pinned in the user's latest generation preferences, whenever it can perform the operation.
4. The active skill's model.
5. The closest purpose below.
6. The general recommendation.

The chosen model must support the request's inputs, duration, resolution, and references. If it cannot, explain why and ask for a supported choice.

## Image

- General: Nano Banana 2.1 (`nano-banana-2.1`; recommendation `image.default`). Use when no user choice or more specific recommendation applies.
- Exact text or a dense multi-element composition: GPT Image 2.6 Flare (`gpt-image-2.6-flare`; recommendation `image.textAndComposition`). Use when a still needs exact text or a dense multi-element composition; use medium quality unless the user selected another supported quality.
- Start frame of a realistic talking head: GPT Image 2.6 Flare (`gpt-image-2.6-flare`; recommendation `image.talkingToCamera`). Default for start frames of a realistic person talking to camera, including replications, and their revisions.

## Video

- General: MiniMax H3 Max (`minimax-h3-max`; recommendation `video.default`). General video model when no user choice or more specific recommendation applies: text, start and end frames, references, and audio slices, single-shot or multi-shot. Alternatives: Gemini Omni Flash 1.2 (`gemini-omni-flash-1.2`): Cheap, fast generation with native audio is preferred; describe the voice explicitly for spoken lines.; MiniMax H3 (`minimax-h3`): The deliverable needs a resolution above the recommended model's supported resolutions.
- A realistic talking head: Gemini Omni Flash 1.2 (`gemini-omni-flash-1.2`; recommendation `video.talkingToCamera`). Default for a realistic person talking to camera with native audio, one take per start frame within its duration cap. Describe age, tone, accent, and pace identically in every take. Alternatives: MiniMax H3 Max (`minimax-h3-max`): One uninterrupted talking take must run longer than the default's duration cap.
- Cinematic scene, realistic or animated: Seedance 2.5 (`seedance-2.5`; recommendation `video.cinematic`). Default for cinematic scenes, realistic or animated: multi-shot scene generations that cut between shots and characters. Generate at 480p unless the user or a quality preference sets another resolution.

## Preferences

Apply the number of generations per request from the user's latest generation preferences.

A quality preference applies whenever its model is used, including under Auto, and never selects a model. Keep an explicitly agreed quality through continuations. If a preference conflicts with the request's mode, duration, references, or plan entitlements, explain the incompatibility and ask for a supported choice; never silently substitute a different quality.



# Generations

A generation is one image, video, or audio item made from one set of settings; asking for several makes several. Each has its own reference.

Generating creates the media now. Treat explicit requests to create or generate an image/video/audio as authorization to generate with reasonable non-material assumptions.

Changed settings are new generations, never a revision of existing media.



# Media generation rules

A generation model sees only its own prompt and attached references, not the chat or previous outputs. Re-attach every product, character, voice, or environment that must stay consistent and identify it by name or role.

Keep creative direction separate from generation settings such as model, aspect ratio, resolution, duration, and number of outputs.

Preserve user-supplied dialogue verbatim unless the user asks to edit it, including names and punctuation.


Put exact dialogue in the active format's required delimiters, using quotation marks otherwise, and keep delivery directions outside the spoken words.

# How a generation prompt is written

Identify each attachment by purpose, not by describing its contents: "image 1 is Maya", "image 2 is the product", "audio 1 is the voiceover slice". Describe only what the model must invent beyond the references. If a reference contains several subjects or references govern different aspects (face, pose), assign those roles explicitly.

Use the labeled sections below, in order, with whitespace between them. Omit empty sections. An active format's explicit prompt structure takes precedence, including its still-image formula, dialogue delimiters, and timed event grammar.

Video prompt structure:

- Style: the rendering world — one line, or the format's locked style block.
- References: one identification line per attachment.
- Shots: numbered blocks, each shot its own definition:
  - Shot N: one concrete visible action.
  - Camera: that shot's framing and motion, separate from subject motion.
  - Transition: the join into the next shot — one picturable move, or "Cut to" for a hard cut. Never implicit.
  A video output with one shot, or one camera treatment across every shot, states Camera once for the whole Shots section. One continuous shot with no cuts is a valid plan — say so.
- Script: the exact lines in quotes — speaker and delivery per line.
- Voice & delivery: only for native audio — the voice description, kept identical for a speaker across generations, plus the delivery, including specific actions. Generated delivery must be stated clearly.
- Constraints: targeted bans such as "No captions." and "No background music."

Image prompt structure:

- Style: as above.
- References: same rules.
- Visual: the one story moment — subject, action, setting.
- Composition: camera angle, framing, subject placement, depth, and negative space.
- Lighting: source, quality, mood.
- Constraints: as above.

Any product-backed generation must attach the actual product reference. Include rendered text only when the deliverable requires it, and reproduce approved words exactly.

In a multi-shot generation, give each shot its time range, such as "Shot 2 (3–6s):".

When the user rejects the visual style, offer three moves in order:
- change the prompt;
- test another image model;
- ask for a reference image of the style they want, because generation from a reference beats any description.

# Video generation foundations

A generated clip can contain several shots.

State how each shot joins the next:

- A cut: instantaneous, spending zero frames.
- A transition over time: specify how one shot leads into the next.

Camera movement within a shot belongs under Camera. Movement connecting separate shots belongs under Transition, such as a whip-pan hiding a cut.

Between two generations the join is a cut in the edit, or a chained seam on a shared exact frame.

If a continuous shot exceeds the model’s duration cap, chain it as several shots on a shared exact frame or explicitly plan a cut. Map the user’s terminology onto videos, shots, and frames.

Use a model that supports the intended inputs. Distinguish exact opening and closing frames from references for identity, product, setting, style, motion, or audio. A selected image is not automatically an exact frame anchor. Timed image anchors and edits to existing videos require compatible model capabilities.

# Audio

Words are sung, spoken, or absent, and performed on or off camera. Rap and rhythmic verses over a beat are sung.

- Voiceover: spoken off camera. Generated speech, measured; it sets shot timing, and the picture is silent under it.
- Song: a generated song, measured; it sets shot timing. Shots where a character sings are audio-driven from their song segment; the rest are silent picture under it.
- Dialogue: spoken on camera. Each clip sets its own length.
- No words: the planned action sets shot timing.

On-camera words use one of two techniques:
- Native audio: the video model voices the clip from a voice description, identical for a speaker across generations, or from an attached voice reference.
- Audio-driven: attach the shot's audio slice with its frame and prompt the model to perform to it. Any model that accepts image and audio input can do this.

Follow an active format's technique. Otherwise use native audio for realistic video; in other styles use audio-driven when exact voice, delivery, or pronunciation matters, and native audio otherwise.

Estimate spoken length at about 180 words per minute; for native audio, round up to the model's next allowed duration.

When speech needs a voice that neither the user nor the active workflow has set, design one from the speaker, audience, and delivery, and reuse it for that speaker. Browse existing voices only when the user asks.

# Generation units

- Single-shot generation: one shot's action or one transition.
- Multi-shot generation: several consecutive shots and their transitions.
- Still: an image moved by pan or zoom in the edit, with no video generation.

Choose by staging:
- Talking head: single-shot generation (see Talking head).
- Cinematic scene: characters acting together in a shared space, covered in film language such as dialogue exchanges, reactions, and reverse angles. Use multi-shot generation, realistic or animated; it holds the performances, voices, and geography that separate generations lose. "Cinematic" names this staging, not a look.
- Otherwise, if in doubt: single-shot generation.

Plan continuity when the user wants shots to flow without a visible cut.

# Single-shot generation

There are three ways of passing references to a single-shot generation:
1. Start frame: animate forward from the exact opening image.
2. Start frame and end frame: travel between two exact images. Requires a model that supports both frames; there is no end-frame-only mode. Model: Kling 3.0 (`kling-3.0`; recommendation `video.startEndFrameJourney`). Use when motion must begin and land on two exact designed frames. Alternatives: Seedance 1.5 Pro (`seedance-1.5-pro`): A budget option fits a well-designed frame pair.; Gemini Omni Flash 1.2 (`gemini-omni-flash-1.2`): Fast generation with frame anchors and native audio is preferred. Rerun a missed start-to-end journey on another frames-capable model before rewriting the prompt.
3. Reference images: let the video model improvise the shot from the references.

Default to one start frame per shot.

When several shots animate the same setup, such as a talking head, reuse the same start frame. Starting a shot from the previous shot's output compounds drift.

For a shot with several actions or spoken lines, describe them in order. For audio-driven shots, attach the matching audio slice; for native audio, quote the lines. End at a natural script stop within the model's duration cap.

## Start frame

- Design one still per shot from the canonical references, following the visual foundations, each the image the storyboard's Visual cell describes.
- Generate each shot with its still as the start frame; the prompt spends its words on the shot's action.

## Start frame and end frame

Visual continuity between shot(A) and shot(B) can be achieved in two ways.

1. Dedicated transition: each shot has its own action, and a separate generation performs the transition between them.
video(shot(A)): frame(A(start)) -> frame(A(end))
video(shot(A -> B)): frame(A(end)) -> frame(B(start))
video(shot(B)): frame(B(start)) -> frame(B(end))

2. Chained shots, or continuous transitions: the transition is the action, and each generation moves from one shot's frame to the next.
video(shot(1)): start(frame(A)) -> end(frame(B))
video(shot(2)): start(frame(B)) -> end(frame(C))
video(shot(3)): start(frame(C)) -> end(frame(D))

## Reference images

Instead of providing a clear frame to the video model, provide reference images as context and let the video model improvise.

## Single-shot workflow options

Generate or reuse the canonical references first. Then either:
1. All frames first: generate and review every frame, then generate the videos.
2. One shot at a time: generate a shot's frames, then its video.

## Talking head

One speaker per shot whose delivery is the action, to the lens or on a podcast or interview camera.

For a realistic talking head, design the start frame by placing the speaker into a real photo of the setting.

Split the speech into takes at sentence boundaries within the model's duration cap. Each take is one continuous shot; join takes with hard cuts.

Tie each gesture or glance to a phrase.

# Multi-shot generation

Choose the approach before selecting a model:
- Reference-guided multi-shot generations use start frames, a storyboard canvas, references, or audio as guidance.
- Ordered multi-shot prompts give each shot its own prompt and duration inside one generation. Model: Kling 3.0 (`kling-3.0`; recommendation `video.orderedMultiShot`). Use when one generation needs ordered shots with a prompt and duration for each shot.

Use it when generating the shots together provides better continuity, timing, or transitions than generating them separately.

Before generating:

1. Add up the duration of the shots.
2. Confirm the video model supports that duration.
3. Confirm the model supports the required inputs, such as multiple images, reference images, or audio.

Keep each multi-shot generation within the model's duration limit.

Prefer ending at a natural script boundary such as a sentence or completed thought. Group a cinematic scene by dramatic beat, never splitting a dialogue exchange across generations.

A composition frame guides a reference-guided shot without fixing it. State each shot's blocking in words: which way each character faces, where each one stands, and which hand holds each prop.

Regenerating a multi-shot generation regenerates every shot in it. For a defect in one shot, first consider splicing that shot from another take or reframing it in the edit.

If a run of shots doesn't fit into one multi-shot generation, split it into several and connect them using a cut or the single-shot start and end frame.

## Multi-shot workflow options

Generate or reuse the canonical references first. Then either:
1. All frames first: generate and review all start frames or storyboard canvases, then generate the videos.
2. One multi-shot generation at a time: generate its frames or storyboard canvas, then its video.

Storyboard canvas model: Nano Banana 2.1 (`nano-banana-2.1`; recommendation `image.storyboardCanvas`). Default for complex multi-panel compositions in every style. Style preferences for canonical references and stills do not override the canvas recommendation. Alternatives: GPT Image 2 (`gpt-image-2`): The user's feedback on the canvases points at the model.; Seedream 5 Pro (`seedream-v5-pro`): The user wants another visual register for the canvases.

# Dependency gate

Before generating, verify that every required input exists.

If a generation depends on unfinished media:
- generate the prerequisites first.
- do not generate the dependent item until all prerequisites are finished.



# Music generation foundations

Music is generated as its own asset and assembled with visuals in the edit.

Describe genre, vocal type, tempo, mood, and production concisely.

Use references to artists and song references if that provides more clarity than a description.

Preserve exact supplied lyrics, and put every section tag on its own line.



# Editing

An edit assembles finished media on one timeline. 

Lay the edit out as tracks: picture (clips in order), voice, music, captions, and text overlays when the edit has them.

The approved voiceover or song is the master clock. 

Cut the picture to the audio; never stretch, speed up, or re-time the audio to fit the picture.

Trim each clip to explicit in and out points in seconds.

Choose every join by what it does in the story. 

Cut hard within a scene or beat. 

Change scene or setting with a motion transition: 
- a whip (about 0.25 s)
- slide (0.35 s)
- zoom (0.35 s)

Use:
- a dissolve (0.4 s) for time passing, and
- fade through black (0.6 s) only for a section break or the ending. 

A transition overlaps the two clips it joins and shortens the picture by its length. 

A transition rendered inside a generation needs no edit transition.

Fit every clip to the delivery frame by cropping to fill it or padding to show the whole picture; never stretch. 

Keep one frame size and frame rate across the edit.

When the clips' own sound carries the edit, such as on-camera dialogue, keep every clip's sound, room tone included; muting one leaves a dead gap. 

Remove an unwanted word or sound by trimming or regenerating that passage. 

Mute a clip's own sound only under a voiceover or song whose clips' native sound is not intended. 

Keep music under speech, and fade it out at the end.

Cut audio only between words, at measured word timings, never mid-word. 

A pause or instrumental stretch stays with the segment that leads into it.

Word timings drift around pauses and quiet lines: confirm where the words sit in the audio before cutting near a pause, and listen to every join after rendering. Pauses inside a take are part of the performance; trim each take's dead air before its first word and after its last.

Caption the spoken or sung words by default; leave captions off only when the user asks or the edit has no words. 

Captions are a separate layer built from measured word timings and the approved script's spelling. 

When the on-screen words differ from the speech, such as a translation, write each line as its own timed caption from the measured timings of the speech it translates.

Give short-form ads a text hook unless the user declines one or the footage already carries its own: 
- one short text overlay that says what the picture and first spoken words do not, and opens a question only watching answers. 
- show it from the first frame, which also serves as the thumbnail. 
- never repeat the first caption. 
- keep it on screen long enough to read and clear of the captions.

When an ad sells something and has a next step to point to, close on a plain text overlay with the call to action, timed from the edit's end and held through the last frame, unless the format keeps sale language out of the film. Keep it clear of the captions.

Add other text overlays only when they say something the picture, voice and captions do not.

Before rendering, look at the frames under each text overlay for its whole time on screen, and move or retime it if it would cover a face.

Unless the deliverable specifies otherwise, export vertical video at 1080 × 1920 and 30 fps as H.264 with AAC audio, normalized to -14 LUFS with true peaks at or below -1 dBTP.



# Visual foundations

These rules govern the visual decisions behind image generations, reference assets, storyboards, start frames, and video shots.

An active format's explicit reference construction and generation workflow take precedence over the defaults below.

Use the video's aspect ratio for shot stills and start frames.

Design a moment, not an inventory of objects. State the subject, the concrete action occurring now, and the setting that makes the moment legible. 

A strong still implies what happened immediately before and what can happen next.

Describe emotions as observable behavior: posture, gaze, expression, gesture, and interaction with the environment. 

Do not ask a model to render an abstract feeling without showing its physical evidence.

Choose the camera deliberately:
- angle first;
- framing and distance second;
- subject placement and depth third.

The camera must serve the idea. 

Use eye level for neutrality, 
a high angle for vulnerability,
a low angle for power or scale, 
top-down for confinement or pattern, 
and over-the-shoulder for point of view. 

Avoid a generic centered eye-level composition unless neutrality is intentional.

Compose for the frame's shape. A vertical frame is tall and narrow: it holds one or two people from the knees or waist up, or a group arranged in depth, never a room or a row of people seen side to side. Do not carry a horizontal establishing wide into a vertical frame; turn the camera so the action runs toward or away from it, with one character in the foreground and the others beyond, and let cuts carry the rest of the geography. Keep faces in the upper half and never let empty floor or ceiling fill the frame.

Use one motivated light source appropriate to the setting. Name its direction, quality, and mood. 

Avoid piling on incompatible lighting terms; studio-flat, ring-lit, HDR, and perfectly even light are choices, not generic improvements.

Set rendering style as the world the image inhabits, so subjects, props, and setting share one visual language. 

Do not separately texture every object when one clear world-level style instruction governs them all.

When an abstract or subtle effect renders poorly, replace it with concrete visual evidence: a character reaction, a changed object, a visible before/after state, or an environmental response. 

The image should communicate the idea without requiring explanatory copy.

Generated text is intentional or forbidden:
- For start frames, reference assets, cinematic stills, and footage, exclude captions, labels, UI, watermarks, and incidental readable text unless the user explicitly needs them.
- For statics, title cards, packaging, diagrams, or other text-bearing deliverables, include only the exact settled copy and state where it belongs in the composition.
- Preserve real product labels from references; never invent label copy.

# Design an identity

Design identity separately from shot composition. 

Identity defines what a recurring subject is; a shot defines what that subject is doing here.

For an animated or fictional character, settle a coherent identity specification:
- archetype and role;
- face type and facial proportions;
- body proportions and dominant shape language;
- silhouette, hair, and wardrobe;
- limited color palette;
- signature features, accessories, or props.

Choose every identity lever deliberately and push one or two defining traits far enough to be memorable. 

The character should remain recognizable at thumbnail size and as a silhouette. Every choice serves one readable idea rather than accumulating unrelated details.

For an anthropomorphized object, product, ingredient, body part, or creature, define where the face lives, how it emotes, and how it gestures. 

If it cannot look, react, and act, it is not yet a performable character.

For a realistic person, begin from a user-supplied or selected real-person reference that fits the role, age, energy, and framing. 

Preserve the reference's believable human structure while creating a distinct identity unless the user is intentionally depicting themselves or another authorized person. 

Describing a realistic person from scratch is less reliable than grounding the design in a real visual reference.

Finish character design as one self-contained identity description containing every choice that must survive rendering. Do not mix environment, camera, or shot action into that identity description.

# Lock reusable identity

A reference is any image used to guide a generation. A canonical reference is the designated visual source of truth for a character, product, or setting. It can be an existing photo, an accepted generated image, or a reference sheet. A reference sheet is the format: one image with multiple views or details of an element; it becomes canonical when selected as that element's source of truth.

A recurring character, product, or environment has one canonical reference. Every later generation that uses the element re-attaches that exact asset and identifies it by name and role. Never substitute the previous shot's output for the canonical reference; output-to-output chaining compounds drift.

For a matched camera angle or continuing action, also attach an accepted earlier shot as a composition or continuity reference, keeping the canonical references as the identity anchors.

Create a reference sheet for a recurring element that must stay consistent across shots, viewpoints, states, or settings. Otherwise:
- A one-off subject is locked by the image in which it appears.
- A person who remains in one unchanged setup is locked by the designed start frame.
- A product still needs its accurate source images whenever visual fidelity matters, even when it does not need a generated sheet.

A reference sheet is one image dedicated to one element. It contains the visual and functional context later generations need, with no unrelated decoration. Build it from supplied references when they exist; otherwise build it from a settled text specification. Text mode is a valid way to create a new identity, not a lesser fallback.

Every sheet follows the same process:
1. Identify the element as character, product, or environment.
2. Gather the existing references and the facts they do not show.
3. Write one complete context specification.
4. Generate one landscape sheet on a clean white background.
5. Validate its identity, geometry, states, and forbidden content.
6. Regenerate the identical prompt once before changing an otherwise sound specification; try the appropriate alternative model before rewriting for model variance.
7. Reuse the accepted sheet unchanged in every dependent generation.

## Character reference sheet

Show three full-body views of the identical character at the same scale and baseline: front, side, and back. 

Add close-ups that preserve the face from the front and profile plus one named signature detail. 

Use a neutral pose, even studio lighting, a pure white background, and no environment, labels, borders, grid lines, captions, or watermarks.

The context specification names identity, face, hair, proportions, wardrobe, accessories, palette, and signature detail. 

Model: GPT Image 2.6 Flare (`gpt-image-2.6-flare`; recommendation `image.characterSheet`). Default for character sheets without an active visual style's character-model preference.

## Product reference sheet

Show each distinct product state once, side by side at the same scale, followed by a wider in-use view demonstrating scale and operation. 

Name every component, packaging layer, state, attachment, material, color, and functional relationship needed to assemble or use the product.

Use clean product photography on white with every part sharp and still. 

Preserve genuine printed labels exactly; for an unlabelled product, state that it has no printed label. 

Do not add packaging, manuals, duplicate states, invented copy, ghosted parts, or decorative props.

Model: GPT Image 2.6 Flare (`gpt-image-2.6-flare`; recommendation `image.productSheet`). Preferred for product sheets with accurate state counts and labels. Alternatives: Nano Banana 2.1 (`nano-banana-2.1`): Packaging fidelity matters in reference mode.

## Environment reference sheet

Show one complete environment. 

Include the whole space, its boundaries, entrances, important objects, their placement, and its orientation. 

A reference photo alone may omit unseen structure, so the context specification must name the space's kind, contents, ends, and the direction from which the source view was taken.

Use one model of the whole environment on a white background. 

Model: GPT Image 2.6 Flare (`gpt-image-2.6-flare`; recommendation `image.environmentSheet`). Default for complete room cutaways on a white background.

Model for vehicles and vehicle interiors: Nano Banana 2.1 (`nano-banana-2.1`; recommendation `image.vehicleEnvironmentSheet`). Use for camper vans, RVs, and vehicle interiors, keeping the full vehicle and its orientation.

# Produce animation

Generate a canonical style image reference.

Use this reference as input for other canonical references to ensure that the style is consistent throughout the animation.

You may not need to use the canonical style image reference when generating all other shots.

# Produce realism

Lack of realism is primarily a problem of input and not a text prompting problem. 

When an output feels unnatural, improve the visual reference, identity anchor, composition, or lighting.

For high realism, design the final picture as a believable still first, then ask the video model to animate that established image. 

Start frames establish identity, setting, lighting, and opening composition. Video prompts direct subsequent action and camera movement.

Choose the identity lock by scope:
- one person in one setup: the designed start frame;
- the same person across different settings or viewpoints: a reusable identity reference;
- an accurate product: its canonical product references in every shot where it appears;
- a recurring space: its environment reference.

Natural camera behavior, motivated light, plausible anatomy, physical contact, scale, materials, and restrained motion matter more than adding cinematic adjectives.



# Working through this connection

Present plans in the conversation and generate only within the user's requested scope.

Reuse the exact references returned by this connection. Discover current model capabilities and costs before generating, and quote the cost of large batches before starting them.

Write scripts, storyboards, and plans as files in the local project folder when the host has file access, so the user can review and edit them. Where a skill mentions a document, use such a file.

Every generation keeps its exact inputs. When the user asks for a variant or a changed prompt, rerun the existing generation instead of rebuilding its request.

Local finishing requires command execution, file access, and user-installed FFmpeg providing ffmpeg and ffprobe. These are host-side editing dependencies, not requirements for Starpop's remote generation. Without them, use Starpop's editor or deliver the generated assets and report the remaining editing work as incomplete.
