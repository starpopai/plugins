---
name: replicate-video
description: "Activate when the user wants to work from a specific reference video"
---

# How to make videos from a reference video

Recreate or adapt a reference video the user has had analyzed. 

This skill covers reading the reference precisely and pinning down what the user wants from it. 

## 1. Read the analysis

The analysis of the selected video is the source of truth. Obtain any missing part before planning a close replication.

Build from:

- Shots: the source's shot structure and measured timings.
- Transcript: exact words, spoken or sung, and measured word timings.
- Sound: whether the words are spoken or sung, the music under or around them, and a brief for recreating that music.
- Visual understanding: format, camera, setting, actors and voices, product, hook, action, and CTA.
- Frames: reusable opening and closing images for each shot. Preserve their exact references when anchoring regenerated shots.

Take each fact from the layer that can establish it:

- Spoken or sung comes from the sound analysis of the whole track. A vocal song is sung, including rap and rhythmic spoken verses over a beat. A question about part of the audio does not overrule it.
- On or off camera comes from the visuals; the sound cannot establish it. A voiceover is spoken words with no one speaking on camera. Sung words with no one singing on camera are a song over the picture, not a voiceover.
- The cut count comes from the shots.
- A shot whose picture is an illustration, photo, or slide that moves only by a camera pan or zoom is a still, not footage.

## 2. Dissect the reference

Break the reference into layers and state them briefly alongside the goal:

- Format: what kind of ad it is and its visual style.
- Delivery: spoken on camera, voiceover, sung on camera, sung over B-roll, or music with no words.
- Structure: the order of the ad's parts (hook, problem, proof, payoff, CTA) and any repeated device, such as a refrain or a recurring line.
- Hook: the first picture, the first line, and any opening text, and why together they hold attention.
- Proof device: a demo, a before/after, a test, a testimonial.
- Pacing: shot lengths, cut rhythm, and what drives the cuts: the words, the music, or the action.
- Performance: energy, expressiveness, and pace as performed.

Then name the mechanism: the one or two layers this reference wins on. Replication protects it; inspiration borrows it.

## 3. Establish the goal

Pin down why the user is working from this video and what they keep versus change. The goal decides the script handling, which elements you touch, and the rebuild. Don't jump into generating, and don't assume they want it adapted to the current brand or product.

- Swap the actor only. New face or persona; keep the script, product, setting, and motion.
- Swap the actor, hold the exact motion. A single moving shot (a dance, a clothing try-on or turn) where the movement is the whole value.
- Swap the product, usually with the actor. Sell a different product with a proven ad; adapt the script lightly; keep the pacing, structure, camera, and style.
- Swap the setting. Same actor and script, new place.
- Tweak the script. Keep the structure, pacing, and style; change what's said.
- Take inspiration. A new ad for their product built on the reference's mechanism; nothing is copied shot for shot.

Requests often combine these (new actor + new product; new actor + same motion).

If the request makes the goal clear, infer it, state it in one line, and continue. If it doesn't, lay out these options with a recommendation and let the user pick; never silently default to one.

### The replication spec

The goal fills this table. Infer it, state it, and validate it in one pass; don't ask axis by axis.

| Axis                                             | Default                                                       | Replace when                                 |
| ------------------------------------------------ | ------------------------------------------------------------- | -------------------------------------------- |
| Product / subject                                | REPLACE                                                       | almost always — the new product is the point |
| Actor (look, demographic, wardrobe, energy)      | KEEP                                                          | the user has a specific actor/persona        |
| Delivery (spoken, sung, or music only)           | KEEP — a song stays a song                                    | the user asks to change it                   |
| Voice                                            | MATCH source (from the analysis's voice or vocal description) | the user picks/clones a voice                |
| Environment                                      | KEEP                                                          | the user has a specific location             |
| Script / dialog                                  | KEEP verbatim; adapt lightly only if the product changes      | the user rewrites it                         |
| Camera mode · pacing · cut rhythm · visual style | KEEP                                                          | rarely — this is _why_ they're replicating   |
| Title captions / overlays                        | ADAPT wording, keep format & timing                           | —                                            |

### The script

- No product change: the script is the reference transcript, verbatim.
- New product (the default): change only what the new product needs (its name, claims, offer) and leave every other line as the reference wrote it. Use the target's real facts, never the source's or invented ones, and adapt a claim to what the target actually has ("three firmness options," not "adjustable," if that's the truth). Keep each line close to its source line's spoken length, using the source shot's duration as a loose budget, so shots stay aligned to the reference's pacing.
- A sung reference: the lyrics are the script and the same cases apply. Keep each adapted line's length and rhyme close to the line it replaces, and keep any refrain. 

Whenever the script differs from the reference transcript, show the complete script shot by shot with what changed and why. When the change only swaps product facts the user asked to swap, show it in the same reply that generates; wait for approval before any further rewrite the user did not write.

### Taking inspiration

Map each borrowed mechanic onto the user's product (their hook, their proof, their payoff), changing the specifics: the product, the words, the setting, the performer, the visuals. Write the new concept in a few lines, naming the mechanics it borrows.

- One clip now ("draft one remix", "make me a version of this"): write the concept into one video's prompt, attach the product reference, and generate it immediately.
- A full ad: continue through normal ad creation, keeping the reference's delivery and using its pacing as a guide, not a clock. New lyrics follow the reference song's structure, line length, and refrain without copying its words.

No shot-for-shot recreation, reused frames, or verbatim script. When the user wants those, it is replication.

## 4. Choose the rebuild

The goal decides what you swap; the source's shape decides how you regenerate it.

Generate images with Nano Banana 2.1 (`nano-banana-2.1`; recommendation `image.replication`). Default for reference-ad replication: each shot's adapted start frame, its revisions, and the canonical references it needs. For a realistic person talking to camera, generate the start frames with GPT Image 2.6 Flare (`gpt-image-2.6-flare`; recommendation `image.talkingToCamera`). Default for start frames of a realistic person talking to camera, including replications, and their revisions.

### Motion control: one uninterrupted moving shot

Use when all hold: the source is one shot with zero cuts, within the motion-control reference cap (30s on Kling 3.0 Motion Pro), and the value is one primary character's motion, such as TikTok Shop clothing and dance clips. One cut disqualifies it.

1. Edit the source's start frame to the target (actor, background, product) with the canonical references, keeping the pose and framing identical so the motion maps cleanly.
2. Hand off the motion transfer. Motion control is not an agent generation model: tell the user to run it in Starpop's video generator. Kling 3.0 Motion Pro (`kling-3.0-motion-control-pro`; recommendation `video.motionTransfer`). For an uninterrupted motion-led source shot, hand off motion transfer to the video generator outside chat. Alternatives: Kling 2.6 Motion Standard (`kling-motion-control-standard`): A cheaper motion-transfer option is preferred. Use the edited frame as the image and the source clip as the motion reference, with original sound off when the audio is replaced.

### Shot by shot: any cut

The source's shots are the spine.

- Unless the user asks to skip image generation, generate an adapted start frame for every moving shot from its extracted source frame as the composition reference, plus the canonical references it needs. These frames are the requested work, not extra outputs; a canonical reference is not a start frame. Never fall back to reference-only video without the user's agreement.
- For a still shot, the accepted frame is the finished shot; place it in the edit with the source's image motion.
- Animate each moving shot from its accepted frame. MiniMax H3 Max (`minimax-h3-max`; recommendation `video.replication`). Default for animating each accepted reference-ad replication start frame. Supported durations: 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 seconds. This overrides the general recommendations except for a cinematic source, which follows the multi-shot rules with Seedance 2.5 (`seedance-2.5`; recommendation `video.cinematic`). Default for cinematic scenes, realistic or animated: multi-shot scene generations that cut between shots and characters. Generate at 480p unless the user or a quality preference sets another resolution. and a realistic person talking to camera: Gemini Omni Flash 1.2 (`gemini-omni-flash-1.2`; recommendation `video.talkingToCamera`). Default for a realistic person talking to camera with native audio, one take per start frame within its duration cap. Describe age, tone, accent, and pace identically in every take. Alternatives: MiniMax H3 Max (`minimax-h3-max`): One uninterrupted talking take must run longer than the default's duration cap. Never switch models to fit more shots into fewer, longer generations.
- For a cinematic source, attach every batched shot's accepted frame as a composition reference labeled with its shot.
- To correct a shot, edit its frame and regenerate the video from the corrected frame.

### The clock

Take the clock from the reference's delivery; when performed words and a music bed both exist, the words set it. Motion control is always visual-led.

- No words, or the action drives the cuts: the reference's measured shot timings. Generate each shot at the shortest supported duration that covers it and trim it to the source length. A music-only source stays visual-led unless the user wants generated music to drive the cuts; note the source's music vibe and leave the track to the user.
- Voiceover: the generated voiceover. Design the voice from the analysis's voice description (gender, age range, accent, pace, energy, timbre), or use the user's clone, and name the pick so the user can swap it.
- On-camera dialogue in a realistic reference: native speech in each clip, with no separately generated speech, voice search, or lip-sync unless the user picks a voice or asks for it. Fast pacing or voice consistency is not a reason to switch. Describe the voice from the analysis identically in every clip. Match the reference's energy, expressiveness, facial expression while speaking, and pace as performed; do not heighten them, and state the expression in each prompt. When the source cuts to B-roll while the speaker keeps talking, generate the speaking shot for the whole line and lay the B-roll over it in the edit.
- Sung: the generated song. Take the style from the sound analysis in under 25 words: `[genre], [vocal], [tempo / BPM], [mood], [production]`. The vocals start immediately, with no instrumental intro. Shots where a character sings on camera lip-sync to their song segment; everything else is silent picture under the song.

Once a voiceover or song exists, the reference's timeline no longer sets shot lengths. A shot animated with its own audio segment never runs past it: choose the largest supported duration no longer than the segment, and when a segment is shorter than the model's minimum, batch it with its neighbors on their combined segment.

## 5. Rebuild faithfully

Change only what the spec replaces. Keep every other element of each shot (composition, framing, camera mode, action, timing) as the reference has it. Mimic, don't redesign.

If a source action doesn't fit the new setting or product (jumping on a bed → a cramped RV; unboxing a rolled mattress → a one-piece that doesn't roll), propose a duration-matched replacement shot and confirm. Never silently drop a shot.

### Swap prompts

A start-frame swap keeps the source image exactly as it is; the prompt only routes attributes between references. Assign each reference a role, name the attributes it supplies, and name the attributes it must not supply. Do not describe the scene or add anything else; every added word lets the frame drift from the source.

Enumerate the source frame's on-screen state literally: object counts, layouts, positions. Real example that worked: _"how many of the circular red-border black-interior pads remain and their layout and position on the green board, and the position of the blue and red balls stuck to it."_

Set clothing per goal: from the new character's reference, or from the source frame.

Backbone (`reference image 1` = the new character's canonical reference; `reference image 2` = the source shot's start frame; renumber to the actual references and add product or wardrobe callouts after it). Put clothing in the line of the image it comes from:

> Use reference image 1 for the face structure, skin color, skin tone, hair, identity[, and clothing].
>
> Use reference image 2 as the complete reference for [clothing, ]pose, facial expression, action, scene composition, background environment, lighting setup, overall atmosphere, and the exact on-screen state — reproduce every object, its count, layout, and position exactly as framed.
>
> Do not take the facial identity — face structure, skin tone, or hair — from image 2; keep only its facial expression.
>
> Do not include any text or captions.

## 6. Present, then generate

Present the goal, the spec, the rebuild, the clock, and the storyboard, with each row naming its source shot, start-frame change, and line, or the single motion-control spec. Flag assumptions, replacement shots, and any shot over the cap.

When the goal and the swaps were clear from the request, generate in the same reply. Otherwise wait for approval; revise and re-present on tweaks.
