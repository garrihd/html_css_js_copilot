function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}


function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}


function filterProjects() {
    const category = document.getElementById('category-select').value;
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        project.style.display = 'none'; // Hide all projects first
    });

    if (category !== 'all') {
        document.querySelectorAll(`.${category}`).forEach(project => {
            project.style.display = 'block'; // Show only the selected category
        });
    }
    else if(category === 'all') {
        projects.forEach(project => {
            project.style.display = 'block'; // Show all projects
        });
    }
}


function minimizeNavbar() {
    const navbar = document.querySelector("nav");
    const minimizeButton = document.getElementById("minimize-button");
    const icon = minimizeButton.querySelector("i"); // Select the icon inside the button

    if (navbar.classList.contains("minimized")) {
        navbar.classList.remove("minimized");
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up"); // Change to "up" when expanded
    } else {
        navbar.classList.add("minimized");
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down"); // Change to "down" when minimized
    }
}
