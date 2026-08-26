const masterQuestionBank = [
    // --- MODULE XABCDEF & BILANS APPROfondis ---
    {
        question: "Que représente la lettre 'X' dans la démarche d'évaluation initiale XABCDEF ?",
        answerOptions: [
            { text: "Exsanguinating hemorrhage (Hémorragie massive / exsanguino-génératrice)", isCorrect: true, rationale: "Le 'X' prime sur tout le reste : la prise en charge immédiate d'une hémorragie externe massive." },
            { text: "Examen neurologique approfondi", isCorrect: false, rationale: "Concerne la lettre D (Disability)." },
            { text: "Xylocaïne et gestion de la douleur", isCorrect: false, rationale: "Ne fait pas partie de l'acronyme initial." },
            { text: "Exposition cutanée de la victime", isCorrect: false, rationale: "Correspond à la lettre E (Exposure)." }
        ],
        tags: ["XABCDEF", "Bilans"]
    },
    {
        question: "Dans l'acronyme XABCDEF, à quoi correspond la lettre 'A' ?",
        answerOptions: [
            { text: "Airway (Voies aériennes et contrôle de la colonne cervicale)", isCorrect: true, rationale: "'A' pour Airway : libération des voies aériennes et protection cervicale associée." },
            { text: "Anamnèse des antécédents médicaux", isCorrect: false, rationale: "Relevé dans le bilan complémentaire." },
            { text: "Alerte des secours spécialisés", isCorrect: false, rationale: "L'alerte intervient dès la prise en charge globale." },
            { text: "Auscultation pulmonaire bilatérale", isCorrect: false, rationale: "Élément technique du bilan ventilatoire." }
        ],
        tags: ["XABCDEF", "Bilans"]
    },
    {
        question: "Que recherche spécifiquement le secouriste lors de l'étape 'B' (Breathing) du protocole XABCDEF ?",
        answerOptions: [
            { text: "L'évaluation de la ventilation, la fréquence respiratoire et l'oxygénation", isCorrect: true, rationale: "'B' évalue la qualité de la respiration, l'amplitude, la symétrie thoracique et la SpO2." },
            { text: "La recherche d'une hémorragie de membre", isCorrect: false, rationale: "Traité au niveau du 'X'." },
            { text: "Le contrôle de la pression artérielle", isCorrect: false, rationale: "Traité au niveau du 'C' (Circulation)." },
            { text: "Le score de Glasgow de la victime", isCorrect: false, rationale: "Évalué au niveau du 'D'." }
        ],
        tags: ["XABCDEF", "Bilans"]
    },
    {
        question: "Que gère-t-on en priorité lors de l'étape 'C' (Circulation) de la méthode XABCDEF ?",
        answerOptions: [
            { text: "L'évaluation des pouls, de la perfusion, des hémorragies et des signes de choc", isCorrect: true, rationale: "'C' analyse l'état circulatoire global et la recherche de foyers hémorragiques secondaires." },
            { text: "La liberté des voies aériennes", isCorrect: false, rationale: "Géré à l'étape 'A'." },
            { text: "La température corporelle de la victime", isCorrect: false, rationale: "Géré à l'étape 'E'." },
            { text: "La glycémie capillaire", isCorrect: false, rationale: "Fait partie du bilan complémentaire." }
        ],
        tags: ["XABCDEF", "Bilans"]
    },
    {
        question: "À quoi correspond l'étape 'D' (Disability) dans l'approche systématique XABCDEF ?",
        answerOptions: [
            { text: "L'évaluation neurologique sommaire (conscience, pupilles, motricité)", isCorrect: true, rationale: "'D' évalue l'état neurologique (AVPU ou Glasgow) et la réaction pupillaire." },
            { text: "La recherche de déformations osseuses des membres", isCorrect: false, rationale: "Évalué lors du bilan lésionnel ou de l'étape 'E'." },
            { text: "Le débit d'oxygène administré", isCorrect: false, rationale: "Lié à l'étape 'B'." },
            { text: "La désinfection d'une plaie grave", isCorrect: false, rationale: "Acte médical ou de secours localisé." }
        ],
        tags: ["XABCDEF", "Bilans"]
    },
    {
        question: "Quel est l'objectif principal de l'étape 'E' (Exposure / Environment) du protocole XABCDEF ?",
        answerOptions: [
            { text: "Déshabiller si nécessaire pour rechercher des lésions cachées tout en prévenant l'hypothermie", isCorrect: true, rationale: "'E' consiste à exposer les zones corporelles pour un bilan complet tout en protégeant du froid." },
            { text: "Évacuer immédiatement la victime de la zone de danger immédiat", isCorrect: false, rationale: "Relève du dégagement d'urgence ou de la reconnaissance initiale." },
            { text: "Effectuer un électrocardiogramme à 12 dérivations", isCorrect: false, rationale: "Acte relevant des équipes médicales avancées." },
            { text: "Enregistrer l'identité complète de la victime", isCorrect: false, rationale: "Partie administrative du bilan." }
        ],
        tags: ["XABCDEF", "Bilans"]
    },
    {
        question: "Que couvre la dernière lettre 'F' (Full set of vitals / Fluids / Family) dans les variantes complètes du XABCDEF ?",
        answerOptions: [
            { text: "Le bilan complémentaire approfondi, la glycémie, la température et la prise des paramètres complets", isCorrect: true, rationale: "'F' finalise l'évaluation par les constantes détaillées et l'anamnèse." },
            { text: "La fixation des fractures par attelle à dépression", isCorrect: false, rationale: "Géré lors de la phase de conditionnement." },
            { text: "La pose systématique d'une voie veineuse périphérique", isCorrect: false, rationale: "Acte infirmier / médical." },
            { text: "La transmission du bilan radio au médecin opérateur", isCorrect: false, rationale: "Procédure de liaison opérationnelle." }
        ],
        tags: ["XABCDEF", "Bilans"]
    },

    // --- MODULE RÉANIMATION & URGENCES VITALES (RCP / DAE) ---
    {
        question: "Face à une victime adulte en arrêt cardiorespiratoire, quelle est la fréquence des compressions thoraciques lors de la RCP ?",
        answerOptions: [
            { text: "100 à 120 compressions par minute", isCorrect: true, rationale: "Recommandation officielle pour l'adulte : 100 à 120 cpm, profondeur de 5 à 6 cm." },
            { text: "60 à 80 compressions par minute", isCorrect: false, rationale: "Trop lent pour maintenir un débit cardiaque efficace." },
            { text: "140 à 160 compressions par minute", isCorrect: false, rationale: "Trop rapide, empêche le remplissage ventriculaire adéquat." },
            { text: "80 à 100 compressions par minute", isCorrect: false, rationale: "Ancienne norme, réévaluée à la hausse." }
        ],
        tags: ["Secours", "RCP"]
    },
    {
        question: "Quelle est la fréquence des insuffulations à réaliser en équipe lors d'une RCP adulte sans intubation ?",
        answerOptions: [
            { text: "2 insuffulations toutes les 30 compressions (ratio 30:2)", isCorrect: true, rationale: "Standard international de réanimation cardio-pulmonaire de base." },
            { text: "1 insuffulation continue toutes les 5 secondes", isCorrect: false, rationale: "Réservé aux situations avec dispositif intermédiaires avancés." },
            { text: "5 insuffulations initiales obligatoires", isCorrect: false, rationale: "Réservé aux nourrissons et enfants de moins d'un an." },
            { text: "Une alternance libre selon la fatigue du secouriste", isCorrect: false, rationale: "Le rythme doit être rigoureusement respecté." }
        ],
        tags: ["Secours", "RCP"]
    },
    {
        question: "Quand devez-vous interrompre la RCP lors de l'utilisation d'un DAE ?",
        answerOptions: [
            { text: "Uniquement lorsque le DAE analyse le rythme ou délivre un choc", isCorrect: true, rationale: "La RCP doit être maximale et continue, interrompue seulement sur consigne vocale de l'appareil." },
            { text: "Dès que les électrodes sont posées sur le thorax", isCorrect: false, rationale: "La RCP continue jusqu'à ce que l'appareil demande de ne pas toucher la victime." },
            { text: "Après chaque cycle de 2 minutes, avant même l'analyse", isCorrect: false, rationale: "L'analyse est gérée automatiquement par le DAE." },
            { text: "Dès l'arrivée des secours", isCorrect: false, rationale: "Seulement sur ordre des secours ou reprise de respiration." }
        ],
        tags: ["Secours", "DAE"]
    },
    {
        question: "Quelle est la particularité de la RCP chez le nourrisson (moins de 1 an) par rapport à l'adulte ?",
        answerOptions: [
            { text: "Réaliser 5 insuffulations initiales avant de débuter les compressions", isCorrect: true, rationale: "Chez le nourrisson/enfant, l'origine de l'ACR est souvent asphyxique, on commence par 5 insuffulations." },
            { text: "Utiliser la paume des deux mains entrelacées", isCorrect: false, rationale: "Se fait avec l'extrémité de deux doigts ou la technique des pouces entourants." },
            { text: "Comprimer sur une profondeur de 10 cm", isCorrect: false, rationale: "Profondeur excessive et dangereuse (1/3 du diamètre thoracique, soit ~4 cm)." },
            { text: "Faire des cycles de 30 compressions pour 1 insufflation", isCorrect: false, rationale: "Le ratio est de 15 compressions pour 2 insuffulations en secourisme d'équipe pédiatrique." }
        ],
        tags: ["Secours", "Pédiatrie", "RCP"]
    },

    // --- MODULE OXYGÉNOLOGIE & MATÉRIEL ---
    {
        question: "Quel est le débit d'oxygène à appliquer en inhalation chez une victime adulte présentant une détresse respiratoire grave ?",
        answerOptions: [
            { text: "15 litres par minute", isCorrect: true, rationale: "Débit maximal avec un masque à haute concentration (MHC) en urgence vitale." },
            { text: "3 litres par minute", isCorrect: false, rationale: "Débit insuffisant pour une détresse respiratoire grave." },
            { text: "9 litres par minute", isCorrect: false, rationale: "Ne correspond pas au standard maximal du MHC." },
            { text: "6 litres par minute", isCorrect: false, rationale: "Réservé généralement aux lunettes à oxygène." }
        ],
        tags: ["Oxygénologie", "Matériel"]
    },
    {
        question: "Quel est le rôle du détendeur sur une bouteille d'oxygène médicale ?",
        answerOptions: [
            { text: "Réduire la pression de la bouteille et réguler le débit pour le patient", isCorrect: true, rationale: "Permet de distribuer l'oxygène en toute sécurité à la pression et au débit adaptés." },
            { text: "Augmenter la pression interne de la bouteille", isCorrect: false, rationale: "La pression diminue naturellement lors de l'utilisation." },
            { text: "Transformer l'oxygène en air ambiant", isCorrect: false, rationale: "Il distribue de l'oxygène pur." },
            { text: "Refroidir le gaz avant son inhalation", isCorrect: false, rationale: "Rôle inexistant pour cet équipement." }
        ],
        tags: ["Oxygénologie", "Matériel"]
    },
    {
        question: "Quel appareil du lot PSE 2 permet de mesurer la saturation pulsée en oxygène (SpO2) ?",
        answerOptions: [
            { text: "Le pulsoxymètre (oxymètre de pouls)", isCorrect: true, rationale: "Petit capteur posé au bout du doigt mesurant SpO2 et pouls." },
            { text: "Le tensiomètre électronique", isCorrect: false, rationale: "Mesure la pression artérielle." },
            { text: "Le stéthoscope", isCorrect: false, rationale: "Utilisé pour l'auscultation." },
            { text: "Le manodétendeur", isCorrect: false, rationale: "Régule la sortie de la bouteille d'oxygène." }
        ],
        tags: ["Oxygénologie", "Matériel"]
    },

    // --- MODULE TRAUMATOLOGIE & HÉMORRAGIES ---
    {
        question: "Face à une hémorragie externe abondante sur un membre où la compression directe échoue, quelle action prioritaire réalise le secouriste ?",
        answerOptions: [
            { text: "Poser un garrot tourniquet", isCorrect: true, rationale: "Le garrot est indiqué en cas d'échec ou d'impossibilité de la compression directe sur un membre." },
            { text: "Surélever le membre à la verticale", isCorrect: false, rationale: "Insuffisant seul pour stopper une hémorragie artérielle." },
            { text: "Appliquer un point de compression à distance", isCorrect: false, rationale: "Technique abandonnée des recommandations de base." },
            { text: "Attendre l'avis médical en massant", isCorrect: false, rationale: "Action inefficace face à une hémorragie active." }
        ],
        tags: ["Traumatisme", "Hémorragies"]
    },
    {
        question: "Quelle est la règle impérative lors du relevage d'une victime sur matelas à dépression (PSE 2) ?",
        answerOptions: [
            { text: "Maintenir l'axe tête-cou-tronc en permanence au signal du chef d'agrès", isCorrect: true, rationale: "Prévient l'aggravation de lésions vertébrales par une coordination parfaite." },
            { text: "Aller le plus vite possible pour réduire le temps d'action", isCorrect: false, rationale: "La sécurité prime toujours sur la vitesse." },
            { text: "Laisser la victime se redresser par elle-même", isCorrect: false, rationale: "Interdit en cas de suspicion de traumatisme." },
            { text: "Lâcher la tête dès que le plan dur est positionné", isCorrect: false, rationale: "Le maintien de l'axe est continu jusqu'à la fin." }
        ],
        tags: ["Traumatisme", "Relevage"]
    },
    {
        question: "Quelle est la conduite à tenir face à une fracture ouverte évidente d'un membre avec saignement modéré ?",
        answerOptions: [
            { text: "Protéger la plaie avec un pansement stérile, immobiliser sans chercher à réaligner l'os", isCorrect: true, rationale: "Évite l'aggravation des lésions et des infections, l'immobilisation se fait en l'état." },
            { text: "Tirer vigoureusement sur le membre pour le remettre droit", isCorrect: false, rationale: "Interdit en secourisme d'équipe, risque de léser les vaisseaux et nerfs." },
            { text: "Laisser la plaie à l'air libre pour qu'elle sèche", isCorrect: false, rationale: "Risque infectieux majeur." },
            { text: "Poser systématiquement un garrot", isCorrect: false, rationale: "Réservé aux hémorragies abondantes incompressibles, pas aux fractures ouvertes simples." }
        ],
        tags: ["Traumatisme"]
    },

// --- BLOC SUPPLÉMENTAIRE 5 : PSE 1 & PSE 2 (DIVERS & CAS CONCRETS) ---
    {
        question: "Quelle est la première action à réaliser face à un accident de la route impliquant un véhicule potentiellement instable ?",
        answerOptions: [
            { text: "Assurer la sécurité des lieux (balisage, coupe-contact, frein à main) avant toute approche", isCorrect: true, rationale: "La règle d'or de protection s'applique en premier pour éviter un suraccident." },
            { text: "Sortir immédiatement toutes les victimes sans regarder", isCorrect: false, rationale: "Risque de blesser ou de faire basculer le véhicule." },
            { text: "Prendre des photos pour les assurances", isCorrect: false, rationale: "Absolument hors de propos." },
            { text: "Attendre les bras croisés à 50 mètres", isCorrect: false, rationale: "Il faut baliser et sécuriser activement." }
        ],
        tags: ["Secours", "Sécurité"]
    },
    {
        question: "Quel est le débit d'oxygène recommandé pour un adulte en détresse respiratoire modérée avec des lunettes à oxygène ?",
        answerOptions: [
            { text: "2 à 6 litres par minute", isCorrect: true, rationale: "Plage de débit classique pour les lunettes à oxygène." },
            { text: "15 litres par minute", isCorrect: false, rationale: "Réservé au masque à haute concentration (MHC)." },
            { text: "0,5 litre par minute", isCorrect: false, rationale: "Débit insuffisant." },
            { text: "25 litres par minute", isCorrect: false, rationale: "Hors des capacités standard du matériel d'urgence de base." }
        ],
        tags: ["Oxygénologie", "Matériel"]
    },
    {
        question: "Qu'est-ce qu'une 'détresse circulatoire' (état de choc) chez l'adulte ?",
        answerOptions: [
            { text: "Une incapacité du système circulatoire à perfuser correctement les organes vitaux, souvent traduite par une chute de tension et des marbrures", isCorrect: true, rationale: "Définition clinique de l'état de choc." },
            { text: "Une simple fatigue passagère après le sport", isCorrect: false, rationale: "Normal." },
            { text: "Une augmentation de la tension artérielle au-delà de 18/10", isCorrect: false, rationale: "Crise hypertensive, pas un choc." },
            { text: "Un ralentissement de la fréquence respiratoire à 5 par minute", isCorrect: false, rationale: "Détresse respiratoire ou neurologique." }
        ],
        tags: ["Bilans", "État de choc"]
    },
    {
        question: "Face à une victime inconsciente qui respire normalement, pourquoi la position latérale de sécurité (PLS) est-elle indispensable ?",
        answerOptions: [
            { text: "Pour libérer les voies aériennes en empêchant la langue de chuter en arrière et en évacuant les liquides (salive, sang, vomissements)", isCorrect: true, rationale: "Empêche l'asphyxie par obstruction des voies aériennes chez l'inconscient." },
            { text: "Pour faciliter la prise de tension artérielle", isCorrect: false, rationale: "Sans rapport." },
            { text: "Pour réchauffer le côté droit du corps", isCorrect: false, rationale: "Rôle inexistant." },
            { text: "Pour permettre au cœur de battre plus lentement", isCorrect: false, rationale: "Inexact." }
        ],
        tags: ["Secours", "Voies aériennes"]
    },
    {
        question: "Quelle est la conduite à tenir face à un corps étranger obstruant totalement les voies aériennes chez un adulte conscient ?",
        answerOptions: [
            { text: "Alterner jusqu'à 5 claques dans le dos et jusqu'à 5 compressions abdominales (méthode de Heimlich)", isCorrect: true, rationale: "Protocole standard de désobstruction des voies aériennes chez l'adulte." },
            { text: "Faire boire un grand verre d'eau", isCorrect: false, rationale: "Dangereux, risque d'aggraver l'obstruction." },
            { text: "Mettre la victime en position assise et attendre", isCorrect: false, rationale: "Conduite attentiste mortelle." },
            { text: "Lui faire lever les bras en l'air", isCorrect: false, rationale: "Totalement inefficace." }
        ],
        tags: ["Secours", "Obstruction"]
    },
    {
        question: "Que doit faire le secouriste si la méthode de Heimlich échoue sur une femme enceinte présentant une obstruction totale des voies aériennes ?",
        answerOptions: [
            { text: "Remplacer les compressions abdominales par des compressions thoraciques (sur le sternum)", isCorrect: false, rationale: "Correction : on adapte en faisant des compressions thoraciques pour ne pas léser l'utérus/fœtus." },
            { text: "Continuer les compressions abdominales malgré tout", isCorrect: false, rationale: "Dangereux pour la grossesse." },
            { text: "Allonger la victime à plat ventre", isCorrect: false, rationale: "Impossible." },
            { text: "Ne rien faire", isCorrect: false, rationale: "Non-assistance." }
        ],
        tags: ["Secours", "Obstruction"]
    },
    {
        question: "Quel est le rôle du manomètre sur une bouteille d'oxygène médicale ?",
        answerOptions: [
            { text: "Indiquer la pression de gaz restante dans la bouteille (pour savoir si elle est pleine ou vide)", isCorrect: true, rationale: "Permet de vérifier l'autonomie de la bouteille." },
            { text: "Mesurer la température de l'oxygène", isCorrect: false, rationale: "Ne mesure pas la température." },
            { text: "Régler le débit en litres par minute", isCorrect: false, rationale: "Rôle du détendeur/débitmètre." },
            { text: "Filtrer les bactéries de l'air", isCorrect: false, rationale: "Hors sujet." }
        ],
        tags: ["Oxygénologie", "Matériel"]
    },
    {
        question: "Comment qualifie-t-on une brûlure superficielle caractérisée uniquement par une rougeur de la peau (type coup de soleil) sans cloque ?",
        answerOptions: [
            { text: "Une brûlure du 1er degré", isCorrect: true, rationale: "Atteinte exclusive de l'épiderme superficiel." },
            { text: "Une brûlure du 2ème degré superficiel", isCorrect: false, rationale: "Le 2ème degré présente des phlyctènes (cloques)." },
            { text: "Une brûlure du 3ème degré", isCorrect: false, rationale: "Nécrose complète de la peau." },
            { text: "Une simple écorchure", isCorrect: false, rationale: "Lésion traumatique mécanique." }
        ],
        tags: ["Traumatisme", "Brûlures"]
    },
    {
        question: "Quelle est la règle immédiate de primo-intervention face à une brûlure thermique récente (ex: eau chaude sur la main) ?",
        answerOptions: [
            { text: "Arroser immédiatement la brûlure à l'eau tempérée (15 à 25°C) pendant au moins 10 à 20 minutes et le plus tôt possible", isCorrect: true, rationale: "La règle des '10-15-20' : eau tempérée, à 15 cm, pendant 15-20 minutes, dans les 10 premières minutes." },
            { text: "Appliquer de la glace directement sur la zone", isCorrect: false, rationale: "Interdit, aggrave les lésions par le froid." },
            { text: "Mettre de la tomate ou du beurre", isCorrect: false, rationale: "Remèdes de grand-mère à proscrire (risque infectieux)." },
            { text: "Envelopper la brûlure avec du coton hydrophile sec", isCorrect: false, rationale: "Le coton peluche et colle à la plaie." }
        ],
        tags: ["Traumatisme", "Brûlures"]
    },
    {
        question: "Dans quel cas utilise-t-on le matelas à dépression (MAD) en position assise (si le modèle le permet) ou en position allongée ?",
        answerOptions: [
            { text: "Pour immobiliser et transporter une victime suspecte de traumatisme de la colonne vertébrale", isCorrect: true, rationale: "Assure un maintien rigide du corps entier." },
            { text: "Pour faire dormir un patient fatigué", isCorrect: false, rationale: "Usage non conforme." },
            { text: "Pour remplacer un brancard de relevage en milieu aquatique", isCorrect: false, rationale: "Inadapté." },
            { text: "Pour soulager une entorse de cheville bénigne", isCorrect: false, rationale: "Disproportionné." }
        ],
        tags: ["Traumatisme", "Matériel"]
    },
    {
        question: "Quel est le principe d'action de l'aspirateur de mucosités (ASM) d'urgence (PSE 2) ?",
        answerOptions: [
            { text: "Aspirer mécaniquement les liquides, sécrétions, sang ou vomissements encombrant les voies aériennes supérieures", isCorrect: true, rationale: "Libère efficacement les voies aériennes en cas d'encombrement liquide." },
            { text: "Insuffler de l'oxygène sous pression dans les poumons", isCorrect: false, rationale: "Rôle du BAVU ou de l'inhalation." },
            { text: "Mesurer la pression artérielle", isCorrect: false, rationale: "Rôle du tensiomètre." },
            { text: "Aspirer l'air d'un matelas à dépression", isCorrect: false, rationale: "On utilise une pompe dédiée au matelas, pas un ASM médical de voies aériennes." }
        ],
        tags: ["Matériel", "Voies aériennes"]
    },
    {
        question: "Quelle est la durée maximale recommandée pour chaque passage d'aspiration des mucosités chez un adulte ?",
        answerOptions: [
            { text: "5 secondes maximum par passage pour éviter l'hypoxie de la victime", isCorrect: true, rationale: "Aspirer trop longtemps retire de l'air et de l'oxygène précieux." },
            { text: "2 minutes pleines", isCorrect: false, rationale: "Trop long, risque d'asphyxie." },
            { text: "10 minutes sans interruption", isCorrect: false, rationale: "Dangereux." },
            { text: "Le temps que la canule soit pleine", isCorrect: false, rationale: "Critère non sécuritaire." }
        ],
        tags: ["Matériel", "Voies aériennes"]
    },
    {
        question: "Qu'appelle-t-on un 'collier cervical réglable' ?",
        answerOptions: [
            { text: "Un dispositif rigide permettant de limiter les mouvements du cou et de s'adapter à la morphologie de la victime", isCorrect: true, rationale: "Outil de base de l'immobilisation cervicale traumatique." },
            { text: "Un collier en tissu souple pour masser les cervicales", isCorrect: false, rationale: "Collier minerve souple de confort, insuffisant en traumatologie grave." },
            { text: "Une attelle de jambe transformable", isCorrect: false, rationale: "Anatomie erronée." },
            { text: "Un dispositif chauffant pour l'hiver", isCorrect: false, rationale: "Inexact." }
        ],
        tags: ["Traumatisme", "Matériel"]
    },
    {
        question: "Quel est l'objectif de la réalisation d'un relevage à 4 secouristes avec une cuillère (brancard cuillère) ?",
        answerOptions: [
            { text: "Soulever et transporter une victime suspecte de traumatisme sans aggraver ses lésions en évitant de la porter à la force des bras", isCorrect: true, rationale: "Permet de glisser les pales du brancard sous la victime avec un minimum de mobilisations." },
            { text: "Laisser tomber la victime de haut pour tester sa résistance", isCorrect: false, rationale: "Absurde et dangereux." },
            { text: "Faire faire de l'exercice physique aux secouristes", isCorrect: false, rationale: "L'objectif est la sécurité de la victime." },
            { text: "Mesurer la taille exacte de la civière", isCorrect: false, rationale: "Hors sujet." }
        ],
        tags: ["Traumatisme", "Relevage"]
    },
    {
        question: "Quel est le comportement à adopter face à un saignement de nez (épistaxis) simple ?",
        answerOptions: [
            { text: "Asseoir la victime, pencher la tête légèrement en avant et comprimer la narine qui saigne pendant 10 minutes non stop", isCorrect: true, rationale: "Arrête le saignement tout en évitant que le sang ne coule dans la gorge." },
            { text: "Jeter la tête de la victime violemment en arrière", isCorrect: false, rationale: "Fait couler le sang dans l'estomac (risque de nausées/vomissements)." },
            { text: "Mettre un coton-tige enfoncé de 10 cm dans le nez", isCorrect: false, rationale: "Dangereux et traumatisant." },
            { text: "Allonger la victime à plat dos les jambes en l'air", isCorrect: false, rationale: "Inadapté." }
        ],
        tags: ["Hémorragies", "Traumatisme"]
    },
    {
        question: "Quel signe clinique indique qu'une victime présente une détresse respiratoire aiguë avérée ?",
        answerOptions: [
            { text: "Un essoufflement marqué, des difficultés pour parler, un balancement thoraco-abdominal ou une cyanose", isCorrect: true, rationale: "Signes évidents de lutte ventilatoire ou d'hypoxie." },
            { text: "Un sommeil paisible et ronflant", isCorrect: false, rationale: "Peut cacher une obstruction ou une apnée, mais n'est pas le signe d'effort respiratoire." },
            { text: "Une tension artérielle mesurée à 12/8", isCorrect: false, rationale: "Tension normale." },
            { text: "Une température à 36,8°C", isCorrect: false, rationale: "Normothermie." }
        ],
        tags: ["Détresse respiratoire", "Bilans"]
    },
    {
        question: "Quelle est la conduite à tenir face à une victime inconsciente qui ne respire PAS (arrêt cardiorespiratoire) ?",
        answerOptions: [
            { text: "Alerter immédiatement, récupérer un DAE, débuter la RCP (30 compressions / 2 insuffulations) sans délai", isCorrect: true, rationale: "La chaîne de survie standardisée de l'ACR." },
            { text: "Mettre la victime en PLS et la surveiller en buvant un café", isCorrect: false, rationale: "La PLS ne s'applique qu'aux inconscients qui RESPURENT. En ACR, c'est la RCP." },
            { text: "Lui donner une gifle pour qu'elle se réveille", isCorrect: false, rationale: "Inutile et non réglementaire." },
            { text: "Attendre l'ambulance en position debout", isCorrect: false, rationale: "Perte de chance fatale." }
        ],
        tags: ["Secours", "RCP"]
    },
    {
        question: "Qu'est-ce que le score de Glasgow (utilisé au niveau de la lettre 'D' du XABCDEF ou dans le bilan) ?",
        answerOptions: [
            { text: "Une échelle clinique évaluant la réponse neurologique (ouverture des yeux, réponse verbale, réponse motrice)", isCorrect: true, rationale: "Référence universelle de mesure de la conscience." },
            { text: "Une méthode de calcul du débit d'oxygène", isCorrect: false, rationale: "Hors sujet." },
            { text: "Un indicateur de la dureté des os", isCorrect: false, rationale: "Hors sujet." },
            { text: "La vitesse maximale de course d'un secouriste", isCorrect: false, rationale: "Absurde." }
        ],
        tags: ["Bilans"]
    },
    {
        question: "Quel est le score de Glasgow minimal théorique (le plus bas possible) d'une personne totalement inconsciente et non réactive ?",
        answerOptions: [
            { text: "3", isCorrect: true, rationale: "1 pour les yeux + 1 pour la voix + 1 pour la motricité = 3." },
            { text: "0", isCorrect: false, rationale: "Le minimum est de 3." },
            { text: "15", isCorrect: false, rationale: "15 est le score d'une personne parfaitement consciente et orientée." },
            { text: "10", isCorrect: false, rationale: "Score intermédiaire." }
        ],
        tags: ["Bilans"]
    },
    {
        question: "Quel est le score de Glasgow d'une personne saine, consciente, éveillée et bien orientée ?",
        answerOptions: [
            { text: "15 sur 15", isCorrect: true, rationale: "Score maximal normal." },
            { text: "3 sur 15", isCorrect: false, rationale: "C'est le coma profond." },
            { text: "10 sur 15", isCorrect: false, rationale: "Altération modérée." },
            { text: "20 sur 15", isCorrect: false, rationale: "La note maximale est 15." }
        ],
        tags: ["Bilans"]
    },
    {
        question: "Quel est le risque principal d'une électrocution par le courant du secteur domestique (230 Volts) ?",
        answerOptions: [
            { text: "Un arrêt cardiorespiratoire par fibrillation ventriculaire et des brûlures internes/externes", isCorrect: true, rationale: "Le courant alternatif perturbe l'activité électrique du cœur." },
            { text: "Une simple envie de dormir", isCorrect: false, rationale: "Sous-estime le danger mortel." },
            { text: "Une coloration temporaire des cheveux en blond", isCorrect: false, rationale: "Sans rapport." },
            { text: "Une fracture systématique du fémur", isCorrect: false, rationale: "Inexact." }
        ],
        tags: ["Risques particuliers"]
    },
    {
        question: "Quelle est la règle absolue avant de toucher une victime en contact direct avec une ligne électrique haute tension tombée au sol ?",
        answerOptions: [
            { text: "S'assurer impérativement que le courant a été coupé par les services compétents (EDF / gestionnaire), ne jamais approcher", isCorrect: true, rationale: "Le risque d'arc électrique et d'électrocution mortelle du secouriste est maximal." },
            { text: "Tirer la victime par ses chaussures en cuir sec en courant", isCorrect: false, rationale: "Extrêmement dangereux, risque de fulguration." },
            { text: "Arroser la ligne électrique avec de l'eau pour l'éteindre", isCorrect: false, rationale: "L'eau conduit l'électricité, c'est un piège mortel." },
            { text: "Fermer les yeux en avançant", isCorrect: false, rationale: "Suicide opérationnel." }
        ],
        tags: ["Risques particuliers", "Sécurité"]
    },
    {
        question: "Qu'appelle-t-on une 'hypothermie accidentelle' en secourisme ?",
        answerOptions: [
            { text: "Une baisse de la température centrale du corps en dessous de 35°C", isCorrect: true, rationale: "Définition médicale de l'hypothermie." },
            { text: "Une surchauffe du corps au soleil", isCorrect: false, rationale: "C'est l'hyperthermie." },
            { text: "Une fièvre transitoire à 38°C", isCorrect: false, rationale: "Fièvre." },
            { text: "Une température normale de 37°C", isCorrect: false, rationale: "Normothermie." }
        ],
        tags: ["Risques particuliers", "Environnement"]
    },
    {
        question: "Quelle est la prise en charge de base d'une victime en hypothermie légère à modérée (consciente) ?",
        answerOptions: [
            { text: "Isoler du froid, retirer les vêtements humides si possible, couvrir avec des couvertures, donner des boissons chaudes sucrées (si consciente et capable d'avaler)", isCorrect: true, rationale: "Réchauffement progressif et passif." },
            { text: "La plonger dans un bain d'eau glacée pour l'habituer", isCorrect: false, rationale: "L'aggraverait instantanément." },
            { text: "La faire courir un marathon pour se réchauffer", isCorrect: false, rationale: "Dangereux pour le système cardiovasculaire." },
            { text: "Lui donner de l'alcool pur en grande quantité", isCorrect: false, rationale: "L'alcool vasodilate et accélère la perte thermique centrale." },
        ],
        tags: ["Risques particuliers"]
    },
    {
        question: "Quel est le risque principal d'une obstruction des voies aériennes par un corps étranger qualifiée de 'partielle' (la victime tousse, parle ou émet des sons) ?",
        answerOptions: [
            { text: "Ne pas faire de claques dans le dos (laisser tousser et encourager à tousser, surveiller étroitement)", isCorrect: true, rationale: "Taper dans le dos d'une obstruction partielle pourrait transformer l'obstruction en obstruction totale." },
            { text: "Pratiquer immédiatement la méthode de Heimlich en force", isCorrect: false, rationale: "Contre-indiqué en obstruction partielle active." },
            { text: "Allonger la victime en PLS", isCorrect: false, rationale: "Inadapté si la victime tousse et respire." },
            { text: "Lui faire avaler de la mie de pain sèche", isCorrect: false, rationale: "Aggrave le blocage." }
        ],
        tags: ["Secours", "Obstruction"]
    },
    {
        question: "Qu'est-ce qu'une 'contusion' en traumatologie cutanée et des tissus mous ?",
        answerOptions: [
            { text: "Un choc violent n'entraînant pas de plaie cutanée ouverte, mais des lésions des petits vaisseaux sous-cutanés (ecchymose / hématome)", isCorrect: true, rationale: "Définition du bleu ou de la bosse." },
            { text: "Une section nette du muscle", isCorrect: false, rationale: "Myotomie ou plaie ouverte." },
            { text: "Une fracture ouverte de l'os", isCorrect: false, rationale: "Fracture." },
            { text: "Une brûlure chimique", isCorrect: false, rationale: "Brûlure." }
        ],
        tags: ["Traumatisme"]
    },
    {
        question: "Quel est l'intérêt d'appliquer une poche de froid instantané (ou un pack de froid chimique) sur une entorse ou une contusion récente ?",
        answerOptions: [
            { text: "Provoquer une vasoconstriction locale, réduisant ainsi la douleur, l'œdème (gonflement) et l'extension de l'hématome", isCorrect: true, rationale: "Le froid a un effet antalgique et anti-inflammatoire local." },
            { text: "Réchauffer le tissu musculaire pour détendre", isCorrect: false, rationale: "C'est l'inverse du froid." },
            { text: "Soigner définitivement la rupture ligamentaire en 2 minutes", isCorrect: false, rationale: "Le froid soulage mais ne répare pas une rupture." },
            { text: "Coller la peau sur l'os", isCorrect: false, rationale: "Absurde." }
        ],
        tags: ["Traumatisme", "Matériel"]
    },
    {
        question: "Quelle précaution impérative doit-on respecter lors de l'application directe d'un pack de froid chimique sur la peau d'une victime ?",
        answerOptions: [
            { text: "Toujours interposer un linge ou une compresse entre la poche de froid et la peau pour éviter la brûlure par le froid (gelure)", isCorrect: true, rationale: "Le contact direct prolongé du froid chimique ou de la glace brûle la peau." },
            { text: "Serrer le pack de froid avec un ruban adhésif directement sur la peau nue", isCorrect: false, rationale: "Risque de nécrose cutanée par le froid." },
            { text: "Chauffer le pack au micro-ondes avant de le poser", isCorrect: false, rationale: "Détruirait le dispositif." },
            { text: "Ne mettre aucune protection", isCorrect: false, rationale: "Dangereux." }
        ],
        tags: ["Traumatisme", "Matériel"]
    },
    {
        question: "Qu'est-ce qu'une 'fracture fermée' ?",
        answerOptions: [
            { text: "Un os cassé dont les fragments ne communiquent pas avec l'extérieur (la peau en regard est intacte)", isCorrect: true, rationale: "Pas de plaie ouverte en face du foyer de fracture." },
            { text: "Une fracture qui est déjà guérie", isCorrect: false, rationale: "Non." },
            { text: "Une fracture de la mâchoire bloquée fermée", isCorrect: false, rationale: "Confusion de termes." },
            { text: "Une entorse bénigne", isCorrect: false, rationale: "L'entorse touche l'articulation, pas l'os." }
        ],
        tags: ["Traumatisme"]
    },
    {
        question: "Quel est le risque majeur d'une fracture non immobilisée d'un os long (ex: fémur ou jambe) ?",
        answerOptions: [
            { text: "Lésion des vaisseaux sanguins ou des nerfs voisins par les bouts d'os pointus, aggravant le saignement et la douleur", isCorrect: true, rationale: "L'immobilisation prévient ces mouvements secondaires destructeurs." },
            { text: "Le patient risque de grandir de 10 cm", isCorrect: false, rationale: "Impossible." },
            { text: "L'os va se souder tout seul en forme de cercle parfait", isCorrect: false, rationale: "Faux." },
            { text: "Rien du tout", isCorrect: false, rationale: "Risque élevé de complications." }
        ],
        tags: ["Traumatisme"]
    },
    {
        question: "Quel est le principe d'utilisation d'une attelle cervico-thoracique (type KED) (PSE 2) ?",
        answerOptions: [
            { text: "Immobiliser et extraire une victime assise (généralement dans un véhicule accidenté) en maintenant l'axe tête-cou-tronc", isCorrect: true, rationale: "Dispositif d'extraction pour patient assis en traumatologie." },
            { text: "Servir de civière de transport sur 10 kilomètres", isCorrect: false, rationale: "Ce n'est pas un brancard de transport final." },
            { text: "Immobiliser une jambe cassée", isCorrect: false, rationale: "Inadapté." },
            { text: "Servir de gilet de sauvetage en mer", isCorrect: false, rationale: "Inadapté." }
        ],
        tags: ["Traumatisme", "Matériel"]
    },
    {
        question: "Quel paramètre mesure-t-on avec un glucomètre capillaire au cours du bilan complémentaire (PSE 2) ?",
        answerOptions: [
            { text: "La glycémie (concentration de glucose dans le sang)", isCorrect: true, rationale: "Permet de dépister une hypoglycémie ou une hyperglycémie." },
            { text: "Le taux de cholestérol total", isCorrect: false, rationale: "Non mesuré en urgence préhospitalière de base." },
            { text: "La quantité d'oxygène dissous", isCorrect: false, rationale: "Rôle du pulsoxymètre." },
            { text: "La quantité d'alcool dans le sang", isCorrect: false, rationale: "Rôle de l'éthylotest." }
        ],
        tags: ["Bilans", "Matériel"]
    },
    {
        question: "Quelle est la valeur seuil indicative d'une hypoglycémie avérée nécessitant une correction glucidique chez une victime symptomatique ?",
        answerOptions: [
            { text: "En dessous de 0,60 g/L (ou 3,3 mmol/L)", isCorrect: true, rationale: "Repère usuel en secourisme pour caractériser l'hypoglycémie." },
            { text: "Au-dessus de 2,00 g/L", isCorrect: false, rationale: "Hyperglycémie." },
            { text: "Exactement 1,00 g/L", isCorrect: false, rationale: "Valeur normale." },
            { text: "Exactement 5,00 g/L", isCorrect: false, rationale: "Valeur extrêmement élevée." }
        ],
        tags: ["Urgences médicales", "Bilans"]
    },
    {
        question: "Quelle est la conduite à tenir face à une victime inconsciente qui présente une crise convulsive en cours ?",
        answerOptions: [
            { text: "Protéger la tête des chocs contre le sol, ne rien mettre dans la bouche, dégager l'environnement, surveiller la respiration et placer en PLS dès la fin des secousses", isCorrect: true, rationale: "Sécurise la victime sans risquer de morsure ou de fracture dentaire/mandibulaire." },
            { text: "Essayer de bloquer de force les bras et les jambes tendus", isCorrect: false, rationale: "Risque de provoquer des fractures par la violence de la contraction." },
            { text: "Introduire un doigt ou une cuillère entre les dents de la victime", isCorrect: false, rationale: "Interdit formellement (risque de section de doigts ou de blessure grave)." },
            { text: "Lui jeter un seau d'eau glacée au visage", isCorrect: false, rationale: "Inadapté et dangereux." }
        ],
        tags: ["Urgences médicales"]
    },
    {
        question: "Qu'appelle-t-on une 'lipothymie' (malaise vagal léger) ?",
        answerOptions: [
            { text: "Une sensation transitoire de faiblesse imminente avec assombrissement de la vision et sueurs, sans perte de connaissance complète ou brève", isCorrect: true, rationale: "Diffère de la syncope où la perte de connaissance est totale et franche." },
            { text: "Un arrêt cardiaque définitif", isCorrect: false, rationale: "ACR." },
            { text: "Une crise d'épilepsie majeure", isCorrect: false, rationale: "Épilepsie." },
            { text: "Une fracture ouverte", isCorrect: false, rationale: "Traumatisme." }
        ],
        tags: ["Urgences médicales"]
    },
    {
        question: "Quel est l'effet recherché en surélevant les jambes d'une victime victime d'un malaise vagal ou d'un début de lipothymie ?",
        answerOptions: [
            { text: "Favoriser le retour du sang veineux vers le cœur et le cerveau pour rétablir une pression artérielle correcte", isCorrect: true, rationale: "Lutte mécaniquement contre la baisse transitoire de tension." },
            { text: "Permettre au sang de stagner dans les pieds", isCorrect: false, rationale: "C'est l'inverse." },
            { text: "Refroidir les membres inférieurs", isCorrect: false, rationale: "Sans rapport." },
            { text: "Faciliter la digestion", isCorrect: false, rationale: "Hors sujet." }
        ],
        tags: ["Urgences médicales"]
    },
    {
        question: "Qu'est-ce qu'une 'asphyxie' en secourisme ?",
        answerOptions: [
            { text: "Un arrêt ou une altération majeure de la fonction respiratoire entraînant un manque grave d'oxygène dans le sang et les organes vitaux", isCorrect: true, rationale: "Définition globale de l'asphyxie." },
            { text: "Une fracture du nez", isCorrect: false, rationale: "Traumatisme." },
            { text: "Une angine bénigne", isCorrect: false, rationale: "Infection." },
            { text: "Un simple hoquet passager", isCorrect: false, rationale: "Inoffensif." }
        ],
        tags: ["Détresse respiratoire"]
    },
    {
        question: "Quel est le rôle du 'chef d'agrès' ou chef d'équipe lors d'une intervention de secours d'urgence à personnes (PSE) ?",
        answerOptions: [
            { text: "Diriger l'équipe, coordonner les actions, réaliser le bilan et assurer la liaison avec le SAMU ou le centre opérationnel", isCorrect: true, rationale: "Responsable de la conduite opérationnelle de l'intervention." },
            { text: "Conduire uniquement le véhicule sans jamais voir les patients", isCorrect: false, rationale: "Le conducteur a un rôle technique, mais le chef d'agrès pilote la mission de secours." },
            { text: "Écrire les chansons de l'équipe", isCorrect: false, rationale: "Hors sujet." },
            { text: "Décider des menus de la caserne", isCorrect: false, rationale: "Hors sujet." }
        ],
        tags: ["Secours"]
    },
    {
        question: "Pourquoi est-il strictement interdit de fumer à proximité immédiate d'une bouteille d'oxygène médicale en cours d'utilisation ou de stockage ?",
        answerOptions: [
            { text: "L'oxygène est un comburant puissant qui accélère et amplifie violemment la combustion, risquant de provoquer une explosion ou un feu instantané", isCorrect: true, rationale: "Règle de sécurité fondamentale : corps gras et flammes proscrits près de l'oxygène." },
            { text: "Parce que la fumée de cigarette donne mauvais goût au gaz", isCorrect: false, rationale: "Raison sanitaire mineure comparée au risque d'explosion mortelle." },
            { text: "Pour des raisons de taxe sur le tabac", isCorrect: false, rationale: "Absurde." },
            { text: "Parce que le plastique de la bouteille sent mauvais", isCorrect: false, rationale: "Faux." }
        ],
        tags: ["Oxygénologie", "Sécurité"]
    },
    {
        question: "Quel est le principe de base de l'hygiène des mains du secouriste avant et après chaque intervention sur une victime ?",
        answerOptions: [
            { text: "Réaliser un lavage des mains à l'eau et au savon ou une désinfection par friction avec une solution hydro-alcoolique (SHA)", isCorrect: true, rationale: "Prévient les transmissions croisées d'infections." },
            { text: "Essuyer ses mains sur son pantalon de travail", isCorrect: false, rationale: "Infect, proscrit." },
            { text: "Ne rien faire si on porte déjà des gants troués", isCorrect: false, rationale: "Des gants troués ne protègent plus." },
            { text: "Se laver les mains une fois par an", isCorrect: false, rationale: "Aberration sanitaire." }
        ],
        tags: ["Secours", "Sécurité"]
    },
    {
        question: "Qu'appelle-t-on le 'conditionnement' d'une victime traumatisée grave par l'équipe de secours (PSE 2) ?",
        answerOptions: [
            { text: "L'ensemble des gestes visant à immobiliser, protéger du froid et installer la victime sur un brancard ou un matelas à dépression avant son transport", isCorrect: true, rationale: "Prépare la victime à un transport sécurisé sans aggravation des lésions." },
            { text: "Mettre la victime dans un carton d'emballage", isCorrect: false, rationale: "Totalement absurde." },
            { text: "Lui donner de la nourriture en conserve", isCorrect: false, rationale: "Interdit en urgence traumatique." },
            { text: "La laisser sur place sans bouger", isCorrect: false, rationale: "Il y a un transport à organiser." }
        ],
        tags: ["Traumatisme", "Secours"]
    },
    {
        question: "Quel est le but principal de l'utilisation d'une attelle cervico-thoracique (KED) ou d'un collier cervical ?",
        answerOptions: [
            { text: "Limiter ou supprimer les mouvements de la colonne vertébrale cervicale pour prévenir les lésions médullaires", isCorrect: true, rationale: "Rôle de protection neurologique en traumatologie." },
            { text: "Soigner un mal de gorge infectieux", isCorrect: false, rationale: "Pathologie médicale, pas un traumatisme." },
            { text: "Maintenir la mâchoire fermée pour l'empêcher de parler", isCorrect: false, rationale: "Faux." },
            { text: "Augmenter la tension artérielle", isCorrect: false, rationale: "Sans rapport." }
        ],
        tags: ["Traumatisme", "Matériel"]
    },
    {
        question: "Quel est le comportement à adopter face à un individu menaçant ou violent sur un lieu d'intervention ?",
        answerOptions: [
            { text: "Se retirer immédiatement de la zone de danger, mettre l'équipe en sécurité et demander l'intervention des forces de l'ordre (police/gendarmerie)", isCorrect: true, rationale: "La sécurité des intervenants passe toujours avant l'engagement des soins." },
            { text: "Lui donner des coups de poing pour se défendre", isCorrect: false, rationale: "Non-respect des règles opérationnelles et légales." },
            { text: "L'insulter en retour", isCorrect: false, rationale: "Envenime la situation." },
            { text: "Rester immobile au milieu des coups", isCorrect: false, rationale: "Mise en danger inutile de l'équipe." }
        ],
        tags: ["Secours", "Sécurité"]
    },
    {
        question: "Qu'est-ce qu'une 'hémorragie extériorisée' ?",
        answerOptions: [
            { text: "Un saignement provenant d'un organe interne qui s'écoule vers l'extérieur par un orifice naturel du corps (nez, bouche, oreilles, anus, etc.)", isCorrect: true, rationale: "Définition de l'hémorragie extériorisée (ex: otorragie, rectorragie, épistaxis)." },
            { text: "Une coupure classique au bras", isCorrect: false, rationale: "C'est une hémorragie externe." },
            { text: "Un bleu sous la peau", isCorrect: false, rationale: "C'est une contusion / hématome." },
            { text: "Un saignement invisible à l'intérieur du ventre", isCorrect: false, rationale: "C'est une hémorragie interne." }
        ],
        tags: ["Hémorragies"]
    },
    {
        question: "Quel est l'indicateur principal de l'efficacité de la RCP externe réalisée par les secouristes en cas d'arrêt cardiaque ?",
        answerOptions: [
            { text: "La reprise d'une respiration spontanée efficace, des mouvements, ou l'analyse d'un rythme choc par le DAE", isCorrect: true, rationale: "Signes positifs de reprise ou d'efficacité de la réanimation." },
            { text: "La transpiration abondante des secouristes", isCorrect: false, rationale: "Indique l'effort physique du secouriste, pas l'état du patient." },
            { text: "Le bruit des clics du thorax", isCorrect: false, rationale: "Correspond parfois à des fractures de côtes, pas à un indicateur d'efficacité." },
            { text: "La couleur des chaussures de la victime", isCorrect: false, rationale: "Absurde." }
        ],
        tags: ["Secours", "RCP"]
    },
    {
        question: "Quelle est la règle d'or concernant la pose d'un garrot tourniquet de membre en situation de secourisme opérationnel ?",
        answerOptions: [
            { text: "Noter l'heure exacte de la pose de manière visible (sur le garrot ou sur la victime), ne jamais le desserrer soi-même une fois posé", isCorrect: true, rationale: "Le retrait ou le desserrage intempestif du garrot relève exclusivement d'une décision médicale spécialisée à l'hôpital." },
            { text: "Le desserrer toutes les 5 minutes pour 'laisser respirer' le membre", isCorrect: false, rationale: "Pratique ancienne et dangereuse (risque de récidive d'hémorragie massive et de choc)." },
            { text: "Le cacher sous les vêtements pour qu'il ne se voie pas", isCorrect: false, rationale: "Doit être visible et accessible en permanence." },
            { text: "Le fabriquer avec une ficelle fine et un bout de bois fragile", isCorrect: false, rationale: "Doit utiliser un matériel réglementaire et homologué." }
        ],
        tags: ["Hémorragies", "Traumatisme"]
    },
    {
        question: "Quel est l'objectif principal de la réalisation d'un bilan circonstanciel (lors de l'approche initiale d'une intervention) ?",
        answerOptions: [
            { text: "Analyser l'environnement, identifier les dangers persistants, estimer le nombre de victimes et comprendre la nature de l'accident ou de la maladie", isCorrect: true, rationale: "Permet d'adapter les mesures de protection et d'alerte." },
            { text: "Connaître le signe astrologique de la victime", isCorrect: false, rationale: "Hors sujet." },
            { text: "Choisir la couleur de la tenue de secours", isCorrect: false, rationale: "Sans rapport." },
            { text: "Deviner l'heure exacte de la fin de garde", isCorrect: false, rationale: "Hors sujet." }
        ],
        tags: ["Secours", "Bilans"]
    },
// --- BLOC SUPPLÉMENTAIRE 1 : URGENCES MÉDICALES & MALAISE ---
    {
        question: "Quel est le principal signe d'alerte d'un accident vasculaire cérébral (AVC) facilement repérable par l'acronyme F.A.S.T. ?",
        answerOptions: [
            { text: "Faiblesse ou paralysie unilatérale du visage, du bras ou de la jambe, et troubles de la parole", isCorrect: true, rationale: "Signes caractéristiques d'une atteinte cérébrale aiguë nécessitant une alerte immédiate (15)." },
            { text: "Douleur intense et irradiante dans la mâchoire et le bras gauche", isCorrect: false, rationale: "Évoque plutôt un syndrome coronarien aigu (infarctus)." },
            { text: "Une augmentation brutale de la température avec des frissons", isCorrect: false, rationale: "Évoque une infection." },
            { text: "Une coloration jaune des yeux et de la peau", isCorrect: false, rationale: "Évoque un ictère." }
        ],
        tags: ["Urgences médicales"]
    },
    {
        question: "Quelle est la position d'attente conseillée pour une victime consciente se plaignant d'une douleur thoracique anormale (suspecte d'infarctus) ?",
        answerOptions: [
            { text: "Position assise ou demi-assise, au repos", isCorrect: true, rationale: "Réduit le travail cardiaque et facilite la respiration." },
            { text: "Position allongée à plat dos, jambes surélevées", isCorrect: false, rationale: "Augmente le retour veineux et surcharge le cœur." },
            { text: "Position latérale de sécurité (PLS)", isCorrect: false, rationale: "Réservée aux victimes inconscientes." },
            { text: "Debout en marchant pour stimuler la circulation", isCorrect: false, rationale: "Risque d'aggravation immédiate." }
        ],
        tags: ["Urgences médicales"]
    },
    {
        question: "Face à une victime présentant une crise d'asthme aiguë, quelle est l'action prioritaire à réaliser en premier ?",
        answerOptions: [
            { text: "L'aider à s'asseoir et l'encourager à utiliser son traitement inhalateur personnel (bronchodilatateur)", isCorrect: true, rationale: "L'inhalateur prescrit par son médecin est la réponse médicale immédiate." },
            { text: "Allonger la victime à plat ventre", isCorrect: false, rationale: "Position impossible pour respirer." },
            { text: "Pratiquer immédiatement une insufflation au BAVU", isCorrect: false, rationale: "La victime est consciente et respire, l'assistance mécanique n'est pas indiquée de prime abord." },
            { text: "Lui faire retenir sa respiration", isCorrect: false, rationale: "Totalement inefficace et dangereux." }
        ],
        tags: ["Urgences médicales", "Détresse respiratoire"]
    },
    {
        question: "Quel signe clinique caractérise une hypoglycémie chez une personne consciente ?",
        answerOptions: [
            { text: "Sueurs froides, tremblements, pâleur, troubles de l'humeur ou de la vue", isCorrect: true, rationale: "Signes typiques d'une chute brutale du taux de sucre dans le sang." },
            { text: "Une tension artérielle mesurée à 20/10", isCorrect: false, rationale: "Évoque une crise hypertensive." },
            { text: "Une coloration bleue unilatérale des membres", isCorrect: false, rationale: "Évoque un problème circulatoire local." },
            { text: "Une rigidité musculaire totale avec arrêt respiratoire", isCorrect: false, rationale: "Évoque une autre pathologie lourde." }
        ],
        tags: ["Urgences médicales"]
    },
    {
        question: "Quelle est la conduite à tenir face à une victime consciente victime d'une hypoglycémie avérée (et capable d'avaler) ?",
        answerOptions: [
            { text: "Lui administrer des glucides par voie orale (sucre, jus de fruit sucré)", isCorrect: true, rationale: "Remonte rapidement le taux de glucose sanguin." },
            { text: "Lui injecter de l'insuline", isCorrect: false, rationale: "L'insuline baisse encore plus le sucre, c'est l'inverse de ce qu'il faut faire." },
            { text: "Lui donner de l'eau pure uniquement", isCorrect: false, rationale: "Inefficace pour corriger le manque de sucre." },
            { text: "Mettre la victime en PLS sans rien lui donner", isCorrect: false, rationale: "Réservé aux inconscients." }
        ],
        tags: ["Urgences médicales"]
    },
    {
        question: "Comment définit-on une crise convulsive généralisée simple chez l'adulte ?",
        answerOptions: [
            { text: "Une perte de connaissance brutale suivie de secousses musculaires rythmiques de tout le corps", isCorrect: true, rationale: "Sémiologie classique de l'épilepsie généralisée tonico-clonique." },
            { text: "Une simple somnolence passagère sans mouvement", isCorrect: false, rationale: "Correspond à une lipothymie ou fatigue." },
            { text: "Une douleur fulgurante dans le bras gauche", isCorrect: false, rationale: "Signe cardiaque." },
            { text: "Des contractions musculaires limitées au seul pouce", isCorrect: false, rationale: "Concerne une convulsion focale minime." }
        ],
        tags: ["Urgences médicales"]
    },
    {
        question: "Quelle est la conduite à tenir face à une victime présentant une agitation importante et agressive en milieu public ?",
        answerOptions: [
            { text: "Assurer la sécurité des lieux, se protéger, rassurer et demander des renforts spécialisés (police/secours)", isCorrect: true, rationale: "La sécurité du secouriste prime avant toute tentative d'approche." },
            { text: "Maîtriser physiquement la victime à plusieurs en l'asphyxiant au sol", isCorrect: false, rationale: "Risque mortel de positionnement ou de compression thoracique." },
            { text: "Fuir en abandonnant la victime sans alerte", isCorrect: false, rationale: "Non-assistance à personne en danger." },
            { text: "Lui crier dessus pour qu'elle se calme", isCorrect: false, rationale: "Risque d'aggraver l'agressivité." }
        ],
        tags: ["Urgences médicales", "Sécurité"]
    },
    {
        question: "Quel signe recherche-t-on en priorité lors d'une suspicion de malaise vagal (lipothymie imminente) ?",
        answerOptions: [
            { text: "Des étourdissements, des nausées, des sueurs et des troubles visuels en position debout ou assise", isCorrect: true, rationale: "Signes annonciateurs d'une baisse transitoire de la pression artérielle." },
            { text: "Une hémiplégie brutale", isCorrect: false, rationale: "Signe d'AVC." },
            { text: "Une cyanose généralisée immédiate", isCorrect: false, rationale: "Signe d'asphyxie." },
            { text: "Une tension artérielle à 22/12", isCorrect: false, rationale: "Hypertension." }
        ],
        tags: ["Urgences médicales"]
    },
    {
        question: "Quelle est la position idéale à faire adopter à une victime victime d'un malaise vagal simple (ou qui se sent faiblir) ?",
        answerOptions: [
            { text: "Allonger la victime sur le dos et surélever ses jambes", isCorrect: true, rationale: "Favorise le retour veineux vers le cœur et le cerveau, stoppant le malaise." },
            { text: "La laisser debout en lui maintenant la tête", isCorrect: false, rationale: "Risque de chute brutale." },
            { text: "La mettre en position assise penchée en avant", isCorrect: false, rationale: "Préférée pour la gêne respiratoire, mais moins adaptée pour faire remonter la tension en cas de malaise vagal." },
            { text: "La mettre à plat ventre", isCorrect: false, rationale: "Proscrit." }
        ],
        tags: ["Urgences médicales"]
    },
    {
        question: "Face à une personne qui vient d'ingérer un produit caustique (nettoyant ménager fort), que ne faut-il SURTOUT PAS faire ?",
        answerOptions: [
            { text: "Ne pas faire vomir la victime et ne pas lui donner à boire", isCorrect: true, rationale: "Faire vomir ou boire réactive ou rediffuse le produit caustique, aggravant les brûlures internes de l'œsophage." },
            { text: "Appeler le 15 ou le centre antipoison", isCorrect: false, rationale: "C'est exactement ce qu'il faut faire." },
            { text: "Conserver l'emballage du produit pour le montrer aux secours", isCorrect: false, rationale: "C'est une excellente pratique pour identifier la substance." },
            { text: "Surveiller sa conscience et sa respiration", isCorrect: false, rationale: "Fait partie du bilan." }
        ],
        tags: ["Urgences médicales", "Intoxications"]
    },

    // --- BLOC SUPPLÉMENTAIRE 2 : TRAUMATOLOGIE & ATTEINTES CUTANÉES ---
    {
        question: "Quelle est la règle des '9 de Wallace' utilisée par les secouristes (PSE 2) pour estimer quoi ?",
        answerOptions: [
            { text: "La surface cutanée brûlée exprimée en pourcentage de la surface corporelle totale", isCorrect: true, rationale: "Permet d'évaluer la gravité d'une brûlure selon les zones atteintes." },
            { text: "Le poids théorique d'une victime selon sa taille", isCorrect: false, rationale: "Hors sujet." },
            { text: "La pression artérielle normale d'un adulte", isCorrect: false, rationale: "Hors sujet." },
            { text: "Le nombre de vertèbres cervicales et lombaires", isCorrect: false, rationale: "Anatomie fausse (il y a 7 cervicales)." }
        ],
        tags: ["Traumatisme", "Brûlures"]
    },
    {
        question: "Comment qualifie-t-on une brûlure présentant des cloques (phlyctènes) intactes de taille modérée ?",
        answerOptions: [
            { text: "Une brûlure du 2ème degré (intermédiaire / profond selon atteinte)", isCorrect: true, rationale: "La présence de phlyctènes est caractéristique du deuxième degré." },
            { text: "Une brûlure du 1er degré simple", isCorrect: false, rationale: "Le 1er degré se limite à une rougeur cutanée (type coup de soleil) sans cloque." },
            { text: "Une brûlure du 3ème degré carbonisée", isCorrect: false, rationale: "Le 3ème degré détruit toute l'épaisseur de la peau (aspect parcheminé, indolore)." },
            { text: "Une simple écorchure superficielle", isCorrect: false, rationale: "Concerne les plaies cutanées mécaniques." }
        ],
        tags: ["Traumatisme", "Brûlures"]
    },
    {
        question: "Quelle est la conduite à tenir face à un corps étranger planté profondément dans l'œil d'une victime ?",
        answerOptions: [
            { text: "Ne surtout pas retirer l'objet, protéger l'œil sans appuyer et alerter", isCorrect: true, rationale: "Retirer l'objet risquerait de provoquer une issue de liquide intra-oculaire et la cécité définitive." },
            { text: "Tirer fermement sur l'objet pour l'extraire rapidement", isCorrect: false, rationale: "Extrêmement dangereux pour l'œil." },
            { text: "Rincer abondamment à l'eau de Javel diluée", isCorrect: false, rationale: "Aberration totale et destructrice." },
            { text: "Appuyer fort avec une compresse pour stopper le saignement", isCorrect: false, rationale: "Proscrit sur le globe oculaire." }
        ],
        tags: ["Traumatisme"]
    },
    {
        question: "Quelle est la particularité d'une brûlure chimique par rapport à une brûlure thermique classique ?",
        answerOptions: [
            { text: "Elle nécessite un arrosage / lavage prolongé et abondant à l'eau pour éliminer le produit résiduel", isCorrect: true, rationale: "Le produit continue d'agir tant qu'il n'est pas totalement dilué et lavé." },
            { text: "Il faut appliquer de la glace immédiatement", isCorrect: false, rationale: "Interdit." },
            { text: "Il ne faut jamais arroser une brûlure chimique", isCorrect: false, rationale: "Au contraire, l'arrosage est la règle d'or." },
            { text: "Elle guérit toujours spontanément en 2 minutes", isCorrect: false, rationale: "Faux, les brûlures chimiques sont souvent graves et profondes." }
        ],
        tags: ["Traumatisme", "Brûlures"]
    },
    {
        question: "Face à une amputation traumatique d'un doigt, que doit-on faire du segment amputé (le fragment coupé) ?",
        answerOptions: [
            { text: "Le protéger dans une compresse stérile, le placer dans un sac étanche, puis poser ce sac sur un autre contenant de la glace (ne pas le mettre en contact direct avec la glace)", isCorrect: true, rationale: "Permet de conserver le tissu sans le détruire par le froid direct en vue d'une éventuelle réimplantation chirurgicale." },
            { text: "Le jeter car il n'est plus récupérable", isCorrect: false, rationale: "Erreur, les chirurgiens peuvent parfois réimplanter des fragments." },
            { text: "Le plonger directement dans un bacon rempli de glaçons purs", isCorrect: false, rationale: "Détruit définitivement les cellules par gel." },
            { text: "Le badigeonner d'alcool à 90°", isCorrect: false, rationale: "Nécrose le tissu." }
        ],
        tags: ["Traumatisme"]
    },
    {
        question: "Quel signe clinique traduit une entorse grave (par opposition à une simple foulure bénigne) ?",
        answerOptions: [
            { text: "Un œdème important précoce, une ecchymose (bleu) et une impossibilité totale de s'appuyer sur le membre", isCorrect: true, rationale: "Signes évocateurs d'une lésion ligamentaire sérieuse (voire rupture)." },
            { text: "Une simple gêne passagère qui disparaît en courant", isCorrect: false, rationale: "Évoque un bénin faux mouvement." },
            { text: "Une modification de la couleur de la peau en vert fluo", isCorrect: false, rationale: "Impossible." },
            { text: "Une élévation de la température corporelle à 41°C", isCorrect: false, rationale: "Signe infectieux ou général." }
        ],
        tags: ["Traumatisme"]
    },
    {
        question: "Quelle est la règle fondamentale d'immobilisation d'un membre suspect de fracture ?",
        answerOptions: [
            { text: "Immobiliser l'articulation sus-jacente et l'articulation sous-jacente au foyer de fracture", isCorrect: true, rationale: "Empêche tout mouvement de l'os fracturé en bloquant les articulations de part et d'autre." },
            { text: "Immobiliser uniquement l'os cassé sans toucher aux articulations", isCorrect: false, rationale: "Insuffisant, l'os bougera via les articulations adjacentes." },
            { text: "Serrer l'attelle le plus fort possible pour écraser l'œdème", isCorrect: false, rationale: "Risque de couper la circulation sanguine." },
            { text: "Ne rien immobiliser et laisser pendre le membre", isCorrect: false, rationale: "Risque d'aggravation des lésions vasculaires et nerveuses." }
        ],
        tags: ["Traumatisme", "Matériel"]
    },
    {
        question: "Dans quel cas utilise-t-on le collier cervical rigide réglable au cours d'un bilan ou d'un conditionnement (PSE 2) ?",
        answerOptions: [
            { text: "En présence d'un traumatisme suspect ou avéré de la colonne cervicale (ex: AVP, chute de hauteur)", isCorrect: true, rationale: "Limite les mouvements du cou en attendant la pose d'un moyen d'immobilisation global." },
            { text: "Pour traiter une angine blanche chez un patient conscient", isCorrect: false, rationale: "Totalement hors sujet (pathologie médicale)." },
            { text: "Pour soulager un torticolis chronique bénin", isCorrect: false, rationale: "Acte relevant de la médecine de ville." },
            { text: "Systématiquement sur toutes les victimes de malaise vagal", isCorrect: false, rationale: "Inutile et inconfortable." }
        ],
        tags: ["Traumatisme", "Matériel"]
    },
    {
        question: "Quel est l'objectif de la mise en place d'un matelas à dépression (MAD) chez une victime de traumatisme grave ?",
        answerOptions: [
            { text: "Immobiliser complètement le corps entier de la victime en position neutre", isCorrect: true, rationale: "L'air est aspiré pour rigidifier le matelas, moulant parfaitement la morphologie de la victime." },
            { text: "Réchauffer la victime grâce à sa structure chauffante électrique", isCorrect: false, rationale: "Le matelas n'a pas de fonction thermique active." },
            { text: "L'utiliser comme bouée de sauvetage en milieu aquatique", isCorrect: false, rationale: "Ce n'est pas un dispositif de flottaison agréé pour le sauvetage en eau vive." },
            { text: "Permettre de transporter la victime en position assise", isCorrect: false, rationale: "Le MAD s'utilise à plat." }
        ],
        tags: ["Traumatisme", "Matériel"]
    },
    {
        question: "Face à une plaie grave abdominale avec extériorisation d'anses intestinales (viscères sortis), quelle est la conduite à tenir ?",
        answerOptions: [
            { text: "Ne jamais tenter de réintroduire les viscères, protéger avec un champ stérile humide et propre, ne pas comprimer", isCorrect: true, rationale: "Évite l'infection et la nécrose des tissus extériorisés." },
            { text: "Tenter de repousser les intestins à l'intérieur avec les doigts gantés", isCorrect: false, rationale: "Risque infectieux et traumatique majeur." },
            { text: "Appliquer un garrot abdominal serré", isCorrect: false, rationale: "Absurde et mortel." },
            { text: "Laisser la plaie à l'air libre pour qu'elle sèche", isCorrect: false, rationale: "Risque de dessiccation et d'infection." }
        ],
        tags: ["Traumatisme", "Plaies"]
    },

    // --- BLOC SUPPLÉMENTAIRE 3 : ENVIRONNEMENT, NOYADES & RISQUES PARTICULIERS ---
    {
        question: "Quelle est la priorité absolue lors de la prise en charge d'une victime sortie de l'eau en noyade (en arrêt ou en détresse) ?",
        answerOptions: [
            { text: "Débuter la réanimation ou l'oxygénation le plus rapidement possible, sans perdre de temps à vouloir 'vider' l'eau des poumons", isCorrect: true, rationale: "L'eau n'encombre pas les poumons de la même façon qu'un corps étranger solide; l'urgence est d'apporter de l'oxygène." },
            { text: "Vouloir absolument faire vomir la victime en la suspendant par les pieds", isCorrect: false, rationale: "Technique ancienne, inefficace et dangereuse (risque d'inhalation de vomissements)." },
            { text: "Attendre que la victime sèche d'elle-même au soleil", isCorrect: false, rationale: "Perte de chance vitale." },
            { text: "Retirer tous ses vêtements avant de vérifier la respiration", isCorrect: false, rationale: "Fait perdre un temps précieux face à l'hypoxie." }
        ],
        tags: ["Risques particuliers", "Noyade"]
    },
    {
        question: "Quel est le risque principal lors du réchauffement trop rapide d'une victime en hypothermie grave ?",
        answerOptions: [
            { text: "Un arrêt cardiaque par 'prolapsus thermique' ou retour de sang froid acidifié vers le cœur (choc thermique)", isCorrect: true, rationale: "Le réchauffement doit être progressif et passif (couverture de survie, ambiance tempérée) pour éviter les troubles du rythme." },
            { text: "Une combustion spontanée de la peau", isCorrect: false, rationale: "Impossible." },
            { text: "Une guérison instantanée en 10 secondes", isCorrect: false, rationale: "Faux." },
            { text: "Une sudation excessive sans gravité", isCorrect: false, rationale: "Inexact." }
        ],
        tags: ["Risques particuliers", "Environnement"]
    },
    {
        question: "Quelle est la conduite à tenir face à une morsure de vipère sur un membre ?",
        answerOptions: [
            { text: "Mettre la victime au repos, immobiliser le membre, désinfecter et alerter le 15 (ne pas inciser, ne pas aspirer le venin)", isCorrect: true, rationale: "Les techniques d'incision ou d'aspiration de type 'aspirvenin' sont aujourd'hui déconseillées car inefficaces et sources de complications." },
            { text: "Poser un garrot serré pour bloquer tout le sang du membre", isCorrect: false, rationale: "Le garrot aggrave les lésions locales du venin et peut nécroser le membre." },
            { text: "Sucer la plaie avec sa bouche pour aspirer le venin", isCorrect: false, rationale: "Danger d'intoxication pour le secouriste par les muqueuses buccales." },
            { text: "Brûler la plaie avec une cigarette", isCorrect: false, rationale: "Pratique moyenâgeuse et destructrice." }
        ],
        tags: ["Risques particuliers"]
    },
    {
        question: "Face à une piqûre d'insecte (guêpe, abeille) avec un dard visible dans la peau, que doit faire le secouriste ?",
        answerOptions: [
            { text: "Retirer le dard en grattant délicatement avec un onglet ou le dos d'une carte rigide (sans pincer la poche à venin)", isCorrect: true, rationale: "Évite de injecter le reste du venin contenu dans la poche si on pince le dard avec une pince." },
            { text: "Pincer fermement le dard avec les doigts pour l'arracher d'un coup sec", isCorrect: false, rationale: "Risque d'injecter tout le venin résiduel." },
            { text: "Ignorer le dard", isCorrect: false, rationale: "Il continuera de diffuser le venin." },
            { text: "Mettre du beurre dessus", isCorrect: false, rationale: "Inutile." }
        ],
        tags: ["Risques particuliers"]
    },
    {
        question: "Quel est le risque majeur d'une exposition prolongée au soleil et à la chaleur sans hydratation (coup de chaleur / hyperthermie maligne d'effort) ?",
        answerOptions: [
            { text: "Une défaillance multiviscérale engageant rapidement le pronostic vital (température corporelle > 40°C)", isCorrect: true, rationale: "L'hyperthermie maligne est une urgence absolue nécessitant un refroidissement immédiat." },
            { text: "Une simple coloration bronzée de la peau", isCorrect: false, rationale: "C'est l'effet esthétique bénin recherché, sans rapport avec le coup de chaleur grave." },
            { text: "Une baisse de la température corporelle à 32°C", isCorrect: false, rationale: "C'est l'hypothermie, l'inverse de l'hyperthermie." },
            { text: "Un endormissement paisible sans conséquence", isCorrect: false, rationale: "Faux, le pronostic est sombre sans prise en charge." }
        ],
        tags: ["Risques particuliers", "Environnement"]
    },
    {
        question: "Qu'appelle-t-on 'l'effet de souffle' (blast) lors d'une explosion ?",
        answerOptions: [
            { text: "Une onde de surpression aérienne provoquant des lésions graves sur les organes creux (poumons, intestins, oreilles)", isCorrect: true, rationale: "Le blast endommage les tissus riches en air ou en gaz." },
            { text: "Un simple courant d'air rafraîchissant", isCorrect: false, rationale: "Sans rapport." },
            { text: "L'illumination lumineuse de l'explosion", isCorrect: false, rationale: "Concerne le flash thermique." },
            { text: "La fumée noire dégagée par le feu", isCorrect: false, rationale: "Concerne les fumées toxiques." }
        ],
        tags: ["Risques particuliers"]
    },
    {
        question: "Quel équipement de protection individuelle (EPI) de base le secouriste doit-il impérativement porter avant tout contact avec du sang ou des fluides corporels ?",
        answerOptions: [
            { text: "Des gants à usage unique (gants d'examen)", isCorrect: true, rationale: "Protège le secouriste contre les risques de transmission d'agents infectieux transmissibles par le sang (VIH, hépatites)." },
            { text: "Un casque lourd de pompiers avec visière", isCorrect: false, rationale: "Réservé aux interventions incendie ou sauvetage technique." },
            { text: "Une tenue de feu complète veste et surpantalon", isCorrect: false, rationale: "Inadapté et trop lourd pour un secours à victime médical." },
            { text: "Des lunettes de plongée étanches", isCorrect: false, rationale: "Inutile sauf projection avérée." }
        ],
        tags: ["Secours", "Sécurité"]
    },
    {
        question: "Quelle est la conduite à tenir face à une victime suspecte d'intoxication au monoxyde de carbone (CO) dans une pièce close ?",
        answerOptions: [
            { text: "Ne pas entrer sans moyens de protection, aérer si possible de l'extérieur, évacuer et alerter les secours spécialisés", isCorrect: true, rationale: "Le CO est inodore et invisible; le risque de voir le secouriste s'écrouler à son tour est maximal." },
            { text: "Entrer en courant pour sortir la victime en retenant sa respiration pendant 3 minutes", isCorrect: false, rationale: "Impossible et mortel." },
            { text: "Allumer toutes les lampes de la pièce pour y voir clair", isCorrect: false, rationale: "Risque d'étincelle électrique provoquant une explosion si du gaz inflammable est présent." },
            { text: "Laisser la porte entrouverte et s'installer dans la pièce", isCorrect: false, rationale: "Exposition directe au danger." }
        ],
        tags: ["Risques particuliers", "Intoxications"]
    },
    {
        question: "Quel est le rôle du masque à haute concentration (MHC) relié à une bouteille d'oxygène ?",
        answerOptions: [
            { text: "Administrer de l'oxygène à concentration maximale (autour de 80 à 100%) grâce à son sac réservoir", isCorrect: true, rationale: "Permet de traiter efficacement les détresses graves." },
            { text: "Filtrer l'air pollué de la pièce pour que le secouriste respire", isCorrect: false, rationale: "Ce n'est pas un appareil de protection respiratoire (APR) pour les intervenants." },
            { text: "Aspirer les sécrétions de la gorge de la victime", isCorrect: false, rationale: "Rôle de laaspirateur de mucosités." },
            { text: "Mesurer le taux de dioxyde de carbone expiré", isCorrect: false, rationale: "Rôle du capnographe." }
        ],
        tags: ["Oxygénologie", "Matériel"]
    },
    {
        question: "Quelle est la définition d'une victime en 'urgence absolue' (UA) sur un théâtre d'opérations de secours ?",
        answerOptions: [
            { text: "Une victime dont le pronostic vital ou fonctionnel est immédiatement menacé", isCorrect: true, rationale: "Nécessite une prise en charge et une évacuation prioritaire vers un centre hospitalier." },
            { text: "Une victime présentant une simple écorchure au genou", isCorrect: false, rationale: "Il s'agit d'une urgence relative (UR)." },
            { text: "Une victime qui crie très fort pour réclamer son dossier", isCorrect: false, rationale: "L'expression verbale ne définit pas la gravité clinique." },
            { text: "Une personne qui refuse catégoriquement les soins", isCorrect: false, rationale: "Concerne le refus de soins." }
        ],
        tags: ["Bilans", "Secours"]
    },

    // --- BLOC SUPPLÉMENTAIRE 4 : RÈGLES OPÉRATIONNELLES & DIVERS PSE ---
    {
        question: "Quel élément doit obligatoirement figurer dans les transmissions orales (bilan d'transmission) faites au médecin du SAMU (15) ?",
        answerOptions: [
            { text: "L'âge, le sexe, les plaintes principales, les constantes vitales et l'évolution sous soins", isCorrect: true, rationale: "Permet au médecin régulateur de se faire une idée précise de la situation clinique pour orienter la décision médicale." },
            { text: "Le plat préféré de la victime et sa couleur de cheveux", isCorrect: false, rationale: "Information sans pertinence médicale." },
            { text: "Le modèle de la voiture de la victime", isCorrect: false, rationale: "Inutile pour la régulation." },
            { text: "Le nom de l'équipementier de la caserne", isCorrect: false, rationale: "Hors sujet." }
        ],
        tags: ["Bilans", "Secours"]
    },
    {
        question: "Quel est le principe d'action de la compression directe sur une hémorragie externe de membre ?",
        answerOptions: [
            { text: "Appuyer directement sur la plaie qui saigne à l'aide d'un support stérile ou d'un linge propre pour écraser les vaisseaux", isCorrect: true, rationale: "Arrête mécaniquement l'écoulement en favorisant la formation du caillot." },
            { text: "Masser vigoureusement le muscle autour de la plaie", isCorrect: false, rationale: "Accélère l'hémorragie." },
            { text: "Verser de l'eau bouillante pour cautériser la plaie", isCorrect: false, rationale: "Interdit, provoque des brûlures graves." },
            { text: "Appliquer un pain de glace directement au fond de la plaie ouverte", isCorrect: false, rationale: "Interdit." }
        ],
        tags: ["Hémorragies", "Traumatisme"]
    },
    {
        question: "Quand le secouriste doit-il retirer un casque de protection à une victime motocycliste inconsciente ?",
        answerOptions: [
            { text: "Uniquement si le casque gêne l'accès aux voies aériennes, empêche d'évaluer la respiration ou si la victime est en arrêt cardiorespiratoire (manipulation à deux secouristes)", isCorrect: true, rationale: "Le retrait du casque se fait par principe avec précaution et à deux si l'état respiratoire l'exige." },
            { text: "Systématiquement dans tous les cas, dès la première seconde", isCorrect: false, rationale: "Risque d'aggraver une lésion cervicale si le casque n'est pas gênant pour la ventilation." },
            { text: "Jamais sous aucun prétexte", isCorrect: false, rationale: "Si la victime ne respire pas, il faut impérativement retirer le casque pour faire la RCP." },
            { text: "Seulement si la visière est de couleur sombre", isCorrect: false, rationale: "Critère esthétique sans fondement médical." }
        ],
        tags: ["Traumatisme", "Secours"]
    },
    {
        question: "Quel est le paramètre évalué par la lettre 'A' de l'échelle de conscience AVPU ?",
        answerOptions: [
            { text: "Alert : la victime est éveillée et consciente", isCorrect: true, rationale: "A = Alert (éveillé), V = Verbal (répond à la voix), P = Pain (répond à la douleur), U = Unresponsive (inconscient)." },
            { text: "Asystolie : absence d'activité cardiaque", isCorrect: false, rationale: "Terme médical d'arrêt cardiaque." },
            { text: "Apnée : absence de respiration", isCorrect: false, rationale: "Terme ventilatoire." },
            { text: "Anxiété : état de stress aigu", isCorrect: false, rationale: "Trouble psychologique." }
        ],
        tags: ["Bilans"]
    },
    {
        question: "Dans quel cas le secouriste utilise-t-il la technique du 'dégagement d'urgence' d'une victime ?",
        answerOptions: [
            { text: "Uniquement en présence d'un danger immédiat, réel et non maîtrisable (ex: incendie, explosion imminente)", isCorrect: true, rationale: "Le déplacement en urgence comporte des risques de traumatismes, il ne se fait que si la vie est menacée sur place par l'environnement." },
            { text: "Dès qu'il se met à pleuvoir légèrement", isCorrect: false, rationale: "Ne constitue pas un danger vital immédiat justifiant un arrachement." },
            { text: "Pour aller plus vite pour rentrer à la caserne", isCorrect: false, rationale: "Le confort ne justifie pas le risque." },
            { text: "À la demande d'un passant curieux", isCorrect: false, rationale: "Le choix appartient aux secouristes formés." }
        ],
        tags: ["Secours", "Sécurité"]
    },
    {
        question: "Quel est le comportement à adopter face à une victime présentant une crise d'angoisse aiguë (hyperventilation, tétanie) ?",
        answerOptions: [
            { text: "Isoler la victime du public, la rassurer, l'inviter à ralentir sa respiration en l'accompagnant", isCorrect: true, rationale: "La prise en charge psychologique et la mise en confiance sont les clés de la régulation de l'hyperventilation." },
            { text: "Lui faire respirer obligatoirement dans un sac en plastique fermé", isCorrect: false, rationale: "Technique aujourd'hui abandonnée et déconseillée en raison des risques d'hypoxie." },
            { text: "Lui administrer des médicaments sédatifs de sa pharmacie personnelle", isCorrect: false, rationale: "Interdit pour un secouriste (prescription médicale requise)." },
            { text: "L'ignorer en attendant que cela passe", isCorrect: false, rationale: "Non-assistance." }
        ],
        tags: ["Urgences médicales"]
    },
    {
        question: "Quel est l'intérêt de la feuille de bilan opérationnel (papier ou numérique) lors d'une intervention PSE ?",
        answerOptions: [
            { text: "Tracer l'évolution de l'état de la victime, noter les paramètres recueillis et transmettre une information écrite fiable à l'équipe médicale montante", isCorrect: true, rationale: "Garantit la continuité des soins et la traçabilité juridique de l'intervention." },
            { text: "Servir de bloc-notes pour dessiner pendant l'attente", isCorrect: false, rationale: "Usage non conforme." },
            { text: "Être jetée dès l'arrivée à l'hôpital", isCorrect: false, rationale: "Doit être transmise ou archivée selon les procédures réglementaires." },
            { text: "Remplacer le bilan oral au médecin", isCorrect: false, rationale: "Il le complète mais ne le remplace pas en direct." },
            // (Note : on ajuste le compte pour atteindre exactement les 50 questions demandées)
        ],
        tags: ["Bilans", "Secours"]
    },
    {
        question: "Quelle est la définition d'une 'plaie simple' en secourisme ?",
        answerOptions: [
            { text: "Une éraflure superficielle ou une coupure peu profonde ne saignant que modérément et sans corps étranger ni localisation sensible", isCorrect: true, rationale: "Ne nécessite généralement qu'un nettoyage à l'eau et au savon et une protection simple." },
            { text: "Une plaie de l'abdomen avec sortie d'organes", isCorrect: false, rationale: "C'est une plaie grave." },
            { text: "Une section nette d'un membre entier", isCorrect: false, rationale: "Amputation traumatique grave." },
            { text: "Une plaie par arme à feu traversante", isCorrect: false, rationale: "Plaie grave." }
        ],
        tags: ["Traumatisme", "Plaies"]
    },
    {
        question: "Comment traite-t-on une plaie simple après s'être lavé les mains et avoir protégé ses mains par des gants ?",
        answerOptions: [
            { text: "Nettoyer abondamment à l'eau et au savon (ou avec un antiseptique doux), rincer, sécher et appliquer un pansement adhésif protecteur", isCorrect: true, rationale: "Protège la plaie des infections extérieures." },
            { text: "Verser directement de l'eau de Javel pure", isCorrect: false, rationale: "Détruit les tissus sains." },
            { text: "Appliquer de la colle forte industrielle", isCorrect: false, rationale: "Dangereux et toxique." },
            { text: "Laisser la plaie au contact direct de la terre pour stimuler l'immunité", isCorrect: false, rationale: "Risque de tétanos et d'infection grave." }
        ],
        tags: ["Traumatisme", "Plaies"]
    },
    {
        question: "Quel est le risque principal associé à une plaie du cou (région cervicale antérieure) ?",
        answerOptions: [
            { text: "Une embolie gazeuse par aspiration d'air dans les grosses veines jugulaires lésées, ou une asphyxie par compression des voies aériennes", isCorrect: true, rationale: "Zone anatomique extrêmement critique nécessitant une surveillance et une protection occlusive spécifique si indiquée." },
            { text: "Une simple douleur musculaire au cou sans gravité", isCorrect: false, rationale: "Sous-estime complètement le risque vital." },
            { text: "Un enrouement passif de la voix pendant 2 minutes", isCorrect: false, rationale: "Minimise un traumatisme vasculaire grave." },
            { text: "Une surdité bilatérale définitive", isCorrect: false, rationale: "Sans rapport direct." }
        ],
        tags: ["Traumatisme", "Plaies"]
    },
    {
        question: "Quelle est la définition exacte du pouls mesuré lors du bilan complémentaire d'un adulte au repos ?",
        answerOptions: [
            { text: "Le nombre de pulsations artérielles par minute, dont la valeur normale chez l'adulte au repos se situe généralement entre 60 et 100 battements par minute", isCorrect: true, rationale: "Permet d'évaluer l'activité cardiaque de base." },
            { text: "La pression exercée par le sang sur les parois des veines profondes", isCorrect: false, rationale: "Concerne la pression artérielle et non le pouls veineux." },
            { text: "La vitesse de circulation de l'oxygène dans les poumons", isCorrect: false, rationale: "Définit la SpO2." },
            { text: "Le nombre de respirations par minute", isCorrect: false, rationale: "Correspond à la fréquence respiratoire." }
        ],
        tags: ["Bilans"]
    },
    {
        question: "Quel est l'appareil utilisé pour mesurer la tension artérielle (pression artérielle) de manière électronique dans le lot PSE 2 ?",
        answerOptions: [
            { text: "Le tensiomètre électronique automatisé (avec brassard adapté)", isCorrect: true, rationale: "Permet de relever la pression systolique et diastolique rapidement." },
            { text: "Le thermomètre auriculaire", isCorrect: false, rationale: "Mesure la température." },
            { text: "L'oxymètre de pouls", isCorrect: false, rationale: "Mesure la SpO2 et la fréquence du pouls." },
            { text: "Le glucomètre", isCorrect: false, rationale: "Mesure la glycémie." }
        ],
        tags: ["Bilans", "Matériel"]
    },
    {
        question: "Quelle est la température corporelle centrale moyenne d'un être humain adulte en bonne santé (normothermie) ?",
        answerOptions: [
            { text: "Autour de 37°C (avec des variations physiologiques normales entre 36,5°C et 37,5°C)", isCorrect: true, rationale: "Valeur de référence de la homéothermie humaine." },
            { text: "Exactement 39,5°C", isCorrect: false, rationale: "Correspond à une fièvre modérée à élevée." },
            { text: "Exactement 34°C", isCorrect: false, rationale: "Correspond à un début d'hypothermie." },
            { text: "Exactement 42°C", isCorrect: false, rationale: "Incompatible avec la vie prolongée." }
        ],
        tags: ["Bilans"]
    },
    {
        question: "Qu'appelle-t-on une 'cyanose' lors de l'examen clinique d'une victime ?",
        answerOptions: [
            { text: "Une coloration bleuâtre ou violacée de la peau et des muqueuses (lèvres, extrémités des doigts), traduisant un manque d'oxygène (hypoxie)", isCorrect: true, rationale: "Signe clinique d'alerte d'une mauvaise oxygénation du sang." },
            { text: "Une coloration jaune intense de la peau", isCorrect: false, rationale: "Correspond à l'ictère (jaunisse)." },
            { text: "Une rougeur écarlate généralisée du visage", isCorrect: false, rationale: "Évoque une bouffée vasomotrice ou un coup de chaleur." },
            { text: "Une absence totale de coloration cutanée (blanchiment complet)", isCorrect: false, rationale: "Correspond à la pâleur (choc ou anémie)." }
        ],
        tags: ["Bilans", "Détresse respiratoire"]
    },
    {
        question: "Qu'appelle-t-on une 'marbrure' cutanée observée aux genoux ou sur les membres lors de l'examen d'une victime en détresse ?",
        answerOptions: [
            { text: "Des taches cutanées roses et pâles inégales donnant un aspect de peau de truite, traduisant une mauvaise perfusion sanguine (état de choc)", isCorrect: true, rationale: "Signe grave d'orientation vers une détresse circulatoire." },
            { text: "Une simple réaction allergique bénigne aux vêtements synthétiques", isCorrect: false, rationale: "Concerne l'urticaire." },
            { text: "Un coup de soleil localisé", isCorrect: false, rationale: "Brûlure thermique superficielle." },
            { text: "Une pigmentation normale liée à l'âge", isCorrect: false, rationale: "Inexact." }
        ],
        tags: ["Bilans", "État de choc"]
    },
    {
        question: "Quel est le principe d'utilisation d'une couverture de survie face à une victime en train de se refroidir ?",
        answerOptions: [
            { text: "Placer le côté doré vers l'extérieur pour protéger du froid (et le côté argenté vers l'extérieur pour protéger de la chaleur)", isCorrect: true, rationale: "Règle classique d'orientation de la face réfléchissante de la couverture de survie." },
            { text: "Découper la couverture en petits morceaux pour les distribuer", isCorrect: false, rationale: "Inefficace." },
            { text: "Mettre la couverture en contact direct sans vêtement isolant en dessous", isCorrect: false, rationale: "La couverture isole mais ne produit pas de chaleur propre." },
            { text: "L'utiliser uniquement pour attacher les jambes", isCorrect: false, rationale: "Détournement d'usage." }
        ],
        tags: ["Matériel", "Secours"]
    },
    {
        question: "Quelle est la règle d'or concernant le déplacement d'une victime se plaignant du dos ou du cou après un accident de la route ?",
        answerOptions: [
            { text: "Ne pas mobiliser la victime inutilement, maintenir l'axe tête-cou-tronc et attendre les moyens spécialisés (sauf danger vital immédiat)", isCorrect: true, rationale: "Prévient toute aggravation d'une lésion médullaire potentielle." },
            { text: "La faire se lever rapidement pour vérifier si elle peut marcher", isCorrect: false, rationale: "Risque dramatique de lésion de la moelle épinière." },
            { text: "La porter sur le dos d'un secouriste en mode piggyback", isCorrect: false, rationale: "Proscrit en traumatologie." },
            { text: "L'asseoir par les épaules de force", isCorrect: false, rationale: "Dangereux." }
        ],
        tags: ["Traumatisme", "Secours"]
    },
    {
        question: "Quel rôle joue le secouriste lorsqu'il réalise un 'maintien de tête' (neutralisation manuelle) sur une victime de traumatisme crânien ou médullaire ?",
        answerOptions: [
            { text: "Placer ses mains de part et d'autre de la tête de la victime pour empêcher tout mouvement de flexion, d'extension ou de rotation du cou", isCorrect: true, rationale: "Geste de base indispensable en traumatologie en attendant la pose d'un collier et l'immobilisation." },
            { text: "Masser le cuir chevelu pour détendre la victime", isCorrect: false, rationale: "Inutile et contre-productif." },
            { text: "Tirer fortement sur la tête pour étirer les vertèbres", isCorrect: false, rationale: "Interdit (la traction axiale est strictement réglementée et réservée à des situations spécifiques encadrées)." },
            { text: "Appuyer fortement sur les oreilles pour couper le bruit", isCorrect: false, rationale: "Douloureux et inadapté." }
        ],
        tags: ["Traumatisme", "Secours"]
    },
    {
        question: "Quel est l'objectif d'une attelle à dépression pour membre (PSE 2) ?",
        answerOptions: [
            { text: "Immobiliser un membre fracturé ou suspect de fracture en modelant l'attelle autour du membre puis en y faisant le vide d'air", isCorrect: true, rationale: "Assure un maintien rigide, confortable et adapté à la morphologie du membre blessé." },
            { text: "Refroidir un membre brûlé", isCorrect: false, rationale: "L'attelle n'a pas de rôle thermique." },
            { text: "Comprimer une hémorragie artérielle massive", isCorrect: false, rationale: "Le rôle de l'attelle est l'immobilisation, pas l'hémostase compressive." },
            { text: "Servir de garrot tourniquet", isCorrect: false, rationale: "Fonctions totalement différentes." }
        ],
        tags: ["Traumatisme", "Matériel"]
    },
    {
        question: "Quelle est la conduite générale à tenir face à un individu alcoolisé présentant un comportement agressif ou comateux sur la voie publique ?",
        answerOptions: [
            { text: "Vérifier la conscience et la respiration, sécuriser, placer en PLS si inconscient qui respire, et appeler les secours (15 / 18)", isCorrect: true, rationale: "L'intoxication éthylique aiguë peut masquer un traumatisme crânien grave ou entraîner une détresse respiratoire par inhalation." },
            { text: "Le laisser dormir sur le ventre sur le trottoir en attendant qu'il cuise son vin", isCorrect: false, rationale: "Risque mortel d'asphyxie, de vomissements ou de vol/agression." },
            { text: "Lui donner du café très fort glacé de force", isCorrect: false, rationale: "Inefficace et source d'inhalation." },
            { text: "L'immerger dans une douche froide", isCorrect: false, rationale: "Danger de choc thermique." }
        ],
        tags: ["Urgences médicales", "Secours"]
    }
	
];