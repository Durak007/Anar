# Northstar Social website

A lightweight static website for Northstar Social, a social-content service for small businesses in Ulaanbaatar. The site presents the introductory ₮35,000 offer from the launch plan. It makes no claims about client results or prior work.

## Change the contact email later

The current contact address is set in `script.js` as `kirau951@gmail.com`. To change it later, edit the `CONTACT_EMAIL` value in that file and commit the update to `main`. GitHub Pages will publish the change automatically. The contact buttons open a pre-addressed email draft. This static site has no form backend and cannot receive or store messages itself.

## Google Search

The site includes a sitemap and `robots.txt` to help search engines discover it. To request indexing in Google, add the URL in Google Search Console, verify ownership, then use URL Inspection to request indexing or submit `https://durak007.github.io/Anar/sitemap.xml`. Google controls crawling and does not guarantee when, or whether, the page will appear in results.

## Publishing

The `.github/workflows/pages.yml` workflow deploys the static files to GitHub Pages on pushes to `main`. The repository is public, as required for GitHub Free Pages. The live site is available at https://durak007.github.io/Anar/.

The site uses Google Fonts when online and falls back to system fonts if they are unavailable.

