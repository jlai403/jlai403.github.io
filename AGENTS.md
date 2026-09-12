# Agent notes

See README.md for the stack, layout, and commands.

## Icons

Font Awesome 6.7.2 loads from a CDN in `src/layouts/Base.astro`. Declare style
prefixes explicitly: `fa-brands` for brand marks, `fa-regular` or `fa-solid` for
the rest. Do not add an icon npm dependency.

Social links live in two places and should stay in sync: the icon row in
`src/pages/index.astro` and the `items` array in `src/components/CmdK.svelte`.
