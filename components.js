const nav = `
<div class="nav-container">
    <a href="index.html" class="logo-group">
        <img src="imgs2/logo.JPG" alt="Food Recovery Alliance Logo" class="brand-logo">
        <span class="brand-name">Food Recovery Alliance</span>
    </a>
    <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li class="dropdown">
            <span class="dropdown-toggle">Who We Are</span>
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
        <div class="social-links">
            <a href="http://instagram.com/foodrecoveryalliance/" aria-label="Instagram">📷</a>
            <a href="https://www.linkedin.com/company/food-recoveriy-alliance/about/" aria-label="LinkedIn">in</a>
        </div>
    </div>
    <div class="footer-section">
        <h3>Quick Links</h3>
        <a href="about.html">About Us</a>
        <a href="programs.html">Our Programs</a>
        <a href="team.html">Our Team</a>
        <a href="get-involved.html">Get Involved</a>
        <a href="gallery.html">Gallery</a>
        <a href="https://gofund.me/22910633a">Donate</a>
    </div>
    <div class="footer-section">
        <h3>Contact Us</h3>
        <p>foodrecoveryalliance@gmail.com</p>
        <p>+1 (604) 861-9688</p>
        <p>2901 Seapoint Drive<br>Victoria, BC</p>
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
<div class="footer-bottom">
    <p>&copy; 2024 Food Recovery Alliance. All rights reserved.</p>
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
    .brand-name { color: white; font-size: 1.8rem; font-family: 'Montserrat', sans-serif; font-weight: 500; }
    .nav-links { display: flex; gap: 32px; list-style: none; align-items: center; }
    .nav-links > li { position: relative; }
    .nav-links a { color: white; text-decoration: none; transition: color 0.3s; font-size: 15px; font-weight: 400; font-family: 'Montserrat', sans-serif; display: block; padding: 8px 0; }
    .nav-links a:hover { color: #4CAF6A; }
    .nav-links .active { color: #F4C542; }
    .dropdown { position: relative; }
    .dropdown-toggle { color: white; cursor: pointer; display: flex; align-items: center; gap: 6px; font-size: 15px; font-weight: 400; font-family: 'Montserrat', sans-serif; }
    .dropdown-toggle::after { content: '▼'; font-size: 8px; }
    .dropdown-menu { position: absolute; top: 100%; left: 0; background: white; min-width: 220px; border-radius: 8px; box-shadow: 0 8px 24px rgba(0,0,0,0.15); opacity: 0; visibility: hidden; transform: translateY(-10px); transition: all 0.3s; margin-top: 8px; }
    .dropdown:hover .dropdown-menu { opacity: 1; visibility: visible; transform: translateY(0); }
    .dropdown-menu a { color: #1E4D3B; padding: 12px 20px; border-bottom: 1px solid #eee; font-size: 15px; display: block; font-weight: 400; font-family: 'Montserrat', sans-serif; }
    .dropdown-menu a:last-child { border-bottom: none; }
    .dropdown-menu a:hover { background: #FAF9F6; }
    .btn-donate { display: inline-block; padding: 14px 40px; min-width: 120px; border-radius: 10px; background: #D96C48; color: white; text-decoration: none; text-align: center; font-weight: 700; transition: all 0.3s; font-size: 15px; }
    .btn-donate:hover { background: #c55a3a; transform: translateY(-2px); }

    footer { background: #2B2B2B; color: #FAF9F6; padding: 60px 32px 24px; }
    .footer-content { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; margin-bottom: 40px; }
    .footer-section h3 { color: #4CAF6A; margin-bottom: 20px; font-size: 20px; font-family: 'Montserrat', sans-serif; }
    .footer-section p { line-height: 1.8; color: rgba(255,255,255,0.8); font-size: 15px; }
    .footer-section a { color: rgba(255,255,255,0.8); text-decoration: none; display: block; margin-bottom: 10px; transition: color 0.3s; font-size: 15px; }
    .footer-section a:hover { color: #4CAF6A; }
    .social-links { display: flex; gap: 16px; margin-top: 20px; }
    .social-links a { width: 44px; height: 44px; background: rgba(76,175,106,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; text-decoration: none; transition: all 0.3s; font-size: 18px; }
    .social-links a:hover { background: #4CAF6A; transform: translateY(-3px); }
    .newsletter-form { display: flex; gap: 8px; margin-top: 16px; }
    .newsletter-form input { flex: 1; padding: 14px; border-radius: 8px; border: 1px solid #4CAF6A; background: white; font-size: 15px; }
    .newsletter-form button { padding: 14px 28px; background: #4CAF6A; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 700; transition: background 0.3s; }
    .newsletter-form button:hover { background: #1E4D3B; }
    .footer-bottom { text-align: center; padding-top: 30px; border-top: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.5); font-size: 14px; }

    @media (max-width: 768px) { .nav-links { display: none; } }
</style>`;

// Inject CSS
document.head.insertAdjacentHTML('beforeend', sharedCSS);

// Inject nav and footer only if placeholders exist
const navEl = document.getElementById('nav-placeholder');
if (navEl) navEl.innerHTML = nav;

const footerEl = document.getElementById('footer-placeholder');
if (footerEl) footerEl.innerHTML = footer;

// Highlight active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});