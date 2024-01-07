# misebar v0.1.4

## :computer: Stack

- Front-end: [SvelteKit](https://kit.svelte.dev/)
- Back-end: [PocketBase](https://pocketbase.io/)
- UI: [skeleton.dev](https://www.skeleton.dev/) / [iconify](https://iconify.design/)
- Testing: [Vitest](https://vitest.dev/) / [Playwright](https://playwright.dev/)

## Data Structure

```mermaid
erDiagram
          INGREDIENT {
            string name
            string slug
            string unit "oz, dash, g, (blank)"
            id recipe "FK"
          }
          RECIPE {
            string name
            string slug
            file image
          }
          RECIPE_INGREDIENT {
            id recipe FK
            id ingredient FK
            number quantity
          }
          RECIPE_INGREDIENT }o..|| INGREDIENT : has
          RECIPE_INGREDIENT }o..|| RECIPE : has
          USER {
            string username
            string email
          }
            
```

## :construction: Under Development

- [ ] feat: @kate when you tap the user icon from account page, takes you back to home page
- [x] feat: add index field to recipeIngredients for better ordering
- [x] test: add more tests/environment for database/auth testing
- [x] test: add testing env to vercel `dev` branch
- [ ] feat: user ability to edit ingredients/recipes that they own
- [ ] feat: similar recipes field on 'recipes' (and links to others on slug page)
- [ ] feat: recipe tags for better searching
- [ ] feat: `/ingredients/[slug]` page for recipes containing [slug]
- [ ] feat: display thumbnail of image when creating recipe
- [ ] feat: be able to delete ingredient lines if too many added (add/remove)
- [ ] feat: add ingredients right from new recipe page.
- [ ] feat: remove unecessary styles (margin, color)

## :arrows_counterclockwise: Changelog

- started development 2023 [mise](https://github.com/kylehorton33/svelte-bar)
- [0.1.0](/CHANGELOG.md#010) [0.1.1](/CHANGELOG.md#011) [0.1.2](/CHANGELOG.md#012) [0.1.3](/CHANGELOG.md#013) [0.1.4](/CHANGELOG.md#014)