# North Peak source manifest

## Ownership and freshness

| File | Owner | Status | Review cadence |
|---|---|---|---|
| `brand-guidelines.md` | ForgeX webinar content owner | Approved fictional canon | Before each public reuse |
| `messaging-framework.md` | ForgeX webinar content owner | Approved fictional canon | Before each public reuse |
| `icp.md` | ForgeX webinar content owner | Approved fictional canon | Quarterly while reused |
| `personas.md` | ForgeX webinar content owner | Approved fictional canon | Quarterly while reused |
| `product-portfolio.md` | ForgeX webinar content owner | Approved fictional canon | Before each public reuse |
| `proof-and-claims.md` | ForgeX webinar content owner | Required control file | Before every campaign build |
| `campaign-demo-brief.md` | ForgeX webinar content owner | Synthetic scenario | Before every live demo |

## Design evidence used to create the canon

The current canon was normalized from the fictional North Peak demonstration environment in a separate local repository. These paths are evidence sources, not runtime dependencies:

- `sites/north-peak-demo-system/index.html`
- `sites/north-peak-demo-system/interactive-content.html`
- `sites/north-peak-demo-system/personalized-campaign.html`
- `sites/north-peak-demo-system/personalization-widget-concepts.html`
- `sites/north-peak-demo-system/webinar-lifecycle.html`

Source repository at time of normalization:

`/Users/treyharnden/Projects/folloze-mcp-demo-environments`

## Normalization decisions

- Bricolage Grotesque and Manrope are the preferred canonical type pair. Sora and Avenir Next remain fallbacks because they appear in earlier assets.
- The product portfolio is standardized as Discover, Protect, and Monitor.
- North Peak is always fictional. Existing pages or visuals do not constitute real product or customer proof.
- Alder Manufacturing is the canonical target for the September webinar maturity example.

## Conflict protocol

If a later North Peak asset conflicts with this corpus:

1. record the conflicting source and access date;
2. identify the affected files;
3. choose the new canonical rule explicitly;
4. update the corpus and this manifest in the same change;
5. rerun any affected campaign or demo QA.
