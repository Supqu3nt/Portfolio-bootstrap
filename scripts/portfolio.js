  function openModal(project) {
    document.getElementById(project).style.display = "block";
    document.body.classList.add("modal-open"); // Ajoute la classe pour bloquer le défilement de l'arrière-plan
  }

  function closeModal(project) {
    document.getElementById(project).style.display = "none";
    document.body.classList.remove("modal-open"); // Supprime la classe pour réactiver le défilement de l'arrière-plan
  }