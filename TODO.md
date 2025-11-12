# TODO: Implement Website for DSA Challenges with Code Runner and Viewer

## Plan Overview
- Modify `scripts/generate_challenges.js` to copy challenge files into `site/public/challenges/` and update paths in `challenges.json` to `/challenges/...`.
- Change challenge page to fetch code via HTTP from `/challenges/...` instead of `fs`.
- Add prebuild script in `site/package.json` to run the generate script.
- Minor updates to `site/vercel.json`.
- Connect GitHub repo to Vercel for auto-deploy on pushes.

## Steps to Complete

### 1. Modify `scripts/generate_challenges.js`
- Update script to copy all challenge files (.py, .java) to `site/public/challenges/` maintaining directory structure.
- Update paths in `challenges.json` from `../Phase X/...` to `/challenges/Phase X/...`.
- Ensure the script runs from repo root and creates necessary directories.

### 2. Update `site/src/app/phases/[phaseId]/[challengeId]/page.tsx`
- Remove `fs` usage for reading code files.
- Change to fetch code via HTTP from the updated paths (e.g., `/challenges/Phase 1 – Core Programming Fundamentals/Armstrong number/Armstrong_number.py`).
- Handle fetch errors gracefully.

### 3. Update `site/package.json`
- Add a `prebuild` script that runs `node ../../scripts/generate_challenges.js` before building.

### 4. Update `site/vercel.json`
- Ensure rewrites allow access to `/challenges/` files.
- Add any necessary build configurations.

### 5. Test Locally
- Run `npm run build` in `site/` to ensure everything works.
- Test the website locally with `npm run dev` and verify code viewing and running.

### 6. Deploy to Vercel
- Connect the GitHub repo to Vercel.
- Set build command to `npm run build` in `site/` directory.
- Deploy and verify functionality.

### 7. Confirm Auto-Updates
- Make a small change to a challenge file in the repo.
- Push to GitHub and verify Vercel auto-deploys and reflects the change.
