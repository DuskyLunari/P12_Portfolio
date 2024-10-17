async function getSkills() {
    try {
        const response = await fetch("/assets/data/data.json");
        const data = await response.json();
        const { skills } = data;

        const skillsContainer = document.getElementById("skills-container");

        skills.forEach((skill, index) => {
            const article = document.createElement("article");
            article.classList.add("skill-container");
            const image = document.createElement("img");
            const h3 = document.createElement("h3");

            image.src = skill.icon;
            image.alt = skill.label + " icon";
            h3.innerText = skill.label;

            article.append(image, h3);
            skillsContainer.appendChild(article);
        });
    } catch (error) {
        console.error("Error fetching skills data:", error);
    }
}

getSkills();
