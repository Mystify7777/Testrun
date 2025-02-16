// Sample project data
const projects = [
    {
      title: 'To-Do App',
      description: 'A simple To-Do app with CRUD functionality.',
      link: 'https://github.com/Mystify7777/ToDoApp',
      tags: ['React', 'CRUD'],
    },
    {
      title: 'Hospital Management System',
      description: 'A scalable HMS with RBAC and API integration.',
      link: 'https://github.com/Mystify7777/HMS',
      tags: ['Node.js', 'MongoDB'],
    },
    {
      title: 'Wiki-Based Water Platform',
      description: 'A collaborative platform addressing water scarcity.',
      link: 'https://github.com/Mystify7777/WaterWiki',
      tags: ['Collaboration', 'Node.js'],
    },
    {
      title: 'Tic Tac Toe Game',
      description: 'A fun game with AI for different difficulty levels.',
      link: 'https://github.com/Mystify7777/TicTacToe',
      tags: ['Java', 'AI'],
    },
  ];
  
  // Current coding challenge day
  let challengeDays = 68;
  
  // Populate project cards
  function populateProjects(filter = null) {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = ''; // Clear existing content
  
    const filteredProjects = filter
      ? projects.filter((project) => project.tags.includes(filter))
      : projects;
  
    if (filteredProjects.length === 0) {
      projectList.innerHTML = `
        <p class="text-gray-500">No projects match the selected filter.</p>
      `;
      return;
    }
  
    filteredProjects.forEach((project) => {
      const card = document.createElement('div');
      card.className = 'card bg-white shadow-md';
      card.innerHTML = `
        <h3 class="text-lg font-semibold">${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank" class="text-blue-500">View Project</a>
      `;
      projectList.appendChild(card);
    });
  }
  
  // Update coding challenge tracker
  function updateChallengeProgress() {
    const challengeProgress = document.getElementById('challenge-progress');
    challengeProgress.innerHTML = `
      <p>You are on Day <span class="font-bold text-blue-600">${challengeDays}</span> of your coding challenge. 
      Keep going! You're doing great!</p>
      <button id="increment-day" class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Mark Day Complete</button>
    `;
  
    // Add event listener to the button
    document.getElementById('increment-day').addEventListener('click', () => {
      challengeDays += 1;
      updateChallengeProgress(); // Update progress dynamically
    });
  }
  
  // Add filter buttons for project tags
  function addFilterButtons() {
    const filterSection = document.createElement('div');
    filterSection.className = 'filter-buttons mb-6 flex gap-2';

  
    const tags = [...new Set(projects.flatMap((project) => project.tags))];
    tags.forEach((tag) => {
      const button = document.createElement('button');
      button.className =
        'px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300';
      button.innerText = tag;
      button.addEventListener('click', () => populateProjects(tag));
      filterSection.appendChild(button);
    });
  
    // Add "Clear Filter" button
    const clearButton = document.createElement('button');
    clearButton.className =
      'px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300';
    clearButton.innerText = 'All';
    clearButton.addEventListener('click', () => populateProjects());
    filterSection.appendChild(clearButton);
  
    // Add filter buttons to the DOM
    const projectsSection = document.getElementById('projects');
    projectsSection.insertBefore(filterSection, projectsSection.firstChild);
  }
  
  // Initialize the webpage
  function initializePage() {
    populateProjects(); // Populate projects without filter
    updateChallengeProgress(); // Initialize challenge progress
    addFilterButtons(); // Add filter buttons
  }
  
  // Run the initialization function on page load
  document.addEventListener('DOMContentLoaded', initializePage);
  