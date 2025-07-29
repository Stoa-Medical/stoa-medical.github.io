(Following SvelteKit convention, `+page` represents the layout of a particular route, and route determined by file structure)

For component structure:
- `blocks` are larger sections of a `+page`. Generally speaking, a `+page` should mostly have these (mostly structural)
    - These can contain `chunks`, but not other `blocks`
- `chunks` are smaller components of either and `block` or `+page`
    - These can only contain vanilla HTML structures

Prefer vanilla HTML when possible, though when it makes sense create components based on these recommendations
