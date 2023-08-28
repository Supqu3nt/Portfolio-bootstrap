function toggle_Details_Experiences(id, container) {
  var elements = document.getElementById(id);
  if (elements.style.display === "none") {
    elements.style.display = "block";
    container.querySelector('.chevron-icon_experiences').classList.add('chevron-down_experiences'); // Ajout de la classe pour tourner la flèche vers le bas
    elements.classList.remove('hide_details_experiences_div'); // Suppression de la classe hide pour afficher la div avec l'animation de descente
    elements.classList.add('show_details_experiences_div'); // Ajout de la classe show pour afficher la div avec l'animation de descente
  } 
  else {
    elements.classList.remove('show_details_experiences_div'); // Suppression de la classe show pour masquer la div avec l'animation de remontée
    elements.classList.add('hide_details_experiences_div'); // Ajout de la classe hide pour masquer la div avec l'animation de remontée
	container.querySelector('.chevron-icon_experiences').classList.remove('chevron-down_experiences'); // Suppression de la classe pour remettre la flèche vers le haut
    setTimeout(() => {
      elements.style.display = "none"; // Masquer la div après l'animation de remontée
    }, 300); // Temps en millisecondes correspondant à la durée de l'animation (0.3s)
  }
}





