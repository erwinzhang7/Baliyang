// Function to check the scroll position and change the background color
window.addEventListener('scroll', function() {
    // Get all the sections
    const sections = document.querySelectorAll('section');

    // Loop through each section and determine which one is in view
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        // Check if the section is in the viewport (scrolling condition)
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            // Apply the background color depending on the section
            if (index % 2 === 0) {
                section.style.transition = "background-color 1s ease";
                section.style.backgroundColor = 'white';
            } else {
                section.style.transition = "background-color 1s ease";
                section.style.backgroundColor = 'black';
            }
        }
    });
});
