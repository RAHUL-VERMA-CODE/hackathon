function showSection(sectionId) {
    // Get all sections
    var sections = document.querySelectorAll('.section');

    // Hide all sections
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}