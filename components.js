const nav = `
<div class="nav-container">
    <a href="index.html" class="logo-group">
        <img src="optimized/imgs2/logo.webp" alt="Food Recovery Alliance Logo" class="brand-logo">
        <span class="brand-name">Food Recovery Alliance</span>
    </a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation">
        <span class="menu-toggle-icon" aria-hidden="true"></span>
        <span class="menu-toggle-label">Menu</span>
    </button>
    <ul class="nav-links" id="primary-navigation">
        <li><a href="index.html">Home</a></li>
        <li class="dropdown">
            <button class="dropdown-toggle" type="button" aria-expanded="false">Who We Are <span class="nav-chevron" aria-hidden="true"></span></button>
            <div class="dropdown-menu">
                <a href="about.html">About Us</a>
                <a href="team.html">Our Team</a>
                <a href="programs.html">Our Programs</a>
                <a href="calendar.html">Calendar</a>
            </div>
        </li>
        <li><a href="get-involved.html">Get Involved</a></li>
        <li><a href="https://gofund.me/22910633a" class="btn-donate">Donate</a></li>
    </ul>
</div>`;

const footer = `
<div class="footer-content">
    <div class="footer-section">
        <h3>Food Recovery Alliance</h3>
        <p>A youth-led organization fighting food waste and food insecurity through community action.</p>
    </div>
    <div class="footer-section">
        <h3>Quick Links</h3>
        <a href="about.html">About Us</a>
        <a href="programs.html">Our Programs</a>
        <a href="team.html">Our Team</a>
        <a href="get-involved.html">Get Involved</a>
        <a href="gallery.html">Gallery</a>
        <a href="https://drive.google.com/file/d/1cosF-v-jMWw_WofPlom8_H5Xtf1inVWz/view?usp=drive_link">Bylaws</a>
        <a href="https://gofund.me/22910633a">Donate</a>
    </div>
    <div class="footer-section">
        <h3>Contact Us</h3>
        <p>info@foodrecoveryalliance.org</p>
        <p>+1 (604) 861-9688</p>
        <p>Victoria, BC</p>
    </div>
    <div class="footer-section">
        <h3>Stay Connected</h3>
        <p>Get updates on our impact, events, and opportunities to get involved.</p>
        <form class="newsletter-form" id="newsletter-form">
            <input type="email" name="Email" placeholder="Your email address" required>
            <button type="submit">Subscribe</button>
        </form>
    </div>
</div>
<section class="footer-section footer-acknowledgment" aria-labelledby="footer-acknowledgment-title">
    <h3 id="footer-acknowledgment-title">Territory Acknowledgment</h3>
    <p>Food Recovery Alliance sits on the traditional and unceded territories of the lək̓ʷəŋən peoples (the Songhees and Esquimalt Nations) and the W̱SÁNEĆ peoples. As a youth-led organization, we know that our generation must acknowledge the colonial history that has shaped the agricultural land we work on. We're committed to learning from Indigenous knowledge as we build stronger food systems.</p>
</section>
<div class="footer-bottom">
    <p>&copy; 2026 Food Recovery Alliance. All rights reserved.</p>
</div>`;

const sharedCSS = `
<style>
    nav {
        position: sticky; top: 0;
        background: rgba(30, 77, 59, 0.98);
        padding: 16px 0; z-index: 1000;
        box-shadow: 0 2px 12px rgba(0,0,0,0.15);
        backdrop-filter: blur(10px);
    }
    .nav-container { max-width: 1200px; margin: 0 auto; padding: 0 32px; display: flex; justify-content: space-between; align-items: center; }
    .logo-group { display: flex; align-items: center; text-decoration: none; gap: 15px; }
    .brand-logo { width: 50px; height: 50px; border-radius: 50%; object-fit: cover; background-color: #fff; }
    .brand-name { color: white; font-size: 1.8rem; font-family: 'Montserrat', sans-serif; font-weight: 800; }
    .nav-links { display: flex; gap: 32px; list-style: none; align-items: center; }
    .nav-links > li { position: relative; }
    .nav-links a { color: white; text-decoration: none; transition: color 0.3s; font-size: 15px; font-weight: 800; font-family: 'Montserrat', sans-serif; display: block; padding: 8px 0; }
    .nav-links a:hover { color: #4CAF6A; }
    .nav-links .active { color: #F4C542; }
    .dropdown { position: relative; }
    .dropdown-toggle { color: white; cursor: pointer; display: flex; align-items: center; gap: 10px; font-size: 15px; font-weight: 800; font-family: 'Montserrat', sans-serif; border: 0; background: transparent; padding: 8px 0; }
    .nav-chevron { width: 10px; height: 10px; border-right: 3px solid currentColor; border-bottom: 3px solid currentColor; transform: rotate(45deg) translateY(-3px); transition: transform .2s ease; flex: 0 0 auto; }
    .dropdown.is-open .nav-chevron { transform: rotate(225deg) translate(-2px, -2px); }
    .dropdown-menu { position: absolute; top: 100%; left: 0; background: white; min-width: 220px; border-radius: 8px; opacity: 0; visibility: hidden; transform: translateY(-10px); transition: all 0.3s; margin-top: 8px; }
    .dropdown:hover .dropdown-menu { opacity: 1; visibility: visible; transform: translateY(0); }
    .dropdown-menu a { color: #1E4D3B; padding: 12px 20px; border-bottom: 1px solid #eee; font-size: 15px; display: block; font-weight: 700; font-family: 'Montserrat', sans-serif; }
    .dropdown-menu a:last-child { border-bottom: none; }
    .dropdown-menu a:hover { background: #FAF9F6; }
    .btn-donate { display: inline-block; padding: 14px 40px; min-width: 120px; border-radius: 10px; background: #4CAF6A; color: white; text-decoration: none; text-align: center; font-weight: 700; transition: all 0.3s; font-size: 15px; font-family: 'Montserrat', sans-serif; }
    .btn-donate:hover { background: #4CAF6A; transform: translateY(-2px); }
    .menu-toggle { display: none; color: white; border: 1px solid rgba(255,255,255,0.55); border-radius: 8px; background: transparent; min-height: 44px; padding: 8px 11px; align-items: center; gap: 8px; cursor: pointer; font: 800 14px/1 'Montserrat', sans-serif; }
    .menu-toggle-icon, .menu-toggle-icon::before, .menu-toggle-icon::after { display: block; width: 19px; height: 2px; background: currentColor; border-radius: 2px; transition: transform .2s ease, opacity .2s ease; }
    .menu-toggle-icon { position: relative; }
    .menu-toggle-icon::before, .menu-toggle-icon::after { content: ''; position: absolute; left: 0; }
    .menu-toggle-icon::before { top: -6px; }
    .menu-toggle-icon::after { top: 6px; }

    footer { background: #2B2B2B; color: #FAF9F6; padding: 60px 32px 24px; }
    .footer-content,
    .footer-acknowledgment {
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
    }
    .footer-content { display: grid; grid-template-columns: 1.2fr 1fr .95fr 1.25fr; gap: 48px; align-items: start; margin-bottom: 28px; }
    .footer-section h3 { color: #4CAF6A; margin-bottom: 20px; font-size: 20px; font-family: 'Montserrat', sans-serif; font-weight: 800; }
    .footer-section p { line-height: 1.8; color: rgba(255,255,255,0.8); font-size: 15px; }
    .footer-section a { color: rgba(255,255,255,0.8); text-decoration: none; display: block; margin-bottom: 10px; transition: color 0.3s; font-size: 15px; }
    .footer-section a:hover { color: #4CAF6A; }
    .newsletter-form { display: flex; gap: 8px; margin-top: 16px; }
    .newsletter-form input { flex: 1; min-width: 0; padding: 14px; border-radius: 8px; border: 1px solid #4CAF6A; background: white; font-size: 15px; }
    .newsletter-form button { padding: 14px 28px; background: #4CAF6A; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 700; transition: background 0.3s; font-family: 'Montserrat', sans-serif; }
    .newsletter-form button:hover { background: #1E4D3B; }
    .footer-acknowledgment { margin-bottom: 30px; }
    .footer-acknowledgment h3 { margin-bottom: 8px; }
    .footer-bottom { text-align: center; padding-top: 30px; border-top: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.5); font-size: 14px; }

    .floating-award { position: fixed; right: 22px; bottom: 22px; z-index: 1100; }
    .floating-award-trigger { display: block; width: 88px; height: 88px; padding: 0; border: 0; border-radius: 50%; background: transparent; cursor: pointer; filter: drop-shadow(0 7px 15px rgba(0,0,0,.28)); transition: transform .2s ease; }
    .floating-award-trigger:hover, .floating-award-trigger:focus-visible { transform: translateY(-4px) scale(1.04); outline: none; }
    .floating-award-trigger img { display: block; width: 100%; height: 100%; object-fit: contain; }
    .floating-award-blurb { position: absolute; right: 0; bottom: calc(100% + 14px); width: min(310px, calc(100vw - 36px)); padding: 18px 42px 18px 18px; border-radius: 14px; background: #1E4D3B; color: white; box-shadow: 0 14px 32px rgba(0,0,0,.26); opacity: 0; visibility: hidden; pointer-events: none; transform: translateY(8px); transition: opacity .2s ease, transform .2s ease, visibility .2s ease; }
    .floating-award.is-open .floating-award-blurb { opacity: 1; visibility: visible; pointer-events: auto; transform: translateY(0); }
    .floating-award-blurb p { margin: 0 0 10px; font-size: 14px; line-height: 1.45; }
    .floating-award-blurb a { display: block; width: fit-content; margin: 0 auto; color: #F4C542; font: 800 14px/1.2 'Montserrat', sans-serif; text-align: center; text-decoration: none; }
    .floating-award-close { position: absolute; top: 8px; right: 10px; border: 0; background: transparent; color: white; cursor: pointer; font-size: 28px; line-height: 1; }

    @media (max-width: 1120px) {
        .footer-content { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
    @media (max-width: 768px) {
        nav { padding: 10px 0; }
        .nav-container { position: relative; padding: 0 20px; min-height: 48px; }
        .brand-logo { width: 42px; height: 42px; }
        .brand-name { font-size: clamp(1.05rem, 5vw, 1.35rem); }
        .menu-toggle { display: inline-flex; }
        .nav-links { display: none; position: absolute; top: calc(100% + 10px); left: 12px; right: 12px; z-index: 1001; flex-direction: column; align-items: stretch; gap: 0; padding: 8px; border-radius: 12px; background: #1E4D3B; box-shadow: 0 14px 28px rgba(0,0,0,.25); }
        .nav-links.is-open { display: flex; }
        .nav-links > li { width: 100%; }
        .nav-links a, .dropdown-toggle { width: 100%; min-height: 44px; padding: 12px; font-size: 16px; text-align: left; }
        .dropdown-toggle { justify-content: space-between; }
        .dropdown-menu { position: static; display: none; min-width: 0; margin: 0 4px 6px; border-radius: 8px; opacity: 1; visibility: visible; transform: none; box-shadow: none; }
        .dropdown.is-open .dropdown-menu { display: block; }
        .dropdown-menu a { color: #1E4D3B; padding: 12px 16px; }
        .btn-donate { margin: 4px; padding: 12px; text-align: center !important; }
        .newsletter-form { flex-direction: column; }
        .newsletter-form button { width: 100%; }
        footer { padding: 44px 24px 24px; }
        .footer-content, .footer-acknowledgment { margin-left: 0; margin-right: 0; }
        .footer-content { grid-template-columns: minmax(0, 1fr); gap: 30px; }
        .floating-award { right: 14px; bottom: 14px; }
        .floating-award-trigger { width: 72px; height: 72px; }
    }
</style>`;

const floatingAward = `
<div class="floating-award" aria-label="Agraya Changemaker Award finalist">
    <button class="floating-award-trigger" type="button" aria-expanded="false" aria-controls="floating-award-blurb" aria-label="Show Agraya award details">
        <img src="optimized/page-assets/agraya-changemaker-finalist.webp" alt="Agraya Changemaker Award finalist, 2026">
    </button>
    <div class="floating-award-blurb" id="floating-award-blurb" role="dialog" aria-label="Agraya award details">
        <button class="floating-award-close" type="button" aria-label="Close award details">×</button>
        <p>Awarded by Agraya, the umbrella organization for GLOBALG.A.P., one of the world’s largest farm certification systems.</p>
        <a href="https://agraya.com/changemaker-awards-2026-community-impact-finalists/" target="_blank" rel="noopener noreferrer">Read about the award</a>
    </div>
</div>`;

// Inject CSS
document.head.insertAdjacentHTML('beforeend', sharedCSS);

// Inject nav and footer only if placeholders exist
const navEl = document.getElementById('nav-placeholder');
if (navEl) navEl.innerHTML = nav;

const footerEl = document.getElementById('footer-placeholder');
if (footerEl) footerEl.innerHTML = footer;

if (!document.querySelector('.floating-award')) {
    document.body.insertAdjacentHTML('beforeend', floatingAward);
}

// Highlight active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdown = document.querySelector('.dropdown');
const floatingAwardEl = document.querySelector('.floating-award');
const floatingAwardTrigger = document.querySelector('.floating-award-trigger');
const floatingAwardClose = document.querySelector('.floating-award-close');

function closeMenu() {
    if (!menuToggle || !navLinks) return;
    navLinks.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    dropdown?.classList.remove('is-open');
    dropdownToggle?.setAttribute('aria-expanded', 'false');
}

menuToggle?.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
});

dropdownToggle?.addEventListener('click', () => {
    if (!window.matchMedia('(max-width: 768px)').matches) return;
    const isOpen = dropdown.classList.toggle('is-open');
    dropdownToggle.setAttribute('aria-expanded', String(isOpen));
});

floatingAwardTrigger?.addEventListener('click', () => {
    const isOpen = floatingAwardEl.classList.toggle('is-open');
    floatingAwardTrigger.setAttribute('aria-expanded', String(isOpen));
});

floatingAwardClose?.addEventListener('click', () => {
    floatingAwardEl.classList.remove('is-open');
    floatingAwardTrigger?.setAttribute('aria-expanded', 'false');
});

navLinks?.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        closeMenu();
        floatingAwardEl?.classList.remove('is-open');
        floatingAwardTrigger?.setAttribute('aria-expanded', 'false');
    }
});
