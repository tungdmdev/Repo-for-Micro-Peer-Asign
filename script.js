// Toggle navigation menu
document.getElementById("menuToggle").addEventListener("click", function() {
    document.getElementById("navMenu").classList.toggle("active");
});

// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: "smooth" });
    });
});

// Filter projects
function filterProjects(category) {
    document.querySelectorAll(".project-card").forEach(card => {
        if (category === "all" || card.getAttribute("data-category") === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Lightbox effect
function openLightbox(imageSrc) {
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("lightboxImg").src = imageSrc;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Thank you for reaching out!");
});