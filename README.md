# Northstar Social website

A lightweight static website for Northstar Social, a social-content service for small businesses in Ulaanbaatar. The site presents the introductory ₮35,000 offer from the launch plan. It makes no claims about client results or prior work.

## Add your contact email

Open `script.js` and replace the empty value in `const CONTACT_EMAIL = "";` with the confirmed business email, for example `const CONTACT_EMAIL = "name@example.com";`. Save and commit the file. The contact buttons will then open a pre-addressed email draft. Without that change, they show a helpful setup message. This static site has no form backend and cannot receive or store messages itself.

## Publishing

The `.github/workflows/pages.yml` workflow deploys the static files to GitHub Pages on pushes to `main`. In the repository, open **Settings → Pages** and select **GitHub Actions** as the publishing source if GitHub asks for it. The repo is public, as required for GitHub Free Pages. After the first successful workflow, GitHub shows the live site URL under **Settings → Pages** and on the workflow run.

The site uses Google Fonts when online and falls back to system fonts if they are unavailable.

