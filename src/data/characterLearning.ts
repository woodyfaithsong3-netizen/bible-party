export type CharacterLearning = {
  studyFocus: string;
  lessonPoints: string[];
  keyReading: string;
  jwResources: { title: string; url: string }[];
  identity?: string;
  era?: string;
  familyAndEntourage?: string[];
  bibleAccount?: string[];
  qualities?: string[];
  difficulties?: string[];
  location?: string;
  relationshipWithJehovah?: string;
  didYouKnow?: string;
};

export const characterLearning: Record<string, CharacterLearning> = {
  "adam": {
    "studyFocus": "Adam fut le premier humain créé par Jéhovah. Son récit montre la dignité de l’homme créé à l’image de Dieu, mais aussi la responsabilité personnelle et les conséquences de la désobéissance.",
    "lessonPoints": [
      "Observer les responsabilités confiées à Adam avant la création d’Ève.",
      "Comparer son choix avec le commandement précis de Genèse 2:16, 17.",
      "Examiner la responsabilité personnelle mise en évidence après le péché."
    ],
    "keyReading": "Genèse 1:26-31 ; 2:7-25 ; 3:1-24 ; 5:1-5",
    "location": "Jardin d’Éden puis cadre terrestre après son expulsion.",
    "relationshipWithJehovah": "Adam reçut directement de Jéhovah des instructions et des responsabilités; sa désobéissance montre qu’il connaissait la volonté divine.",
    "didYouKnow": "Adam est appelé « fils de Dieu » en Luc 3:38.",
    "jwResources": [
      {
        "title": "Adam — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Adam/"
      },
      {
        "title": "Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Premier homme — Adam apparaît au début du récit biblique comme le premier homme créé et placé dans le jardin d’Éden.",
    "era": "Genèse",
    "familyAndEntourage": [
      "Ève",
      "Caïn",
      "Abel",
      "Seth"
    ],
    "bibleAccount": [
      "Reçoit une mission concernant la terre et les animaux.",
      "Désobéit au commandement concernant l’arbre de la connaissance du bon et du mauvais."
    ],
    "qualities": [
      "Responsabilité personnelle",
      "Importance de l’obéissance"
    ],
    "difficulties": [
      "Les choix personnels peuvent avoir de graves conséquences."
    ]
  },
  "noe": {
  "studyFocus": "Noé est présenté comme un homme juste qui « marchait avec le vrai Dieu » dans une génération violente et corrompue. Sa foi se traduisit par une obéissance concrète : il construisit l’arche selon les instructions reçues, avertit sa génération et entra dans l’arche avec sa famille.",
  "lessonPoints": [
    "Une foi solide se voit dans l’obéissance, même lorsqu’une tâche paraît immense.",
    "Noé associa son service à celui de sa famille, qui fut préservée avec lui.",
    "Après le Déluge, il remercia Jéhovah par un sacrifice.",
    "Son erreur après le Déluge rappelle qu’un serviteur fidèle reste imparfait."
  ],
  "keyReading": "Genèse 6:9-22 ; 7:1-24 ; 8:15-22 ; 9:1-17 ; Matthieu 24:37-39 ; Hébreux 11:7 ; 2 Pierre 2:5",
  "location": "Le monde antédiluvien, puis l’arche et la région où elle s’arrêta après le Déluge.",
  "relationshipWithJehovah": "Noé marchait avec Jéhovah, reçut des instructions précises et les exécuta avec foi. Hébreux 11:7 relie directement sa conduite à sa foi.",
  "didYouKnow": "Noé avait 600 ans lorsque le Déluge commença, et huit personnes de sa famille furent préservées dans l’arche.",
  "jwResources": [
    {
      "title": "Marche courageusement avec Dieu — Noé",
      "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/patriarches-juges/noe-a-condamne-le-monde/"
    },
    {
      "title": "Marche courageusement avec Dieu",
      "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
    },
    {
      "title": "Noé — Étude perspicace des Écritures",
      "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/No%C3%A9/"
    },
    {
      "title": "Noé : « Il marchait avec le vrai Dieu » — Imitez leur foi",
      "url": "https://www.jw.org/fr/bibliotheque/livres/vraie-foi/noe/"
    }
  ],
  "identity": "Noé était un homme juste qui vivait dans une génération profondément corrompue. Jéhovah lui ordonna de construire une arche et le préserva, lui et sa famille, du Déluge.",
  "era": "Avant le Déluge, vers 2970 av. n. è. pour sa naissance",
  "familyAndEntourage": [
    "Lamek",
    "Ses trois fils: Sem, Cham et Japhet",
    "Sa femme",
    "Ses belles-filles"
  ],
  "bibleAccount": [
    "Il marche avec le vrai Dieu.",
    "Jéhovah lui donne les instructions pour construire l’arche.",
    "Il avertit sa génération et construit l’arche avec sa famille.",
    "Il entre dans l’arche avant le Déluge.",
    "Après le Déluge, il offre un sacrifice et reçoit une alliance."
  ],
  "qualities": [
    "Foi",
    "Obéissance",
    "Persévérance",
    "Courage"
  ],
  "difficulties": [
    "Il doit accomplir pendant des années une tâche extraordinaire dans un monde qui ne partage pas sa foi et avertir des personnes peu réceptives."
  ]
},
  "abraham": {
    "studyFocus": "Abraham quitta Our sur l’ordre de Jéhovah, vécut comme résident étranger en Canaan et fut appelé « père de tous ceux qui ont foi ». Sa vie met en évidence une foi qui se traduit par des décisions, de l’obéissance, de l’hospitalité et une confiance durable dans les promesses de Jéhovah.",
    "lessonPoints": [
      "Observer ce qu’Abraham abandonna lorsqu’il quitta Our et comment sa foi a guidé ses déplacements.",
      "Étudier ses prières et son intervention au sujet de Sodome pour voir son intérêt pour la justice et la miséricorde.",
      "Étudier l’épreuve d’Isaac et la façon dont Abraham a agi sur la base de sa confiance en Jéhovah.",
      "Comparer sa foi à des actes concrets plutôt qu’à une simple conviction intérieure."
    ],
    "keyReading": "Genèse 12:1-9; 18:16-33; 22:1-18; Hébreux 11:8-19",
    "location": "Our en Chaldée ; Harân ; Canaan, notamment Sichem, Béthel, Hébron et les environs de Beer-Shéba.",
    "relationshipWithJehovah": "Abraham agit sur la foi, construit des autels, prie et accepte des instructions difficiles. Jéhovah le considère comme son ami en raison de sa foi et de ses actions.",
    "didYouKnow": "Abraham avait environ 75 ans lorsqu’il quitta Harân pour le pays que Jéhovah lui montrerait.",
    "jwResources": [
      {
        "title": "Abraham — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Abraham"
      },
      {
        "title": "Marche courageusement avec Dieu — Abraham",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/patriarches-juges/abraham-a-ete-le-premier-a-mener-une-guerre-juste/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Abraham : « Le père de tous ceux qui ont foi »",
        "url": "https://www.jw.org/fr/bibliotheque/livres/vraie-foi/abraham-pere-de-ceux-qui-ont-foi/"
      }
    ],
    "identity": "Abraham était le patriarche à qui Jéhovah promit une descendance et une bénédiction pour toutes les nations. Il quitta Our et vécut ensuite comme résident étranger en Canaan.",
    "era": "Environ 2018-1843 av. n. è.",
    "familyAndEntourage": [
      "Térah",
      "Sara",
      "Lot",
      "Agar",
      "Ismaël",
      "Isaac",
      "Abimélek"
    ],
    "bibleAccount": [
      "Il quitte Our puis Harân sur instruction de Jéhovah.",
      "Il reçoit des promesses concernant sa descendance et toutes les nations.",
      "Il connaît des épreuves liées à Lot, à Sara, à Ismaël et à Isaac.",
      "Il intercède pour Sodome.",
      "Il est prêt à offrir Isaac lorsque Jéhovah le met à l’épreuve."
    ],
    "qualities": [
      "Foi",
      "Hospitalité",
      "Générosité",
      "Obéissance",
      "Persévérance"
    ],
    "difficulties": [
      "Il connaît des périodes de peur, prend des décisions qui créent des tensions familiales et doit attendre très longtemps l’accomplissement des promesses.",
      "L’épreuve concernant Isaac met sa foi à rude épreuve."
    ]
  },
  "sarah": {
    "studyFocus": "Sara vécut pendant des années avec la promesse de Jéhovah alors qu’elle était stérile. Elle quitta Our avec Abraham et devint mère d’Isaac à 90 ans.",
    "lessonPoints": [
      "Observer sa longue attente avant la naissance d’Isaac.",
      "Étudier avec nuance son rôle dans l’affaire Agar et Ismaël.",
      "Examiner pourquoi Hébreux 11:11 la cite comme exemple de foi."
    ],
    "keyReading": "Genèse 11:29–23:20 ; Hébreux 11:11 ; 1 Pierre 3:5, 6",
    "location": "Our, Harân, Canaan, Égypte, Guérar et Hébron/Mamré.",
    "relationshipWithJehovah": "Sara servit Jéhovah avec Abraham et fut citée comme exemple de foi malgré ses moments de faiblesse.",
    "didYouKnow": "Sara avait 90 ans à la naissance d’Isaac et mourut à 127 ans.",
    "jwResources": [
      {
        "title": "Sara — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Sara/"
      },
      {
        "title": "Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Épouse d’Abraham et mère d’Isaac — Sarah a vécu les promesses faites à Abraham et est devenue mère d’Isaac malgré son âge avancé.",
    "era": "Genèse",
    "familyAndEntourage": [
      "Abraham",
      "Isaac",
      "Agar",
      "Ismaël"
    ],
    "bibleAccount": [
      "Quitte Harân avec Abraham.",
      "Donne naissance à Isaac dans sa vieillesse."
    ],
    "qualities": [
      "Foi",
      "Persévérance"
    ],
    "difficulties": []
  },
  "jacob": {
    "studyFocus": "Jacob, fils d’Isaac et de Rébecca, devint l’ancêtre des douze tribus d’Israël. Son parcours comprend des choix discutables, des années de travail, des conflits familiaux, des pertes et une évolution visible de sa foi et de sa personnalité.",
    "lessonPoints": [
      "Étudier comment les tensions avec Ésaü et Laban ont marqué la vie de Jacob.",
      "Observer comment Jacob a appris à compter sur Jéhovah au fil des années et des épreuves.",
      "Étudier l’épisode de Penouël, où son nom fut changé en Israël après sa lutte avec un ange.",
      "Observer comment il a réagi lorsqu’il a cru Joseph mort puis lorsqu’il l’a retrouvé en Égypte."
    ],
    "keyReading": "Genèse 28:10-22; 32:24-32; 33:1-20; 37:1-36; 46:1-7",
    "location": "Canaan ; Harân/Paddân-Aram ; Béthel ; Penouël ; Sichem ; Égypte.",
    "relationshipWithJehovah": "Jacob apprend progressivement à compter sur Jéhovah. Ses prières avant de rencontrer Ésaü et sa réaction après les événements de sa vie montrent une confiance de plus en plus mûre.",
    "didYouKnow": "Jacob reçut le nom Israël après avoir lutté avec un ange; ses douze fils devinrent les ancêtres des douze tribus d’Israël.",
    "jwResources": [
      {
        "title": "Jacob — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Jacob/"
      },
      {
        "title": "Marche courageusement avec Dieu — Jacob",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/patriarches-juges/jacob-a-protege-sa-famille/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Événements de la vie de Jacob",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/%C3%89v%C3%A9nements-de-la-vie-de-Jacob/"
      }
    ],
    "identity": "Jacob était le fils d’Isaac et de Rébecca, frère jumeau d’Ésaü et père des douze fils à l’origine des tribus d’Israël.",
    "era": "1858-1688 av. n. è. environ",
    "familyAndEntourage": [
      "Isaac",
      "Rébecca",
      "Ésaü",
      "Rachel",
      "Léa",
      "Ses douze fils",
      "Dina"
    ],
    "bibleAccount": [
      "Il obtient le droit d’aînesse et la bénédiction.",
      "Il fuit chez Labân et travaille de nombreuses années.",
      "Il épouse Léa puis Rachel et devient père d’une grande famille.",
      "Il lutte avec un ange et reçoit le nom d’Israël.",
      "Il retrouve Ésaü et finit par s’installer en Égypte avec sa famille."
    ],
    "qualities": [
      "Persévérance",
      "Attachement aux promesses divines",
      "Endurance familiale",
      "Foi"
    ],
    "difficulties": [
      "Il agit parfois avec ruse et connaît des conflits familiaux, notamment avec Ésaü et entre ses femmes.",
      "La disparition apparente de Joseph lui cause une longue période de deuil."
    ]
  },
  "joseph": {
    "studyFocus": "Joseph, fils de Jacob et de Rachel, fut vendu comme esclave à 17 ans. Malgré l’injustice, l’éloignement et la prison, il resta fidèle à Jéhovah. Il fut ensuite établi à une haute fonction en Égypte et contribua à préserver sa famille pendant la famine.",
    "lessonPoints": [
      "Observer comment Joseph a gardé ses principes alors qu’il était loin de sa famille.",
      "Étudier son refus des avances de la femme de Potiphar et sa raison centrée sur le péché contre Dieu.",
      "Observer qu’il attribuait à Dieu les interprétations des rêves plutôt que de s’en attribuer le mérite.",
      "Étudier sa manière de traiter ses frères lorsqu’il aurait pu se venger."
    ],
    "keyReading": "Genèse 37:1-36; 39:1-23; 41:14-57; 45:1-15; 50:15-21",
    "location": "Canaan ; Paddân-Aram dans son enfance ; Égypte, notamment la maison de Potiphar, la prison et la cour de Pharaon.",
    "relationshipWithJehovah": "Joseph attribue à Dieu l’interprétation des rêves et reconnaît que Jéhovah peut transformer une situation tragique en moyen de préserver des vies.",
    "didYouKnow": "Joseph avait 30 ans lorsqu’il fut établi administrateur de l’Égypte et il passa ensuite sept années d’abondance à préparer les sept années de famine annoncées.",
    "jwResources": [
      {
        "title": "« Comment pourrais-je commettre ce grand mal ? »",
        "url": "https://www.jw.org/fr/bibliotheque/revues/wp20141101/"
      },
      {
        "title": "Marche courageusement avec Dieu — Joseph",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/patriarches-juges/joseph-a-resiste-a-la-tentation/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Joseph — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Joseph/"
      }
    ],
    "identity": "Joseph était le fils de Jacob et de Rachel qui fut vendu comme esclave par ses frères avant de devenir administrateur en Égypte et de sauver de nombreuses vies pendant une famine.",
    "era": "XVIIIe siècle av. n. è. environ",
    "familyAndEntourage": [
      "Jacob",
      "Rachel",
      "Benjamin",
      "Ses frères",
      "Asnath",
      "Pharaon"
    ],
    "bibleAccount": [
      "Ses frères le vendent comme esclave.",
      "Il sert chez Potiphar puis est emprisonné après une fausse accusation.",
      "Jéhovah lui permet d’interpréter les rêves de Pharaon.",
      "Il devient le deuxième personnage d’Égypte et organise les réserves pendant la famine.",
      "Il retrouve ses frères et leur pardonne après les avoir mis à l’épreuve."
    ],
    "qualities": [
      "Intégrité",
      "Pardon",
      "Humilité",
      "Sagesse"
    ],
    "difficulties": [
      "Il subit la haine de ses frères, l’esclavage, une fausse accusation et la prison avant de connaître une grande élévation.",
      "Il doit ensuite gérer une famine et une situation familiale très délicate."
    ]
  },
  "moise": {
    "studyFocus": "Moïse conduisit Israël hors d’Égypte, reçut la Loi au Sinaï et servit de médiateur entre Jéhovah et son peuple.",
    "lessonPoints": [
      "Étudier sa préparation en Madian et sa réponse à l’appel de Jéhovah.",
      "Observer son humilité et son endurance face aux murmures d’Israël.",
      "Examiner l’erreur de Meriba et ses conséquences."
    ],
    "keyReading": "Exode 3–4 ; 12–14 ; 19–20 ; Nombres 12 ; 20:1-13 ; Deutéronome 34:1-8",
    "location": "Égypte, Madian, désert du Sinaï et plaines de Moab.",
    "relationshipWithJehovah": "Moïse parlait avec Jéhovah d’une manière particulièrement directe, intercédait pour Israël et cherchait à défendre Son nom.",
    "didYouKnow": "Moïse avait 80 ans lorsqu’il fut envoyé auprès de Pharaon et 120 ans à sa mort.",
    "jwResources": [
      {
        "title": "Moïse — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Mo%C3%AFse/"
      },
      {
        "title": "Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Prophète et médiateur d’Israël — Moïse conduit Israël hors d’Égypte et reçoit la Loi au mont Sinaï.",
    "era": "Exode à Deutéronome",
    "familyAndEntourage": [
      "Aaron",
      "Miriam",
      "Josué",
      "Pharaon"
    ],
    "bibleAccount": [
      "Affronte Pharaon avec Aaron.",
      "Conduit l’Exode.",
      "Reçoit les Dix Commandements et d’autres instructions.",
      "Dirige Israël dans le désert."
    ],
    "qualities": [
      "Humilité",
      "Courage",
      "Persévérance"
    ],
    "difficulties": [
      "Même un serviteur fidèle doit respecter les instructions reçues."
    ]
  },
  "josue": {
    "studyFocus": "Josué succéda à Moïse et conduisit Israël dans la Terre promise. Jéhovah lui demanda d’être courageux et de respecter sa Loi.",
    "lessonPoints": [
      "Étudier sa formation auprès de Moïse.",
      "Observer le lien entre courage, méditation de la Loi et fidélité.",
      "Examiner l’affaire des Gabaonites et la nécessité de rechercher la direction de Jéhovah."
    ],
    "keyReading": "Nombres 13–14 ; Josué 1:1-9 ; 6 ; 9 ; 24:14-31",
    "location": "Désert puis Canaan, notamment Jéricho, Aï et Sichem.",
    "relationshipWithJehovah": "Josué s’appuyait sur les instructions de Jéhovah et encourageait Israël à lui rester fidèle.",
    "didYouKnow": "Josué s’appelait d’abord Hoshéa; Moïse lui donna le nom de Josué.",
    "jwResources": [
      {
        "title": "Josué — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Josu%C3%A9/"
      },
      {
        "title": "Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Josué, fils de Noun, servit Moïse avant de lui succéder comme dirigeant d’Israël. Il conduisit le peuple dans la conquête et la répartition de la Terre promise.",
    "era": "1513-1450 av. n. è. environ",
    "familyAndEntourage": [
      "Noun, son père",
      "Moïse",
      "Caleb",
      "Rahab",
      "Les Israélites"
    ],
    "bibleAccount": [
      "Il combat les Amaléqites sous la direction de Moïse.",
      "Il fait partie des 12 espions envoyés en Canaan et, avec Caleb, garde confiance dans la promesse de Jéhovah.",
      "Il succède à Moïse et conduit Israël à travers le Jourdain.",
      "Il dirige la conquête de Canaan et la répartition du pays.",
      "À la fin de sa vie, il exhorte Israël à servir Jéhovah fidèlement."
    ],
    "qualities": [
      "Courage",
      "Foi",
      "Obéissance",
      "Fidélité"
    ],
    "difficulties": [
      "Il doit diriger une nation après Moïse et affronter des ennemis nombreux tout en restant attaché aux instructions de Jéhovah."
    ]
  },
  "ruth": {
    "studyFocus": "Ruth, une Moabite devenue veuve, choisit de rester avec Naomi et de servir Jéhovah. Sa fidélité la conduisit à devenir l’épouse de Boaz et une ancêtre de David.",
    "lessonPoints": [
      "Étudier pourquoi Ruth resta avec Naomi malgré l’incertitude.",
      "Observer son attitude au travail et sa bonne réputation.",
      "Examiner comment sa fidélité s’inscrit dans la lignée de David."
    ],
    "keyReading": "Ruth 1:6-18 ; 2:1-23 ; 3:1-18 ; 4:1-22",
    "location": "Moab puis Bethléhem en Juda.",
    "relationshipWithJehovah": "Ruth décida de servir le Dieu de Naomi et de s’associer à son peuple; Boaz dit qu’elle était venue chercher refuge sous les ailes de Jéhovah.",
    "didYouKnow": "Ruth était Moabite et devint l’arrière-grand-mère du roi David.",
    "jwResources": [
      {
        "title": "Ruth — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Ruth/"
      },
      {
        "title": "Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Ruth était une Moabite devenue veuve qui choisit de rester avec sa belle-mère Naomi et d’adorer Jéhovah. Elle devint l’épouse de Boaz et une ancêtre de David.",
    "era": "Époque des juges, avant le règne de David",
    "familyAndEntourage": [
      "Naomi",
      "Boaz",
      "Élimélek",
      "Obed"
    ],
    "bibleAccount": [
      "Après la mort de son mari, elle refuse d’abandonner Naomi.",
      "Elle travaille à glaner dans les champs de Boaz.",
      "Elle accepte les dispositions prévues par la Loi concernant le rachat.",
      "Boaz devient son mari et ils ont un fils, Obed."
    ],
    "qualities": [
      "Loyauté",
      "Humilité",
      "Travail",
      "Amour désintéressé"
    ],
    "difficulties": [
      "Elle est veuve et étrangère en Juda, sans sécurité matérielle assurée, mais elle persévère aux côtés de Naomi."
    ]
  },
  "samuel": {
    "studyFocus": "Samuel fut consacré à Jéhovah avant sa naissance, servit auprès d’Éli et devint prophète et juge en Israël. Il participa au passage de la période des juges à la monarchie.",
    "lessonPoints": [
      "Observer comment Hanna et Samuel montrèrent leur attachement au service de Jéhovah.",
      "Étudier son rôle lors du remplacement de Saül par David.",
      "Examiner son courage lorsqu’il transmit des messages difficiles."
    ],
    "keyReading": "1 Samuel 1:9-28 ; 3:1-21 ; 7:3-17 ; 8:1-22 ; 15:10-35 ; 16:1-13",
    "location": "Shilo, Rama et différents lieux d’Israël.",
    "relationshipWithJehovah": "Samuel apprit très jeune à écouter Jéhovah et continua à transmettre ses paroles, même lorsqu’elles étaient difficiles.",
    "didYouKnow": "Samuel servait déjà devant Jéhovah alors qu’il était encore un garçon.",
    "jwResources": [
      {
        "title": "Samuel — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Samuel/"
      },
      {
        "title": "Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Samuel était prophète, juge et serviteur de Jéhovah dès son enfance. Il joua un rôle majeur dans la transition d’Israël vers la royauté.",
    "era": "Vers 12e-11e siècles av. n. è.",
    "familyAndEntourage": [
      "Elqana, son père",
      "Hanna, sa mère",
      "Éli",
      "Saül",
      "David"
    ],
    "bibleAccount": [
      "Hanna le consacre au service de Jéhovah avant sa naissance.",
      "Il sert au tabernacle à Shilo sous la responsabilité d’Éli.",
      "Jéhovah l’appelle pendant la nuit et fait de lui un prophète.",
      "Il oint Saül puis David sur instruction de Jéhovah.",
      "Il continue à parler au peuple et aux rois au nom de Jéhovah."
    ],
    "qualities": [
      "Écoute",
      "Fidélité",
      "Courage",
      "Impartialité"
    ],
    "difficulties": [
      "Il doit annoncer des jugements difficiles, notamment à Éli et à Saül, et accepter les changements que Jéhovah apporte à la direction de la nation."
    ]
  },
  "david": {
    "studyFocus": "David fut berger, musicien, guerrier, roi et psalmiste. Il manifesta une confiance remarquable en Jéhovah, mais commit aussi de graves péchés et accepta ensuite la correction.",
    "lessonPoints": [
      "Étudier comment sa confiance s’est développée avant son règne.",
      "Comparer son attitude envers Saül avec l’affaire Bath-Shéba.",
      "Observer son repentir et ses prières après sa faute."
    ],
    "keyReading": "1 Samuel 16:1-13 ; 17:32-50 ; 24 ; 2 Samuel 11–12 ; Psaume 51",
    "location": "Bethléhem, Juda et Jérusalem.",
    "relationshipWithJehovah": "David recherchait la direction de Jéhovah et, après ses fautes graves, accepta la correction et manifesta un repentir sincère.",
    "didYouKnow": "David est présenté comme berger, musicien, poète, soldat, homme d’État, prophète et roi.",
    "jwResources": [
      {
        "title": "David — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/David/"
      },
      {
        "title": "Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Roi d’Israël — David a servi comme roi d’Israël et a connu à la fois de grandes victoires et de graves erreurs.",
    "era": "Rois",
    "familyAndEntourage": [
      "Saül",
      "Jonathan",
      "Abigaïl",
      "Bath-Shéba",
      "Salomon"
    ],
    "bibleAccount": [
      "Affronte Goliath.",
      "Fuit Saül pendant plusieurs années.",
      "Devient roi et établit Jérusalem comme centre de son royaume.",
      "Son récit permet d’étudier la foi, le courage, le repentir et les conséquences des choix."
    ],
    "qualities": [
      "Courage",
      "Foi",
      "Loyauté",
      "Repentir"
    ],
    "difficulties": [
      "Ses fautes montrent aussi les conséquences du péché et la nécessité de la repentance."
    ]
  },
  "salomon": {
    "studyFocus": "Salomon fut roi d’Israël et reçut de Jéhovah une sagesse remarquable. Il supervisa la construction du temple, mais se détourna ensuite du culte pur sous l’influence de ses nombreuses femmes étrangères.",
    "lessonPoints": [
      "Étudier sa demande de sagesse et la réponse de Jéhovah.",
      "Observer la place du temple dans son règne.",
      "Examiner avec réalisme la fin de son règne et son infidélité."
    ],
    "keyReading": "1 Rois 3:5-28 ; 5 ; 8 ; 11:1-13",
    "location": "Jérusalem et le royaume d’Israël.",
    "relationshipWithJehovah": "Au début, Salomon aimait Jéhovah et recherchait sa sagesse; plus tard, il se laissa entraîner vers le faux culte.",
    "didYouKnow": "Jéhovah lui accorda aussi richesse et gloire, en plus de la sagesse demandée.",
    "jwResources": [
      {
        "title": "Salomon — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Salomon/"
      },
      {
        "title": "Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Roi et bâtisseur du temple — Salomon demande de la sagesse et construit le temple de Jérusalem, mais sa fin de règne comporte aussi de graves problèmes.",
    "era": "Rois",
    "familyAndEntourage": [
      "David",
      "Bath-Shéba",
      "Roboam"
    ],
    "bibleAccount": [
      "Demande de la sagesse pour gouverner.",
      "Construit le temple.",
      "Développe les relations internationales et le commerce."
    ],
    "qualities": [
      "Sagesse recherchée",
      "Organisation"
    ],
    "difficulties": [
      "La richesse et les influences peuvent détourner même quelqu’un qui a reçu beaucoup de sagesse."
    ]
  },
  "elie": {
    "studyFocus": "Élie a défendu courageusement le vrai culte face au culte de Baal. Son récit montre aussi que Jéhovah soutient ses serviteurs lorsqu’ils sont momentanément découragés.",
    "lessonPoints": [
      "Courage : Élie a affronté les prophètes de Baal au mont Carmel.",
      "Confiance en Jéhovah : il a prié avec foi et a laissé Jéhovah démontrer qui est le vrai Dieu.",
      "Persévérance : après avoir eu peur, Élie a reçu de Jéhovah l’assurance qu’il avait encore du travail à accomplir."
    ],
    "keyReading": "1 Rois 17:1-24; 18:17-46; 19:1-18",
    "location": "Israël du Nord ; mont Carmel ; désert ; région du Jourdain.",
    "relationshipWithJehovah": "Élie défend publiquement le nom de Jéhovah au Carmel, mais connaît aussi un moment de découragement. Jéhovah le soutient alors avec patience et lui confie encore du travail.",
    "didYouKnow": "Jéhovah ne corrige pas Élie avec dureté lorsqu’il fuit; il lui fournit nourriture, repos et une nouvelle mission.",
    "jwResources": [
      {
        "title": "Élie — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Élie — Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "La Bible en ligne",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Élie était un prophète de Jéhovah qui combattit avec courage le culte de Baal dans le royaume d’Israël.",
    "era": "IXe siècle av. n. è.",
    "familyAndEntourage": [
      "Jéhovah",
      "Achab",
      "Jézabel",
      "Élisée"
    ],
    "bibleAccount": [
      "Il annonce une sécheresse au temps d’Achab.",
      "Il est nourri près du torrent de Kerith puis par une veuve à Zarephath.",
      "Il défie les prophètes de Baal au mont Carmel.",
      "Il prie Jéhovah et le feu consume le sacrifice.",
      "Il forme ensuite Élisée pour lui succéder comme prophète."
    ],
    "qualities": [
      "Courage",
      "Zèle",
      "Confiance en Jéhovah",
      "Persévérance"
    ],
    "difficulties": [
      "Après le Carmel, il est terrifié par Jézabel et fuit. Jéhovah le fortifie et lui donne une nouvelle mission."
    ]
  },
  "esther": {
    "studyFocus": "Esther, jeune Juive élevée par Mardochée, devint reine de Perse à Suse. Elle risqua sa vie pour intervenir lorsque son peuple fut menacé d’extermination.",
    "lessonPoints": [
      "Observer son courage et sa prudence devant le roi.",
      "Étudier sa préparation et son choix du moment pour parler.",
      "Examiner la délivrance des Juifs et l’institution de Pourim."
    ],
    "keyReading": "Esther 2:5-20 ; 3 ; 4:1-17 ; 5–9",
    "location": "Suse, capitale de l’empire perse.",
    "relationshipWithJehovah": "Le livre ne mentionne pas directement le nom de Jéhovah, mais Esther agit pour préserver son peuple et suit l’appel à agir courageusement.",
    "didYouKnow": "Le livre d’Esther ne précise pas qui l’a rédigé; Mardochée est souvent considéré comme bien placé pour en avoir consigné les événements.",
    "jwResources": [
      {
        "title": "Esther — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Esther/"
      },
      {
        "title": "Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Esther, aussi appelée Hadassa, était une Juive devenue reine de Perse. Elle risqua sa vie pour intervenir en faveur de son peuple menacé d’extermination.",
    "era": "Ve siècle av. n. è.",
    "familyAndEntourage": [
      "Mardochée, son cousin et tuteur",
      "Assuérus",
      "Haman",
      "Le peuple juif"
    ],
    "bibleAccount": [
      "Elle devient reine sans révéler d’abord son origine juive.",
      "Haman obtient un décret menaçant les Juifs.",
      "Mardochée l’encourage à utiliser sa position pour aider son peuple.",
      "Elle se présente au roi sans y être convoquée, au risque de sa vie.",
      "Elle révèle le complot de Haman et contribue à sauver les Juifs."
    ],
    "qualities": [
      "Courage",
      "Maîtrise de soi",
      "Sagesse",
      "Loyauté"
    ],
    "difficulties": [
      "Elle doit choisir entre sa sécurité personnelle et la défense de son peuple face à un décret impérial."
    ]
  },
  "daniel": {
    "studyFocus": "Daniel fut emmené adolescent à Babylone et resta fidèle à Jéhovah sous plusieurs rois. Il servit comme haut fonctionnaire, interpréta des rêves et reçut des visions prophétiques.",
    "lessonPoints": [
      "Étudier son refus de se souiller avec les aliments du roi.",
      "Observer comment il attribuait à Dieu les interprétations.",
      "Examiner sa fidélité à la prière malgré l’interdiction royale."
    ],
    "keyReading": "Daniel 1:3-20 ; 2:17-23 ; 5:13-31 ; 6:4-23 ; 9:1-23",
    "location": "Juda puis Babylone; Suse apparaît aussi dans le cadre d’une vision.",
    "relationshipWithJehovah": "Daniel priait régulièrement, recherchait la compréhension auprès de Jéhovah et resta fidèle malgré les complots.",
    "didYouKnow": "Daniel continua à prier trois fois par jour malgré l’interdiction royale et fut délivré de la fosse aux lions.",
    "jwResources": [
      {
        "title": "Daniel — Que dit la Bible ?",
        "url": "https://www.jw.org/fr/la-bible-et-vous/questions-bibliques/daniel-dans-la-bible/"
      },
      {
        "title": "Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Daniel était un jeune Juif emmené à Babylone. Il servit dans plusieurs administrations impériales tout en restant fidèle à Jéhovah.",
    "era": "VIe siècle av. n. è.",
    "familyAndEntourage": [
      "Ses trois compagnons: Hanania, Mishaël et Azaria",
      "Nabuchodonosor",
      "Darius",
      "Cyrus"
    ],
    "bibleAccount": [
      "Il refuse de se souiller avec les aliments du roi.",
      "Il interprète des rêves grâce à l’aide de Jéhovah.",
      "Il continue à prier malgré l’interdiction royale.",
      "Il est jeté dans la fosse aux lions et Jéhovah le délivre.",
      "Il reçoit plusieurs visions prophétiques."
    ],
    "qualities": [
      "Intégrité",
      "Courage",
      "Discipline spirituelle",
      "Humilité"
    ],
    "difficulties": [
      "Il vit en exil et subit des pressions religieuses et politiques constantes, dont une menace directe contre sa vie."
    ]
  },
  "jean-baptiste": {
    "studyFocus": "Jean le Baptiseur fut le précurseur du Messie. Il prêcha la repentance, baptisa ceux qui se repentaient et resta courageux face aux autorités.",
    "lessonPoints": [
      "Étudier son rôle annoncé à l’avance pour préparer le chemin du Messie.",
      "Observer sa simplicité de vie et son courage devant Hérode.",
      "Examiner sa question envoyée à Jésus depuis la prison et la réponse reçue."
    ],
    "keyReading": "Matthieu 3:1-17 ; 11:2-15 ; 14:1-12 ; Jean 1:19-37",
    "jwResources": [
      {
        "title": "Qui était Jean le Baptiseur ?",
        "url": "https://www.jw.org/fr/la-bible-et-vous/questions-bibliques/qui-etait-jean-le-baptiseur/"
      },
      {
        "title": "Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "location": "Désert de Judée et région du Jourdain.",
    "relationshipWithJehovah": "Jean dirigeait l’attention vers Jésus et accomplissait la mission que Jéhovah lui avait confiée.",
    "didYouKnow": "Jésus a dit qu’aucun prophète né de femme n’avait été plus grand que Jean, tout en parlant ensuite de la grandeur de ceux qui seraient dans le Royaume.",
    "identity": "Précurseur de Jésus — Jean prépare les personnes au ministère de Jésus et appelle à la repentance.",
    "era": "Évangiles",
    "familyAndEntourage": [
      "Jésus",
      "Zacharie",
      "Élisabeth",
      "Hérode"
    ],
    "bibleAccount": [
      "Prêche et baptise.",
      "Identifie Jésus comme celui qui vient après lui.",
      "Reprend publiquement Hérode pour sa conduite."
    ],
    "qualities": [
      "Courage",
      "Humilité",
      "Conviction"
    ],
    "difficulties": []
  },
  "marie": {
    "studyFocus": "Marie, mère de Jésus, fut une jeune Juive choisie pour donner naissance au Fils de Dieu. Elle accepta humblement cette responsabilité et resta parmi les disciples après la mort de Jésus.",
    "lessonPoints": [
      "Observer sa réaction à l’annonce de Gabriel.",
      "Étudier sa connaissance des Écritures visible dans Luc 1.",
      "Examiner sa présence parmi les disciples après la résurrection de Jésus."
    ],
    "keyReading": "Luc 1:26-56 ; 2:1-52 ; Jean 2:1-12 ; 19:25-27 ; Actes 1:12-14",
    "location": "Nazareth, Bethléhem et Jérusalem.",
    "relationshipWithJehovah": "Marie était très favorisée par Dieu en raison de sa foi et devint ensuite disciple de Jésus.",
    "didYouKnow": "Marie eut d’autres enfants avec Joseph; Marc 6:3 nomme quatre fils et mentionne aussi des filles.",
    "jwResources": [
      {
        "title": "Marie est-elle la mère de Dieu ?",
        "url": "https://www.jw.org/fr/la-bible-et-vous/questions-bibliques/mere-marie-theotokos/"
      },
      {
        "title": "Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Marie est la mère de Jésus. Elle est une descendante de David et a accepté avec foi la mission extraordinaire qui lui a été confiée.",
    "era": "Fin de la période des Écritures hébraïques et ministère terrestre de Jésus",
    "familyAndEntourage": [
      "Joseph",
      "Jésus",
      "Élisabeth, qui lui était apparentée",
      "Les autres enfants de Marie et Joseph"
    ],
    "bibleAccount": [
      "Elle reçoit l’annonce de la naissance de Jésus.",
      "Elle donne naissance à Jésus et médite sur les événements qui l’entourent.",
      "Elle accompagne Jésus et ses frères et sœurs dans plusieurs épisodes des Évangiles.",
      "Elle est présente près de Jésus au moment de sa mort."
    ],
    "qualities": [
      "Foi",
      "Humilité",
      "Réflexion",
      "Courage"
    ],
    "difficulties": [
      "Elle a dû supporter la douleur de voir son fils rejeté et exécuté."
    ]
  },
  "pierre": {
    "studyFocus": "Pierre fut l’un des douze apôtres et un proche compagnon de Jésus. Il commettait des erreurs, mais il se repentit et devint un témoin courageux.",
    "lessonPoints": [
      "Étudier son évolution entre impulsivité et foi mûre.",
      "Examiner son reniement et le rétablissement que Jésus lui accorda.",
      "Observer son rôle à la Pentecôte et auprès de Corneille."
    ],
    "keyReading": "Matthieu 4:18-22 ; 14:22-33 ; 16:13-23 ; 26:31-75 ; Jean 21:15-19 ; Actes 2:14-41 ; 10:1-48",
    "location": "Galilée, Jérusalem, Judée et lieux de prédication.",
    "relationshipWithJehovah": "Pierre apprit à compter sur Jéhovah par l’intermédiaire de Jésus et devint ensuite un prédicateur courageux.",
    "didYouKnow": "Pierre et André étaient pêcheurs et avaient un lien étroit avec Capharnaüm.",
    "jwResources": [
      {
        "title": "Pierre — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Pierre/"
      },
      {
        "title": "Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Apôtre — Pierre est l’un des principaux apôtres et joue un rôle important dans les débuts de la congrégation chrétienne.",
    "era": "Évangiles et Actes",
    "familyAndEntourage": [
      "André",
      "Jean",
      "Jésus",
      "Corneille"
    ],
    "bibleAccount": [
      "Suit Jésus.",
      "Le renie puis manifeste son repentir.",
      "Prêche à la Pentecôte.",
      "Annonce le message à Corneille et sa maisonnée."
    ],
    "qualities": [
      "Zèle",
      "Courage",
      "Repentir"
    ],
    "difficulties": [
      "Son exemple montre aussi qu’un disciple peut trébucher et se relever."
    ]
  },
  "paul": {
    "studyFocus": "Paul, ancien persécuteur des disciples, devint apôtre des nations et consacra sa vie à annoncer la bonne nouvelle. Il voyagea beaucoup et supporta une forte opposition.",
    "lessonPoints": [
      "Étudier sa conversion et le changement radical de sa vie.",
      "Observer comment il combinait prédication, enseignement et travail.",
      "Examiner son endurance face aux persécutions et aux difficultés des congrégations."
    ],
    "keyReading": "Actes 9:1-22 ; 13:1-4 ; 17:16-34 ; 20:17-38 ; 26:1-23 ; 2 Corinthiens 11:23-33",
    "location": "Tarse, Syrie, Asie Mineure, Macédoine, Grèce, Jérusalem et Rome.",
    "relationshipWithJehovah": "Paul considérait sa mission comme reçue du Seigneur et cherchait à faire connaître les desseins de Jéhovah.",
    "didYouKnow": "Paul était citoyen romain de naissance et travaillait comme fabricant de tentes.",
    "jwResources": [
      {
        "title": "Paul — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Paul/"
      },
      {
        "title": "Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Apôtre et missionnaire — Paul est passé de persécuteur des disciples à prédicateur zélé du christianisme.",
    "era": "Actes et lettres chrétiennes",
    "familyAndEntourage": [
      "Barnabas",
      "Silas",
      "Timothée",
      "Tite",
      "Luc"
    ],
    "bibleAccount": [
      "Est arrêté sur le chemin de Damas par une vision du Christ.",
      "Prêche dans de nombreuses villes.",
      "Supporte oppositions, emprisonnements et difficultés.",
      "Écrit plusieurs lettres chrétiennes.",
      "Son parcours illustre un changement profond et un zèle soutenu pour le ministère."
    ],
    "qualities": [
      "Zèle",
      "Endurance",
      "Courage",
      "Humilité"
    ],
    "difficulties": []
  },
  "jean": {
    "studyFocus": "Jean, fils de Zébédée, fut l’un des douze apôtres et un proche compagnon de Jésus. Ses écrits insistent fortement sur l’amour, la vérité et l’obéissance.",
    "lessonPoints": [
      "Observer son évolution entre zèle impulsif et amour chrétien.",
      "Étudier les moments où il fut particulièrement proche de Jésus.",
      "Examiner comment ses écrits relient amour, vérité et fidélité."
    ],
    "keyReading": "Marc 3:13-19 ; Luc 9:49-56 ; Jean 13:21-30 ; 19:25-27 ; 20:1-10 ; 1 Jean 4:7-21 ; Révélation 1:9-20",
    "location": "Galilée, Jérusalem et Patmos; la fin de son activité est traditionnellement associée à Éphèse.",
    "relationshipWithJehovah": "Jean consacra sa longue vie à transmettre le témoignage sur Jésus et à enseigner l’amour pour Dieu et les frères.",
    "didYouKnow": "Jean est identifié comme le fils de Zébédée et frère de Jacques; il est l’un des cinq hommes appelés Jean dans la Bible.",
    "jwResources": [
      {
        "title": "Jean — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Jean/"
      },
      {
        "title": "Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Apôtre de Jésus et rédacteur biblique, frère de Jacques fils de Zébédée. Il faisait partie des trois apôtres particulièrement proches de Jésus.",
    "era": "Ministère de Jésus et débuts de la congrégation chrétienne au Ier siècle",
    "familyAndEntourage": [
      "Zébédée, son père",
      "Salomé, probablement sa mère",
      "Jacques, son frère",
      "Pierre",
      "Jésus"
    ],
    "bibleAccount": [
      "Il abandonne son activité de pêcheur pour suivre Jésus.",
      "Il assiste à des moments importants du ministère de Jésus, notamment la résurrection de la fille de Jaïrus et la transfiguration.",
      "Il est présent près de Jésus lors des événements précédant et entourant sa mort.",
      "Il reçoit la Révélation alors qu’il est à Patmos."
    ],
    "qualities": [
      "Amour",
      "Persévérance",
      "Courage dans le témoignage"
    ],
    "difficulties": [
      "Avec Jacques, il a parfois manifesté une ambition personnelle concernant une place importante dans le Royaume."
    ]
  },
  "isaac": {
  "studyFocus": "Isaac fut le fils promis à Abraham et Sara. Sa vie montre la continuité de la promesse de Jéhovah : il épousa Rébecca, devint père d’Ésaü et de Jacob et resta attaché à l’adoration de Jéhovah malgré les tensions familiales.",
  "lessonPoints": [
    "Isaac fut disposé à se soumettre lorsque son père le présenta en sacrifice.",
    "Il connut la stérilité de Rébecca et dut attendre l’intervention de Jéhovah.",
    "Les préférences différentes d’Isaac et de Rébecca contribuèrent aux tensions familiales.",
    "À la fin de sa vie, Isaac bénit Jacob conformément au dessein de Jéhovah."
  ],
  "keyReading": "Genèse 22:1-19 ; 24:1-67 ; 25:19-34 ; 26:1-33 ; 27:1-40 ; Hébreux 11:17-20",
  "location": "Canaan, notamment la région de Beer-Lahaï-Roï, Guérar et Beer-Shéba.",
  "relationshipWithJehovah": "Isaac bénéficia des promesses faites à Abraham et compta sur Jéhovah dans les périodes de famine et de conflits pour les puits.",
  "didYouKnow": "Isaac avait 40 ans lorsqu’il épousa Rébecca et 60 ans lorsque leurs fils Ésaü et Jacob naquirent.",
  "jwResources": [
    {
      "title": "Isaac — Étude perspicace des Écritures",
      "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Isaac/"
    },
    {
      "title": "Abraham et Isaac : Sa foi est testée",
      "url": "https://www.jw.org/fr/bibliotheque/livres/j-apprends-en-lisant-la-bible/3/abraham-isaac-epreuve-foi/"
    },
    {
      "title": "La Bible en ligne — Traduction du monde nouveau",
      "url": "https://www.jw.org/fr/bibliotheque/bible/"
    },
    {
      "title": "Imitez leur foi — personnages de la Bible",
      "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
    }
  ],
  "identity": "Isaac était le fils promis d’Abraham et de Sara, mari de Rébecca et père d’Ésaü et de Jacob.",
  "era": "1858-1711 av. n. è. environ",
  "familyAndEntourage": [
    "Abraham",
    "Sara",
    "Rébecca",
    "Ésaü",
    "Jacob",
    "Abimélek"
  ],
  "bibleAccount": [
    "Il naît à Abraham et Sara dans leur vieillesse.",
    "Il échappe au sacrifice lorsque Jéhovah fournit un bélier.",
    "Il épouse Rébecca.",
    "Il devient père de jumeaux et bénit finalement Jacob selon le dessein de Dieu.",
    "Il connaît des conflits avec les Philistins au sujet des puits."
  ],
  "qualities": [
    "Paix",
    "Patience",
    "Foi",
    "Obéissance"
  ],
  "difficulties": [
    "Il connaît des conflits autour des puits et doit vivre avec la rivalité entre ses deux fils.",
    "Il est trompé par Jacob au moment de la bénédiction, mais le résultat correspond au dessein annoncé par Jéhovah."
  ]
},
  "samson": {
  "studyFocus": "Samson fut juge en Israël pendant 20 ans et reçut la mission de commencer à délivrer Israël de la main des Philistins. Jéhovah lui donna une force extraordinaire par son esprit. Son histoire contient aussi des choix impulsifs, mais Hébreux 11:32-34 cite Samson parmi les hommes qui ont manifesté la foi.",
  "lessonPoints": [
    "Sa force était liée à l’action de l’esprit de Jéhovah, pas à une simple capacité humaine.",
    "Samson a parfois laissé ses désirs personnels compliquer sa mission.",
    "Après sa capture et son aveuglement, il pria Jéhovah et retrouva la force d’agir.",
    "Son exemple montre qu’une personne imparfaite peut manifester une foi réelle."
  ],
  "keyReading": "Juges 13:1-25 ; 14:1-20 ; 15:9-20 ; 16:4-31 ; Hébreux 11:32-34",
  "jwResources": [
    {
      "title": "Samson — Étude perspicace des Écritures",
      "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Samson/"
    },
    {
      "title": "Marche courageusement avec Dieu",
      "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
    },
    {
      "title": "Étude perspicace des Écritures",
      "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
    },
    {
      "title": "La Bible en ligne — Traduction du monde nouveau",
      "url": "https://www.jw.org/fr/bibliotheque/bible/"
    }
  ],
  "location": "Le territoire de Dan et les régions contrôlées par les Philistins, notamment Gaza et Timna.",
  "relationshipWithJehovah": "Samson était voué à Jéhovah dès sa naissance. Il reçut l’esprit de Jéhovah à plusieurs reprises et pria Jéhovah avec foi à la fin de sa vie.",
  "didYouKnow": "Samson a exercé la fonction de juge en Israël pendant 20 ans, selon Juges 15:20.",
  "identity": "Samson était un juge d’Israël doté d’une force exceptionnelle donnée par Jéhovah pour commencer à délivrer Israël des Philistins.",
  "era": "Époque des juges, avant la royauté",
  "familyAndEntourage": [
    "Manoah",
    "La femme de Manoah",
    "Dalila",
    "Les Philistins"
  ],
  "bibleAccount": [
    "Un ange annonce sa naissance à sa mère.",
    "Il accomplit plusieurs actes contre les Philistins grâce à une force particulière.",
    "Il épouse une Philistine puis connaît des conflits avec les Philistins.",
    "Dalila découvre le secret lié à ses cheveux et il est capturé.",
    "Il prie Jéhovah et reçoit une dernière manifestation de force qui entraîne la chute du temple philistin."
  ],
  "qualities": [
    "Courage",
    "Force physique",
    "Zèle contre les ennemis d’Israël",
    "Foi manifestée dans sa dernière prière"
  ],
  "difficulties": [
    "Il est attiré par des femmes étrangères et prend des décisions impulsives. Sa relation avec Dalila conduit à sa capture et à sa cécité."
  ]
},
  "naomi": {
  "studyFocus": "Noémi connut une série de pertes : elle quitta Bethléhem avec son mari et ses deux fils, devint veuve puis perdit aussi ses deux fils. Malgré son amertume, elle resta attachée à Jéhovah et fut soutenue par la fidélité de Ruth.",
  "lessonPoints": [
    "Noémi ne cache pas sa douleur et exprime honnêtement son amertume.",
    "Elle cherche le bien de Ruth et Orpa malgré sa propre souffrance.",
    "Son retour à Bethléhem montre qu’elle reste attachée à son peuple.",
    "L’histoire se termine par la restauration de sa joie avec la naissance d’Obed."
  ],
  "keyReading": "Ruth 1:1-22 ; 2:19-23 ; 3:1-18 ; 4:13-17",
  "jwResources": [
    {
      "title": "Naomi — Étude perspicace des Écritures",
      "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Naomi/"
    },
    {
      "title": "La Bible en ligne — Traduction du monde nouveau",
      "url": "https://www.jw.org/fr/bibliotheque/bible/"
    },
    {
      "title": "Imitez leur foi — personnages de la Bible",
      "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
    }
  ],
  "location": "Bethléhem en Juda et le pays de Moab.",
  "relationshipWithJehovah": "Noémi reconnaît Jéhovah dans les événements de sa vie et voit finalement sa situation familiale restaurée.",
  "didYouKnow": "Le livre de Ruth montre que Noémi retrouva une famille grâce au mariage de Ruth avec Boaz et à la naissance d’Obed.",
  "identity": "Veuve et belle-mère de Ruth — Noémi a connu de lourdes pertes mais a continué à agir avec amour envers Ruth.",
  "era": "Ruth",
  "familyAndEntourage": [
    "Ruth",
    "Orpa",
    "Élimélek",
    "Mahlôn",
    "Obed"
  ],
  "bibleAccount": [
    "Retourne à Bethléhem après son veuvage.",
    "Encourage Ruth à agir avec sagesse.",
    "Accueille la naissance d’Obed dans sa famille.",
    "JW.org souligne son rôle auprès de Ruth et leur amitié fidèle."
  ],
  "qualities": [
    "Attachement familial",
    "Sagesse"
  ],
  "difficulties": []
},
  "boaz": {
  "studyFocus": "Boaz était un propriétaire terrien de Bethléhem, parent d’Élimélek. Il respecta Ruth, protégea sa réputation, suivit les dispositions de la Loi concernant les pauvres et accepta d’exercer le rôle de rédempteur familial en épousant Ruth.",
  "lessonPoints": [
    "Boaz respecta Ruth alors qu’elle était étrangère et remarqua son travail.",
    "Il la protégea contre le harcèlement et lui assura une véritable sécurité.",
    "Il respecta la procédure légale concernant le rédempteur plus proche.",
    "Son mariage avec Ruth s’inscrit dans la lignée qui conduisit à David."
  ],
  "keyReading": "Ruth 2:1-23 ; 3:1-18 ; 4:1-17 ; Matthieu 1:5-6",
  "jwResources": [
    {
      "title": "Boaz, I — Étude perspicace des Écritures",
      "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Boaz-I/"
    },
    {
      "title": "La Bible en ligne — Traduction du monde nouveau",
      "url": "https://www.jw.org/fr/bibliotheque/bible/"
    },
    {
      "title": "Imitez leur foi — personnages de la Bible",
      "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
    }
  ],
  "location": "Bethléhem et les champs de Juda.",
  "relationshipWithJehovah": "Boaz agit en accord avec les dispositions de la Loi et reconnut que Ruth était venue chercher refuge sous les ailes de Jéhovah.",
  "didYouKnow": "Boaz et Ruth furent les parents d’Obed, grand-père de David.",
  "identity": "Propriétaire terrien et parent de Noémi — Boaz traite Ruth avec bonté et devient son rédempteur familial.",
  "era": "Ruth",
  "familyAndEntourage": [
    "Ruth",
    "Noémi",
    "Obed",
    "David"
  ],
  "bibleAccount": [
    "Protège Ruth dans ses champs.",
    "Veille à ce qu’elle puisse glaner en sécurité.",
    "Assume le rôle de rédempteur et épouse Ruth."
  ],
  "qualities": [
    "Générosité",
    "Respect",
    "Loyauté"
  ],
  "difficulties": []
},
  "elisha": {
    "studyFocus": "Élisée fut prophète de Jéhovah et successeur d’Élie. Il accomplit de nombreux miracles et resta ferme face à l’opposition.",
    "lessonPoints": [
      "Étudier sa réponse à l’appel d’Élie.",
      "Observer les miracles accomplis en faveur de personnes ordinaires.",
      "Examiner son courage face aux ennemis du peuple de Dieu."
    ],
    "keyReading": "1 Rois 19:19-21 ; 2 Rois 2:1-15 ; 4 ; 5 ; 6:8-23 ; 13:14-21",
    "jwResources": [
      {
        "title": "Élisée — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/%C3%89lis%C3%A9e/"
      },
      {
        "title": "Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "location": "Royaume d’Israël, notamment Samarie et les régions autour du Jourdain.",
    "relationshipWithJehovah": "Élisée dépendait de Jéhovah et transmettait ses paroles sans se laisser intimider par les rois ou les ennemis.",
    "didYouKnow": "Élisée demanda deux parts de l’esprit qui reposait sur Élie et vit Élie emporté dans un vent de tempête.",
    "identity": "Prophète et successeur d’Élie — Élisée poursuit le ministère prophétique d’Élie et intervient dans de nombreux récits concernant Israël.",
    "era": "Rois",
    "familyAndEntourage": [
      "Élie",
      "Naaman",
      "Guéhazi"
    ],
    "bibleAccount": [
      "Accepte de suivre Élie.",
      "Reçoit sa fonction prophétique après le départ d’Élie.",
      "Aide des personnes confrontées à la pauvreté, à la maladie ou au danger."
    ],
    "qualities": [
      "Foi",
      "Persévérance",
      "Compassion"
    ],
    "difficulties": []
  },
  "nehemie": {
    "studyFocus": "Néhémie, échanson du roi de Perse puis gouverneur de Juda, fut profondément attristé par l’état de Jérusalem. Après avoir prié, il organisa la reconstruction de la muraille malgré l’opposition.",
    "lessonPoints": [
      "Observer comment il combine prière, préparation et action.",
      "Étudier ses réponses aux menaces et aux problèmes internes.",
      "Examiner ses prières courtes comme modèle de dépendance envers Jéhovah."
    ],
    "keyReading": "Néhémie 1:1-11 ; 2:1-20 ; 4:1-23 ; 5:1-19 ; 6:1-19 ; 8:1-18",
    "jwResources": [
      {
        "title": "Néhémie — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Neh%C3%A9mia/"
      },
      {
        "title": "Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "location": "Suse en Perse puis Jérusalem et Juda.",
    "relationshipWithJehovah": "Néhémie prie avant d’agir, reconnaît les péchés du peuple et attribue la réussite à la main de Jéhovah.",
    "didYouKnow": "Néhémie était échanson d’Artaxerxès avant de devenir gouverneur des Juifs.",
    "identity": "Néhémie était un Juif servant comme échanson du roi de Perse. Il reçut l’autorisation de reconstruire les murailles de Jérusalem et dirigea le chantier malgré une forte opposition.",
    "era": "Ve siècle av. n. è., après l’exil",
    "familyAndEntourage": [
      "Artaxerxès",
      "Les Juifs de Jérusalem",
      "Sanballat",
      "Tobiya",
      "Esdras"
    ],
    "bibleAccount": [
      "Il apprend la situation désastreuse de Jérusalem et prie Jéhovah.",
      "Il demande au roi l’autorisation de reconstruire les murailles.",
      "Il organise les familles et les travailleurs malgré les menaces.",
      "La muraille est achevée en 52 jours.",
      "Il contribue ensuite à rétablir l’ordre spirituel et social du peuple."
    ],
    "qualities": [
      "Prière",
      "Organisation",
      "Courage",
      "Persévérance"
    ],
    "difficulties": [
      "Il subit moqueries, menaces et tentatives d’intimidation, tout en devant corriger certains problèmes internes parmi les Juifs."
    ]
  },
  "mary_magdalen": {
  "studyFocus": "Marie Madeleine fut une disciple de Jésus qui l’accompagna et le soutint matériellement. Elle resta proche de Jésus lors de son exécution et fut parmi les premières personnes à constater que son tombeau était vide. Jésus ressuscité lui apparut ensuite et lui confia un message à transmettre aux disciples.",
  "lessonPoints": [
    "Marie Madeleine avait été délivrée de sept démons et devint une disciple dévouée.",
    "Elle continua à suivre Jésus alors que beaucoup avaient peur.",
    "Sa présence au lieu d’exécution et au tombeau montre sa fidélité.",
    "Jésus lui confia le privilège d’annoncer aux disciples qu’il était vivant."
  ],
  "keyReading": "Luc 8:1-3 ; Matthieu 27:55-61 ; 28:1-10 ; Jean 19:25 ; 20:1-18",
  "location": "Galilée et Jérusalem, notamment autour du lieu d’exécution et du tombeau de Jésus.",
  "relationshipWithJehovah": "Sa reconnaissance pour l’aide reçue de Jésus se traduisit par un service fidèle. Elle fut également témoin de la résurrection et transmit le message reçu.",
  "didYouKnow": "Luc 8:2 précise que sept démons étaient sortis de Marie Madeleine.",
  "jwResources": [
    {
      "title": "Magdalène (Marie la) — Étude perspicace des Écritures",
      "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Magdal%C3%A8ne-Marie-la/"
    },
    {
      "title": "Étude perspicace des Écritures — encyclopédie biblique",
      "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
    },
    {
      "title": "Marche courageusement avec Dieu — Marie de Magdala",
      "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/debuts-du-christianisme/marie-de-magdala-jai-vu-le-seigneur/"
    },
    {
      "title": "Marche courageusement avec Dieu",
      "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
    }
  ],
  "identity": "Marie Madeleine était une disciple fidèle de Jésus, délivrée de sept démons. Elle l’accompagna jusqu’à sa mort et fut l’une des premières personnes à le voir après sa résurrection.",
  "era": "Ministère terrestre de Jésus et premiers jours après sa résurrection",
  "familyAndEntourage": [
    "Jésus",
    "Les apôtres",
    "Marie mère de Jacques",
    "Jeanne",
    "Les autres femmes disciples"
  ],
  "bibleAccount": [
    "Jésus la délivre de sept démons.",
    "Elle soutient Jésus et ses disciples avec ses ressources.",
    "Elle assiste à son exécution et à son ensevelissement.",
    "Elle vient au tombeau et devient l’une des premières personnes à voir Jésus ressuscité.",
    "Elle annonce ensuite la nouvelle aux disciples."
  ],
  "qualities": [
    "Fidélité",
    "Courage",
    "Reconnaissance",
    "Zèle pour témoigner"
  ],
  "difficulties": [
    "Elle reste attachée à Jésus malgré son exécution et doit faire face à la douleur de sa mort."
  ]
},
  "zacchaeus": {
  "studyFocus": "Zachée était un chef des collecteurs d’impôts à Jéricho et était riche. Il désirait voir Jésus au point de monter sur un sycomore. Après avoir reçu Jésus avec joie, il annonça des changements concrets dans sa manière d’utiliser son argent et de réparer les torts commis.",
  "lessonPoints": [
    "Zachée chercha activement Jésus malgré les obstacles.",
    "Sa réaction à la visite de Jésus fut joyeuse et personnelle.",
    "Il annonça volontairement une restitution généreuse aux personnes qu’il avait lésées.",
    "Jésus montra que le salut pouvait toucher une personne considérée comme pécheresse."
  ],
  "keyReading": "Luc 19:1-10",
  "location": "Jéricho.",
  "relationshipWithJehovah": "La rencontre avec Jésus provoqua chez Zachée un changement concret de conduite.",
  "didYouKnow": "Zachée était de petite taille, raison donnée par Luc pour expliquer pourquoi il monta sur un sycomore.",
  "jwResources": [
    {
      "title": "Zachée — Les personnages de la Bible",
      "url": "https://www.jw.org/fr/la-bible-et-vous/enfants/personnages-bibliques/zachee/"
    },
    {
      "title": "La Bible — Luc 19",
      "url": "https://www.jw.org/fr/bibliotheque/bible/"
    },
    {
      "title": "Étude perspicace des Écritures",
      "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/"
    },
    {
      "title": "Imitez leur foi — personnages de la Bible",
      "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
    }
  ],
  "identity": "Zachée était chef des collecteurs d’impôts à Jéricho et riche. Après avoir rencontré Jésus, il manifesta un changement concret dans sa conduite.",
  "era": "Vers 33 de n. è., peu avant la mort de Jésus",
  "familyAndEntourage": [
    "Jésus",
    "Les habitants de Jéricho",
    "Sa maisonnée"
  ],
  "bibleAccount": [
    "Il cherche à voir Jésus mais sa petite taille l’en empêche.",
    "Il monte sur un sycomore pour le voir passer.",
    "Jésus lui demande de descendre et accepte de loger chez lui.",
    "Zachée annonce qu’il donnera la moitié de ses biens aux pauvres et rendra au quadruple ce qu’il a extorqué."
  ],
  "qualities": [
    "Détermination",
    "Générosité",
    "Repentance concrète"
  ],
  "difficulties": [
    "Comme chef des collecteurs d’impôts, il pouvait être méprisé et associé à des pratiques injustes; il reconnaît lui-même avoir extorqué des personnes."
  ]
},
  "barnabas": {
    "studyFocus": "Barnabas était un chrétien généreux et encourageant de Chypre. Il soutint Saul après sa conversion et collabora avec Paul dans l’activité missionnaire.",
    "lessonPoints": [
      "Étudier comment son encouragement a aidé Saul à être accepté.",
      "Observer sa générosité et son souci des nouveaux disciples.",
      "Examiner son désaccord avec Paul au sujet de Jean-Marc sans oublier son rôle durable dans le service."
    ],
    "keyReading": "Actes 4:32-37 ; 9:26-28 ; 11:19-30 ; 13:1-13 ; 14:8-28 ; 15:36-41",
    "location": "Chypre, Jérusalem, Antioche de Syrie et régions de Galatie.",
    "relationshipWithJehovah": "Barnabas est présenté comme un homme bon, plein d’esprit saint et de foi, qui fortifiait les autres.",
    "didYouKnow": "Son nom Barnabas est interprété comme « fils de consolation » ou « fils d’encouragement »; il était lévite originaire de Chypre.",
    "jwResources": [
      {
        "title": "Barnabas — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Barnabas/"
      },
      {
        "title": "Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Collaborateur des apôtres — Barnabé joue un rôle important dans l’accueil et l’encouragement des disciples et dans l’activité missionnaire.",
    "era": "Actes",
    "familyAndEntourage": [
      "Paul",
      "Jean Marc",
      "Les disciples d’Antioche"
    ],
    "bibleAccount": [
      "Soutient la congrégation de Jérusalem.",
      "Encourage les disciples à Antioche.",
      "Travaille avec Paul dans l’activité missionnaire."
    ],
    "qualities": [
      "Générosité",
      "Encouragement",
      "Esprit d’équipe"
    ],
    "difficulties": []
  },
  "cornelius": {
  "studyFocus": "Corneille était un centurion romain décrit comme pieux et craignant Dieu. Jéhovah dirigea les événements pour que Pierre lui annonce la bonne nouvelle. Corneille et les personnes réunies chez lui reçurent l’esprit saint, marquant l’ouverture de cette possibilité aux non-Juifs incirconcis.",
  "lessonPoints": [
    "Corneille priait régulièrement et donnait beaucoup aux nécessiteux.",
    "Il réagit immédiatement à la direction reçue par l’intermédiaire de l’ange.",
    "Il réunit famille et proches pour entendre Pierre.",
    "Son cas a aidé Pierre à comprendre que Dieu n’est pas partial."
  ],
  "keyReading": "Actes 10:1-48 ; 11:1-18",
  "location": "Césarée, dans la maison de Corneille.",
  "relationshipWithJehovah": "Jéhovah remarqua ses prières et ses actes de bonté, puis dirigea Corneille vers la bonne nouvelle par Pierre.",
  "didYouKnow": "Corneille était centurion de la troupe italienne et sa conversion est le premier récit détaillé de l’accueil d’un non-Juif incirconcis dans la congrégation chrétienne.",
  "jwResources": [
    {
      "title": "Corneille — Les personnages de la Bible",
      "url": "https://www.jw.org/fr/la-bible-et-vous/enfants/personnages-bibliques/corneille/"
    },
    {
      "title": "La Bible — Actes 10",
      "url": "https://www.jw.org/fr/bibliotheque/bible/"
    },
    {
      "title": "Étude perspicace des Écritures",
      "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/"
    },
    {
      "title": "Imitez leur foi — personnages de la Bible",
      "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
    }
  ],
  "identity": "Corneille était un centurion romain de Césarée, homme pieux qui craignait Dieu. Il devint le premier non-Juif incirconcis à être baptisé comme chrétien avec l’approbation de Dieu.",
  "era": "Vers 36 de n. è.",
  "familyAndEntourage": [
    "Sa maisonnée",
    "Pierre",
    "Un ange de Dieu",
    "Les six frères juifs qui accompagnent Pierre"
  ],
  "bibleAccount": [
    "Il prie régulièrement et fait beaucoup de dons de miséricorde.",
    "Un ange lui demande d’envoyer chercher Pierre à Joppé.",
    "Pierre lui annonce la bonne nouvelle et explique que Dieu n’est partial envers personne.",
    "L’esprit saint tombe sur Corneille et les non-Juifs présents avant même leur baptême.",
    "Ils sont baptisés au nom de Jésus Christ."
  ],
  "qualities": [
    "Piété",
    "Générosité",
    "Humilité",
    "Réceptivité"
  ],
  "difficulties": [
    "Il devait accepter des changements importants concernant ses relations religieuses avec les Juifs et comprendre que Dieu accueillait désormais aussi les non-Juifs incirconcis."
  ]
},
  "hagar": {
  "studyFocus": "Agar était une servante égyptienne de Sara et la mère d’Ismaël. Sa vie fut marquée par les tensions familiales, la fuite dans le désert et un retour sur instruction de l’ange de Jéhovah. Elle connut aussi une seconde détresse lorsque son fils Ismaël fut renvoyé avec elle.",
  "lessonPoints": [
    "Agar fut prise dans une situation familiale qu’elle ne contrôlait pas entièrement.",
    "Dans le désert, l’ange de Jéhovah lui donna une direction et une promesse concernant son fils.",
    "Elle donna à Jéhovah un nom exprimant qu’il avait vu sa détresse.",
    "Son histoire montre que Jéhovah voit les personnes vulnérables."
  ],
  "keyReading": "Genèse 16:1-16 ; 21:8-21 ; Galates 4:21-31",
  "location": "La maison d’Abraham en Canaan et le désert de Shour.",
  "relationshipWithJehovah": "Jéhovah remarqua sa situation, lui parla par l’intermédiaire de son ange et pourvut aux besoins d’elle et d’Ismaël dans le désert.",
  "didYouKnow": "Agar appela Jéhovah « un Dieu qui voit », après avoir constaté qu’il avait prêté attention à sa détresse.",
  "jwResources": [
    {
      "title": "Agar — Étude perspicace des Écritures",
      "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Agar/"
    },
    {
      "title": "La Bible en ligne — Traduction du monde nouveau",
      "url": "https://www.jw.org/fr/bibliotheque/bible/"
    },
    {
      "title": "Imitez leur foi — personnages de la Bible",
      "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
    }
  ],
  "identity": "Agar était une servante égyptienne de Sara, devenue la mère d’Ismaël après avoir eu un fils d’Abraham.",
  "era": "XIXe-XVIIIe siècle av. n. è. environ",
  "familyAndEntourage": [
    "Sara",
    "Abraham",
    "Ismaël"
  ],
  "bibleAccount": [
    "Sara lui donne à Abraham comme femme pour avoir un enfant.",
    "Enceinte, Agar méprise Sara et s’enfuit après avoir été maltraitée.",
    "L’ange de Jéhovah la rencontre près d’une source et lui demande de retourner auprès de Sara.",
    "Elle donne naissance à Ismaël.",
    "Plus tard, elle et Ismaël sont renvoyés, mais Dieu entend les appels du garçon."
  ],
  "qualities": [
    "Endurance",
    "Capacité à reconnaître l’intervention de Dieu"
  ],
  "difficulties": [
    "Elle subit une situation familiale douloureuse, commet elle-même une erreur en méprisant Sara, puis doit vivre le renvoi avec son fils."
  ]
},
  "leah": {
  "studyFocus": "Léa était la fille de Labân et la première épouse de Jacob, donnée à Jacob dans une situation qu’il n’avait pas prévue. Elle connut une vie conjugale difficile, mais la Bible montre qu’elle eut de nombreux enfants et qu’elle donna plusieurs noms à ses fils en lien avec ses sentiments et sa relation avec Jéhovah.",
  "lessonPoints": [
    "Léa vécut dans une situation affective douloureuse et chercha du réconfort auprès de Jéhovah.",
    "Les noms de plusieurs de ses fils révèlent ses émotions et son désir d’être aimée.",
    "Elle donna naissance à six fils et à une fille, Dina.",
    "Juda, l’un de ses fils, devint un ancêtre de David et de Jésus selon les généalogies bibliques."
  ],
  "keyReading": "Genèse 29:16-35 ; 30:1-21 ; 49:29-33",
  "location": "Paddân-Aram puis Canaan.",
  "relationshipWithJehovah": "Le récit montre que Jéhovah vit que Léa n’était pas aimée et lui permit d’avoir des enfants; elle reconnut aussi Jéhovah dans les noms qu’elle choisit.",
  "didYouKnow": "Léa est la mère de Juda, ancêtre de David et de Jésus selon les généalogies bibliques.",
  "jwResources": [
    {
      "title": "Léa — Étude perspicace des Écritures",
      "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/L%C3%A9a/"
    },
    {
      "title": "La Bible — Genèse 29-31",
      "url": "https://www.jw.org/fr/bibliotheque/bible/"
    },
    {
      "title": "Ruth 4:11",
      "url": "https://www.jw.org/fr/bibliotheque/bible/"
    },
    {
      "title": "Imitez leur foi — personnages de la Bible",
      "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
    }
  ],
  "identity": "Léa était la fille aînée de Labân, première femme de Jacob et mère de six des douze fils de Jacob ainsi que de Dina.",
  "era": "XIXe-XVIIIe siècle av. n. è. environ",
  "familyAndEntourage": [
    "Labân",
    "Jacob",
    "Rachel",
    "Ruben",
    "Siméon",
    "Lévi",
    "Juda",
    "Issakar",
    "Zéboulôn",
    "Dina"
  ],
  "bibleAccount": [
    "Labân donne Léa à Jacob à la place de Rachel.",
    "Elle a plusieurs fils et une fille avec Jacob.",
    "Elle exprime à plusieurs reprises ses sentiments liés à l’amour de Jacob pour Rachel.",
    "Elle quitte Paddân-Aram avec Jacob et sa famille."
  ],
  "qualities": [
    "Endurance",
    "Attachement à sa famille",
    "Reconnaissance envers Jéhovah"
  ],
  "difficulties": [
    "Elle vit dans un mariage où elle sait que Jacob aime davantage Rachel et connaît une rivalité familiale douloureuse."
  ]
},
  "esau": {
  "studyFocus": "Ésaü, frère jumeau de Jacob, était un chasseur habile et le fils préféré d’Isaac. Il vendit son droit d’aînesse pour un repas et perdit ensuite la bénédiction destinée à l’aîné. Malgré un conflit sérieux avec Jacob, il finit par se réconcilier avec lui.",
  "lessonPoints": [
    "Ésaü accorda une valeur immédiate à la nourriture et sous-estima son droit d’aînesse.",
    "Ses mariages avec des femmes du pays causèrent du chagrin à Isaac et Rébecca.",
    "Lorsqu’il retrouva Jacob, il courut à sa rencontre et l’embrassa.",
    "Son histoire oppose les choix spirituels à la recherche d’une satisfaction immédiate."
  ],
  "keyReading": "Genèse 25:27-34 ; 26:34-35 ; 27:1-46 ; 32:3-23 ; 33:1-16 ; Hébreux 12:16,17",
  "location": "Canaan, notamment la région de Séïr et d’Édom.",
  "relationshipWithJehovah": "Hébreux 12:16-17 utilise son exemple pour mettre en garde contre le fait de mépriser les choses sacrées.",
  "didYouKnow": "Ésaü reçut aussi le nom Édom, « Rouge », en rapport avec l’épisode du plat de lentilles.",
  "jwResources": [
    {
      "title": "Ésaü — Étude perspicace des Écritures",
      "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/%C3%89sa%C3%BC/"
    },
    {
      "title": "La Bible — Genèse 25-33",
      "url": "https://www.jw.org/fr/bibliotheque/bible/"
    },
    {
      "title": "Hébreux 12:16",
      "url": "https://www.jw.org/fr/bibliotheque/bible/"
    },
    {
      "title": "Imitez leur foi — personnages de la Bible",
      "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
    }
  ],
  "identity": "Ésaü était le fils aîné d’Isaac et de Rébecca, frère jumeau de Jacob et ancêtre des Édomites.",
  "era": "1858 av. n. è. pour sa naissance; époque des patriarches",
  "familyAndEntourage": [
    "Isaac",
    "Rébecca",
    "Jacob",
    "Ses femmes et ses fils"
  ],
  "bibleAccount": [
    "Il vend son droit d’aînesse pour un plat de lentilles.",
    "Il épouse des femmes hittites qui attristent Isaac et Rébecca.",
    "Il nourrit de la rancœur contre Jacob après la bénédiction paternelle.",
    "Plus tard, il rencontre Jacob avec 400 hommes mais accepte finalement la réconciliation."
  ],
  "qualities": [
    "Énergie",
    "Capacité à pardonner dans sa rencontre avec Jacob"
  ],
  "difficulties": [
    "Il méprise son droit d’aînesse et prend des décisions matrimoniales qui causent du chagrin à ses parents. Sa colère contre Jacob le conduit à vouloir le tuer."
  ]
},
  "melchizedek": {
  "studyFocus": "Melkisédec était roi de Salem et prêtre du Dieu Très-Haut à l’époque d’Abraham. Il bénit Abraham après sa victoire et lui apporta du pain et du vin. Psaume 110 et Hébreux 7 utilisent son personnage pour expliquer le rôle sacerdotal du Messie.",
  "lessonPoints": [
    "Melkisédec réunissait les fonctions de roi et de prêtre du Dieu Très-Haut.",
    "Il bénit Abraham et attribua la victoire à Jéhovah.",
    "Abraham lui donna le dixième de tout le butin.",
    "Hébreux 7 utilise Melkisédec comme figure du sacerdoce supérieur de Jésus."
  ],
  "keyReading": "Genèse 14:17-24 ; Psaume 110:1-4 ; Hébreux 5:5-10 ; 7:1-28",
  "location": "Salem, généralement identifiée à l’ancienne Jérusalem.",
  "relationshipWithJehovah": "Il est explicitement appelé « prêtre du Dieu Très-Haut » et invoque Jéhovah comme Créateur du ciel et de la terre.",
  "didYouKnow": "Melkisédec signifie « Roi de justice », et il était aussi roi de Salem, nom associé à la paix.",
  "jwResources": [
    {
      "title": "Melkisédec — Étude perspicace des Écritures",
      "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Melkis%C3%A9dec/"
    },
    {
      "title": "La Bible — Genèse 14",
      "url": "https://www.jw.org/fr/bibliotheque/bible/"
    },
    {
      "title": "La Bible — Hébreux 5-7",
      "url": "https://www.jw.org/fr/bibliotheque/bible/"
    },
    {
      "title": "Imitez leur foi — personnages de la Bible",
      "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
    }
  ],
  "identity": "Melkisédec était roi de Salem et prêtre du Dieu Très-Haut, Jéhovah. Il bénit Abraham après sa victoire sur des rois ennemis.",
  "era": "Avant 1933 av. n. è.",
  "familyAndEntourage": [
    "Abraham",
    "Jéhovah"
  ],
  "bibleAccount": [
    "Il rencontre Abraham après la bataille contre Kedorlaomer et ses alliés.",
    "Il apporte du pain et du vin.",
    "Il bénit Abraham au nom du Dieu Très-Haut.",
    "Abraham lui donne le dixième du butin."
  ],
  "qualities": [
    "Foi",
    "Service sacerdotal",
    "Bénédiction"
  ],
  "difficulties": [
    "Les Écritures ne donnent presque aucun détail biographique sur lui, notamment aucune généalogie."
  ]
},
  "jethro": {
  "studyFocus": "Jéthro, prêtre de Madian et beau-père de Moïse, accueillit Moïse pendant son exil à Madian. Plus tard, il se réjouit de ce que Jéhovah avait fait pour Israël et conseilla à Moïse de déléguer certaines responsabilités judiciaires à des hommes capables.",
  "lessonPoints": [
    "Jéthro accueillit Moïse et lui donna un cadre familial après sa fuite d’Égypte.",
    "Il reconnut les actions de Jéhovah après avoir entendu le récit de la délivrance d’Israël.",
    "Son conseil visait à éviter l’épuisement de Moïse et à organiser la justice.",
    "Il savait reconnaître les qualités nécessaires chez ceux à qui l’on confie des responsabilités."
  ],
  "keyReading": "Exode 2:15-22 ; 3:1 ; 18:1-27 ; Nombres 10:29-32",
  "location": "Madian, puis le camp d’Israël près du mont Sinaï.",
  "relationshipWithJehovah": "Après avoir entendu le récit de la délivrance, Jéthro déclara que Jéhovah était plus grand que tous les autres dieux et offrit un sacrifice.",
  "didYouKnow": "Jéthro était le beau-père de Moïse et le père de Séphora; son autre nom, Réouël, apparaît également dans le récit biblique.",
  "jwResources": [
    {
      "title": "Jéthro — Étude perspicace des Écritures",
      "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
    },
    {
      "title": "La Bible en ligne",
      "url": "https://www.jw.org/fr/bibliotheque/bible/"
    },
    {
      "title": "Les personnages de la Bible",
      "url": "https://www.jw.org/fr/la-bible-et-vous/enfants/personnages-bibliques/"
    },
    {
      "title": "Imitez leur foi — personnages de la Bible",
      "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
    }
  ],
  "identity": "Jéthro était prêtre de Madiân et beau-père de Moïse. Il accueillit Moïse, lui donna Séphora pour femme et lui conseilla plus tard d’organiser la direction du peuple.",
  "era": "XVIe-XVe siècle av. n. è.",
  "familyAndEntourage": [
    "Séphora",
    "Moïse",
    "Les fils de Moïse"
  ],
  "bibleAccount": [
    "Il accueille Moïse après sa fuite d’Égypte.",
    "Il donne Séphora en mariage à Moïse.",
    "Il entend le récit de la délivrance d’Israël et reconnaît la grandeur de Jéhovah.",
    "Il conseille à Moïse de déléguer certaines responsabilités judiciaires."
  ],
  "qualities": [
    "Hospitalité",
    "Sagesse pratique",
    "Humilité"
  ],
  "difficulties": [
    "Il doit intégrer la situation de sa famille après le départ de Moïse et discerner comment aider sans prendre sa place."
  ]
},
  "zipporah": {
  "studyFocus": "Séphora était l’épouse de Moïse et la fille de Jéthro. Elle accompagna Moïse dans sa vie à Madian puis dans son retour vers l’Égypte. Un épisode bref montre qu’elle prit rapidement une décision concernant la circoncision de leur fils lorsque Jéhovah exigea que la situation soit réglée.",
  "lessonPoints": [
    "Séphora partagea avec Moïse une vie marquée par des déplacements et des responsabilités difficiles.",
    "Elle appartenait à une famille qui accueillit Moïse à Madian.",
    "Lors d’une crise sur le chemin de l’Égypte, elle agit rapidement pour régler la question de la circoncision de son fils.",
    "Le récit rappelle l’importance de prendre au sérieux les exigences de Jéhovah."
  ],
  "keyReading": "Exode 2:16-22 ; 4:18-26 ; 18:1-6",
  "location": "Madian, puis sur la route entre Madian et l’Égypte.",
  "relationshipWithJehovah": "La Bible ne rapporte pas beaucoup de détails sur sa spiritualité personnelle, mais son intervention dans Exode 4 montre qu’elle a compris l’urgence de respecter l’alliance de la circoncision.",
  "didYouKnow": "Séphora était l’une des sept filles de Jéthro qui faisaient paître les troupeaux de leur père.",
  "jwResources": [
    {
      "title": "Séphora — Les personnages de la Bible",
      "url": "https://www.jw.org/fr/la-bible-et-vous/enfants/personnages-bibliques/sephora/"
    },
    {
      "title": "La Bible en ligne",
      "url": "https://www.jw.org/fr/bibliotheque/bible/"
    },
    {
      "title": "Étude perspicace des Écritures",
      "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
    },
    {
      "title": "Imitez leur foi — personnages de la Bible",
      "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
    }
  ],
  "identity": "Séphora était la fille de Jéthro, l’épouse de Moïse et la mère de ses fils Guershom et Éliézer.",
  "era": "XVIe-XVe siècle av. n. è.",
  "familyAndEntourage": [
    "Jéthro",
    "Moïse",
    "Guershom",
    "Éliézer"
  ],
  "bibleAccount": [
    "Elle rencontre Moïse près d’un puits de Madiân.",
    "Elle devient son épouse et lui donne des fils.",
    "Lors du voyage vers l’Égypte, elle circoncit son fils dans une situation urgente et empêche ainsi une sanction divine contre Moïse.",
    "Elle est ensuite renvoyée chez Jéthro puis retrouve Moïse avec leurs fils."
  ],
  "qualities": [
    "Réactivité",
    "Courage",
    "Respect des exigences divines"
  ],
  "difficulties": [
    "Elle doit agir rapidement dans une situation familiale grave où la vie de son mari est menacée à cause du non-respect d’une exigence divine concernant leur fils."
  ]
},
  "korah": {
  "studyFocus": "Qorah était un Lévite et un proche parent de Moïse et d’Aaron. Il participa à une rébellion contre l’autorité établie par Jéhovah, avec Dathan, Abiram et d’autres hommes. Son histoire montre comment l’ambition et la contestation peuvent conduire à mépriser les dispositions divines.",
  "lessonPoints": [
    "Qorah occupait déjà une fonction honorable parmi les Lévites mais désirait davantage de pouvoir.",
    "Il entraîna 250 hommes dans une contestation publique de Moïse et d’Aaron.",
    "Moïse laissa à Jéhovah le soin de montrer qui avait été choisi pour le service sacerdotal.",
    "Son histoire rappelle qu’une fonction spirituelle ne doit pas devenir un moyen de satisfaire l’ambition personnelle."
  ],
  "keyReading": "Nombres 16:1-50 ; 26:9-11 ; Psaume 106:16-18 ; Jude 11",
  "location": "Camp d’Israël dans le désert, après la sortie d’Égypte.",
  "relationshipWithJehovah": "Qorah prétendait défendre la sainteté de toute l’assemblée, mais il contestait une disposition que Jéhovah avait établie concernant Moïse et Aaron.",
  "didYouKnow": "Nombres 26:11 précise que les fils de Qorah ne moururent pas, et leurs descendants furent ensuite associés au service musical du sanctuaire.",
  "jwResources": [
    {
      "title": "Coré — Les personnages de la Bible",
      "url": "https://www.jw.org/fr/la-bible-et-vous/enfants/personnages-bibliques/core/"
    },
    {
      "title": "La Bible en ligne",
      "url": "https://www.jw.org/fr/bibliotheque/bible/"
    },
    {
      "title": "Étude perspicace des Écritures",
      "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
    },
    {
      "title": "Imitez leur foi — personnages de la Bible",
      "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
    }
  ],
  "identity": "Qorah était un Lévite, cousin de Moïse et d’Aaron, qui contesta leur autorité avec Dathan, Abiram et 250 autres hommes.",
  "era": "XVIe-XVe siècle av. n. è.",
  "familyAndEntourage": [
    "Amram",
    "Moïse",
    "Aaron",
    "Dathan",
    "Abiram",
    "Les 250 hommes"
  ],
  "bibleAccount": [
    "Il accuse Moïse et Aaron de s’élever au-dessus de la congrégation.",
    "Moïse propose une épreuve devant Jéhovah.",
    "Jéhovah fait connaître son jugement et Qorah ainsi que les principaux rebelles meurent.",
    "Ses fils ne meurent pas avec lui et continuent d’exister comme famille lévitique."
  ],
  "qualities": [
    "Zèle religieux mal orienté"
  ],
  "difficulties": [
    "Il laisse l’ambition et le mécontentement l’amener à contester une disposition que Jéhovah avait établie."
  ]
},
  "balaam": {
  "studyFocus": "Balaam était un homme connu pour pratiquer la divination et que Balak voulait engager pour maudire Israël. Jéhovah empêcha finalement qu’il prononce une malédiction contre Israël. Pourtant, les Écritures montrent qu’il développa une mauvaise attitude envers le gain injuste et contribua ensuite à faire trébucher Israël.",
  "lessonPoints": [
    "Balaam reçut des avertissements clairs de Jéhovah mais ne développa pas une bonne disposition de cœur.",
    "L’épisode de l’ânesse montre que Jéhovah pouvait empêcher un homme de poursuivre une voie dangereuse.",
    "Balaam ne put prononcer que ce que Jéhovah permettait.",
    "La fin du récit montre que connaître la volonté de Dieu ne suffit pas si l’on aime le gain injuste."
  ],
  "keyReading": "Nombres 22:1-41 ; 23:1-30 ; 24:1-25 ; 31:8,16 ; 2 Pierre 2:15 ; Révélation 2:14",
  "location": "Région de Pethor, puis territoire de Moab près du Jourdain.",
  "relationshipWithJehovah": "Jéhovah intervint directement pour empêcher Balaam de maudire Israël, mais les Écritures chrétiennes condamnent son amour du gain injuste.",
  "didYouKnow": "L’ânesse de Balaam vit l’ange de Jéhovah avant Balaam lui-même et parla miraculeusement pour lui faire prendre conscience du danger.",
  "jwResources": [
    {
      "title": "Balaam — Étude perspicace des Écritures",
      "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
    },
    {
      "title": "La Bible en ligne",
      "url": "https://www.jw.org/fr/bibliotheque/bible/"
    },
    {
      "title": "Les personnages de la Bible",
      "url": "https://www.jw.org/fr/la-bible-et-vous/enfants/personnages-bibliques/"
    },
    {
      "title": "Imitez leur foi — personnages de la Bible",
      "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
    }
  ],
  "identity": "Balaam était un homme de Mésopotamie que Balak engagea pour maudire Israël. Jéhovah l’empêcha finalement de prononcer une malédiction contre son peuple.",
  "era": "Époque de l’entrée d’Israël en Terre promise, vers 1473 av. n. è.",
  "familyAndEntourage": [
    "Balak",
    "Les princes de Moab",
    "Israël"
  ],
  "bibleAccount": [
    "Balak lui demande de maudire Israël.",
    "Balaam demande à Jéhovah ce qu’il doit faire.",
    "Alors qu’il voyage, son ânesse voit l’ange de Jéhovah et refuse d’avancer.",
    "Balaam prononce finalement des bénédictions et des déclarations prophétiques au lieu de malédictions.",
    "Il est ensuite associé au conseil qui conduisit Israël au péché avec le culte de Baal de Péor."
  ],
  "qualities": [
    "Connaissance du pouvoir de la parole prophétique",
    "Capacité à prononcer fidèlement les paroles imposées par Jéhovah dans la scène des bénédictions"
  ],
  "difficulties": [
    "Il aime la récompense promise et permet à ses mauvais désirs de l’entraîner vers une conduite condamnable."
  ]
},
  "balak": {
  "studyFocus": "Balak était roi de Moab lorsqu’Israël approcha de son territoire. Craignant la puissance d’Israël, il chercha à engager Balaam pour le maudire. Ses tentatives échouèrent parce que Jéhovah ne permit pas que son peuple soit maudit de cette manière.",
  "lessonPoints": [
    "La peur poussa Balak à chercher une solution religieuse et politique contre Israël.",
    "Il envoya plusieurs délégations à Balaam et augmenta la récompense proposée.",
    "Même lorsque Balaam voulut parler contre Israël, il dut annoncer les paroles que Jéhovah lui donnait.",
    "Balak montre qu’une position royale ne permet pas de contrecarrer le dessein de Jéhovah."
  ],
  "keyReading": "Nombres 22:1-41 ; 23:1-30 ; 24:1-25 ; Josué 24:9,10 ; Michée 6:5",
  "location": "Moab, au nord de l’Arnon, face au territoire d’Israël.",
  "relationshipWithJehovah": "Balak cherchait à utiliser Balaam contre Israël; le récit montre au contraire que Jéhovah protégea son peuple.",
  "didYouKnow": "Balak fit conduire Balaam sur plusieurs hauteurs afin qu’il puisse voir une partie du camp d’Israël et prononcer ses oracles.",
  "jwResources": [
    {
      "title": "Balak — Étude perspicace des Écritures",
      "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
    },
    {
      "title": "La Bible en ligne",
      "url": "https://www.jw.org/fr/bibliotheque/bible/"
    },
    {
      "title": "Les personnages de la Bible",
      "url": "https://www.jw.org/fr/la-bible-et-vous/enfants/personnages-bibliques/"
    },
    {
      "title": "Imitez leur foi — personnages de la Bible",
      "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
    }
  ],
  "identity": "Balak était roi de Moab lorsque les Israélites approchaient de la Terre promise. Il chercha à faire maudire Israël par Balaam.",
  "era": "Vers 1473 av. n. è.",
  "familyAndEntourage": [
    "Balaam",
    "Les princes de Moab",
    "Les Israélites"
  ],
  "bibleAccount": [
    "Il voit la puissance d’Israël et craint pour Moab.",
    "Il envoie des princes demander à Balaam de venir maudire Israël.",
    "Il fait monter Balaam sur plusieurs hauteurs pour tenter d’obtenir une malédiction.",
    "Balaam prononce au contraire des bénédictions sur Israël."
  ],
  "qualities": [
    "Organisation",
    "Persévérance dans son objectif"
  ],
  "difficulties": [
    "Il agit par peur et cherche une solution religieuse pour combattre Israël plutôt que de reconnaître la volonté de Jéhovah."
  ]
},
  "eli": {
  "studyFocus": "Éli était grand prêtre et juge en Israël. Il servit Jéhovah pendant de nombreuses années, mais ses deux fils, Hophni et Phinéhas, pratiquaient des actions gravement mauvaises. Éli les reprit, mais ne les empêcha pas suffisamment d’abuser de leur fonction, ce qui entraîna un jugement contre sa maison.",
  "lessonPoints": [
    "Éli servait au sanctuaire et forma le jeune Samuel dans le service de Jéhovah.",
    "Il reconnut la nécessité de laisser Jéhovah faire ce qui est juste lorsqu’il apprit le jugement contre sa maison.",
    "Sa faiblesse dans la discipline de ses fils montre qu’une responsabilité familiale ne doit pas être négligée.",
    "Sa réaction à la nouvelle de la capture de l’Arche montre l’importance qu’il accordait à la gloire de Jéhovah."
  ],
  "keyReading": "1 Samuel 1:9-28 ; 2:12-36 ; 3:1-21 ; 4:10-18",
  "location": "Silo, au sanctuaire d’Israël.",
  "relationshipWithJehovah": "Éli servait comme prêtre et reconnut la voix prophétique de Jéhovah lorsqu’il encouragea Samuel à répondre : « Parle, car ton serviteur écoute. »",
  "didYouKnow": "Éli avait 98 ans lorsqu’il mourut, après avoir appris que l’Arche avait été capturée et que ses deux fils étaient morts.",
  "jwResources": [
    {
      "title": "Éli — Étude perspicace des Écritures",
      "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
    },
    {
      "title": "La Bible en ligne",
      "url": "https://www.jw.org/fr/bibliotheque/bible/"
    },
    {
      "title": "Les personnages de la Bible",
      "url": "https://www.jw.org/fr/la-bible-et-vous/enfants/personnages-bibliques/"
    },
    {
      "title": "Imitez leur foi — personnages de la Bible",
      "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
    }
  ],
  "identity": "Éli était grand prêtre et juge en Israël. Il servit au sanctuaire de Shilo et fut le responsable de Samuel pendant son enfance.",
  "era": "XIIe-XIe siècle av. n. è.",
  "familyAndEntourage": [
    "Hophni",
    "Phinéas",
    "Samuel",
    "Hanna"
  ],
  "bibleAccount": [
    "Il sert comme prêtre à Shilo.",
    "Il pense d’abord à tort qu’Hanna est ivre, puis corrige son jugement.",
    "Il forme Samuel dans le service du sanctuaire.",
    "Ses fils commettent de graves fautes et il ne les corrige pas avec suffisamment de fermeté.",
    "Jéhovah annonce le jugement contre sa maison; Éli meurt en apprenant la prise de l’Arche."
  ],
  "qualities": [
    "Attention au service",
    "Capacité à corriger un malentendu",
    "Affection pour Samuel"
  ],
  "difficulties": [
    "Il échoue à exercer une discipline ferme envers ses fils, malgré leurs graves fautes.",
    "Il doit accepter un jugement de Jéhovah concernant sa maison."
  ]
},
  "hannah": {
  "studyFocus": "Anne était la femme d’Elkana et la mère du prophète Samuel. Pendant des années, elle fut stérile et souffrit aussi des provocations de Peninna. Elle déversa sa peine dans la prière, fit un vœu à Jéhovah et, après la naissance de Samuel, le remit au service au sanctuaire.",
  "lessonPoints": [
    "Anne transforma une douleur personnelle en prière sincère plutôt qu’en vengeance contre Peninna.",
    "Elle fit un vœu réfléchi et le respecta après avoir reçu la réponse de Jéhovah.",
    "Elle continua à montrer son affection pour Samuel en lui apportant chaque année un vêtement.",
    "Son cantique révèle sa confiance dans la puissance et la justice de Jéhovah."
  ],
  "keyReading": "1 Samuel 1:1-28 ; 2:1-11,18-21",
  "location": "Rama, Silo et les environs d’Éphraïm.",
  "relationshipWithJehovah": "Anne pria Jéhovah avec intensité, lui expliqua sa détresse et tint sa promesse. Son cantique montre qu’elle attribuait à Jéhovah sa joie et sa délivrance.",
  "didYouKnow": "Après la naissance de Samuel, Anne eut encore trois fils et deux filles, selon 1 Samuel 2:21.",
  "jwResources": [
    {
      "title": "Anne — Les personnages de la Bible",
      "url": "https://www.jw.org/fr/la-bible-et-vous/enfants/personnages-bibliques/anne/"
    },
    {
      "title": "La Bible en ligne — Traduction du monde nouveau",
      "url": "https://www.jw.org/fr/bibliotheque/bible/"
    },
    {
      "title": "Samuel — Étude perspicace des Écritures",
      "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Samuel/"
    },
    {
      "title": "Imitez leur foi — personnages de la Bible",
      "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
    }
  ],
  "identity": "Hanna était la femme d’Elqana et la mère de Samuel. Longtemps stérile, elle pria Jéhovah avec ferveur et consacra son fils à son service.",
  "era": "XIIe siècle av. n. è. environ",
  "familyAndEntourage": [
    "Elqana",
    "Samuel",
    "Peninna",
    "Éli"
  ],
  "bibleAccount": [
    "Elle souffre de sa stérilité et des provocations de Peninna.",
    "Elle prie Jéhovah au tabernacle et fait un vœu concernant un fils.",
    "Samuel naît et elle l’amène à Shilo après son sevrage.",
    "Elle prononce une prière de reconnaissance qui met en valeur Jéhovah."
  ],
  "qualities": [
    "Foi",
    "Persévérance dans la prière",
    "Générosité",
    "Reconnaissance"
  ],
  "difficulties": [
    "Elle endure pendant longtemps la stérilité et les provocations de sa rivale sans abandonner sa confiance en Jéhovah."
  ]
},
  "michal": {
    "studyFocus": "Mical, fille de Saül et femme de David, a vécu dans une famille marquée par les conflits et a pris des décisions qui ont eu des conséquences dans sa vie conjugale.",
    "lessonPoints": [
      "Ne pas laisser les conflits familiaux déterminer nos choix spirituels.",
      "Cultiver le respect : son récit montre l’importance de respecter ceux qui manifestent du zèle pour Jéhovah.",
      "Prudence : les paroles et attitudes peuvent avoir des conséquences durables dans les relations."
    ],
    "keyReading": "1 Samuel 18:20-29; 19:11-17; 2 Samuel 6:14-23",
    "location": "Gibéa et Jérusalem.",
    "relationshipWithJehovah": "Le récit ne décrit pas une relation personnelle avec Jéhovah comparable à celle de David. Son attitude finale envers la joie liée au culte sert néanmoins d’avertissement sur le jugement des motivations d’autrui.",
    "didYouKnow": "Mikal utilisa un teraphim, une statue domestique, pour faire croire aux hommes de Saül que David était au lit.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Les personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/enfants/personnages-bibliques/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Mikal était la fille de Saül et la première épouse de David. Elle a aidé David à échapper à la tentative de son père de le tuer.",
    "era": "XIe siècle av. n. è.",
    "familyAndEntourage": [
      "Saül",
      "David",
      "Jonathan",
      "Palti"
    ],
    "bibleAccount": [
      "Elle aime David et l’épouse.",
      "Elle avertit David du danger et l’aide à fuir par une fenêtre.",
      "Elle trompe les hommes de Saül en donnant l’impression que David est malade au lit.",
      "Plus tard, elle méprise David lorsqu’elle le voit danser devant l’Arche."
    ],
    "qualities": [
      "Courage",
      "Ingéniosité",
      "Attachement à David dans sa jeunesse"
    ],
    "difficulties": [
      "Sa relation avec David se détériore et elle porte un jugement méprisant sur son expression de joie religieuse.",
      "Elle est donnée par Saül à un autre homme pendant l’absence de David."
    ]
  },
  "joab": {
  "studyFocus": "Joab, fils de Tserouïa, fut le chef de l’armée de David pendant une grande partie de son règne. Il était énergique et capable, mais son histoire est aussi marquée par des actes de vengeance et des meurtres qui entrèrent en conflit avec la volonté de David.",
  "lessonPoints": [
    "Joab défendit David et participa à plusieurs victoires militaires.",
    "Il tua Abner et Amasa pour des raisons personnelles ou politiques, malgré les conséquences graves.",
    "Il pouvait conseiller David avec franchise, notamment après la mort d’Absalom.",
    "Sa fin sous Salomon montre que des années de service ne rendent pas acceptables des actes de violence injustifiés."
  ],
  "keyReading": "2 Samuel 2:12-32 ; 3:22-39 ; 18:1-33 ; 19:1-8 ; 20:4-13 ; 1 Rois 2:28-35",
  "location": "Jérusalem et les champs de bataille du royaume d’Israël.",
  "relationshipWithJehovah": "La Bible ne présente pas Joab comme un modèle spirituel. Son histoire montre que l’efficacité militaire et la loyauté politique ne remplacent pas l’obéissance aux principes de Jéhovah.",
  "didYouKnow": "Joab était le frère d’Abishaï et d’Asaël, et tous trois étaient fils de Tserouïa, sœur de David.",
  "jwResources": [
    {
      "title": "Étude perspicace des Écritures",
      "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
    },
    {
      "title": "La Bible en ligne — Traduction du monde nouveau",
      "url": "https://www.jw.org/fr/bibliotheque/bible/"
    },
    {
      "title": "Les personnages de la Bible",
      "url": "https://www.jw.org/fr/la-bible-et-vous/enfants/personnages-bibliques/"
    },
    {
      "title": "Imitez leur foi — personnages de la Bible",
      "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
    }
  ],
  "identity": "Joab était le chef de l’armée de David et un homme très influent pendant son règne. Il participa à de nombreuses guerres mais commit aussi des meurtres motivés par ses propres intérêts.",
  "era": "XIe-Xe siècle av. n. è.",
  "familyAndEntourage": [
    "David",
    "Abishaï",
    "Asaël",
    "Abner",
    "Amasa",
    "Absalom"
  ],
  "bibleAccount": [
    "Il commande l’armée de David.",
    "Il tue Abner après la mort d’Asaël, malgré les objections de David.",
    "Il intervient dans la rébellion d’Absalom et le tue.",
    "Il soutient Adoniya dans sa tentative de devenir roi.",
    "David ordonne finalement à Salomon de faire rendre compte à Joab de ses crimes."
  ],
  "qualities": [
    "Compétence militaire",
    "Loyauté envers David dans certaines crises",
    "Détermination"
  ],
  "difficulties": [
    "Il se venge personnellement et prend des décisions contraires aux instructions du roi.",
    "Son ambition et ses intérêts politiques finissent par le conduire à soutenir Adoniya."
  ]
},
  "herod_antipas": {
    "studyFocus": "Hérode Antipas a exercé le pouvoir en Galilée et en Pérée à l’époque de Jésus. Son histoire est notamment liée à Jean le Baptiseur.",
    "lessonPoints": [
      "Courage face à la pression : son récit montre les conséquences de céder aux pressions humaines.",
      "Respect de la vérité : Jean le Baptiseur lui avait courageusement parlé de sa conduite.",
      "Humilité : la recherche de l’approbation humaine peut conduire à de graves décisions."
    ],
    "keyReading": "Matthieu 14:1-12; Luc 3:19-20; 9:7-9; 13:31-33; 23:6-12",
    "location": "Galilée et Pérée, notamment Tibériade.",
    "relationshipWithJehovah": "Jean lui transmet un avertissement clair sur sa conduite, mais le récit ne rapporte pas qu’Antipas ait changé. Son parcours montre le danger de connaître la vérité sans agir en conséquence.",
    "didYouKnow": "Antipas était appelé « renard » par Jésus, terme qui soulignait sa ruse dans le contexte où les Pharisiens avertissaient Jésus de la menace d’Hérode.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Les personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/enfants/personnages-bibliques/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Hérode Antipas était le dirigeant de Galilée et de Pérée, fils d’Hérode le Grand. Il fit décapiter Jean le Baptiseur et joua un rôle dans le procès de Jésus.",
    "era": "4 av. n. è. à 39 de n. è.",
    "familyAndEntourage": [
      "Hérode le Grand, son père",
      "Hérodiade",
      "Jean le Baptiseur",
      "Jésus",
      "Ponce Pilate"
    ],
    "bibleAccount": [
      "Jean le Baptiseur lui reproche son mariage avec Hérodiade.",
      "Il fait emprisonner puis décapiter Jean après un serment imprudent.",
      "Il entend parler des œuvres de Jésus et le considère avec crainte et curiosité.",
      "Pilate lui envoie Jésus; il espère voir un miracle mais Jésus ne lui répond pas."
    ],
    "qualities": [
      "Curiosité envers les œuvres de Jésus",
      "Il éprouve de la tristesse devant l’exécution de Jean, mais cela ne l’empêche pas d’agir contre lui"
    ],
    "difficulties": [
      "Il laisse la pression d’un serment et de son entourage conduire à l’exécution de Jean et ne manifeste pas de véritable repentance rapportée.",
      "Il participe ensuite à l’humiliation de Jésus."
    ]
  },
  "pilate": {
    "studyFocus": "Ponce Pilate était le gouverneur romain qui présida au procès de Jésus. Son récit montre le conflit entre ce qu’il reconnaissait comme juste et la pression de la foule.",
    "lessonPoints": [
      "Courage moral : reconnaître l’innocence de quelqu’un exige d’agir en conséquence.",
      "Pression humaine : Pilate a cédé à la pression des chefs religieux et de la foule.",
      "Responsabilité : une position d’autorité implique de prendre au sérieux les décisions rendues."
    ],
    "keyReading": "Matthieu 27:11-26; Marc 15:1-15; Luc 23:1-25; Jean 18:28–19:22",
    "location": "Jérusalem, au prétoire romain.",
    "relationshipWithJehovah": "Le récit ne le présente pas comme adorateur de Jéhovah. Il entend un témoignage direct de Jésus mais ne prend pas une décision conforme à ce qu’il reconnaît lui-même comme juste.",
    "didYouKnow": "Une inscription découverte à Césarée en 1961 mentionne Ponce Pilate et constitue une preuve archéologique de son titre de préfet de Judée.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Les personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/enfants/personnages-bibliques/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Ponce Pilate était le gouverneur romain de Judée qui présida le procès de Jésus et autorisa son exécution malgré l’absence de motif de condamnation à mort.",
    "era": "26-36 de n. è.",
    "familyAndEntourage": [
      "Les autorités religieuses juives",
      "Jésus",
      "Hérode Antipas",
      "La foule à Jérusalem"
    ],
    "bibleAccount": [
      "Il interroge Jésus et constate qu’il n’a commis aucun crime méritant la mort.",
      "Il cherche à le libérer mais cède finalement aux pressions de la foule et des chefs religieux.",
      "Il fait placer une inscription sur le poteau de supplice de Jésus.",
      "Plus tard, il fait massacrer des Galiléens venus offrir des sacrifices."
    ],
    "qualities": [
      "Il reconnaît à plusieurs reprises que Jésus n’est pas coupable d’un crime capital"
    ],
    "difficulties": [
      "Il sacrifie finalement son jugement de justice à la pression politique et autorise la mise à mort de Jésus."
    ]
  },
  "isaiah": {
    "studyFocus": "Isaïe fut prophète de Jéhovah en Juda pendant une période de grands bouleversements. Il dénonça l’infidélité et annonça des jugements ainsi que de nombreuses prophéties messianiques.",
    "lessonPoints": [
      "Étudier sa réponse à l’appel: « Me voici! Envoie-moi. »",
      "Observer comment il combina avertissements et messages d’espérance.",
      "Examiner les prophéties d’Isaïe appliquées au Messie dans les Écritures grecques."
    ],
    "keyReading": "Isaïe 1:1-20 ; 6:1-13 ; 7:1-17 ; 9:1-7 ; 11:1-10 ; 53:1-12",
    "location": "Juda, particulièrement Jérusalem.",
    "relationshipWithJehovah": "Isaïe accepta une mission difficile et transmit fidèlement les paroles de Jéhovah malgré la faible réceptivité du peuple.",
    "didYouKnow": "Isaïe prophétisa sous Ozias, Jotham, Ahaz et Hizqiya.",
    "jwResources": [
      {
        "title": "Isaïe — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Isa%C3%AFe/"
      },
      {
        "title": "Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Isaïe était un prophète de Juda qui servit pendant les règnes de plusieurs rois et transmit de nombreuses prophéties sur Juda, les nations et le Messie.",
    "era": "VIIIe siècle av. n. è.",
    "familyAndEntourage": [
      "Amots, son père",
      "Sa femme, appelée la prophétesse",
      "Ses fils, dont Shear-Jashub et Maher-Shalal-Hash-Baz",
      "Les rois Ozias, Jotham, Ahaz et Ézéchias"
    ],
    "bibleAccount": [
      "Il reçoit une vision spectaculaire de Jéhovah au temple.",
      "Il accepte la mission prophétique malgré la difficulté de son territoire.",
      "Il transmet des avertissements aux rois de Juda.",
      "Il annonce des prophéties messianiques et concernant la restauration du peuple."
    ],
    "qualities": [
      "Disponibilité",
      "Courage",
      "Foi",
      "Clarté"
    ],
    "difficulties": [
      "Il doit annoncer des jugements à un peuple souvent peu réceptif et conseiller des rois confrontés à de graves menaces."
    ]
  },
  "jeremiah": {
    "studyFocus": "Jérémie fut appelé prophète alors qu’il était jeune et servit pendant les dernières années de Juda. Il avertit de la destruction de Jérusalem et supporta une forte opposition.",
    "lessonPoints": [
      "Étudier comment Jéhovah rassura Jérémie malgré sa jeunesse.",
      "Observer les persécutions qu’il supporta sans abandonner sa mission.",
      "Examiner ses prières personnelles et sa confiance malgré la détresse."
    ],
    "keyReading": "Jérémie 1:4-19 ; 7:1-34 ; 20:7-13 ; 26:1-24 ; 36:1-32 ; 38:1-13",
    "location": "Juda et Jérusalem, puis les régions où furent emmenés les survivants.",
    "relationshipWithJehovah": "Jérémie parlait ouvertement à Jéhovah de sa souffrance mais continuait à proclamer fidèlement ses messages.",
    "didYouKnow": "Jérémie dicta une partie de ses prophéties à Baruch, son secrétaire.",
    "jwResources": [
      {
        "title": "Jérémie — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/J%C3%A9r%C3%A9mie/"
      },
      {
        "title": "Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Jérémie était un prophète de Juda chargé d’avertir Jérusalem avant sa destruction par les Babyloniens et pendant cette période de crise.",
    "era": "VIIe-VIe siècles av. n. è.",
    "familyAndEntourage": [
      "Hilqiya, son père",
      "Barouk",
      "Les rois de Juda",
      "Les habitants de Jérusalem"
    ],
    "bibleAccount": [
      "Jéhovah le choisit avant sa naissance pour être prophète.",
      "Il annonce la destruction de Jérusalem si le peuple ne change pas.",
      "Il subit opposition, moqueries, emprisonnement et mauvais traitements.",
      "Il continue néanmoins à transmettre les messages de Jéhovah.",
      "Après la chute de Jérusalem, il reste avec les survivants."
    ],
    "qualities": [
      "Courage",
      "Persévérance",
      "Honnêteté dans la prière",
      "Fidélité"
    ],
    "difficulties": [
      "Il souffre profondément à cause de la réaction du peuple et connaît de longues périodes de solitude et d’opposition."
    ]
  },
  "ezekiel": {
    "studyFocus": "Ézéchiel est un prêtre devenu prophète parmi les exilés à Babylone. Ses visions montrent que Jéhovah reste souverain même loin de Jérusalem.",
    "lessonPoints": [
      "Il reçoit sa mission parmi les exilés près du fleuve Kebar.",
      "Il annonce la responsabilité individuelle devant Dieu.",
      "Il met en scène des messages prophétiques.",
      "Il reçoit des visions concernant la restauration du vrai culte.",
      "Son service montre la nécessité de rester fidèle dans des circonstances difficiles."
    ],
    "keyReading": "Ézékiel 1:1-28; 2:1-10; 3:16-27; 24:15-27; 37:1-14",
    "location": "Babylone, notamment près du fleuve Kebar.",
    "relationshipWithJehovah": "Ézékiel reçoit des instructions détaillées et les exécute avec fidélité, même lorsqu’elles sont personnellement douloureuses. Jéhovah l’appelle régulièrement « fils d’homme » pour lui rappeler son statut humain.",
    "didYouKnow": "Ézékiel exerçait la fonction de guetteur spirituel: il devait avertir les personnes menacées, et leur réaction déterminait leur responsabilité.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Les personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/enfants/personnages-bibliques/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      },
      {
        "title": "Étude perspicace des Écritures — Ézéchiel",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/%C3%89z%C3%A9kiel/"
      }
    ],
    "identity": "Ézékiel était un prêtre devenu prophète parmi les Juifs exilés à Babylone. Ses visions et messages ont soutenu les exilés et expliqué pourquoi Jérusalem serait jugée.",
    "era": "VIe siècle av. n. è.",
    "familyAndEntourage": [
      "Buzi, son père",
      "Sa femme",
      "Les exilés juifs à Tel-Abib",
      "Jéhovah"
    ],
    "bibleAccount": [
      "Il reçoit sa première vision au bord du Kebar.",
      "Jéhovah le nomme guetteur pour la maison d’Israël.",
      "Il accomplit plusieurs actions symboliques pour illustrer ses messages.",
      "Il annonce la chute de Jérusalem puis transmet des messages d’espérance concernant la restauration."
    ],
    "qualities": [
      "Obéissance",
      "Endurance",
      "Attention aux instructions divines"
    ],
    "difficulties": [
      "Il accomplit des actes symboliques difficiles et subit la mort de sa femme comme signe pour les exilés, tout en poursuivant sa mission."
    ]
  },
  "ezra": {
    "studyFocus": "Esdras était un prêtre et un habile copiste de la Loi de Moïse. Après l’exil à Babylone, il monta à Jérusalem avec l’autorisation du roi Artaxerxès pour renforcer le vrai culte et enseigner la Loi. Il montra une attitude remarquable d’étude, de mise en pratique et d’enseignement.",
    "lessonPoints": [
      "Esdras avait préparé son cœur à étudier la Loi de Jéhovah.",
      "Il ne se contentait pas de connaître la Loi : il la mettait en pratique puis l’enseignait.",
      "Il reconnut la main de Jéhovah dans l’autorisation royale et dans le voyage vers Jérusalem.",
      "Son exemple montre qu’un enseignant doit d’abord appliquer lui-même ce qu’il enseigne."
    ],
    "keyReading": "Esdras 7:1-28 ; 8:21-36 ; 9:1-15 ; 10:1-17",
    "location": "Babylone puis Jérusalem.",
    "relationshipWithJehovah": "Esdras avait fixé dans son cœur d’étudier la Loi de Jéhovah, de la pratiquer et de l’enseigner. Il attribua à Jéhovah la réussite de sa mission.",
    "didYouKnow": "Esdras était prêtre et copiste spécialisé dans la Loi de Moïse, et il reçut du roi de Perse une autorisation officielle pour se rendre à Jérusalem.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Les personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/enfants/personnages-bibliques/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      },
      {
        "title": "Étude perspicace des Écritures — Ezra",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Ezra/"
      }
    ],
    "identity": "Esdras était un prêtre et copiste habile de la Loi de Moïse. Il retourna à Jérusalem et contribua à rétablir le culte pur.",
    "era": "Ve siècle av. n. è.",
    "familyAndEntourage": [
      "Aaron, son ancêtre",
      "Le roi Artaxerxès",
      "Les prêtres et Lévites",
      "Les Israélites revenus d’exil"
    ],
    "bibleAccount": [
      "Il monte de Babylone à Jérusalem avec l’autorisation royale.",
      "Il s’est préparé à étudier, appliquer et enseigner la Loi de Jéhovah.",
      "Il constate les mariages avec des étrangères et exprime une profonde tristesse.",
      "Il contribue à la purification de la communauté."
    ],
    "qualities": [
      "Étude",
      "Humilité",
      "Zèle",
      "Capacité d’enseigner"
    ],
    "difficulties": [
      "Il doit affronter des problèmes graves dans le peuple, notamment des mariages contraires aux exigences de la Loi."
    ]
  },
  "zerubbabel": {
    "studyFocus": "Zorobabel était gouverneur de Juda après l’exil à Babylone et un descendant de David. Avec le grand prêtre Josué, il dirigea la reconstruction du temple de Jéhovah malgré l’opposition. Les prophètes Aggée et Zacharie l’encouragèrent dans cette tâche.",
    "lessonPoints": [
      "Zorobabel accepta une responsabilité importante dans le rétablissement du vrai culte.",
      "Il continua la reconstruction malgré l’opposition et les difficultés.",
      "Jéhovah l’encouragea par l’intermédiaire d’Aggée et de Zacharie.",
      "Son exemple montre que les obstacles humains ne rendent pas impossible l’accomplissement d’un projet soutenu par Jéhovah."
    ],
    "keyReading": "Esdras 3:1-13 ; 4:1-24 ; 5:1-17 ; 6:1-22 ; Aggée 1:1-14 ; 2:1-23 ; Zacharie 4:1-14",
    "location": "Jérusalem et Juda après le retour de Babylone.",
    "relationshipWithJehovah": "Jéhovah encouragea Zorobabel à poursuivre la reconstruction du temple et annonça qu’il achèverait le travail, non par la force humaine, mais par l’esprit de Dieu.",
    "didYouKnow": "Zorobabel est présenté dans les généalogies comme un descendant de David et apparaît dans la lignée menant au Messie.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Les personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/enfants/personnages-bibliques/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      },
      {
        "title": "Étude perspicace des Écritures — Zorobabel",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Zorobabel/"
      }
    ],
    "identity": "Zorobabel était un descendant de David qui dirigea le premier groupe important de Juifs revenus d’exil à Babylone et participa à la reconstruction du temple.",
    "era": "VIe siècle av. n. è., après 537 av. n. è.",
    "familyAndEntourage": [
      "Shéaltiel",
      "Josué le grand prêtre",
      "Aggée",
      "Zacharie",
      "Les Juifs revenus d’exil"
    ],
    "bibleAccount": [
      "Il revient à Jérusalem avec les exilés.",
      "Il participe au rétablissement de l’autel et du culte.",
      "Les travaux du temple rencontrent de l’opposition.",
      "Les prophètes Aggée et Zacharie encouragent le peuple.",
      "Le temple est finalement achevé."
    ],
    "qualities": [
      "Courage",
      "Persévérance",
      "Coopération"
    ],
    "difficulties": [
      "Il doit poursuivre les travaux malgré l’opposition et le découragement qui ralentissent la reconstruction."
    ]
  },
  "haggai": {
    "studyFocus": "Aggée était un prophète qui encouragea les Juifs revenus d’exil à reprendre la reconstruction du temple. Son message montrait que les intérêts personnels ne devaient pas passer avant le vrai culte. Ses paroles poussèrent Zorobabel, Josué et le peuple à agir.",
    "lessonPoints": [
      "Aggée aida le peuple à examiner ses priorités.",
      "Il expliqua que travailler pour son confort tout en négligeant le temple n’apportait pas la bénédiction de Jéhovah.",
      "Son message fut suivi rapidement par Zorobabel et le peuple.",
      "Il encouragea les bâtisseurs en leur rappelant que Jéhovah était avec eux."
    ],
    "keyReading": "Aggée 1:1-15 ; 2:1-23",
    "location": "Jérusalem, après le retour de l’exil à Babylone.",
    "relationshipWithJehovah": "Aggée transmit fidèlement les messages de Jéhovah et encouragea le peuple à mettre le vrai culte au premier plan.",
    "didYouKnow": "Les messages d’Aggée sont datés précisément dans son livre et couvrent une période de quelques mois pendant la deuxième année de Darius.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Les personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/enfants/personnages-bibliques/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      },
      {
        "title": "Étude perspicace des Écritures — Haggaï",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Hagga%C3%AF/"
      }
    ],
    "identity": "Aggée était un prophète qui encouragea les Juifs revenus d’exil à reprendre la reconstruction du temple de Jéhovah.",
    "era": "VIe siècle av. n. è., vers 520 av. n. è.",
    "familyAndEntourage": [
      "Zorobabel",
      "Josué le grand prêtre",
      "Zacharie",
      "Les Juifs revenus d’exil"
    ],
    "bibleAccount": [
      "Il reçoit des messages de Jéhovah concernant la reconstruction du temple.",
      "Il reproche au peuple de s’occuper de ses propres maisons alors que le temple reste en ruines.",
      "Le peuple réagit favorablement et reprend les travaux.",
      "Il transmet des encouragements concernant l’avenir du temple."
    ],
    "qualities": [
      "Courage",
      "Clarté",
      "Zèle pour le culte de Jéhovah"
    ],
    "difficulties": [
      "Il doit réveiller un peuple découragé et lui faire voir que ses priorités matérielles avaient pris le dessus sur le culte."
    ]
  },
  "zechariah": {
    "studyFocus": "Zacharie était un prophète contemporain d’Aggée qui encouragea les Juifs revenus d’exil à achever le temple. Ses visions contiennent des messages sur la restauration de Jérusalem, le rôle du grand prêtre Josué et l’action de l’esprit de Jéhovah.",
    "lessonPoints": [
      "Zacharie encouragea un peuple découragé à reprendre confiance dans le projet de reconstruction.",
      "Ses visions montrèrent que Jéhovah surveillait et soutenait son peuple.",
      "Il rappela que l’accomplissement du dessein de Dieu ne dépend pas uniquement de la puissance humaine.",
      "Ses prophéties contribuèrent à fortifier la foi des Juifs revenus d’exil."
    ],
    "keyReading": "Zacharie 1:1-21 ; 3:1-10 ; 4:1-14 ; 8:1-23 ; 9:9-17",
    "location": "Jérusalem et Juda après l’exil.",
    "relationshipWithJehovah": "Zacharie reçut des visions et des messages de Jéhovah qu’il transmit pour encourager la reconstruction et le rétablissement du vrai culte.",
    "didYouKnow": "Le livre de Zacharie contient une série de visions symboliques, notamment celle du porte-lampes et des deux oliviers en Zacharie chapitre 4.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Les personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/enfants/personnages-bibliques/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      },
      {
        "title": "Étude perspicace des Écritures — Zekaria",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Zekaria/"
      }
    ],
    "identity": "Zacharie était un prophète contemporain d’Aggée qui encouragea les Juifs revenus d’exil à achever le temple et leur donna plusieurs visions prophétiques.",
    "era": "VIe siècle av. n. è., après l’exil",
    "familyAndEntourage": [
      "Béréchia, son père",
      "Iddo, son grand-père",
      "Zorobabel",
      "Josué le grand prêtre",
      "Aggée"
    ],
    "bibleAccount": [
      "Il appelle le peuple à revenir vers Jéhovah.",
      "Il reçoit une série de visions concernant Jérusalem et le peuple.",
      "Il encourage Zorobabel et Josué dans la reconstruction du temple.",
      "Il transmet des prophéties messianiques et concernant l’avenir."
    ],
    "qualities": [
      "Courage",
      "Foi",
      "Persévérance",
      "Obéissance prophétique"
    ],
    "difficulties": [
      "Il intervient dans une période de reconstruction où le peuple est encore vulnérable et découragé."
    ]
  },
  "malachi": {
    "studyFocus": "Malachie fut un prophète qui reprit les prêtres et le peuple pour leur manque de respect envers le culte de Jéhovah. Il dénonça notamment les sacrifices de mauvaise qualité et l’infidélité conjugale, tout en annonçant la venue d’un messager préparant le chemin.",
    "lessonPoints": [
      "Malachie dénonça une adoration devenue mécanique et irrespectueuse.",
      "Il rappela aux prêtres leur responsabilité d’enseigner correctement la Loi.",
      "Il encouragea la fidélité conjugale et la loyauté envers Jéhovah.",
      "Son livre se termine par l’annonce d’un messager et du « jour de Jéhovah »."
    ],
    "keyReading": "Malachie 1:1-14 ; 2:1-17 ; 3:1-18 ; 4:1-6",
    "location": "Juda et Jérusalem après l’exil.",
    "relationshipWithJehovah": "Malachie défendit le nom de Jéhovah et invita le peuple à revenir vers lui par une adoration sincère et fidèle.",
    "didYouKnow": "Jésus et les Évangiles relient la prophétie de Malachie concernant le messager à Jean le Baptiseur.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Les personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/enfants/personnages-bibliques/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      },
      {
        "title": "Étude perspicace des Écritures — Malachie",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Malachie/"
      }
    ],
    "identity": "Malachie était un prophète qui reprit les prêtres et le peuple de Juda pour leur manque de respect envers le culte de Jéhovah.",
    "era": "Ve siècle av. n. è., après la reconstruction du temple",
    "familyAndEntourage": [
      "Les prêtres de Juda",
      "Le peuple de Juda",
      "Jéhovah"
    ],
    "bibleAccount": [
      "Il transmet plusieurs dialogues entre Jéhovah et son peuple.",
      "Il dénonce les sacrifices défectueux et le manque de respect des prêtres.",
      "Il reproche au peuple de retenir les contributions destinées au culte.",
      "Il annonce l’arrivée d’un messager préparant le chemin."
    ],
    "qualities": [
      "Courage",
      "Fidélité au culte pur",
      "Franchise"
    ],
    "difficulties": [
      "Il doit corriger une communauté dont le culte s’est installé dans la routine et le manque de respect."
    ]
  },
  "gamaliel": {
    "studyFocus": "Gamaliel était un Pharisien respecté et un enseignant de la Loi. Il intervint devant le Sanhédrin lorsque les apôtres furent menacés et conseilla de ne pas agir précipitamment contre eux. Son conseil donna du temps aux apôtres, même si le récit ne présente pas Gamaliel comme un disciple chrétien.",
    "lessonPoints": [
      "Gamaliel était reconnu comme enseignant de la Loi parmi les Juifs.",
      "Il recommanda la prudence plutôt qu’une décision précipitée contre les apôtres.",
      "Son raisonnement montrait qu’il savait tenir compte de l’incertitude avant de juger une affaire.",
      "Paul indique ailleurs avoir été formé aux pieds de Gamaliel."
    ],
    "keyReading": "Actes 5:33-42 ; 22:3",
    "location": "Jérusalem.",
    "relationshipWithJehovah": "Le récit ne dit pas que Gamaliel devint chrétien. Il montre toutefois qu’il intervint pour éviter une décision précipitée contre les disciples de Jésus.",
    "didYouKnow": "Actes 22:3 indique que Paul avait été instruit aux pieds de Gamaliel selon la rigueur de la Loi ancestrale.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Les personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/enfants/personnages-bibliques/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      },
      {
        "title": "Étude perspicace des Écritures — Gamaliel",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Gamaliel/"
      }
    ],
    "identity": "Gamaliel était un pharisien et enseignant de la Loi très respecté qui intervint lorsque les apôtres furent amenés devant le Sanhédrin.",
    "era": "Ier siècle de n. è.",
    "familyAndEntourage": [
      "Paul, qui fut formé à ses pieds",
      "Les membres du Sanhédrin",
      "Les apôtres"
    ],
    "bibleAccount": [
      "Il demande que les apôtres soient sortis de la salle.",
      "Il rappelle des exemples de mouvements humains disparus après la mort de leurs chefs.",
      "Il conseille de laisser les apôtres tranquilles, en expliquant que si leur œuvre vient de Dieu, elle ne pourra pas être renversée."
    ],
    "qualities": [
      "Prudence",
      "Calme",
      "Capacité à raisonner avant d’agir"
    ],
    "difficulties": [
      "Il reste membre du courant pharisien et le récit ne dit pas qu’il soit devenu chrétien."
    ]
  },
  "apollos": {
    "studyFocus": "Apollos était un Juif originaire d’Alexandrie, éloquent et très versé dans les Écritures. Il connaissait le baptême de Jean et enseignait avec zèle, mais Priscille et Aquila lui expliquèrent plus exactement la voie de Dieu. Il devint ensuite un prédicateur efficace qui aidait les croyants.",
    "lessonPoints": [
      "Apollos avait déjà une excellente connaissance des Écritures avant de recevoir des explications supplémentaires.",
      "Il accepta humblement l’aide de Priscille et Aquila.",
      "Il utilisa ses capacités oratoires pour démontrer publiquement, à partir des Écritures, que Jésus est le Christ.",
      "Paul le cite comme un collaborateur dans l’activité chrétienne, tout en rappelant que Dieu fait croître."
    ],
    "keyReading": "Actes 18:24-28 ; 19:1-7 ; 1 Corinthiens 1:10-13 ; 3:4-9,21-23 ; Tite 3:13",
    "location": "Alexandrie, Éphèse, puis probablement Corinthe et d’autres régions du monde méditerranéen.",
    "relationshipWithJehovah": "Apollos accepta d’approfondir sa compréhension de la voie de Dieu et mit ensuite ses capacités au service de la prédication.",
    "didYouKnow": "Apollos était originaire d’Alexandrie, grand centre intellectuel de l’Égypte antique, et Actes le décrit comme un homme éloquent et puissant dans les Écritures.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Les personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/enfants/personnages-bibliques/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      },
      {
        "title": "Étude perspicace des Écritures — Apollos",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Apollos/"
      }
    ],
    "identity": "Apollos était un Juif instruit d’Alexandrie, éloquent et fervent, qui enseignait Jésus avec exactitude mais ne connaissait initialement que le baptême de Jean.",
    "era": "Ier siècle de n. è.",
    "familyAndEntourage": [
      "Priscille",
      "Aquila",
      "Paul",
      "Les disciples d’Éphèse",
      "Les Corinthiens"
    ],
    "bibleAccount": [
      "Il parle avec assurance dans la synagogue d’Éphèse.",
      "Priscille et Aquila lui expliquent plus exactement la voie de Dieu.",
      "Il va en Achaïe et aide beaucoup les croyants par ses arguments bibliques.",
      "Il réfute publiquement les opposants en démontrant que Jésus est le Christ."
    ],
    "qualities": [
      "Éloquence",
      "Ferveur",
      "Humilité",
      "Capacité à apprendre"
    ],
    "difficulties": [
      "Sa compréhension initiale était incomplète; il accepte néanmoins d’être mieux instruit et continue ensuite son ministère."
    ]
  },
  "silas": {
    "studyFocus": "Silas, appelé aussi Silvain dans les lettres chrétiennes, était un chrétien de premier plan à Jérusalem et un compagnon de Paul dans ses voyages missionnaires. Après avoir été emprisonné à Philippes avec Paul, il continua à participer à l’œuvre chrétienne.",
    "lessonPoints": [
      "Silas fut choisi pour accompagner Paul après avoir été recommandé par les responsables de Jérusalem.",
      "Il accepta les difficultés liées aux voyages et à la prédication.",
      "À Philippes, il pria et chanta des louanges à Dieu malgré les coups et la prison.",
      "Il continua ensuite à servir comme collaborateur de Paul et comme enseignant."
    ],
    "keyReading": "Actes 15:22-40 ; 16:16-40 ; 17:1-15 ; 1 Thessaloniciens 1:1 ; 2 Thessaloniciens 1:1 ; 1 Pierre 5:12",
    "location": "Jérusalem, Antioche de Syrie, Macédoine et Grèce.",
    "relationshipWithJehovah": "Silas continua à louer Dieu dans des circonstances pénibles et participa fidèlement à la prédication avec Paul.",
    "didYouKnow": "Silas est également appelé Silvain dans les lettres chrétiennes, notamment en 1 Pierre 5:12.",
    "jwResources": [
      {
        "title": "Silas — Étude perspicace",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      },
      {
        "title": "Étude perspicace des Écritures — Silas",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Silas/"
      }
    ],
    "identity": "Silas, aussi appelé Silvain dans les lettres chrétiennes, était un membre éminent de la congrégation de Jérusalem, prophète et compagnon de voyage de Paul.",
    "era": "Premières décennies de la congrégation chrétienne, surtout vers 49-50 de n. è. et après",
    "familyAndEntourage": [
      "Paul",
      "Timothée",
      "Pierre",
      "La congrégation de Jérusalem"
    ],
    "bibleAccount": [
      "Il est choisi par la congrégation de Jérusalem pour accompagner Paul et Barnabé.",
      "Il participe au deuxième voyage missionnaire de Paul.",
      "À Philippes, il est battu et emprisonné avec Paul.",
      "Il reste avec Timothée à Bérée lorsque Paul part pour Athènes.",
      "Il collabore ensuite avec Paul à Corinthe et apparaît comme « Silvain » dans les lettres."
    ],
    "qualities": [
      "Courage",
      "Fidélité",
      "Endurance",
      "Esprit de collaboration"
    ],
    "difficulties": [
      "Il subit des coups de verges et l’emprisonnement à Philippes à cause de sa prédication."
    ]
  },
  "onesimus": {
    "studyFocus": "Onésime était un esclave associé à Philémon. Après avoir rencontré Paul, il devint chrétien et Paul demanda à Philémon de l’accueillir non plus simplement comme un esclave, mais comme un frère chrétien. La lettre à Philémon met en avant la transformation que la bonne nouvelle peut produire dans les relations.",
    "lessonPoints": [
      "Onésime changea de vie après être devenu chrétien.",
      "Paul prit personnellement intérêt à sa situation et intercéda en sa faveur.",
      "La nouvelle relation spirituelle entre Onésime et Philémon dépassait leur ancienne relation sociale.",
      "Son histoire montre que la foi chrétienne peut transformer la manière de considérer les autres."
    ],
    "keyReading": "Philémon 1-25 ; Colossiens 4:7-9",
    "location": "Probablement à Rome lorsque Paul écrivit à Philémon, puis retour vers Colosses.",
    "relationshipWithJehovah": "Onésime devint chrétien grâce au ministère de Paul et fut considéré comme un frère dans la congrégation.",
    "didYouKnow": "Paul qualifie Onésime de « mon enfant » dans la foi et de frère bien-aimé dans sa lettre à Philémon.",
    "jwResources": [
      {
        "title": "Onésime — Étude perspicace",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      },
      {
        "title": "Étude perspicace des Écritures — Onésime",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/On%C3%A9sime/"
      }
    ],
    "identity": "Onésime était l’esclave de Philémon qui s’enfuit de sa maison de Colosses, rencontra Paul à Rome et devint chrétien. Paul le renvoya ensuite auprès de Philémon comme frère chrétien.",
    "era": "Vers 60-61 de n. è., pendant la détention de Paul à Rome",
    "familyAndEntourage": [
      "Philémon",
      "Apphia",
      "Archippe",
      "Paul"
    ],
    "bibleAccount": [
      "Il appartenait à la maisonnée de Philémon à Colosses.",
      "Il s’enfuit et se retrouva à Rome.",
      "Paul l’aide à devenir chrétien.",
      "Paul l’envoie de nouveau vers Philémon et lui demande de l’accueillir comme un frère."
    ],
    "qualities": [
      "Transformation",
      "Foi",
      "Disposition à réparer une situation difficile"
    ],
    "difficulties": [
      "Il avait fui son maître et il est possible qu’il lui ait aussi causé un préjudice matériel; il devait ensuite retourner vers lui."
    ]
  },
  "philemon": {
    "studyFocus": "Philémon était un chrétien de Colosses dont la maison servait de lieu de réunion pour la congrégation. Paul lui écrivit au sujet d’Onésime et lui demanda de l’accueillir avec affection. Philémon avait lui-même manifesté son amour pour les saints.",
    "lessonPoints": [
      "Philémon était connu pour son amour et sa foi envers Jésus et les autres chrétiens.",
      "Il mettait sa maison à disposition de la congrégation.",
      "Paul lui demanda de privilégier l’amour chrétien dans une situation délicate.",
      "Sa lettre montre comment un problème personnel pouvait être traité avec tact et confiance."
    ],
    "keyReading": "Philémon 1-25 ; Colossiens 4:9",
    "location": "Colosses, en Phrygie.",
    "relationshipWithJehovah": "Paul pouvait faire appel à la foi et à l’amour de Philémon parce que ceux-ci étaient déjà manifestes dans sa conduite chrétienne.",
    "didYouKnow": "La congrégation se réunissait dans la maison de Philémon, ce qui montre qu’il mettait concrètement ses ressources au service des autres.",
    "jwResources": [
      {
        "title": "Philémon — Étude perspicace",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      },
      {
        "title": "Étude perspicace des Écritures — Philémon",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Phil%C3%A9mon/"
      }
    ],
    "identity": "Philémon était un chrétien de Colosses, ami et collaborateur de Paul, chez qui une congrégation se réunissait. Paul lui écrivit au sujet d’Onésime.",
    "era": "Vers 60-61 de n. è.",
    "familyAndEntourage": [
      "Apphia",
      "Archippe",
      "Onésime",
      "Paul",
      "La congrégation réunie chez lui"
    ],
    "bibleAccount": [
      "Il est félicité pour son amour et sa foi.",
      "Il met sa maison à disposition pour les réunions chrétiennes.",
      "Paul lui écrit pour lui demander d’accueillir Onésime avec amour.",
      "Paul lui fait confiance pour faire davantage que ce qui est demandé."
    ],
    "qualities": [
      "Amour",
      "Foi",
      "Hospitalité",
      "Générosité"
    ],
    "difficulties": [
      "Il devait accueillir de nouveau un esclave qui s’était enfui et qui avait peut-être causé un préjudice matériel."
    ]
  },
  "titus": {
    "studyFocus": "Tite était un collaborateur grec de Paul à qui l’apôtre confia des responsabilités importantes. Paul l’envoya notamment organiser les congrégations de Crète et établir des hommes qualifiés comme anciens. Tite devait aussi enseigner une conduite chrétienne saine.",
    "lessonPoints": [
      "Tite était un collaborateur fiable auquel Paul pouvait confier des missions difficiles.",
      "Il reçut la responsabilité d’organiser les congrégations de Crète.",
      "Il devait enseigner les différentes catégories de croyants à vivre en accord avec la saine doctrine.",
      "Paul l’encouragea à rester courageux et équilibré dans son service."
    ],
    "keyReading": "Galates 2:1-3 ; 2 Corinthiens 7:6-16 ; 8:16-24 ; Tite 1:1-16 ; 2:1-15 ; 3:1-15",
    "location": "Crète et régions de l’est de la Méditerranée.",
    "relationshipWithJehovah": "Tite servait Dieu aux côtés de Paul et reçut la responsabilité d’aider les congrégations à rester organisées et spirituellement saines.",
    "didYouKnow": "Contrairement à Timothée, Tite n’avait pas été obligé de se faire circoncire pour accompagner Paul, ce qui illustre le rôle qu’il joua dans la question de la circoncision des non-Juifs.",
    "jwResources": [
      {
        "title": "Tite — Étude perspicace",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      },
      {
        "title": "Étude perspicace des Écritures — Tite",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Tite/"
      }
    ],
    "identity": "Tite était un collaborateur et proche associé de Paul, chrétien d’origine grecque, à qui Paul confia des responsabilités importantes dans plusieurs congrégations.",
    "era": "Premières décennies de la congrégation chrétienne",
    "familyAndEntourage": [
      "Paul",
      "Les congrégations de Crète",
      "Les frères de Corinthe"
    ],
    "bibleAccount": [
      "Il accompagne Paul dans certaines activités missionnaires.",
      "Paul l’envoie à Corinthe pour aider à régler des difficultés et organiser la collecte.",
      "Paul le laisse en Crète pour mettre de l’ordre dans les congrégations et nommer des anciens.",
      "Paul lui donne des instructions détaillées sur l’enseignement et la conduite chrétienne."
    ],
    "qualities": [
      "Fiabilité",
      "Courage",
      "Sens des responsabilités",
      "Zèle pour le service"
    ],
    "difficulties": [
      "Il devait faire face à des difficultés doctrinales et morales dans les congrégations de Crète."
    ]
  },
  "eutychus": {
    "studyFocus": "Eutyche était un jeune homme de Troas qui écoutait Paul parler lors d’une réunion prolongée. Assis à une fenêtre, il s’endormit profondément et tomba du troisième étage. Paul le prit dans ses bras et il fut retrouvé vivant, ce qui réconforta profondément les croyants.",
    "lessonPoints": [
      "Eutyche était présent à une réunion chrétienne malgré l’heure tardive.",
      "Son accident montre concrètement les conditions de réunion des premiers chrétiens.",
      "Paul interrompit son discours pour s’occuper de lui et rassurer les frères.",
      "Après l’événement, les croyants furent particulièrement consolés."
    ],
    "keyReading": "Actes 20:7-12",
    "location": "Troas, dans une maison où les chrétiens étaient réunis.",
    "relationshipWithJehovah": "Le récit rapporte un événement miraculeux qui renforça la foi et consola la congrégation réunie à Troas.",
    "didYouKnow": "Eutyche était assis à une fenêtre au troisième étage lorsque, profondément endormi, il tomba pendant le long discours de Paul.",
    "jwResources": [
      {
        "title": "Eutyche — Étude perspicace",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      },
      {
        "title": "Étude perspicace des Écritures — Eutyche",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Eutyche/"
      }
    ],
    "identity": "Jeune homme de Troas — Eutyche est connu pour l’incident survenu pendant un long discours de Paul à Troas.",
    "era": "Actes",
    "familyAndEntourage": [
      "Paul",
      "Les disciples de Troas"
    ],
    "bibleAccount": [
      "Assiste à une réunion chrétienne à Troas.",
      "Tombe d’une fenêtre pendant le discours de Paul.",
      "Est ensuite rendu à la vie selon le récit des Actes."
    ],
    "qualities": [
      "Persévérance dans l’écoute"
    ],
    "difficulties": []
  },
  "martha": {
    "studyFocus": "Marthe était la sœur de Marie et de Lazare et vivait à Béthanie. Elle accueillit Jésus chez elle et fut ensuite témoin de la résurrection de Lazare. Elle était active et hospitalière, mais Jésus l’aida à comprendre que l’attention spirituelle ne devait pas être éclipsée par les nombreuses tâches.",
    "lessonPoints": [
      "Marthe accueillit Jésus et ses disciples avec hospitalité.",
      "Elle pouvait être très préoccupée par les tâches nécessaires pour recevoir ses invités.",
      "Jésus lui rappela avec douceur que Marie avait choisi une bonne part en l’écoutant.",
      "Plus tard, Marthe manifesta une foi remarquable en Jésus avant la résurrection de Lazare."
    ],
    "keyReading": "Luc 10:38-42 ; Jean 11:1-46 ; 12:1-8",
    "location": "Béthanie, près de Jérusalem.",
    "relationshipWithJehovah": "Marthe exprima sa foi en Jésus comme le Christ et le Fils de Dieu et croyait à la résurrection au dernier jour.",
    "didYouKnow": "Marthe fut l’une des personnes qui affirmèrent leur foi en Jésus avant qu’il ne ressuscite Lazare, son frère.",
    "jwResources": [
      {
        "title": "Marthe — Étude perspicace",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Marthe était la sœur de Lazare et de Marie de Béthanie. Elle accueillit Jésus dans sa maison et fut témoin de la résurrection de son frère.",
    "era": "Ministère terrestre de Jésus, vers 29-33 de n. è.",
    "familyAndEntourage": [
      "Lazare",
      "Marie de Béthanie",
      "Jésus",
      "Les disciples"
    ],
    "bibleAccount": [
      "Elle reçoit Jésus chez elle et s’occupe du service.",
      "Elle demande à Jésus d’intervenir auprès de Marie, puis reçoit de lui une leçon sur ce qui est réellement nécessaire.",
      "Après la mort de Lazare, elle va à la rencontre de Jésus.",
      "Elle exprime sa foi en lui comme le Christ, le Fils de Dieu."
    ],
    "qualities": [
      "Hospitalité",
      "Foi",
      "Franchise",
      "Service"
    ],
    "difficulties": [
      "Son souci des nombreuses tâches la conduit à perdre momentanément de vue la priorité de l’enseignement spirituel."
    ]
  },
  "mary_bethany": {
    "studyFocus": "Marie de Béthanie était la sœur de Marthe et de Lazare. Elle est surtout connue pour s’être assise aux pieds de Jésus pour écouter son enseignement et pour avoir répandu sur lui un parfum coûteux peu avant sa mort. Jésus défendit son geste et souligna sa valeur.",
    "lessonPoints": [
      "Marie accordait une grande priorité à l’écoute de l’enseignement de Jésus.",
      "Elle manifesta son amour et sa reconnaissance par un geste coûteux.",
      "Jésus apprécia son discernement et défendit son geste contre les critiques.",
      "Son exemple montre qu’un acte d’adoration peut avoir une grande valeur aux yeux de Jésus."
    ],
    "keyReading": "Luc 10:38-42 ; Jean 11:1-45 ; 12:1-8 ; Matthieu 26:6-13",
    "location": "Béthanie, près de Jérusalem.",
    "relationshipWithJehovah": "Marie manifesta sa foi envers Jésus et son profond attachement à lui; son geste fut présenté comme ayant une valeur spirituelle durable.",
    "didYouKnow": "Le parfum utilisé par Marie était du nard pur, très coûteux, et Jean indique que sa valeur correspondait à environ 300 deniers.",
    "jwResources": [
      {
        "title": "Marche courageusement avec Dieu — Marie de Béthanie",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/debuts-du-christianisme/marie-soeur-de-lazare-elle-a-fait-ce-quelle-a-pu/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Marie de Béthanie — Étude perspicace",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      }
    ],
    "identity": "Marie de Béthanie était la sœur de Marthe et de Lazare et une amie proche de Jésus. Elle manifesta une grande foi et une profonde reconnaissance envers lui.",
    "era": "Ministère terrestre de Jésus",
    "familyAndEntourage": [
      "Marthe",
      "Lazare",
      "Jésus"
    ],
    "bibleAccount": [
      "Elle écoute Jésus alors que Marthe s’occupe du service.",
      "À la mort de Lazare, elle va à la rencontre de Jésus et exprime sa peine.",
      "Peu avant la mort de Jésus, elle verse sur ses pieds un parfum précieux et les essuie avec ses cheveux."
    ],
    "qualities": [
      "Foi",
      "Attention aux enseignements de Jésus",
      "Générosité",
      "Reconnaissance"
    ],
    "difficulties": [
      "Elle connaît le deuil de son frère et doit accepter que Jésus ne l’ait pas empêché de mourir immédiatement."
    ]
  },
  "joseph_arimathea": {
    "studyFocus": "Joseph d’Arimathie était un homme riche et membre respecté du Sanhédrin qui attendait le Royaume de Dieu. Il ne soutint pas la décision du conseil concernant Jésus et, après la mort de Jésus, demanda son corps à Pilate et le plaça dans un tombeau neuf.",
    "lessonPoints": [
      "Joseph attendait le Royaume de Dieu alors qu’il faisait partie d’un milieu religieux influent.",
      "Il ne consentit pas à la décision prise contre Jésus.",
      "Il eut le courage de demander le corps de Jésus à Pilate.",
      "Il utilisa son propre tombeau pour honorer Jésus après son exécution."
    ],
    "keyReading": "Matthieu 27:57-61 ; Marc 15:42-47 ; Luc 23:50-56 ; Jean 19:38-42",
    "location": "Jérusalem et Arimathie, ville d’origine de Joseph.",
    "relationshipWithJehovah": "Joseph est présenté comme un homme juste qui attendait le Royaume de Dieu et qui manifesta son attachement à Jésus au moment où celui-ci mourut.",
    "didYouKnow": "Le tombeau de Joseph était neuf et avait été taillé dans le roc; il n’avait encore servi à personne.",
    "jwResources": [
      {
        "title": "Joseph d’Arimathie — Étude perspicace",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Joseph d’Arimathie était un homme riche, membre respecté du Sanhédrin et disciple de Jésus qui demanda courageusement le corps de Jésus après sa mort.",
    "era": "Vers 33 de n. è.",
    "familyAndEntourage": [
      "Jésus",
      "Pilate",
      "Nicodème",
      "Les membres du Sanhédrin"
    ],
    "bibleAccount": [
      "Il attendait le Royaume de Dieu.",
      "Il ne consent pas à la décision du Sanhédrin contre Jésus.",
      "Après la mort de Jésus, il demande son corps à Pilate.",
      "Il le dépose dans un tombeau neuf qui lui appartenait."
    ],
    "qualities": [
      "Courage",
      "Respect pour Jésus",
      "Générosité",
      "Discrétion"
    ],
    "difficulties": [
      "Son statut au Sanhédrin pouvait rendre risqué le fait de se déclarer publiquement disciple au moment de la mort de Jésus."
    ]
  },
  "jairus": {
    "studyFocus": "Jaïrus était un président de synagogue dont la fille était gravement malade. Malgré la pression et les mauvaises nouvelles, il accepta l’aide de Jésus. Jésus ressuscita ensuite la jeune fille, montrant son pouvoir sur la mort.",
    "lessonPoints": [
      "Jaïrus surmonta sa position sociale pour demander humblement l’aide de Jésus.",
      "Il continua à avancer avec Jésus malgré la nouvelle du décès de sa fille.",
      "Jésus lui demanda de ne pas avoir peur mais de manifester de la foi.",
      "La résurrection de sa fille apporta une grande joie à la famille."
    ],
    "keyReading": "Matthieu 9:18-26 ; Marc 5:21-43 ; Luc 8:40-56",
    "location": "Galilée, notamment Capharnaüm et ses environs.",
    "relationshipWithJehovah": "Jaïrus plaça sa confiance dans Jésus et fut témoin d’un miracle qui démontrait le pouvoir donné par Dieu à son Fils.",
    "didYouKnow": "Jésus ne permit qu’à Pierre, Jacques et Jean ainsi qu’aux parents de la jeune fille d’assister à sa résurrection.",
    "jwResources": [
      {
        "title": "Jaïrus — Étude perspicace",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Jaïrus était un responsable de synagogue dont la fille de 12 ans tomba gravement malade. Il supplia Jésus de venir la sauver.",
    "era": "Vers 31-32 de n. è.",
    "familyAndEntourage": [
      "Sa fille unique",
      "Sa femme",
      "Jésus",
      "Pierre, Jacques et Jean"
    ],
    "bibleAccount": [
      "Il tombe aux pieds de Jésus pour demander de l’aide.",
      "Pendant le trajet, on annonce la mort de sa fille.",
      "Jésus l’encourage à ne pas avoir peur mais à exercer la foi.",
      "Jésus entre dans la maison et ressuscite la jeune fille."
    ],
    "qualities": [
      "Foi",
      "Humilité",
      "Persévérance"
    ],
    "difficulties": [
      "Il subit la peur et le chagrin de voir sa fille mourir avant même l’arrivée de Jésus."
    ]
  },
  "thomas": {
    "studyFocus": "Thomas était l’un des douze apôtres de Jésus. Il est souvent associé à son doute concernant la résurrection, mais le récit montre aussi son attachement courageux à Jésus et sa déclaration de foi lorsqu’il vit Jésus ressuscité.",
    "lessonPoints": [
      "Thomas voulait des preuves concrètes avant d’accepter le témoignage des autres disciples.",
      "Il avait auparavant manifesté sa disposition à mourir avec Jésus.",
      "Jésus lui donna avec patience les éléments dont il avait besoin pour fortifier sa foi.",
      "Thomas finit par reconnaître Jésus comme son Seigneur et son Dieu."
    ],
    "keyReading": "Jean 11:7-16 ; 14:1-7 ; 20:24-29 ; 21:1-2",
    "location": "Galilée et Jérusalem.",
    "relationshipWithJehovah": "Thomas progressa d’une foi hésitante à une déclaration personnelle de foi envers Jésus ressuscité.",
    "didYouKnow": "Jean 20:28 rapporte la déclaration de Thomas à Jésus : « Mon Seigneur et mon Dieu ! ».",
    "jwResources": [
      {
        "title": "Thomas — Étude perspicace",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Thomas, appelé Didyme, était l’un des douze apôtres. Il est surtout connu pour avoir voulu des preuves de la résurrection de Jésus avant d’y croire pleinement.",
    "era": "Ministère de Jésus et premières années de la congrégation",
    "familyAndEntourage": [
      "Les onze autres apôtres",
      "Jésus",
      "Lazare et les disciples présents à Béthanie"
    ],
    "bibleAccount": [
      "Il exprime sa volonté d’accompagner Jésus en Judée malgré le danger.",
      "Après la mort de Lazare, il parle comme quelqu’un prêt à mourir avec Jésus.",
      "Après la résurrection, il refuse d’abord de croire le témoignage des autres disciples sans voir les marques des blessures.",
      "Jésus lui apparaît ensuite et Thomas exprime sa foi."
    ],
    "qualities": [
      "Loyauté",
      "Franchise",
      "Courage",
      "Foi retrouvée"
    ],
    "difficulties": [
      "Il a eu du mal à croire au témoignage des autres disciples concernant la résurrection et a demandé des preuves."
    ]
  },
  "lydia": {
    "studyFocus": "Lydie a accepté avec empressement le message chrétien, puis a manifesté son hospitalité envers Paul et ses compagnons.",
    "lessonPoints": [
      "Réceptivité : Jéhovah lui a ouvert le cœur pour qu’elle prête attention au message.",
      "Hospitalité : elle a insisté pour accueillir les serviteurs de Dieu chez elle.",
      "Engagement : sa maison est devenue un lieu où les chrétiens pouvaient se réunir."
    ],
    "keyReading": "Actes 16:11-15,40",
    "location": "Philippes, en Macédoine.",
    "relationshipWithJehovah": "Le récit dit que Jéhovah ouvrit son cœur pour qu’elle accepte le message. Après son baptême, elle manifesta immédiatement sa foi par l’hospitalité et le soutien concret aux prédicateurs.",
    "didYouKnow": "Lydie vendait de la pourpre et venait de Thyatire, une ville connue pour ses activités textiles. La Bible indique qu’elle avait une maisonnée, sans préciser si elle était mariée ou veuve.",
    "jwResources": [
      {
        "title": "Lydie — Étude perspicace",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      },
      {
        "title": "Étude perspicace des Écritures — Lydie",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Lydie/"
      }
    ],
    "identity": "Lydie était une commerçante de Thyatire qui s’installa à Philippes. Elle fut la première personne de Macédoine à accepter la bonne nouvelle, puis elle accueillit Paul et ses compagnons chez elle.",
    "era": "Vers 50 de n. è., lors du deuxième voyage missionnaire de Paul",
    "familyAndEntourage": [
      "Paul",
      "Silas",
      "Timothée",
      "Luc",
      "Les membres de sa maisonnée"
    ],
    "bibleAccount": [
      "Elle se trouvait à Philippes avec d’autres femmes pour prier près d’un fleuve.",
      "Jéhovah ouvrit son cœur pour qu’elle prête attention aux enseignements de Paul.",
      "Elle et sa maisonnée furent baptisées.",
      "Elle insista pour accueillir Paul et ses compagnons chez elle."
    ],
    "qualities": [
      "Hospitalité",
      "Réceptivité",
      "Générosité",
      "Détermination"
    ],
    "difficulties": [
      "Elle devait faire des choix personnels et religieux dans un environnement où la prédication chrétienne était nouvelle."
    ]
  },
  "tabitha": {
    "studyFocus": "Tabitha, appelée Dorcas, était connue pour ses bonnes actions et sa générosité envers les personnes dans le besoin.",
    "lessonPoints": [
      "Générosité : elle fabriquait des vêtements et faisait beaucoup de bonnes œuvres.",
      "Amour concret : son aide bénéficiait particulièrement aux veuves.",
      "Persévérance dans le bien : son exemple montre que les actes de bonté peuvent laisser une profonde impression."
    ],
    "keyReading": "Actes 9:36-43",
    "location": "Joppé.",
    "relationshipWithJehovah": "Son attachement au christianisme se voyait dans ses actions répétées en faveur des autres. Sa résurrection par l’intermédiaire de Pierre a aussi donné un puissant témoignage sur la puissance de Dieu.",
    "didYouKnow": "Tabitha est le seul personnage du Nouveau Testament dont le nom araméen et la forme grecque, Dorcas, sont donnés ensemble dans le récit.",
    "jwResources": [
      {
        "title": "Tabitha — Étude perspicace",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      },
      {
        "title": "Étude perspicace des Écritures — Tabitha",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Tabitha/"
      }
    ],
    "identity": "Tabitha, appelée Dorcas en grec, était une disciple de Joppé connue pour ses nombreuses bonnes actions et ses dons aux personnes dans le besoin.",
    "era": "Premières années de la congrégation chrétienne, avant la visite de Pierre à Joppé",
    "familyAndEntourage": [
      "Pierre",
      "Les veuves de Joppé",
      "Les disciples de Joppé"
    ],
    "bibleAccount": [
      "Elle était très active dans les bonnes œuvres et les dons de miséricorde.",
      "Elle tombe malade et meurt.",
      "Pierre est appelé depuis Lydda.",
      "Après avoir prié, Pierre la ramène à la vie.",
      "La nouvelle se répand dans toute la ville et beaucoup deviennent croyants."
    ],
    "qualities": [
      "Générosité",
      "Compassion",
      "Zèle pour les bonnes œuvres"
    ],
    "difficulties": [
      "Sa mort a causé un profond chagrin parmi les disciples qu’elle avait aidés."
    ]
  },
  "stephen": {
    "studyFocus": "Étienne a défendu courageusement la vérité et a continué à témoigner malgré une opposition violente.",
    "lessonPoints": [
      "Courage : il a parlé avec franchise devant le Sanhédrin.",
      "Connaissance biblique : son discours montrait une bonne compréhension de l’histoire du peuple de Dieu.",
      "Pardon : au moment de mourir, il a demandé à Jéhovah de ne pas tenir ce péché contre ses opposants."
    ],
    "keyReading": "Actes 6:1-15; 7:1-60; 8:1-3",
    "location": "Jérusalem.",
    "relationshipWithJehovah": "Étienne est présenté comme plein de foi et d’esprit saint. Même au moment de mourir, il prie Jéhovah et demande qu’il ne tienne pas compte du péché de ses meurtriers.",
    "didYouKnow": "Étienne est le premier disciple dont le martyre est raconté dans la Bible. Parmi ceux qui approuvaient son meurtre se trouvait Saul, qui deviendra ensuite l’apôtre Paul.",
    "jwResources": [
      {
        "title": "Marche courageusement avec Dieu — Étienne",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/debuts-du-christianisme/etienne-plein-de-foi-et-desprit-saint/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Étienne — Étude perspicace",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Étude perspicace des Écritures — Étienne",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/%C3%89tienne/"
      }
    ],
    "identity": "Étienne était un homme plein de foi et d’esprit saint, choisi avec six autres hommes pour s’occuper de la distribution quotidienne de nourriture dans la congrégation de Jérusalem. Il devint ensuite un prédicateur énergique et le premier chrétien dont la Bible rapporte le martyre.",
    "era": "Vers 33-36 de n. è., peu après la Pentecôte",
    "familyAndEntourage": [
      "Les apôtres",
      "Philippe et les six autres hommes choisis pour le service",
      "Saul de Tarse",
      "Les membres du Sanhédrin"
    ],
    "bibleAccount": [
      "Il est choisi pour une responsabilité de service dans la congrégation.",
      "Il accomplit de grands signes et parle avec sagesse.",
      "Des opposants l’accusent devant le Sanhédrin.",
      "Il prononce un long discours retraçant l’histoire d’Israël et dénonçant l’infidélité des opposants.",
      "Il voit en vision Jésus debout à la droite de Dieu puis est lapidé."
    ],
    "qualities": [
      "Courage",
      "Sagesse",
      "Foi",
      "Maîtrise de soi",
      "Zèle"
    ],
    "difficulties": [
      "Il est faussement accusé puis mis à mort par lapidation à cause de son témoignage."
    ]
  },
  "ananias_damascus": {
    "studyFocus": "Ananias de Damas a accepté courageusement de rencontrer Saul malgré ce qu’il savait de son passé, parce qu’il faisait confiance aux instructions de Jéhovah.",
    "lessonPoints": [
      "Courage : il a obéi malgré ses craintes concernant Saul.",
      "Obéissance : il a fait exactement ce que Jésus lui avait demandé.",
      "Amour fraternel : il a appelé Saul « frère » et l’a aidé à commencer sa nouvelle vie chrétienne."
    ],
    "keyReading": "Actes 9:10-19; 22:12-16",
    "location": "Damas.",
    "relationshipWithJehovah": "Ananias exprime honnêtement ses craintes mais obéit à Jésus. Sa confiance dans les instructions reçues lui permet de participer à un tournant majeur dans la vie de Saul.",
    "didYouKnow": "Jésus choisit précisément Ananias, un disciple de Damas, plutôt qu’un apôtre de Jérusalem pour accueillir Saul après sa conversion.",
    "jwResources": [
      {
        "title": "Ananias de Damas — Étude perspicace",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Ananias de Damas était un disciple fidèle à qui Jésus ressuscité confia la mission de rencontrer Saul de Tarse, alors persécuteur des chrétiens.",
    "era": "Vers 36 de n. è., peu après la conversion de Saul",
    "familyAndEntourage": [
      "Saul de Tarse",
      "Les disciples de Damas",
      "Jésus"
    ],
    "bibleAccount": [
      "Jésus lui apparaît dans une vision et lui demande de chercher Saul.",
      "Ananias sait que Saul persécute les chrétiens et exprime ses inquiétudes.",
      "Il obéit néanmoins, pose les mains sur Saul et lui explique sa mission.",
      "Saul retrouve la vue, se fait baptiser et commence à prêcher."
    ],
    "qualities": [
      "Courage",
      "Obéissance",
      "Confiance en Jéhovah",
      "Esprit missionnaire"
    ],
    "difficulties": [
      "Il devait aller vers un persécuteur connu des disciples et prendre le risque de lui faire confiance sur l’ordre de Jésus."
    ]
  },
  "philip_evangelizer": {
    "studyFocus": "Philippe l’évangélisateur était un proclamateur zélé qui a accepté diverses missions et a aidé des personnes à comprendre les Écritures.",
    "lessonPoints": [
      "Zèle : il a prêché dans différentes régions et à des personnes de toutes sortes.",
      "Souplesse : il a immédiatement suivi la direction reçue pour rencontrer l’Éthiopien.",
      "Enseignement : il a utilisé les Écritures pour aider sincèrement son interlocuteur à comprendre le message."
    ],
    "keyReading": "Actes 6:1-7; 8:4-40; 21:8-9",
    "location": "Jérusalem, Samarie, route de Gaza et Césarée.",
    "relationshipWithJehovah": "Philippe se montre disponible pour suivre les indications de l’esprit et annonce la bonne nouvelle dans des régions nouvelles. Son exemple montre un service souple et missionnaire.",
    "didYouKnow": "Philippe avait quatre filles qui prophétisaient. Elles vivaient avec lui à Césarée, où Paul et ses compagnons logèrent lors d’un passage.",
    "jwResources": [
      {
        "title": "Philippe l’évangélisateur — Étude perspicace",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      },
      {
        "title": "Étude perspicace des Écritures — Philippe",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Philippe/"
      }
    ],
    "identity": "Philippe l’évangélisateur était l’un des sept hommes choisis à Jérusalem pour un service de distribution. Il devint ensuite un prédicateur itinérant particulièrement actif.",
    "era": "Premières années de la congrégation chrétienne",
    "familyAndEntourage": [
      "Étienne",
      "Les six autres hommes choisis à Jérusalem",
      "Pierre",
      "Paul",
      "Ses quatre filles prophétesses"
    ],
    "bibleAccount": [
      "Il est choisi avec Étienne et cinq autres hommes pour un service dans la congrégation.",
      "Après la dispersion des disciples, il prêche en Samarie.",
      "Il prêche à l’eunuque éthiopien sur la route de Gaza et le baptise.",
      "Il prêche dans plusieurs villes jusqu’à Césarée.",
      "Paul et ses compagnons séjournent chez lui à Césarée."
    ],
    "qualities": [
      "Zèle",
      "Disponibilité",
      "Courage",
      "Hospitalité"
    ],
    "difficulties": [
      "Il exerce son ministère dans une période de persécution et de dispersion des disciples."
    ]
  },
  "james_zebedee": {
    "studyFocus": "Jacques, fils de Zébédée, faisait partie des apôtres proches de Jésus et a appris à transformer son zèle initial en fidélité jusqu’à la mort.",
    "lessonPoints": [
      "Zèle : Jésus avait surnommé Jacques et Jean « Boanergès », montrant leur tempérament énergique.",
      "Humilité : il a dû apprendre que la vraie grandeur chrétienne consiste à servir.",
      "Fidélité : Jacques est devenu le premier apôtre à subir une mort violente pour sa foi."
    ],
    "keyReading": "Matthieu 4:21-22; 17:1-9; Marc 10:35-45; Actes 12:1-2",
    "location": "Galilée et Jérusalem.",
    "relationshipWithJehovah": "Jésus lui accorde une grande confiance en l’incluant parmi les trois témoins de certains événements majeurs. Son parcours montre aussi qu’un disciple zélé devait apprendre l’humilité.",
    "didYouKnow": "Jacques est le premier des Douze dont la Bible rapporte explicitement la mort en martyr.",
    "jwResources": [
      {
        "title": "Jacques fils de Zébédée — Étude perspicace",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Jacques, fils de Zébédée, était l’un des douze apôtres de Jésus et faisait partie du cercle des trois disciples particulièrement proches de lui avec Pierre et Jean.",
    "era": "Ministère terrestre de Jésus et premières années de la congrégation",
    "familyAndEntourage": [
      "Zébédée, son père",
      "Jean, son frère",
      "Salomé, probablement sa mère",
      "Pierre et Jean"
    ],
    "bibleAccount": [
      "Jésus l’appelle avec Jean alors qu’ils travaillent avec leur père.",
      "Il fait partie des trois témoins de la résurrection de la fille de Jaïrus et de la transfiguration.",
      "Il demande avec Jean une position importante dans le Royaume, ce qui révèle encore des ambitions humaines.",
      "Hérode Agrippa Ier le fait exécuter par l’épée."
    ],
    "qualities": [
      "Zèle",
      "Courage",
      "Fidélité"
    ],
    "difficulties": [
      "Il devait corriger une certaine ambition personnelle et accepte finalement de partager les souffrances des disciples; il meurt en martyr."
    ]
  },
  "james_brother_jesus": {
    "studyFocus": "Jacques, frère de Jésus, est devenu un chrétien mûr et a joué un rôle important dans la congrégation de Jérusalem.",
    "lessonPoints": [
      "Foi : après avoir vu Jésus ressuscité, Jacques est devenu un disciple convaincu.",
      "Responsabilité : il a participé à la direction de la congrégation de Jérusalem.",
      "Pratique chrétienne : sa lettre insiste sur une foi démontrée par les actions."
    ],
    "keyReading": "Jean 7:3-5; 1 Corinthiens 15:7; Actes 12:17; 15:13-21; Galates 1:19; Jacques 1:1",
    "location": "Jérusalem.",
    "relationshipWithJehovah": "Jacques se présente humblement comme « esclave de Dieu et du Seigneur Jésus Christ ». Son enseignement insiste sur une foi démontrée par les œuvres et sur une conduite qui plaît à Dieu.",
    "didYouKnow": "JW.org explique que Jacques évite de se présenter comme « frère du Seigneur » dans l’introduction de sa lettre; il se désigne simplement comme esclave de Dieu et de Jésus Christ.",
    "jwResources": [
      {
        "title": "Jacques, frère de Jésus — Étude perspicace",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Jacques, demi-frère de Jésus, devint une figure majeure de la congrégation de Jérusalem et rédigea la lettre biblique qui porte son nom.",
    "era": "Ministère de Jésus puis premières décennies de la congrégation chrétienne",
    "familyAndEntourage": [
      "Marie, sa mère",
      "Jésus",
      "Joseph et ses autres frères",
      "Jude",
      "Pierre et Paul"
    ],
    "bibleAccount": [
      "Pendant le ministère de Jésus, ses frères ne mettent pas leur foi en lui.",
      "Après la résurrection, Jésus apparaît personnellement à Jacques.",
      "Jacques se réunit avec les apôtres à Jérusalem.",
      "Il joue un rôle majeur dans la réunion concernant la circoncision des non-Juifs.",
      "Il est reconnu comme l’une des colonnes de la congrégation de Jérusalem et rédige sa lettre."
    ],
    "qualities": [
      "Humilité",
      "Foi",
      "Sagesse",
      "Courage",
      "Sens pastoral"
    ],
    "difficulties": [
      "Il n’a pas cru en Jésus au début de son ministère; plus tard, il doit aider la congrégation à résoudre des questions sensibles."
    ]
  },
  "jude_brother_jesus": {
    "studyFocus": "Jude, frère de Jésus, s’est présenté comme esclave de Jésus Christ et a exhorté les chrétiens à lutter pour la foi.",
    "lessonPoints": [
      "Humilité : il ne s’est pas présenté en mettant en avant son lien familial avec Jésus.",
      "Défense de la foi : il a encouragé les chrétiens à protéger les enseignements reçus.",
      "Vigilance : il a averti contre ceux qui introduisaient une conduite mauvaise dans la congrégation."
    ],
    "keyReading": "Jean 7:3-5; Actes 1:14; Jude 1-25",
    "location": "Palestine et congrégations chrétiennes du Ier siècle.",
    "relationshipWithJehovah": "Jude met l’accent sur l’amour de Dieu, la prière par le moyen de l’esprit saint et la nécessité de se garder dans l’amour de Dieu. Il s’identifie humblement comme esclave de Jésus.",
    "didYouKnow": "Jude ne se présente pas comme apôtre ni comme « frère du Seigneur », mais comme « esclave de Jésus Christ, mais frère de Jacques ».",
    "jwResources": [
      {
        "title": "Jude, frère de Jésus — Étude perspicace",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Jude, demi-frère de Jésus et frère de Jacques, devint chrétien après la résurrection de Jésus et rédigea la lettre biblique de Jude.",
    "era": "Premières décennies de la congrégation chrétienne; lettre rédigée vers 65 de n. è.",
    "familyAndEntourage": [
      "Marie, sa mère",
      "Jésus",
      "Jacques",
      "Les autres frères de Jésus",
      "Les congrégations chrétiennes auxquelles sa lettre s’adresse"
    ],
    "bibleAccount": [
      "Comme les autres frères de Jésus, il ne croit pas en lui au début.",
      "Après la résurrection, il se réunit avec les disciples à Jérusalem.",
      "Il se présente comme esclave de Jésus Christ.",
      "Il exhorte les chrétiens à livrer un dur combat pour la foi et à rester dans l’amour de Dieu."
    ],
    "qualities": [
      "Humilité",
      "Courage",
      "Vigilance spirituelle",
      "Fidélité"
    ],
    "difficulties": [
      "Il devait autrefois surmonter son incrédulité envers Jésus et, plus tard, avertir les congrégations contre des hommes corrompus qui s’étaient infiltrés."
    ]
  },
  "philip_apostle": {
    "studyFocus": "Philippe, l’un des douze apôtres, a montré de l’intérêt pour les personnes et a cherché à les conduire vers Jésus.",
    "lessonPoints": [
      "Initiative : Philippe a parlé de Jésus à Nathanaël.",
      "Honnêteté : il a répondu à une objection en invitant simplement à venir voir.",
      "Foi : il a continué à apprendre de Jésus même lorsqu’il ne comprenait pas encore tout."
    ],
    "keyReading": "Jean 1:43-51 ; 6:1-7 ; 12:20-22 ; 14:8-11",
    "location": "Galilée et Jérusalem.",
    "relationshipWithJehovah": "Philippe répond à l’appel de Jésus et invite Nathanaël à venir voir; il sert ensuite comme apôtre.",
    "didYouKnow": "Philippe était originaire de Bethsaïde, comme Pierre et André.",
    "jwResources": [
      {
        "title": "Philippe l’apôtre — Étude perspicace",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Apôtre — Philippe est l’un des Douze. Il amène Nathanaël à Jésus et intervient dans plusieurs épisodes de l’Évangile de Jean.",
    "era": "Évangiles",
    "familyAndEntourage": [
      "Nathanaël",
      "André",
      "Jésus"
    ],
    "bibleAccount": [
      "Répond à l’appel de Jésus.",
      "Invite Nathanaël à rencontrer Jésus.",
      "Parle à Jésus au sujet de la foule à nourrir.",
      "Présente des Grecs qui souhaitent voir Jésus."
    ],
    "qualities": [
      "Zèle",
      "Esprit d’initiative"
    ],
    "difficulties": []
  },
  "bartholomew": {
    "studyFocus": "Barthélemy, probablement Nathanaël, était un disciple qui a reconnu Jésus comme le Fils de Dieu et le Roi d’Israël.",
    "lessonPoints": [
      "Sincérité : Jésus a reconnu en lui un homme sans tromperie.",
      "Réceptivité : il a accepté l’invitation de Philippe à venir voir Jésus.",
      "Foi : il a rapidement exprimé sa conviction concernant l’identité de Jésus."
    ],
    "keyReading": "Matthieu 10:2-4; Jean 1:43-51; Actes 1:12-14",
    "location": "Galilée et régions du ministère de Jésus.",
    "relationshipWithJehovah": "Si Barthélemy est Nathanaël, son attitude initiale réservée envers Nazareth est rapidement dépassée lorsqu’il rencontre Jésus et reconnaît son identité.",
    "didYouKnow": "« Barthélemy » signifie « fils de Tolmaï ». C’est probablement un nom de famille ou patronyme, ce qui explique qu’il soit désigné autrement dans Jean.",
    "jwResources": [
      {
        "title": "Barthélémy — Étude perspicace",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Barthélemy était l’un des douze apôtres. JW.org considère qu’il s’agit probablement de Nathanaël, le disciple présenté dans l’Évangile de Jean.",
    "era": "Ministère terrestre de Jésus et premières années de la congrégation",
    "familyAndEntourage": [
      "Philippe",
      "Nathanaël",
      "Les douze apôtres",
      "Jésus"
    ],
    "bibleAccount": [
      "Il figure dans les listes des Douze.",
      "Il est associé à Philippe dans les listes apostoliques.",
      "Si Barthélemy est bien Nathanaël, il a été présenté à Jésus par Philippe et a rapidement reconnu en lui le Fils de Dieu et le Roi d’Israël.",
      "Il persévère avec les autres apôtres après l’ascension."
    ],
    "qualities": [
      "Franchise",
      "Réceptivité",
      "Foi"
    ],
    "difficulties": [
      "L’identification de Barthélemy avec Nathanaël est une conclusion fondée sur la comparaison des Évangiles, et non une affirmation explicite de Jean."
    ]
  },
  "james_alphaaeus": {
    "studyFocus": "Jacques fils d’Alphée faisait partie des douze apôtres, mais les Évangiles donnent peu de détails sur sa vie.",
    "lessonPoints": [
      "Fidélité discrète : être peu mentionné ne signifie pas être peu utile à Jéhovah.",
      "Disponibilité : Jésus lui a confié une place parmi les douze.",
      "Persévérance : son service s’est inscrit dans la durée du ministère apostolique."
    ],
    "keyReading": "Matthieu 10:2-4; Marc 3:13-19; Actes 1:12-14",
    "location": "Jérusalem et le territoire d’Israël.",
    "relationshipWithJehovah": "Même si son rôle est peu détaillé, il reste associé aux Douze et participe à la prière avec les autres disciples après l’ascension de Jésus.",
    "didYouKnow": "JW.org souligne qu’il faut distinguer Jacques fils d’Alphée de Jacques fils de Zébédée et de Jacques, frère de Jésus.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Jacques fils d’Alphée était l’un des douze apôtres choisis par Jésus. La Bible donne peu de renseignements personnels sur lui.",
    "era": "Ministère de Jésus et premières années de la congrégation",
    "familyAndEntourage": [
      "Les douze apôtres",
      "Jésus",
      "Alphée, son père"
    ],
    "bibleAccount": [
      "Il est choisi parmi les Douze.",
      "Il accompagne Jésus pendant son ministère.",
      "Après la résurrection, il persévère dans la prière avec les autres apôtres à Jérusalem.",
      "Il est mentionné dans les listes des apôtres après l’ascension."
    ],
    "qualities": [
      "Fidélité",
      "Persévérance"
    ],
    "difficulties": [
      "Les Écritures ne rapportent pas de faute personnelle précise à son sujet; elles donnent aussi très peu de détails sur sa vie."
    ]
  },
  "simon_zealot": {
    "studyFocus": "Simon le Zélé était l’un des douze apôtres et a servi aux côtés de disciples issus de milieux très différents.",
    "lessonPoints": [
      "Unité : il a servi avec des personnes dont les parcours et opinions pouvaient être très différents des siens.",
      "Changement : devenir disciple de Jésus exigeait de placer le Royaume au-dessus des anciennes affiliations.",
      "Fidélité : il est resté parmi les douze apôtres choisis par Jésus."
    ],
    "keyReading": "Luc 6:12-16; Actes 1:12-14",
    "location": "Jérusalem et le territoire d’Israël.",
    "relationshipWithJehovah": "Il fait partie du groupe choisi par Jésus et reste parmi les disciples qui persévèrent dans la prière après l’ascension.",
    "didYouKnow": "Le qualificatif « le Zélé » ne prouve pas à lui seul que Simon appartenait au parti politique des Zélotes; JW.org présente les deux possibilités.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Simon le Zélé était l’un des douze apôtres de Jésus. Son surnom le distinguait de Simon Pierre et pouvait évoquer soit son zèle, soit une ancienne association avec les Zélotes.",
    "era": "Ministère de Jésus et premières années de la congrégation",
    "familyAndEntourage": [
      "Les douze apôtres",
      "Jésus",
      "Simon Pierre"
    ],
    "bibleAccount": [
      "Il est choisi parmi les Douze.",
      "Il accompagne Jésus pendant son ministère.",
      "Après l’ascension, il persévère dans la prière avec les autres apôtres.",
      "La Bible ne rapporte pas d’autres épisodes personnels détaillés de son ministère."
    ],
    "qualities": [
      "Zèle",
      "Fidélité",
      "Persévérance"
    ],
    "difficulties": [
      "Son ancienne association éventuelle avec les Zélotes n’est pas certaine; la Bible ne donne pas assez de détails pour établir son passé politique."
    ]
  },
  "jairus_daughter": {
    "studyFocus": "La fille de Jaïrus a été ramenée à la vie par Jésus, donnant à sa famille une preuve puissante de sa capacité à ressusciter les morts.",
    "lessonPoints": [
      "Espérance : son récit montre que la mort n’est pas une situation irréversible pour Jéhovah.",
      "Foi : Jésus a encouragé ses parents à ne pas avoir peur mais à exercer la foi.",
      "Tendresse : Jésus a traité cette enfant avec attention et dignité."
    ],
    "keyReading": "Luc 8:40-56; Marc 5:21-43; Matthieu 9:18-26",
    "location": "Capharnaüm et ses environs.",
    "relationshipWithJehovah": "Le récit ne rapporte pas ses paroles ou sa foi personnelle. Sa résurrection manifeste plutôt la puissance que Jéhovah a donnée à Jésus sur la mort.",
    "didYouKnow": "Elle avait 12 ans et était l’enfant unique de Jaïrus et de sa femme.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "La fille de Jaïrus était une jeune fille de 12 ans, fille unique d’un responsable de synagogue. Jésus la ramena à la vie.",
    "era": "Vers 31-32 de n. è., pendant le ministère de Jésus",
    "familyAndEntourage": [
      "Jaïrus, son père",
      "Sa mère",
      "Jésus",
      "Pierre, Jacques et Jean"
    ],
    "bibleAccount": [
      "Elle tombe gravement malade.",
      "Son père demande à Jésus de venir la guérir.",
      "Elle meurt avant l’arrivée de Jésus.",
      "Jésus la prend par la main et lui rend la vie devant ses parents et trois apôtres."
    ],
    "qualities": [
      "Aucun trait de personnalité précis n’est rapporté"
    ],
    "difficulties": [
      "Elle subit une maladie mortelle à seulement 12 ans; son récit est surtout présenté à travers la foi et l’épreuve de ses parents."
    ]
  },
  "blind_bartimaeus": {
    "studyFocus": "Bartimée, un aveugle mendiant, a persisté à appeler Jésus malgré les reproches de la foule et a manifesté une grande foi.",
    "lessonPoints": [
      "Persévérance : il n’a pas cessé de crier vers Jésus lorsque la foule voulait le faire taire.",
      "Foi : il a appelé Jésus « Fils de David », reconnaissant son rôle messianique.",
      "Gratitude : après avoir retrouvé la vue, il a suivi Jésus."
    ],
    "keyReading": "Marc 10:46-52; Matthieu 20:29-34; Luc 18:35-43",
    "location": "Jéricho.",
    "relationshipWithJehovah": "Jésus souligne que sa foi a joué un rôle dans sa guérison. Après avoir retrouvé la vue, Bartimée ne repart pas simplement chez lui: il se met à suivre Jésus.",
    "didYouKnow": "Bartimée signifie « fils de Timée ». Marc est le seul Évangile à donner son nom; Matthieu parle de deux aveugles et Luc d’un seul.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Bartimée était un mendiant aveugle assis près de Jéricho. Il cria vers Jésus, lui demanda de retrouver la vue et le suivit après sa guérison.",
    "era": "Fin du ministère terrestre de Jésus, peu avant sa mort",
    "familyAndEntourage": [
      "Timée, son père",
      "Jésus",
      "La foule qui accompagnait Jésus"
    ],
    "bibleAccount": [
      "Il mendie au bord de la route près de Jéricho.",
      "Il reconnaît Jésus comme le Fils de David et crie pour obtenir son aide.",
      "Malgré les personnes qui lui ordonnent de se taire, il crie encore plus fort.",
      "Jésus le guérit et il se met à le suivre."
    ],
    "qualities": [
      "Foi",
      "Persévérance",
      "Courage",
      "Reconnaissance"
    ],
    "difficulties": [
      "Il devait vivre avec la cécité et la mendicité et affronter les tentatives de la foule pour le faire taire."
    ]
  },
  "samaritan_woman": {
    "studyFocus": "La Samaritaine a accepté de discuter avec Jésus malgré les barrières sociales de l’époque et a parlé à d’autres de ce qu’elle avait appris.",
    "lessonPoints": [
      "Ouverture : elle a posé des questions et a progressivement compris l’enseignement de Jésus.",
      "Témoignage : elle a invité les habitants de sa ville à venir voir Jésus.",
      "Recherche spirituelle : elle s’intéressait sincèrement aux questions liées au vrai culte."
    ],
    "keyReading": "Jean 4:4-42",
    "location": "Sychar, en Samarie.",
    "relationshipWithJehovah": "Elle accepte progressivement l’enseignement de Jésus sur la vraie adoration, reconnaît qu’il est le Messie et partage immédiatement ce qu’elle a appris avec d’autres.",
    "didYouKnow": "Jésus lui révèle qu’il est le Messie, et elle devient l’une des premières personnes dont Jean rapporte le témoignage aux Samaritains de sa ville.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "La Samaritaine que Jésus rencontra près de Sychar était une femme qui puisait de l’eau au puits de Jacob. Après sa conversation avec Jésus, elle parla de lui aux habitants de sa ville.",
    "era": "Vers 30 de n. è., pendant le ministère de Jésus",
    "familyAndEntourage": [
      "Jésus",
      "Les habitants de Sychar",
      "Les Samaritains de la ville"
    ],
    "bibleAccount": [
      "Elle rencontre Jésus près du puits de Jacob.",
      "Jésus lui parle de l’eau vive et révèle qu’il connaît sa situation personnelle.",
      "Elle discute avec lui au sujet de l’adoration et du Messie.",
      "Elle laisse sa cruche, retourne en ville et invite les habitants à venir voir Jésus.",
      "Beaucoup de Samaritains croient grâce à son témoignage et à la parole de Jésus."
    ],
    "qualities": [
      "Franchise",
      "Réceptivité",
      "Courage pour témoigner",
      "Foi"
    ],
    "difficulties": [
      "Sa vie personnelle avait connu plusieurs mariages et elle vivait alors avec un homme qui n’était pas son mari; Jésus lui en parle sans la rabaisser."
    ]
  },
  "roman_centurion": {
    "studyFocus": "Le centurion romain de Capharnaüm a montré une foi remarquable dans le pouvoir de guérison de Jésus et une grande humilité.",
    "lessonPoints": [
      "Foi : il croyait que Jésus pouvait guérir son serviteur sans même venir chez lui.",
      "Humilité : il estimait ne pas être digne de recevoir Jésus chez lui.",
      "Compassion : il se souciait profondément d’un serviteur malade."
    ],
    "keyReading": "Luc 7:1-10; Matthieu 8:5-13",
    "location": "Capharnaüm.",
    "relationshipWithJehovah": "Sa foi dans l’autorité de Jésus est remarquable. Jésus la présente comme une foi exceptionnelle en Israël, et le récit montre que l’homme reconnaissait l’autorité divine derrière l’action de Jésus.",
    "didYouKnow": "Les anciens juifs qui parlent de lui à Jésus soulignent qu’il aimait leur nation et avait construit leur synagogue.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Le centurion romain de Capernaüm était un officier qui avait construit une synagogue pour les Juifs et qui demanda à Jésus de guérir son esclave.",
    "era": "Vers 30 de n. è., au début du ministère de Jésus",
    "familyAndEntourage": [
      "Son esclave",
      "Les anciens juifs de Capernaüm",
      "Jésus"
    ],
    "bibleAccount": [
      "Son esclave tombe gravement malade.",
      "Il envoie des anciens juifs demander à Jésus de venir.",
      "Il estime qu’il n’est pas digne que Jésus entre sous son toit et croit que Jésus peut guérir à distance.",
      "Jésus loue sa grande foi et l’esclave est guéri."
    ],
    "qualities": [
      "Foi",
      "Humilité",
      "Générosité",
      "Compassion"
    ],
    "difficulties": [
      "Il doit faire face à la maladie grave de son esclave et reconnaît humblement ses propres limites."
    ]
  },
  "felix": {
    "studyFocus": "Félix a entendu Paul parler de justice, de maîtrise de soi et du jugement à venir, mais a repoussé sa réaction.",
    "lessonPoints": [
      "Écouter et agir : connaître la vérité ne suffit pas si l’on refuse d’agir.",
      "Maîtrise de soi : Paul a directement abordé cette qualité devant lui.",
      "Intégrité : il faut éviter de laisser les intérêts personnels influencer les décisions justes."
    ],
    "keyReading": "Actes 23:23-35; 24:10-27",
    "location": "Césarée.",
    "relationshipWithJehovah": "Le récit montre qu’il a entendu un témoignage direct sur la foi chrétienne et le jugement à venir, mais il n’est pas rapporté qu’il ait accepté ce message.",
    "didYouKnow": "Félix resta deux ans avec Paul en détention et le faisait venir assez souvent pour converser avec lui.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Antonius Félix était gouverneur romain de Judée lorsque Paul fut détenu à Césarée. Il entendit plusieurs fois Paul mais le laissa en prison.",
    "era": "Vers 52-59 de n. è.",
    "familyAndEntourage": [
      "Drusille",
      "Paul",
      "Les chefs religieux juifs",
      "Festus"
    ],
    "bibleAccount": [
      "Il entend Paul se défendre devant ses accusateurs.",
      "Avec Drusille, il écoute Paul parler de foi en Christ, de justice, de maîtrise de soi et du jugement à venir.",
      "Il est effrayé par ce message mais remet la discussion à plus tard.",
      "Il espère recevoir de l’argent de Paul et le laisse finalement prisonnier pour gagner la faveur des Juifs."
    ],
    "qualities": [
      "Il manifeste d’abord une certaine connaissance de la Voie et laisse Paul s’exprimer"
    ],
    "difficulties": [
      "Il reporte sa décision malgré son trouble et privilégie finalement des considérations personnelles et politiques en laissant Paul en prison."
    ]
  },
  "festus": {
    "studyFocus": "Festus a présidé l’affaire de Paul après Félix et a reconnu qu’il n’avait pas commis de crime méritant la mort, tout en cherchant à formuler l’accusation pour César.",
    "lessonPoints": [
      "Examen des faits : il a entendu les accusations et la défense de Paul.",
      "Respect des procédures : Paul a exercé son droit d’en appeler à César.",
      "Prudence : une autorité doit distinguer les faits des accusations portées contre quelqu’un."
    ],
    "keyReading": "Actes 25:1-27; 26:24-32",
    "location": "Césarée.",
    "relationshipWithJehovah": "La Bible ne le présente pas comme adorateur de Jéhovah. Il entend néanmoins une défense détaillée de la foi chrétienne et reconnaît qu’il n’a pas affaire à une accusation criminelle ordinaire.",
    "didYouKnow": "Festus reconnaît à Agrippa qu’il ne savait pas quoi écrire à l’empereur au sujet de Paul, ce qui explique pourquoi il organise l’audience devant Agrippa.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Porcius Festus succéda à Félix comme gouverneur de Judée. Il présida l’audience de Paul à Césarée et accepta son appel à César.",
    "era": "Vers 58-60 de n. è.",
    "familyAndEntourage": [
      "Paul",
      "Agrippa II",
      "Bérénice",
      "Les chefs religieux juifs"
    ],
    "bibleAccount": [
      "Il monte à Jérusalem peu après son entrée en fonction.",
      "Il entend les accusations contre Paul et préside son procès à Césarée.",
      "Il demande à Paul s’il accepte d’être jugé à Jérusalem.",
      "Après l’appel de Paul à César, il accepte cet appel.",
      "Il demande ensuite à Agrippa de l’aider à formuler un rapport pour l’empereur."
    ],
    "qualities": [
      "Souci de procédure",
      "Prudence administrative"
    ],
    "difficulties": [
      "Il cherche à comprendre une affaire religieuse complexe tout en gérant les demandes politiques des autorités juives."
    ]
  },
  "agrippa_ii": {
    "studyFocus": "Agrippa II a entendu Paul expliquer sa conversion, son ministère et l’accomplissement des prophéties concernant le Messie.",
    "lessonPoints": [
      "Écouter les Écritures : Paul a raisonné à partir des prophètes connus d’Agrippa.",
      "Réflexion personnelle : entendre un témoignage demande ensuite d’examiner sincèrement sa propre position.",
      "Courage du témoin : Paul a parlé librement devant un dirigeant."
    ],
    "keyReading": "Actes 25:13-27; 26:1-32",
    "location": "Césarée.",
    "relationshipWithJehovah": "Agrippa connaissait les coutumes et controverses juives et a entendu un témoignage détaillé sur Jésus. La Bible rapporte sa réaction, mais ne dit pas qu’il ait accepté la foi chrétienne.",
    "didYouKnow": "Agrippa II était le frère de Bérénice et de Drusille, et Félix était son beau-frère par son mariage avec Drusille.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Hérode Agrippa II était roi et membre de la dynastie hérodienne. Il entendit la défense de Paul à Césarée avec Bérénice et Festus.",
    "era": "Vers 58 de n. è. et décennies suivantes",
    "familyAndEntourage": [
      "Hérode Agrippa Ier, son père",
      "Bérénice, sa sœur",
      "Drusille, sa sœur",
      "Festus",
      "Paul"
    ],
    "bibleAccount": [
      "Festus lui expose le dossier de Paul.",
      "Il demande à entendre personnellement Paul.",
      "Paul lui parle de sa conversion et de la résurrection.",
      "Agrippa reconnaît que Paul pourrait presque le persuader de devenir chrétien.",
      "Avec Festus, il conclut que Paul n’a rien fait qui mérite la mort ou les chaînes."
    ],
    "qualities": [
      "Connaissance des coutumes juives",
      "Capacité à écouter une défense"
    ],
    "difficulties": [
      "Il entend un témoignage chrétien très direct mais le récit biblique ne dit pas qu’il devint chrétien."
    ]
  },
  "berenice": {
    "studyFocus": "Bérénice était présente lors de l’audience où Paul défendit sa foi devant Agrippa et Festus.",
    "lessonPoints": [
      "Attention au témoignage : elle a entendu directement la défense de Paul.",
      "Contexte historique : son récit illustre le cadre officiel dans lequel Paul a rendu témoignage.",
      "Responsabilité personnelle : entendre la vérité ne remplace pas une réponse personnelle."
    ],
    "keyReading": "Actes 25:13-27; 26:1-32",
    "location": "Césarée.",
    "relationshipWithJehovah": "La Bible ne rapporte pas sa foi personnelle. Elle était présente lors d’une occasion où Paul donna un témoignage détaillé sur Jésus et la résurrection.",
    "didYouKnow": "Bérénice était sœur d’Agrippa II et de Drusille; elle était donc également membre de la famille d’Hérode Agrippa Ier.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Bérénice était une sœur d’Agrippa II qui l’accompagna lors de sa visite à Césarée où Paul présenta sa défense devant Festus et Agrippa.",
    "era": "Vers 58 de n. è.",
    "familyAndEntourage": [
      "Agrippa II, son frère",
      "Drusille, sa sœur",
      "Félix, son beau-frère",
      "Festus",
      "Paul"
    ],
    "bibleAccount": [
      "Elle arrive à Césarée avec Agrippa II.",
      "Elle entre dans la salle d’audience en grand apparat avec le roi, les commandants et les notables.",
      "Elle entend la défense de Paul devant Agrippa et Festus."
    ],
    "qualities": [],
    "difficulties": [
      "Le récit biblique donne très peu d’informations sur ses convictions personnelles ou sa réaction au témoignage de Paul."
    ]
  },
  "phoebe": {
    "studyFocus": "Phébé était une chrétienne de Cenchrées que Paul a recommandée chaleureusement aux chrétiens de Rome et qui avait aidé beaucoup de frères, y compris Paul.",
    "lessonPoints": [
      "Générosité : elle avait été une aide pour beaucoup.",
      "Hospitalité et soutien : Paul demandait aux chrétiens de Rome de lui apporter leur aide.",
      "Réputation : son service fidèle lui avait valu une recommandation personnelle de Paul."
    ],
    "keyReading": "Romains 16:1-2",
    "location": "Cenchrées, près de Corinthe.",
    "relationshipWithJehovah": "Son soutien à de nombreux chrétiens et son service dans la congrégation montrent un engagement concret envers le culte chrétien.",
    "didYouKnow": "Paul la recommande dans les dernières lignes de sa lettre aux Romains et demande à la congrégation de l’aider dans toute affaire où elle en aurait besoin.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      },
      {
        "title": "Étude perspicace des Écritures — Phébé",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Ph%C3%A9b%C3%A9/"
      }
    ],
    "identity": "Phœbé était une chrétienne de Cenchrées que Paul recommande chaleureusement aux chrétiens de Rome comme sœur et servante de la congrégation.",
    "era": "Ier siècle de n. è.",
    "familyAndEntourage": [
      "Paul",
      "Les chrétiens de Cenchrées",
      "Les chrétiens de Rome"
    ],
    "bibleAccount": [
      "Paul la recommande à la congrégation de Rome.",
      "Il demande qu’elle soit accueillie comme une personne digne des saints.",
      "Il précise qu’elle a aidé beaucoup de personnes, y compris lui-même."
    ],
    "qualities": [
      "Hospitalité",
      "Générosité",
      "Service"
    ],
    "difficulties": [
      "La Bible donne peu de détails sur sa vie personnelle; il faut donc éviter d’attribuer des responsabilités ou circonstances non rapportées."
    ]
  },
  "euodia": {
    "studyFocus": "Évodie était une chrétienne qui avait travaillé dur avec Paul dans la prédication. Paul l’a encouragée, avec Syntyche, à retrouver l’unité.",
    "lessonPoints": [
      "Unité : même des chrétiennes zélées peuvent avoir besoin d’aide pour résoudre un désaccord.",
      "Collaboration : Paul reconnaissait son travail dans la prédication.",
      "Humilité : préserver la paix demande parfois de mettre de côté ses préférences personnelles."
    ],
    "keyReading": "Philippiens 4:2-3",
    "location": "Philippes.",
    "relationshipWithJehovah": "Paul ne remet pas en cause leur dévouement; il les encourage à retrouver l’unité dans le Seigneur, montrant que la paix fraternelle fait partie de leur service chrétien.",
    "didYouKnow": "Paul dit qu’Évodie et Syntyche avaient lutté à ses côtés pour la bonne nouvelle.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Évodie était une chrétienne de la congrégation de Philippes. Paul reconnaît qu’elle avait travaillé pour la bonne nouvelle et l’encourage à retrouver l’unité avec Syntyche.",
    "era": "Ier siècle de n. è.",
    "familyAndEntourage": [
      "Syntyche",
      "Paul",
      "La congrégation de Philippes"
    ],
    "bibleAccount": [
      "Elle avait travaillé aux côtés de Paul pour la bonne nouvelle.",
      "Un désaccord semble s’être produit entre elle et Syntyche.",
      "Paul demande à un compagnon fidèle de les aider à rétablir la paix."
    ],
    "qualities": [
      "Zèle dans le service",
      "Engagement dans la prédication"
    ],
    "difficulties": [
      "Elle connaît un désaccord avec une autre chrétienne, ce qui montre que même des serviteurs actifs peuvent devoir rétablir la paix."
    ]
  },
  "epaphroditus": {
    "studyFocus": "Épaphrodite s’est dépensé au service de Paul et des Philippiens et a risqué sa vie pour l’œuvre du Seigneur.",
    "lessonPoints": [
      "Abnégation : il a accepté de prendre des risques pour servir.",
      "Affection fraternelle : il était préoccupé par la peine que son état causait aux Philippiens.",
      "Fidélité : Paul l’a présenté comme un homme digne d’estime."
    ],
    "keyReading": "Philippiens 2:25-30; 4:18",
    "location": "Philippes et Rome.",
    "relationshipWithJehovah": "Paul le présente comme frère, collaborateur et compagnon de combat. Il place le service chrétien et les intérêts des autres au-dessus de son confort.",
    "didYouKnow": "Paul dit qu’Épaphrodite a été très malade, près de mourir, et que Dieu a eu pitié de lui.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Épaphrodite était un chrétien de Philippes envoyé auprès de Paul pour lui apporter l’aide de la congrégation. Il tomba gravement malade mais continua à se soucier des autres.",
    "era": "Ier siècle de n. è.",
    "familyAndEntourage": [
      "La congrégation de Philippes",
      "Paul",
      "Les chrétiens de Rome"
    ],
    "bibleAccount": [
      "La congrégation l’envoie auprès de Paul.",
      "Il apporte un don matériel à Paul.",
      "Il tombe gravement malade et Paul explique qu’il a risqué sa vie pour l’œuvre du Christ.",
      "Il souhaite retourner auprès des Philippiens, qui s’inquiétaient de son état."
    ],
    "qualities": [
      "Abnégation",
      "Fidélité",
      "Empathie",
      "Courage"
    ],
    "difficulties": [
      "Il tombe gravement malade alors qu’il sert Paul et porte aussi le poids de l’inquiétude de la congrégation."
    ]
  },
  "tychicus": {
    "studyFocus": "Tychique était un assistant fidèle de Paul, chargé de transmettre des lettres et de réconforter les congrégations.",
    "lessonPoints": [
      "Fiabilité : Paul lui confiait des missions importantes.",
      "Encouragement : il devait renseigner les frères sur Paul et les consoler.",
      "Disponibilité : il a accepté plusieurs missions au service des congrégations."
    ],
    "keyReading": "Actes 20:4; Éphésiens 6:21-22; Colossiens 4:7-9; 2 Timothée 4:12",
    "location": "Asie, Rome et autres régions.",
    "relationshipWithJehovah": "Paul le qualifie de fidèle ministre et compagnon de service dans le Seigneur, soulignant sa fiabilité dans les tâches reçues.",
    "didYouKnow": "Tychique a été chargé d’accompagner Onésime, ce qui montre la confiance de Paul dans une situation relationnelle délicate.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Tychique était un collaborateur fidèle de Paul, originaire de la région d’Asie. Paul lui confia plusieurs missions auprès des congrégations.",
    "era": "Ier siècle de n. è.",
    "familyAndEntourage": [
      "Paul",
      "Onésime",
      "Les congrégations d’Asie",
      "Tite"
    ],
    "bibleAccount": [
      "Il accompagne Paul dans son ministère.",
      "Paul le charge de transmettre des nouvelles aux Éphésiens et aux Colossiens.",
      "Il accompagne Onésime dans son retour auprès de Philémon.",
      "Plus tard, Paul l’envoie encore en mission."
    ],
    "qualities": [
      "Fidélité",
      "Discrétion",
      "Fiabilité",
      "Esprit de service"
    ],
    "difficulties": [
      "Il accepte des missions de confiance qui nécessitent de voyager et de représenter Paul auprès de plusieurs congrégations."
    ]
  },
  "demas": {
    "studyFocus": "Démas a collaboré avec Paul pendant un temps, mais Paul a ensuite indiqué qu’il l’avait abandonné parce qu’il aimait le présent système de choses.",
    "lessonPoints": [
      "Vigilance spirituelle : un bon passé ne dispense pas de rester fidèle.",
      "Priorités : l’amour des avantages du monde peut détourner du service chrétien.",
      "Persévérance : il faut protéger régulièrement sa relation avec Jéhovah."
    ],
    "keyReading": "Colossiens 4:14; Philémon 24; 2 Timothée 4:9-10",
    "location": "Rome et le monde méditerranéen.",
    "relationshipWithJehovah": "Son parcours constitue un avertissement: une association étroite avec des chrétiens engagés ne garantit pas la fidélité si les désirs pour le monde prennent le dessus.",
    "didYouKnow": "Démas est mentionné favorablement comme collaborateur avant d’être décrit plus tard comme ayant abandonné Paul.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Démas était un collaborateur de Paul mentionné parmi ses compagnons, mais il abandonna ensuite l’apôtre parce qu’il aimait le système de choses présent.",
    "era": "Ier siècle de n. è.",
    "familyAndEntourage": [
      "Paul",
      "Luc",
      "Tychique",
      "Les autres collaborateurs de Paul"
    ],
    "bibleAccount": [
      "Il est mentionné comme compagnon de Paul pendant sa première période de détention.",
      "Paul le cite parmi ses collaborateurs dans sa lettre à Philémon.",
      "Plus tard, Paul explique que Démas l’a abandonné parce qu’il aimait le système de choses présent."
    ],
    "qualities": [
      "Il fut pendant un temps un collaborateur de Paul."
    ],
    "difficulties": [
      "Son attachement au présent système de choses finit par prendre le dessus sur son engagement auprès de Paul."
    ]
  },
  "naaman": {
    "studyFocus": "Naaman était le chef de l’armée du roi de Syrie. Malgré sa position, il souffrait de la lèpre. Il accepta finalement les instructions du prophète Élisée, se lava sept fois dans le Jourdain et fut guéri. Cette guérison l’amena à reconnaître Jéhovah comme le vrai Dieu.",
    "lessonPoints": [
      "Naaman dut mettre de côté son orgueil pour suivre une instruction simple.",
      "Il écouta aussi le conseil de ses serviteurs, ce qui l’aida à agir avec sagesse.",
      "Après sa guérison, il reconnut publiquement Jéhovah.",
      "Son histoire montre que la foi peut grandir quand on accepte humblement la direction divine."
    ],
    "keyReading": "2 Rois 5:1-19",
    "location": "Syrie et Samarie, notamment le Jourdain.",
    "relationshipWithJehovah": "Jéhovah permit sa guérison par l’intermédiaire d’Élisée. Naaman reconnut ensuite qu’il n’y avait pas de Dieu sur toute la terre sinon en Israël.",
    "didYouKnow": "Naaman était chef de l’armée du roi de Syrie et pourtant il écouta finalement le conseil d’une jeune servante israélite.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Naaman était chef de l’armée syrienne, atteint de lèpre. Il fut guéri après avoir humblement suivi les instructions données par le prophète Élisée.",
    "era": "Xe siècle av. n. è.",
    "familyAndEntourage": [
      "Le roi de Syrie",
      "Sa femme",
      "Une jeune servante israélite",
      "Élisée",
      "Gehazi"
    ],
    "bibleAccount": [
      "Une jeune servante indique que le prophète de Samarie pourrait le guérir.",
      "Naaman vient avec une lettre du roi et de grandes richesses.",
      "Élisée lui demande de se laver sept fois dans le Jourdain.",
      "Après avoir surmonté son indignation initiale, Naaman obéit et est guéri.",
      "Il reconnaît que le Dieu d’Israël est le vrai Dieu."
    ],
    "qualities": [
      "Humilité après correction",
      "Obéissance",
      "Reconnaissance"
    ],
    "difficulties": [
      "Son orgueil initial l’empêche d’accepter facilement une instruction simple et il doit apprendre à écouter un message qui ne vient pas directement d’un grand personnage.",
      "Il doit aussi résister aux attentes liées à son rang."
    ]
  },
  "hezekiah": {
    "studyFocus": "Ézéchias fut roi de Juda à une période très difficile. Il entreprit de rétablir le vrai culte, fit retirer les pratiques idolâtriques et fit confiance à Jéhovah lorsque l’armée assyrienne menaça Jérusalem. Il commit aussi une erreur en montrant ses trésors aux envoyés de Babylone, mais il est principalement présenté comme un roi fidèle.",
    "lessonPoints": [
      "Ézéchias prit des mesures concrètes pour restaurer le vrai culte.",
      "Il encouragea le peuple à ne pas avoir peur des Assyriens et à compter sur Jéhovah.",
      "Sa prière lors de la menace de Sennakérib montre qu’il cherchait l’aide divine.",
      "Son erreur avec les envoyés de Babylone rappelle qu’une bonne réputation ne dispense pas de vigilance."
    ],
    "keyReading": "2 Rois 18:1-37 ; 19:1-37 ; 20:1-21 ; 2 Chroniques 29:1-36 ; 32:1-33",
    "location": "Jérusalem et le royaume de Juda.",
    "relationshipWithJehovah": "Ézéchias s’attacha à Jéhovah et lui resta fidèle. Dans la crise assyrienne, il pria Jéhovah et rechercha sa direction.",
    "didYouKnow": "Ézéchias fit fabriquer le tunnel qui conduisait l’eau de la source de Guihôn jusqu’à l’intérieur de Jérusalem, un projet mentionné en 2 Rois 20:20.",
    "jwResources": [
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Ézéchias était roi de Juda et un réformateur fidèle qui combattit l’idolâtrie et fit confiance à Jéhovah lors de la menace assyrienne.",
    "era": "VIIIe siècle av. n. è.",
    "familyAndEntourage": [
      "Ahaz, son père",
      "Manassé, son fils",
      "Isaïe",
      "Sennachérib",
      "Les habitants de Jérusalem"
    ],
    "bibleAccount": [
      "Il détruit les objets liés au faux culte.",
      "Il encourage le peuple à se tourner vers Jéhovah.",
      "Sennachérib menace Jérusalem et Rabshaqé cherche à décourager les habitants.",
      "Ézéchias prie et présente la situation à Jéhovah.",
      "Jéhovah délivre Jérusalem de l’armée assyrienne."
    ],
    "qualities": [
      "Foi",
      "Courage",
      "Zèle pour le culte pur",
      "Prière"
    ],
    "difficulties": [
      "Il doit faire face à une menace militaire écrasante et à des paroles destinées à affaiblir la confiance du peuple."
    ]
  },
  "josiah": {
    "studyFocus": "Josias devint roi de Juda alors qu’il était encore jeune. Il entreprit une vaste réforme religieuse, fit réparer le temple et réagit avec humilité lorsqu’on lui lut le livre de la Loi retrouvé. Il mourut après s’être engagé dans une bataille contre le roi d’Égypte.",
    "lessonPoints": [
      "Josias chercha Jéhovah dès sa jeunesse.",
      "Il élimina de nombreuses pratiques idolâtriques et encouragea le peuple à suivre la Loi.",
      "Sa réaction au contenu du livre de la Loi montre qu’il acceptait humblement la correction.",
      "Son exemple montre l’importance d’agir selon la Parole de Dieu plutôt que selon les tendances du moment."
    ],
    "keyReading": "2 Rois 22:1-20 ; 23:1-30 ; 2 Chroniques 34:1-33 ; 35:20-27",
    "location": "Jérusalem et le royaume de Juda.",
    "relationshipWithJehovah": "Josias s’humilia devant Jéhovah et chercha à rétablir son culte. Jéhovah remarqua son attitude humble lors de la lecture de la Loi.",
    "didYouKnow": "Josias avait huit ans lorsqu’il devint roi et 16 ans lorsqu’il commença à rechercher le Dieu de David, selon 2 Chroniques 34:1-3.",
    "jwResources": [
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Josias était roi de Juda et entreprit une vaste réforme religieuse après avoir entendu le livre de la Loi retrouvé dans le temple.",
    "era": "VIIe siècle av. n. è.",
    "familyAndEntourage": [
      "Amon, son père",
      "Hilqiya le grand prêtre",
      "Houlda la prophétesse",
      "Le peuple de Juda"
    ],
    "bibleAccount": [
      "Il devient roi très jeune.",
      "Il entreprend de réparer le temple et de supprimer les objets idolâtriques.",
      "Le livre de la Loi est retrouvé et lu devant lui.",
      "Il est profondément touché par les avertissements de la Loi.",
      "Il fait renouveler l’alliance avec Jéhovah et célèbre une Pâque exceptionnelle."
    ],
    "qualities": [
      "Humilité",
      "Réceptivité à la Parole de Dieu",
      "Courage",
      "Zèle"
    ],
    "difficulties": [
      "Il hérite d’un pays profondément marqué par l’idolâtrie et doit entreprendre des réformes considérables malgré des années de mauvaises influences."
    ]
  },
  "jehoshaphat": {
    "studyFocus": "Yehoshaphat, roi de Juda, chercha Jéhovah et entreprit d’enseigner la Loi au peuple. Il connut aussi des alliances discutables avec le royaume d’Israël. Lorsque Juda fut menacé par une coalition ennemie, il pria Jéhovah et vit une délivrance.",
    "lessonPoints": [
      "Yehoshaphat envoya des responsables et des Lévites enseigner la Loi dans les villes de Juda.",
      "Face à une armée supérieure, il reconnut publiquement sa dépendance envers Jéhovah.",
      "Il commit toutefois des erreurs en coopérant avec le roi Achab et d’autres rois d’Israël.",
      "Son exemple montre à la fois les bienfaits de la confiance en Jéhovah et la nécessité de choisir soigneusement ses alliances."
    ],
    "keyReading": "2 Chroniques 17:1-19 ; 18:1-34 ; 19:1-11 ; 20:1-30",
    "location": "Jérusalem et le royaume de Juda.",
    "relationshipWithJehovah": "Yehoshaphat chercha Jéhovah, pria dans les moments de crise et encouragea le peuple à avoir foi en lui.",
    "didYouKnow": "Avant une bataille décisive, Yehoshaphat plaça des chanteurs devant l’armée pour louer Jéhovah, selon 2 Chroniques 20:21.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Roi de Juda — Yehoshaphat cherche Jéhovah et organise l’enseignement de la Loi dans le royaume de Juda.",
    "era": "Rois de Juda",
    "familyAndEntourage": [
      "Juda",
      "Les Lévites",
      "Jéhu fils de Hanani"
    ],
    "bibleAccount": [
      "Renforce son royaume.",
      "Envoie des responsables enseigner la Loi au peuple.",
      "Prie et cherche la direction de Jéhovah face à une menace militaire."
    ],
    "qualities": [
      "Foi",
      "Organisation",
      "Humilité"
    ],
    "difficulties": []
  },
  "jonah": {
    "studyFocus": "Jonas était un prophète envoyé par Jéhovah à Ninive. Il tenta d’abord de fuir sa mission, fut sauvé après avoir été jeté à la mer et finit par annoncer le message à Ninive. Lorsque les habitants se repentirent, Jonas eut du mal à accepter la miséricorde de Jéhovah.",
    "lessonPoints": [
      "Jonas apprit que l’on ne peut pas fuir une mission confiée par Jéhovah.",
      "Sa prière depuis l’intérieur du poisson montre qu’il pouvait retrouver sa confiance après une faute.",
      "Il accomplit finalement sa mission et les habitants de Ninive réagirent favorablement.",
      "Son irritation devant la miséricorde de Jéhovah révèle qu’il devait encore ajuster son point de vue."
    ],
    "keyReading": "Jonas 1:1-17 ; 2:1-10 ; 3:1-10 ; 4:1-11",
    "location": "Israël, la mer Méditerranée et Ninive en Assyrie.",
    "relationshipWithJehovah": "Jéhovah corrigea Jonas avec patience et lui enseigna que Sa miséricorde peut s’étendre à des personnes qui se repentent.",
    "didYouKnow": "Jésus a utilisé « le signe de Jonas » pour annoncer sa propre mort et sa résurrection, selon Matthieu 12:39-41.",
    "jwResources": [
      {
        "title": "L’histoire de Jonas : une leçon de courage et de miséricorde",
        "url": "https://www.jw.org/fr/bibliotheque/videos/histoire-de-jonas-courage-et-misericorde/"
      },
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Prophète — Jonas reçoit la mission de prévenir Ninive, fuit d’abord sa mission puis finit par transmettre le message.",
    "era": "Prophètes",
    "familyAndEntourage": [
      "Ninive",
      "Les marins"
    ],
    "bibleAccount": [
      "Reçoit une mission pour Ninive.",
      "Fuit vers une autre direction.",
      "Est sauvé après avoir été jeté à la mer.",
      "Annonce le message à Ninive."
    ],
    "qualities": [
      "Obéissance progressive",
      "Humilité à apprendre"
    ],
    "difficulties": [
      "Son histoire montre que les sentiments personnels peuvent entrer en conflit avec une mission confiée par Dieu."
    ]
  },
  "saul_king": {
    "studyFocus": "Saül fut le premier roi humain d’Israël. Il commença humblement mais désobéit ensuite à plusieurs reprises aux instructions de Jéhovah. Sa jalousie envers David finit par dominer une grande partie de sa conduite et il mourut lors d’une bataille contre les Philistins.",
    "lessonPoints": [
      "Saül fut initialement présenté comme quelqu’un de modeste et hésitant devant la responsabilité royale.",
      "Il désobéit à Jéhovah en offrant un sacrifice sans attendre Samuel puis en épargnant Agag et le meilleur du bétail.",
      "Sa jalousie envers David l’amena à le poursuivre au lieu de se concentrer sur sa propre fidélité.",
      "Son histoire montre qu’un bon départ ne suffit pas : il faut continuer à obéir à Jéhovah."
    ],
    "keyReading": "1 Samuel 9:1-27 ; 10:1-27 ; 13:1-15 ; 15:1-35 ; 18:6-30 ; 31:1-13",
    "location": "Israël, notamment Guibéa et les régions où il combattit les Philistins.",
    "relationshipWithJehovah": "Saül fut choisi par Jéhovah comme roi, mais sa désobéissance répétée entraîna son rejet comme roi et la perte de son approbation.",
    "didYouKnow": "Saül était plus grand que tout le peuple, dépassant les autres Israélites d’une tête, selon 1 Samuel 9:2 et 10:23.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Premier roi d’Israël — Saül a commencé humblement comme premier roi d’Israël, mais a ensuite désobéi à Jéhovah et est devenu arrogant.",
    "era": "Rois d’Israël",
    "familyAndEntourage": [
      "Jonathan",
      "David",
      "Samuel"
    ],
    "bibleAccount": [
      "Est oint comme premier roi d’Israël.",
      "Combat les ennemis d’Israël.",
      "Désobéit à plusieurs instructions divines.",
      "Poursuit David malgré la loyauté de celui-ci.",
      "La fiche JW.org oppose clairement son humilité initiale à son évolution."
    ],
    "qualities": [
      "Courage initial",
      "Capacité de chef"
    ],
    "difficulties": [
      "Son parcours montre l’importance de l’obéissance et de l’humilité."
    ]
  },
  "manoah_father": {
    "studyFocus": "Manoah était le père de Samson et le mari de la femme qui avait été stérile. Lorsque l’ange de Jéhovah annonça la naissance de Samson, Manoah demanda des instructions sur la manière d’élever l’enfant. Il pria aussi pour comprendre la mission particulière de son fils.",
    "lessonPoints": [
      "Manoah demanda à Jéhovah de l’aider à élever correctement son fils.",
      "Il chercha des instructions précises plutôt que de compter uniquement sur ses propres idées.",
      "Avec sa femme, il offrit un sacrifice à Jéhovah après la rencontre avec l’ange.",
      "Son exemple montre l’intérêt de demander à Jéhovah de la sagesse pour les responsabilités familiales."
    ],
    "keyReading": "Juges 13:1-25",
    "location": "Manoa vivait à Tsora, dans le territoire de Dan.",
    "relationshipWithJehovah": "Manoah pria Jéhovah et chercha sa direction concernant l’éducation de Samson et l’annonce faite par l’ange.",
    "didYouKnow": "Le récit ne donne pas le nom de la femme de Manoah, alors que le père de Samson est nommé.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Père de Samson — Manoa reçoit avec sa femme l’annonce de la naissance de Samson et demande comment élever l’enfant.",
    "era": "Juges",
    "familyAndEntourage": [
      "Sa femme",
      "Samson"
    ],
    "bibleAccount": [
      "Demande des instructions concernant son futur fils.",
      "Offre un sacrifice avec sa femme.",
      "Cherche à comprendre les instructions reçues."
    ],
    "qualities": [
      "Foi",
      "Désir d’apprendre"
    ],
    "difficulties": []
  },
  "zephaniah": {
    "studyFocus": "Sophonie était un prophète qui annonça un message de jugement contre Juda et les nations, tout en donnant l’espoir d’un peuple humble qui chercherait Jéhovah. Son ministère se situe avant la destruction de Jérusalem.",
    "lessonPoints": [
      "Sophonie avertit clairement contre l’idolâtrie et l’indifférence spirituelle.",
      "Il encouragea les humbles à rechercher Jéhovah et la justice.",
      "Son message associe jugement et espoir de restauration.",
      "Son exemple rappelle l’importance de parler avec courage lorsque les principes de Jéhovah sont en jeu."
    ],
    "keyReading": "Sophonie 1:1-18 ; 2:1-15 ; 3:1-20",
    "location": "Juda et Jérusalem.",
    "relationshipWithJehovah": "Sophonie transmit fidèlement les paroles de Jéhovah et invita les personnes humbles à chercher refuge auprès de lui.",
    "didYouKnow": "Sophonie était contemporain du règne de Josias, et son livre commence par préciser la période royale durant laquelle il prophétisa.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Prophète de Juda — Sophonie annonce un jour de jugement et encourage ceux qui cherchent Jéhovah à pratiquer la justice et la douceur.",
    "era": "Prophètes",
    "familyAndEntourage": [
      "Juda",
      "Les humbles du pays"
    ],
    "bibleAccount": [
      "Dénonce l’idolâtrie et les pratiques mauvaises.",
      "Annonce le jour de Jéhovah.",
      "Encourage les humbles à chercher Jéhovah."
    ],
    "qualities": [
      "Courage",
      "Franchise",
      "Espérance"
    ],
    "difficulties": []
  },
  "habakkuk": {
    "studyFocus": "Habacuc est un prophète qui osa poser à Jéhovah des questions difficiles sur la violence et l’injustice. Jéhovah lui répondit en lui expliquant que les Chaldéens seraient utilisés pour exécuter un jugement, puis montra que cette nation serait elle-même jugée. Le livre se termine par une expression remarquable de confiance.",
    "lessonPoints": [
      "Habacuc exprima ses inquiétudes à Jéhovah avec franchise.",
      "Il accepta de rester attentif à la réponse divine plutôt que de tirer ses propres conclusions.",
      "Il apprit que le juste vivrait par sa fidélité.",
      "Même en l’absence de récoltes ou de nourriture, il décida de continuer à se réjouir en Jéhovah."
    ],
    "keyReading": "Habacuc 1:1-17 ; 2:1-20 ; 3:1-19",
    "location": "Juda, avant la destruction de Jérusalem.",
    "relationshipWithJehovah": "Habacuc transforma ses questions en confiance et termina son livre en affirmant que Jéhovah était sa force.",
    "didYouKnow": "Habacuc 2:4 contient la déclaration « le juste vivra par sa fidélité », reprise ensuite dans les Écritures grecques chrétiennes.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Prophète de Juda — Habacuc exprime ses questions devant la violence et l’injustice puis affirme sa confiance en Jéhovah.",
    "era": "Prophètes",
    "familyAndEntourage": [
      "Jéhovah",
      "Juda"
    ],
    "bibleAccount": [
      "Pose des questions franches sur l’injustice.",
      "Reçoit une réponse prophétique.",
      "Termine par une expression de confiance malgré des circonstances difficiles."
    ],
    "qualities": [
      "Honnêteté dans la prière",
      "Foi",
      "Persévérance"
    ],
    "difficulties": []
  },
  "amos": {
    "studyFocus": "Amos était un éleveur et cultivateur de sycomores de Tekoa que Jéhovah envoya prophétiser contre le royaume d’Israël. Il dénonça l’injustice, l’oppression des pauvres et un culte devenu hypocrite.",
    "lessonPoints": [
      "Amos n’était pas issu d’une école de prophètes mais fut choisi pour transmettre un message précis.",
      "Il dénonça l’exploitation des pauvres et les pratiques religieuses hypocrites.",
      "Il ne se laissa pas intimider lorsqu’Amatsia, prêtre de Béthel, lui demanda de partir.",
      "Son message montre que Jéhovah attend que l’adoration soit accompagnée de justice et d’intégrité."
    ],
    "keyReading": "Amos 1:1 ; 3:7,8 ; 5:10-24 ; 7:10-17 ; 8:4-7 ; 9:11-15",
    "location": "Tekoa en Juda et Béthel dans le royaume d’Israël.",
    "relationshipWithJehovah": "Amos accepta la mission que Jéhovah lui confia et parla avec courage malgré l’opposition.",
    "didYouKnow": "Amos était éleveur et cultivait des sycomores avant d’être envoyé prophétiser, comme il l’explique lui-même en Amos 7:14,15.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Prophète — Amos, éleveur et cultivateur de sycomores, reçoit la mission de dénoncer les injustices et le faux culte en Israël.",
    "era": "Prophètes",
    "familyAndEntourage": [
      "Israël",
      "Amatsia"
    ],
    "bibleAccount": [
      "Quitte son activité pour transmettre le message prophétique.",
      "Dénonce l’oppression des pauvres.",
      "Condamne un culte devenu hypocrite.",
      "Annonce le jugement tout en évoquant un rétablissement futur."
    ],
    "qualities": [
      "Courage",
      "Justice",
      "Franchise"
    ],
    "difficulties": []
  },
  "micah": {
    "studyFocus": "Michée était un prophète de Juda qui dénonça la corruption des dirigeants et annonça des jugements tout en donnant des promesses d’espoir. Son livre contient notamment la prophétie concernant Bethléem comme lieu associé au futur dirigeant d’Israël.",
    "lessonPoints": [
      "Michée dénonça les chefs qui exploitaient le peuple.",
      "Il annonça le jugement mais aussi la restauration du vrai culte.",
      "Il résuma les exigences de Jéhovah par la justice, la fidélité et la modestie.",
      "Ses prophéties montrent que Jéhovah peut donner de l’espoir même au milieu d’un jugement."
    ],
    "keyReading": "Michée 1:1-16 ; 3:1-12 ; 4:1-13 ; 5:1-5 ; 6:6-8 ; 7:1-20",
    "location": "Juda, notamment la région de Morésheth.",
    "relationshipWithJehovah": "Michée transmit courageusement les messages de Jéhovah et rappela au peuple ce que Dieu attendait de lui.",
    "didYouKnow": "Michée 5:2 est cité en Matthieu 2:5,6 en rapport avec Bethléem et la naissance du Messie.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Prophète — Michée dénonce les injustices et l’infidélité tout en annonçant des promesses concernant le peuple de Dieu.",
    "era": "Prophètes",
    "familyAndEntourage": [
      "Juda",
      "Israël"
    ],
    "bibleAccount": [
      "Dénonce les dirigeants injustes.",
      "Annonce des jugements contre Samarie et Jérusalem.",
      "Rappelle ce que Jéhovah demande à ses serviteurs."
    ],
    "qualities": [
      "Justice",
      "Courage",
      "Espérance"
    ],
    "difficulties": []
  },
  "obadiah": {
    "studyFocus": "Abdias est l’auteur du plus court livre des Écritures hébraïques. Son message condamne Édom pour son attitude envers Juda lors de la catastrophe qui frappa Jérusalem et annonce que Jéhovah rétablirait son peuple.",
    "lessonPoints": [
      "Abdias montre que Jéhovah observe la manière dont les nations traitent son peuple.",
      "Le jugement d’Édom est lié à son orgueil et à sa violence envers Jacob.",
      "Le livre ne s’arrête pas au jugement : il annonce le rétablissement du peuple de Jéhovah.",
      "Son message rappelle que l’orgueil et la réjouissance face au malheur d’autrui peuvent avoir de graves conséquences."
    ],
    "keyReading": "Abdias 1-21",
    "location": "Le contexte concerne Édom et Juda, notamment Jérusalem.",
    "relationshipWithJehovah": "Abdias transmit un jugement divin contre Édom et termina par une déclaration sur la royauté de Jéhovah.",
    "didYouKnow": "Avec seulement 21 versets, Abdias est le livre le plus court des Écritures hébraïques.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Prophète — Obadia annonce le jugement contre Édom et évoque le rétablissement du peuple de Jéhovah.",
    "era": "Prophètes",
    "familyAndEntourage": [
      "Édom",
      "Jacob"
    ],
    "bibleAccount": [
      "Annonce le jugement contre Édom.",
      "Dénonce la violence commise contre Jacob.",
      "Annonce la délivrance sur le mont Sion."
    ],
    "qualities": [
      "Courage",
      "Justice",
      "Espérance"
    ],
    "difficulties": []
  },
  "joel": {
    "studyFocus": "Joël est un prophète dont le livre décrit une invasion dévastatrice de sauterelles et appelle le peuple à revenir à Jéhovah. Il annonce aussi l’effusion de l’esprit et le jour de Jéhovah.",
    "lessonPoints": [
      "Joël utilisa une catastrophe nationale pour pousser le peuple à examiner sa relation avec Jéhovah.",
      "Il insista sur une repentance sincère, pas seulement extérieure.",
      "Il annonça que Jéhovah peut faire preuve de miséricorde envers ceux qui reviennent vers lui.",
      "Pierre cita la prophétie de Joël concernant l’effusion de l’esprit saint à la Pentecôte."
    ],
    "keyReading": "Joël 1:1-20 ; 2:1-32 ; 3:1-21",
    "location": "Juda et Jérusalem.",
    "relationshipWithJehovah": "Joël invita le peuple à revenir à Jéhovah « de tout son cœur » et à avoir confiance dans sa miséricorde.",
    "didYouKnow": "Actes 2:16-21 applique à la Pentecôte la prophétie de Joël 2:28-32 sur l’effusion de l’esprit.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Prophète — Yoël utilise une invasion de sauterelles comme contexte pour appeler le peuple à revenir à Jéhovah.",
    "era": "Prophètes",
    "familyAndEntourage": [
      "Juda",
      "Le peuple"
    ],
    "bibleAccount": [
      "Décrit une invasion dévastatrice.",
      "Appelle le peuple à revenir sincèrement à Jéhovah.",
      "Annonce une effusion de l’esprit et des jours de rétablissement."
    ],
    "qualities": [
      "Urgence",
      "Foi",
      "Espérance"
    ],
    "difficulties": []
  },
  "nahum": {
    "studyFocus": "Nahum annonça le jugement de Jéhovah contre Ninive, capitale de l’Assyrie. Son message montre que la puissance militaire et la cruauté d’un empire ne peuvent empêcher Jéhovah d’exécuter son jugement.",
    "lessonPoints": [
      "Nahum rappelle que Jéhovah ne laisse pas indéfiniment l’oppression impunie.",
      "Son message devait consoler ceux qui avaient souffert sous la domination assyrienne.",
      "Il décrit la chute de Ninive avec précision et force.",
      "Le livre associe la justice de Jéhovah à son souci de protéger ceux qui cherchent refuge auprès de lui."
    ],
    "keyReading": "Nahum 1:1-15 ; 2:1-13 ; 3:1-19",
    "location": "Juda et Ninive, en Assyrie.",
    "relationshipWithJehovah": "Nahum transmit le jugement de Jéhovah contre Ninive et rappela que Jéhovah est un refuge pour ceux qui se réfugient en lui.",
    "didYouKnow": "La prophétie de Nahum annonce la chute de Ninive, qui fut finalement détruite par les forces des Mèdes et des Babyloniens.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Prophète — Nahum annonce la chute de Ninive et présente Jéhovah comme un Dieu juste qui ne laisse pas le mal impuni.",
    "era": "Prophètes",
    "familyAndEntourage": [
      "Ninive",
      "Juda"
    ],
    "bibleAccount": [
      "Annonce la chute de Ninive.",
      "Dénonce la violence et l’oppression assyriennes.",
      "Encourage le peuple par l’annonce de la fin de l’oppression."
    ],
    "qualities": [
      "Courage",
      "Espérance",
      "Sens de la justice"
    ],
    "difficulties": []
  },
  "zechariah_priest": {
    "studyFocus": "Zacharie, père de Jean le Baptiseur, était prêtre de la division d’Abia. Alors qu’il servait au temple, l’ange Gabriel lui annonça que sa femme Élisabeth aurait un fils. Zacharie eut du mal à croire cette annonce et devint temporairement muet, puis il loua Jéhovah après la naissance de Jean.",
    "lessonPoints": [
      "Zacharie servait fidèlement au temple lorsqu’il reçut son annonce.",
      "Il eut momentanément du mal à croire une promesse qui semblait humainement impossible.",
      "Après la naissance de Jean, il manifesta sa foi dans une prophétie inspirée.",
      "Son histoire montre que Jéhovah peut être patient avec une personne qui apprend à faire confiance à sa parole."
    ],
    "keyReading": "Luc 1:5-25 ; 57-80",
    "location": "Juda, notamment le temple de Jérusalem et la région montagneuse où vivait sa famille.",
    "relationshipWithJehovah": "Zacharie était décrit comme juste devant Dieu avec Élisabeth. Après l’accomplissement de la promesse, il loua Jéhovah et prophétisa sous l’action de l’esprit saint.",
    "didYouKnow": "Zacharie appartenait à la division sacerdotale d’Abia, et son service au temple fut le contexte de l’annonce concernant Jean.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Zacharie était un prêtre de la classe d’Abiya, mari d’Élisabeth et père de Jean le Baptiste. L’ange Gabriel lui annonça la naissance de son fils.",
    "era": "Ier siècle de n. è.",
    "familyAndEntourage": [
      "Élisabeth",
      "Jean le Baptiste",
      "Gabriel",
      "Jésus"
    ],
    "bibleAccount": [
      "Il sert comme prêtre au temple de Jérusalem.",
      "Gabriel lui annonce que sa femme aura un fils malgré son âge avancé.",
      "Parce qu’il doute momentanément, il devient muet jusqu’à la naissance de Jean.",
      "Après la naissance de son fils, il retrouve la parole et prophétise."
    ],
    "qualities": [
      "Piété",
      "Service sacerdotal",
      "Foi qui se fortifie après correction"
    ],
    "difficulties": [
      "Il demande un signe malgré le message de Gabriel et reste muet pendant la grossesse d’Élisabeth."
    ]
  },
  "elizabeth": {
    "studyFocus": "Élisabeth était l’épouse de Zacharie et une descendante d’Aaron. Elle fut longtemps stérile, puis conçut Jean le Baptiseur. Elle accueillit Marie avec foi et reconnut sous inspiration que l’enfant que Marie portait était le futur Seigneur.",
    "lessonPoints": [
      "Élisabeth et Zacharie étaient décrits comme justes devant Dieu malgré leur stérilité.",
      "Elle accueillit Marie avec chaleur et discernement spirituel.",
      "Elle reconnut que Jéhovah avait supprimé sa honte liée à la stérilité.",
      "Elle participa à l’éducation d’un enfant qui allait préparer le chemin du Messie."
    ],
    "keyReading": "Luc 1:5-25 ; 39-45 ; 57-66",
    "location": "La région montagneuse de Juda.",
    "relationshipWithJehovah": "Élisabeth fut bénie par Jéhovah avec une grossesse tardive et parla sous l’action de l’esprit saint lorsqu’elle accueillit Marie.",
    "didYouKnow": "Élisabeth était parente de Marie et était déjà enceinte de six mois lorsque Gabriel annonça à Marie sa propre grossesse.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Élisabeth était une descendante d’Aaron, épouse du prêtre Zekaria et mère de Jean le Baptiseur. Elle était parente de Marie.",
    "era": "Juste avant la naissance de Jésus et de Jean",
    "familyAndEntourage": [
      "Zekaria",
      "Jean le Baptiseur",
      "Marie",
      "Jésus"
    ],
    "bibleAccount": [
      "Elle et Zekaria sont décrits comme justes devant Dieu.",
      "Elle reste enceinte pendant six mois avant la visite de Marie.",
      "Elle reconnaît sous l’inspiration de l’esprit saint que Marie est la mère du Seigneur.",
      "Elle donne naissance à Jean et participe au choix de son nom."
    ],
    "qualities": [
      "Foi",
      "Humilité",
      "Reconnaissance"
    ],
    "difficulties": [
      "Elle a longtemps été stérile et âgée lorsqu’elle a conçu Jean."
    ]
  },
  "joseph_jesus_father": {
    "studyFocus": "Joseph, mari de Marie et père adoptif de Jésus, était un charpentier de la famille de David. Il accepta de prendre Marie pour épouse malgré une situation qui pouvait susciter des questions et suivit les instructions de Jéhovah pour protéger Jésus, notamment en fuyant en Égypte.",
    "lessonPoints": [
      "Joseph se montra juste et miséricordieux envers Marie.",
      "Il accepta rapidement les instructions reçues en rêve.",
      "Il protégea Jésus en obéissant à l’ordre de fuir en Égypte.",
      "Il éleva Jésus dans une famille qui respectait la Loi et fréquentait Jérusalem pour les fêtes."
    ],
    "keyReading": "Matthieu 1:18-25 ; 2:13-23 ; Luc 2:1-52",
    "location": "Bethléhem, Égypte, puis Nazareth en Galilée.",
    "relationshipWithJehovah": "Joseph obéit à plusieurs reprises aux instructions transmises par les anges et adapta ses décisions pour protéger l’enfant Jésus.",
    "didYouKnow": "Joseph était charpentier, et Jésus est aussi appelé « le fils du charpentier » en Matthieu 13:55.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Joseph était le mari de Marie et le père adoptif de Jésus. Il était charpentier et descendait de David.",
    "era": "De la naissance de Jésus jusqu’à son adolescence",
    "familyAndEntourage": [
      "Marie",
      "Jésus",
      "Les frères et sœurs de Jésus"
    ],
    "bibleAccount": [
      "Il accepte de prendre Marie pour femme malgré sa grossesse miraculeuse.",
      "Il protège Jésus en fuyant en Égypte sur instruction divine.",
      "Il revient avec sa famille et s’installe à Nazareth.",
      "Il emmène chaque année sa famille à Jérusalem pour la Pâque."
    ],
    "qualities": [
      "Obéissance",
      "Justice",
      "Courage",
      "Responsabilité familiale"
    ],
    "difficulties": [
      "Il doit protéger sa famille contre Hérode et prendre des décisions rapides sur la base des instructions reçues en rêve."
    ]
  },
  "joseph_caiaphas": {
    "studyFocus": "Caïphe — grand prêtre au temps de Jésus",
    "lessonPoints": [
      "Danger de la pression religieuse",
      "Responsabilité",
      "Examiner les motivations"
    ],
    "keyReading": "Jean 11:47-53; 18:12-24; Matthieu 26:57-68; Actes 4:5-21",
    "location": "Jérusalem.",
    "relationshipWithJehovah": "Le récit biblique le présente comme opposé à Jésus et à ses disciples. Il illustre le danger de laisser la position religieuse ou les intérêts institutionnels prendre le dessus sur l’obéissance à Dieu.",
    "didYouKnow": "Caïphe prophétisa sans le savoir lorsqu’il déclara qu’il était avantageux qu’un seul homme meure pour le peuple; Jean explique que cette parole annonçait le rôle de Jésus.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Joseph Caïphe était le grand prêtre juif qui participa aux démarches contre Jésus et qui présida des interrogatoires liés à ses disciples.",
    "era": "Ier siècle de n. è.",
    "familyAndEntourage": [
      "Anne, son beau-père",
      "Jésus",
      "Le Sanhédrin",
      "Pierre et Jean"
    ],
    "bibleAccount": [
      "Il participe au complot visant Jésus.",
      "Il interroge Jésus et joue un rôle dans sa condamnation par les autorités religieuses.",
      "Il participe ensuite à l’opposition contre les apôtres.",
      "Il fait partie de ceux qui cherchent à faire taire la prédication chrétienne."
    ],
    "qualities": [
      "Autorité institutionnelle",
      "Influence politique et religieuse"
    ],
    "difficulties": [
      "Il s’oppose au ministère de Jésus et à la prédication des apôtres, malgré les témoignages qu’il entend."
    ]
  },
  "joanna": {
    "studyFocus": "Jeanne faisait partie des femmes qui accompagnaient Jésus et les apôtres et les soutenaient matériellement.",
    "lessonPoints": [
      "Générosité : elle a utilisé ses ressources pour soutenir le ministère de Jésus.",
      "Fidélité : elle a continué à être associée aux disciples.",
      "Témoignage : elle faisait partie des femmes qui ont rapporté aux apôtres ce qu’elles avaient vu après la résurrection."
    ],
    "keyReading": "Luc 8:1-3; 24:1-10",
    "location": "Galilée et Jérusalem.",
    "relationshipWithJehovah": "Sa générosité envers Jésus et ses disciples et sa présence comme témoin de la résurrection montrent une foi qui s’exprimait par le soutien matériel et le témoignage.",
    "didYouKnow": "Luc est le seul Évangile à nommer Jeanne parmi les femmes qui soutenaient Jésus et ses apôtres avec leurs biens.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Jeanne était une femme qui avait été guérie par Jésus et qui le soutenait, avec d’autres femmes, au moyen de ses biens.",
    "era": "Ministère terrestre de Jésus",
    "familyAndEntourage": [
      "Chuza, intendant d’Hérode",
      "Marie Madeleine",
      "Suzanne",
      "Jésus"
    ],
    "bibleAccount": [
      "Elle avait été guérie par Jésus.",
      "Elle accompagne Jésus et les Douze.",
      "Elle subvient à leurs besoins avec ses biens.",
      "Elle fait partie des femmes qui se rendent au tombeau et annoncent la résurrection de Jésus."
    ],
    "qualities": [
      "Générosité",
      "Reconnaissance",
      "Courage",
      "Fidélité"
    ],
    "difficulties": [
      "Elle était liée à la maison d’Hérode par son mari Chuza, tout en soutenant publiquement l’activité de Jésus."
    ]
  },
  "samaritan_leper": {
    "studyFocus": "Parmi les dix lépreux guéris par Jésus, un Samaritain est revenu pour remercier Dieu et Jésus.",
    "lessonPoints": [
      "Reconnaissance : il est revenu rendre gloire à Dieu.",
      "Foi : Jésus a souligné sa foi lorsqu’il l’a félicité.",
      "Humilité : il n’a pas considéré la guérison comme un droit acquis."
    ],
    "keyReading": "Luc 17:11-19",
    "location": "Entre Samarie et Galilée.",
    "relationshipWithJehovah": "Il glorifie Dieu après avoir constaté sa guérison et revient remercier Jésus. Sa réaction montre que la foi authentique s’accompagne de reconnaissance.",
    "didYouKnow": "Jésus remarqua expressément que le seul homme revenu pour rendre gloire à Dieu était un Samaritain, alors que les neuf autres étaient eux aussi guéris.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "L’un des dix lépreux guéris par Jésus était un Samaritain. Il fut le seul des dix à revenir remercier Jésus et à glorifier Dieu.",
    "era": "Ier siècle de n. è.",
    "familyAndEntourage": [
      "Les neuf autres lépreux",
      "Jésus",
      "Les prêtres"
    ],
    "bibleAccount": [
      "Dix lépreux demandent à Jésus d’avoir pitié d’eux.",
      "Jésus leur dit de se montrer aux prêtres.",
      "En chemin, les dix sont guéris.",
      "Le Samaritain revient, glorifie Dieu et tombe aux pieds de Jésus pour le remercier.",
      "Jésus souligne sa reconnaissance et sa foi."
    ],
    "qualities": [
      "Gratitude",
      "Foi",
      "Humilité"
    ],
    "difficulties": [
      "Comme lépreux et Samaritain, il subissait probablement une double mise à l’écart sociale et religieuse; le récit montre cependant qu’il ne laisse pas la guérison devenir une simple faveur oubliée."
    ]
  },
  "woman_issue_blood": {
    "studyFocus": "La femme qui souffrait de pertes de sang depuis douze ans a manifesté une foi remarquable en Jésus et a reçu une guérison.",
    "lessonPoints": [
      "Foi : elle croyait qu’un contact avec le vêtement de Jésus suffirait à l’aider.",
      "Persévérance : elle avait cherché de nombreuses solutions avant de venir à Jésus.",
      "Humilité : elle a expliqué publiquement ce qui lui était arrivé lorsque Jésus l’a interrogée."
    ],
    "keyReading": "Marc 5:25-34; Matthieu 9:20-22; Luc 8:43-48",
    "location": "Galilée, probablement près de Capharnaüm.",
    "relationshipWithJehovah": "Jésus attribue sa guérison à sa foi. Son geste montre sa confiance en la puissance que Jéhovah avait donnée à Jésus.",
    "didYouKnow": "Marc précise que la maladie durait depuis douze ans et que la femme avait beaucoup souffert entre les mains de nombreux médecins avant de venir à Jésus.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "La femme qui avait des pertes de sang souffrait depuis 12 ans. Elle s’approcha discrètement de Jésus avec la conviction que même toucher son vêtement pourrait la guérir.",
    "era": "Vers 31-32 de n. è., pendant le ministère de Jésus",
    "familyAndEntourage": [
      "Jésus",
      "La foule",
      "Les disciples"
    ],
    "bibleAccount": [
      "Elle souffre depuis 12 ans et a dépensé ses ressources auprès de nombreux médecins.",
      "Elle touche le vêtement de Jésus au milieu de la foule.",
      "Elle est immédiatement guérie.",
      "Jésus la fait venir au grand jour et lui parle avec bonté de sa foi."
    ],
    "qualities": [
      "Foi",
      "Courage",
      "Persévérance"
    ],
    "difficulties": [
      "Elle endure une maladie longue et coûteuse et doit surmonter la peur de se présenter devant Jésus après avoir été guérie."
    ]
  },
  "gerasene_man": {
    "studyFocus": "L’homme de la région des Géraséniens qui avait été libéré de l’influence démoniaque a voulu suivre Jésus, mais Jésus lui a confié une autre mission : raconter ce que Dieu avait fait pour lui.",
    "lessonPoints": [
      "Gratitude : il voulait rester avec Jésus après avoir été libéré.",
      "Obéissance : il a accepté la mission qui lui a été donnée plutôt que de choisir lui-même son service.",
      "Témoignage : il a raconté dans toute la région ce que Jésus avait fait pour lui."
    ],
    "keyReading": "Marc 5:1-20; Luc 8:26-39",
    "location": "Région des Géraséniens.",
    "relationshipWithJehovah": "Après sa délivrance, il veut rester avec Jésus, mais reçoit une mission locale: raconter à ses proches les choses que Dieu avait faites pour lui.",
    "didYouKnow": "Dans le récit de Marc, Jésus lui dit de retourner chez lui et de raconter à ses proches les grandes choses que Jéhovah avait faites pour lui.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "L’homme de la région des Géraséniens que Jésus délivra était sous l’influence de nombreux démons. Après sa délivrance, il voulut accompagner Jésus, mais Jésus lui confia une autre mission.",
    "era": "Vers 32 de n. è., pendant le ministère de Jésus",
    "familyAndEntourage": [
      "Jésus",
      "Les habitants de la région",
      "Sa famille et ses proches"
    ],
    "bibleAccount": [
      "Il vivait dans les tombeaux et ne pouvait être maîtrisé.",
      "Jésus chasse les démons qui l’affligeaient.",
      "Les démons entrent dans un grand troupeau de porcs qui se précipite dans la mer.",
      "L’homme est ensuite retrouvé assis, habillé et dans son bon sens.",
      "Il demande à accompagner Jésus, mais Jésus lui demande de raconter chez lui ce que Dieu a fait pour lui."
    ],
    "qualities": [
      "Reconnaissance",
      "Volonté de témoigner"
    ],
    "difficulties": [
      "Il avait vécu dans une situation extrêmement pénible sous l’influence démoniaque et était isolé de la société."
    ]
  },
  "jason_thessalonica": {
    "studyFocus": "Jason de Thessalonique — un hôte courageux",
    "lessonPoints": [
      "Hospitalité",
      "Courage",
      "Soutenir les frères"
    ],
    "keyReading": "Actes 17:1-9; Romains 16:21",
    "location": "Thessalonique.",
    "relationshipWithJehovah": "Son accueil des prédicateurs chrétiens et sa disposition à supporter les conséquences montrent son soutien à la bonne nouvelle.",
    "didYouKnow": "Les opposants prétendaient que Paul et ses compagnons parlaient d’un autre roi, Jésus, ce qui explique les accusations contre Jason.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Jason était un chrétien de Thessalonique qui accueillit Paul et Silas chez lui. Une foule hostile l’entraîna ensuite devant les autorités.",
    "era": "Ier siècle de n. è.",
    "familyAndEntourage": [
      "Paul",
      "Silas",
      "Les frères de Thessalonique",
      "Les chefs de la ville"
    ],
    "bibleAccount": [
      "Il accueille Paul et Silas chez lui.",
      "Des opposants attaquent sa maison en cherchant les missionnaires.",
      "Jason et d’autres croyants sont traînés devant les chefs de la ville.",
      "Ils sont libérés après avoir fourni une caution."
    ],
    "qualities": [
      "Hospitalité",
      "Courage",
      "Soutien aux prédicateurs"
    ],
    "difficulties": [
      "Son hospitalité envers Paul et Silas l’expose à une accusation politique et à des ennuis avec les autorités."
    ]
  },
  "onesiphorus": {
    "studyFocus": "Onésiphore a manifesté un courage et une fidélité remarquables en recherchant Paul et en le réconfortant lorsqu’il était prisonnier.",
    "lessonPoints": [
      "Courage : il n’a pas eu honte des chaînes de Paul.",
      "Persévérance : il l’a recherché avec soin jusqu’à le trouver.",
      "Réconfort : il a souvent encouragé Paul et lui a fait du bien."
    ],
    "keyReading": "2 Timothée 1:15-18; 4:19",
    "location": "Éphèse et Rome.",
    "relationshipWithJehovah": "Paul se souvient avec gratitude de son aide et demande que sa maisonnée reçoive la miséricorde de Jéhovah.",
    "didYouKnow": "Paul souligne qu’Onésiphore n’a pas eu honte de ses chaînes.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Onésiphore était un chrétien qui apporta un soutien précieux à Paul, notamment pendant ses difficultés à Rome.",
    "era": "Ier siècle de n. è.",
    "familyAndEntourage": [
      "Paul",
      "Sa maisonnée",
      "Timothée"
    ],
    "bibleAccount": [
      "Il encourage souvent Paul.",
      "À Rome, il recherche Paul avec empressement et le retrouve.",
      "Il n’a pas honte des chaînes de Paul.",
      "Paul demande que sa maisonnée reçoive la faveur de Jéhovah."
    ],
    "qualities": [
      "Courage",
      "Loyauté",
      "Hospitalité",
      "Empathie"
    ],
    "difficulties": [
      "Il soutient Paul alors que l’apôtre est emprisonné, situation dans laquelle s’associer à lui pouvait attirer des difficultés."
    ]
  },
  "mary_mother_james": {
    "studyFocus": "Marie mère de Jacques — une disciple fidèle",
    "lessonPoints": [
      "Fidélité",
      "Courage",
      "Persévérance"
    ],
    "keyReading": "Actes 12:1-17",
    "location": "Galilée et Jérusalem.",
    "relationshipWithJehovah": "Sa maison est utilisée comme lieu de réunion et de prière des chrétiens, ce qui montre son soutien concret à la congrégation.",
    "didYouKnow": "Le récit mentionne une servante appelée Rhodé et une maison avec une porte donnant sur la rue, donnant un aperçu concret d’un foyer chrétien de Jérusalem.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Marie, mère de Jacques, était une chrétienne de Jérusalem dont la maison servit de lieu de rassemblement pour les disciples.",
    "era": "Ier siècle de n. è.",
    "familyAndEntourage": [
      "Jacques",
      "Pierre",
      "Jean-Marc",
      "Les chrétiens de Jérusalem"
    ],
    "bibleAccount": [
      "Des chrétiens se réunissent chez Marie après l’arrestation de Pierre.",
      "Pierre, libéré, se rend à cette maison.",
      "La servante Rhodé reconnaît sa voix et les disciples présents ont du mal à croire qu’il est devant la porte."
    ],
    "qualities": [
      "Hospitalité",
      "Soutien aux chrétiens",
      "Générosité"
    ],
    "difficulties": [
      "Elle met sa maison à disposition à une période de persécution et de danger pour les disciples."
    ]
  },
  "mary_mark_mother": {
    "studyFocus": "Marie, mère de Jean-Marc — une chrétienne hospitalière",
    "lessonPoints": [
      "Hospitalité",
      "Soutenir la congrégation",
      "Prière"
    ],
    "keyReading": "Actes 12:5-17; 13:5, 13; 15:36-40",
    "location": "Jérusalem.",
    "relationshipWithJehovah": "Elle soutient les chrétiens en mettant son foyer à leur disposition pour la prière et la réunion.",
    "didYouKnow": "Actes 12 montre que des chrétiens se réunissaient chez elle alors que Pierre était emprisonné.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Marie, mère de Jean-Marc, était une chrétienne de Jérusalem dont la maison accueillait des disciples. Son fils Jean-Marc devint compagnon de mission.",
    "era": "Ier siècle de n. è.",
    "familyAndEntourage": [
      "Jean-Marc",
      "Barnabas",
      "Pierre",
      "Paul",
      "Rhodé"
    ],
    "bibleAccount": [
      "Les chrétiens se réunissent chez elle pour prier pendant l’emprisonnement de Pierre.",
      "Pierre se rend chez elle après sa libération.",
      "Son fils Jean-Marc accompagne plus tard Barnabas et Paul dans le ministère."
    ],
    "qualities": [
      "Hospitalité",
      "Soutien spirituel",
      "Générosité"
    ],
    "difficulties": [
      "Sa maison est un lieu de rassemblement à une époque où les disciples subissent l’opposition d’Hérode."
    ]
  },
  "apphia": {
    "studyFocus": "Apphia est saluée avec Philémon et Archippe dans la lettre de Paul, ce qui montre qu’elle faisait partie de la communauté chrétienne liée à la maison de Philémon.",
    "lessonPoints": [
      "Foi : elle était associée aux chrétiens auxquels Paul adressait ses encouragements.",
      "Hospitalité : son nom apparaît dans le contexte d’une maison utilisée pour les réunions chrétiennes.",
      "Responsabilité : son association avec Philémon et Archippe rappelle la contribution de chacun dans la congrégation."
    ],
    "keyReading": "Philémon 1-7",
    "location": "Colosses.",
    "relationshipWithJehovah": "Elle est associée à une famille chrétienne qui accueillait une assemblée et à laquelle Paul demande d’exercer l’amour chrétien envers Onésime.",
    "didYouKnow": "Apphia est l’une des femmes auxquelles Paul adresse personnellement une de ses lettres.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Apphia était une chrétienne associée à Philémon et à l’assemblée qui se réunissait chez lui. Paul lui adresse personnellement ses salutations.",
    "era": "Ier siècle de n. è.",
    "familyAndEntourage": [
      "Philémon",
      "Archippe",
      "Onésime",
      "Paul"
    ],
    "bibleAccount": [
      "Paul l’inclut parmi les destinataires de sa lettre à Philémon.",
      "Elle appartient au cercle chrétien auquel Paul demande d’accueillir Onésime avec amour."
    ],
    "qualities": [
      "Engagement chrétien",
      "Soutien au foyer chrétien"
    ],
    "difficulties": [
      "La Bible donne très peu de détails personnels; il faut éviter de présenter comme certain un lien familial que le texte ne précise pas."
    ]
  },
  "archippus": {
    "studyFocus": "Archippe était un chrétien à qui Paul a demandé de veiller à bien accomplir le ministère qu’il avait reçu dans le Seigneur.",
    "lessonPoints": [
      "Persévérance : Paul l’a encouragé à mener pleinement son ministère.",
      "Responsabilité : une mission reçue de Jéhovah mérite d’être accomplie avec sérieux.",
      "Encouragement : les rappels fraternels peuvent aider un chrétien à rester concentré sur son service."
    ],
    "keyReading": "Philémon 1-7; Colossiens 4:17",
    "location": "Colosses.",
    "relationshipWithJehovah": "Son ministère est présenté comme reçu dans le Seigneur; Paul l’encourage donc à l’accomplir pleinement et fidèlement.",
    "didYouKnow": "Paul l’appelle « notre compagnon de combat », expression soulignant sa participation active au service chrétien.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Archippe était un chrétien associé à Philémon et Apphia et à l’assemblée qui se réunissait chez eux. Paul l’encourage à accomplir pleinement son ministère.",
    "era": "Ier siècle de n. è.",
    "familyAndEntourage": [
      "Philémon",
      "Apphia",
      "Onésime",
      "Paul"
    ],
    "bibleAccount": [
      "Paul le salue dans la lettre à Philémon.",
      "Il est appelé compagnon de combat.",
      "Dans Colossiens, Paul demande qu’on lui dise de bien accomplir le ministère reçu dans le Seigneur."
    ],
    "qualities": [
      "Engagement",
      "Persévérance dans le ministère"
    ],
    "difficulties": [
      "Paul l’encourage à prendre pleinement au sérieux le ministère qui lui a été confié."
    ]
  },
  "john_mark": {
    "studyFocus": "Jean-Marc a connu un début de service marqué par une difficulté, mais il a ensuite retrouvé la confiance de Paul et est devenu un collaborateur utile.",
    "lessonPoints": [
      "Progrès : une erreur ou une période difficile ne détermine pas toute une vie de service.",
      "Persévérance : Jean-Marc a repris une activité missionnaire.",
      "Encouragement : Barnabas et plus tard Paul ont reconnu son utilité."
    ],
    "keyReading": "Actes 12:12; 13:5, 13; 15:36-40; Colossiens 4:10; 2 Timothée 4:11",
    "location": "Jérusalem, Chypre et diverses régions.",
    "relationshipWithJehovah": "Son parcours montre qu’un échec dans le service n’empêche pas nécessairement de retrouver une place utile. Paul finit par le considérer comme précieux pour le ministère.",
    "didYouKnow": "Paul demande finalement à Timothée de faire venir Marc, car il lui est utile pour le ministère.",
    "jwResources": [
      {
        "title": "Marche courageusement avec Dieu — Marc",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/debuts-du-christianisme/marc-il-me-sera-utile/"
      },
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Jean-Marc était un chrétien de Jérusalem qui accompagna Paul et Barnabas dans une partie de leur première tournée missionnaire. Après une séparation, il retrouva la confiance de Paul.",
    "era": "Ier siècle de n. è.",
    "familyAndEntourage": [
      "Marie, sa mère",
      "Barnabas, son cousin",
      "Paul",
      "Pierre"
    ],
    "bibleAccount": [
      "Il accompagne Paul et Barnabas depuis Jérusalem.",
      "Il les quitte en Pamphylie et retourne à Jérusalem.",
      "Barnabas veut l’emmener à nouveau, mais Paul refuse d’abord.",
      "Plus tard, Paul considère Jean-Marc comme utile au ministère."
    ],
    "qualities": [
      "Esprit de service",
      "Persévérance",
      "Capacité à progresser"
    ],
    "difficulties": [
      "Son départ de la première tournée provoque un désaccord entre Paul et Barnabas.",
      "Il doit ensuite démontrer par ses actions qu’il peut être à nouveau digne de confiance."
    ]
  },
  "priscilla": {
    "studyFocus": "Priscille et Aquilas formaient un couple chrétien qui a collaboré étroitement avec Paul et a aidé Apollos à mieux comprendre les enseignements de Dieu.",
    "lessonPoints": [
      "Enseignement : Priscille et Aquilas ont expliqué plus précisément les enseignements à Apollos.",
      "Hospitalité : leur foyer servait au soutien de l’activité chrétienne.",
      "Collaboration : ils ont travaillé avec Paul et ont risqué leur vie pour lui."
    ],
    "keyReading": "Actes 18:1-28; Romains 16:3-5; 1 Corinthiens 16:19",
    "location": "Corinthe, Éphèse et Rome.",
    "relationshipWithJehovah": "Priscille met son foyer, ses compétences et sa sécurité au service de la bonne nouvelle. Elle contribue à aider Apollos à progresser.",
    "didYouKnow": "Paul dit que Priscille et Aquila ont risqué leur propre vie pour lui.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      },
      {
        "title": "Étude perspicace des Écritures — Priscille",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Priscille/"
      }
    ],
    "identity": "Priscille, avec son mari Aquila, était une chrétienne qui collabora étroitement avec Paul. Elle contribua à expliquer plus exactement la voie de Dieu à Apollos.",
    "era": "Ier siècle de n. è.",
    "familyAndEntourage": [
      "Aquila",
      "Paul",
      "Apollos",
      "Les congrégations d’Éphèse et de Rome"
    ],
    "bibleAccount": [
      "Elle et Aquila travaillent avec Paul à Corinthe.",
      "Ils accueillent Apollos et lui expliquent plus exactement la voie de Dieu.",
      "Paul transmet des salutations à leur maison.",
      "Ils sont connus pour avoir risqué leur propre vie pour Paul."
    ],
    "qualities": [
      "Hospitalité",
      "Courage",
      "Capacité à enseigner",
      "Esprit de coopération"
    ],
    "difficulties": [
      "Le couple exerce son ministère dans différentes villes et connaît les risques liés à l’activité chrétienne au Ier siècle."
    ]
  },
  "claudius_lycias": {
    "studyFocus": "Claude Lysias était le commandant militaire qui a protégé Paul lorsqu’une foule voulait le tuer et a organisé son transfert vers Césarée.",
    "lessonPoints": [
      "Protection : il a pris des mesures concrètes pour empêcher que Paul soit tué.",
      "Prudence : il a cherché à comprendre les accusations avant d’agir.",
      "Justice : son récit montre l’importance de procédures équitables même dans une situation tendue."
    ],
    "keyReading": "Actes 21:27-40; 22:22-30; 23:12-35",
    "location": "Jérusalem et Césarée.",
    "relationshipWithJehovah": "La Bible ne le présente pas comme adorateur de Jéhovah. Son intervention permet néanmoins à Paul de poursuivre son témoignage.",
    "didYouKnow": "Claude Lysias avait acheté sa citoyenneté romaine à prix élevé; Paul affirme, lui, être né citoyen romain.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Claude Lysias était le commandant militaire romain de Jérusalem qui fit protéger Paul lorsqu’une foule voulut le tuer.",
    "era": "Ier siècle de n. è.",
    "familyAndEntourage": [
      "Paul",
      "Les soldats romains",
      "Félix"
    ],
    "bibleAccount": [
      "Il intervient pour empêcher que Paul soit tué par la foule.",
      "Il fait arrêter Paul puis ordonne qu’on l’interroge.",
      "Il apprend l’existence d’un complot visant à tuer Paul.",
      "Il envoie Paul de nuit à Césarée sous forte escorte."
    ],
    "qualities": [
      "Réaction rapide",
      "Organisation",
      "Prudence"
    ],
    "difficulties": [
      "Il doit gérer une foule violente et un complot tout en déterminant la nature des accusations contre Paul."
    ]
  },
  "julius_centurion": {
    "studyFocus": "Julius, officier de la troupe impériale, a traité Paul avec humanité pendant son transfert vers Rome.",
    "lessonPoints": [
      "Humanité : il a permis à Paul de recevoir des soins et de l’aide de ses amis.",
      "Jugement : il a écouté Paul à plusieurs reprises pendant le voyage.",
      "Responsabilité : il devait assurer la sécurité des prisonniers dans des circonstances difficiles."
    ],
    "keyReading": "Actes 27:1-44",
    "location": "Césarée, mer Méditerranée et Rome.",
    "relationshipWithJehovah": "Julius n’est pas présenté comme adorateur de Jéhovah, mais son traitement bienveillant de Paul lui permet de continuer son témoignage.",
    "didYouKnow": "Julius permet à Paul de recevoir les soins de ses amis à Sidon, montrant qu’un centurion pouvait accorder une marge de liberté aux prisonniers.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Julius était un centurion de la cohorte d’Auguste chargé de conduire Paul et d’autres prisonniers vers Rome.",
    "era": "Ier siècle de n. è.",
    "familyAndEntourage": [
      "Paul",
      "Luc",
      "Aristarque",
      "Les autres prisonniers"
    ],
    "bibleAccount": [
      "Il reçoit la responsabilité de conduire Paul vers Rome.",
      "Il traite Paul avec bonté et lui permet de rendre visite à ses amis à Sidon.",
      "Pendant la tempête, il écoute finalement Paul et empêche les soldats de tuer les prisonniers.",
      "Tous arrivent sains et saufs à Malte."
    ],
    "qualities": [
      "Humanité",
      "Prudence",
      "Capacité à écouter"
    ],
    "difficulties": [
      "Il doit gérer une traversée extrêmement dangereuse et prendre des décisions concernant les prisonniers lorsque le navire est en péril."
    ]
  },
  "gaius_macedonian": {
    "studyFocus": "Gaïus de Macédoine a accompagné Paul dans son ministère et s’est retrouvé pris dans l’émeute d’Éphèse.",
    "lessonPoints": [
      "Compagnie fidèle : il accompagnait Paul dans son activité missionnaire.",
      "Courage : il a été exposé au danger pendant l’opposition à Éphèse.",
      "Persévérance : son association avec Paul montre son engagement dans l’activité chrétienne."
    ],
    "keyReading": "Actes 19:29; 20:4",
    "location": "Éphèse et Macédoine.",
    "relationshipWithJehovah": "Il était associé aux déplacements de Paul dans le cadre de l’activité chrétienne. Le récit montre qu’il continuait à servir malgré l’opposition.",
    "didYouKnow": "La Bible mentionne plusieurs Gaïus; celui-ci est précisément identifié comme Macédonien dans Actes 19:29.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Gaïus le Macédonien était un compagnon de Paul associé à Aristarque lors de l’émeute d’Éphèse.",
    "era": "Troisième voyage missionnaire de Paul",
    "familyAndEntourage": [
      "Paul",
      "Aristarque",
      "Les compagnons de Paul",
      "Les habitants d’Éphèse"
    ],
    "bibleAccount": [
      "Il accompagne Paul dans son activité missionnaire.",
      "Il est saisi par la foule avec Aristarque lors de l’émeute d’Éphèse.",
      "Il figure ensuite parmi les compagnons de Paul dans son voyage vers la Macédoine et la Grèce."
    ],
    "qualities": [
      "Fidélité",
      "Courage",
      "Esprit de collaboration"
    ],
    "difficulties": [
      "Il est pris dans une violente émeute provoquée par l’opposition à la prédication chrétienne."
    ]
  },
  "aristarchus": {
    "studyFocus": "Aristarque était un compagnon de voyage et collaborateur de Paul qui a partagé avec lui des périodes difficiles, y compris son emprisonnement.",
    "lessonPoints": [
      "Loyauté : il est resté aux côtés de Paul dans les moments difficiles.",
      "Courage : il a été impliqué dans l’activité malgré l’opposition.",
      "Endurance : son association durable avec Paul montre sa constance dans le service."
    ],
    "keyReading": "Actes 19:29; 20:4; 27:1-2; Colossiens 4:10; Philémon 24",
    "location": "Macédoine, Éphèse et Rome.",
    "relationshipWithJehovah": "Aristarque reste aux côtés de Paul dans des circonstances dangereuses et pénibles, sans abandonner le service chrétien.",
    "didYouKnow": "Paul l’appelle « mon compagnon de captivité » dans Colossiens 4:10.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Aristarque était un Macédonien de Thessalonique et un compagnon de voyage de Paul. Il partagea même une période de captivité avec lui.",
    "era": "Ier siècle de n. è.",
    "familyAndEntourage": [
      "Paul",
      "Gaius de Macédoine",
      "Tychique",
      "Les congrégations de Macédoine"
    ],
    "bibleAccount": [
      "Il accompagne Paul depuis la Macédoine.",
      "Il est entraîné dans l’émeute d’Éphèse.",
      "Il voyage avec Paul vers Jérusalem puis Rome.",
      "Paul le décrit comme son compagnon de travail et de captivité."
    ],
    "qualities": [
      "Fidélité",
      "Courage",
      "Endurance",
      "Esprit de coopération"
    ],
    "difficulties": [
      "Il subit les conséquences de son association avec Paul, notamment pendant l’émeute d’Éphèse et les voyages difficiles.",
      "Il partage la captivité de Paul."
    ]
  },
  "syntyche": {
    "studyFocus": "Syntyche était une chrétienne fidèle qui avait collaboré avec Paul et Évodie dans la bonne nouvelle, mais qui devait résoudre un désaccord avec sa sœur.",
    "lessonPoints": [
      "Unité : les désaccords ne doivent pas effacer les années de service commun.",
      "Collaboration : Paul la comptait parmi ses compagnes de travail.",
      "Paix : rechercher le même état d’esprit que Jésus aide à préserver l’unité chrétienne."
    ],
    "keyReading": "Philippiens 4:2-3",
    "location": "Philippes.",
    "relationshipWithJehovah": "Son service passé est reconnu par Paul, mais elle reçoit aussi l’encouragement à cultiver l’unité chrétienne.",
    "didYouKnow": "Syntyche fait partie des rares chrétiennes nommées dont Paul dit qu’elles avaient travaillé à ses côtés pour la bonne nouvelle.",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Bible en ligne — JW.org",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      }
    ],
    "identity": "Syntyche était une chrétienne de Philippes qui avait travaillé avec Paul pour la bonne nouvelle. Paul lui adresse le même appel à l’unité qu’à Évodie.",
    "era": "Ier siècle de n. è.",
    "familyAndEntourage": [
      "Évodie",
      "Paul",
      "La congrégation de Philippes"
    ],
    "bibleAccount": [
      "Elle a collaboré avec Paul dans la proclamation de la bonne nouvelle.",
      "Elle est impliquée dans un désaccord avec Évodie.",
      "Paul demande qu’on aide les deux femmes à retrouver une bonne entente."
    ],
    "qualities": [
      "Zèle",
      "Engagement dans le service chrétien"
    ],
    "difficulties": [
      "Son désaccord avec Évodie exige une aide fraternelle pour préserver l’unité de la congrégation."
    ]
  }
};
