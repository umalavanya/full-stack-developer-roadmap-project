// js/app.js
const App = (function() {
    // Private state
    let currentTech = 'java';
    let currentSubject = 'Java basics';
    
    // Initialize the application
    function init() {
        // Get all data
        const allData = DataModule.getAllData();
        
        // Initialize components with callbacks
        Navbar.init(handleTechChange);
        SubjectList.init(handleSubjectChange);
        
        // Set initial state
        updateContent('java');
    }
    
    // Handle technology change from navbar
    function handleTechChange(techKey) {
        const allData = DataModule.getAllData();
        
        if (Helpers.isValidTech(techKey, allData)) {
            currentTech = techKey;
            const techData = allData[techKey];
            currentSubject = Helpers.getFirstSubject(techData);
            
            // Update components
            Navbar.setActiveTech(techKey);
            updateContent(techKey);
        }
    }
    
    // Handle subject change from subject list
    function handleSubjectChange(subjectName) {
        const allData = DataModule.getAllData();
        const techData = allData[currentTech];
        
        if (Helpers.isValidSubject(techData, subjectName)) {
            currentSubject = subjectName;
            SubjectList.setCurrentSubject(subjectName);
            
            // Re-render subject list to update active state
            SubjectList.render(techData);
            
            // Render main content
            ContentCard.render(techData, subjectName);
        }
    }
    
    // Update all content based on tech
    function updateContent(techKey) {
        const allData = DataModule.getAllData();
        const techData = allData[techKey];
        
        if (techData) {
            // Ensure current subject exists in this tech
            if (!Helpers.isValidSubject(techData, currentSubject)) {
                currentSubject = Helpers.getFirstSubject(techData);
            }
            
            // Update subject list
            SubjectList.setCurrentSubject(currentSubject);
            SubjectList.render(techData);
            
            // Update content card
            ContentCard.render(techData, currentSubject);
        }
    }
    
    // Public API
    return {
        init
    };
})();