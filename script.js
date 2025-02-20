function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const returnButton = document.getElementById("return-menu-button");
    sidebar.classList.remove('hidden');  
    returnButton.style.display = 'none';  
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const returnButton = document.getElementById("return-menu-button");
    sidebar.classList.add('hidden');
    setTimeout(() => {
        returnButton.style.display = 'flex';  
    }, 300); // Matches transition duration
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
