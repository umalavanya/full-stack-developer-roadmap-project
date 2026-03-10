// js/data/index.js
// Export data for easy imports
const DataModule = (function() {
    return {
        getAllData: () => roadmapData,
        getTechData: (techKey) => roadmapData[techKey],
        getTechNames: () => Object.keys(roadmapData).map(key => ({
            key: key,
            name: roadmapData[key].displayName
        }))
    };
})();