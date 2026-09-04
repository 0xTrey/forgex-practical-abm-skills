# One-slide visuals

Each episode has a 1600×900 ForgeX slide in SVG and PNG.

Regenerate the SVG files:

```bash
node content-calendar/visuals/generate.mjs
```

On macOS, generate the PNG files:

```bash
for slide in content-calendar/visuals/skill-*.svg; do
  sips -s format png "$slide" --out "${slide%.svg}.png"
done
```

The slide is the screen-share anchor for the 38–45 second video and the static LinkedIn image. The repository is currently private, so the visual footer uses series branding instead of a GitHub URL. Add a repository link only after the destination is publicly accessible.

Each slide uses one primary headline and one visible process flow. Never add an eyebrow, kicker, subtitle, or dek around the headline. Put supporting context in the script, post copy, flow, or footer.
