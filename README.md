# Warren Dodsworth Site

Hugo-based source for `warrendodsworth.github.io`, using the `blist` theme as a starting point while the site structure and design are refined.

## Current status

- Hugo site builds locally
- GitHub Pages deployment is configured through GitHub Actions
- Jekyll-specific config has been removed
- Hugo build artifacts are ignored

## Local development

1. Install dependencies with `npm install`
2. Run the dev server with `hugo server`
3. Build the production site with `hugo --gc --minify`

## Notes

- The site currently vendors the `blist` theme under `themes/blist`
- Issue `#1` covers Hugo and Pages setup
- Issue `#2` is the next step for defining the long-term site structure
