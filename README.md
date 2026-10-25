# Ashrayam LLC — Enterprise Website Starter

Static responsive enterprise consulting website for US clients with a proposed global delivery approach.

## Preview locally

Open `index.html` in a browser, or from this directory run:

```bash
python -m http.server 8080
```

Visit http://localhost:8080.

## Before publishing

1. Replace `CONTACT_EMAIL_HERE` in `assets/js/main.js` with an email address you control.
2. Verify and register the desired domain separately; the code does not register `ashrayam.com`.
3. Review all claims and customize your legal business information.
4. Add a privacy notice before collecting personal information via a hosted form.
5. This starter contact form opens an email client; it is not a server-side form.
6. The church and wedding examples are fictional static demos, not operational RSVP systems.

## GitHub upload

Create an EMPTY repository on GitHub, e.g. `ashrayam-website`, then run inside the extracted folder:

```bash
git init
git add .
git commit -m "Initial Ashrayam enterprise website"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/ashrayam-website.git
git push -u origin main
```

GitHub HTTPS authentication requires a token or credential manager, not your account password. Alternatively use SSH if configured.

## Lightsail deployment (Ubuntu/Nginx)

Create a separate instance from your SFCD5 production server. Install Nginx and clone the repository into a directory you control, then copy the site to `/var/www/ashrayam`:

```bash
sudo apt update && sudo apt install -y nginx git
sudo mkdir -p /var/www/ashrayam
sudo cp -r ./* /var/www/ashrayam/
```

Configure an Nginx server block with `root /var/www/ashrayam; index index.html;` and your registered domain. Point the domain DNS A record to a Lightsail static IP. Enable HTTPS with Certbot after DNS resolves. Do not change the SFCD5 Nginx configuration.
