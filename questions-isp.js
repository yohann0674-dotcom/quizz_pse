const masterIspBank = [
    // --- VOS QUESTIONS PRÉCÉDENTES (ouvrez / fusionnez ici si besoin) ---

    // --- 60 NOUVELLES QUESTIONS ISP ---
    {
        question: "Quel décret encadre principalement les actes professionnels et les protocoles que peut réaliser un Infirmier Sapeur-Pompier (ISP) en mission ?",
        tags: ["ISP", "Réglementation", "PISU"],
        answerOptions: [
            { text: "Le décret de compétences infirmier et les arrêtés relatifs aux PISU du SSSM", isCorrect: true, rationale: "Les ISP agissent dans le cadre de leur décret de compétences et des Protocoles Infirmiers de Soins d'Urgence (PISU) validés par le médecin chef du SSSM." },
            { text: "Le code de la route uniquement", isCorrect: false },
            { text: "Aucun texte ne réglemente l'action de l'ISP", isCorrect: false },
            { text: "Le règlement intérieur de la caserne de pompiers", isCorrect: false }
        ]
    },
    {
        question: "Dans le cadre d'un arrêt cardiorespiratoire (ACR) en présence d'un médecin ou selon les PISU, quel médicament l'ISP peut-il être amené à administrer par voie intraveineuse ?",
        tags: ["ISP", "ACR", "Pharmacologie"],
        answerOptions: [
            { text: "Du sirop pour la toux", isCorrect: false },
            { text: "L'adrénaline", isCorrect: true, rationale: "L'adrénaline est le vasoconstricteur de référence utilisé lors de la réanimation cardiopulmonaire en ACR selon les protocoles établis." },
            { text: "Un antibiotique à large spectre", isCorrect: false },
            { text: "De l'aspirine pure", isCorrect: false }
        ]
    },
    {
        question: "Quelle est la voie d'abord vasculaire prioritaire recherchée en urgence absolue par l'ISP ?",
        tags: ["ISP", "Urgences", "VVP"],
        answerOptions: [
            { text: "La voie veineuse périphérique (VVP) de bon calibre", isCorrect: true, rationale: "La pose d'une VVP périphérique est le geste de première intention pour administrer solutés et médicaments en urgence." },
            { text: "Une voie intra-musculaire profonde dans le bras", isCorrect: false },
            { text: "Une injection sous-cutanée de surface", isCorrect: false },
            { text: "Aucune voie, uniquement de l'eau par la bouche", isCorrect: false }
        ]
    },
    {
        question: "Quel soluté isotonique est généralement administré en première intention lors d'un remplissage vasculaire protocolisé par l'ISP ?",
        tags: ["ISP", "Remplissage", "Perfusions"],
        answerOptions: [
            { text: "Du chlorure de sodium à 0,9 % ou le ringer lactate", isCorrect: true, rationale: "Ces solutés isotoniques permettent de restaurer la volémie sans perturber l'équilibre osmotique cellulaire de manière délétère." },
            { text: "De l'eau du robinet stérile", isCorrect: false },
            { text: "Du sérum glucosé à 30 % pur", isCorrect: false },
            { text: "De l'huile d'olive purifiée", isCorrect: false }
        ]
    },
    {
        question: "En cas de crise d'asthme aiguë grave ou de bronchospasme sous protocole, quel type de médicament l'ISP peut-il administrer par nébulisation ?",
        tags: ["ISP", "Pneumologie", "Nébulisation"],
        answerOptions: [
            { text: "Un bronchodilatateur d'action rapide, ex: salbutamol", isCorrect: true, rationale: "La nébulisation de bronchodilatateurs permet de lever le bronchospasme et de restaurer la ventilation alvéolaire." },
            { text: "Un somnifère puissant", isCorrect: false },
            { text: "Un collyre pour les yeux", isCorrect: false },
            { text: "Un anti-inflammatoire en suppositoire", isCorrect: false }
        ]
    },
    {
        question: "Quelle est l'indication principale de l'administration de Naloxone par l'ISP ?",
        tags: ["ISP", "Intoxication", "Naloxone"],
        answerOptions: [
            { text: "Une surdose d'opioïdes entraînant une dépression respiratoire menaçante", isCorrect: true, rationale: "La naloxone est l'antidote spécifique des opioïdes, permettant de contrer rapidement la dépression respiratoire induite." },
            { text: "Une fracture ouverte de la jambe", isCorrect: false },
            { text: "Une crise d'angoisse légère", isCorrect: false },
            { text: "Une brûlure thermique du premier degré", isCorrect: false }
        ]
    },
    {
        question: "Quel sucre simple l'ISP administre-t-il par voie orale ou intraveineuse en cas d'hypoglycémie symptomatique avérée ?",
        tags: ["ISP", "Métabolisme", "Hypoglycémie"],
        answerOptions: [
            { text: "Du glucose hypertonique en IV ou du sucre per os si patient conscient", isCorrect: true, rationale: "L'apport rapide de glucose permet de normaliser la glycémie et de faire disparaître les troubles neurologiques liés à l'hypoglycémie." },
            { text: "De l'édulcorant de synthèse sans sucre", isCorrect: false },
            { text: "Un comprimé de sel de cuisine", isCorrect: false },
            { text: "De l'aspirine effervescente", isCorrect: false }
        ]
    },
    {
        question: "Quelle est la valeur seuil de la glycémie capillaire définissant généralement une hypoglycémie nécessitant une correction immédiate ?",
        tags: ["ISP", "Glycémie", "Urgences"],
        answerOptions: [
            { text: "Inférieure à 0,6 g/L (ou 3,3 mmol/L)", isCorrect: true, rationale: "En dessous de ce seuil, le cerveau manque de substrat énergétique, ce qui entraîne des risques neurologiques graves." },
            { text: "Supérieure à 2,5 g/L", isCorrect: false },
            { text: "Exactement à 1,5 g/L", isCorrect: false },
            { text: "Entre 3,0 g/L et 4,0 g/L", isCorrect: false }
        ]
    },
    {
        question: "Quel dispositif de ventilation non invasive ou d'oxygénothérapie à haut débit l'ISP peut-il utiliser pour soulager une détresse respiratoire aiguë avant l'arrivée du SMUR ?",
        tags: ["ISP", "Oxygénothérapie", "Détresse respiratoire"],
        answerOptions: [
            { text: "Un masque à haute concentration ou une ventilation dirigée selon protocoles locaux", isCorrect: true, rationale: "Le masque à haute concentration permet de délivrer une fraction inspirée en oxygène élevée (FiO2 proche de 1) pour lutter contre l'hypoxie." },
            { text: "Un simple mouchoir en papier parfumé", isCorrect: false },
            { text: "Un tuyau d'arrosage de jardin", isCorrect: false },
            { text: "Un sac plastique étanche noué autour du cou", isCorrect: false }
        ]
    },
    {
        question: "Quelle est la conduite à tenir infirmière face à une crise convulsive généralisée qui perdure au-delà de 5 minutes ?",
        tags: ["ISP", "Neurologie", "Convulsions"],
        answerOptions: [
            { text: "Administrer une benzodiazépine par voie muqueuse ou IV selon protocole et alerter le SAMU", isCorrect: true, rationale: "Une crise de plus de 5 minutes constitue un état de mal épileptique nécessitant l'administration rapide d'une benzodiazépine pour stopper la crise." },
            { text: "Maintenir la victime de force en lui cassant les doigts", isCorrect: false },
            { text: "Attendre sagement 2 heures que cela passe tout seul", isCorrect: false },
            { text: "Jeter un seau d'eau froide au visage", isCorrect: false }
        ]
    },
    {
        question: "Quel examen paraclinique simple l'ISP réalise-t-il systématiquement face à toute douleur thoracique aiguë inexpliquée au VSAV ou en VLSM ?",
        tags: ["ISP", "Cardiologie", "ECG"],
        answerOptions: [
            { text: "Un électrocardiogramme (ECG) 12 dérivations", isCorrect: true, rationale: "L'ECG 12 dérivations est indispensable pour dépister rapidement un syndrome coronarien aigu (infarctus)." },
            { text: "Une radiographie des poumons portable", isCorrect: false },
            { text: "Un test de grossesse urinaire", isCorrect: false },
            { text: "Une mesure de la vision de loin", isCorrect: false }
        ]
    },
    {
        question: "Sur un ECG 12 dérivations, que recherche en priorité l'ISP pour suspecter un infarctus du myocarde (SCA ST+) ?",
        tags: ["ISP", "ECG", "SCA"],
        answerOptions: [
            { text: "Un sus-décalage du segment ST", isCorrect: true, rationale: "Le sus-décalage du segment ST est le signe électrocardiographique majeur d'une occlusion coronaire aiguë transmurale." },
            { text: "Une absence totale de tracé (ligne plate)", isCorrect: false },
            { text: "Un tracé en zig-zag totalement anarchique sans ondes", isCorrect: false },
            { text: "Un simple ralentissement de la fréquence cardiaque", isCorrect: false }
        ]
    },
    {
        question: "Quel anti-agrégant plaquettaire l'ISP peut-il administrer sous protocole médical strict en cas de suspicion de syndrome coronarien aigu ?",
        tags: ["ISP", "Pharmacologie", "Cardiologie"],
        answerOptions: [
            { text: "L'aspirine", isCorrect: true, rationale: "L'aspirine à visée anti-agrégante plaquettaire est administrée précocement pour empêcher l'aggravation du thrombus coronaire." },
            { text: "Un sirop antitussif", isCorrect: false },
            { text: "Du paracétamol en gélule", isCorrect: false },
            { text: "De l'indométhacine", isCorrect: false }
        ]
    },
    {
        question: "Quel est le rôle de l'ISP lors de la prise en charge d'une brûlure grave concernant l'évaluation de la surface cutanée atteinte ?",
        tags: ["ISP", "Brûlures", "Évaluation"],
        answerOptions: [
            { text: "Utiliser la règle des 9 de Wallace ou la surface de la paume de la main", isCorrect: true, rationale: "Ces méthodes permettent d'estimer rapidement et de manière standardisée le pourcentage de surface corporelle brûlée (SCB)." },
            { text: "Mesurer la brûlure avec une règle d'écolier en plastique", isCorrect: false },
            { text: "Deviner au pif sans regarder", isCorrect: false },
            { text: "Compter le nombre de cloques une par une", isCorrect: false }
        ]
    },
    {
        question: "Quelle analgésie non pharmacologique ou pharmacologique l'ISP peut-il initier pour soulager une douleur aiguë (EVA > 6) selon les protocoles d'analgésie de rescue ?",
        tags: ["ISP", "Douleur", "Analgésie"],
        answerOptions: [
            { text: "Des antalgiques de palier 1 ou 2, ou du MEOPA selon habilitation et protocoles", isCorrect: true, rationale: "La prise en charge de la douleur est une priorité infirmière, utilisant des antalgiques adaptés ou des gaz analgésiques autorisés." },
            { text: "Demander au patient de compter jusqu'à 10 en fermant les yeux", isCorrect: false },
            { text: "Ignorer la douleur car elle fait partie de la vie", isCorrect: false },
            { text: "Donner un verre de vin rouge", isCorrect: false }
        ]
    },
    {
        question: "Comment s'administre le MEOPA (Mélange Equimolaire Oxygène-Protoxyde d'Azote) sous la responsabilité de l'ISP ?",
        tags: ["ISP", "MEOPA", "Analgésie"],
        answerOptions: [
            { text: "En auto-administration par le patient via un masque étanche à valve unidirectionnelle", isCorrect: true, rationale: "Le patient s'administre lui-même le gaz : s'il s'endort, le masque tombe, ce qui garantit la sécurité (propriété auto-titrante)." },
            { text: "En l'injectant directement dans une veine du bras", isCorrect: false },
            { text: "En faisant respirer l'infirmier à la place du patient", isCorrect: false },
            { text: "En le versant sur la plaie douloureuse", isCorrect: false }
        ]
    },
    {
        question: "Quelle est la contre-indication absolue majeure à l'utilisation du MEOPA ?",
        tags: ["ISP", "MEOPA", "Contre-indications"],
        answerOptions: [
            { text: "Un pneumothorax, un traumatisme crânien récent avec altération de conscience, ou une obstruction intestinale gazeuse", isCorrect: true, rationale: "Le protoxyde d'azote diffuse dans les cavités aériennes closes et risque d'aggraver un pneumothorax ou une hypertension intracrânienne." },
            { text: "Avoir les cheveux blonds", isCorrect: false },
            { text: "Avoir soif", isCorrect: false },
            { text: "Avoir mal à la cheville", isCorrect: false }
        ]
    },
    {
        question: "Quel est le matériel utilisé par l'ISP pour mesurer précisément la pression artérielle de manière invasive ou non invasive ?",
        tags: ["ISP", "Constantes", "Tension"],
        answerOptions: [
            { text: "Un tensiomètre manœuvré au stéthoscope ou un tensiomètre électronique calibré", isCorrect: true, rationale: "La mesure rigoureuse de la pression artérielle nécessite un brassard adapté à la morphologie du patient et un stéthoscope ou un appareil validé." },
            { text: "Un pèse-personne mécanique", isCorrect: false },
            { text: "Un thermomètre auriculaire", isCorrect: false },
            { text: "Un oxymètre de pouls standard", isCorrect: false }
        ]
    },
    {
        question: "Quelle est la définition d'une hypertension artérielle sévère dite \"poussée hypertensive\" menaçante ?",
        tags: ["ISP", "Cardiovasculaire", "HTA"],
        answerOptions: [
            { text: "Une pression artérielle systolique souvent supérieure à 180 mmHg associée à des signes de souffrance viscérale", isCorrect: true, rationale: "Une élévation tensionnelle majeure n'est critique que si elle s'accompagne de signes d'ischémie ou de souffrance d'organes cibles (cerveau, cœur, rein)." },
            { text: "Une tension de 120/80 mmHg au repos", isCorrect: false },
            { text: "Une tension de 90/60 mmHg après un effort", isCorrect: false },
            { text: "Une absence totale de tension mesurable", isCorrect: false }
        ]
    },
    {
        question: "Quel soin infirmier réalise-t-on face à une épistaxis (saignement de nez) abondante rebelle ?",
        tags: ["ISP", "ORL", "Hémorragie"],
        answerOptions: [
            { text: "Un méchage hémostatique nasal selon protocole et une compression de l'aile nasale", isCorrect: true, rationale: "Le méchage hémostatique (mèche résorbable ou non, ou dispositif spécialisé) permet d'exercer une compression interne directe sur les vaisseaux saignants de la tache vasculaire." },
            { text: "Allonger le patient à plat dos la tête en arrière", isCorrect: false },
            { text: "Mettre du coton hydrophile sec sans presser", isCorrect: false },
            { text: "Couper le nez pour stopper le sang", isCorrect: false }
        ]
    },
    {
        question: "Qu'appelle-t-on le syndrome des loges en traumatologie que l'ISP doit savoir dépister ?",
        tags: ["ISP", "Traumatologie", "Syndrome des loges"],
        answerOptions: [
            { text: "L'augmentation de la pression tissulaire à l'intérieur d'une loge musculaire fermée, compromettant la microcirculation", isCorrect: true, rationale: "L'ischémie musculaire par compression interne dans un compartiment inextensible est une urgence médico-chirurgicale absolue." },
            { text: "Une simple courbature après le sport", isCorrect: false },
            { text: "La chute des cheveux due au stress", isCorrect: false },
            { text: "Une fracture ouverte de la rotule", isCorrect: false }
        ]
    },
    {
        question: "Quel signe clinique précoce caractérise le syndrome des loges d'un membre plâtré ou traumatisé ?",
        tags: ["ISP", "Traumatologie", "Symptômes"],
        answerOptions: [
            { text: "Des douleurs intenses disproportionnées non calmées par les antalgiques, associées à des paresthésies", isCorrect: true, rationale: "La douleur disproportionnée et rebelle aux antalgiques usuels, ainsi que les fourmillements (paresthésies), sont des signaux d'alerte majeurs." },
            { text: "Un fou rire incontrôlable", isCorrect: false },
            { text: "Une coloration bleue fluorescente des ongles", isCorrect: false },
            { text: "Une augmentation de la faim", isCorrect: false }
        ]
    },
    {
        question: "Devant un patient présentant des signes de choc anaphylactique (œdème de Quincke, urticaire géante, détresse respiratoire), quel est le traitement d'urgence absolu que l'ISP doit préparer ou administrer ?",
        tags: ["ISP", "Allergie", "Choc anaphylactique"],
        answerOptions: [
            { text: "L'adrénaline en IM", isCorrect: true, rationale: "L'adrénaline intramusculaire est le traitement salvateur immédiat de l'anaphylaxie grave pour inverser la vasoplégie et le bronchospasme." },
            { text: "Du sirop antitussif à base de miel", isCorrect: false },
            { text: "Un comprimé de vitamine C", isCorrect: false },
            { text: "De l'eau gazeuse fraîche", isCorrect: false }
        ]
    },
    {
        question: "Quelle est la voie d'administration privilégiée et la plus rapide en urgence absolue pour l'adrénaline dans le choc anaphylactique ?",
        tags: ["ISP", "Adrénaline", "Voie d'administration"],
        answerOptions: [
            { text: "La voie intramusculaire (IM), préférentiellement dans la cuisse", isCorrect: true, rationale: "La voie IM offre une absorption rapide et sûre en situation d'urgence préhospitalière par rapport à la voie sous-cutanée." },
            { text: "La voie intraveineuse centrale uniquement après chirurgie", isCorrect: false },
            { text: "L'application d'une crème sur la peau du dos", isCorrect: false },
            { text: "L'inhalation par le nez sans dispositif", isCorrect: false }
        ]
    },
    {
        question: "Qu'est-ce qu'une acidocétose diabétique que l'ISP peut rencontrer chez un patient insulinodépendant en rupture de traitement ?",
        tags: ["ISP", "Métabolisme", "Acidocétose"],
        answerOptions: [
            { text: "Une complication aiguë du diabète caractérisée par une hyperglycémie, une cétonémie et une acidose métabolique", isCorrect: true, rationale: "En l'absence d'insuline, l'organisme dégrade les graisses, produisant des corps cétoniques acides qui acidifient le sang." },
            { text: "Une simple digestion difficile après un repas trop lourd", isCorrect: false },
            { text: "Une baisse brutale de la tension artérielle due au froid", isCorrect: false },
            { text: "Une fracture spontanée des os longs", isCorrect: false }
        ]
    },
    {
        question: "Quel test biologique rapide l'ISP peut-il réaliser au bout du doigt pour rechercher des corps cétoniques en cas d'hyperglycémie importante ?",
        tags: ["ISP", "Biologie", "Cétonémie"],
        answerOptions: [
            { text: "Une cétonémie capillaire", isCorrect: true, rationale: "Le lecteur de cétonémie capillaire permet de doser directement le béta-hydroxybutyrate dans le sang et de dépister l'acidocétose." },
            { text: "Un test de dépistage urinaire de la nicotine", isCorrect: false },
            { text: "Une mesure du taux de cholestérol total", isCorrect: false },
            { text: "Un test salivaire d'alcoolémie", isCorrect: false }
        ]
    },
    {
        question: "Comment l'ISP définit-il une hypothermie accidentelle profonde ?",
        tags: ["ISP", "Thermique", "Hypothermie"],
        answerOptions: [
            { text: "Une température centrale inférieure à 32°C (ou 30°C selon les classifications)", isCorrect: true, rationale: "En dessous de 32°C, le risque de troubles du rythme cardiaque graves (fibrillation ventriculaire) augmente considérablement." },
            { text: "Une température de 37,2°C", isCorrect: false },
            { text: "Une température de 38,5°C avec frissons", isCorrect: false },
            { text: "Une sensation de chaud en plein été", isCorrect: false }
        ]
    },
    {
        question: "Pourquoi faut-il manipuler avec une extrême délicatesse un patient en hypothermie profonde lors de son relevage ?",
        tags: ["ISP", "Hypothermie", "Précautions"],
        answerOptions: [
            { text: "Pour éviter de déclencher un arrêt cardiorespiratoire par fibrillation ventriculaire de choc thermique ou mécanique", isCorrect: true, rationale: "Le cœur en hypothermie est extrêmement irritable ; les mouvements brusques peuvent provoquer un arrêt cardiaque irréductible." },
            { text: "Pour ne pas froisser ses vêtements", isCorrect: false },
            { text: "Parce que le brancard pèse trop lourd", isCorrect: false },
            { text: "Pour l'empêcher de s'endormir trop vite", isCorrect: false }
        ]
    },
    {
        question: "Quel est l'effet physiologique recherché par la pose d'un garrot tactique ou tourniquet en cas d'hémorragie extériorisée de membre menaçante ?",
        tags: ["ISP", "Hémorragie", "Garrot"],
        answerOptions: [
            { text: "L'interruption totale du flux sanguin artériel en aval du garrot", isCorrect: true, rationale: "Le serrage du garrot comprime l'artère principale du membre, stoppant net l'hémorragie massive qui mettait en jeu le pronostic vital." },
            { text: "Le refroidissement de la peau du membre", isCorrect: false },
            { text: "L'accélération de la circulation du sang dans tout le corps", isCorrect: false },
            { text: "La cicatrisation immédiate de la peau", isCorrect: false }
        ]
    },
    {
        question: "Quelle mention l'ISP ou l'équipier doit-il impérativement noter lors de la pose d'un garrot de combat ?",
        tags: ["ISP", "Garrot", "Traçabilité"],
        answerOptions: [
            { text: "L'heure précise de pose visible sur le garrot ou sur la victime", isCorrect: true, rationale: "L'heure de pose est capitale pour l'équipe chirurgicale afin d'évaluer le temps d'ischémie du membre et prévenir les nécroses." },
            { text: "Le nom du chien de la famille", isCorrect: false },
            { text: "La marque du véhicule VSAV", isCorrect: false },
            { text: "La météo du jour", isCorrect: false }
        ]
    },
    {
        question: "Qu'appelle-t-on une intoxication au monoxyde de carbone (CO) mesurable par l'ISP avec un co-oxymètre ?",
        tags: ["ISP", "Intoxication", "Monoxyde de carbone"],
        answerOptions: [
            { text: "La fixation préférentielle du CO sur l'hémoglobine formant de la carboxyhémoglobine, empêchant le transport de l'oxygène", isCorrect: true, rationale: "Le CO a une affinité pour l'hémoglobine 200 fois supérieure à celle de l'oxygène, provoquant une asphyxie cellulaire tissulaire." },
            { text: "Une simple carence en vitamines du groupe B", isCorrect: false },
            { text: "Une augmentation du taux de sucre dans le sang", isCorrect: false },
            { text: "Une allergie cutanée au pollen", isCorrect: false }
        ]
    },
    {
        question: "Quel taux de carboxyhémoglobine (SpCO) indique généralement une intoxication sévère au monoxyde de carbone ?",
        tags: ["ISP", "CO", "Taux critique"],
        answerOptions: [
            { text: "Supérieur à 20% à 30% chez le patient symptomatique", isCorrect: true, rationale: "Au-delà de 20-30% de carboxyhémoglobine, les symptômes neurologiques et cardiaques s'aggravent nettement, nécessitant une oxygénothérapie lourde." },
            { text: "Moins de 1% chez tout individu", isCorrect: false },
            { text: "Exactement 500%", isCorrect: false },
            { text: "0% en permanence", isCorrect: false }
        ]
    },
    {
        question: "Quelle est la prise en charge immédiate sur les lieux d'une victime intoxiquée au CO par l'ISP et les secours ?",
        tags: ["ISP", "CO", "Prise en charge"],
        answerOptions: [
            { text: "Évacuation immédiate de la zone polluée et oxygénothérapie normobare à 100% au masque haute concentration", isCorrect: true, rationale: "Il faut stopper l'exposition en sortant la victime de la zone toxique et lui administrer de l'oxygène pur pour éliminer le CO." },
            { text: "Donner une cigarette pour détendre le patient", isCorrect: false },
            { text: "Fermer toutes les fenêtres du camion", isCorrect: false },
            { text: "Demander au patient de faire de l'apnée", isCorrect: false }
        ]
    },
    {
        question: "Qu'est-ce qu'un état de mal épileptique ?",
        tags: ["ISP", "Neurologie", "Épilepsie"],
        answerOptions: [
            { text: "Une crise d'épilepsie généralisée qui se prolonge au-delà de 5 minutes ou des crises répétées sans reprise de conscience entre les deux", isCorrect: true, rationale: "C'est une urgence médicale absolue en raison du risque de lésions cérébrales irréversibles et d'épuisement respiratoire." },
            { text: "Une sieste prolongée l'après-midi", isCorrect: false },
            { text: "Un mal de tête passager après le travail", isCorrect: false },
            { text: "Une peur bleue des araignées", isCorrect: false }
        ]
    },
    {
        question: "Quel paramètre neurologique évalue la cotation de l'échelle de Glasgow (GCS) ?",
        tags: ["ISP", "Neurologie", "Glasgow"],
        answerOptions: [
            { text: "L'ouverture des yeux, la réponse verbale et la réponse motrice", isCorrect: true, rationale: "Ces trois items permettent d'évaluer de manière reproductible le niveau de conscience d'un patient." },
            { text: "La tension artérielle, le pouls et la température", isCorrect: false },
            { text: "La force de préhension des mains uniquement", isCorrect: false },
            { text: "La couleur de la peau et des conjonctives", isCorrect: false }
        ]
    },
    {
        question: "Quel est le score de Glasgow minimal et maximal possible ?",
        tags: ["ISP", "Glasgow", "Scores"],
        answerOptions: [
            { text: "Score minimal de 3 et score maximal de 15", isCorrect: true, rationale: "Même un patient totalement comateux et inconscient obtient un score de 1 (1 dans chaque catégorie : yeux, verbe, moteur)." },
            { text: "De 0 à 10", isCorrect: false },
            { text: "De 10 à 100", isCorrect: false },
            { text: "De 5 à 20", isCorrect: false }
        ]
    },
    {
        question: "Face à un traumatisé crânien grave, quel signe pupillaire unilatéral fixe et en mydriase doit alerter l'ISP sur une possible compression cérébrale (engagement) ?",
        tags: ["ISP", "Traumatisme crânien", "Pupilles"],
        answerOptions: [
            { text: "Une anisocorie avec une pupille dilatée non réactive du côté de la lésion", isCorrect: true, rationale: "L'inégalité pupillaire (anisocorie) avec une mydriase unilatérale témoigne d'une souffrance du tronc cérébral par engagement temporal." },
            { text: "Des pupilles pinpoints microscopiques des deux côtés", isCorrect: false },
            { text: "Des yeux vairons de naissance", isCorrect: false },
            { text: "Une fermeture complète des paupières par fatigue", isCorrect: false }
        ]
    },
    {
        question: "Quelle est la définition clinique d'une déshydratation aiguë sévère chez la personne âgée isolée ?",
        tags: ["ISP", "Gérontologie", "Déshydratation"],
        answerOptions: [
            { text: "Présence de plis cutanés persistants, sécheresse des muqueuses, hypotension, oligurie et troubles de la conscience", isCorrect: true, rationale: "La perte d'eau extracellulaire se traduit par un pli cutané persistant, une sécheresse buccale et un retentissement hémodynamique et neurologique." },
            { text: "Une simple envie de boire un verre d'eau fraîche", isCorrect: false },
            { text: "Une transpiration excessive après un marathon", isCorrect: false },
            { text: "Un poids stable au fil des semaines", isCorrect: false }
        ]
    },
    {
        question: "Quel type de prise en charge spécifique l'ISP met-il en place face à une victime présentant une crise hystériforme ou de conversion somatique ?",
        tags: ["ISP", "Psychiatrie", "Crise"],
        answerOptions: [
            { text: "Une approche rassurante, un isolement des stimuli excessifs, une vérification somatique pour éliminer l'organique et une écoute bienveillante", isCorrect: true, rationale: "Il faut écarter une urgence organique tout en évitant l'excès de médicalisation et en adoptant une attitude calme et rassurante." },
            { text: "Crier plus fort que la patiente pour la dominer", isCorrect: false },
            { text: "L'attacher solidement au brancard avec des sangles de force", isCorrect: false },
            { text: "L'abandonner seule dans la rue", isCorrect: false }
        ]
    },
    {
        question: "Quel est le risque majeur lié à la levée trop rapide d'un obstacle compressif ou d'un garrot laissé en place de manière prolongée (syndrome de décrassement / crush syndrome) ?",
        tags: ["ISP", "Traumatisme", "Crush syndrome"],
        answerOptions: [
            { text: "Une levée de compression libérant des toxines, du potassium et de la myoglobine provoquant une hyperkaliémie mortelle et une défaillance rénale", isCorrect: true, rationale: "Le retour brutal dans la circulation générale de substances toxiques accumulées en amont peut provoquer un arrêt cardiaque par hyperkaliémie." },
            { text: "Une simple rougeur passagère de la peau", isCorrect: false },
            { text: "Un endormissement immédiat sans gravité", isCorrect: false },
            { text: "Une guérison instantanée sans séquelle", isCorrect: false }
        ]
    },
    {
        question: "Quelle est la définition de l'asepsie en milieu opérationnel ou sanitaire ?",
        tags: ["ISP", "Hygiène", "Asepsie"],
        answerOptions: [
            { text: "L'ensemble des méthodes propres à empêcher la contamination par des micro-organismes pathogènes", isCorrect: true, rationale: "L'asepsie prévient l'apport de germes lors de la réalisation de soins invasifs (ex: pose de perfusion)." },
            { text: "Le nettoyage grossier des bottes de feu avec de la boue", isCorrect: false },
            { text: "L'absence totale de matériel dans le VSAV", isCorrect: false },
            { text: "La peinture blanche des murs de la caserne", isCorrect: false }
        ]
    },
    {
        question: "Quelle est la différence fondamentale entre antiseptique et désinfectant ?",
        tags: ["ISP", "Hygiène", "Produits"],
        answerOptions: [
            { text: "L'antiseptique s'applique sur les tissus vivants (peau saine ou lésée), tandis que le désinfectant s'applique sur les surfaces inertes", isCorrect: true, rationale: "C'est une distinction réglementaire et toxicologique essentielle pour éviter d'utiliser des produits caustiques ou inadaptés sur la peau." },
            { text: "Il n'y a aucune différence, ce sont les mêmes flacons", isCorrect: false },
            { text: "L'antiseptique sert à nettoyer les camions et le désinfectant les mains", isCorrect: false },
            { text: "L'un sent la fraise et l'autre la menthe", isCorrect: false }
        ]
    },
    {
        question: "Comment l'ISP procède-t-il à l'élimination des DASRI (Déchets d'Activités Soins à Risques Infectieux) produits lors d'un soin au VSAV ?",
        tags: ["ISP", "DASRI", "Élimination"],
        answerOptions: [
            { text: "En les stockant immédiatement après usage dans des emballages étanches, jaunes, normalisés et piquants/tranchants en conteneurs spécifiques", isCorrect: true, rationale: "La filière DASRI obéit à des normes strictes de sécurité pour protéger les soignants et le public contre les risques infectieux." },
            { text: "Les jeter dans la poubelle de tri sélectif du papier de la caserne", isCorrect: false },
            { text: "Les laisser traîner sur le brancard du VSAV", isCorrect: false },
            { text: "Les jeter par la fenêtre du véhicule en roulant", isCorrect: false }
        ]
    },
    {
        question: "Quelle règle d'or régit la traçabilité des médicaments gérés par l'ISP dans les dotations de pharmacie opérationnelle du SSSM ?",
        tags: ["ISP", "Pharmacie", "Traçabilité"],
        answerOptions: [
            { text: "Le contrôle rigoureux des péremptions, des lots, de la traçabilité des stupéfiants/médicaments sensibles et la consignation sur les registres dédiés", isCorrect: true, rationale: "La pharmacie d'urgence est soumise à une traçabilité médico-administrative rigoureuse pour garantir la sécurité des patients." },
            { text: "Utiliser les médicaments périmés depuis 5 ans sans regarder", isCorrect: false },
            { text: "Offrir les comprimés aux passants dans la rue", isCorrect: false },
            { text: "Ne jamais vérifier le stock de la pharmacie", isCorrect: false }
        ]
    },
    {
        question: "Qu'est-ce que la chaîne du froid pour certains médicaments ou produits biologiques (ex: solutés, sérums, certains antalgiques) ?",
        tags: ["ISP", "Chaîne du froid", "Conservation"],
        answerOptions: [
            { text: "Le maintien de la température de conservation entre +2°C et +8°C de la fabrication à l'administration", isCorrect: true, rationale: "Le respect de la chaîne du froid garantit l'intégrité moléculaire et l'efficacité thérapeutique des produits thermosensibles." },
            { text: "Conserver les médicaments au congélateur à -20°C", isCorrect: false },
            { text: "Laisser les flacons sur le tableau de bord en plein soleil d'été", isCorrect: false },
            { text: "Stocker les vaccins dans une poche de pantalon", isCorrect: false }
        ]
    },
    {
        question: "Quel est le rôle de l'ISP au sein d'un Poste Médical Avancé (PMA) lors d'un événement impliquant de nombreuses victimes (NOTRA / ORSEC) ?",
        tags: ["ISP", "PMA", "Secours en masse"],
        answerOptions: [
            { text: "Assurer le tri infirmier, la prise en charge des urgences relatives/absolues, la pose de voies veineuses et la traçabilité des fiches de tri MEDTRIP", isCorrect: true, rationale: "Au sein du PMA, l'ISP seconde l'équipe médicale dans l'accueil, le conditionnement et les soins d'urgence des impliqués et blessés." },
            { text: "Préparer le café pour les autorités politiques", isCorrect: false },
            { text: "Vérifier la pression des pneus des ambulances", isCorrect: false },
            { text: "Faire la circulation routière à l'extérieur du périmètre", isCorrect: false }
        ]
    },
    {
        question: "Que signifie l'acronyme SINUS dans le cadre d'un plan de secours impliquant de multiples victimes ?",
        tags: ["ISP", "SINUS", "Gestion de crise"],
        answerOptions: [
            { text: "Système d'Information Numérique Standardisé permettant d'identifier chaque victime par un code barre unique", isCorrect: true, rationale: "SINUS permet d'assurer un suivi informatique infaillible de chaque impliqué et blessé évacué vers les structures hospitalières." },
            { text: "Un examen radiologique des sinus de la face", isCorrect: false },
            { text: "Un outil pour mesurer la vitesse du vent", isCorrect: false },
            { text: "Un protocole d'inhalation nasale", isCorrect: false }
        ]
    },
    {
        question: "Quel est le rôle de l'ISP conseiller technique auprès du Commandant des Opérations de Secours (COS) en matière de risques sanitaires ?",
        tags: ["ISP", "Conseiller technique", "COS"],
        answerOptions: [
            { text: "Apporter une expertise médico-technique sur l'hygiène, la contamination, les profils sanitaires des victimes et coordonner les relations avec le SAMU", isCorrect: true, rationale: "L'ISP apporte son regard d'expert en santé pour éclairer le COS dans ses choix tactiques de secours à victimes." },
            { text: "Conduire le fourgon pompe-tonne en urgence", isCorrect: false },
            { text: "Monter sur les échelles pour éteindre les toitures", isCorrect: false },
            { text: "Signer les bulletins de paie du personnel", isCorrect: false }
        ]
    },
    {
        question: "Comment l'ISP gère-t-il l'exposition accidentelle au sang (EAS) suite à une piqûre avec une aiguille souillée en intervention ?",
        tags: ["ISP", "EAS", "Accident d'exposition"],
        answerOptions: [
            { text: "Nettoyage immédiat à l'eau et au savon puis antisepsie, déclaration immédiate à la médecine du service / référent médical et évaluation rapide pour prophylaxie", isCorrect: true, rationale: "La prise en charge d'une EAS doit être immédiate pour maximiser l'efficacité d'une éventuelle prophylaxie post-exposition." },
            { text: "Cacher l'incident à tout le monde pour éviter les ennuis", isCorrect: false },
            { text: "Frotter la plaie avec de la terre du jardin", isCorrect: false },
            { text: "Attendre la fin du mois pour consulter un médecin", isCorrect: false }
        ]
    },
    {
        question: "Quelle est la définition de la iatrogénie médicamenteuse que l'ISP doit savoir dépister chez les patients polymédiqués ?",
        tags: ["ISP", "Pharmacologie", "Iatrogénie"],
        answerOptions: [
            { text: "L'ensemble des effets indésirables ou négatifs induits par la prise de médicaments sur l'organisme du patient", isCorrect: true, rationale: "Chez les personnes âgées polymédiquées, la iatrogénie est une cause fréquente de malaises, chutes et urgences médicales." },
            { text: "Une guérison spontanée et miraculeuse", isCorrect: false },
            { text: "La fabrication artisanale de remèdes de grand-mère", isCorrect: false },
            { text: "Une allergie alimentaire aux arachides", isCorrect: false }
        ]
    },
    {
        question: "Quel est le rôle de l'ISP lors du conditionnement d'un patient brûlé grave avant son transport héliporté ou médicalisé ?",
        tags: ["ISP", "Brûlés", "Conditionnement"],
        answerOptions: [
            { text: "Refroidissement de la brûlure si précoce, pose d'un pansement stérile sec ou non adhérent, couverture thermique anti-hypothermie et abord veineux", isCorrect: true, rationale: "Le grand brûlé perd rapidement ses calories et sa volémie ; la lutte contre l'hypothermie et la pose d'une VVP sont primordiales." },
            { text: "Appliquer du dentifrice mentholé sur toute la surface brûlée", isCorrect: false },
            { text: "Frotter vigoureusement la peau avec une brosse de fer", isCorrect: false },
            { text: "Laisser le patient nu en plein courant d'air", isCorrect: false }
        ]
    },
    {
        question: "Pourquoi est-il strictement proscrit d'appliquer des crèmes ou des corps gras sur une brûlure fraîche en phase préhospitalière ?",
        tags: ["ISP", "Brûlures", "Contre-indications"],
        answerOptions: [
            { text: "Parce qu'ils aggravent l'infection, retiennent la chaleur, masquent les lésions et compliquent le travail chirurgical ultérieur", isCorrect: true, rationale: "Les corps gras agissent comme un isolant thermique qui emprisonne la chaleur dans les tissus et favorisent la surinfection." },
            { text: "Parce que cela sent trop bon", isCorrect: false },
            { text: "Parce que le tube de crème coûte trop cher", isCorrect: false },
            { text: "Pour garder la peau bronzée", isCorrect: false }
        ]
    },
    {
        question: "Quel est l'objectif de la surveillance de la diurèse horaire chez un patient brûlé ou en état de choc pris en charge durablement ?",
        tags: ["ISP", "Surveillance", "Diurèse"],
        answerOptions: [
            { text: "Évaluer la perfusion rénale et l'efficacité du remplissage vasculaire", isCorrect: true, rationale: "Une diurèse adéquate (ex: > 0,5 mL/kg/h chez l'adulte) témoigne d'une volémie et d'une perfusion d'organes préservées." },
            { text: "Savoir s'il a bu assez de soda dans la journée", isCorrect: false },
            { text: "Vérifier la couleur de ses chaussettes", isCorrect: false },
            { text: "Calculer la taxe municipale d'assainissement", isCorrect: false }
        ]
    },
    {
        question: "Quel matériel l'ISP utilise-t-il pour perfuser un patient chez qui l'accès veineux périphérique est impossible en extrême urgence (voie intra-osseuse) ?",
        tags: ["ISP", "Voie intra-osseuse", "Matériel"],
        answerOptions: [
            { text: "Un pistolet ou une aiguille de pose intra-osseuse, ex: EZ-IO, positionnée sur le tibia ou l'humérus", isCorrect: true, rationale: "La voie intra-osseuse permet un accès vasculaire non collapsable ultra-rapide en cas d'échec des abords veineux périphériques." },
            { text: "Une perceuse à percussion de chantier de 12 mm", isCorrect: false },
            { text: "Un simple cure-dents en bois stérile", isCorrect: false },
            { text: "Une paille en plastique jetable", isCorrect: false }
        ]
    },
    {
        question: "Quelle est la contre-indication principale à la pose d'une voie intra-osseuse sur un membre ?",
        tags: ["ISP", "Voie intra-osseuse", "Contre-indications"],
        answerOptions: [
            { text: "La présence d'une fracture sur le même os ou une infection cutanée locale au site de ponction", isCorrect: true, rationale: "Piquer dans un os fracturé entraînerait une fuite extravasculaire massive et un risque septique majeur." },
            { text: "Avoir le bras droit plus long que le gauche", isCorrect: false },
            { text: "Être gaucher ou droitier", isCorrect: false },
            { text: "Avoir des tatouages sur l'avant-bras", isCorrect: false }
        ]
    },
    {
        question: "Quel est le rôle de l'ISP dans le cadre du soutien sanitaire opérationnel (SSO) lors d'un incendie de grande envergure pour les sapeurs-pompiers ?",
        tags: ["ISP", "SSO", "Incendie"],
        answerOptions: [
            { text: "Surveiller les constantes des porteurs d'ARI, assurer l'hydratation, la récupération thermique et dépister les signes d'épuisement ou de coup de chaleur", isCorrect: true, rationale: "Le SSO protège la santé des intervenants exposés à des efforts intenses en ambiance chaude et toxique." },
            { text: "Distribuer des glaces à la vanille aux spectateurs", isCorrect: false },
            { text: "Laver les casques des chefs de groupe", isCorrect: false },
            { text: "Jouer de la trompette pour encourager les troupes", isCorrect: false }
        ]
    },
    {
        question: "Quelle est la température corporelle seuil au-delà de laquelle on parle d'hyperthermie maligne ou de coup de chaleur d'exercice chez un intervenant en feu de forêt ou structure ?",
        tags: ["ISP", "Coup de chaleur", "Température"],
        answerOptions: [
            { text: "Supérieure à 40°C associée à des troubles neurologiques", isCorrect: true, rationale: "C'est une urgence vitale absolue qui nécessite un refroidissement immédiat pour éviter les lésions cérébrales et multi-viscérales." },
            { text: "Exactement 37,0°C au repos", isCorrect: false },
            { text: "Inférieure à 35°C", isCorrect: false },
            { text: "Une température normale de 36,5°C", isCorrect: false }
        ]
    },
    {
        question: "Comment l'ISP procède-t-il au refroidissement rapide d'un sapeur-pompier victime d'un coup de chaleur d'exercice en intervention ?",
        tags: ["ISP", "Refroidissement", "Urgence"],
        answerOptions: [
            { text: "Immersion dans l'eau fraîche si possible, application de vagues de linges humides et ventilés, et hydratation/perfusion selon protocole", isCorrect: true, rationale: "Le refroidissement externe agité (immersion ou vaporisation-ventilation) est la mesure la plus efficace pour abaisser la température corporelle centrale." },
            { text: "Le couvrir de trois grosses couvertures de laine épaisse", isCorrect: false },
            { text: "Lui donner un bain de vapeur bien chaud", isCorrect: false },
            { text: "Lui faire faire un footing supplémentaire pour transpirer", isCorrect: false }
        ]
    },
    {
        question: "Quel est l'intérêt de l'utilisation d'un capnographe (mesure du CO2 exhalé - EtCO2) par l'ISP ou le SMUR lors d'une réanimation cardio-pulmonaire ?",
        tags: ["ISP", "Capnographie", "RCP"],
        answerOptions: [
            { text: "Vérifier la bonne position de la sonde d'intubation et évaluer l'efficacité des compressions thoraciques / pronostic de réanimation", isCorrect: true, rationale: "La capnographie quantitative est le gold standard pour s'assurer que la sonde endotrachéale est bien dans la trachée et suivre la qualité de la RCP." },
            { text: "Mesurer le taux de pollution de l'air ambiant dans la rue", isCorrect: false },
            { text: "Savoir si le patient aime le café sucré", isCorrect: false },
            { text: "Vérifier la pression des bouteilles d'oxygène du VSAV", isCorrect: false }
        ]
    },
    {
        question: "Quel est le principe déontologique fondamental qui lie l'ISP dans sa pratique quotidienne vis-à-vis des données de santé des patients ?",
        tags: ["ISP", "Déontologie", "Secret professionnel"],
        answerOptions: [
            { text: "Le respect absolu du secret professionnel et de la discrétion médicale pour toutes les informations confiées ou constatées", isCorrect: true, rationale: "Comme tout professionnel de santé, l'ISP est tenu au secret professionnel sous peine de sanctions pénales et disciplinaires." },
            { text: "Publier les dossiers médicaux sur les réseaux sociaux de la caserne", isCorrect: false },
            { text: "Raconter les interventions aux journalistes le soir au café", isCorrect: false },
            { text: "Afficher la liste des patients sur la porte du garage", isCorrect: false }
        ]
    },
	// --- 60 NOUVELLES QUESTIONS ISP SUPPLÉMENTAIRES ---
    {
        question: "Quel est le principal objectif de la réalisation d'un bilan orthostatique et clinique de l'état cutané chez un patient alité de longue durée pris en charge par l'ISP ?",
        tags: ["ISP", "Gériatrie", "Escarres"],
        answerOptions: [
            { text: "Dépister la formation précoce d'escarres ou de zones de cisaillement tissulaire", isCorrect: true, rationale: "L'inspection de la peau aux points d'appui permet d'identifier l'érythème non blanchissable, stade initial de l'escarre." },
            { text: "Mesurer la taille exacte des chaussures du patient", isCorrect: false },
            { text: "Vérifier le bronzage de la peau après une exposition au soleil", isCorrect: false },
            { text: "Calculer la masse musculaire totale des bras", isCorrect: false }
        ]
    },
    {
        question: "Quelle est la définition d'un choc hypovolémique que l'ISP doit savoir identifier et traiter en urgence ?",
        tags: ["ISP", "Hémodynamique", "Choc"],
        answerOptions: [
            { text: "Une défaillance circulatoire aiguë liée à une perte importante de volume sanguin ou liquidien, entraînant une hypoperfusion tissulaire", isCorrect: true, rationale: "La chute de la volémie provoque une baisse du débit cardiaque, une tachycardie compensatrice et des signes de mauvaise perfusion." },
            { text: "Une augmentation anormale de la tension artérielle au repos", isCorrect: false },
            { text: "Un ralentissement extrême du rythme cardiaque sans gravité", isCorrect: false },
            { text: "Une simple fatigue passagère après un effort physique", isCorrect: false }
        ]
    },
    {
        question: "Quel signe clinique cutané traduit précocement une mauvaise perfusion périphérique lors d'un état de choc ou d'une hypothermie ?",
        tags: ["ISP", "Constantes", "Perfusion"],
        answerOptions: [
            { text: "Une pâleur, des marbrures cutanées et un temps de recoloration cutanée (TRC) allongé (supérieur à 3 secondes)", isCorrect: true, rationale: "Le ralentissement du TRC et la présence de marbrures témoignent de la vasoconstriction périphérique de redistribution du sang vers les organes nobles." },
            { text: "Une coloration rouge vif uniforme de tout le corps", isCorrect: false },
            { text: "Une coloration jaune intense de la peau", isCorrect: false },
            { text: "Une absence totale de modification de la peau", isCorrect: false }
        ]
    },
    {
        question: "Quel est le rôle de l'ISP face à une plaie grave des parties molles avec corps étranger enclavé ?",
        tags: ["ISP", "Traumatologie", "Plaies"],
        answerOptions: [
            { text: "Ne jamais retirer le corps étranger enclavé, le stabiliser en l'état et réaliser un pansement protecteur autour", isCorrect: true, rationale: "Retirer un corps étranger enclavé risque de déclencher ou d'aggraver une hémorragie massive incontrôlable en amont." },
            { text: "L'extraire immédiatement en tirant secrètement d'un coup sec", isCorrect: false },
            { text: "Le pousser plus profondément pour qu'il disparaisse", isCorrect: false },
            { text: "Verser de l'eau de Javel pure directement dans la plaie", isCorrect: false }
        ]
    },
    {
        question: "Comment l'ISP définit-il une dyspnée aiguë inspiratoire avec un \"stridor\" ou un \"tirage\" marqué ?",
        tags: ["ISP", "Pneumologie", "Obstruction"],
        answerOptions: [
            { text: "Une obstruction ou une atteinte des voies aériennes supérieures entraînant un bruit suraigu à l'inspiration et un effort des muscles respiratoires accessoires", isCorrect: true, rationale: "Le stridor et le tirage indiquent une gêne mécanique haute (œdème laryngé, corps étranger) menaçant l'asphyxie." },
            { text: "Une simple respiration normale et calme au repos", isCorrect: false },
            { text: "Une infection bénigne des ongles des pieds", isCorrect: false },
            { text: "Un trouble digestif passager après un repas copieux", isCorrect: false }
        ]
    },
    {
        question: "Quel examen simple l'ISP réalise-t-il pour s'assurer du bon positionnement d'un masque à oxygène ou d'un dispositif de ventilation au cours d'une détresse ?",
        tags: ["ISP", "Matériel", "Oxygénothérapie"],
        answerOptions: [
            { text: "Vérifier l'étanchéité du masque, le débit du manodétendeur et l'absence de fuite vers les yeux du patient", isCorrect: true, rationale: "Un masque mal ajusté réduit l'efficacité de l'oxygénothérapie et peut irriter la cornée si l'oxygène s'échappe vers le haut." },
            { text: "Goûter le gaz pour voir s'il est sucré", isCorrect: false },
            { text: "Regarder la couleur extérieure du tuyau en plastique", isCorrect: false },
            { text: "Mesurer le poids total de la bouteille vide", isCorrect: false }
        ]
    },
    {
        question: "Quel est l'antidote spécifique ou le traitement symptomatique de référence administré en cas de suspicion d'intoxication aux benzodiazépines avec coma profond sous protocole médical ?",
        tags: ["ISP", "Toxicologie", "Antidote"],
        answerOptions: [
            { text: "Le Flumazénil (sur prescription médicale stricte et sous surveillance monitorée en raison des risques convulsifs)", isCorrect: true, rationale: "Le flumazénil est l'antagoniste des récepteurs aux benzodiazépines, mais son utilisation nécessite de grandes précautions." },
            { text: "Du jus de citron pur en intraveineuse", isCorrect: false },
            { text: "Un café serré sans sucre", isCorrect: false },
            { text: "Un comprimé de paracétamol", isCorrect: false }
        ]
    },
    {
        question: "Quelle est la principale complication redoutée lors d'une perfusion rapide de solutés chez un insuffisant cardiaque connu ?",
        tags: ["ISP", "Cardiologie", "Complications"],
        answerOptions: [
            { text: "Une surcharge volémique conduisant à une décompensation cardiaque aiguë et à un œdème aigu du poumon (OAP)", isCorrect: true, rationale: "Le cœur défaillant ne peut pomper le volume surajouté, ce qui stagne dans les poumons et provoque l'OAP." },
            { text: "Une perte instantanée des cheveux", isCorrect: false },
            { text: "Une coloration bleue des dents", isCorrect: false },
            { text: "Une baisse immédiate de la température corporelle à 25°C", isCorrect: false }
        ]
    },
    {
        question: "Comment l'ISP identifie-t-il cliniquement un œdème aigu du poumon (OAP) cardiogénique ?",
        tags: ["ISP", "OAP", "Symptômes"],
        answerOptions: [
            { text: "Une détresse respiratoire avec angoisse, toux ramenant des crachats mousseux saumonés, et des râles crépitants à l'auscultation pulmonaire", isCorrect: true, rationale: "L'inondation alvéolaire provoque des bruits de bulles (râles crépitants) remontant des bases vers les sommets pulmonaires." },
            { text: "Un silence abdominal complet sans aucun bruit", isCorrect: false },
            { text: "Une douleur fulgurante au genou gauche", isCorrect: false },
            { text: "Une éruption cutanée sur le front", isCorrect: false }
        ]
    },
    {
        question: "Quel est le geste d'installation prioritaire à prodiguer à un patient conscient présentant un OAP avéré lors de son transport au VSAV ?",
        tags: ["ISP", "Installation", "OAP"],
        answerOptions: [
            { text: "Installer la victime en position assise ou demi-assise jambes ravies pendantes pour diminuer le retour veineux", isCorrect: true, rationale: "La position assise soulage la charge de travail cardiaque et diminue la pression capillaire pulmonaire." },
            { text: "Coucher la victime totalement à plat dos jambes surélevées", isCorrect: false },
            { text: "Mettre le patient sur le ventre la tête tournée sur le côté", isCorrect: false },
            { text: "L'accrocher verticalement par les pieds", isCorrect: false }
        ]
    },
    {
        question: "Qu'appelle-t-on une phlébite ou thrombose veineuse profonde (TVP) que l'ISP peut suspecter chez un patient immobilisé ?",
        tags: ["ISP", "Vasculaire", "Phlébite"],
        answerOptions: [
            { text: "La formation d'un caillot sanguin dans une veine profonde, le plus souvent des membres inférieurs, avec douleur au mollet et œdème unilatéral", isCorrect: true, rationale: "La TVP se manifeste par un mollet douloureux, chaud, tendu, avec un signe de Homans parfois positif et un œdème unilatéral." },
            { text: "Une inflammation superficielle de la peau suite à un coup de soleil", isCorrect: false },
            { text: "Une cassure de l'ongle du gros orteil", isCorrect: false },
            { text: "Une contraction musculaire après une course à pied", isCorrect: false }
        ]
    },
    {
        question: "Quel est le risque évolutif majeur et immédiat d'une thrombose veineuse profonde non prise en charge ?",
        tags: ["ISP", "Complications", "Embolie pulmonaire"],
        answerOptions: [
            { text: "L'embolie pulmonaire par migration du caillot vers le réseau artériel pulmonaire", isCorrect: true, rationale: "Le détachement du caillot (cruor) entraîne son voyage via le cœur droit jusqu'aux artères des poumons, provoquant une obstruction potentiellement mortelle." },
            { text: "La pousse rapide des poils sur les jambes", isCorrect: false },
            { text: "Un changement de couleur des yeux", isCorrect: false },
            { text: "Une guérison spontanée en 2 minutes", isCorrect: false }
        ]
    },
    {
        question: "Quels sont les signes cliniques cardinaux d'une embolie pulmonaire grave que l'ISP doit dépister ?",
        tags: ["ISP", "Embolie pulmonaire", "Symptômes"],
        answerOptions: [
            { text: "Une dyspnée brutale inexpliquée, une douleur thoracique, une tachycardie, une angoisse et une désaturation sous oxygène", isCorrect: true, rationale: "L'obstruction des artères pulmonaires bloque les échanges gazeux et surcharge le cœur droit, générant cette triade symptomatique." },
            { text: "Un mal de dents unilatéral", isCorrect: false },
            { text: "Des démangeaisons intenses à la plante des pieds", isCorrect: false },
            { text: "Une envie irrésistible de chanter", isCorrect: false }
        ]
    },
    {
        question: "Quel est le rôle de l'ISP dans la prise en charge d'une crise de colique néphrétique aiguë hyperalgique ?",
        tags: ["ISP", "Urologie", "Douleur"],
        answerOptions: [
            { text: "Évaluer la douleur (EVA), rassurer le patient, rechercher des signes associés (urines sanglantes) et administrer des antalgiques selon protocole", isCorrect: true, rationale: "La colique néphrétique provoque une douleur lombaire intense irradiant vers les OGE, nécessitant une analgésie protocolisée rapide." },
            { text: "Demander au patient de porter des charges lourdes pour décoincer le calcul", isCorrect: false },
            { text: "Lui interdire de boire la moindre goutte d'eau pendant 3 jours", isCorrect: false },
            { text: "Lui masser violemment le dos avec une brique", isCorrect: false }
        ]
    },
    {
        question: "Quelle est la définition d'une rétention aiguë d'urine (RAU) que l'ISP peut rencontrer chez un patient âgé se plaignant de douleurs pelviennes intenses ?",
        tags: ["ISP", "Urologie", "RAU"],
        answerOptions: [
            { text: "L'impossibilité totale d'uriner malgré une vessie pleine, avec constitution d'un globe vésical douloureux palpable au bas-ventre", isCorrect: true, rationale: "Le globe vésical se manifeste par une matité sus-pubienne et une douleur hypogastrique intense nécessitant un sondage urinaire évacuateur ou en urgence." },
            { text: "Une envie fréquente d'uriner toutes les 30 secondes de quelques gouttes", isCorrect: false },
            { text: "Une absence complète de production d'urines par les reins (anurie)", isCorrect: false },
            { text: "Une coloration fluorescente des urines", isCorrect: false }
        ]
    },
    {
        question: "Quelle précaution infirmière majeure doit-on respecter lors de la vidange d'un globe vésical volumineux par sondage urinaire en urgence ?",
        tags: ["ISP", "Sondage", "Précautions"],
        answerOptions: [
            { text: "Évacuer les urines de manière fractionnée ou progressive pour éviter une hémorragie ab ingestio de la muqueuse vésicale par décompression brutale", isCorrect: true, rationale: "Une décompression trop rapide d'une vessie très distendue peut provoquer une hématome ex-vacuo et un choc hypotensif." },
            { text: "Retirer la sonde d'un coup sec au bout de 5 secondes", isCorrect: false },
            { text: "Injecter de l'air comprimé dans la sonde", isCorrect: false },
            { text: "Demander au patient de sauter sur place", isCorrect: false }
        ]
    },
    {
        question: "Qu'est-ce qu'un accident vasculaire cérébral (AVC) ischémique par rapport à un AVC hémorragique ?",
        tags: ["ISP", "Neurologie", "AVC"],
        answerOptions: [
            { text: "L'ischémie résulte de l'occlusion d'un vaisseau par un caillot, tandis que l'hémorragie résulte de la rupture d'un vaisseau dans le cerveau", isCorrect: true, rationale: "Ces deux mécanismes constituent l'AVC, nécessitant une orientation rapide vers une unité neuro-vasculaire (UNV) après alerte du SAMU." },
            { text: "Il n'y a aucune différence médicale entre les deux", isCorrect: false },
            { text: "L'ischémie touche uniquement les pieds et l'hémorragie les mains", isCorrect: false },
            { text: "L'un est provoqué par le froid et l'autre par le chaud", isCorrect: false }
        ]
    },
    {
        question: "Quel test clinique rapide l'ISP réalise-t-il pour dépister une orientation diagnostique d'AVC sur le terrain ?",
        tags: ["ISP", "AVC", "Scores"],
        answerOptions: [
            { text: "Le test de Cincinnati ou score FAST (Face, Arm, Speech, Time)", isCorrect: true, rationale: "Le score FAST évalue la faiblesse faciale, la faiblesse des bras et les troubles de la parole pour repérer un déficit neurologique focal aigu." },
            { text: "Mesurer la pointure des chaussures", isCorrect: false },
            { text: "Tester l'acuité visuelle de loin avec un journal", isCorrect: false },
            { text: "Évaluer la souplesse de la colonne vertébrale", isCorrect: false }
        ]
    },
    {
        question: "Pourquoi est-il crucial de consigner l'heure exacte du début des symptômes (ou de la dernière fois où le patient a été vu normal) lors d'un AVC ?",
        tags: ["ISP", "AVC", "Délai thérapeutique"],
        answerOptions: [
            { text: "Pour déterminer l'éligibilité du patient aux traitements de thrombolyse ou de thrombectomie mécanique (fenêtre thérapeutique stricte)", isCorrect: true, rationale: "Les traitements d'urgence de reperfusion cérébrale ont une efficacité maximale dans un délai restreint (généralement 4h30 pour la thrombolyse)." },
            { text: "Pour savoir si le patient a bien dormi la nuit", isCorrect: false },
            { text: "Pour remplir correctement les papiers de l'assurance véhicule", isCorrect: false },
            { text: "Pour calculer la consommation de carburant du VSAV", isCorrect: false }
        ]
    },
    {
        question: "Quel est le comportement à adopter par l'ISP face à un patient agité présentant des troubles psychiatriques aigus en intervention ?",
        tags: ["ISP", "Psychiatrie", "Sécurité"],
        answerOptions: [
            { text: "Assurer la sécurité de l'équipe et du patient, maintenir une communication calme, éviter l'affrontement direct et requérir du renfort si besoin", isCorrect: true, rationale: "La sécurité des intervenants prime ; la désescalade verbale et l'approche non menaçante sont privilégiées avant toute sédation protocolisée." },
            { text: "Provoquer verbalement le patient pour le tester", isCorrect: false },
            { text: "L'isoler dans une pièce sombre sans surveillance", isCorrect: false },
            { text: "Quitter les lieux immédiatement en abandonnant la victime", isCorrect: false }
        ]
    },
    {
        question: "Qu'est-ce que la manœuvre de Heimlich que l'ISP applique face à une obstruction des voies aériennes par corps étranger (OVACE) totale chez l'adulte conscient ?",
        tags: ["ISP", "Urgences", "OVACE"],
        answerOptions: [
            { text: "Des compressions abdominales brusques dirigées vers l'arrière et le haut exercées entre le nombril et la xiphoïde", isCorrect: true, rationale: "Cette technique crée une surpression sous-diaphragmatique qui chasse le corps étranger logé dans la trachée." },
            { text: "Des tapes vigoureuses sur le sommet du crâne", isCorrect: false },
            { text: "Un massage cardiaque externe sur un patient debout", isCorrect: false },
            { text: "Une traction sur les bras vers l'avant", isCorrect: false }
        ]
    },
    {
        question: "Quelle est la conduite à tenir si la victime d'une obstruction des voies aériennes devient inconsciente sous les yeux de l'ISP ?",
        tags: ["ISP", "OVACE", "Réanimation"],
        answerOptions: [
            { text: "Accompagner la victime au sol, débuter immédiatement la RCP (commencer par les compressions thoraciques) et vérifier la présence d'un corps étranger dans la bouche avant les insufflations", isCorrect: true, rationale: "La perte de conscience entraîne le relâchement musculaire ; la RCP standard s'applique en veillant à retirer un éventuel corps étranger visible." },
            { text: "Laisser la victime allongée sans rien faire en attendant le réveil", isCorrect: false },
            { text: "L'asseoir sur une chaise et lui donner de l'eau", isCorrect: false },
            { text: "Faire des étirements des jambes", isCorrect: false }
        ]
    },
    {
        question: "Quel est l'intérêt de la pose d'une minerve (collier cervical) rigide ou réglable lors d'un traumatisme de la voie publique à cinétique violente ?",
        tags: ["ISP", "Traumatologie", "Rachis"],
        answerOptions: [
            { text: "Limiter les mouvements de la colonne cervicale pour prévenir l'aggravation d'une lésion médullaire potentielle", isCorrect: true, rationale: "Le collier cervical maintient le rachis en position neutre, bien qu'il doive être associé à un maintien manuel et un plan dur ou matelas coquille." },
            { text: "Guérir instantanément les entorses du cou", isCorrect: false },
            { text: "Maintenir la mâchoire fermée pour empêcher de parler", isCorrect: false },
            { text: "Améliorer la circulation sanguine dans le cerveau", isCorrect: false }
        ]
    },
    {
        question: "Qu'est-ce qu'un matelas immobilisateur à dépression (MID ou matelas coquille) utilisé par les équipes de secours ?",
        tags: ["ISP", "Matériel", "Immobilisation"],
        answerOptions: [
            { text: "Un dispositif souple rempli de billes de polystyrène qui, une fois l'air vidé, devient rigide et épouse parfaitement la morphologie du traumatisé", isCorrect: true, rationale: "Le MID assure une immobilisation axiale globale parfaite du corps entier lors du transport des polytraumatisés." },
            { text: "Un matelas gonflable de camping pour dormir en cas de garde longue", isCorrect: false },
            { text: "Un coussin chauffant pour soulager les lumbagos", isCorrect: false },
            { text: "Un brancard de fortune en bois massif", isCorrect: false }
        ]
    },
    {
        question: "Quel paramètre mesure l'oxymètre de pouls (SpO2) manipulé par l'ISP au bout du doigt ?",
        tags: ["ISP", "Constantes", "SpO2"],
        answerOptions: [
            { text: "Le pourcentage d'hémoglobine saturée en oxygène dans le sang circulant périphérique", isCorrect: true, rationale: "La SpO2 donne une indication rapide de l'oxygénation du sang, bien qu'elle doive être interprétée avec prudence en cas de choc ou d'intoxication au CO." },
            { text: "La pression artérielle systolique en millimètres de mercure", isCorrect: false },
            { text: "La quantité exacte de sucre dissous dans le sang", isCorrect: false },
            { text: "La fréquence des battements électriques du cœur", isCorrect: false }
        ]
    },
    {
        question: "Quelle est la valeur normale d'une SpO2 chez un sujet sain respirant l'air ambiant au niveau de la mer ?",
        tags: ["ISP", "Constantes", "Valeurs normales"],
        answerOptions: [
            { text: "Comprise entre 95% et 100%", isCorrect: true, rationale: "En air ambiant, une saturation normale se situe quasi exclusivement dans cette fourchette." },
            { text: "Entre 50% et 60%", isCorrect: false },
            { text: "Exactement à 80%", isCorrect: false },
            { text: "Entre 20% et 30%", isCorrect: false }
        ]
    },
    {
        question: "Qu'est-ce qu'une insuffisance respiratoire chronique avec risque d'hypoxie tolérée (ex: patient BPCO) concernant l'administration d'oxygène ?",
        tags: ["ISP", "Pneumologie", "Oxygénothérapie"],
        answerOptions: [
            { text: "Des patients dont le stimulus respiratoire est commandé par l'hypoxie ; l'oxygène ne doit pas être administré à haut débit aveuglément sous peine d'arrêt respiratoire", isCorrect: true, rationale: "Chez certains BPCO, un excès d'oxygène supprime le stimulus hypoxique qui les fait respirer, entraînant une hypercapnie mortelle (narcose à l'CO2)." },
            { text: "Des patients qui ont besoin de 100 litres d'oxygène par minute en permanence", isCorrect: false },
            { text: "Des personnes qui ne supportent pas l'air de la campagne", isCorrect: false },
            { text: "Des sportifs de haut niveau en plein effort", isCorrect: false }
        ]
    },
    {
        question: "Quel rôle joue l'ISP lors de la réalisation d'un bilan circonstanciel sur une scène d'accident de la circulation ? ",
        tags: ["ISP", "Bilan", "Secours routier"],
        answerOptions: [
            { text: "Analyser le mécanisme de l'accident, la cinétique, les déformations du véhicule, le port des ceintures et le nombre de victimes", isCorrect: true, rationale: "L'analyse cinétique permet d'anticiper les lésions internes cachées des victimes (polytraumatisme)." },
            { text: "Compter le nombre de roues crevées sur les voitures", isCorrect: false },
            { text: "Estimer le coût total des réparations de carrosserie", isCorrect: false },
            { text: "Demander aux automobilistes de changer de file", isCorrect: false }
        ]
    },
    {
        question: "Comment l'ISP procède-t-il à la désinfection d'un plan de travail ou du brancard du VSAV après le transport d'un patient infectieux ?",
        tags: ["ISP", "Hygiène", "Désinfection"],
        answerOptions: [
            { text: "Utilisation d'un détergent-désinfectant aux normes en vigueur en respectant le temps de contact recommandé", isCorrect: true, rationale: "Le bionettoyage respecte un protocole strict : nettoyage, rinçage éventuel, puis application d'un désinfectant homologué actif sur les germes ciblés." },
            { text: "Passer un simple coup de balai sec sans produit", isCorrect: false },
            { text: "Laisser le véhicule ouvert au soleil pendant une heure", isCorrect: false },
            { text: "Jeter de l'eau de pluie sur les sièges", isCorrect: false }
        ]
    },
    {
        question: "Quel est le principe de la règle des 3C en présence d'une fausse route alimentaire ou d'un corps étranger chez l'enfant (Toux, Cyanose, Détresse) ?",
        tags: ["ISP", "Pédiatrie", "Pédiatrie secours"],
        answerOptions: [
            { text: "Reconnaître l'installation immédiate d'une toux soudaine, d'une cyanose et d'une détresse respiratoire marquant l'inhalation", isCorrect: true, rationale: "Ces trois signes cliniques caractérisent de manière infaillible l'inhalation d'un corps étranger chez le nourrisson ou l'enfant." },
            { text: "Calculer la température, le poids et la taille", isCorrect: false },
            { text: "Vérifier la couleur des yeux, des cheveux et de la peau", isCorrect: false },
            { text: "Compter les dents du haut et du bas", isCorrect: false }
        ]
    },
    {
        question: "Quelle technique de désobstruction des voies aériennes privilégie-t-on chez un nourrisson de moins d'un an conscient en cas d'OVACE ?",
        tags: ["ISP", "Pédiatrie", "OVACE nourrisson"],
        answerOptions: [
            { text: "Alterner 5 claques dans le dos (tête penchée vers le bas) et 5 compressions thoraciques (nourrisson sur le dos)", isCorrect: true, rationale: "Chez le nourrisson, les compressions abdominales de Heimlich sont proscrites en raison du risque de lésion des organes pleins abdominaux ; on réalise des compressions thoraciques." },
            { text: "La manœuvre de Heimlich classique de l'adulte debout", isCorrect: false },
            { text: "Lui donner un grand verre d'eau pétillante", isCorrect: false },
            { text: "Le suspendre par les deux jambes en l'agitant", isCorrect: false }
        ]
    },
    {
        question: "Quel est l'objectif de la surveillance de la glycémie capillaire chez un patient comateux d'étiologie indéterminée pris en charge par l'ISP ?",
        tags: ["ISP", "Urgences", "Coma"],
        answerOptions: [
            { text: "Éliminer ou confirmer immédiatement une hypoglycémie, cause fréquente, simple et immédiatement réversible de coma", isCorrect: true, rationale: "La mesure de la glycémie fait partie des gestes systématiques devant tout trouble de la conscience pour administrer du glucose si besoin." },
            { text: "Savoir s'il a mangé des bonbons la veille au soir", isCorrect: false },
            { text: "Calculer le régime alimentaire à long terme", isCorrect: false },
            { text: "Vérifier le bon fonctionnement du lecteur de glycémie", isCorrect: false }
        ]
    },
    {
        question: "Qu'est-ce qu'une brûlure chimique cutanée et quelle est l'action d'urgence absolue que l'ISP doit réaliser avant tout autre soin ?",
        tags: ["ISP", "Brûlures", "Chimique"],
        answerOptions: [
            { text: "Un contact avec un produit corrosif (acide ou base) nécessitant un lavage immédiat, abondant et prolongé à l'eau ou solution spécifique", isCorrect: true, rationale: "Le lavage immédiat et prolongé permet d'éliminer la substance chimique et de stopper la destruction tissulaire en cours." },
            { text: "Appliquer de la moutarde forte pour neutraliser l'acide", isCorrect: false },
            { text: "Frotter la zone avec une brosse métallique sèche", isCorrect: false },
            { text: "Recouvrir la brûlure avec un sac plastique étanche sans laver", isCorrect: false }
        ]
    },
    {
        question: "Pourquoi est-il interdit d'utiliser de l'eau pour éteindre ou laver certains produits chimiques spécifiques (ex: métaux réactifs comme le sodium ou le lithium) ?",
        tags: ["ISP", "Risques chimiques", "Contre-indications"],
        answerOptions: [
            { text: "Parce que l'eau réagit violemment avec ces métaux en dégageant de l'hydrogène et de la chaleur, provoquant une explosion ou aggravation de la brûlure", isCorrect: true, rationale: "Ces produits réagissent chimiquement au contact de l'eau ; l'extinction et le lavage se font selon des protocoles spécifiques (ex: terre, sable ou huile minérale selon le produit)." },
            { text: "Parce que l'eau abîme la peinture des outils", isCorrect: false },
            { text: "Parce que l'eau est trop froide en hiver", isCorrect: false },
            { text: "Parce que cela rend le métal invisible", isCorrect: false }
        ]
    },
    {
        question: "Quel est le rôle de l'ISP lors de la prise en charge d'un accouchement inopiné sur la voie publique ou au domicile ?",
        tags: ["ISP", "Obstétrique", "Accouchement"],
        answerOptions: [
            { text: "Préparer le matériel stérile, accueillir l'enfant, veiller au dégagement des voies aériennes, sécher et réchauffer le nouveau-né, et le placer contre la mère", isCorrect: true, rationale: "L'accouchement inopiné nécessite d'accueillir le nouveau-né en prévenant l'hypothermie et en surveillant l'état de la mère et du bébé." },
            { text: "Tirer fermement sur le cordon ombilical pour accélérer la sortie", isCorrect: false },
            { text: "Laisser le bébé sur le sol froid sans surveillance", isCorrect: false },
            { text: "Attendre sagement les bras croisés l'arrivée des pompiers de la ville voisine", isCorrect: false }
        ]
    },
    {
        question: "Quelle est la conduite à tenir immédiate face à un nouveau-né qui ne respire pas et présente un rythme cardiaque très bas (< 60 bpm) à la naissance ?",
        tags: ["ISP", "Nouveau-né", "Réanimation néonatale"],
        answerOptions: [
            { text: "Débuter une ventilation artificielle efficace au masque et insufflateur manuel avec de l'air ou de l'oxygène selon protocoles, et alerter le SMUR pédiatrique", isCorrect: true, rationale: "La cause principale d'arrêt cardiaque chez le nouveau-né est l'asphyxie ; la ventilation est la mesure de réanimation primordiale et salvatrice." },
            { text: "Lui donner une tape sur la joue très fort", isCorrect: false },
            { text: "Le mettre dans l'eau glacée pour le stimuler", isCorrect: false },
            { text: "Attendre 15 minutes que la respiration revienne toute seule", isCorrect: false }
        ]
    },
    {
        question: "Qu'appelle-t-on le score d'Apgar évalué chez le nouveau-né à 1, 5 et 10 minutes de vie ?",
        tags: ["ISP", "Nouveau-né", "Score d'Apgar"],
        answerOptions: [
            { text: "Une cotation évaluant la fréquence cardiaque, la respiration, le tonus musculaire, la réactivité et la coloration cutanée", isCorrect: true, rationale: "L'Apgar permet d'évaluer rapidement l'état de santé général du nouveau-né à la naissance sur une échelle de 0 à 10." },
            { text: "Un test de vision de loin pour bébé", isCorrect: false },
            { text: "La mesure du tour de tête et du poids", isCorrect: false },
            { text: "L'évaluation de la température de la chambre", isCorrect: false }
        ]
    },
    {
        question: "Quel est le risque principal d'une hémorragie de la délivrance chez la maman venant d'accoucher ?",
        tags: ["ISP", "Obstétrique", "Hémorragie"],
        answerOptions: [
            { text: "Un choc hypovolémique rapide et grave par saignement vaginal abondant suite à une mauvaise rétractation utérine", isCorrect: true, rationale: "L'atonie utérine après l'expulsion du placenta peut provoquer un saignement massif mettant en jeu le pronostic vital de la accouchée." },
            { text: "Une simple fatigue musculaire dans les jambes", isCorrect: false },
            { text: "Une perte de cheveux temporaire", isCorrect: false },
            { text: "Une augmentation de la voix", isCorrect: false }
        ]
    },
    {
        question: "Quel geste infirmier ou de secours réalise-t-on pour aider à la rétractation utérine en cas d'hémorragie de la délivrance préhospitalière ?",
        tags: ["ISP", "Obstétrique", "Geste d'urgence"],
        answerOptions: [
            { text: "Des massages utérins circulaires externes sur le fond de l'utérus (au niveau sus-pubien) pour stimuler sa contraction", isCorrect: true, rationale: "Le massage utérin externe favorise l'hémostase par compression des vaisseaux utérins par le myomètre contracté." },
            { text: "Poser un garrot autour du bassin de la maman", isCorrect: false },
            { text: "Faire faire des abdos à la patiente", isCorrect: false },
            { text: "Appliquer de l'huile chaude sur le ventre", isCorrect: false }
        ]
    },
    {
        question: "Quelle est la définition de la chaîne de survie dans la prise en charge d'un arrêt cardiorespiratoire ?",
        tags: ["ISP", "ACR", "Chaîne de survie"],
        answerOptions: [
            { text: "L'enchaînement des maillons : reconnaissance précoce / alerte, RCP précoce, défibrillation précoce, et soins de réanimation avancés", isCorrect: true, rationale: "Chaque maillon de la chaîne est solidaire et indispensable pour maximiser les chances de survie sans séquelles d'un ACR." },
            { text: "Une chaîne métallique pour attacher le matériel dans le camion", isCorrect: false },
            { text: "Le nombre de pompiers présents dans la caserne", isCorrect: false },
            { text: "La liste des médicaments de la pharmacie", isCorrect: false }
        ]
    },
    {
        question: "Quel est le rythme des compressions thoraciques et des insufflations lors de la RCP de base chez l'adulte (ratio RCP) ?",
        tags: ["ISP", "ACR", "RCP"],
        answerOptions: [
            { text: "30 compressions thoraciques pour 2 insufflations, à une fréquence de 100 à 120 compressions par minute", isCorrect: true, rationale: "C'est le standard international recommandé par l'European Resuscitation Council (ERC) pour optimiser le débit sanguin cérébral et coronaire." },
            { text: "10 compressions pour 10 insufflations", isCorrect: false },
            { text: "100 compressions continues sans aucune insufflation", isCorrect: false },
            { text: "5 compressions pour 1 insufflation lente", isCorrect: false }
        ]
    },
    {
        question: "Quelle est la profondeur idéale des compressions thoraciques réalisée lors du massage cardiaque chez l'adulte ?",
        tags: ["ISP", "ACR", "Profondeur"],
        answerOptions: [
            { text: "Entre 5 cm et 6 cm (sans dépasser 6 cm)", isCorrect: true, rationale: "Cette profondeur permet d'écraser suffisamment le cœur entre le sternum et le rachis pour générer un débit cardiaque artificiel efficace." },
            { text: "Exactement 1 cm", isCorrect: false },
            { text: "Entre 15 cm et 20 cm", isCorrect: false },
            { text: "Effleurer à peine la peau sans appuyer", isCorrect: false }
        ]
    },
    {
        question: "Quel rôle joue le défibrillateur automatisé externe (DAE) lorsqu'il analyse le rythme cardiaque d'une victime ?",
        tags: ["ISP", "DAE", "Défibrillation"],
        answerOptions: [
            { text: "Identifier la présence d'un rythme choquable (Fibrillation ventriculaire ou Tachycardie ventriculaire sans pouls) et recommander ou délivrer le choc", isCorrect: true, rationale: "Le DAE analyse l'activité électrique du cœur et ne délivre un choc que si un rythme malin choquable est détecté." },
            { text: "Recharger la batterie du téléphone portable du secouriste", isCorrect: false },
            { text: "Mesurer la tension artérielle du patient", isCorrect: false },
            { text: "Gonfler un matelas d'immobilisation", isCorrect: false }
        ]
    },
    {
        question: "Que doit faire l'ISP juste avant que le DAE ne délivre un choc électrique externe ?",
        tags: ["ISP", "DAE", "Sécurité"],
        answerOptions: [
            { text: "S'assurer formellement que personne ne touche la victime (ordonner \"écoutez-moi, éloignez-vous\")", isCorrect: true, rationale: "Pour éviter que le courant du choc ne traverse une autre personne présente autour de la victime, la sécurité impose le « everybody clear »." },
            { text: "Maintenir les mains fermement sur la poitrine du patient", isCorrect: false },
            { text: "Embrasser le front de la victime pour porter chance", isCorrect: false },
            { text: "Fermer les yeux et attendre le bruit", isCorrect: false }
        ]
    },
    {
        question: "Quel est l'intérêt de la pose d'une voie veineuse périphérique (VVP) de gros calibre (ex: 16G ou 18G - couleur grise ou verte) en situation d'urgence critique ?",
        tags: ["ISP", "VVP", "Urgences"],
        answerOptions: [
            { text: "Permettre un débit de perfusion et d'administration médicamenteuse rapide en cas de choc ou d'hémorragie", isCorrect: true, rationale: "Selon la loi de Poiseuille, le débit est proportionnel au rayon du cathéter à la puissance 4 ; un gros calibre autorise des débits massifs." },
            { text: "Faire moins mal au patient lors de la piqûre", isCorrect: false },
            { text: "Éviter totalement l'utilisation de sparadrap", isCorrect: false },
            { text: "Permettre de prélever de l'eau pure", isCorrect: false }
        ]
    },
    {
        question: "Comment l'ISP procède-t-il à la fixation et à la sécurisation d'une voie veineuse périphérique après sa pose réussie ?",
        tags: ["ISP", "VVP", "Fixation"],
        answerOptions: [
            { text: "Utilisation d'un pansement adhésif transparent stérile semi-perméable, raccordement d'un prolongateur ou d'un bouchon purgé, et bouclage de sécurité", isCorrect: true, rationale: "Le pansement transparent permet de surveiller en permanence le point de ponction tout en maintenant l'asepsie et la stabilité du cathéter." },
            { text: "Entourer le bras de ruban adhésif toilé gris de chantier en serrant fort", isCorrect: false },
            { text: "Laisser le cathéter libre sans pansement qui pend dans le vide", isCorrect: false },
            { text: "Fixer le tout avec du fil de fer barbelé", isCorrect: false }
        ]
    },
    {
        question: "Quelle est la définition d'un choc septique que l'ISP peut suspecter chez un patient fébrile présentant des signes de défaillance hémodynamique ?",
        tags: ["ISP", "Infectieux", "Choc septique"],
        answerOptions: [
            { text: "Un état de choc lié à une infection grave provoquant une vasoplégie généralisée, une hypotension résistante au remplissage et une hypoperfusion tissulaire", isCorrect: true, rationale: "L'infection sévère libère des toxines induisant une baisse drastique des résistances vasculaires systémiques et un effondrement tensionnel." },
            { text: "Une simple rhinite allergique printanière", isCorrect: false },
            { text: "Une fracture ouverte du fémur après une chute", isCorrect: false },
            { text: "Une angine blanche bénigne sans fièvre", isCorrect: false }
        ]
    },
    {
        question: "Quel est le signe d'alerte cutané ou général caractéristique d'un purpura fulminans (infection à méningocoque) que l'ISP doit savoir dépister d'urgence ?",
        tags: ["ISP", "Infectieux", "Purpura fulminans"],
        answerOptions: [
            { text: "Des taches rouges ou violacées sur la peau (pétéchies ou ecchymoses) qui ne s'effacent pas à la vitropression, associées à de la fièvre et des signes de choc", isCorrect: true, rationale: "Le purpura fulminans est une urgence absolue pédiatrique et médicale engageant le pronostic vital à court terme (nécessite une antibiothérapie précoce)." },
            { text: "Une peau bronzée suite à des vacances au soleil", isCorrect: false },
            { text: "Des boutons de varicelle classiques qui grattent beaucoup", isCorrect: false },
            { text: "Une pâleur passagère due au stress de l'examen", isCorrect: false }
        ]
    },
    {
        question: "Quel est le rôle de l'ISP lors du transport sanitaire non urgent ou urgent d'un patient sous oxygénothérapie de longue durée ?",
        tags: ["ISP", "Oxygénothérapie", "Transport"],
        answerOptions: [
            { text: "Vérifier l'autonomie des bouteilles d'oxygène, le débit prescrit, le bon fonctionnement du manodétendeur et surveiller la SpO2 en continu", isCorrect: true, rationale: "Le calcul de l'autonomie de la bouteille d'oxygène avant le départ est une obligation de sécurité incontournable pour tout transport." },
            { text: "Laisser la bouteille vide dans le placard de la caserne", isCorrect: false },
            { text: "Demander au patient de retenir sa respiration pendant tout le trajet", isCorrect: false },
            { text: "Remplacer l'oxygène par de l'air comprimé de pneu", isCorrect: false }
        ]
    },
    {
        question: "Quelle est la conduite à tenir infirmière face à une hémorragie extériorisée par plaie des membres où la pose d'un garrot est impossible ou inefficace (ex: pli de l'aine ou aisselle - zone jonctionnelle) ?",
        tags: ["ISP", "Hémorragie", "Compression jonctionnelle"],
        answerOptions: [
            { text: "Réaliser un bourrage de plaie (packing) avec une gauze hémostatique ou stérile suivi d'une compression manuelle ferme maintenue", isCorrect: true, rationale: "Le packing de plaie permet de combler l'espace profond et d'exercer une pression directe sur le vaisseau qui saigne dans les zones de jonction." },
            { text: "Laisser le sang couler sans intervenir", isCorrect: false },
            { text: "Mettre un bandage lâche sans appuyer", isCorrect: false },
            { text: "Jeter de l'eau froide sur la blessure", isCorrect: false }
        ]
    },
    {
        question: "Quel est le principe de base de l'hygiène des mains indispensable pour l'ISP entre deux interventions ou deux patients ?",
        tags: ["ISP", "Hygiène", "Lavage des mains"],
        answerOptions: [
            { text: "Friction hydro-alcoolique (FHA) sur mains sèches et non souillées, ou lavage au savon doux et solution antiseptique si mains souillées", isCorrect: true, rationale: "La friction hydro-alcoolique est la méthode de référence, rapide et très efficace pour éliminer la flore transitoire et prévenir les infections nosocomiales." },
            { text: "S'essuyer les mains sur le pantalon de la tenue de feu", isCorrect: false },
            { text: "Utiliser uniquement de l'eau claire sans savon", isCorrect: false },
            { text: "Ne jamais se laver les mains pour garder son immunité", isCorrect: false }
        ]
    },
    {
        question: "Quel est le critère médico-légal et éthique fondamental qui autorise un ISP à réaliser des gestes relevant des PISU ou des protocoles d'urgence en mission ?",
        tags: ["ISP", "Réglementation", "Législation"],
        answerOptions: [
            { text: "L'exercice de sa profession encadré par son diplôme d'État, son engagement d'ISP et la validation nominative des protocoles écrits par le médecin chef du SSSM", isCorrect: true, rationale: "L'ISP engage sa responsabilité professionnelle dans le cadre strict des protocoles écrits et signés par l'autorité médicale du service de santé." },
            { text: "Avoir le permis de conduire poids lourd valide", isCorrect: false },
            { text: "Le décider seul selon son humeur du matin", isCorrect: false },
            { text: "L'autorisation verbale d'un passant dans la rue", isCorrect: false }
        ]
    }
];