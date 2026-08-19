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

The slide is the screen-share anchor for the 45–60 second video and the static LinkedIn image. Keep the GitHub URL in the post's first comment as well; the footer is intentionally a memory aid rather than a clickable link.
