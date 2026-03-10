// js/utils/helpers.js
const Helpers = (function() {
    // Get DOM elements safely
    function getElement(id) {
        return document.getElementById(id);
    }
    
    function querySelectorAll(selector) {
        return document.querySelectorAll(selector);
    }
    
    // Validate tech exists
    function isValidTech(techKey, data) {
        return data && data[techKey];
    }
    
    // Validate subject exists in tech
    function isValidSubject(techData, subjectName) {
        return techData && techData.subjects && techData.subjects.includes(subjectName);
    }
    
    // Get first subject of tech
    function getFirstSubject(techData) {
        return techData && techData.subjects ? techData.subjects[0] : null;
    }
    
    return {
        getElement,
        querySelectorAll,
        isValidTech,
        isValidSubject,
        getFirstSubject
    };
})();