(Following SvelteKit convention, `+page` represents the layout of a particular route, and route determined by file structure)

For component structure:
- `organisms` are larger sections of a `+page`. Generally speaking, a `+page` should mostly have these
    - These can contain `molecules` and `atoms`, but not other `organisms`
- `molecules` are smaller components of either and `organism` or `+page`
    - These can only contain `atoms`, if any
- `atoms` are small components that have enough configuration s.t. it makes sense to not just use vanilla HTML
    - These are self-contained, atomic

Prefer vanilla HTML when possible, though when it makes sense create components based on these recommendations
