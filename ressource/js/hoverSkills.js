document.addEventListener("DOMContentLoaded", function () {
    // Récupérer la liste des compétences (balises d'images)
    const skillsImages = document.querySelectorAll('.listeSkills .boxImg img');

// Récupérer le h2 à mettre à jour
    const hoveredSkill = document.getElementById('hoveredSkill');

// Ajouter un écouteur d'événements pour chaque compétence
    skillsImages.forEach((img) => {
        img.addEventListener('mouseover', () => {
            // Mettre à jour le texte du h2 avec l'attribut alt de l'image survolée
            hoveredSkill.textContent = img.alt;
        });

        img.addEventListener('mouseout', () => {
            // Rétablir le texte initial lorsqu'on ne survole pas une compétence
            hoveredSkill.textContent = 'Survolez une compétence';
        });
    });
});