// js/components/contentCard.js
const ContentCard = (function() {
    // Private variables
    const contentCard = Helpers.getElement('contentCard');
    
    // Render main content based on tech data and subject
    function render(techData, subjectName) {
        if (!techData) {
            showEmptyState('No technology selected');
            return;
        }
        
        const detail = techData.details[subjectName];
        if (!detail) {
            showEmptyState(`✨ No details for "${subjectName}" yet.`);
            return;
        }
        
        // Build steps HTML
        let stepsHtml = '';
        if (detail.steps && detail.steps.length) {
            stepsHtml = '<div class="roadmap-steps">';
            detail.steps.forEach((step, idx) => {
                stepsHtml += `<div class="step"><span class="step-badge">${idx + 1}</span><span class="step-text">${step}</span></div>`;
            });
            stepsHtml += '</div>';
        }
        
        const cardHtml = `
            <span class="tech-tag">${techData.displayName} · roadmap</span>
            <div class="content-title">${detail.title}</div>
            <div class="content-description">${detail.description}</div>
            ${stepsHtml}
            <hr />
            <div class="footer-hint">
                <span>🧩 master step by step · </span>
                <span>click subjects on left to navigate</span>
            </div>
        `;
        
        contentCard.innerHTML = cardHtml;
    }
    
    // Show empty state message
    function showEmptyState(message) {
        contentCard.innerHTML = `<div class="empty-state">${message}</div>`;
    }
    
    // Public API
    return {
        render,
        showEmptyState
    };
})();