# CourseKart Multi-Version Site

This repo now includes **all versions** of the course marketplace website and is ready for GitHub Pages publishing.

## Versions
- `/v1/` → Original Neon Marketplace
- `/v2/` → Bright Pro Theme
- `/v3/` → Dark Glass Theme
- `/` → Versions Hub page linking to all versions

## Publish on GitHub (all versions)
1. Create a GitHub repository.
2. Add remote and push:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin work
   ```
3. In GitHub repo settings:
   - Go to **Settings → Pages**
   - Set source to **GitHub Actions**
4. The workflow in `.github/workflows/pages.yml` auto-deploys the whole repo.

## Final URLs (after deployment)
- `https://<your-username>.github.io/<your-repo>/`
- `https://<your-username>.github.io/<your-repo>/v1/`
- `https://<your-username>.github.io/<your-repo>/v2/`
- `https://<your-username>.github.io/<your-repo>/v3/`
