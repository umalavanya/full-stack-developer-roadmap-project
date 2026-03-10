// js/components/subjectList.js
const SubjectList = (function() {
    // Private variables
    const subjectHeading = Helpers.getElement('subjectHeading');
    const subjectListEl = Helpers.getElement('subjectListContainer');
    let currentTech = 'java';
    let currentSubject = 'Java basics';
    let onSubjectChangeCallback = null;
    
    // Initialize subject list
    function init(callback) {
        onSubjectChangeCallback = callback;
    }
    
    // Render subjects based on tech data
    function render(techData) {
        if (!techData) return;
        
        subjectHeading.textContent = `📌 ${techData.displayName} subjects`;
        
        const subjects = techData.subjects;
        let htmlStr = '';
        subjects.forEach(sub => {
            const activeClass = (sub === currentSubject) ? 'active-subject' : '';
            htmlStr += `<li class="subject-item ${activeClass}" data-subject="${sub}">${sub}</li>`;
        });
        subjectListEl.innerHTML = htmlStr;
        
        attachSubjectListeners();
    }
    
    // Attach click listeners to subject items
    function attachSubjectListeners() {
        Helpers.querySelectorAll('.subject-item').forEach(item => {
            item.addEventListener('click', handleSubjectClick);
        });
    }
    
    // Handle subject click
    function handleSubjectClick(e) {
        const subjectName = e.currentTarget.dataset.subject;
        if (subjectName && onSubjectChangeCallback) {
            onSubjectChangeCallback(subjectName);
        }
    }
    
    // Update current subject
    function setCurrentSubject(subjectName) {
        currentSubject = subjectName;
    }
    
    // Get current subject
    function getCurrentSubject() {
        return currentSubject;
    }
    
    // Public API
    return {
        init,
        render,
        setCurrentSubject,
        getCurrentSubject
    };
})();