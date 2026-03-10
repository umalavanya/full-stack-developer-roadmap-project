// Main application file
(function() {
    'use strict';

    // Initialize the application
    function initApp() {
        console.log('JavaScript Concepts App initialized');
        
        // Check if data and renderer are available
        if (typeof conceptsData !== 'undefined' && typeof ConceptRenderer !== 'undefined') {
            // Render the concepts
            ConceptRenderer.render('concepts-container', conceptsData);
            
            // Optional: Add search functionality
            addSearchFeature();
        } else {
            console.error('Required modules not loaded');
        }
    }

    // Optional: Add search input to filter concepts
    function addSearchFeature() {
        const container = document.querySelector('.container');
        if (!container) return;

        // Create search container
        const searchDiv = document.createElement('div');
        searchDiv.className = 'search-container';
        searchDiv.innerHTML = `
            <input type="text" 
                   id="concept-search" 
                   placeholder="Search concepts..." 
                   class="search-input">
        `;

        // Insert search after h1
        const h1 = container.querySelector('h1');
        h1.insertAdjacentElement('afterend', searchDiv);

        // Add search functionality
        const searchInput = document.getElementById('concept-search');
        searchInput.addEventListener('input', (e) => {
            ConceptRenderer.filterConcepts(e.target.value);
        });
    }

    // Start the app when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initApp);
    } else {
        initApp();
    }
})();