MIKE ARVYN A. AMUCAY — PORTFOLIO
================================

LOCAL RUN WITH LARAGON
1. Extract this ZIP.
2. Copy the folder "mike-amucay-portfolio" into C:\laragon\www\
3. Open Laragon and click Start All.
4. Open your browser and visit:
   http://localhost/mike-amucay-portfolio/
5. Edit the files in VS Code. Refresh the browser to see changes.

IMPORTANT CUSTOMIZATION
- The contact link is configured for arvynamucay@gmail.com.
- To add public phone, Facebook, or Instagram contact options, edit the contactDetails object near the top of script.js. Use an international phone number (for example, +639XXXXXXXXX) and full HTTPS profile URLs. Leave any value blank to omit that option.
- Add GitHub or LinkedIn links only when you want to share your actual profiles.
- The displayed projects are concepts; update their descriptions, screenshots, and links when you have work to showcase.
- The skills listed are starter content; keep only technologies you can confidently discuss.
- Update the professional profile with your exact education details and real experience. List awards or certifications only if you have earned them.
- Add your real photo in assets and update the hero section if you want a profile image.

FREE DEPLOYMENT
This version is static HTML/CSS/JavaScript, so it can be hosted free without PHP.
Recommended: Cloudflare Pages or GitHub Pages.
Cloudflare Pages:
1. Create a GitHub account and create a public repository.
2. Upload index.html, style.css, script.js, and assets (if used).
3. Sign in at https://dash.cloudflare.com/
4. Open Workers & Pages > Create > Pages > Connect to Git.
5. Connect GitHub and select your portfolio repository.
6. For plain HTML, leave build command blank and set build output directory to / (root).
7. Deploy. Cloudflare gives you a free pages.dev address.
8. Future GitHub pushes can trigger automatic deployments.

GitHub Pages deployment:
1. Create a repository on https://github.com/ and upload the CONTENTS of this folder (including the hidden .github folder) to its root.
2. In the repository, open Settings > Pages and set the source to GitHub Actions.
3. Push the files to the main branch. The included .github/workflows/pages.yml workflow publishes the site on every main-branch push.
4. Open the repository's Actions tab and wait for "Deploy portfolio to GitHub Pages" to complete.
5. The public site URL appears under Settings > Pages and in the completed deployment.

NOTE
GitHub Pages and Cloudflare Pages serve static files. PHP code and MySQL databases will not run there.
The contact form prepares a message in the visitor's email app via mailto; it does not transmit or store messages. A server-submitted contact form would need a PHP-capable host or a form service.
