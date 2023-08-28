<?php
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		// Adresse e-mail d'envoi (à partir de laquelle les messages seront envoyés)
		$emailFrom = "quentin.jolly.pro@gmail.com";

		// Adresse e-mail de destination (où les messages seront envoyés)
		$emailTo = "quentin.jolly.pro@gmail.com";

		// Objet du mail (défini de manière fixe dans le programme)
		$subject = "Nouveau message depuis le formulaire de contact";

		// Objet de la signature de mail
		$sign = "Mail envoyé par le formulaire de contact du portfolio";

		// Récupérer les données du formulaire
		$surname = $_POST["surname"];
		$name = $_POST["name"];
		$society = $_POST["society"];
		$phone = $_POST["phone"];
		$email = $_POST["email"];
		$subjectForm = $_POST["subject"];
		$messageForm = $_POST["message"];

		// Construire le contenu du mail
		$content = "Nom : " . $surname . $name . "\n";
		$content .= "Société : " . $society . "\n";
		$content .= "Téléphone : " . $phone . "\n";
		$content .= "Mail : " . $email . "\n";
		$content .= "Sujet : " . $subjectForm . "\n";
		$content .= "Message : " . $messageForm. "\n" . "\n";
		$content .= $sign;

		// En-têtes du mail
		$headers = "From: " . $emailFrom . "\r\n";
		$headers .= "Reply-To: " . $email . "\r\n";

		// Envoi du mail
		if (mail($emailTo, $subject, $content, $headers)) {
			echo "Le message a bien été envoyé.";
		} else {
			echo "Une erreur s'est produite lors de l'envoi du message.";
		}
	}
?>