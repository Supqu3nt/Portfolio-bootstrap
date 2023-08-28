function toggle_Details_Skills(id, container) {
  var elements = document.getElementById(id);
  if (elements.style.display === "none") {
    elements.style.display = "block";
    container.querySelector('.chevron-icon_skills').classList.add('chevron-down_skills'); // Ajout de la classe pour tourner la flèche vers le bas
    elements.classList.remove('hide_details_skills_div'); // Suppression de la classe hide pour afficher la div avec l'animation de descente
    elements.classList.add('show_details_skills_div'); // Ajout de la classe show pour afficher la div avec l'animation de descente
  } 
  else {
    elements.classList.remove('show_details_skills_div'); // Suppression de la classe show pour masquer la div avec l'animation de remontée
    elements.classList.add('hide_details_skills_div'); // Ajout de la classe hide pour masquer la div avec l'animation de remontée
	container.querySelector('.chevron-icon_skills').classList.remove('chevron-down_skills'); // Suppression de la classe pour remettre la flèche vers le haut
    setTimeout(() => {
      elements.style.display = "none"; // Masquer la div après l'animation de remontée
    }, 300); // Temps en millisecondes correspondant à la durée de l'animation (0.3s)
  }
}


calc_skills_medium("office_details","office_skills_value");
calc_skills_medium("system_admin_details","system_admin_skills_value");
calc_skills_medium("dev_web_details","dev_web_skills_value");
calc_skills_medium("databases_details","databases_skills_value");
calc_skills_medium("operating_systems_details","operating_systems_skills_value");
calc_skills_medium("programming_details","programming_skills_value");










function calc_skills_medium (ID_div_details, ID_bar) {
	// Select the div with the selected ID
	var principal_bar_Div = document.getElementById(ID_div_details);

	// Select all divs in the principal div with the class "progress-bar"
	var progress_bar_Divs = principal_bar_Div.querySelectorAll(".progress-bar");

	// Variables for the sum of widths and count the number of divs
	var sumPercentages = 0;
	var divsCounter = 0;

	// Browse recovered divs
	for (var i = 0; i < progress_bar_Divs.length; i++) {
		var progress_bar_Div = progress_bar_Divs[i];

		// Get the width of each divs
		var widthPercentages = parseFloat(progress_bar_Div.style.width);

		// Check whether the width is a valid percentage
		if (!isNaN(widthPercentages) && widthPercentages > 0) {
			sumPercentages += widthPercentages;
			divsCounter++;
		}
	}

	// Calculation of the average width as a percentage
	var medium_Percentage = sumPercentages / divsCounter;

	// Round the average of the percentages to zero decimal places
	var medium_Percentage_rounded = Math.round(medium_Percentage);
	// Associate the average value, rounded as a percentage, with the category percentage
	var category_bar = document.getElementById(ID_bar);
	category_bar.style.width = medium_Percentage_rounded + "%";
	category_bar.textContent = medium_Percentage_rounded + "%";
	category_bar.setAttribute("aria-valuenow", medium_Percentage_rounded);
	
}