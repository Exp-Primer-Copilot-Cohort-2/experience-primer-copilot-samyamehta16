function skillsMember() {
    // Function to fetch skills data from JSON file
    fetch('skills.json')
        .then(response => response.json())
        .then(data => {
            const skills = data.skills;
            const skillsDiv = document.getElementById('skills');
            skillsDiv.innerHTML = skills.map(skill => {
                return `<div class="skill">
                            <img src="${skill.icon}" alt="${skill.name}">
                            <p>${skill.name}</p>
                        </div>`;
            }).join('');
        });
}