# Daniel Haile — Portfolio

A modern, professional portfolio website built with React.

## Tech Stack
- React 18 + React Router v6
- Pure CSS with CSS variables (no Tailwind required)
- Playfair Display + DM Sans + JetBrains Mono (Google Fonts)
- Scroll-reveal animations via IntersectionObserver

## Local Development

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm start
```

## Deployment

### Option 1: Vercel (Recommended — easiest & fastest)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Framework: **Create React App** (auto-detected)
5. Click **Deploy** — done. Custom domain available free.

### Option 2: GitHub Pages

1. In `package.json`, set `"homepage"` to your GitHub Pages URL:
   ```json
   "homepage": "https://danielhaile5486-rgb.github.io/portfolio"
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

4. In GitHub repo Settings → Pages → Source: `gh-pages` branch

## Making Contact Form Send Real Emails

The contact form currently simulates sending. To make it work:

### Using Formspree (free, no backend needed)
1. Create account at [formspree.io](https://formspree.io)
2. Create a new form → get your endpoint URL
3. In `Contact.js`, replace the `handleSubmit` function:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('sending');
  const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });
  if (res.ok) setStatus('sent');
  else setStatus('error');
};
```

### Using EmailJS (free tier: 200 emails/month)
1. Create account at [emailjs.com](https://www.emailjs.com)
2. Follow their React guide
3. Replace the submit handler with EmailJS send call

## Customization

- **Colors**: Edit CSS variables in `src/styles/global.css` `:root` block
- **Projects**: Edit the `projects` array in `src/pages/Projects.js`
- **Skills**: Edit `skillCategories` in `src/pages/Skills.js`
- **Timeline**: Edit `timelineItems` in `src/pages/About.js`
- **Theme default**: Change `'dark'` to `'light'` in `App.js` useState

## File Structure

```
src/
├── styles/
│   └── global.css        # All CSS variables, base styles, animations
├── pages/
│   ├── Home.js           # Hero, project preview, CTA
│   ├── About.js          # Bio, education, timeline
│   ├── Projects.js       # Project cards with filter
│   ├── Skills.js         # Animated skill bars
│   └── Contact.js        # Form + contact info
├── App.js                # Router, Navbar, Footer, ThemeContext
└── index.js              # Entry point
```
