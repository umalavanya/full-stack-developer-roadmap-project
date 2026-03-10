// js/components/navbar.js
const Navbar = (function() {
    // Private variables
    let navItems = [];
    let currentTech = 'java';
    let onTechChangeCallback = null;
    
    // Initialize navbar
    function init(callback) {
        onTechChangeCallback = callback;
        navItems = Helpers.querySelectorAll('.nav-item');
        attachListeners();
    }
    
    // Attach click listeners to nav items
    function attachListeners() {
        navItems.forEach(item => {
            item.addEventListener('click', handleNavClick);
        });
    }
    
    // Handle nav item click
    function handleNavClick(e) {
        const tech = e.currentTarget.dataset.tech;
        if (tech && onTechChangeCallback) {
            onTechChangeCallback(tech);
        }
    }
    
    // Update active state in navbar
    function setActiveTech(techKey) {
        navItems.forEach(item => {
            const itemTech = item.dataset.tech;
            if (itemTech === techKey) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        currentTech = techKey;
    }
    
    // Get current tech
    function getCurrentTech() {
        return currentTech;
    }
    
    // Public API
    return {
        init,
        setActiveTech,
        getCurrentTech
    };
})();