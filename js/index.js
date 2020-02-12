const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let links = document.querySelectorAll("a");

links.forEach((e, i) => {
  e.textContent = siteContent["nav"][`nav-item-${i+1}`]
  e.style.color = "green";
});

// prepend nav item
let firstNav = document.querySelector('nav');
let firstNavLink = document.createElement('a');
firstNavLink.textContent = "Home";
firstNavLink.style.color = "green";
firstNav.prepend(firstNavLink);


// append nav item
let lastNav = document.querySelector('nav');
let lastNavLink = document.createElement('a');
lastNavLink.textContent = "Login";
lastNavLink.style.color = "green";
lastNav.appendChild(lastNavLink);

// Unable to make first and last link green also? Had to do on individually added/appended links


// cta h1: Why can't I make anything work get getElementBy____? does " or ' matter?

//cta text
const ctaH = document.querySelector(".cta-text h1");
ctaH.textContent = (siteContent["cta"]["h1"]);

// cta button
const ctaBtn = document.querySelector("button");
ctaBtn.textContent = 'Get Started';

// cta img
let ctaI = document.getElementById("cta-img");
ctaI.setAttribute('src', siteContent["cta"]["img-src"]);

