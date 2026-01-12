function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}








// SCROLL UP BUTTON
document.addEventListener("DOMContentLoaded", () => {
    const scrollUpBtn = document.getElementById("scrollUpBtn");
    const homeBtn = document.getElementById("homeBtn");

    if (!scrollUpBtn) return; // Exit if button not found

    // Show/hide button on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 250) {
            scrollUpBtn.classList.add("show");
        } else {
            scrollUpBtn.classList.remove("show");
        }
    });

// Scroll to top on click
    homeBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });



    // Scroll to top on click
    scrollUpBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});



const modal = document.getElementById("projectModal");
const modalTitle = document.querySelector(".modal-title");
const modalDescription = document.querySelector(".modal-description");
const modalTech = document.querySelector(".modal-tech");
const modalActions = document.querySelector(".modal-actions");
const modalImages = document.querySelector(".modal-images");

// OPEN MODAL
function openModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    // Fill modal content
    modalTitle.textContent = `${project.title} (${project.subtitle})`;
    modalDescription.textContent = project.description;
    modalTech.innerHTML = project.tech
        .map(tech => ` <span>${tech}</span>`)
        .join("");

    
    modalImages.innerHTML = project.images
        .map(img => `<img src="${img}" alt="${project.title} screenshot">`)
        .join("");

    // Show modal
    modal.classList.add("active");
}

// CLOSE MODAL
function closeModal() {
    modal.classList.remove("active");
}

// CLOSE WHEN CLICKING BACKDROP
modal.addEventListener("click", e => {
    if (e.target === modal) closeModal();
});

document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
});

// ADD CLICK EVENTS TO PROJECT CARDS
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        const id = Number(card.dataset.id);
        openModal(id);
    });
});
