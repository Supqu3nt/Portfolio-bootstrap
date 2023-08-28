// Fonction pour récupérer les données JSON depuis un fichier
function getDataFromJSONFile(fileUrl) {
  return fetch(fileUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}

// Utilisation de la fonction pour récupérer les données du fichier JSON
const fichierJsonUrl = 'translations.json';

getDataFromJSONFile(fichierJsonUrl)
  .then(data => {
    // Vous pouvez utiliser les données ici
    const langueActuelle = "fr"; // ou "en" selon la langue choisie par l'utilisateur

    console.log(data[langueActuelle].accueil); // Affiche "Accueil"
    console.log(data[langueActuelle].a_propos); // Affiche "À propos"
    console.log(data[langueActuelle].contact); // Affiche "Contactez-nous"
    console.log(data[langueActuelle].contenu); // Affiche "Bienvenue sur notre site web multilingue !"
    console.log(data[langueActuelle].pied_de_page); // Affiche "Tous droits réservés."
  });