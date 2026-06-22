let lastScrollY = window.scrollY;
const header = document.querySelector("header");

// Handle header visibility based on scroll direction
window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        header.classList.add("hidden-header");
    } else {
        header.classList.remove("hidden-header");
    }
    lastScrollY = window.scrollY;
});

// Function to detect if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right >= 0
    );
}

// Counter function
function countUp(element, start, end, duration) {
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));
    
    const timer = setInterval(() => {
        current += increment;
        element.textContent = current.toLocaleString();
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Main scroll handler to manage multiple actions on scroll
function handleScroll() {
    // Handle showing service items
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('show');
        }
    });

    // Handle counting up of statistics
    const stats = document.querySelectorAll('.stat-item h2');
    stats.forEach(stat => {
        const endValue = parseInt(stat.getAttribute('data-target'));
        if (isInViewport(stat) && !stat.classList.contains('counted')) {
            countUp(stat, 0, endValue, 50000);
            stat.classList.add('counted');
        }
    });
}

// Listen for scroll events and handle accordingly
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); // Run on load to check if items are already in view


// Function to handle the "Send" button click
function handleSendButtonClick() {
    const emailInput = document.querySelector('.mail-input input[type="email"]');
    
    if (emailInput.value.trim() === "") {
        alert("Please enter a valid email address."); // Alert user if the email is empty
        return;
    }
    
    // Show the success card
    const successCard = document.getElementById("successCard");
    successCard.style.display = "block";

    // Clear the email input
    emailInput.value = "";
}

// Function to close the success card
function closeSuccessCard() {
    const successCard = document.getElementById("successCard");
    successCard.style.display = "none";
}

// Attach the handleSendButtonClick function to the "Send" button
document.querySelector('.mail-input button').addEventListener('click', handleSendButtonClick);

