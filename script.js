document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("projects-container");
  const projectGrid = document.getElementById("project-grid");

  web2_projects.forEach((project) => {
    const projectCard = `
        <div class="bg-gray-800 p-5 rounded-lg shadow-lg">
          <a href="${project.link}" target="_blank" class="text-blue-400 hover:underline text-xl font-semibold">${project.title}</a>
          <p class="text-gray-400 mt-2">${project.description}</p>
        </div>
      `;
    container.innerHTML += projectCard;
  });
  web3_projects.forEach((project) => {
    const projectCard = `
    <div class="bg-gray-800 p-5 rounded-lg shadow-lg">
      <a href="${project.link}" target="_blank" class="text-blue-400 hover:underline text-xl font-semibold">${project.title}</a>
      <p class="text-gray-400 mt-2">${project.description}</p>
    </div>
  `;
    projectGrid.innerHTML += projectCard;
  });
});
