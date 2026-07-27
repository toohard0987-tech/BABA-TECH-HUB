// ===============================
// BABA TECH HUB
// Premium Script
// ===============================

// Sticky Navbar
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#060b16";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

    } else {

        header.style.background = "rgba(10,10,20,.75)";
        header.style.boxShadow = "none";

    }

});

// ===============================
// Back To Top
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// ===============================
// Product Hover Animation
// ===============================

const cards = document.querySelectorAll(".product-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});

// ===============================
// Scroll Animation
// ===============================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".feature,.category-card,.product-card,.why-card,.review-card,.info-box").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// ===============================
// Loading Animation
// ===============================

window.onload=()=>{

document.body.classList.add("loaded");

};

// ===============================
// Mobile Menu
// ===============================

const navLinks=document.querySelector(".nav-links");

const menu=document.createElement("div");

menu.innerHTML='<i class="fa-solid fa-bars"></i>';

menu.classList.add("menu-btn");

document.querySelector(".navbar").appendChild(menu);

menu.onclick=()=>{

navLinks.classList.toggle("active");

};

// ===============================
// Active Menu
// ===============================

const current=location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link=>{

if(link.getAttribute("href")==current){

link.classList.add("active");

}

});

// ===============================
// WhatsApp Button Effect
// ===============================

const whatsapp=document.querySelector(".whatsapp");

setInterval(()=>{

whatsapp.classList.toggle("pulse");

},1000);
