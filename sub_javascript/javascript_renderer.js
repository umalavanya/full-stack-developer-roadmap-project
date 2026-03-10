// Renderer component for JavaScript concepts
const ConceptRenderer = {
    // Main render function
    render(containerId, data) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Container with id '${containerId}' not found`);
            return;
        }

        // Clear container
        container.innerHTML = '';

        // Render each section
        data.forEach(section => {
            this.renderSection(container, section);
        });
    },

    // Render a single section
    renderSection(container, section) {
        // Add heading
        const headingDiv = this.createHeading(section.heading);
        container.appendChild(headingDiv);

        // Add items
        section.items.forEach(itemText => {
            const conceptDiv = this.createConceptItem(itemText);
            container.appendChild(conceptDiv);
        });
    },

    // Create heading element
    createHeading(text) {
        const headingDiv = document.createElement('div');
        headingDiv.className = 'concept-heading';
        headingDiv.textContent = text;
        return headingDiv;
    },

    // Create concept item element
    createConceptItem(content) {
        const conceptDiv = document.createElement('div');
        conceptDiv.className = 'concept';
        
        // Check if content contains HTML or is plain text
        if (content.includes('<') && content.includes('>')) {
            conceptDiv.innerHTML = content;
        } else {
            // Format code snippets
            const formattedContent = content.replace(
                /`(.*?)`/g, 
                '<code>$1</code>'
            );
            conceptDiv.innerHTML = formattedContent;
        }
        
        return conceptDiv;
    },

    // Optional: Search/filter functionality
    filterConcepts(searchTerm) {
        if (!searchTerm) {
            this.render('concepts-container', conceptsData);
            return;
        }

        const filtered = conceptsData
            .map(section => ({
                heading: section.heading,
                items: section.items.filter(item => 
                    item.toLowerCase().includes(searchTerm.toLowerCase())
                )
            }))
            .filter(section => section.items.length > 0);

        this.render('concepts-container', filtered);
    }
};

// Make renderer available globally
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ConceptRenderer;
}