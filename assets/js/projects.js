async function getProjects() {
    try {
        const response = await fetch("assets/data/data.json");
        const data = await response.json();
        const { projects } = data;

        const projectsContainer = document.getElementById("projects-container");

        projects.forEach((projectData, index) => {
            const project = document.createElement("div");
            project.classList.add("project-container");

            const imageWrapper = document.createElement("div");
            imageWrapper.classList.add("image-wrapper");

            const image = document.createElement("img");
            image.src = projectData.image;
            image.alt = projectData.title;

            imageWrapper.appendChild(image);

            const overlay = document.createElement("div");
            overlay.classList.add("overlay");

            const link = document.createElement("a");
            link.href = projectData.url;
            link.target= "_blank";
            link.classList.add("project-link");

            const githubIcon = document.createElement("i");
            githubIcon.classList.add("fab", "fa-github", "github-icon");

            const linkText = document.createElement("span");
            linkText.innerText = "Consulter le code du projet";

            link.appendChild(githubIcon);
            link.appendChild(linkText);

            overlay.appendChild(link);

            const textContent = document.createElement("div");
            textContent.classList.add("project-content");

            const h3 = document.createElement("h3");
            h3.innerText = projectData.title;

            const p = document.createElement("p");
            p.innerText = projectData.desc;

            projectData.tags.forEach(tag => {
                const tagElement = document.createElement("p");
                tagElement.classList.add("tag");
                tagElement.innerText = tag.label;
                textContent.appendChild(tagElement);
            });

            textContent.append(h3, p);

            project.append(imageWrapper, overlay, textContent);

            projectsContainer.appendChild(project);
        });
    } catch (error) {
        console.error("Error fetching projects data:", error);
    }
}

getProjects();