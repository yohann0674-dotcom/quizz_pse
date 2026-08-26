const masterChefAgresBank = [
    {
        question: "Vous arrivez sur les lieux d'un AVP sur route départementale hors agglomération, de nuit. Quelle est la toute première action prioritaire du Chef d'Agrès VSAV ?",
        tags: ["Chef d'Agrès", "Sécurité", "AVP"],
        answerOptions: [
            { text: "Envoyer l'équipier réaliser le bilan de la victime dans le véhicule", isCorrect: false },
            { text: "Faire actionner les feux de détresse et descendre immédiatement pour faire un bilan chiffré", isCorrect: false },
            { text: "Assurer la sécurité immédiate (balisage, coupe-circuit, port des EPI grand-visibilité) avant toute action de secours", isCorrect: true, rationale: "La règle d'or opérationnelle est la sécurité de l'intervenant. Le balisage et les EPI doivent précéder toute approche de la zone de danger." },
            { text: "Demander un renfort SMUR par radio au CTA-CODIS", isCorrect: false }
        ]
    },
    {
        question: "Quel est le délai indicatif maximal recommandé pour transmettre votre message de 'Présentation / Premier Bilan' au CTA-CODIS après votre présentation sur les lieux ?",
        tags: ["Chef d'Agrès", "Radio"],
        answerOptions: [
            { text: "2 minutes", isCorrect: false },
            { text: "5 minutes max (dès que le bilan visuel et l'évaluation initiale sont faits)", isCorrect: true, rationale: "Le message de premier bilan doit être rapide pour informer le CTA-CODIS de la situation et commander d'éventuels renforts." },
            { text: "15 minutes, après avoir terminé tous les soins", isCorrect: false },
            { text: "Uniquement à la fin de l'intervention dans le compte-rendu", isCorrect: false }
        ]
    },
    {
        question: "Une victime consciente sous votre garde dans le VSAV refuse farouchement d'être transportée à l'hôpital malgré des critères de gravité. Que fait le Chef d'Agrès ?",
        tags: ["Chef d'Agrès", "Législatif"],
        answerOptions: [
            { text: "L'attacher sur le brancard de force", isCorrect: false },
            { text: "La laisser repartir sans rien signer", isCorrect: false },
            { text: "Informer le CTA-CODIS, demander un avis médical (régulation SAMU) et faire signer une décharge de responsabilité si le refus est éclairé", isCorrect: true, rationale: "Un majeur conscient reste libre, mais la procédure impose l'avis du médecin régulateur et la traçabilité juridique via une décharge." },
            { text: "Appeler les forces de l'ordre pour l'interpeller", isCorrect: false }
        ]
    },
    {
        question: "Lors d'une intervention pour une femme sur le point d'accoucher inopinément dans un lieu public, quel est le rôle principal du Chef d'Agrès au sein de l'équipage ?",
        tags: ["Chef d'Agrès", "Obstétrique"],
        answerOptions: [
            { text: "Pratiquer une césarienne d'urgence", isCorrect: false },
            { text: "Coordonner l'action de l'équipe, rassurer la maman, préparer le matériel d'accouchement stérile et relayer le SAMU-Centre 15 en direct", isCorrect: true, rationale: "Le chef d'agrès encadre son équipe, s'assure du confort et de la sécurité de la mère tout en maintenant le contact permanent avec la régulation médicale." },
            { text: "Quitter les lieux pour chercher une maternité", isCorrect: false },
            { text: "Interdire aux équipiers de toucher le nouveau-né", isCorrect: false }
        ]
    },
    {
        question: "Vous êtes confronté à une agression verbale et physique naissante envers votre équipage lors d'une intervention sur voie publique. Quelle est la conduite à tenir immédiate ?",
        tags: ["Chef d'Agrès", "Sécurité", "Agression"],
        answerOptions: [
            { text: "Riposter physiquement pour marquer l'autorité", isCorrect: false },
            { text: "Mettre l'équipage en sécurité, regagner le VSAV, verrouiller les portes, s'éloigner si nécessaire et demander l'intervention des forces de l'ordre via le CTA-CODIS", isCorrect: true, rationale: "La protection des intervenants prime. Le repli tactique et la sécurisation du véhicule s'imposent en attendant les forces de police ou de gendarmerie." },
            { text: "Continuer la prise en charge médicale en ignorant les agresseurs", isCorrect: false },
            { text: "Abandonner la victime sur place sans avertir le CODIS", isCorrect: false }
        ]
    },
    {
        question: "Quel document officiel du Sdis le Chef d'Agrès doit-il impérativement renseigner et faire signer/valider à l'issue de chaque transport sanitaire ?",
        tags: ["Chef d'Agrès", "Administratif"],
        answerOptions: [
            { text: "La fiche de circulation du véhicule uniquement", isCorrect: false },
            { text: "La Fiche de Bilan Secouriste (FBS) / Fiche de Liaison d'Urgence", isCorrect: true, rationale: "La FBS retrace l'ensemble des paramètres, des actions et l'évolution de la victime, indispensable pour la transmission aux équipes médicales relais." },
            { text: "Le registre de paie de l'agent", isCorrect: false },
            { text: "Une facture détaillée des frais kilométriques", isCorrect: false }
        ]
    },
    {
        question: "Vous intervenez dans un immeuble d'habitation pour une personne âgée chutée au sol depuis plusieurs heures. La porte est fermée de l'intérieur, la victime appelle à l'aide faiblement. Quelle est la prérogative du Chef d'Agrès ?",
        tags: ["Chef d'Agrès", "Ouverture de porte"],
        answerOptions: [
            { text: "Forcer immédiatement la porte principale au pied de biche sans attendre", isCorrect: false },
            { text: "Tenter de contacter les voisins, évaluer l'urgence vitale apparente, demander l'engagement d'un fourgon (FPT) et des forces de l'ordre ou de la police/secours d'urgence pour une ouverture de porte institutionnelle", isCorrect: true, rationale: "L'ouverture de porte en force nécessite de respecter les procédures légales, de s'assurer de l'urgence et de coordonner les moyens adaptés (FPT/policiers)." },
            { text: "Laisser un mot sous la porte et repartir", isCorrect: false },
            { text: "Attendre le propriétaire qui habite à 100 kilomètres", isCorrect: false }
        ]
    },
    {
        question: "En tant que Chef d'Agrès VSAV, comment qualifiez-vous un message d'ambiance transmis par radio dès votre arrivée en vue d'un incendie d'appartement généralisé avec victimes potentielles ?",
        tags: ["Chef d'Agrès", "Radio", "Incendie"],
        answerOptions: [
            { text: "Un message de type 'Demande de renforts / Message d'information critique'", isCorrect: true, rationale: "Le message d'ambiance permet au CTA-CODIS et aux premiers chefs de groupe de mesurer immédiatement la gravité et d'adapter les flux d'engagement." },
            { text: "Un compte-rendu de fin de mission", isCorrect: false },
            { text: "Une simple conversation de courtoisie", isCorrect: false },
            { text: "Un bilan kilométrique", isCorrect: false }
        ]
    },
    {
        question: "Quel est le rôle du Chef d'Agrès face à un témoin direct très agité ou paniqué présent dans le périmètre immédiat d'un accident grave ?",
        tags: ["Chef d'Agrès", "Communication"],
        answerOptions: [
            { text: "L'ignorer totalement", isCorrect: false },
            { text: "Le confier à un rôle d'assistant ou l'isoler calmement pour le sécuriser et éventuellement recueillir des informations utiles sur les circonstances", isCorrect: true, rationale: "Un impliqué agité perturbe les secours. Le canaliser ou le confier à un tiers permet de préserver la concentration de l'équipe et de récupérer de précieux renseignements." },
            { text: "L'attacher au mobilier urbain", isCorrect: false },
            { text: "L'engager de force comme secouriste", isCorrect: false }
        ]
    },
    {
        question: "Dans le cadre de la chaîne de commandement, à qui le Chef d'Agrès VSAV rend-il compte directement lors d'une intervention multi-engins sur un feu de structure ?",
        tags: ["Chef d'Agrès", "Commandement"],
        answerOptions: [
            { text: "Au Préfet du département", isCorrect: false },
            { text: "Au Chef de Groupe (ou au Commandant des Opérations de Secours - COS)", isCorrect: true, rationale: "Le chef d'agrès VSAV s'intègre dans l'arborescence du commandement et dépend directement du chef de groupe ou du COS désigné sur les lieux." },
            { text: "Au maire de la commune uniquement", isCorrect: false },
            { text: "Au conducteur du VSAV", isCorrect: false }
        ]
    },
    {
        question: "Vous prenez en charge un patient présentant des signes évidents d'accident vasculaire cérébral (AVC). Quelle est la responsabilité majeure du Chef d'Agrès auprès du SAMU ?",
        tags: ["Chef d'Agrès", "AVC", "Régulation"],
        answerOptions: [
            { text: "Demander l'orientation vers la filière neuro-vasculaire spécifique la plus proche dans les plus brefs délais en transmettant l'heure exacte de début des symptômes", isCorrect: true, rationale: "L'élément critique pour la prise en charge d'un AVC (thrombolyse/thrombectomie) est l'horaire précis d'apparition des premiers signes et le choix de la structure adaptée." },
            { text: "Attendre le lendemain matin pour consulter un médecin généraliste", isCorrect: false },
            { text: "Administrer de l'aspirine à haute dose de sa propre initiative", isCorrect: false },
            { text: "Transporter la victime dans une clinique non habilitée", isCorrect: false }
        ]
    },
    {
        question: "Quel est le comportement réglementaire du conducteur et du chef d'agrès du VSAV lors d'un départ en urgence (DAU) de nuit en agglomération ?",
        tags: ["Chef d'Agrès", "Conduite", "Sécurité"],
        answerOptions: [
            { text: "Rouler à pleine vitesse tous feux éteints", isCorrect: false },
            { text: "Utiliser les avertisseurs sonores (2 tons) et lumineux (gyrophares) tout en conservant la maîtrise du véhicule et en s'assurant de la priorité à chaque intersection", isCorrect: true, rationale: "Les facilitateurs de passage (2 tons et feux) confèrent un statut prioritaire mais n'exonèrent jamais d'une conduite prudente et du contrôle des intersections." },
            { text: "Couper les avertisseurs sonores pour ne pas réveiller le voisinage", isCorrect: false },
            { text: "Ne pas porter la ceinture de sécurité pour gagner du temps à l'arrivée", isCorrect: false }
        ]
    },
    {
        question: "Lors d'un dégagement d'urgence d'une victime en arrêt cardiorespiratoire située dans un habitacle exigu de voiture en feu, que doit évaluer le Chef d'Agrès en une fraction de seconde ?",
        tags: ["Chef d'Agrès", "Dégagement d'urgence"],
        answerOptions: [
            { text: "Le coût des réparations de la voiture", isCorrect: false },
            { text: "Le rapport bénéfice/risque entre le danger immédiat (propagations des flammes/explosion) et le risque de traumatisme induit par la manipulation", isCorrect: true, rationale: "Le dégagement d'urgence s'affranchit des règles classiques d'immobilisation uniquement si le danger vital immédiat extérieur (ex: incendie) dépasse le risque lésionnel." },
            { text: "Attendre l'expert en automobile", isCorrect: false },
            { text: "Demander l'avis écrit de la victime inconsciente", isCorrect: false }
        ]
    },
    {
        question: "Comment le Chef d'Agrès gère-t-il la communication radio de son véhicule lors d'une phase tactique tendue sur les lieux d'une intervention ?",
        tags: ["Chef d'Agrès", "Radio"],
        answerOptions: [
            { text: "Il crie par la fenêtre sans utiliser l'appareil", isCorrect: false },
            { text: "Il utilise un langage clair, concis, normé, en identifiant son indicatif (ex: VSAV [Nom de la caserne]) et en préparant son message avant d'émettre", isCorrect: true, rationale: "La rigueur des transmissions radio évite la saturation des réseaux et garantit la bonne compréhension des ordres ou des bilans." },
            { text: "Il laisse le canal ouvert en permanence pour écouter de la musique", isCorrect: false },
            { text: "Il délègue la radio au patient transporté", isCorrect: false }
        ]
    },
    {
        question: "Quel est le rôle du Chef d'Agrès concernant l'hygiène et la désinfection du VSAV après le transport d'une victime atteinte d'une pathologie infectieuse contagieuse ?",
        tags: ["Chef d'Agrès", "Hygiène"],
        answerOptions: [
            { text: "Simplement fermer les portes et laisser aérer 5 minutes", isCorrect: false },
            { text: "Superviser la procédure de décontamination complète du matériel et de la cellule sanitaire avec les produits désinfectants appropriés selon les protocoles du Sdis", isCorrect: true, rationale: "Le chef d'agrès est responsable de la remise en condition opérationnelle et sanitaire immédiate de son agrès pour protéger les futurs patients et l'équipage." },
            { text: "Laisser le véhicule sale pour l'équipe de garde suivante", isCorrect: false },
            { text: "Utiliser uniquement de l'eau claire sans détergent", isCorrect: false }
        ]
    },
    {
        question: "Vous êtes requis pour une personne en détresse psychologique présentant des idées suicidaires avérées et un comportement violent. Quelle est la règle d'or sécuritaire pour le Chef d'Agrès ?",
        tags: ["Chef d'Agrès", "Psychologique", "Sécurité"],
        answerOptions: [
            { text: "S'isoler seul avec la personne pour nouer une relation de confiance", isCorrect: false },
            { text: "Ne jamais s'isoler, s'assurer de la présence des forces de l'ordre pour neutraliser les dangers potentiels (armes, objets tranchants) avant d'engager les soins", isCorrect: true, rationale: "La sécurité de l'intervenant face à une crise psychiatrique violente nécessite l'appui systématique des forces de l'ordre et le maintien d'une position de recul." },
            { text: "Provoquer verbalement la personne pour tester ses limites", isCorrect: false },
            { text: "Quitter les lieux en estimant que ce n'est pas le rôle des pompiers", isCorrect: false }
        ]
    },
    {
        question: "Quel est l'objectif principal du message bilan 'complémentaire' ou de 'suivi' transmis en cours de transport vers l'hôpital par le Chef d'Agrès ?",
        tags: ["Chef d'Agrès", "Bilan", "Transport"],
        answerOptions: [
            { text: "Donner la météo du jour à l'hôpital", isCorrect: false },
            { text: "Informer le service d'accueil des urgences (SAU) ou la régulation de l'évolution de l'état de la victime, des constantes et de l'heure estimée d'arrivée (ETA)", isCorrect: true, rationale: "Le message de suivi permet au service receveur de préparer l'accueil de la victime (box, matériel, équipe médicale) en fonction de l'évolution." },
            { text: "Demander le menu de la cafétéria de l'hôpital", isCorrect: false },
            { text: "Annuler purement et simplement l'hospitalisation", isCorrect: false }
        ]
    },
    {
        question: "Face à une situation impliquant de nombreuses victimes (NIMV / Plan Albane / Orsec) sur la voie publique, quelle est la première mission du premier Chef d'Agrès VSAV arrivé sur les lieux ?",
        tags: ["Chef d'Agrès", "NIMV", "Commandement"],
        answerOptions: [
            { text: "Prendre en charge une seule victime et repartir immédiatement", isCorrect: false },
            { text: "Se présenter comme Premier Chef d'Agrès sur les lieux (PCAG), réaliser un bilan d'estimation global (nombre de victimes, gravité) et l'annoncer au CTA-CODIS en assumant le commandement initial", isCorrect: true, rationale: "Le premier arrivant endosse le rôle de commandement initial (PCAG) pour structurer l'attaque de l'événement et dimensionner les renforts nécessaires." },
            { text: "S'enfuir pour ne pas gérer la charge de travail", isCorrect: false },
            { text: "Organiser un barrage filtrant pour les journalistes uniquement", isCorrect: false }
        ]
    },
    {
        question: "Quel équipement de protection individuelle (EPI) spécifique le Chef d'Agrès doit-il veiller à ce que son équipage porte obligatoirement lors d'une intervention sur autoroute ou voie rapide ?",
        tags: ["Chef d'Agrès", "EPI", "Sécurité routière"],
        answerOptions: [
            { text: "Un simple t-shirt de sport rouge", isCorrect: false },
            { text: "La tenue de feu complète associée au gas/gilet de haute visibilité (classe 2 ou 3)", isCorrect: true, rationale: "Sur voies rapides, le risque de sur-accident est maximal. Le port combiné des EPI haute visibilité est une obligation absolue pour tout intervenant." },
            { text: "Un short et des tongs pour être plus rapide", isCorrect: false },
            { text: "Aucun équipement particulier en journée", isCorrect: false }
        ]
    },
    {
        question: "Comment le Chef d'Agrès gère-t-il un équipier novice (en formation d'intégration) lors d'une intervention complexe sur un malaise grave de l'enfant ?",
        tags: ["Chef d'Agrès", "Pédagogie", "Encadrement"],
        answerOptions: [
            { text: "Le laisser se débrouiller seul pour le tester", isCorrect: false },
            { text: "Le guider avec bienveillance, lui confier des tâches adaptées à son niveau sous supervision directe et garder la responsabilité globale de la prise en charge", isCorrect: true, rationale: "Le chef d'agrès est responsable de la sécurité des actes réalisés par son équipe. Il joue un rôle de tuteur et de superviseur permanent." },
            { text: "L'isoler dans le véhicule pendant toute l'intervention", isCorrect: false },
            { text: "Lui confier immédiatement la responsabilité totale du commandement", isCorrect: false }
        ]
    },
    {
        question: "Vous êtes requis pour une fuite de gaz suspecte dans un pavillon avec une personne signalée à l'intérieur. Quelle est la consigne de sécurité absolue pour le Chef d'Agrès avant d'entrer ?",
        tags: ["Chef d'Agrès", "Risques divers", "Gaz"],
        answerOptions: [
            { text: "Allumer toutes les lumières pour y voir clair", isCorrect: false },
            { text: "Ne pas utiliser d'appareils électriques susceptibles de produire des étincelles (radio portable, téléphone), éviter les flammes nues et évaluer le risque d'explosion", isCorrect: true, rationale: "En atmosphère explosive (gaz), toute source d'étincelle ou d'arc électrique peut déclencher une catastrophe. L'approche requiert une extrême vigilance." },
            { text: "Fumer une cigarette pour se détendre avant d'entrer", isCorrect: false },
            { text: "Couper l'eau de la ville", isCorrect: false }
        ]
    },
    {
        question: "Quel rôle joue le Chef d'Agrès vis-à-vis des mineurs non accompagnés impliqués dans un accident ou se trouvant dans un contexte de carence éducative manifeste ?",
        tags: ["Chef d'Agrès", "Mineurs", "Social"],
        answerOptions: [
            { text: "Les abandonner sur place si leurs parents ne répondent pas", isCorrect: false },
            { text: "Assurer leur mise en sûreté, les prendre en charge avec empathie et aviser le CTA-CODIS pour relayer les autorités compétentes (police/gendarmerie, services sociaux)", isCorrect: true, rationale: "La protection des mineurs en danger ou isolés relève d'un signalement obligatoire et d'une prise en charge sécurisée en lien avec les autorités." },
            { text: "Leur confier la conduite du VSAV", isCorrect: false },
            { text: "Les interroger de manière agressive", isCorrect: false }
        ]
    },
    {
        question: "Quelle est la règle en matière de transmission de données médicales par le Chef d'Agrès au téléphone ou par radio vis-à-vis du secret professionnel ?",
        tags: ["Chef d'Agrès", "Déontologie", "Secret médical"],
        answerOptions: [
            { text: "Diffuser l'identité complète des patients sur les réseaux sociaux publics", isCorrect: false },
            { text: "Respecter scrupuleusement le secret médical et professionnel en ne communiquant les données sensibles qu'aux autorités médicales de régulation ou aux services habilités", isCorrect: true, rationale: "Les sapeurs-pompiers sont soumis au secret professionnel. Les informations médicales ne se partagent qu'avec les professionnels de santé habilités." },
            { text: "Publier le bilan de santé sur un panneau d'affichage dans la caserne", isCorrect: false },
            { text: "Revendre les informations à la presse locale", isCorrect: false }
        ]
    },
    {
        question: "Lors d'une intervention pour un dégagement de fumées suspectes dans une cave d'immeuble, le VSAV est requis en premier. Que fait le Chef d'Agrès ?",
        tags: ["Chef d'Agrès", "Incendie", "Reconnaissance"],
        answerOptions: [
            { text: "Pénétrer immédiatement dans la cave enfumée sans appareil de protection respiratoire", isCorrect: false },
            { text: "Réaliser une reconnaissance prudente, se renseigner auprès des habitants, interdire l'accès aux civils et demander l'engagement immédiat d'un engin pompe (FPT) pour l'attaque et la reconnaissance en ARPI", isCorrect: true, rationale: "Un VSAV n'est pas armé pour la lutte contre l'incendie en atmosphère toxique. Le chef d'agrès doit commander les renforçants adaptés (FPT) et sécuriser la zone." },
            { text: "Attendre que le feu s'éteigne tout seul de lui-même", isCorrect: false },
            { text: "Demander aux habitants de souffler sur les fumées", isCorrect: false }
        ]
    },
    {
        question: "Comment le Chef d'Agrès gère-t-il la fatigue de son équipage lors de gardes de 24 heures marquées par de multiples interventions successives de nuit ?",
        tags: ["Chef d'Agrès", "Gestion des ressources", "Sécurité"],
        answerOptions: [
            { text: "Interdire à quiconque de se reposer entre deux départs", isCorrect: false },
            { text: "Surveiller la vigilance de l'équipage et du conducteur, adapter le rythme si possible et signaler au chef de centre toute baisse de capacité opérationnelle critique liée à la fatigue", isCorrect: true, rationale: "La vigilance et la sécurité routière dépendent de la condition physique des agents. Le chef d'agrès doit identifier les risques liés à la privation de sommeil." },
            { text: "Conduire à leur place en dormant au volant", isCorrect: false },
            { text: "Ignorer les signes d'épuisement professionnel", isCorrect: false }
        ]
    },
    {
        question: "Quel est l'intérêt opérationnel d'utiliser la fonction 'message de fin d'intervention / disponible' (DISPO) auprès du CTA-CODIS ?",
        tags: ["Chef d'Agrès", "Disponibilité", "CTA-CODIS"],
        answerOptions: [
            { text: "Permettre au centre de dispatching de réaffecter rapidement le VSAV sur une nouvelle intervention ou de l'autoriser à regagner son centre de secours", isCorrect: true, rationale: "Le retour à la disponibilité (DISPO) actualise la carte opérationnelle du SDIS et garantit la permanence des secours sur le secteur." },
            { text: "FerMER définitivement la caserne", isCorrect: false },
            { text: "Signaler que l'équipage est parti en repos", isCorrect: false },
            { text: "Effacer les kilomètres parcourus du compteur", isCorrect: false }
        ]
    },
    {
        question: "Vous prenez en charge une victime présentant des brûlures graves suite à l'explosion d'un barbecue. Quelle est l'action prioritaire de conditionnement à mener par l'équipe sous la direction du Chef d'Agrès ?",
        tags: ["Chef d'Agrès", "Brûlures"],
        answerOptions: [
            { text: "Appliquer de la glace pilée directement sur les plaies", isCorrect: false },
            { text: "Arroser les zones brûlées à l'eau tempérée (selon les règles d'arrosage des brûlures), retirer les vêtements non collés et protéger par des champs propres", isCorrect: true, rationale: "Le refroidissement précoce à l'eau tempérée limite la profondeur de la brûlure et soulage la douleur, avant l'avis de la régulation médicale." },
            { text: "Mettre de l'huile de cuisine et du beurre", isCorrect: false },
            { text: "Percer toutes les phlyctènes (ampoules)", isCorrect: false }
        ]
    },
    {
        question: "Quel est le comportement du Chef d'Agrès face à des journalistes ou des curieux filmant une intervention sensible sur la voie publique avec des blessés graves ?",
        tags: ["Chef d'Agrès", "Communication", "Médias"],
        answerOptions: [
            { text: "Confisquer les téléphones de force et briser les caméras", isCorrect: false },
            { text: "Protéger la dignité et l'anonymat de la victime (poser des écrans de visibilité si besoin), maintenir le périmètre de sécurité et faire appel aux forces de l'ordre si les tiers entravent les secours", isCorrect: true, rationale: "Le respect de la vie privée et de la dignité de la victime prime, tout en évitant l'affrontement direct en s'appuyant sur les forces de l'ordre." },
            { text: "Poser en souriant à côté de la victime", isCorrect: false },
            { text: "Diffuser le direct sur les réseaux sociaux du Sdis", isCorrect: false }
        ]
    },
    {
        question: "Lors d'une intervention pour une intoxication au monoxyde de carbone (CO) dans un foyer au charbon, quelle est la priorité absolue d'analyse du Chef d'Agrès dès l'entrée dans les locaux ?",
        tags: ["Chef d'Agrès", "Monoxyde de carbone", "Sécurité"],
        answerOptions: [
            { text: "Allumer un feu de cheminée pour vérifier le tirage", isCorrect: false },
            { text: "S'assurer du port des détecteurs individuels de CO, ventiler immédiatement les pièces et soustraire l'ensemble des occupants de la zone contaminée vers l'extérieur", isCorrect: true, rationale: "Le monoxyde de carbone est un gaz inodore et mortel. La priorité absolue est de s'équiper (détecteur), de sortir les victimes et de ventiler pour protéger l'équipage et les patients." },
            { text: "Demander aux victimes de retenir leur respiration", isCorrect: false },
            { text: "Laquer les murs pour fixer le gaz", isCorrect: false }
        ]
    },
    {
        question: "Comment le Chef d'Agrès gère-t-il un refus d'obtempérer ou une contestation de la part d'un équipier sur un choix tactique en cours d'intervention ?",
        tags: ["Chef d'Agrès", "Management", "Commandement"],
        answerOptions: [
            { text: "Lui ordonner de quitter immédiatement la caserne à pied", isCorrect: false },
            { text: "Trancher la décision opérationnelle dans l'immédiat pour garantir la sécurité et la mission, puis débriefer calmement de manière constructive au retour en centre de secours", isCorrect: true, rationale: "Le chef d'agrès assume la responsabilité opérationnelle sur le terrain. L'action prime dans l'urgence, et le dialogue pédagogique s'effectue en aval." },
            { text: "Abandonner la mission pour lancer un vote démocratique", isCorrect: false },
            { text: "Modifier la doctrine en direct selon l'avis de l'équipier", isCorrect: false }
        ]
    },
    {
        question: "Vous intervenez pour une obstruction des voies aériennes par corps étranger (OVACE) chez un adulte. L'équipier réalise les claques dans le dos sans succès. Que fait le Chef d'Agrès ?",
        tags: ["Chef d'Agrès", "Secours d'urgence", "OVACE"],
        answerOptions: [
            { text: "Observer les bras croisés en attendant le SAMU", isCorrect: false },
            { text: "Superviser l'enchaînement des compressions abdominales (méthode de Heimlich), s'assurer du passage au relais en cas d'inconscience (ACR) et commander un renfort médicalisé (SMUR)", isCorrect: true, rationale: "L'urgence vitale absolue nécessite de coordonner les gestes de sauvetage (claques / compressions) et d'anticiper l'aggravation en demandant le SMUR." },
            { text: "Donner de l'eau à boire à la victime pour faire descendre l'objet", isCorrect: false },
            { text: "Tenter d'extraire l'objet à l'aveugle avec les doigts sans voir", isCorrect: false }
        ]
    },
    {
        question: "Quel rôle joue le Chef d'Agrès dans la vérification quotidienne des matériels embarqués (matériel lot de Bilan, défibrillateur, oxygène) au début de sa garde ?",
        tags: ["Chef d'Agrès", "Vérification", "Matériel"],
        answerOptions: [
            { text: "Aucun, c'est uniquement le rôle du pharmacien du Sdis", isCorrect: false },
            { text: "Il est responsable du contrôle de la disponibilité opérationnelle de son véhicule et de ses équipements par le biais des inventaires et tests réglementaires", isCorrect: true, rationale: "Le chef d'agrès engage sa responsabilité sur l'armement et la complétude du matériel de son VSAV avant chaque prise de garde." },
            { text: "Cacher les manques pour ne pas avoir d'ennuis", isCorrect: false },
            { text: "Considérer que tout fonctionne sans rien vérifier", isCorrect: false }
        ]
    },
    {
        question: "Lors d'une intervention pour une noyade en plan d'eau, la victime vient d'être sortie de l'eau par des civils en arrêt cardiorespiratoire. Quelle est la directive prioritaire du Chef d'Agrès ?",
        tags: ["Chef d'Agrès", "Noyade", "ACR"],
        answerOptions: [
            { text: "Vider l'eau des poumons en suspendant la victime par les pieds pendant 20 minutes", isCorrect: false },
            { text: "Initier immédiatement la RCP (alternance compressions thoraciques / insuffulations) et poser le DAE, tout en demandant un renfort médicalisé", isCorrect: true, rationale: "Les manœuvres de réanimation cardiopulmonaire et la défibrillation précoce priment sur toute manœuvre d'évacuation d'eau (qui est inefficace et dangereuse)." },
            { text: "Attendre que la victime se réchauffe seule au soleil", isCorrect: false },
            { text: "Lui faire boire un grog chaud", isCorrect: false }
        ]
    },
    {
        question: "Comment le Chef d'Agrès doit-il réagir face à un chien agressif non attaché qui bloque l'accès au domicile d'une personne en détresse apparente ?",
        tags: ["Chef d'Agrès", "Sécurité", "Animaux dangereux"],
        answerOptions: [
            { text: "Tenter d'affronter le chien à mains nues", isCorrect: false },
            { text: "Ne pas s'exposer inutilement, sécuriser l'approche, demander l'intervention des forces de l'ordre ou de services animaliers spécialisés avant de pénétrer dans les lieux", isCorrect: true, rationale: "La sécurité de l'intervenant prime. Un animal agressif représente un risque létal ou traumatique majeur justifiant l'appui des forces de l'ordre." },
            { text: "Abandonner définitivement la mission sans preveir le CODIS", isCorrect: false },
            { text: "Jeter des pierres sur l'animal", isCorrect: false }
        ]
    },
    {
        question: "Quel est l'objectif du bilan circonstanciel réalisé par le Chef d'Agrès dès l'arrivée sur les lieux d'une intervention ?",
        tags: ["Chef d'Agrès", "Bilan circonstanciel"],
        answerOptions: [
            { text: "Evaluer uniquement la météo extérieure", isCorrect: false },
            { text: "Analyser l'environnement, identifier les dangers persistants ou évolutifs, estimer le nombre de victimes et déterminer les ressources nécessaires", isCorrect: true, rationale: "Le bilan circonstanciel permet de cartographier la situation tactique et d'adapter en temps réel les consignes de sécurité et les demandes de renforts." },
            { text: "Remplir la feuille de route du véhicule", isCorrect: false },
            { text: "Discuter avec les passants", isCorrect: false }
        ]
    },
    {
        question: "Dans le cas d'une victime découverte en hypothermie profonde sur la voie publique en hiver, quelle consigne de manipulation le Chef d'Agrès doit-il donner à son équipe ?",
        tags: ["Chef d'Agrès", "Hypothermie"],
        answerOptions: [
            { text: "Frotter vigoureusement les membres de la victime avec de la neige", isCorrect: false },
            { text: "Manipuler la victime avec un maximum de douceur pour éviter de déclencher des troubles du rythme cardiaque grave (fibrillation ventriculaire), isoler du froid et conditionner", isCorrect: true, rationale: "Un patient en hypothermie sévère a le myocarde très irritable. Des mouvements brusques peuvent induire un arrêt cardiaque irréversible." },
            { text: "Le plonger dans un bain d'eau bouillante", isCorrect: false },
            { text: "Le faire courir pour se réchauffer", isCorrect: false }
        ]
    },
    {
        question: "Quel rôle le Chef d'Agrès tient-il lors de la passation de consignes (bilan transmissible) aux équipes médicales du SMUR arrivées sur les lieux ?",
        tags: ["Chef d'Agrès", "Transmission médicale", "SMUR"],
        answerOptions: [
            { text: "Refuser de parler aux médecins", isCorrect: false },
            { text: "Transmettre de manière synthétique et structurée (méthode type MIST / ABCDE) l'anamnèse, l'évolution des paramètres vitaux et les gestes déjà réalisés", isCorrect: true, rationale: "Une transmission claire et structurée permet au médecin du SMUR d'avoir une vision instantanée de l'état du patient et de prendre le relais sans perte de temps." },
            { text: "Laisser le médecin deviner l'état de la victime", isCorrect: false },
            { text: "Donner uniquement le nom de famille de la victime", isCorrect: false }
        ]
    },
    {
        question: "Vous êtes engagé pour une fuite de produit chimique corrosif dans un laboratoire. Le VSAV est positionné en zone sécurisée. Quelles sont les responsabilités du Chef d'Agrès ?",
        tags: ["Chef d'Agrès", "Risques chimiques", "NRBC"],
        answerOptions: [
            { text: "Pénétrer dans le local sans équipement de protection chimique", isCorrect: false },
            { text: "Maintenir la position de repli sécurisée, interdire l'accès à la zone, identifier la nature du produit si possible et attendre l'engagement des équipes spécialisées (RIS / CMIC)", isCorrect: true, rationale: "Le VSAV n'a pas vocation à intervenir en zone contaminée chimique. Le rôle du chef d'agrès est d'isoler, de renseigner le CTA-CODIS et d'attendre les spécialistes." },
            { text: "Goûter le produit pour identifier sa composition", isCorrect: false },
            { text: "Laver le produit à grande eau sans consigne", isCorrect: false }
        ]
    },
    {
        question: "Comment le Chef d'Agrès gère-t-il la présence de membres de la famille très angoissés à l'intérieur de la cellule sanitaire du VSAV pendant la prise en charge d'un patient critique ?",
        tags: ["Chef d'Agrès", "Gestion des proches"],
        answerOptions: [
            { text: "Les insulter pour les faire sortir", isCorrect: false },
            { text: "Évaluer si leur présence perturbe les soins : si oui, les faire descendre avec tact en leur expliquant la nécessité de concentration de l'équipe, tout en les tenant informés à l'extérieur", isCorrect: true, rationale: "L'exiguïté du VSAV et la nécessité de se concentrer sur les gestes d'urgence imposent parfois de réguler la présence des proches pour le bien de l'intervention." },
            { text: "Leur confier la pose de la perfusion", isCorrect: false },
            { text: "Fermer les portes à clé et rouler sans les prévenir", isCorrect: false }
        ]
    },
    {
        question: "Quel est le comportement réglementaire du Chef d'Agrès en cas d'accident corporel impliquant son propre VSAV en route vers une intervention ?",
        tags: ["Chef d'Agrès", "Accident impliquant un engin"],
        answerOptions: [
            { text: "Quitter les lieux en courant pour ne pas être vu", isCorrect: false },
            { text: "S'arrêter immédiatement, sécuriser les lieux (balisage, sur-accident), faire le bilan des blessés (dans le VSAV et les tiers), informer le CTA-CODIS et rédiger les comptes rendus administratifs", isCorrect: true, rationale: "Un véhicule d'urgence impliqué dans un accident doit immédiatement appliquer les procédures de sécurité routière et rendre compte à sa hiérarchie et au CODIS." },
            { text: "Continuer l'intervention initiale en oubliant l'accident", isCorrect: false },
            { text: "Demander aux victimes de l'autre voiture de régler les réparations en espèces", isCorrect: false }
        ]
    },
    {
        question: "Quel est l'intérêt de la traçabilité des lots de consommables médicaux et des péremptions sous la responsabilité du Chef d'Agrès ?",
        tags: ["Chef d'Agrès", "Logistique médicale"],
        answerOptions: [
            { text: "Aucun intérêt pratique", isCorrect: false },
            { text: "Garantir l'efficacité des soins, éviter l'utilisation de produits périmés ou altérés et respecter les réglementations sanitaires en vigueur", isCorrect: true, rationale: "La rigueur logistique garantit qu'aucun médicament périmé ou matériel défectueux ne soit administré à un patient lors d'une urgence vitale." },
            { text: "Permettre de revendre le matériel sur Internet", isCorrect: false },
            { text: "Alourdir inutilement la charge administrative", isCorrect: false }
        ]
    },
    {
        question: "Vous prenez en charge une victime présentant une plaie hémorragique importante à un membre supérieur résistante à une compression directe. Quelle est la directive du Chef d'Agrès ?",
        tags: ["Chef d'Agrès", "Hémorragie", "Garrot"],
        answerOptions: [
            { text: "Poser un garrot improvisé avec un fil de fer barbelé", isCorrect: false },
            { text: "Ordonner la pose immédiate d'un garrot tourniquet homologué en amont de la plaie si la compression locale échoue ou est impossible", isCorrect: true, rationale: "Face à une hémorragie extériorisée menaçant le pronostic vital rapide et en cas d'échec de la compression, la pose d'un garrot tactique homologué est la solution de sauvetage." },
            { text: "Laisser saigner en attendant l'arrivée à l'hôpital", isCorrect: false },
            { text: "Appliquer un pansement humidifié à l'eau froide", isCorrect: false }
        ]
    },
    {
        question: "Comment le Chef d'Agrès assure-t-il la liaison avec le médecin opérateur du SAMU lors d'une régulation médicale téléphonique complexe dans le VSAV ?",
        tags: ["Chef d'Agrès", "Régulation médicale"],
        answerOptions: [
            { text: "En coupant le téléphone au milieu de la conversation", isCorrect: false },
            { text: "En transmettant des faits précis, objectifs, les paramètres chiffrés et en écoutant les ordres médicaux avec rigueur (relecture des ordres si nécessaire)", isCorrect: true, rationale: "La liaison avec le médecin régulateur est un acte médical délégué encadré. La clarté et la relecture des consignes évitent toute erreur de prise en charge." },
            { text: "En refusant d'appliquer les consignes du médecin", isCorrect: false },
            { text: "En inventant des constantes pour aller plus vite", isCorrect: false }
        ]
    },
    {
        question: "Quel est le comportement adapté du Chef d'Agrès face à une victime potentielle présentant des troubles psychiatriques manifestes refusant tout contact mais ne représentant pas un danger immédiat pour autrui ?",
        tags: ["Chef d'Agrès", "Psychiatrie"],
        answerOptions: [
            { text: "L'attacher de force sur le champ", isCorrect: false },
            { text: "Faire preuve de patience, d'écoute active, éviter toute attitude menaçante, et demander un avis médical régulé (SAMU/psychiatre) pour évaluer la nécessité d'une prise en charge adaptée", isCorrect: true, rationale: "La désescalade verbale et le respect de la personne sont de mise. L'intervention coercitive (hospitalisation sous contrainte) répond à des critères juridiques stricts." },
            { text: "L'abandonner sur la voie publique sans surveillance", isCorrect: false },
            { text: "Faire usage de la force physique immédiatement", isCorrect: false }
        ]
    },
    {
        question: "Lors d'un transport sanitaire de nuit, le conducteur du VSAV présente des signes de somnolence manifeste. Quelle est la réaction immédiate du Chef d'Agrès ?",
        tags: ["Chef d'Agrès", "Sécurité routière", "Somnolence"],
        answerOptions: [
            { text: "Lui dire de fermer les yeux pour se reposer tout en conduisant", isCorrect: false },
            { text: "Ordonner un arrêt immédiat du véhicule en zone sécurisée, faire une relève de conduite ou signaler la situation pour assurer la sécurité de l'équipage et du patient", isCorrect: true, rationale: "La sécurité routière est une priorité absolue. Laisser conduire un agent somnolent expose l'ensemble de l'équipage et le patient à un risque d'accident mortel." },
            { text: "Augmenter la vitesse pour arriver plus vite avant l'endormissement", isCorrect: false },
            { text: "Mettre la musique très fort sans s'arrêter", isCorrect: false }
        ]
    },
    {
        question: "Quel est l'impact de la rédaction rigoureuse de la Fiche de Bilan Secouriste (FBS) sur le plan médico-légal pour le Chef d'Agrès ?",
        tags: ["Chef d'Agrès", "Médico-légal", "FBS"],
        answerOptions: [
            { text: "Aucun impact, la fiche est jetée à la poubelle en rentrant", isCorrect: false },
            { text: "Elle constitue un document médico-légal officiel retraçant l'action des secours, pouvant être requis par la justice en cas de litige ou d'enquête", isCorrect: true, rationale: "La FBS a une valeur juridique incontestable. Elle atteste des soins prodigués, des horaires et de l'état de la victime au moment de la prise en charge." },
            { text: "Elle sert uniquement de bloc-notes pour dessiner", isCorrect: false },
            { text: "Elle n'a aucune valeur en cas de procès", isCorrect: false }
        ]
    },
    {
        question: "Vous intervenez dans un local enfumé pour une personne inconsciente. Le port de l'ARI (Appareil Respiratoire Isolant) est-il autorisé pour l'équipage du VSAV non formé ou non doté sur ce type de véhicule ?",
        tags: ["Chef d'Agrès", "ARI", "Sécurité incendie"],
        answerOptions: [
            { text: "Oui, tout le monde peut mettre un ARI sans formation", isCorrect: false },
            { text: "Non, le VSAV n'est pas un engin incendie. L'engagement en atmosphère toxique nécessite des engins spécifiques (FPT) et des personnels qualifiés porteurs d'ARI", isCorrect: true, rationale: "Le personnel d'un VSAV n'a pas vocation à pénétrer dans les fumées toxiques sans les qualifications et les équipements de lutte contre l'incendie dédiés (FPT + binôme d'attaque)." },
            { text: "Oui à condition de retenir sa respiration très fort", isCorrect: false },
            { text: "Oui si le chef d'agrès donne son accord oral", isCorrect: false }
        ]
    },
    {
        question: "Comment le Chef d'Agrès gère-t-il la communication avec les services de police municipale ou nationale présents sur une scène d'accident de la circulation ?",
        tags: ["Chef d'Agrès", "Partenaires", "Forces de l'ordre"],
        answerOptions: [
            { text: "Refuser de leur parler et leur interdire l'accès à la zone", isCorrect: false },
            { text: "Coordonner les actions, échanger les informations factuelles sur les victimes et préserver les indices tout en garantissant la priorité absolue aux secours d'urgence", isCorrect: true, rationale: "La collaboration inter-services est indispensable. La police sécurise les lieux et gère l'enquête, tandis que les pompiers gèrent le secours d'urgence." },
            { text: "Leur confier la réalisation des bilans de santé des victimes", isCorrect: false },
            { text: "Quitter les lieux en leur laissant la gestion totale des blessés", isCorrect: false }
        ]
    },
    {
        question: "Quel est le comportement du Chef d'Agrès face à une victime qui refuse de décliner son identité ou de donner ses antécédents médicaux alors qu'elle est consciente et coopérante pour les soins ?",
        tags: ["Chef d'Agrès", "Droit des patients"],
        answerOptions: [
            { text: "L'attacher et refuser de la soigner", isCorrect: false },
            { text: "Respecter son autonomie, lui expliquer l'importance de ces informations pour sa prise en charge médicale, tout en assurant les soins de secours nécessaires", isCorrect: true, rationale: "Un patient conscient a des droits. S'il refuse de donner son identité mais accepte les soins, l'équipe soigne tout en signalant la situation au médecin régulateur." },
            { text: "Appeler immédiatement le peloton d'intervention pour l'interroger", isCorrect: false },
            { text: "L'expulser du VSAV de force", isCorrect: false }
        ]
    },
    {
        question: "Quel est l'objectif du compte-rendu de fin d'intervention transmis par le Chef d'Agrès au CTA-CODIS lors de la rentrée au centre de secours ?",
        tags: ["Chef d'Agrès", "Bilan fin de mission"],
        answerOptions: [
            { text: "Donner le détail des courses personnelles de l'équipage", isCorrect: false },
            { text: "Confirmer la fin des opérations, préciser le bilan définitif des victimes transportées (ou laissées sur place après avis) et acter la libération du moyen", isCorrect: true, rationale: "Le compte-rendu de fin de mission permet de clore administrativement et opérationnellement l'intervention dans les systèmes de gestion du Sdis." },
            { text: "Demander une augmentation de salaire", isCorrect: false },
            { text: "Signaler la météo du lendemain", isCorrect: false }
        ]
    },
    {
        question: "Vous êtes requis pour une personne trouvée en arrêt cardiorespiratoire dans un lieu public très fréquenté. Quelle est la mission induite pour le Chef d'Agrès concernant la gestion du public ?",
        tags: ["Chef d'Agrès", "Foule", "Sécurité publique"],
        answerOptions: [
            { text: "Laisser la foule filmer et toucher le corps", isCorrect: false },
            { text: "Établir un périmètre de sécurité visuel et physique (en s'aidant des premiers intervenants ou de la police), préserver la dignité du patient et optimiser l'espace de travail de l'équipe", isCorrect: true, rationale: "La foule aux abords d'un ACR perturbe l'équipe et porte atteinte à la dignité de la victime. L'établissement d'un périmètre est une priorité du chef d'agrès." },
            { text: "Demander à la foule de participer aux compressions thoraciques sans formation", isCorrect: false },
            { text: "Arrêter la réanimation pour faire de la place", isCorrect: false }
        ]
    },
    {
        question: "Comment le Chef d'Agrès procède-t-il si un équipier est blessé légèrement en cours d'intervention (ex: coupure superficielle ou entorse) ?",
        tags: ["Chef d'Agrès", "Sécurité au travail", "Accident de service"],
        answerOptions: [
            { text: "Lui dire de ne rien dire et de continuer à porter les brancards", isCorrect: false },
            { text: "Le dispenser immédiatement de toute tâche physique, prodiguer les premiers soins de premiers secours, demander un remplacement si nécessaire et rédiger la déclaration d'accident de service", isCorrect: true, rationale: "La santé des agents est la responsabilité du chef d'agrès. Tout accident de service, même bénin, doit être pris en charge et déclaré réglementairement." },
            { text: "Le renvoyer à pied chez lui sans surveillance", isCorrect: false },
            { text: "L'isoler dans le coffre du véhicule", isCorrect: false }
        ]
    },
    {
        question: "Quel est le principe fondamental qui guide l'ensemble des décisions prises par le Chef d'Agrès VSAV tout au long de sa garde ?",
        tags: ["Chef d'Agrès", "Doctrine opérationnelle"],
        answerOptions: [
            { text: "La vitesse d'exécution au mépris total de la sécurité", isCorrect: false },
            { text: "La priorité absolue à la sécurité des intervenants, suivie de la sauvegarde des victimes et de la protection des biens et de l'environnement", isCorrect: true, rationale: "La doctrine de sécurité opérationnelle place toujours l'intégrité des intervenants (Intervenants > Victimes > Biens) au sommet de la pyramide décisionnelle." },
            { text: "La recherche de la performance chronométrique pure", isCorrect: false },
            { text: "Le refus systématique de tout engagement complexe", isCorrect: false }
        ]
    },
    {
        question: "Lors d'une intervention pour une suspicion d'intoxication au monoxyde de carbone touchant plusieurs membres d'une même famille, quelle est l'action immédiate du Chef d'Agrès ?",
        tags: ["Chef d'Agrès", "Intoxication CO", "Multi-victimes"],
        answerOptions: [
            { text: "Laisser tout le monde dans la maison en fermant les fenêtres", isCorrect: false },
            { text: "Évacuer l'ensemble des occupants à l'air libre, ventiler les lieux, porter les masques à oxygène si besoin et demander des renforts VSAV / SMUR en raison du caractère multi-victimes", isCorrect: true, rationale: "Une intoxication au CO collective nécessite une évacuation immédiate de la zone de danger et le dimensionnement rapide de moyens de transport multiples (multi-victimes)." },
            { text: "Leur demander de retenir leur respiration jusqu'à l'hôpital", isCorrect: false },
            { text: "Proposer un café chaud à l'intérieur de la pièce", isCorrect: false }
        ]
    },
    {
        question: "Comment le Chef d'Agrès gère-t-il la transmission des effets personnels et des objets de valeur d'une victime inconsciente lors de son admission aux urgences ?",
        tags: ["Chef d'Agrès", "Objets de valeur"],
        answerOptions: [
            { text: "Les garder dans sa poche personnelle en souvenir", isCorrect: false },
            { text: "Recenser les objets de valeur en présence d'un témoin (ou de l'équipe soignante), les consigner sur les documents officiels et les remettre formellement à l'équipe médicale ou administrative de l'hôpital", isCorrect: true, rationale: "La gestion des objets de valeur d'une victime inconsciente est encadrée par des règles strictes de traçabilité pour éviter toute contestation ou accusation de vol." },
            { text: "Les jeter à la poubelle avec les déchets", isCorrect: false },
            { text: "Les confier au premier passant venu dans la rue", isCorrect: false }
        ]
    },
    {
        question: "Quel est le comportement du Chef d'Agrès face à un refus d'hospitalisation d'un patient mineur opposé par ses parents alors que l'état de santé présente un risque vital manifeste ?",
        tags: ["Chef d'Agrès", "Mineurs", "Urgence vitale"],
        answerOptions: [
            { text: "Laisser repartir l'enfant sans rien faire", isCorrect: false },
            { text: "Informer immédiatement le médecin régulateur du SAMU et le CTA-CODIS : en cas de danger vital immédiat et de refus obstiné des parents, l'ordonnance de protection ou l'avis du procureur/médecin s'impose (mesure de sauvetage d'urgence)", isCorrect: true, rationale: "L'autorité parentale ne peut primer sur le pronostic vital engagé d'un mineur. La régulation médicale et les autorités judiciaires doivent être saisies en urgence pour forcer la prise en charge." },
            { text: "Demander aux parents de signer une simple décharge et rentrer au centre", isCorrect: false },
            { text: "Confier l'enfant à un voisin", isCorrect: false }
        ]
    },
    {
        question: "Dans le cadre de l'utilisation du matériel d'oxygénothérapie à bord du VSAV, quelle est la règle de sécurité incontournable liée aux corps gras que le Chef d'Agrès doit rappeler à son équipe ?",
        tags: ["Chef d'Agrès", "Oxygène", "Sécurité"],
        answerOptions: [
            { text: "S'enduire les mains de crème grasse avant de manipuler les bouteilles", isCorrect: false },
            { text: "Interdire formellement tout contact entre les corps gras (huiles, graisses, corps hydrocarbonés) et le matériel sous oxygène en raison du risque d'inflammation spontanée violente", isCorrect: true, rationale: "L'oxygène pur accélère de manière fulgurante la combustion. En présence de corps gras, une simple pression peut déclencher une explosion ou un départ de feu instantané." },
            { text: "Utiliser de la graisse de moteur pour lubrifier le manodétendeur", isCorrect: false },
            { text: "Fumer à côté de la bouteille d'oxygène ouverte", isCorrect: false }
        ]
    },
    {
        question: "Comment le Chef d'Agrès organise-t-il le retour d'intervention (débriefing à chaud) avec son équipage lors d'une mission difficile ou particulièrement éprouvante sur le plan psychologique ?",
        tags: ["Chef d'Agrès", "Débriefing", "Soutien psychologique"],
        answerOptions: [
            { text: "Interdire à quiconque d'en parler pour oublier", isCorrect: false },
            { text: "Favoriser l'expression verbale bienveillante des ressentis, identifier les éventuels signes de stress aigu et proposer l'accompagnement par le service de santé (SSSMI / PSN) si nécessaire", isCorrect: true, rationale: "Le débriefing à chaud et l'écoute active préviennent l'installation de troubles psychologiques post-traumatiques chez les intervenants." },
            { text: "Moquer les agents qui expriment des émotions", isCorrect: false },
            { text: "Simuler comme s'il ne s'était rien passé", isCorrect: false }
        ]
    },
    {
        question: "Quel est le rôle du Chef d'Agrès lorsqu'il se présente au poste de garde ou à l'accueil d'un service d'urgences hospitalier avec sa victime ?",
        tags: ["Chef d'Agrès", "Accueil urgences"],
        answerOptions: [
            { text: "Laisser le brancard dans le couloir sans prévenir personne et repartir", isCorrect: false },
            { text: "Se présenter à l'infirmière d'accueil et d'orientation (IAO) ou au médecin, effectuer la transmission formelle du dossier et du patient, et libérer le brancard dans le respect des conventions locales", isCorrect: true, rationale: "La passation administrative et médicale aux urgences doit être rigoureuse pour assurer la continuité des soins et éviter l'immobilisation injustifiée du VSAV." },
            { text: "Installer la victime dans la salle d'attente générale sans bilan", isCorrect: false },
            { text: "Exiger d'être soigné lui-même en priorité", isCorrect: false }
        ]
    },
    {
        question: "Quelle est la conduite à tenir du Chef d'Agrès face à une découverte macabre (corps sans vie en état de décomposition ou suite à un suicide avéré) lors d'une intervention ?",
        tags: ["Chef d'Agrès", "Victime décédée", "Préservation des indices"],
        answerOptions: [
            { text: "Déplacer le corps et nettoyer la pièce pour faire propre", isCorrect: false },
            { text: "Ne rien toucher, ne modifier en aucun cas la scène, confirmer le décès si évident sans altérer les indices et demander l'engagement immédiat des forces de l'ordre et de la police technique", isCorrect: true, rationale: "La scène d'un décès suspect ou d'un suicide est une scène judiciaire. La règle absolue est de ne rien déplacer pour préserver l'enquête des forces de l'ordre." },
            { text: "Ffouiller les poches de la victime pour trouver ses papiers d'identité", isCorrect: false },
            { text: "Laisser entrer tous les curieux dans la pièce", isCorrect: false }
        ]
    },
    {
        question: "Comment le Chef d'Agrès gère-t-il la hiérarchie des urgences lors d'un bilan croisé sur une victime présentant à la fois une détresse respiratoire aiguë et une fracture ouverte de jambe ?",
        tags: ["Chef d'Agrès", "Hiérarchie des secours", "ABCDE"],
        answerOptions: [
            { text: "Soigner en priorité la fracture de jambe en ignorant la respiration", isCorrect: false },
            { text: "Appliquer rigoureusement la méthodologie de l'examen d'urgence (ABCDE) : traiter en priorité absolue la détresse vitale (respiratoire), puis traiter la lésion secondaire (fracture)", isCorrect: true, rationale: "La règle fondamentale du secourisme opérationnel est de traiter les détresses vitales par ordre de priorité (A, B, C) avant les atteintes anatomiques non vitales." },
            { text: "Attendre que les deux détresses s'annulent d'elles-mêmes", isCorrect: false },
            { text: "Traiter les deux en même temps de manière désordonnée", isCorrect: false }
        ]
    },
	{
        question: "Vous êtes requis pour un accouchement imminent à domicile. Le bébé se présente par le siège. Quelle est la consigne primordiale pour le Chef d'Agrès ?",
        tags: ["Chef d'Agrès", "Obstétrique"],
        answerOptions: [
            { text: "Tirer fermement sur le corps du bébé pour l'extraire au plus vite", isCorrect: false },
            { text: "Ne jamais tracter le bébé, le laisser expulser spontanément jusqu'à l'apparition des omoplates, encourager la maman et demander immédiatement le renfort médicalisé (SMUR)", isCorrect: true, rationale: "En présentation du siège, toute traction prématurée risque de bloquer la tête ou de léser le nouveau-né. L'abstention de traction et la régulation SMUR sont capitales." },
            { text: "Quitter les pièces pour chercher des couvertures", isCorrect: false },
            { text: "Demander au père de pratiquer les manœuvres", isCorrect: false }
        ]
    },
    {
        question: "Quel est le comportement du Chef d'Agrès face à une victime d'agression sexuelle ou de viol manifestement choquée prise en charge par son équipage ?",
        tags: ["Chef d'Agrès", "Victimologie", "Violences"],
        answerOptions: [
            { text: "L'interroger de manière insistante sur les détails intimes des faits", isCorrect: false },
            { text: "L'isoler dans le respect de sa dignité, limiter les intervenants au strict minimum, rassurer, ne pas modifier l'état vestimentaire (préservation des indices) et alerter les forces de l'ordre de manière confidentielle", isCorrect: true, rationale: "La prise en charge d'une victime de violences sexuelles nécessite une empathie maximale, la protection de la vie privée et la préservation rigoureuse des indices judiciaires." },
            { text: "Laisser la victime se laver et changer de vêtements avant l'arrivée de la police", isCorrect: false },
            { text: "Diffuser l'intervention sur les réseaux sociaux de la caserne", isCorrect: false }
        ]
    },
    {
        question: "Lors d'une intervention sur la voie publique, un conducteur tiers refuse de céder le passage à votre VSAV alors que vous êtes en départ d'urgence (gyrophares et 2-tons actifs). Quelle est la réaction du Chef d'Agrès ?",
        tags: ["Chef d'Agrès", "Conduite", "Sécurité routière"],
        answerOptions: [
            { text: "Doubler par la droite en percutant volontairement le véhicule pour le punir", isCorrect: false },
            { text: "Anticiper, adapter l'allure, modérer la vitesse aux intersections pour parer aux comportements imprudents et éviter tout sur-accident, sans engager de bras de fer routier", isCorrect: true, rationale: "Le statut prioritaire n'autorise pas la mise en danger volontaire. Le chef d'agrès doit veiller à ce que le conducteur garde le contrôle et évite toute collision." },
            { text: "Descendre du VSAV pour aller frapper à la vitre du conducteur", isCorrect: false },
            { text: "Couper l'électricité générale du camion", isCorrect: false }
        ]
    },
    {
        question: "Quel est le rôle du Chef d'Agrès lorsqu'il constate la présence de déchets amiantés ou de matériaux amiantés détériorés lors d'une intervention pour un incendie de cabanon ?",
        tags: ["Chef d'Agrès", "Risques environnementaux", "Amiante"],
        answerOptions: [
            { text: "Balayer vigoureusement les fibres d'amiante à sec avec un balai", isCorrect: false },
            { text: "Identifier le risque, limiter la dispersion des poussières, proscrire le balayage à sec et consigner l'information dans son compte-rendu pour informer les autorités et protéger l'équipage (EPI respiratoires adaptés si exposition)", isCorrect: true, rationale: "L'amiante libère des fibres cancérigènes par inhalation. Le chef d'agrès doit éviter toute mise en suspension (pas de balayage à sec) et porter les protections adaptées." },
            { text: "Manger les résidus pour tester leur toxicité", isCorrect: false },
            { text: "Demander aux enfants du quartier de ramasser les plaques", isCorrect: false }
        ]
    },
    {
        question: "Comment le Chef d'Agrès gère-t-il l'utilisation du DAE (Défibrillateur Automatisé Externe) sur un enfant de moins de 8 ans ou de corpulence pédiatrique si le VSAV ne dispose pas d'électrodes pédiatriques spécifiques ?",
        tags: ["Chef d'Agrès", "Pédiatrie", "DAE"],
        answerOptions: [
            { text: "Renoncer à utiliser le défibrillateur et croiser les bras", isCorrect: false },
            { text: "Utiliser les électrodes adultes en suivant les préconisations de placement (une sur la poitrine et une dans le dos pour éviter le court-circuit des pales) tout en avisant le régulateur médical", isCorrect: true, rationale: "En l'absence de matériel pédiatrique, l'utilisation des électrodes adultes avec un positionnement antéro-postérieur permet de réaliser la défibrillation si elle est indiquée." },
            { text: "Découper les électrodes adultes avec des ciseaux de cuisine au hasard", isCorrect: false },
            { text: "Attendre l'âge de 18 ans pour relancer le cœur", isCorrect: false }
        ]
    },
    {
        question: "Quel est le protocole de transmission des informations au médecin régulateur du SAMU concernant une victime en arrêt cardiorespiratoire (ACR) ancienne dont la réanimation est débutée ?",
        tags: ["Chef d'Agrès", "ACR", "Régulation"],
        answerOptions: [
            { text: "Ne pas appeler le SAMU et décider seul de l'arrêt des manœuvres", isCorrect: false },
            { text: "Transmettre immédiatement le bilan complet (durée de l'ictus, absence de témoin, rythme analysé par le DAE, gestes réalisés) pour obtenir la décision médicale d'arrêt ou de poursuite des manœuvres", isCorrect: true, rationale: "Seul le médecin régulateur (SAMU) est habilité à prononcer le décès ou à autoriser l'arrêt d'une réanimation cardiopulmonaire." },
            { text: "Attendre la fin de la garde pour rédiger un courrier postal", isCorrect: false },
            { text: "Envoyer un SMS simple sans préciser les paramètres", isCorrect: false }
        ]
    },
    {
        question: "Vous intervenez dans un local de stockage de produits phytosanitaires (pesticides). L'équipier ressent des nausées et des vertiges. Quelle est l'action immédiate du Chef d'Agrès ?",
        tags: ["Chef d'Agrès", "Risques chimiques", "Intoxication"],
        answerOptions: [
            { text: "Lui donner de l'eau du robinet à boire en grande quantité", isCorrect: false },
            { text: "Ordonner l'évacuation immédiate de l'équipier en zone saine (amont/vent dans le dos), le décontaminer si nécessaire de ses vêtements souillés, et demander l'engagement des secours spécialisés", isCorrect: true, rationale: "L'intoxication par les pesticides par voie cutanée ou respiratoire impose un retrait immédiat de la zone polluée, le retrait des vêtements souillés et une alerte médicale." },
            { text: "Lui demander de retourner chercher les bidons", isCorrect: false },
            { text: "Fermer les portes et rester confinés à l'intérieur", isCorrect: false }
        ]
    },
    {
        question: "Quel est le comportement du Chef d'Agrès face à des témoins agressifs qui filment l'intervention en insultant l'équipe et en entravant la sortie du brancard du VSAV ?",
        tags: ["Chef d'Agrès", "Sécurité", "Agression"],
        answerOptions: [
            { text: "Engager une bagarre générale pour donner l'exemple", isCorrect: false },
            { text: "Maintenir son sang-froid, protéger l'accès au véhicule, demander le renfort immédiat des forces de l'ordre par le CTA-CODIS et s'isoler si l'intégrité physique est menacée", isCorrect: true, rationale: "Le chef d'agrès doit privilégier la désescalade, la protection de son équipage et requérir la force publique pour rétablir l'ordre sans céder à la provocation." },
            { text: "Abandonner la victime au milieu de la rue", isCorrect: false },
            { text: "Offrir des cadeaux aux agresseurs pour les calmer", isCorrect: false }
        ]
    },
    {
        question: "Comment le Chef d'Agrès gère-t-il la prise en charge d'une personne sourde ou malentendante lors d'une intervention médicale en urgence ?",
        tags: ["Chef d'Agrès", "Communication", "Handicap"],
        answerOptions: [
            { text: "Parler de plus en plus fort en criant dans ses oreilles", isCorrect: false },
            { text: "Utiliser l'écriture sur papier, les pictogrammes, faire preuve de visuel, utiliser des applications de traduction ou s'appuyer sur un proche si disponible pour rassurer", isCorrect: true, rationale: "La barrière de la communication auditive nécessite des adaptations visuelles et écrites pour expliquer les soins et rassurer la victime." },
            { text: "Ignorer le handicap et ne rien expliquer", isCorrect: false },
            { text: "Refuser de transporter la personne", isCorrect: false }
        ]
    },
    {
        question: "Quel est l'objectif d'un retour d'expérience (RETEX) opérationnel mené par le Chef d'Agrès après une intervention atypique ou complexe ?",
        tags: ["Chef d'Agrès", "RETEX", "Pédagogie"],
        answerOptions: [
            { text: "Chercher un coupable à blâmer publiquement", isCorrect: false },
            { text: "Analyser de manière constructive les points forts, les difficultés rencontrées, partager les enseignements pour améliorer les pratiques futures de l'équipe", isCorrect: true, rationale: "Le RETEX vise à progresser collectivement en analysant objectivement le déroulement de l'intervention sans stigmatiser les individus." },
            { text: "Inventer de nouvelles lois nationales", isCorrect: false },
            { text: "Passer sous silence les erreurs commises", isCorrect: false }
        ]
    },
    {
        question: "Vous êtes requis sur un chantier pour un ouvrier blessé au fond d'une fouille de 4 mètres de profondeur non étayée. Quelle est la règle tactique du Chef d'Agrès VSAV ?",
        tags: ["Chef d'Agrès", "Sauvetage-déblaiement", "Sécurité"],
        answerOptions: [
            { text: "Descendre immédiatement au fond de la fouille pour ramener la victime", isCorrect: false },
            { text: "Interdire l'accès à la fouille en raison du risque d'effondrement des parois, sécuriser les abords et demander l'engagement d'une équipe spécialisée en sauvetage-déblaiement et du SMUR", isCorrect: true, rationale: "Une fouille non étayée présente un risque mortel d'enfouissement. Le personnel du VSAV ne doit pas s'exposer et doit commander les moyens spécialisés (SD / GRIMP)." },
            { text: "Creuser les côtés avec des pelles de camping", isCorrect: false },
            { text: "Demander aux autres ouvriers de sauter dedans", isCorrect: false }
        ]
    },
    {
        question: "Comment le Chef d'Agrès gère-t-il l'administration d'oxygène à une victime souffrant de broncho-pneumopathie chronique obstructive (BPCO) en détresse respiratoire ?",
        tags: ["Chef d'Agrès", "Oxygénothérapie", "BPCO"],
        answerOptions: [
            { text: "Lui administrer de l'oxygène pur à 15 litres par minute au masque haute concentration sans avis", isCorrect: false },
            { text: "Respecter scrupuleusement les consignes de la régulation médicale (débit contrôlé, souvent par lunettes à bas débit ou au masque à concentration régulée) pour éviter l'hyperoxie délétère", isCorrect: true, rationale: "Chez le patient BPCO, un excès d'oxygène peut supprimer le stimulus respiratoire hypoxic et aggraver la détresse. La prudence et l'avis du SAMU sont de mise." },
            { text: "Lui interdire totalement de respirer", isCorrect: false },
            { text: "Lui faire faire de l'apnée volontaire", isCorrect: false }
        ]
    },
    {
        question: "Quel est le comportement du Chef d'Agrès face à une personne âgée isolée, retrouvée en état de dénutrition avancée et de grande incurie à son domicile ?",
        tags: ["Chef d'Agrès", "Social", "Personnes vulnérables"],
        answerOptions: [
            { text: "Laisser la personne dans sa saleté sans rien faire", isCorrect: false },
            { text: "Assurer la prise en charge sanitaire d'urgence, orienter vers l'hôpital si nécessaire, et rédiger un signalement circonstancié aux services sociaux de la mairie ou du conseil départemental", isCorrect: true, rationale: "La protection des personnes vulnérables en situation de danger social ou sanitaire passe par une alerte médicale et un signalement social institutionnel." },
            { text: "Lui donner une amende pour non-propreté du logement", isCorrect: false },
            { text: "Lui confier la garde du camion de pompiers", isCorrect: false }
        ]
    },
    {
        question: "Lors d'une intervention pour une collision frontale à haute cinétique, un passager avant se plaint de douleurs cervicales intenses et d'une impossibilité de bouger les jambes. Que fait le Chef d'Agrès ?",
        tags: ["Chef d'Agrès", "Traumatisme", "Rachis"],
        answerOptions: [
            { text: "Lui dire de sortir en courant en sautant de la voiture", isCorrect: false },
            { text: "Maintenir la tête en position neutre, interdire toute mobilisation intempestive, poser un collier cervical adapté et conditionner la victime dans l'attente du SMUR", isCorrect: true, rationale: "Une suspicion de lésion médullaire impose le maintien strict de l'axe tête-cou-tronc pour éviter d'aggraver un traumatisme de la moelle épinière." },
            { text: "Lui masser vigoureusement les jambes pour le décoincer", isCorrect: false },
            { text: "Le lever de force pour le faire marcher", isCorrect: false }
        ]
    },
    {
        question: "Quel est le rôle du Chef d'Agrès concernant la vérification de la propreté et de la stérilité des pinces à clamp et du kit d'accouchement à bord du VSAV ?",
        tags: ["Chef d'Agrès", "Matériel", "Obstétrique"],
        answerOptions: [
            { text: "Vérifier que les emballages sont intacts, non périmés et que le lot est complet à chaque prise de garde", isCorrect: true, rationale: "Le kit d'accouchement stérile doit être rigoureusement contrôlé pour éviter tout risque d'infection grave (septicémie) lors d'un accouchement inopiné." },
            { text: "Utiliser des ciseaux rouillés trouvés dans le jardin", isCorrect: false },
            { text: "Ne jamais ouvrir la boîte avant l'intervention", isCorrect: false },
            { text: "Laisser les kits périmés depuis 10 ans dans les tiroirs", isCorrect: false }
        ]
    },
    {
        question: "Vous êtes requis pour un malaise sur la voie publique en période de canicule estivale extrême. Quels sont les signes d'alerte spécifiques d'un coup de chaleur majeur que le Chef d'Agrès doit repérer ?",
        tags: ["Chef d'Agrès", "Canicule", "Coup de chaleur"],
        answerOptions: [
            { text: "Une simple fatigue passagère sans fièvre", isCorrect: false },
            { text: "Une hyperthermie élevée (> 40°C), des troubles de la conscience (confusion, coma), une peau chaude et sèche (absence de sueurs) nécessitant un refroidissement d'urgence", isCorrect: true, rationale: "Le coup de chaleur d'exercice ou d'environnement est une urgence vitale absolue nécessitant un refroidissement immédiat (mouillage, ventilation) et une hospitalisation rapide." },
            { text: "Une envie de manger de la glace uniquement", isCorrect: false },
            { text: "Un simple frisson de froid", isCorrect: false }
        ]
    },
    {
        question: "Comment le Chef d'Agrès gère-t-il une fuite d'hydrocarbures sur la chaussée consécutive à un accident de la circulation en attendant les moyens de dépollution ?",
        tags: ["Chef d'Agrès", "Risques routiers", "Environnement"],
        answerOptions: [
            { text: "Y jeter des allumettes pour brûler le carburant sur place", isCorrect: false },
            { text: "Balisage de la zone, interdiction de fumer ou de toute source d'ignition, mise en place de batardeaux ou épandage de produits absorbants si formellement formé et autorisé, et demande d'un FPT", isCorrect: true, rationale: "Les hydrocarbures répandus présentent un risque d'incendie et de glissance majeur. Le chef d'agrès sécurise la zone et demande les moyens adaptés." },
            { text: "Laisser les automobilistes rouler dedans à pleine vitesse", isCorrect: false },
            { text: "Nettoyer l'essence à l'eau de Javel pure", isCorrect: false }
        ]
    },
    {
        question: "Quel est l'impact réglementaire et opérationnel d'un refus de transport opposé par un patient majeur mais manifestement alcoolisé et présentant un traumatisme crânien suite à une chute ?",
        tags: ["Chef d'Agrès", "Alcoolémie", "Traumatisme crânien"],
        answerOptions: [
            { text: "Le laisser signer une décharge et le confier à la rue", isCorrect: false },
            { text: "Considérer que l'altération des facultés mentales par l'alcool invalide le consentement éclairé : informer le SAMU, demander une régulation médicale renforcée et envisager l'avis des forces de l'ordre pour une mise en sûreté", isCorrect: true, rationale: "Un patient alcoolisé et blessé à la tête n'est pas en état de consentir valablement. Son refus ne peut pas être accepté sans un avis médical et une mise en sécurité." },
            { text: "Lui donner de l'alcool pour le réveiller", isCorrect: false },
            { text: "L'attacher au pare-chocs du VSAV", isCorrect: false }
        ]
    },
    {
        question: "Quel est le comportement du Chef d'Agrès face à un équipier qui refuse de porter les équipements de protection individuelle (gants à usage unique, lunettes de protection) lors d'une prise en charge à risque biologique ?",
        tags: ["Chef d'Agrès", "EPI", "Sécurité au travail"],
        answerOptions: [
            { text: "Lui dire que ce n'est pas grave et de faire sans", isCorrect: false },
            { text: "Lui imposer fermement le port des EPI obligatoires pour sa propre protection sanitaire et celle du patient, conformément aux règles d'hygiène et de sécurité du Sdis", isCorrect: true, rationale: "Le chef d'agrès est garant de la sécurité de ses agents. Le port des gants et des protections contre le risque biologique est une règle absolue non négociable." },
            { text: "Le féliciter pour son courage", isCorrect: false },
            { text: "Lui confier les tâches les plus sales sans protection", isCorrect: false }
        ]
    },
    {
        question: "Comment le Chef d'Agrès procède-t-il lors de la transmission radio d'un bilan chiffré pour une victime présentant de multiples traumatismes (polytraumatisé) ?",
        tags: ["Chef d'Agrès", "Radio", "Polytraumatisé"],
        answerOptions: [
            { text: "Donner uniquement la couleur des chaussures de la victime", isCorrect: false },
            { text: "Transmettre un bilan clair structuré selon la méthode ABCDE (Airway, Breathing, Circulation, Disability, Exposure), en précisant la cinétique, l'état de conscience et les paramètres vitaux", isCorrect: true, rationale: "Un polytraumatisé nécessite une description rigoureuse et standardisée pour permettre au médecin régulateur de déclencher immédiatement les équipes adaptées (SMUR, héliportage)." },
            { text: "Dire simplement 'tout va bien' et raccrocher", isCorrect: false },
            { text: "Demander au patient de parler à la radio à sa place", isCorrect: false }
        ]
    },
    {
        question: "Vous intervenez pour un enfant ayant ingéré un produit caustique (déboucheur d'évier). Quelle est la consigne absolue d'action et de contre-indication pour le Chef d'Agrès ?",
        tags: ["Chef d'Agrès", "Intoxication", "Contre-indications"],
        answerOptions: [
            { text: "Faire vomir l'enfant immédiatement en lui enfonçant les doigts dans la gorge", isCorrect: false },
            { text: "Interdire formellement de faire vomir l'enfant et d'administrer de l'eau (risque de double brûlure ou de perforation), rassurer, garder au repos et contacter immédiatement le SAMU / Centre Antipoison", isCorrect: true, rationale: "Faire vomir ou donner à boire en cas d'ingestion de caustique aggrave considérablement les lésions œsophagiennes et gastriques. C'est une contre-indication absolue." },
            { text: "Lui faire avaler du vinaigre et du sel", isCorrect: false },
            { text: "Attendre le lendemain matin pour voir l'évolution", isCorrect: false }
        ]
    },
    {
        question: "Quel est le rôle du Chef d'Agrès dans la gestion du stress et de la fatigue opérationnelle de son équipe au cours d'une garde de nuit difficile ?",
        tags: ["Chef d'Agrès", "Management", "Gestion du stress"],
        answerOptions: [
            { text: "Humilier les agents fatigués pour les stimuler", isCorrect: false },
            { text: "Planifier des temps de récupération dès que le secteur le permet, surveiller l'état de vigilance et maintenir une communication bienveillante et structurée", isCorrect: true, rationale: "Le maintien de la vigilance passe par une gestion attentive du repos et une cohésion d'équipe solide favorisée par un management adapté." },
            { text: "Interdire de dormir pendant 48 heures d'affilée", isCorrect: false },
            { text: "Conduire le camion en dormant lui-même", isCorrect: false }
        ]
    },
    {
        question: "Comment le Chef d'Agrès gère-t-il la prise en charge d'une victime qui présente une crise d'angoisse aiguë (hyperventilation, tétanie) mimer une détresse cardiaque ?",
        tags: ["Chef d'Agrès", "Crise d'angoisse", "Secours"],
        answerOptions: [
            { text: "Lui donner un sac en plastique à respirer de force de manière agressive", isCorrect: false },
            { text: "Rassurer la victime, l'isoler des sources de stress, l'inviter à ralentir sa respiration, contrôler les paramètres vitaux et demander un avis médical pour écarter toute pathologie organique", isCorrect: true, rationale: "La crise d'angoisse nécessite une approche rassurante et calme (désescalade psychologique) tout en éliminant par le bilan l'hypothèse d'une urgence cardiaque." },
            { text: "L'attacher au brancard et l'insulter", isCorrect: false },
            { text: "L'abandonner sur place en disant que c'est du cinéma", isCorrect: false }
        ]
    },
    {
        question: "Quel est l'intérêt opérationnel majeur de renseigner de manière exhaustive et lisible la Fiche de Bilan Secouriste (FBS) transmise à l'hôpital ?",
        tags: ["Chef d'Agrès", "Administratif", "FBS"],
        answerOptions: [
            { text: "Permettre aux médecins de connaître précisément l'évolution des paramètres et des actes accomplis depuis la prise en charge initiale", isCorrect: true, rationale: "La traçabilité des paramètres et de leur cinétique est une aide précieuse pour l'équipe médicale hospitalière qui prend le relais." },
            { text: "Servir de roman de gare pour les infirmières", isCorrect: false },
            { text: "Justifier le nombre de kilomètres du camion", isCorrect: false },
            { text: "Rien du tout, c'est purement décoratif", isCorrect: false }
        ]
    },
    {
        question: "Vous arrivez sur les lieux d'un accident de la circulation impliquant un véhicule électrique (VE). Quelle est la spécificité sécuritaire pour le Chef d'Agrès VSAV ?",
        tags: ["Chef d'Agrès", "Véhicules électriques", "Sécurité"],
        answerOptions: [
            { text: "Couper les câbles orange vifs avec une pince coupante classique", isCorrect: false },
            { text: "Identifier le type de véhicule, s'assurer de l'immobilisation complète (frein de parking, roues calées), ne pas toucher les composants haute tension (câbles orange) et se renseigner sur les spécificités constructeur", isCorrect: true, rationale: "Les véhicules électriques possèdent des circuits haute tension potentiellement mortels. Le respect des zones de danger et la non-intervention sur les composants électriques s'imposent." },
            { text: "Jeter de l'eau sur la batterie pour la refroidir instantanément", isCorrect: false },
            { text: "Démonter la batterie avec un tournevis", isCorrect: false }
        ]
    },
    {
        question: "Comment le Chef d'Agrès réagit-il face à une réclamation ou une critique véhémente d'un patient mécontent du délai d'intervention des secours à son arrivée au domicile ?",
        tags: ["Chef d'Agrès", "Communication", "Gestion des mécontentements"],
        answerOptions: [
            { text: "Lui crier dessus en lui expliquant qu'il n'a pas à se plaindre", isCorrect: false },
            { text: "Faire preuve d'écoute active, garder son calme, expliquer factuellement que l'engagement dépend de la régulation et des priorités opérationnelles du moment, sans entrer dans le conflit", isCorrect: true, rationale: "Le professionnalisme et l'empathie désamorcent les tensions. Le chef d'agrès représente l'institution et doit adopter une posture mesurée." },
            { text: "Tourner les talons et repartir sans soigner", isCorrect: false },
            { text: "Lui donner une amende pour insulte", isCorrect: false }
        ]
    },
    {
        question: "Quel est le protocole de désinfection de la civière et des surfaces du VSAV après le transport d'une victime porteuse d'une gastro-entérite aiguë hautement contagieuse ?",
        tags: ["Chef d'Agrès", "Hygiène", "Désinfection"],
        answerOptions: [
            { text: "Passer un simple coup de chiffon sec", isCorrect: false },
            { text: "Appliquer le protocole de bionettoyage avec des produits virucides et sporicides adaptés aux normes en vigueur au sein du Sdis pour détruire les agents pathogènes", isCorrect: true, rationale: "Les gastro-entérites virales (norovirus) persistent sur les surfaces. Une désinfection rigoureuse avec les produits virucides appropriés est obligatoire." },
            { text: "Fermer le camion pendant 3 jours sans rien faire", isCorrect: false },
            { text: "Laver les surfaces à l'eau claire de pluie", isCorrect: false }
        ]
    },
    {
        question: "Vous prenez en charge une victime présentant une plaie thoracique soufflante (plaie par arme blanche ou objet pointu). Quelle est la conduite tactique encadrée pour le Chef d'Agrès ?",
        tags: ["Chef d'Agrès", "Traumatisme thoracique"],
        answerOptions: [
            { text: "Laisser la plaie ouverte sans protection pour aérer", isCorrect: false },
            { text: "Appliquer un pansement occlusif non étanche sur trois côtés (ou dispositif adéquat selon doctrine) pour éviter le pneumothorax suffocant, tout en surveillant la détresse respiratoire et demandant le SMUR", isCorrect: true, rationale: "Une plaie soufflante perturbe la mécanique respiratoire. Un pansement partiellement occlusif (trois côtés) permet l'évacuation de l'air tout en empêchant l'entrée d'air extérieur." },
            { text: "Retirer l'objet planté en tirant un grand coup", isCorrect: false },
            { text: "Mettre de l'alcool à 90 degrés sur la plaie", isCorrect: false }
        ]
    },
    {
        question: "Comment le Chef d'Agrès gère-t-il la communication avec les radios locales ou les réseaux sociaux qui publient des informations erronées en direct sur l'intervention en cours ?",
        tags: ["Chef d'Agrès", "Communication", "Médias"],
        answerOptions: [
            { text: "Leur répondre en direct sur un ton agressif", isCorrect: false },
            { text: "Ne pas communiquer directement avec la presse non habilitée, renvoyer la demande vers le service communication ou l'officier communication du Sdis, et se concentrer sur la mission", isCorrect: true, rationale: "Les intervenants de terrain ne sont pas habilités à communiquer avec les médias. La gestion de la communication institutionnelle obéit à une chaîne dédiée." },
            { text: "Créer un faux compte pour insulter les journalistes", isCorrect: false },
            { text: "Donner les noms et adresses des victimes aux blogueurs", isCorrect: false }
        ]
    },
    {
        question: "Quel est le comportement réglementaire du Chef d'Agrès en cas de perte ou de vol d'un matériel sensible (ex: oxymètre de pouls, téléphone de service) en intervention ?",
        tags: ["Chef d'Agrès", "Matériel", "Administratif"],
        answerOptions: [
            { text: "Ne rien dire pour éviter les reproches de sa hiérarchie", isCorrect: false },
            { text: "Rendre compte immédiatement à sa hiérarchie (chef de centre) et rédiger un rapport circonstancié pour permettre le remplacement et la traçabilité administrative", isCorrect: true, rationale: "Toute perte ou vol de matériel doté doit faire l'objet d'un signalement hiérarchique immédiat et d'un rapport écrit." },
            { text: "Acheter un matériel de substitution sur ses deniers personnels au supermarché", isCorrect: false },
            { text: "Accuser un collègue faussement", isCorrect: false }
        ]
    },
    {
        question: "Vous intervenez pour un malaise cardiaque d'un patient à son domicile. L'équipe réalise un massage cardiaque et pose le DAE qui délivre un choc. Que doit préparer le Chef d'Agrès dans la continuité immédiate ?",
        tags: ["Chef d'Agrès", "ACR", "Réanimation"],
        answerOptions: [
            { text: "Préparer le matériel pour la reprise immédiate des compressions thoraciques dès l'invitation du DAE et anticiper l'arrivée du SMUR en préparant l'accès au brancard", isCorrect: true, rationale: "Après un choc, le DAE demande de reprendre immédiatement la RCP. Le chef d'agrès coordonnera l'équipe et fluidifiera l'arrivée du renfort médicalisé." },
            { text: "Arrêter les manœuvres pour ranger le défibrillateur dans sa boîte", isCorrect: false },
            { text: "Aller chercher du café pour les secouristes", isCorrect: false },
            { text: "Demander au patient de se lever pour aller aux urgences à pied", isCorrect: false }
        ]
    },
    {
        question: "Comment le Chef d'Agrès gère-t-il la présence de mineurs en bas âge laissés seuls dans un appartement suite à l'hospitalisation en urgence de leur parent isolé ?",
        tags: ["Chef d'Agrès", "Mineurs", "Protection de l'enfance"],
        answerOptions: [
            { text: "Les laisser seuls enfermés dans l'appartement sans surveillance", isCorrect: false },
            { text: "Assurer leur mise en sécurité, contacter le CTA-CODIS pour aviser les services de police/gendarmerie et le magistrat de permanence (ou service d'aide sociale à l'enfance) afin de les prendre en charge", isCorrect: true, rationale: "Des enfants mineurs ne peuvent jamais être laissés seuls sans représentant légal. Le chef d'agrès doit coordonner leur prise en charge sécurisée par les forces de l'ordre." },
            { text: "Leur donner les clés du VSAV pour qu'ils s'amusent", isCorrect: false },
            { text: "Les emmener en vacances dans sa famille", isCorrect: false }
        ]
    },
    {
        question: "Quel est l'objectif d'une vérification des niveaux (huile, eau, lave-glace) et de la pression des pneumatiques du VSAV par le Chef d'Agrès et son conducteur ?",
        tags: ["Chef d'Agrès", "Vérification véhicule", "Sécurité"],
        answerOptions: [
            { text: "Perdre du temps pour éviter de partir en intervention", isCorrect: false },
            { text: "Garantir la fiabilité mécanique du véhicule d'urgence et la sécurité routière lors des départs en intervention sous avertisseurs", isCorrect: true, rationale: "La vérification technique quotidienne garantit qu'aucune panne mécanique ne viendra compromettre un départ d'urgence ou la sécurité de l'équipage sur la route." },
            { text: "Faire plaisir au mécanicien de la caserne", isCorrect: false },
            { text: "Alourdir le véhicule inutilement", isCorrect: false }
        ]
    },
    {
        question: "Vous êtes requis pour une personne présentant des brûlures chimiques cutanées suite à la projection d'acide. Quelle est la règle d'or immédiate de premiers secours sous la direction du Chef d'Agrès ?",
        tags: ["Chef d'Agrès", "Brûlures chimiques"],
        answerOptions: [
            { text: "Mettre de la base (vinaigre ou autre produit) pour neutraliser sans rincer", isCorrect: false },
            { text: "Procéder immédiatement à un lavage abondant et prolongé à l'eau tempérée de la zone touchée tout en retirant les vêtements souillés avec des gants de protection", isCorrect: true, rationale: "Le lavage immédiat et prolongé à l'eau est la mesure prioritaire absolue pour diluer et éliminer le produit chimique avant qu'il ne détruise les tissus en profondeur." },
            { text: "Laisser sécher le produit à l'air libre", isCorrect: false },
            { text: "Frotter la peau avec une brosse dure", isCorrect: false }
        ]
    },
    {
        question: "Comment le Chef d'Agrès gère-t-il la confidentialité des informations médicales lorsqu'il dicte son bilan sur un canal radio partagé ou saturé ?",
        tags: ["Chef d'Agrès", "Radio", "Secret professionnel"],
        answerOptions: [
            { text: "Crier le nom, le prénom, la pathologie et les codes secrets de la victime très fort", isCorrect: false },
            { text: "Utiliser un langage codé ou normé strict, éviter de citer des noms complets en clair si le canal est public, et transmettre les données sensibles de manière sécurisée (téléphone direct ou canal chiffré si disponible)", isCorrect: true, rationale: "Le respect du secret professionnel s'applique aussi aux ondes radio. Les informations nominatives doivent être protégées conformément à la déontologie." },
            { text: "Diffuser la conversation sur haut-parleur dans toute la rue", isCorrect: false },
            { text: "Ne transmettre aucun élément médical par radio", isCorrect: false }
        ]
    },
    {
        question: "Quel est le comportement du Chef d'Agrès face à une victime d'accident de la circulation qui panique et veut s'extraire seule de son véhicule alors qu'elle présente un risque de traumatisme vertébral ?",
        tags: ["Chef d'Agrès", "AVP", "Maintien de l'axe"],
        answerOptions: [
            { text: "L'aider à sauter par la fenêtre en la tirant par les bras", isCorrect: false },
            { text: "Rassurer la victime, lui expliquer les risques, maintenir un contact physique pour l'inciter à ne pas bouger et stabiliser sa tête en attendant les moyens de désincarcération ou de relevage", isCorrect: true, rationale: "Il faut empêcher un patient traumatisé de faire des mouvements brusques qui pourraient aggraver une lésion médullaire, tout en le rassurant." },
            { text: "L'attacher au volant avec une corde", isCorrect: false },
            { text: "Quitter les lieux pour la laisser se débrouiller", isCorrect: false }
        ]
    },
    {
        question: "Quel est l'intérêt de la transmission d'une 'heure estimée d'arrivée' (ETA) au service d'accueil des urgences par le Chef d'Agrès en cours de transport ?",
        tags: ["Chef d'Agrès", "Transport", "Urgences"],
        answerOptions: [
            { text: "Permettre au service receveur de préparer l'équipe médicale, le box de déchocage ou le matériel nécessaire avant l'arrivée du VSAV", isCorrect: true, rationale: "L'ETA permet à l'hôpital d'anticiper l'accueil de patients graves et d'optimiser la prise en charge immédiate à l'entrée des urgences." },
            { text: "Réserver une place de parking au chef d'agrès", isCorrect: false },
            { text: "Commander le repas du midi à la cantine de l'hôpital", isCorrect: false },
            { text: "Vérifier si l'horloge du camion fonctionne", isCorrect: false }
        ]
    },
    {
        question: "Vous intervenez pour une intoxication médicamenteuse volontaire (tentative de suicide). Le patient a ingéré une quantité importante de cachets. Quelle est la consigne du Chef d'Agrès ?",
        tags: ["Chef d'Agrès", "Intoxication médicamenteuse"],
        answerOptions: [
            { text: "Lui faire avaler du charbon de bois de barbecue au pif", isCorrect: false },
            { text: "Récupérer les boîtes de médicaments vides ou restantes pour les transmettre au médecin du SMUR ou de l'hôpital, rassurer, surveiller la conscience et ventiler", isCorrect: true, rationale: "L'identification précise des substances ingérées (boîtes de médicaments) est indispensable pour que le médecin adapte l'antidote ou la prise en charge thérapeutique." },
            { text: "Jeter tous les cachets restants dans les toilettes", isCorrect: false },
            { text: "Forcer le patient à faire du sport pour éliminer", isCorrect: false }
        ]
    },
    {
        question: "Comment le Chef d'Agrès gère-t-il la sécurité de son équipage lors d'une intervention sur la bande d'arrêt d'urgence d'une autoroute à forte circulation de nuit ?",
        tags: ["Chef d'Agrès", "Sécurité routière", "Autoroute"],
        answerOptions: [
            { text: "Travailler dos à la circulation sans gilet haute visibilité", isCorrect: false },
            { text: "Positionner le VSAV en protection (biais ou biseau de protection selon doctrine), porter les EPI haute visibilité classe 3, placer les balises lumineuses de signalisation en amont et limiter le temps d'exposition", isCorrect: true, rationale: "Le risque de sur-accident sur autoroute de nuit est maximal. Le positionnement du véhicule en rempart et le balisage lumineux sont vitaux." },
            { text: "S'allonger sur les voies pour faire une sieste", isCorrect: false },
            { text: "Éteindre tous les feux de signalisation du camion pour économiser la batterie", isCorrect: false }
        ]
    },
    {
        question: "Quel est le rôle du Chef d'Agrès face à une victime qui présente des signes de détresse respiratoire sur obstruction partielle des voies aériennes (la victime tousse bruyamment) ?",
        tags: ["Chef d'Agrès", "OVACE", "Secours"],
        answerOptions: [
            { text: "Lui asséner de violents coups dans le dos immédiatement", isCorrect: false },
            { text: "L'encourager à tousser, la maintenir au repos dans la position où elle se sent le mieux, surveiller l'évolution et ne pas donner de claques dans le dos tant qu'elle tousse efficace", isCorrect: true, rationale: "En cas d'obstruction partielle avec toux efficace, la toux est le meilleur moyen d'expulsion. Les claques dans le dos risqueraient de transformer l'obstruction en obstruction totale." },
            { text: "Lui faire avaler de l'eau glacée", isCorrect: false },
            { text: "Lui pincer le nez", isCorrect: false }
        ]
    },
    {
        question: "Comment le Chef d'Agrès organise-t-il la relève de garde et la transmission des consignes administratives et techniques à l'équipe montante ?",
        tags: ["Chef d'Agrès", "Passation de garde", "Management"],
        answerOptions: [
            { text: "Quitter la caserne en cachette sans rien dire à personne", isCorrect: false },
            { text: "Effectuer un inventaire croisé du matériel du VSAV, signaler les anomalies constatées, transmettre les faits marquants de la garde écoulée et signer les registres de passation", isCorrect: true, rationale: "La passation de garde formalise la continuité du service public et garantit que le nouveau personnel prend un agrès complet et opérationnel." },
            { text: "Laisser le matériel cassé sans le mentionner", isCorrect: false },
            { text: "Jeter les clés du camion dans le bureau du chef de centre", isCorrect: false }
        ]
    },
    {
        question: "Vous prenez en charge une parturiente (femme enceinte) en train d'accoucher dans le VSAV en roulant vers l'hôpital. Quelle est la mission du Chef d'Agrès vis-à-vis du conducteur et du SAMU ?",
        tags: ["Chef d'Agrès", "Obstétrique", "Transport"],
        answerOptions: [
            { text: "Demander au conducteur de rouler à 150 km/h en faisant des slaloms", isCorrect: false },
            { text: "Maintenir le contact permanent avec la régulation médicale du SAMU, guider l'équipier pour l'accouchement, demander au conducteur une conduite souple et sécurisée, et préparer le matériel d'aspiration et d'accueil du nouveau-né", isCorrect: true, rationale: "Un accouchement inopiné en roulant demande un calme absolu, une coordination parfaite avec le SAMU et une conduite souple pour préserver la maman et l'enfant." },
            { text: "Sauter du camion en marche", isCorrect: false },
            { text: "Ignorer l'accouchement et continuer à écouter la radio", isCorrect: false }
        ]
    },
    {
        question: "Quel est le comportement du Chef d'Agrès face à un individu qui propose de l'aide médicale spontanée en se présentant comme médecin sur les lieux d'un accident grave ?",
        tags: ["Chef d'Agrès", "Médecin tiers", "Coordination"],
        answerOptions: [
            { text: "Le rejeter violemment sans lui parler", isCorrect: false },
            { text: "Lui demander de présenter une carte professionnelle ou un justificatif officiel attestant de sa qualité de médecin, l'intégrer dans la chaîne de soins sous coordination de la régulation SAMU", isCorrect: true, rationale: "Un tiers se présentant comme médecin doit prouver sa qualification. S'il est habilité, il peut collaborer sous l'autorité de la régulation médicale." },
            { text: "Lui confier immédiatement le commandement total des pompiers", isCorrect: false },
            { text: "Le faire arrêter par la police sans vérifier", isCorrect: false }
        ]
    },
    {
        question: "Quel est l'impact d'une erreur de dosage ou d'une mauvaise manipulation de l'oxygène sous la responsabilité du Chef d'Agrès dans le cadre de l'aide médicale urgente ?",
        tags: ["Chef d'Agrès", "Oxygénothérapie", "Responsabilité"],
        answerOptions: [
            { text: "Aucun impact sur la santé du patient", isCorrect: false },
            { text: "Mettre en jeu la sécurité du patient (toxicité de l'hyperoxie ou hypoxie non corrigée) et engager la responsabilité opérationnelle et juridique du chef d'agrès", isCorrect: true, rationale: "L'oxygène est un médicament. Son administration obéit à des règles strictes de dosage et de prescription médicale ou de protocoles formalisés." },
            { text: "Améliorer instantanément l'humeur du patient", isCorrect: false },
            { text: "Économiser les bouteilles pour le lendemain", isCorrect: false }
        ]
    },
    {
        question: "Comment le Chef d'Agrès gère-t-il la prise en charge d'un patient victime d'une morsure de chien profonde et saignante à la main ?",
        tags: ["Chef d'Agrès", "Morsure", "Secours"],
        answerOptions: [
            { text: "Mettre de la terre pour cicatriser la plaie", isCorrect: false },
            { text: "Nettoyer et désinfecter la plaie à l'eau et au savon ou antiseptique doux, poser un pansement stérile protecteur, rassurer et orienter vers la structure adaptée (avis antirabique/chirurgical)", isCorrect: true, rationale: "Les morsures d'animaux présentent un risque infectieux majeur (tétanos, pasteurellose). Un nettoyage minutieux et une protection adaptée s'imposent." },
            { text: "Mordre le chien en retour pour se venger", isCorrect: false },
            { text: "Laisser la plaie saigner abondamment sans rien faire", isCorrect: false }
        ]
    },
    {
        question: "Quel est l'objectif du message de fin d'intervention transmis par le Chef d'Agrès au CTA-CODIS une fois rentré au centre de secours et le matériel nettoyé ?",
        tags: ["Chef d'Agrès", "Fin de mission", "CTA-CODIS"],
        answerOptions: [
            { text: "Demander l'autorisation d'aller se coucher pour toute la journée", isCorrect: false },
            { text: "Confirmer la remise en condition opérationnelle totale du VSAV, la disponibilité de l'équipage et clore définitivement la fiche d'intervention informatique", isCorrect: true, rationale: "La clôture de l'intervention valide le fait que l'agrès est de nouveau armé, propre et prêt pour un prochain départ." },
            { text: "Signaler la perte définitive des clés du véhicule", isCorrect: false },
            { text: "Anoncer la fermeture définitive du centre de secours", isCorrect: false }
        ]
    },
    {
        question: "Vous intervenez pour un malaise d'un passager à bord d'une rame de métro en station. Quelle est la consigne de sécurité du Chef d'Agrès vis-à-vis de l'alimentation électrique ?",
        tags: ["Chef d'Agrès", "Risques ferroviaires", "Sécurité"],
        answerOptions: [
            { text: "Marcher directement sur les rails électrifiés sans précaution", isCorrect: false },
            { text: "S'assurer auprès de l'exploitant (agent de station / régulateur) de la consignation de la voie ou du maintien en zone sécurisée avant de s'engager sur les voies", isCorrect: true, rationale: "Le rail conducteur ou la caténaire du métro représente un risque mortel par électrocution. L'intervention nécessite la confirmation de la sécurité des voies par l'exploitant." },
            { text: "Demander au conducteur du métro de redémarrer pour faire de la place", isCorrect: false },
            { text: "Toucher les rails avec une barre en fer", isCorrect: false }
        ]
    },
    {
        question: "Comment le Chef d'Agrès gère-t-il une situation où l'état de la victime se dégrade brutalement (passage d'une conscience normale à un arrêt cardiorespiratoire) pendant le transport en VSAV ?",
        tags: ["Chef d'Agrès", "Dégradation", "Urgence vitale"],
        answerOptions: [
            { text: "Attendre sagement d'arriver à l'hôpital sans rien modifier", isCorrect: false },
            { text: "Ordonner l'arrêt immédiat et sécurisé du VSAV par le conducteur, passer en mode intervention d'urgence, initier la RCP et le DAE, et alerter immédiatement le SAMU (bilan de dégradation)", isCorrect: true, rationale: "Face à un arrêt cardiaque en transport, l'équipage doit s'arrêter pour réaliser des manœuvres de réanimation de qualité (impossible en roulant de manière optimale) et prévenir la régulation." },
            { text: "Accélérer à 160 km/h en hurlant dans la cabine", isCorrect: false },
            { text: "Demander au patient de se ressaisir par la force de la volonté", isCorrect: false }
        ]
    },
    {
        question: "Quel est le comportement du Chef d'Agrès face à une tentative de corruption ou d'offre d'argent de la part d'une victime reconnaissante pour accélérer le transport ou contourner l'hôpital de secteur ?",
        tags: ["Chef d'Agrès", "Déontologie", "Éthique"],
        answerOptions: [
            { text: "Accepter l'argent en espèces pour arrondir le salaire de l'équipe", isCorrect: false },
            { text: "Refuser catégoriquement, rappeler les règles déontologiques du service public et orienter la victime selon les critères stricts de la régulation médicale", isCorrect: true, rationale: "Les sapeurs-pompiers sont soumis à des obligations strictes de probité et d'impartialité du service public. Toute corruption est proscrite et illégale." },
            { text: "Négocier le tarif de la course comme un taxi", isCorrect: false },
            { text: "Offrir un rabais pour le transport sanitaire", isCorrect: false }
        ]
    },
    {
        question: "Quel est le principe fondamental qui régit l'ensemble de la doctrine d'emploi du Chef d'Agrès VSAV face à toute situation imprévue sur le terrain ?",
        tags: ["Chef d'Agrès", "Doctrine", "Synthèse"],
        answerOptions: [
            { text: "Agir dans la précipitation sans réfléchir", isCorrect: false },
            { text: "Analyser, sécuriser, secourir, transmettre et rendre compte, en plaçant toujours la sécurité des intervenants et de la victime au centre de la décision", isCorrect: true, rationale: "La méthode opérationnelle permanente repose sur l'analyse de la situation, la sécurisation des lieux, la réalisation des soins, la transmission au CODIS/SAMU et le compte rendu." },
            { text: "Abandonner la mission dès la première difficulté", isCorrect: false },
            { text: "Laisser les équipiers décider de tout à sa place", isCorrect: false }
        ]
    }

];