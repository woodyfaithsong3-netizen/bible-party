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
    "studyFocus": "Adam fut le premier homme, créé par Jéhovah à partir de la poussière du sol. Il reçut une demeure parfaite, le jardin d’Éden, et la responsabilité de travailler le sol, de nommer les animaux et de prendre soin de sa famille. Il choisit finalement de désobéir au commandement de Dieu concernant l’arbre de la connaissance du bien et du mal.",
    "lessonPoints": [
      "Adam reçut de Jéhovah une vie parfaite et une mission précise.",
      "Il disposait de nombreuses libertés mais aussi d’une limite clairement exprimée.",
      "Sa désobéissance eut des conséquences pour lui, Ève et leur descendance.",
      "Son récit souligne que l’amour pour Dieu implique une obéissance volontaire."
    ],
    "keyReading": "Genèse 1:26-31 ; 2:7-25 ; 3:1-24 ; Romains 5:12-19 ; 1 Corinthiens 15:21-22,45",
    "location": "Le jardin d’Éden, puis la région située à l’extérieur du jardin après son expulsion.",
    "relationshipWithJehovah": "Adam connaissait directement Jéhovah et reçut de lui des instructions précises, mais il finit par désobéir et perdre sa position approuvée.",
    "didYouKnow": "Adam reçut de Jéhovah la responsabilité de donner un nom aux animaux avant que Dieu ne crée Ève comme sa complémentaire.",
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
    "studyFocus": "Noé était un homme juste qui vivait dans un monde marqué par la violence. Jéhovah lui donna la mission de construire une arche et de préserver sa famille ainsi que des représentants des animaux pendant le Déluge. Après le Déluge, Noé continua à adorer Jéhovah et reçut une alliance.",
    "lessonPoints": [
      "Noé marcha avec le vrai Dieu alors que la majorité de son époque s’éloignait de lui.",
      "Il accomplit pendant des années une mission qui demandait foi et persévérance.",
      "Il protégea sa famille en obéissant aux instructions de Jéhovah.",
      "Après le Déluge, il construisit un autel et offrit un sacrifice à Jéhovah."
    ],
    "keyReading": "Genèse 6:9-22 ; 7:1-24 ; 8:1-22 ; 9:1-17 ; Hébreux 11:7 ; 2 Pierre 2:5",
    "location": "Région située entre l’Éden et l’Ararat, puis les environs des montagnes d’Ararat après le Déluge.",
    "relationshipWithJehovah": "Noé est décrit comme marchant avec Dieu. Sa foi se manifesta par une obéissance concrète aux instructions reçues.",
    "didYouKnow": "Noé avait 600 ans lorsque le Déluge commença, et il sortit de l’arche après que les eaux eurent recouvert la terre.",
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
    "studyFocus": "Abraham fut appelé par Jéhovah à quitter Our et à se rendre dans un pays qu’il lui montrerait. Il devint l’ancêtre d’une grande descendance promise et montra sa foi par de nombreux actes d’obéissance. Sa vie fut marquée par des déplacements, des épreuves et des promesses concernant la descendance et la bénédiction des nations.",
    "lessonPoints": [
      "Abraham quitta sa patrie sur la base d’une promesse divine.",
      "Il bâtit des autels et invoqua régulièrement le nom de Jéhovah.",
      "Il dut attendre longtemps l’accomplissement de certaines promesses.",
      "Il fut prêt à offrir Isaac lorsque Jéhovah le lui demanda, démontrant une foi exceptionnelle."
    ],
    "keyReading": "Genèse 12:1-9 ; 15:1-21 ; 18:1-33 ; 22:1-19 ; Hébreux 11:8-19 ; Jacques 2:21-23",
    "location": "Our, Harân, Canaan et plusieurs régions du Proche-Orient.",
    "relationshipWithJehovah": "Abraham développa une relation de confiance avec Jéhovah et est appelé « ami de Jéhovah » en raison de sa foi et de son obéissance.",
    "didYouKnow": "Abraham avait 75 ans lorsqu’il quitta Harân pour poursuivre son voyage vers le pays que Jéhovah lui avait indiqué.",
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
    "studyFocus": "Sara était la femme d’Abraham et une femme de foi. Elle quitta Our avec Abraham et partagea ses déplacements. Malgré de longues années sans enfant, elle finit par donner naissance à Isaac dans sa vieillesse, conformément à la promesse de Jéhovah.",
    "lessonPoints": [
      "Sara accepta de quitter sa patrie avec Abraham.",
      "Elle connut des années d’attente et des situations difficiles.",
      "Elle apprit à compter sur la promesse de Jéhovah malgré les limites humaines.",
      "La Bible la présente comme un exemple de femme qui espérait en Dieu."
    ],
    "keyReading": "Genèse 11:29-32 ; 12:1-20 ; 18:1-15 ; 21:1-21 ; Hébreux 11:11 ; 1 Pierre 3:1-6",
    "location": "Our, Harân, Canaan et plusieurs régions parcourues avec Abraham.",
    "relationshipWithJehovah": "Sara plaça sa confiance dans la promesse divine et est citée parmi les femmes de foi dans les Écritures chrétiennes.",
    "didYouKnow": "Jéhovah changea son nom de Saraï en Sara dans le cadre de la promesse concernant Abraham et sa descendance.",
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
    "difficulties": [
      "A quitté Our puis Harân pour suivre Abraham vers Canaan, avec les incertitudes et les dangers d’une vie nomade.",
      "Elle a connu une longue période de stérilité et a dû attendre l’accomplissement de la promesse concernant une descendance.",
      "Son initiative avec Agar a provoqué des tensions familiales et des conséquences douloureuses.",
      "Elle a dû faire face à des situations dangereuses en Égypte et chez Abimélek tout en continuant à faire confiance à Jéhovah."
    ]
  },
  "jacob": {
    "studyFocus": "Jacob, fils d’Isaac et de Rébecca, devint l’ancêtre des douze tribus d’Israël. Sa vie fut marquée par des conflits familiaux, des années de travail chez Laban et une transformation progressive de sa personnalité. Jéhovah renouvela avec lui les promesses faites à Abraham et Isaac.",
    "lessonPoints": [
      "Jacob dut apprendre à faire confiance à Jéhovah au milieu de conflits familiaux.",
      "Il travailla de longues années pour obtenir ses épouses et son troupeau.",
      "Il lutta avec un ange et reçut le nom Israël.",
      "À la fin de sa vie, il manifesta sa foi en bénissant ses fils et les fils de Joseph."
    ],
    "keyReading": "Genèse 27:1-45 ; 28:10-22 ; 29:1–31:55 ; 32:22-32 ; 35:9-15 ; 49:1-33 ; Hébreux 11:21",
    "location": "Canaan, Paddan-Aram et de nouveau Canaan; il descendit ensuite en Égypte avec sa famille.",
    "relationshipWithJehovah": "Jéhovah apparut à Jacob, renouvela avec lui l’alliance abrahamique et resta avec lui malgré ses épreuves et ses imperfections.",
    "didYouKnow": "Jacob reçut le nom Israël après avoir lutté avec un ange, et ses douze fils devinrent les ancêtres des douze tribus d’Israël.",
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
    "studyFocus": "Joseph, fils de Jacob et de Rachel, fut vendu comme esclave par ses frères. En Égypte, il connut l’injustice et la prison avant de devenir administrateur sous Pharaon. Il utilisa ensuite sa position pour sauver de la famine sa famille et beaucoup d’autres personnes.",
    "lessonPoints": [
      "Joseph resta fidèle malgré la trahison et l’injustice.",
      "Il refusa l’immoralité sexuelle lorsqu’il fut tenté par la femme de Potiphar.",
      "Il reconnut que l’interprétation des rêves venait de Dieu.",
      "Il pardonna à ses frères et vit dans les événements l’accomplissement du dessein de Dieu."
    ],
    "keyReading": "Genèse 37:1-36 ; 39:1-23 ; 40:1–41:57 ; 45:1-28 ; 50:15-26 ; Hébreux 11:22",
    "location": "Canaan puis Égypte.",
    "relationshipWithJehovah": "Joseph attribua à Jéhovah le mérite de ses capacités et resta fidèle dans des circonstances où personne de sa famille ne pouvait le surveiller.",
    "didYouKnow": "Joseph avait 30 ans lorsqu’il se tint devant Pharaon et devint administrateur de l’Égypte pendant les années précédant la famine.",
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
    "studyFocus": "Moïse fut choisi par Jéhovah pour faire sortir Israël d’Égypte et le conduire vers la Terre promise. Il reçut la Loi au mont Sinaï et servit pendant des décennies comme médiateur entre Jéhovah et la nation. Malgré ses propres erreurs et ses moments de découragement, il resta profondément attaché à Dieu.",
    "lessonPoints": [
      "Moïse accepta une mission qu’il jugeait humainement très difficile.",
      "Il privilégia les intérêts du peuple de Dieu plutôt que les privilèges de l’Égypte.",
      "Il développa une grande humilité malgré son autorité.",
      "Il dut accepter les conséquences de son erreur à Mériba tout en continuant à servir fidèlement."
    ],
    "keyReading": "Exode 3:1-22 ; 12:31-42 ; 19:1-25 ; Nombres 12:1-13 ; 20:1-13 ; Deutéronome 34:1-12",
    "location": "Égypte, désert du Sinaï et régions à l’est du Jourdain.",
    "relationshipWithJehovah": "Moïse entretenait une relation exceptionnellement proche avec Jéhovah; la Bible dit qu’il lui parlait « face à face » au sens d’une relation directe et privilégiée.",
    "didYouKnow": "La Bible dit que Moïse avait 120 ans lorsqu’il mourut et que ses yeux n’étaient pas affaiblis et que sa vigueur n’avait pas diminué.",
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
    "studyFocus": "Josué fut le collaborateur de Moïse puis son successeur à la tête d’Israël. Il conduisit le peuple dans la Terre promise, dirigea les campagnes contre plusieurs villes cananéennes et participa au partage du territoire. Il encouragea constamment Israël à rester fidèle à Jéhovah.",
    "lessonPoints": [
      "Josué servit longtemps aux côtés de Moïse avant de recevoir davantage de responsabilités.",
      "Il affronta des situations complexes en suivant les instructions de Jéhovah.",
      "Il rappela au peuple que la fidélité à Jéhovah était essentielle après la conquête.",
      "Sa déclaration finale montre qu’il avait choisi personnellement de servir Jéhovah."
    ],
    "keyReading": "Josué 1:1-18 ; 6:1-27 ; 23:1-16 ; 24:1-31",
    "location": "Désert du Sinaï, Canaan et territoire d’Israël.",
    "relationshipWithJehovah": "Josué comptait sur Jéhovah pour diriger Israël et exhorta le peuple à le servir fidèlement jusqu’à la fin de sa vie.",
    "didYouKnow": "Josué et Caleb furent les deux espions parmi les douze envoyés à Canaan qui recommandèrent avec confiance de prendre possession du pays.",
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
    "studyFocus": "Ruth était une Moabite qui choisit de quitter son pays pour rester avec Noémi et adorer Jéhovah. Elle travailla humblement dans les champs de Boaz, qui devint son racheteur et son mari. Leur fils Obed fut l’ancêtre du roi David et Ruth figure dans la généalogie de Jésus.",
    "lessonPoints": [
      "Ruth manifesta un attachement exceptionnel à Noémi et à Jéhovah.",
      "Elle accepta humblement de travailler comme glaneuse pour subvenir aux besoins du foyer.",
      "Elle respecta les dispositions de Jéhovah concernant le rachat et le mariage.",
      "Sa fidélité contribua à une lignée essentielle dans le dessein messianique."
    ],
    "keyReading": "Ruth 1:1-22 ; 2:1-23 ; 3:1-18 ; 4:1-22",
    "location": "Moab puis Bethléhem en Juda.",
    "relationshipWithJehovah": "Ruth abandonna son ancien cadre religieux pour adopter le peuple de Noémi et son Dieu, Jéhovah.",
    "didYouKnow": "Le livre de Ruth couvre environ 11 ans et se déroule à l’époque des juges; Ruth est l’une des femmes citées dans la généalogie de Jésus.",
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
    "studyFocus": "Samuel servit Jéhovah dès son enfance sous la surveillance du prêtre Éli. Il devint prophète, juge et porte-parole de Dieu. Il participa à l’établissement de Saül comme roi puis, sur ordre de Jéhovah, oignit David comme futur roi.",
    "lessonPoints": [
      "Samuel apprit à écouter Jéhovah dès son enfance.",
      "Il resta fidèle même lorsque les fils d’Éli donnaient un mauvais exemple.",
      "Il accepta les décisions de Jéhovah concernant Saül et David.",
      "Il continua à servir malgré les déceptions liées au peuple et à ses dirigeants."
    ],
    "keyReading": "1 Samuel 1:24-28 ; 2:18-26 ; 3:1-21 ; 7:3-17 ; 8:1-22 ; 16:1-13",
    "location": "Silo, Rama et différents lieux d’Israël.",
    "relationshipWithJehovah": "Samuel grandit auprès de Jéhovah et fut reconnu comme prophète; il resta attaché à la volonté divine pendant toute sa vie.",
    "didYouKnow": "Samuel entendit Jéhovah l’appeler alors qu’il était encore un garçon et apprit d’Éli comment répondre à cet appel.",
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
    "studyFocus": "David fut berger, musicien, guerrier puis roi d’Israël. Il fut choisi par Jéhovah alors qu’il était encore jeune et devint célèbre après avoir vaincu Goliath. Sa vie connut aussi de graves fautes, mais il accepta les reproches et manifesta une profonde repentance.",
    "lessonPoints": [
      "David développa sa confiance en Jéhovah alors qu’il gardait les moutons.",
      "Il attribua la victoire sur Goliath à Jéhovah plutôt qu’à sa propre force.",
      "Il commit des péchés graves, notamment dans l’affaire de Bath-Shéba.",
      "Il accepta la correction de Nathan et manifesta une repentance sincère."
    ],
    "keyReading": "1 Samuel 16:1-13 ; 17:1-58 ; 24:1-22 ; 2 Samuel 11:1-27 ; 12:1-25 ; Psaume 51",
    "location": "Bethléem, Juda, Jérusalem et le royaume d’Israël.",
    "relationshipWithJehovah": "David avait une foi profonde en Jéhovah, même s’il commit de graves péchés. Il accepta la correction et revint sincèrement vers Dieu.",
    "didYouKnow": "David composa de nombreux psaumes et jouait de la harpe; il était aussi connu comme « un homme selon le cœur » de Jéhovah dans le contexte de son attachement à Dieu.",
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
    "studyFocus": "Salomon devint roi d’Israël après David. Il demanda à Jéhovah un cœur obéissant pour juger le peuple, reçut une sagesse remarquable et supervisa la construction du temple de Jérusalem. Plus tard, ses nombreuses femmes l’influencèrent au point de détourner son cœur vers d’autres dieux.",
    "lessonPoints": [
      "Salomon demanda d’abord la sagesse plutôt que la richesse ou une longue vie.",
      "Jéhovah lui accorda une sagesse exceptionnelle et des ressources importantes.",
      "La construction du temple fut un événement majeur de son règne.",
      "Son parcours montre qu’une bonne spiritualité au départ doit être entretenue jusqu’à la fin."
    ],
    "keyReading": "1 Rois 3:5-28 ; 5:1-18 ; 8:1-66 ; 11:1-13 ; Ecclésiaste 12:13-14",
    "location": "Jérusalem et le royaume d’Israël.",
    "relationshipWithJehovah": "Salomon connut une période de grande faveur lorsqu’il suivait Jéhovah, mais il finit par laisser ses femmes étrangères influencer son cœur et pratiquer le faux culte.",
    "didYouKnow": "Salomon fit construire le temple de Jérusalem, dont les travaux durèrent sept ans selon 1 Rois 6:37-38.",
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
    "studyFocus": "Éli était grand prêtre et juge en Israël à l’époque où Samuel était encore enfant. Il enseigna à Samuel comment répondre à l’appel de Jéhovah, mais ses propres fils, Hophni et Phinéhas, pratiquaient des actes graves. Éli fut réprimandé parce qu’il ne les avait pas corrigés avec suffisamment de fermeté.",
    "lessonPoints": [
      "Éli permit à Samuel de servir près de lui et l’aida à reconnaître l’appel de Jéhovah.",
      "Il avait une certaine sensibilité spirituelle mais manqua de fermeté envers ses fils.",
      "Jéhovah le tint responsable de ne pas avoir corrigé leur conduite.",
      "La fin de sa vie montre l’importance de prendre au sérieux les responsabilités familiales et spirituelles."
    ],
    "keyReading": "1 Samuel 2:12-36 ; 3:1-21 ; 4:10-18",
    "location": "Silo.",
    "relationshipWithJehovah": "Éli servait dans le sanctuaire mais reçut une condamnation divine parce qu’il n’avait pas correctement maîtrisé la mauvaise conduite de ses fils.",
    "didYouKnow": "Éli mourut à l’âge de 98 ans lorsqu’il apprit que l’arche de Dieu avait été capturée et que ses deux fils étaient morts.",
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
    "difficulties": [
      "Il a vécu dans le désert et a mené une vie très simple, consacrée à sa mission.",
      "Il a été emprisonné après avoir dénoncé publiquement le mariage d’Hérode Antipas avec Hérodiade.",
      "Depuis sa prison, il a traversé un moment d’incertitude et a demandé à Jésus s’il était bien celui qui devait venir.",
      "Il a finalement été exécuté à la suite de la demande d’Hérodiade. — Mt 11:2-6 ; Mc 6:17-29."
    ]
  },
  "marie": {
    "studyFocus": "Marie était la mère de Jésus. Elle accepta humblement la mission annoncée par l’ange Gabriel, donna naissance à Jésus à Bethléem et conserva dans son cœur plusieurs événements concernant son fils. Elle resta présente lors de sa mort et fut ensuite associée aux disciples après sa résurrection.",
    "lessonPoints": [
      "Marie accepta avec humilité une mission qui allait bouleverser sa vie.",
      "Elle méditait profondément sur les événements concernant Jésus.",
      "Elle manifesta du courage en restant proche de Jésus jusque lors de son exécution.",
      "Elle continua à fréquenter les disciples après la mort et la résurrection de Jésus."
    ],
    "keyReading": "Luc 1:26-56 ; 2:1-52 ; Jean 2:1-12 ; 19:25-27 ; Actes 1:12-14",
    "location": "Nazareth, Bethléem, Galilée et Jérusalem.",
    "relationshipWithJehovah": "Marie se soumit humblement à la volonté de Jéhovah et manifesta une foi profonde dans les promesses concernant son fils.",
    "didYouKnow": "Marie était présente avec les disciples après l’ascension de Jésus, selon Actes 1:14.",
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
    "studyFocus": "Paul, autrefois appelé Saul de Tarse, devint un apôtre des nations après avoir rencontré Jésus ressuscité. Il parcourut de nombreuses régions pour prêcher, aider les congrégations et défendre la bonne nouvelle. Malgré les persécutions, les emprisonnements et les difficultés, il continua sa mission.",
    "lessonPoints": [
      "Paul changea radicalement de conduite après avoir compris la volonté de Jésus.",
      "Il utilisa sa connaissance des Écritures pour raisonner avec Juifs et non-Juifs.",
      "Il supporta de nombreuses épreuves sans abandonner la prédication.",
      "Il accordait une grande attention à la formation et à l’encouragement des congrégations."
    ],
    "keyReading": "Actes 9:1-30 ; 13:1–14:28 ; 20:17-38 ; 2 Corinthiens 11:23-28 ; 2 Timothée 4:6-8",
    "location": "Tarse, Jérusalem, Syrie, Asie Mineure, Macédoine, Grèce, Rome et autres régions.",
    "relationshipWithJehovah": "Paul considérait son ministère comme une responsabilité reçue de Jésus et consacra sa vie à annoncer la bonne nouvelle et à fortifier les congrégations.",
    "didYouKnow": "Paul était citoyen romain de naissance, un statut qui lui donna certains droits juridiques pendant ses procès.",
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
    "difficulties": [
      "Il a subi de nombreuses persécutions : coups, emprisonnements, lapidation et dangers pendant son ministère.",
      "Il a porté de lourdes responsabilités concernant les assemblées et a exprimé son inquiétude pour elles.",
      "Il a aussi lutté contre son imperfection et a parlé d’une « épine dans la chair » qu’il souhaitait voir disparaître.",
      "Malgré ces épreuves, il a continué à servir Jéhovah avec l’aide de sa faveur imméritée. — 2Co 11:23-28 ; 12:7-10."
    ]
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
    "studyFocus": "Isaac était le fils d’Abraham et de Sara et le père d’Ésaü et de Jacob. Il fut l’enfant de la promesse et vécut principalement en Canaan. Son mariage avec Rébecca et sa vie de famille contribuèrent à la continuité de la promesse faite à Abraham.",
    "lessonPoints": [
      "Isaac accepta avec confiance la direction prise par Abraham concernant son mariage.",
      "Il connut des conflits autour des puits mais évita parfois l’escalade.",
      "Il transmit à Jacob la bénédiction liée à la promesse.",
      "Sa vie montre la continuité de l’alliance de Jéhovah avec la famille d’Abraham."
    ],
    "keyReading": "Genèse 21:1-7 ; 22:1-19 ; 24:1-67 ; 26:1-35 ; 27:1-40 ; Hébreux 11:20",
    "location": "Canaan, notamment Beer-Shéba et la région de Guérar.",
    "relationshipWithJehovah": "Isaac bénéficia directement de l’alliance faite avec Abraham et continua à invoquer Jéhovah.",
    "didYouKnow": "Isaac avait 40 ans lorsqu’il épousa Rébecca et 60 ans lorsque ses fils Ésaü et Jacob naquirent.",
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
    "studyFocus": "Samson fut un juge d’Israël doté d’une force exceptionnelle et consacré comme naziréen dès avant sa naissance. Jéhovah l’utilisa pour commencer à délivrer Israël des Philistins. Samson eut toutefois de graves faiblesses personnelles qui contribuèrent à sa chute avant qu’il ne retrouve sa foi et agisse une dernière fois contre les Philistins.",
    "lessonPoints": [
      "Samson reçut une mission spéciale dès avant sa naissance.",
      "Sa force venait de l’esprit de Jéhovah, et non de sa propre puissance physique.",
      "Ses choix amoureux et son manque de maîtrise de soi lui causèrent de graves problèmes.",
      "À la fin de sa vie, il fit de nouveau appel à Jéhovah et agit contre les Philistins."
    ],
    "keyReading": "Juges 13:1-25 ; 14:1–16:31 ; Hébreux 11:32",
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
    "location": "Territoire de Dan et régions contrôlées par les Philistins.",
    "relationshipWithJehovah": "Jéhovah utilisa Samson pour combattre les Philistins; malgré ses faiblesses, Samson manifesta finalement sa foi en demandant de la force à Dieu.",
    "didYouKnow": "Samson jugea Israël pendant 20 ans, et son histoire est l’un des récits bibliques les plus développés sur un juge d’Israël.",
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
    "studyFocus": "Noémi était la belle-mère de Ruth et la femme d’Élimélek. Après la mort de son mari et de ses deux fils, elle retourna de Moab à Bethléhem avec Ruth. Sa belle-fille resta attachée à elle et participa finalement à la lignée de David.",
    "lessonPoints": [
      "Noémi connut des pertes familiales profondes.",
      "Elle ne cacha pas son chagrin et exprima ouvertement sa douleur.",
      "Elle accepta finalement la fidélité de Ruth et l’aida à comprendre les usages d’Israël.",
      "Jéhovah transforma une période de grande détresse en une situation où Noémi retrouva une famille et une place dans la communauté."
    ],
    "keyReading": "Ruth 1:1-22 ; 2:1-23 ; 3:1-18 ; 4:13-17",
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
    "location": "Bethléhem en Juda et Moab.",
    "relationshipWithJehovah": "Noémi parlait du rôle de Jéhovah dans sa situation, même lorsqu’elle était accablée par le chagrin; le récit montre ensuite sa restauration familiale.",
    "didYouKnow": "À la naissance du fils de Ruth et Boaz, les femmes de Bethléhem dirent que cet enfant était pour Noémi comme un restaurateur de vie.",
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
    "difficulties": [
      "Elle a perdu son mari puis ses deux fils, ce qui l’a profondément attristée.",
      "Elle a dû quitter Moab pour retourner à Bethléhem dans une situation de veuvage et de grande précarité.",
      "Sa douleur l’a amenée à demander qu’on l’appelle Mara, « Amère ».",
      "Elle a ensuite vu Jéhovah transformer progressivement sa situation grâce à Ruth et Boaz. — Ruth 1:3-5, 20, 21 ; 4:14-17."
    ]
  },
  "boaz": {
    "studyFocus": "Boaz était un propriétaire terrien de Bethléem et un parent d’Élimélek. Il traita Ruth avec bonté, respecta les dispositions de la Loi sur le glanage et accepta finalement d’assumer le rôle de racheteur. Son mariage avec Ruth contribua à la lignée de David.",
    "lessonPoints": [
      "Boaz respectait les dispositions de Jéhovah en faveur des pauvres.",
      "Il protégea Ruth et lui parla avec dignité.",
      "Il régla honnêtement la question du droit de rachat devant les anciens.",
      "Il apprécia la fidélité de Ruth envers Noémi et son choix d’adorer Jéhovah."
    ],
    "keyReading": "Ruth 2:1-23 ; 3:1-18 ; 4:1-17 ; Matthieu 1:3-6",
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
    "location": "Bethléem, en Juda.",
    "relationshipWithJehovah": "Boaz respectait la Loi de Jéhovah et reconnut la confiance de Ruth dans le Dieu d’Israël.",
    "didYouKnow": "Boaz devint l’arrière-grand-père du roi David par l’intermédiaire d’Obed et de Jessé.",
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
    "difficulties": [
      "Il devait agir avec justice dans une situation familiale complexe liée au droit de rachat.",
      "Il devait respecter la priorité du racheteur plus proche avant d’épouser Ruth.",
      "Il a dû prendre des décisions qui engageaient l’avenir de Ruth, de Noémi et de la lignée familiale.",
      "Il a choisi de respecter les dispositions de la Loi plutôt que de suivre simplement ses préférences personnelles. — Ruth 3:10-13 ; 4:1-10."
    ]
  },
  "elisha": {
    "studyFocus": "Élisha fut le successeur d’Éliya comme prophète de Jéhovah. Son ministère comprit de nombreux miracles et s’étendit sur plusieurs règnes en Israël. Il intervint auprès de particuliers, de rois et de groupes de prophètes.",
    "lessonPoints": [
      "Élisha demanda une double portion de l’esprit qui animait Éliya.",
      "Il accomplit des miracles qui montraient la puissance de Jéhovah.",
      "Il aida aussi bien des personnes humbles qu’un chef militaire comme Naaman.",
      "Il resta fidèle à sa mission malgré les difficultés politiques et spirituelles d’Israël."
    ],
    "keyReading": "1 Rois 19:15-21 ; 2 Rois 2:1-25 ; 4:1–8:15 ; 9:1-13 ; 13:14-21",
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
    "location": "Royaume d’Israël, notamment autour de Samarie et du Jourdain.",
    "relationshipWithJehovah": "Élisha servit comme prophète de Jéhovah et dirigea l’attention des autres vers la puissance et les instructions de Dieu.",
    "didYouKnow": "Après la mort d’Élisha, un homme fut jeté dans sa tombe et revint à la vie lorsqu’il toucha les os du prophète.",
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
    "difficulties": [
      "Il a quitté son activité agricole et sa famille pour accepter la mission prophétique confiée par Jéhovah.",
      "Il a servi Éliya pendant des années avant d’assumer une responsabilité plus importante.",
      "Son ministère l’a confronté à l’opposition, à des situations dangereuses et aux besoins de nombreuses personnes.",
      "Il a dû compter sur l’esprit de Jéhovah pour accomplir sa mission et faire face aux changements de situation. — 1R 19:19-21 ; 2R 2:1-15."
    ]
  },
  "nehemie": {
    "studyFocus": "Néhémie était échanson du roi Artaxerxès avant de recevoir l’autorisation de reconstruire les murailles de Jérusalem. Il organisa le travail malgré l’opposition, encouragea le peuple et participa ensuite à des réformes destinées à rétablir le respect de la Loi.",
    "lessonPoints": [
      "Néhémie pria avant d’agir et prépara soigneusement sa demande au roi.",
      "Il combina organisation pratique, courage et confiance en Jéhovah.",
      "Il ne permit pas aux menaces de Sanballat et de ses alliés d’arrêter le chantier.",
      "Il corrigea aussi des injustices et des pratiques contraires à la Loi après la reconstruction."
    ],
    "keyReading": "Néhémie 1:1-11 ; 2:1-20 ; 4:1-23 ; 6:1-19 ; 8:1-18 ; 13:1-31",
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
    "location": "Suse puis Jérusalem.",
    "relationshipWithJehovah": "Néhémie pria régulièrement, attribua la réussite à Jéhovah et chercha à restaurer à Jérusalem une vie conforme à la Loi.",
    "didYouKnow": "Les murailles de Jérusalem furent achevées en 52 jours malgré une forte opposition.",
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
    "studyFocus": "Marie Madeleine était une disciple de Jésus originaire de Magdala. Jésus avait chassé d’elle sept démons. Elle le suivit, le soutint avec d’autres femmes et fut parmi les premières personnes à le voir après sa résurrection.",
    "lessonPoints": [
      "Marie Madeleine manifesta une forte reconnaissance envers Jésus.",
      "Elle accompagna Jésus et ses apôtres pendant leur ministère.",
      "Elle resta présente lors de la mort de Jésus alors que beaucoup de disciples étaient dispersés.",
      "Après la résurrection, elle fut chargée d’annoncer aux disciples qu’elle avait vu le Seigneur."
    ],
    "keyReading": "Luc 8:1-3 ; Matthieu 27:55-61 ; Jean 19:25 ; 20:1-18",
    "location": "Magdala en Galilée puis divers lieux parcourus par Jésus.",
    "relationshipWithJehovah": "Marie Madeleine devint une disciple fidèle de Jésus et participa à la proclamation du témoignage concernant sa résurrection.",
    "didYouKnow": "Les Évangiles ne disent pas que Marie Madeleine était une prostituée; cette identification traditionnelle ne vient pas du texte biblique.",
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
    "studyFocus": "Zachée était chef des collecteurs d’impôts à Jéricho et un homme riche. Désireux de voir Jésus, il grimpa à un sycomore. Après la visite de Jésus chez lui, Zachée manifesta publiquement son changement en promettant de réparer les torts et de donner aux pauvres.",
    "lessonPoints": [
      "Zachée surmonta son statut social et sa petite taille pour chercher réellement Jésus.",
      "Jésus regarda au-delà de sa réputation et lui accorda une occasion de changer.",
      "Zachée montra que sa repentance était concrète et liée à sa manière d’utiliser ses biens.",
      "Jésus déclara que le salut était arrivé dans sa maison."
    ],
    "keyReading": "Luc 19:1-10",
    "location": "Jéricho.",
    "relationshipWithJehovah": "Zachée répondit favorablement à Jésus et manifesta une repentance concrète; Jésus présenta cette réaction comme liée au salut.",
    "didYouKnow": "Zachée était « chef des collecteurs d’impôts », ce qui indique une position supérieure à celle d’un simple collecteur d’impôts.",
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
    "studyFocus": "Barnabas, appelé Joseph par les apôtres, était un Lévite originaire de Chypre. Les apôtres lui donnèrent le surnom Barnabas, associé à l’idée de consolation ou d’encouragement. Il soutint Saul de Tarse et participa à l’œuvre missionnaire auprès des non-Juifs.",
    "lessonPoints": [
      "Barnabas était connu pour son esprit généreux et encourageant.",
      "Il fit confiance à Saul lorsque les disciples de Jérusalem avaient encore des réserves à son sujet.",
      "Il servit avec Paul à Antioche et lors d’un voyage missionnaire.",
      "Il eut un désaccord avec Paul au sujet de Jean-Marc, mais continua ensuite à servir avec lui."
    ],
    "keyReading": "Actes 4:36-37 ; 9:26-28 ; 11:19-30 ; 13:1–14:28 ; 15:36-41",
    "location": "Chypre, Jérusalem, Antioche et diverses régions du monde méditerranéen.",
    "relationshipWithJehovah": "Barnabas consacra ses ressources et son énergie à soutenir l’œuvre chrétienne et à encourager les croyants.",
    "didYouKnow": "Barnabas vendit un champ et en apporta le montant aux apôtres, un geste présenté très tôt dans le récit de la congrégation chrétienne.",
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
    "difficulties": [
      "Il a consacré ses ressources à soutenir la congrégation et a beaucoup voyagé pour le ministère.",
      "Il a travaillé avec Paul malgré les difficultés et l’opposition rencontrées dans le service chrétien.",
      "Il a connu un désaccord marqué avec Paul au sujet de Jean-Marc, qui a conduit les deux hommes à se séparer pour un temps.",
      "Il a néanmoins continué à servir avec zèle et à encourager les autres. — Ac 4:36, 37 ; 13:2-5 ; 15:36-40."
    ]
  },
  "cornelius": {
    "studyFocus": "Corneille était un officier romain et le premier non-Juif incirconcis à devenir chrétien avec l’approbation manifeste de Jéhovah. Il était connu pour sa crainte de Dieu, ses prières et ses dons aux nécessiteux. Sa conversion montra à Pierre que Dieu ne faisait pas de favoritisme entre Juifs et non-Juifs.",
    "lessonPoints": [
      "Corneille craignait Dieu avant même de devenir chrétien.",
      "Il pria régulièrement et aidait les personnes dans le besoin.",
      "Jéhovah envoya un ange pour l’orienter vers Pierre.",
      "L’effusion de l’esprit saint sur Corneille et sa maisonnée confirma que les non-Juifs pouvaient devenir chrétiens."
    ],
    "keyReading": "Actes 10:1-48 ; 11:1-18",
    "location": "Césarée, en Judée.",
    "relationshipWithJehovah": "Jéhovah remarqua les prières et les actes de bonté de Corneille et prit des dispositions pour qu’il entende la bonne nouvelle.",
    "didYouKnow": "Corneille reçut une vision à la neuvième heure, l’heure habituelle de la prière, avant d’envoyer des hommes chercher Pierre.",
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
    "studyFocus": "Agar était la servante égyptienne de Sara et la mère d’Ismaël. Après avoir été traitée durement, elle s’enfuit dans le désert. L’ange de Jéhovah lui parla, lui donna une direction et lui annonça une descendance. Plus tard, elle fut renvoyée avec Ismaël mais Jéhovah continua de voir sa situation.",
    "lessonPoints": [
      "Agar connut des circonstances familiales très difficiles.",
      "Jéhovah vit sa détresse et lui parla personnellement.",
      "Elle donna à Dieu le nom de Celui qui voit, montrant l’impression profonde laissée par cette rencontre.",
      "Son histoire montre que Jéhovah remarque les personnes qui souffrent."
    ],
    "keyReading": "Genèse 16:1-16 ; 21:8-21",
    "location": "Canaan et le désert situé vers Beer-Shéba.",
    "relationshipWithJehovah": "Agar reconnut que Jéhovah avait vu sa détresse et reçut de lui des promesses concernant son fils Ismaël.",
    "didYouKnow": "Agar est la première personne mentionnée dans la Bible à avoir donné un nom à Jéhovah, en l’appelant « un Dieu qui voit » dans le contexte de sa rencontre avec l’ange.",
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
    "studyFocus": "Léa était la première femme de Jacob, donnée à celui-ci par Laban. Elle eut plusieurs fils et fut la mère de Juda et de Lévi, ancêtres de lignées importantes en Israël. Même si Jacob aimait davantage Rachel, Jéhovah remarqua la situation de Léa.",
    "lessonPoints": [
      "Léa connut une situation conjugale douloureuse et complexe.",
      "Jéhovah vit qu’elle n’était pas aimée et lui donna des enfants.",
      "Elle donna à plusieurs de ses fils des noms exprimant ses sentiments ou son espoir envers Jéhovah.",
      "Sa descendance comprit Juda et Lévi, deux tribus majeures d’Israël."
    ],
    "keyReading": "Genèse 29:16-35 ; 30:1-21 ; 49:29-33",
    "location": "Paddan-Aram puis Canaan.",
    "relationshipWithJehovah": "Jéhovah vit la situation de Léa et lui accorda une descendance importante, notamment Juda et Lévi.",
    "didYouKnow": "Léa fut enterrée dans la caverne de Makpéla, le lieu où Abraham, Sara, Isaac et Rébecca furent aussi enterrés.",
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
        "title": "Jacob — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Jacob/"
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
    "studyFocus": "Ésaü était le fils aîné d’Isaac et de Rébecca et le frère jumeau de Jacob. Il était un chasseur habile et vendit son droit d’aînesse pour un plat de nourriture. Plus tard, il manifesta une certaine réconciliation avec Jacob, mais son choix initial révéla qu’il accordait peu de valeur aux choses spirituelles.",
    "lessonPoints": [
      "Ésaü privilégia un besoin immédiat au détriment de son droit d’aînesse.",
      "Il épousa des femmes qui causèrent de l’amertume à Isaac et Rébecca.",
      "Il manifesta plus tard de la générosité envers Jacob lors de leurs retrouvailles.",
      "Son exemple montre les conséquences possibles de décisions prises sous l’effet d’un désir immédiat."
    ],
    "keyReading": "Genèse 25:24-34 ; 26:34-35 ; 27:30-45 ; 32:3-23 ; 33:1-16 ; Hébreux 12:16-17",
    "location": "Canaan, puis la région montagneuse de Séïr.",
    "relationshipWithJehovah": "La Bible utilise Ésaü comme exemple d’un homme qui ne valorisa pas suffisamment les choses sacrées lorsqu’il vendit son droit d’aînesse.",
    "didYouKnow": "Ésaü reçut le nom d’Édom, qui signifie « rouge », en lien avec l’épisode du plat de potage rouge qu’il demanda à Jacob.",
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
        "title": "Jacob — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Jacob/"
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
    "studyFocus": "Melkisédek était roi de Salem et prêtre du Dieu Très-Haut à l’époque d’Abraham. Il bénit Abraham après la victoire de celui-ci sur les rois ennemis, et Abraham lui donna un dixième du butin. Les Écritures chrétiennes utilisent ensuite Melkisédek comme figure prophétique du rôle sacerdotal de Jésus.",
    "lessonPoints": [
      "Melkisédek associait une fonction royale et une fonction sacerdotale.",
      "Il bénit Abraham au nom du Dieu Très-Haut.",
      "Abraham reconnut son rôle en lui donnant un dixième.",
      "Hébreux montre que le sacerdoce de Jésus est comparable à celui de Melkisédek sous un angle prophétique."
    ],
    "keyReading": "Genèse 14:17-24 ; Psaume 110:1-4 ; Hébreux 5:5-10 ; 7:1-28",
    "location": "Salem, généralement identifiée à l’ancienne Jérusalem.",
    "relationshipWithJehovah": "Melkisédek servait comme prêtre du Dieu Très-Haut et bénit Abraham au nom de Jéhovah.",
    "didYouKnow": "Melkisédek est présenté dans Hébreux comme n’ayant ni généalogie rapportée ni succession sacerdotale mentionnée dans le récit de la Genèse, ce qui sert à illustrer le caractère particulier du sacerdoce de Jésus.",
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
        "title": "Grand prêtre — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Grand-pr%C3%AAtre/"
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
    "studyFocus": "Jéthro, aussi appelé Réouel, était le prêtre de Madian et le beau-père de Moïse. Il accueillit Moïse lorsqu’il s’enfuit d’Égypte et lui donna Séphora comme épouse. Plus tard, il rejoignit Israël dans le désert et conseilla à Moïse de déléguer certaines responsabilités judiciaires.",
    "lessonPoints": [
      "Jéthro accueillit Moïse alors qu’il était fugitif.",
      "Il se réjouit des actes de Jéhovah en faveur d’Israël.",
      "Il donna à Moïse un conseil pratique pour éviter de porter seul toute la charge du peuple.",
      "Il encouragea une organisation qui permettait à des hommes capables de partager les responsabilités."
    ],
    "keyReading": "Exode 2:16-22 ; 18:1-27",
    "location": "Madian puis le désert près du Sinaï.",
    "relationshipWithJehovah": "Jéthro reconnut la supériorité de Jéhovah après avoir entendu ce qu’il avait fait pour Israël et offrit un sacrifice à Dieu.",
    "didYouKnow": "Jéthro observa que Moïse passait toute la journée à juger le peuple et lui proposa de choisir des hommes capables pour l’aider.",
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
    "studyFocus": "Séphora était la fille de Jéthro et l’épouse de Moïse. Elle donna naissance à leurs fils Guershom et Éliézer. À un moment critique du voyage, elle intervint rapidement en circoncisant leur fils, après quoi Jéhovah cessa de menacer Moïse de mort.",
    "lessonPoints": [
      "Séphora accepta de quitter Madian pour suivre Moïse.",
      "Elle prit une décision rapide lors d’une situation familiale urgente.",
      "Elle comprit l’importance de respecter l’alliance de la circoncision.",
      "Son histoire montre que l’obéissance aux exigences de Jéhovah pouvait avoir des conséquences très sérieuses."
    ],
    "keyReading": "Exode 2:21-22 ; 4:18-26 ; 18:1-6",
    "location": "Madian et sur la route vers l’Égypte.",
    "relationshipWithJehovah": "Séphora agit rapidement pour respecter l’exigence de la circoncision, ce qui contribua à préserver la vie de Moïse dans l’épisode rapporté en Exode 4.",
    "didYouKnow": "Séphora appela Moïse « époux de sang » après avoir circoncis leur fils, expression liée à la circoncision.",
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
    "studyFocus": "Qorah était un Lévite qui se rebella contre l’autorité de Moïse et d’Aaron avec Dathan, Abiram et d’autres hommes. Il contesta notamment la position d’Aaron dans le sacerdoce. Jéhovah intervint de façon spectaculaire contre les rebelles, tandis que les fils de Qorah ne moururent pas avec lui.",
    "lessonPoints": [
      "Qorah possédait déjà une position honorable parmi les Lévites mais voulut davantage d’autorité.",
      "Il transforma une question spirituelle en contestation de l’autorité établie par Jéhovah.",
      "Moïse ne chercha pas à défendre son propre prestige mais laissa Jéhovah trancher l’affaire.",
      "Les descendants de Qorah servirent plus tard dans le culte, montrant que les conséquences ne furent pas automatiquement transmises à toute la famille."
    ],
    "keyReading": "Nombres 16:1-50 ; 26:9-11 ; Psaumes 42, 44-49, 84-85, 87-88",
    "location": "Désert, dans le camp d’Israël.",
    "relationshipWithJehovah": "Qorah se rebella contre des dispositions établies par Jéhovah et fut puni pour sa rébellion.",
    "didYouKnow": "Nombres 26:11 précise que les fils de Qorah ne moururent pas, et plusieurs Psaumes furent ensuite associés aux descendants de Qorah.",
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
    "studyFocus": "Balaam était un homme de Mésopotamie que Balak, roi de Moab, voulut engager pour maudire Israël. Jéhovah lui interdit de maudire son peuple et fit en sorte que Balaam prononce finalement des bénédictions. Malgré cela, Balaam contribua ensuite à faire trébucher Israël par le conseil qui mena aux relations immorales et à l’idolâtrie.",
    "lessonPoints": [
      "Balaam savait que Jéhovah ne permettait pas de maudire Israël.",
      "Il prononça des paroles conformes à la volonté divine lorsqu’il prophétisa.",
      "Son désir de récompense matérielle révéla cependant une mauvaise motivation.",
      "Les Écritures chrétiennes citent Balaam comme avertissement contre l’amour de l’argent et la recherche d’un gain injuste."
    ],
    "keyReading": "Nombres 22:1-41 ; 23:1–24:25 ; 25:1-9 ; 31:8,16 ; 2 Pierre 2:15-16 ; Révélation 2:14",
    "location": "Mésopotamie puis territoire de Moab.",
    "relationshipWithJehovah": "Balaam reçut des instructions de Jéhovah mais permit à la recherche du gain de l’influencer; son parcours devint un avertissement contre l’avidité.",
    "didYouKnow": "L’ânesse de Balaam vit l’ange de Jéhovah sur le chemin alors que Balaam ne le voyait pas, et elle parla de façon miraculeuse.",
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
    "studyFocus": "Balak était roi de Moab à l’époque où Israël approchait de la Terre promise. Craignant les Israélites, il demanda à Balaam de les maudire. Jéhovah empêcha cette malédiction et les paroles prononcées par Balaam devinrent au contraire des bénédictions.",
    "lessonPoints": [
      "Balak laissa la peur guider ses décisions.",
      "Il chercha à utiliser un homme religieux pour combattre Israël par des moyens surnaturels.",
      "Il refusa de reconnaître que Jéhovah déterminait le résultat.",
      "Son histoire montre qu’aucune stratégie humaine ne peut annuler la volonté de Jéhovah."
    ],
    "keyReading": "Nombres 22:1-41 ; 23:1-30 ; 24:1-25",
    "location": "Moab, à l’est du Jourdain.",
    "relationshipWithJehovah": "Balak s’opposa au dessein de Jéhovah concernant Israël et chercha sans succès à faire prononcer une malédiction contre ce peuple.",
    "didYouKnow": "Balak demanda à Balaam de maudire Israël à plusieurs reprises et l’emmena sur différents points élevés pour tenter d’obtenir ce résultat.",
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
    "studyFocus": "Anne était la femme d’Elqana et la mère de Samuel. Profondément attristée de ne pas avoir d’enfant et provoquée par Peninna, elle pria Jéhovah avec intensité et lui promit de consacrer son fils à son service. Après la naissance de Samuel, elle tint sa promesse.",
    "lessonPoints": [
      "Anne exprima sa douleur à Jéhovah au lieu de laisser l’amertume la dominer.",
      "Elle fit un vœu concernant son futur enfant.",
      "Elle tint sa promesse même si cela signifiait se séparer de Samuel pour son service au sanctuaire.",
      "Son cantique montre qu’elle reconnaissait Jéhovah comme la source de son espérance."
    ],
    "keyReading": "1 Samuel 1:1-28 ; 2:1-11",
    "location": "Rama et Silo.",
    "relationshipWithJehovah": "Anne pria avec confiance, tint son vœu et continua à louer Jéhovah après avoir reçu la réponse à sa prière.",
    "didYouKnow": "Anne apportait chaque année à Samuel un petit manteau sans manches qu’elle lui confectionnait lorsqu’elle montait au sanctuaire.",
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
    "studyFocus": "Mikal était la fille de Saül et la première épouse de David. Elle aida David à échapper à son père lorsque Saül cherchait à le tuer. Plus tard, elle méprisa David lorsqu’elle le vit danser avec enthousiasme devant l’arche de Jéhovah.",
    "lessonPoints": [
      "Mikal utilisa son intelligence pour protéger David d’une attaque de Saül.",
      "Elle connut des années de séparation et de bouleversements politiques.",
      "Son attitude envers David changea avec le temps.",
      "Son récit rappelle qu’un acte courageux dans le passé ne garantit pas une attitude spirituelle correcte dans toutes les circonstances."
    ],
    "keyReading": "1 Samuel 18:20-28 ; 19:11-17 ; 25:44 ; 2 Samuel 3:13-16 ; 6:14-23",
    "location": "Jérusalem et le royaume d’Israël.",
    "relationshipWithJehovah": "La Bible rapporte des actions de Mikal avec leurs conséquences, mais donne peu d’informations sur sa relation personnelle avec Jéhovah.",
    "didYouKnow": "Pour aider David à fuir, Mikal plaça un teraphim dans le lit et le couvrit afin de faire croire qu’il était malade.",
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
    "studyFocus": "Joab était le chef de l’armée de David et un homme capable militairement. Il aida David à consolider son royaume, mais il commit aussi des actes de vengeance et de violence que David désapprouvait. À la fin, Salomon le fit exécuter conformément aux instructions de David.",
    "lessonPoints": [
      "Joab fut un commandant efficace et utile à David.",
      "Il prit parfois des décisions personnelles au lieu de respecter les directives du roi.",
      "Il tua Abner et Amasa pour des raisons qui mêlaient vengeance et intérêt politique.",
      "Son histoire montre que l’efficacité dans une fonction ne compense pas une mauvaise conduite morale."
    ],
    "keyReading": "2 Samuel 3:22-39 ; 10:6-14 ; 18:1-15 ; 20:4-23 ; 1 Rois 2:5-6,28-34",
    "location": "Jérusalem et différents champs de bataille du royaume d’Israël.",
    "relationshipWithJehovah": "Joab servit le roi choisi par Jéhovah mais commit des meurtres et des actes indépendants de la volonté de David, ce qui contribua à son jugement final.",
    "didYouKnow": "Joab se réfugia auprès de l’autel de Jéhovah, mais Salomon ordonna qu’il soit exécuté malgré cela en raison des meurtres qu’il avait commis.",
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
    "studyFocus": "Hérode Antipas était le tétrarque de Galilée et de Pérée pendant le ministère de Jésus. Il fit décapiter Jean le Baptiseur après que Jean eut dénoncé son mariage avec Hérodiade. Jésus comparut aussi devant lui peu avant sa mort.",
    "lessonPoints": [
      "Hérode craignait l’opinion publique et les conséquences de ses décisions.",
      "Il savait que Jean était un homme juste mais le fit néanmoins exécuter.",
      "Il montra une curiosité superficielle envers Jésus sans manifester une foi véritable.",
      "Son parcours illustre le danger de laisser la pression sociale guider des décisions graves."
    ],
    "keyReading": "Matthieu 14:1-12 ; Marc 6:14-29 ; Luc 3:19-20 ; 9:7-9 ; 13:31-33 ; 23:6-12",
    "location": "Galilée et Pérée.",
    "relationshipWithJehovah": "Hérode entendit le témoignage de Jean et de Jésus mais n’est pas présenté comme un adorateur de Jéhovah.",
    "didYouKnow": "Hérode Antipas fut surnommé « renard » par Jésus dans Luc 13:32 dans le cadre d’une réponse à une menace transmise par des Pharisiens.",
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
    "studyFocus": "Ponce Pilate était le gouverneur romain de Judée qui présida le procès de Jésus. Il reconnut à plusieurs reprises qu’il ne trouvait pas de faute en Jésus, mais finit par le livrer à l’exécution sous la pression des chefs religieux et de la foule.",
    "lessonPoints": [
      "Pilate disposait de l’autorité judiciaire dans l’affaire de Jésus.",
      "Il reconnut l’absence de faute criminelle évidente chez Jésus.",
      "Il tenta plusieurs moyens pour éviter de prendre la décision finale.",
      "Il finit néanmoins par céder à la pression et ordonna l’exécution."
    ],
    "keyReading": "Matthieu 27:11-26 ; Marc 15:1-15 ; Luc 23:1-25 ; Jean 18:28–19:16",
    "location": "Jérusalem et la Judée romaine.",
    "relationshipWithJehovah": "Pilate fut confronté directement au témoignage de Jésus mais ne prit pas la décision de devenir son disciple; le récit souligne surtout sa responsabilité de gouverneur dans le procès.",
    "didYouKnow": "Jean 18:38 rapporte que Pilate posa à Jésus la question : « Qu’est-ce que la vérité ? » avant de sortir vers les accusateurs.",
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
    "studyFocus": "Isaïe fut prophète en Juda pendant plusieurs règnes et transmit des messages de jugement, de correction et d’espérance. Il annonça notamment des détails concernant le Messie et le rétablissement du peuple de Dieu. Son livre contient de nombreux appels à faire confiance à Jéhovah plutôt qu’aux alliances humaines.",
    "lessonPoints": [
      "Isaïe accepta une mission prophétique exigeante.",
      "Il avertit les dirigeants de Juda contre les alliances politiques et la fausse confiance.",
      "Il annonça des prophéties messianiques reprises dans les Écritures grecques chrétiennes.",
      "Il combina des messages de jugement avec une forte espérance de restauration."
    ],
    "keyReading": "Isaïe 6:1-13 ; 7:1-17 ; 9:1-7 ; 11:1-10 ; 40:1-31 ; 53:1-12",
    "location": "Jérusalem et le royaume de Juda.",
    "relationshipWithJehovah": "Isaïe se porta volontaire pour transmettre le message de Jéhovah et resta prophète pendant plusieurs règnes.",
    "didYouKnow": "Le livre d’Isaïe contient la prophétie concernant le « serviteur » qui souffrirait pour les autres, appliquée dans les Écritures chrétiennes à Jésus.",
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
    "studyFocus": "Jérémie fut prophète de Jéhovah pendant les dernières décennies du royaume de Juda avant la destruction de Jérusalem par Babylone. Il annonça le jugement, encouragea la soumission à la domination babylonienne annoncée et continua à parler malgré les mauvais traitements.",
    "lessonPoints": [
      "Jérémie reçut sa mission alors qu’il se sentait jeune et incapable.",
      "Il annonça des messages difficiles à un peuple qui ne voulait pas les entendre.",
      "Il subit les coups, l’emprisonnement et d’autres persécutions.",
      "Il conserva néanmoins sa confiance dans la parole de Jéhovah."
    ],
    "keyReading": "Jérémie 1:4-19 ; 20:7-13 ; 26:1-24 ; 36:1-32 ; 38:1-13 ; 40:1-6",
    "location": "Jérusalem et le royaume de Juda.",
    "relationshipWithJehovah": "Jérémie considérait la parole de Jéhovah comme une force intérieure qu’il ne pouvait pas retenir, même lorsque son ministère lui attirait des souffrances.",
    "didYouKnow": "Jérémie utilisa un rouleau écrit par son secrétaire Baruch pour faire lire ses paroles au peuple après avoir été empêché d’aller lui-même au temple.",
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
    "studyFocus": "Ézéchiel était un prêtre devenu prophète pendant l’exil à Babylone. Il reçut des visions puissantes et transmit des messages aux exilés, notamment l’assurance que Jéhovah n’avait pas abandonné son dessein. Ses prophéties annonçaient aussi la restauration du vrai culte.",
    "lessonPoints": [
      "Ézéchiel accomplit sa mission dans un contexte d’exil et de découragement.",
      "Il utilisa des visions et des actions symboliques pour transmettre les messages de Jéhovah.",
      "Il insista sur la responsabilité personnelle et la nécessité de changer de conduite.",
      "Ses visions finales décrivent la restauration du culte pur et l’ordre du pays restauré."
    ],
    "keyReading": "Ézéchiel 1:1-28 ; 2:1–3:11 ; 18:1-32 ; 33:1-20 ; 37:1-28 ; 40:1-4",
    "location": "Tel-Abib, près du fleuve Kebar, en Babylonie.",
    "relationshipWithJehovah": "Ézéchiel reçut une mission prophétique directe et continua à transmettre les messages de Jéhovah aux exilés.",
    "didYouKnow": "Ézéchiel était prêtre avant de devenir prophète et reçut sa première grande vision près du fleuve Kebar en Babylonie.",
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
    "studyFocus": "Esdras était prêtre et copiste habile de la Loi de Moïse. Après l’exil, il monta à Jérusalem avec l’autorisation du roi Artaxerxès pour renforcer le vrai culte et enseigner la Loi. Il combina étude, mise en pratique et enseignement.",
    "lessonPoints": [
      "Esdras avait préparé son cœur à étudier la Loi de Jéhovah.",
      "Il mettait lui-même en pratique ce qu’il enseignait.",
      "Il reconnut la main de Jéhovah dans la mission qui lui fut confiée.",
      "Il agit pour rétablir le respect de la Loi parmi le peuple revenu d’exil."
    ],
    "keyReading": "Esdras 7:1-28 ; 8:21-36 ; 9:1-15 ; 10:1-17",
    "location": "Babylone puis Jérusalem.",
    "relationshipWithJehovah": "Esdras avait fixé son cœur à étudier la Loi, à la pratiquer et à l’enseigner; il attribua à Jéhovah la réussite de sa mission.",
    "didYouKnow": "Esdras était à la fois prêtre et copiste expérimenté de la Loi de Moïse.",
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
    "studyFocus": "Zorobabel était gouverneur de Juda après l’exil à Babylone et un descendant de David. Avec le grand prêtre Josué, il dirigea la reconstruction du temple malgré l’opposition. Aggée et Zacharie l’encouragèrent dans cette tâche.",
    "lessonPoints": [
      "Zorobabel accepta une responsabilité importante dans le rétablissement du vrai culte.",
      "Il poursuivit la reconstruction malgré l’opposition.",
      "Jéhovah l’encouragea par l’intermédiaire d’Aggée et de Zacharie.",
      "Son exemple rappelle que l’accomplissement du dessein de Dieu ne dépend pas seulement de la force humaine."
    ],
    "keyReading": "Esdras 3:1-13 ; 4:1-24 ; 5:1-17 ; 6:1-22 ; Aggée 1:1-14 ; Zacharie 4:1-14",
    "location": "Jérusalem et Juda après le retour de Babylone.",
    "relationshipWithJehovah": "Jéhovah encouragea Zorobabel à poursuivre la reconstruction du temple et annonça que le travail serait mené à bien par son esprit.",
    "didYouKnow": "Zorobabel apparaît dans les généalogies bibliques comme un descendant de David et figure dans la lignée menant au Messie.",
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
    "studyFocus": "Onésime était un esclave appartenant à Philémon qui devint chrétien après avoir rencontré Paul. Paul demanda à Philémon de l’accueillir désormais comme un frère bien-aimé.",
    "lessonPoints": [
      "Onésime changea de vie après être devenu chrétien.",
      "Paul prit personnellement intérêt à sa situation et intercéda en sa faveur.",
      "La nouvelle relation spirituelle entre Onésime et Philémon dépassait leur ancienne relation sociale.",
      "Son histoire montre que la foi chrétienne peut transformer la manière de considérer les autres."
    ],
    "keyReading": "Philémon 8-21 ; Colossiens 4:7-9",
    "location": "Colosses et Rome.",
    "relationshipWithJehovah": "Onésime devint chrétien et fut encouragé à servir avec fidélité, tandis que Philémon était invité à appliquer les principes de l’amour chrétien.",
    "didYouKnow": "Paul dit qu’Onésime, autrefois peu utile à Philémon, était devenu utile à la fois à Philémon et à Paul.",
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
    "studyFocus": "Philémon était un chrétien de Colosses chez qui une congrégation se réunissait. Paul lui écrivit au sujet d’Onésime, son esclave devenu chrétien, et l’encouragea à l’accueillir comme un frère.",
    "lessonPoints": [
      "Philémon était un chrétien connu pour son amour et sa foi.",
      "Il ouvrait sa maison aux réunions de la congrégation.",
      "Paul lui demanda d’accueillir Onésime avec amour chrétien.",
      "Sa situation illustre comment les principes chrétiens pouvaient transformer les relations personnelles."
    ],
    "keyReading": "Philémon 1-25",
    "location": "Colosses, en Asie Mineure.",
    "relationshipWithJehovah": "Philémon était connu pour son amour envers Jésus et tous les saints, et Paul comptait sur cet amour pour résoudre une situation délicate.",
    "didYouKnow": "Paul proposa de payer lui-même toute dette qu’Onésime pourrait avoir envers Philémon.",
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
    "studyFocus": "Tite était un proche collaborateur de Paul et un chrétien d’origine non juive. Paul lui confia des responsabilités importantes, notamment en Crète, où il devait aider à organiser les congrégations et à nommer des anciens.",
    "lessonPoints": [
      "Tite accompagna Paul dans son activité missionnaire.",
      "Il reçut des responsabilités pastorales importantes.",
      "Paul lui demanda de nommer des anciens dans les villes où il y avait des congrégations.",
      "Il devait enseigner une conduite chrétienne saine à différents groupes de croyants."
    ],
    "keyReading": "Galates 2:1-3 ; 2 Corinthiens 7:6-16 ; Tite 1:4-9 ; 2:1-15 ; 3:12-15",
    "location": "Diverses régions missionnaires, notamment la Crète.",
    "relationshipWithJehovah": "Tite servait fidèlement avec Paul et devait aider les congrégations à rester attachées à un enseignement sain.",
    "didYouKnow": "Paul appelle Tite « mon véritable enfant selon la foi que nous partageons ».",
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
    "studyFocus": "Eutyche était un jeune homme qui écoutait Paul parler à Troas. Assis à une fenêtre au troisième étage, il s’endormit, tomba et mourut, puis Paul l’enlaça et rassura les disciples en disant que sa vie était en lui.",
    "lessonPoints": [
      "Eutyche était présent à une longue réunion chrétienne.",
      "Il s’endormit alors qu’il écoutait Paul parler.",
      "Après sa chute, les disciples furent profondément bouleversés.",
      "Paul rassura la congrégation après l’événement miraculeux."
    ],
    "keyReading": "Actes 20:7-12",
    "location": "Troas, en Asie Mineure.",
    "relationshipWithJehovah": "L’événement autour d’Eutyche fut un puissant témoignage de la puissance de Dieu et encouragea les disciples présents.",
    "didYouKnow": "Eutyche était assis sur une fenêtre au troisième étage lorsque, vaincu par le sommeil, il tomba pendant que Paul parlait.",
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
    "difficulties": [
      "Il a été victime d’un grave accident alors qu’il assistait à une réunion chrétienne à Troas.",
      "Sa fatigue l’a fait s’endormir pendant le long discours de Paul et il est tombé d’une fenêtre du troisième étage.",
      "Il a été relevé mort après sa chute, ce qui a profondément bouleversé les frères présents.",
      "Jéhovah a ensuite permis que Paul le ramène à la vie, apportant une grande consolation à la congrégation. — Ac 20:7-12."
    ]
  },
  "martha": {
    "studyFocus": "Marthe accueillait Jésus chez elle à Béthanie. Elle était active et soucieuse de bien recevoir son invité, mais Jésus lui rappela que l’attention aux choses spirituelles était prioritaire.",
    "lessonPoints": [
      "Marthe était hospitalière et généreuse.",
      "Elle accepta les conseils de Jésus même lorsqu’elle était préoccupée par beaucoup de tâches.",
      "Elle exprima sa foi en Jésus lors de la mort de Lazare.",
      "Elle croyait que Jésus était le Christ, le Fils de Dieu, celui qui devait venir dans le monde."
    ],
    "keyReading": "Luc 10:38-42 ; Jean 11:17-27 ; 12:1-8",
    "location": "Béthanie, près de Jérusalem.",
    "relationshipWithJehovah": "Marthe manifesta sa foi en Jésus et en la résurrection, montrant son attachement au Dieu qui avait envoyé le Christ.",
    "didYouKnow": "Marthe fit une déclaration de foi remarquable avant même que Jésus ne ressuscite Lazare : elle dit croire qu’il était le Christ, le Fils de Dieu.",
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
    "studyFocus": "Marie de Béthanie, sœur de Marthe et de Lazare, aimait écouter Jésus et manifestait une foi profonde. Elle versa sur Jésus un parfum précieux peu avant sa mort.",
    "lessonPoints": [
      "Marie choisissait d’écouter attentivement Jésus.",
      "Elle manifesta une foi et une affection profondes envers lui.",
      "Son onction de Jésus annonçait symboliquement son enterrement.",
      "Jésus défendit son geste lorsque Judas et d’autres le critiquèrent."
    ],
    "keyReading": "Luc 10:38-42 ; Jean 11:1-44 ; 12:1-8",
    "location": "Béthanie, près de Jérusalem.",
    "relationshipWithJehovah": "Marie manifestait son attachement à Jéhovah en accordant une grande valeur à l’enseignement de Jésus et en honorant son Fils.",
    "didYouKnow": "Jésus déclara que l’action de Marie avec le parfum serait rappelée partout où la bonne nouvelle serait prêchée.",
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
    "studyFocus": "Joseph d’Arimathie était un homme riche et membre respecté du Sanhédrin qui était devenu disciple de Jésus. Après la mort de Jésus, il eut le courage de demander son corps à Pilate et de le déposer dans un tombeau neuf.",
    "lessonPoints": [
      "Joseph était un disciple de Jésus malgré son appartenance au Sanhédrin.",
      "Il n’approuvait pas la conduite du conseil concernant Jésus.",
      "Il manifesta publiquement son attachement après la mort de Jésus.",
      "Il utilisa son propre tombeau pour offrir une sépulture honorable à Jésus."
    ],
    "keyReading": "Matthieu 27:57-61 ; Marc 15:42-47 ; Luc 23:50-56 ; Jean 19:38-42",
    "location": "Jérusalem et Arimathie.",
    "relationshipWithJehovah": "Joseph craignait Dieu et choisit de soutenir Jésus alors que beaucoup de dirigeants l’avaient rejeté.",
    "didYouKnow": "Joseph d’Arimathie était membre du Sanhédrin mais n’avait pas approuvé la décision et l’action des autres membres contre Jésus.",
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
    "studyFocus": "Jaïrus était un président de synagogue qui vint supplier Jésus de guérir sa fille gravement malade. Même après avoir appris sa mort, il continua à exercer sa foi et vit Jésus la ressusciter.",
    "lessonPoints": [
      "Jaïrus s’humilia en venant chercher Jésus.",
      "Il dut continuer à croire alors que la situation semblait désespérée.",
      "Il accepta l’encouragement de Jésus à ne pas avoir peur.",
      "Il vit la puissance de Jésus sur la mort."
    ],
    "keyReading": "Marc 5:21-43 ; Luc 8:40-56",
    "location": "Région de Galilée, près du lieu où Jésus enseignait.",
    "relationshipWithJehovah": "Jaïrus fit confiance à Jésus, l’instrument par lequel Jéhovah allait accomplir des miracles et enseigner l’espérance de la résurrection.",
    "didYouKnow": "Quand Jésus ressuscita la fille de Jaïrus, il demanda qu’on lui donne quelque chose à manger, détail qui montre qu’elle était réellement revenue à la vie.",
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
    "studyFocus": "Thomas était l’un des douze apôtres. Après la mort de Jésus, il eut du mal à croire au témoignage des autres disciples concernant la résurrection, mais lorsqu’il vit Jésus ressuscité, il exprima une déclaration de foi.",
    "lessonPoints": [
      "Thomas était prêt à suivre Jésus avec courage.",
      "Il exprima franchement ses doutes au lieu de les cacher.",
      "Jésus répondit à ses inquiétudes avec patience.",
      "Thomas finit par reconnaître Jésus comme son Seigneur et son Dieu."
    ],
    "keyReading": "Jean 11:16 ; 14:1-6 ; 20:24-29",
    "location": "Galilée et Jérusalem.",
    "relationshipWithJehovah": "Thomas renforça sa foi en Jésus ressuscité et reconnut publiquement sa position exceptionnelle.",
    "didYouKnow": "Thomas était aussi appelé Didyme, nom grec qui signifie « jumeau ».",
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
    "studyFocus": "Lydie était une marchande de pourpre de Thyatire installée à Philippes. Elle écouta Paul, accepta le message chrétien, fut baptisée avec sa maison et insista pour accueillir Paul et ses compagnons chez elle.",
    "lessonPoints": [
      "Lydie écouta attentivement le message concernant Jésus.",
      "Elle fut baptisée avec les membres de sa maison.",
      "Elle manifesta rapidement l’hospitalité chrétienne.",
      "Sa maison devint un lieu où Paul et ses compagnons pouvaient être accueillis."
    ],
    "keyReading": "Actes 16:11-15, 40",
    "location": "Philippes, en Macédoine.",
    "relationshipWithJehovah": "Jéhovah ouvrit le cœur de Lydie pour qu’elle prête attention à ce que Paul disait, puis elle répondit favorablement au message chrétien.",
    "didYouKnow": "Lydie vendait de la pourpre, un produit associé à la ville de Thyatire, et elle semble avoir été la première personne à devenir chrétienne à Philippes.",
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
    "studyFocus": "Tabitha, appelée Dorcas en grec, était une disciple de Joppé connue pour ses nombreuses bonnes actions et son aide aux pauvres. Après sa mort, Pierre fut appelé et Jéhovah permit que Tabitha soit ramenée à la vie par l’intermédiaire de l’apôtre.",
    "lessonPoints": [
      "Tabitha était connue pour ses nombreuses bonnes actions.",
      "Elle aidait particulièrement les veuves et les personnes dans le besoin.",
      "Les disciples de Joppé avaient une grande affection pour elle.",
      "Sa résurrection fortifia la foi de nombreux habitants de Joppé."
    ],
    "keyReading": "Actes 9:36-43",
    "location": "Joppé, sur la côte méditerranéenne.",
    "relationshipWithJehovah": "Tabitha montrait son amour pour Dieu et pour les autres par ses bonnes œuvres et son aide généreuse.",
    "didYouKnow": "Lorsque Tabitha mourut, les veuves montrèrent à Pierre les vêtements qu’elle avait faits pendant qu’elle était avec elles.",
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
    "studyFocus": "Étienne était l’un des sept hommes choisis pour s’occuper d’un besoin pratique dans la congrégation de Jérusalem. Rempli de foi et d’esprit saint, il rendit un témoignage courageux devant le Sanhédrin et fut tué par lapidation.",
    "lessonPoints": [
      "Étienne accepta une responsabilité pratique dans la congrégation.",
      "Il enseignait avec sagesse et courage.",
      "Il ne renonça pas à sa foi malgré les accusations.",
      "Au moment de mourir, il pria Jésus et demanda que son péché ne soit pas retenu contre ses adversaires."
    ],
    "keyReading": "Actes 6:1-15 ; 7:1-60",
    "location": "Jérusalem.",
    "relationshipWithJehovah": "Étienne était rempli de foi et d’esprit saint et resta fidèle à Jéhovah jusqu’à sa mort.",
    "didYouKnow": "Étienne est présenté comme le premier disciple de Jésus dont la Bible rapporte la mort en martyr.",
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
    "studyFocus": "Ananias de Damas était un disciple que Jésus dirigea vers Saul après la vision de celui-ci. Malgré les inquiétudes qu’il avait au sujet de Saul, Ananias obéit, lui imposa les mains, l’aida à retrouver la vue et le baptisa.",
    "lessonPoints": [
      "Ananias connaissait la réputation de Saul et avait des raisons d’être inquiet.",
      "Il fit confiance aux instructions reçues et alla trouver Saul.",
      "Il parla à Saul comme à un frère malgré son passé de persécuteur.",
      "Il participa à la guérison de Saul et à son baptême."
    ],
    "keyReading": "Actes 9:10-19 ; 22:12-16",
    "location": "Damas.",
    "relationshipWithJehovah": "Ananias obéit rapidement à la direction de Jésus et participa à l’accueil de Saul dans la communauté chrétienne.",
    "didYouKnow": "Ananias est décrit comme un homme attaché à la Loi et respecté par les Juifs de Damas.",
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
    "studyFocus": "Philippe l’évangélisateur faisait partie des sept hommes choisis à Jérusalem pour s’occuper d’un besoin matériel de la congrégation. Après la dispersion des disciples, il prêcha en Samarie puis fut dirigé vers la route de Gaza, où il enseigna un fonctionnaire éthiopien.",
    "lessonPoints": [
      "Philippe accepta d’abord une responsabilité pratique dans la congrégation.",
      "Il continua à prêcher lorsque la persécution dispersa les disciples.",
      "Il expliqua les Écritures à l’Éthiopien avec tact et simplicité.",
      "Il continua ensuite son activité de prédication jusqu’à Césarée."
    ],
    "keyReading": "Actes 6:1-6 ; 8:4-40 ; 21:8-9",
    "location": "Jérusalem, Samarie, route de Gaza et Césarée.",
    "relationshipWithJehovah": "Philippe se laissa guider par l’esprit de Dieu et resta disponible pour accomplir différents services dans la congrégation.",
    "didYouKnow": "Philippe avait quatre filles célibataires qui prophétisaient et qui vivaient avec lui à Césarée.",
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
    "studyFocus": "Jacques fils de Zébédée était l’un des douze apôtres et le frère de Jean. Avec Pierre et Jean, il faisait partie du cercle des disciples que Jésus emmena à certains moments importants. Hérode Agrippa Ier le fit tuer par l’épée.",
    "lessonPoints": [
      "Jacques abandonna son activité de pêcheur pour suivre Jésus.",
      "Il faisait partie des trois apôtres souvent présents lors d’événements particuliers.",
      "Jésus et Jacques avaient une relation étroite de confiance.",
      "Jacques resta fidèle jusqu’à sa mort en martyr."
    ],
    "keyReading": "Matthieu 4:18-22 ; 17:1-9 ; Marc 10:35-45 ; Actes 12:1-2",
    "location": "Galilée et Jérusalem.",
    "relationshipWithJehovah": "Jacques servit Jésus fidèlement et mourut comme témoin de la foi chrétienne.",
    "didYouKnow": "Jacques fut le premier des Douze dont la Bible rapporte la mort en martyr; Hérode Agrippa Ier le fit tuer par l’épée.",
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
    "studyFocus": "Jacques, frère de Jésus, ne croyait pas en Jésus au début de son ministère. Après la résurrection, Jésus lui apparut, et Jacques devint ensuite une figure importante de la congrégation de Jérusalem.",
    "lessonPoints": [
      "Jacques ne fut pas immédiatement convaincu par le ministère de Jésus.",
      "La résurrection de Jésus changea profondément sa position.",
      "Il joua un rôle important dans la congrégation de Jérusalem.",
      "Il est associé à la lettre de Jacques, qui insiste sur une foi démontrée par les œuvres."
    ],
    "keyReading": "Jean 7:1-10 ; Actes 15:1-29 ; 1 Corinthiens 15:3-8 ; Jacques 1:1-27",
    "location": "Jérusalem.",
    "relationshipWithJehovah": "Après avoir acquis la foi en Jésus, Jacques servit activement la congrégation et encouragea les chrétiens à mettre leur foi en pratique.",
    "didYouKnow": "Paul rapporte que le Christ ressuscité apparut spécialement à Jacques avant de se manifester à tous les apôtres.",
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
    "studyFocus": "Jude, frère de Jésus, devint un disciple et écrivit une courte lettre aux chrétiens. Il les encouragea à défendre leur foi contre des hommes immoraux qui s’étaient infiltrés dans la congrégation.",
    "lessonPoints": [
      "Jude se présente humblement comme esclave de Jésus plutôt que de mettre en avant son lien familial avec lui.",
      "Il exhorta les chrétiens à lutter pour la foi transmise aux saints.",
      "Il dénonça clairement les conduites immorales et irrespectueuses.",
      "Il termina sa lettre par une magnifique louange à Dieu."
    ],
    "keyReading": "Jude 1-25",
    "location": "Le monde chrétien du Ier siècle.",
    "relationshipWithJehovah": "Jude encouragea les chrétiens à rester dans l’amour de Dieu et à compter sur sa miséricorde par Jésus Christ.",
    "didYouKnow": "Jude était frère de Jacques et donc frère de Jésus, mais dans sa lettre il se présente comme « esclave de Jésus Christ ».",
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
    "studyFocus": "Philippe l’apôtre était originaire de Bethsaïda, comme Pierre et André. Jésus l’appela directement à le suivre. Philippe parla ensuite de Jésus à Nathanaël et fut présent lors de plusieurs moments importants du ministère de Jésus.",
    "lessonPoints": [
      "Philippe répondit à l’appel de Jésus et devint son disciple.",
      "Il parla spontanément de Jésus à Nathanaël.",
      "Il chercha à comprendre comment nourrir la foule lorsque Jésus le mit à l’épreuve.",
      "Après la résurrection, il resta parmi les apôtres et participa au témoignage chrétien."
    ],
    "keyReading": "Jean 1:43-51 ; 6:1-7 ; 12:20-22 ; 14:6-14 ; Actes 1:12-14",
    "location": "Bethsaïda et Jérusalem.",
    "relationshipWithJehovah": "Philippe apprit à connaître Jéhovah par l’intermédiaire de Jésus et continua à servir comme apôtre après la résurrection.",
    "didYouKnow": "Philippe était de Bethsaïda, la ville d’André et de Pierre, et c’est lui qui alla dire à Nathanaël : « Nous avons trouvé celui dont Moïse a écrit dans la Loi. »",
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
    "difficulties": [
      "Il a vécu dans une période où Jésus était rejeté par beaucoup de responsables religieux et a dû exercer sa foi au milieu de cette opposition.",
      "Il devait parfois comprendre progressivement les enseignements de Jésus, comme lorsqu’il lui a demandé de montrer le Père.",
      "Comme les autres apôtres, il a dû rester fidèle après la mort et la résurrection de Jésus, puis continuer à soutenir la prédication chrétienne.",
      "Son exemple montre l’importance de progresser dans la foi même lorsqu’on ne comprend pas immédiatement tout ce que Jésus enseigne. — Jean 14:8-11 ; Ac 1:13, 14."
    ]
  },
  "bartholomew": {
    "studyFocus": "Barthélemy est traditionnellement identifié à Nathanaël, disciple que Philippe amena à Jésus. Jésus loua sa franchise et sa sincérité, et Nathanaël reconnut rapidement Jésus comme le Fils de Dieu et Roi d’Israël.",
    "lessonPoints": [
      "Nathanaël examina honnêtement le témoignage de Philippe.",
      "Il accepta l’invitation à venir voir Jésus.",
      "Jésus souligna sa sincérité en le décrivant comme un Israélite sans tromperie.",
      "Il devint l’un des Douze apôtres."
    ],
    "keyReading": "Jean 1:45-51 ; 21:1-14 ; Matthieu 10:2-4",
    "location": "Galilée et Jérusalem.",
    "relationshipWithJehovah": "Nathanaël reconnut Jésus comme le Fils de Dieu et le Roi d’Israël et resta ensuite parmi ses apôtres.",
    "didYouKnow": "Le nom Nathanaël apparaît dans l’Évangile de Jean, tandis que les listes des Douze donnent le nom Barthélemy ; c’est pourquoi Barthélemy est généralement identifié à Nathanaël.",
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
    "studyFocus": "Jacques fils d’Alphée était l’un des douze apôtres choisis par Jésus. La Bible donne peu de détails personnels sur lui, mais son nom figure régulièrement dans les listes des apôtres.",
    "lessonPoints": [
      "Jacques répondit à l’appel de Jésus et fut choisi comme l’un des Douze.",
      "Il resta associé au groupe des apôtres pendant le ministère de Jésus.",
      "Son histoire rappelle que tous les serviteurs fidèles ne sont pas décrits en détail dans la Bible.",
      "Il est important de ne pas confondre Jacques fils d’Alphée avec Jacques fils de Zébédée ou Jacques frère de Jésus."
    ],
    "keyReading": "Matthieu 10:2-4 ; Marc 3:13-19 ; Luc 6:12-16 ; Actes 1:12-14",
    "location": "Galilée et Jérusalem.",
    "relationshipWithJehovah": "Jacques fils d’Alphée resta attaché au groupe des apôtres et participa au témoignage chrétien après la résurrection.",
    "didYouKnow": "Dans les listes des Douze, Jacques fils d’Alphée est parfois distingué par l’expression « le Mineur » ou « le petit », selon les traductions, afin de le distinguer de Jacques fils de Zébédée.",
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
    "studyFocus": "Simon le Zélote était l’un des douze apôtres. Son surnom le distinguait probablement par son association passée avec les Zélotes. Jésus réunit autour de lui des hommes d’origines très différentes, et Simon servit aux côtés de Matthieu, ancien collecteur d’impôts.",
    "lessonPoints": [
      "Simon fut choisi personnellement par Jésus parmi les Douze.",
      "Son surnom montre qu’il avait un passé ou une association qui le distinguait.",
      "Il servit avec des disciples aux parcours très différents.",
      "Son exemple illustre l’unité que le message du Christ pouvait produire."
    ],
    "keyReading": "Luc 6:12-16 ; Matthieu 10:2-4 ; Actes 1:12-14",
    "location": "Galilée et Jérusalem.",
    "relationshipWithJehovah": "Simon abandonna les divisions et engagements de son ancienne vie pour servir avec les autres apôtres dans l’œuvre chrétienne.",
    "didYouKnow": "Simon est appelé « le Zélote » pour le distinguer de Simon Pierre, autre apôtre.",
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
    "studyFocus": "La fille de Jaïrus était une jeune fille de Galilée que Jésus ramena à la vie après sa mort. Son père avait supplié Jésus de venir la guérir, mais elle mourut avant l’arrivée de Jésus.",
    "lessonPoints": [
      "Son histoire montre la tendresse de Jésus envers les enfants.",
      "Jésus demanda aux personnes présentes de ne pas avoir peur.",
      "Il prit la jeune fille par la main et lui parla avec douceur.",
      "Sa résurrection fournit une démonstration remarquable du pouvoir de Jésus sur la mort."
    ],
    "keyReading": "Marc 5:21-43 ; Luc 8:40-56 ; Matthieu 9:18-26",
    "location": "Galilée.",
    "relationshipWithJehovah": "Sa résurrection démontra la puissance que Jéhovah avait donnée à Jésus sur la mort et renforça l’espérance de la résurrection.",
    "didYouKnow": "Jésus demanda aux parents de la jeune fille de lui donner quelque chose à manger après l’avoir ressuscitée.",
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
    "studyFocus": "Bartimée était un mendiant aveugle qui se trouvait près de Jéricho lorsque Jésus passa. Il cria vers Jésus pour demander pitié, persista malgré les personnes qui voulaient le faire taire et retrouva la vue.",
    "lessonPoints": [
      "Bartimée reconnut Jésus comme le Fils de David.",
      "Il persista dans ses appels malgré les reproches de la foule.",
      "Il exprima clairement ce qu’il désirait recevoir.",
      "Après sa guérison, il suivit Jésus sur le chemin."
    ],
    "keyReading": "Marc 10:46-52 ; Luc 18:35-43",
    "location": "Près de Jéricho.",
    "relationshipWithJehovah": "Bartimée manifesta une foi remarquable en Jésus et glorifia Dieu après avoir retrouvé la vue.",
    "didYouKnow": "Quand Jésus l’appela, Bartimée jeta immédiatement son vêtement de dessus, se leva d’un bond et vint vers Jésus.",
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
    "studyFocus": "La Samaritaine rencontra Jésus près du puits de Jacob à Sychar. Leur conversation porta sur l’eau de la vie, le vrai culte et l’identité du Messie. Elle parla ensuite de Jésus aux habitants de sa ville.",
    "lessonPoints": [
      "Elle dépassa les barrières sociales et religieuses pour dialoguer avec Jésus.",
      "Elle posa des questions sur le lieu et la manière d’adorer Dieu.",
      "Elle reconnut progressivement que Jésus était le Messie.",
      "Elle devint à son tour une personne qui témoignait de ce qu’elle avait appris."
    ],
    "keyReading": "Jean 4:1-42",
    "location": "Sychar, en Samarie.",
    "relationshipWithJehovah": "Elle fut aidée à comprendre que le vrai culte devait être rendu avec esprit et vérité et reconnut Jésus comme le Messie.",
    "didYouKnow": "Les habitants de la ville dirent finalement à la femme qu’ils ne croyaient plus seulement à cause de ce qu’elle avait raconté, mais parce qu’ils avaient eux-mêmes entendu Jésus.",
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
    "studyFocus": "Le centurion romain de Capharnaüm était un officier qui avait un serviteur gravement malade. Il estima que Jésus pouvait le guérir à distance et se considéra indigne de recevoir Jésus chez lui.",
    "lessonPoints": [
      "Le centurion se souciait sincèrement de son serviteur.",
      "Il avait une grande confiance dans l’autorité de Jésus.",
      "Il se montra humble malgré sa position militaire.",
      "Jésus donna son exemple de foi en modèle pour ceux qui l’écoutaient."
    ],
    "keyReading": "Matthieu 8:5-13 ; Luc 7:1-10",
    "location": "Capharnaüm.",
    "relationshipWithJehovah": "Le centurion manifesta une foi exceptionnelle en Jésus, foi que Jésus loua publiquement.",
    "didYouKnow": "Jésus déclara qu’il n’avait trouvé chez personne en Israël une foi aussi grande que celle de ce centurion.",
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
    "studyFocus": "Félix était le gouverneur romain de Judée devant qui Paul comparut. Il écouta Paul parler de la justice, de la maîtrise de soi et du jugement à venir, mais repoussa la décision et espérait aussi recevoir de l’argent de Paul.",
    "lessonPoints": [
      "Félix entendit directement l’enseignement chrétien.",
      "Le message de Paul aborda des questions morales et le jugement.",
      "Il remit à plus tard l’occasion d’agir conformément à ce qu’il entendait.",
      "Il conserva Paul en prison, notamment dans l’espoir de recevoir de l’argent."
    ],
    "keyReading": "Actes 23:23-35 ; 24:10-27",
    "location": "Césarée, en Judée.",
    "relationshipWithJehovah": "Félix entendit un témoignage clair sur la justice et le jugement, mais le récit ne dit pas qu’il devint serviteur de Jéhovah.",
    "didYouKnow": "Félix faisait souvent venir Paul et s’entretenait avec lui, tout en espérant que Paul lui donnerait de l’argent.",
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
    "studyFocus": "Porcius Festus succéda à Félix comme gouverneur de Judée. Il entendit l’affaire de Paul, consulta Agrippa et finit par accepter que Paul en appelle à César.",
    "lessonPoints": [
      "Festus examina une accusation religieuse qu’il ne comprenait pas entièrement.",
      "Il chercha à obtenir l’avis d’Agrippa sur l’affaire.",
      "Paul utilisa son droit de citoyen romain à faire appel à César.",
      "Festus reconnut finalement que Paul n’avait rien fait qui méritait la mort."
    ],
    "keyReading": "Actes 25:1-27 ; 26:1-32",
    "location": "Césarée et Jérusalem.",
    "relationshipWithJehovah": "Festus n’est pas présenté comme adorateur de Jéhovah, mais il entendit à plusieurs reprises le témoignage de Paul au sujet du Christ.",
    "didYouKnow": "Festus admit devant Agrippa que Paul n’avait rien fait qui méritait la mort, mais l’appel de Paul à César devait être respecté.",
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
    "studyFocus": "Hérode Agrippa II était le roi devant qui Paul présenta sa défense à Césarée. Il connaissait les coutumes et les controverses juives et entendit Paul expliquer son espérance fondée sur les promesses de Dieu.",
    "lessonPoints": [
      "Agrippa écouta attentivement la défense de Paul.",
      "Il connaissait les questions religieuses qui opposaient Paul à ses accusateurs.",
      "Paul l’invita à examiner les prophéties et à croire au message concernant le Christ.",
      "Le récit ne dit pas qu’Agrippa devint chrétien."
    ],
    "keyReading": "Actes 25:13-27 ; 26:1-32",
    "location": "Césarée et territoire gouverné par Agrippa.",
    "relationshipWithJehovah": "Agrippa entendit un témoignage détaillé sur Jésus et les prophéties, sans que le récit biblique indique qu’il devint serviteur de Jéhovah.",
    "didYouKnow": "Agrippa dit à Paul : « En peu de temps tu me persuaderais de devenir chrétien », mais le récit ne précise pas qu’il devint disciple.",
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
    "studyFocus": "Bérénice était la sœur d’Agrippa II et se trouvait avec lui lorsque Paul présenta sa défense devant Festus. Elle assista donc à une audience où l’apôtre expliqua publiquement sa foi.",
    "lessonPoints": [
      "Bérénice accompagna Agrippa à Césarée.",
      "Elle entendit le témoignage de Paul concernant Jésus et les prophéties.",
      "Elle fut présente lors de la discussion entre Festus et Agrippa au sujet de Paul.",
      "La Bible ne fournit pas davantage d’informations sur sa réaction personnelle."
    ],
    "keyReading": "Actes 25:13-27 ; 26:1-32",
    "location": "Césarée.",
    "relationshipWithJehovah": "Bérénice entendit le témoignage chrétien lors de l’audience de Paul, mais la Bible ne précise pas quelle réponse personnelle elle y donna.",
    "didYouKnow": "Bérénice est explicitement mentionnée avec Agrippa lorsqu’ils entrèrent dans la salle d’audience avec les commandants militaires et les hommes importants de la ville.",
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
    "qualities": [
      "Courageuse pour se présenter devant Paul avec Agrippa II malgré le contexte judiciaire.",
      "Elle a participé à l’audience où Paul a exposé sa foi, ce qui l’a placée directement face au témoignage chrétien.",
      "Son rôle de membre de la famille royale lui donnait une position publique et une influence dans les événements rapportés en Actes 25–26."
    ],
    "difficulties": [
      "Le récit biblique donne très peu d’informations sur ses convictions personnelles ou sa réaction au témoignage de Paul."
    ]
  },
  "phoebe": {
    "studyFocus": "Phœbé était une chrétienne de Cenchrées que Paul recommanda chaleureusement aux chrétiens de Rome. Il la présente comme une ministre de la congrégation et comme une aide pour beaucoup, y compris pour lui-même.",
    "lessonPoints": [
      "Phœbé assumait une responsabilité reconnue dans la congrégation de Cenchrées.",
      "Paul demanda aux Romains de l’accueillir avec respect.",
      "Elle avait apporté une aide concrète à de nombreux chrétiens.",
      "Son exemple montre la valeur du service et de l’hospitalité dans la congrégation."
    ],
    "keyReading": "Romains 16:1-2",
    "location": "Cenchrées, près de Corinthe.",
    "relationshipWithJehovah": "Phœbé servait fidèlement la congrégation et utilisait ses ressources et ses possibilités pour aider les chrétiens.",
    "didYouKnow": "Paul demande aux Romains de lui apporter toute l’aide dont elle pourrait avoir besoin, car elle avait été une aide pour beaucoup.",
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
    "studyFocus": "Évodie était une chrétienne de Philippes qui avait travaillé dur avec Paul pour la bonne nouvelle. Paul l’exhorta, ainsi que Syntyche, à être unies dans le Seigneur.",
    "lessonPoints": [
      "Évodie avait collaboré avec Paul dans la proclamation de la bonne nouvelle.",
      "Paul la considérait comme une chrétienne engagée, malgré leur désaccord.",
      "Il demanda à la congrégation de les aider à retrouver l’unité.",
      "Son récit montre que même des croyants actifs doivent préserver la paix et l’unité."
    ],
    "keyReading": "Philippiens 4:2-3",
    "location": "Philippes, en Macédoine.",
    "relationshipWithJehovah": "Évodie servait Jéhovah dans la congrégation et devait préserver l’unité avec sa sœur chrétienne.",
    "didYouKnow": "Paul reconnaît qu’elle avait « lutté côte à côte » avec lui pour la bonne nouvelle.",
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
    "studyFocus": "Épaphrodite était un chrétien de Philippes envoyé auprès de Paul pour lui apporter une aide matérielle. Il tomba gravement malade, mais continua à se dépenser pour le service chrétien.",
    "lessonPoints": [
      "Épaphrodite accepta de voyager pour servir Paul et la congrégation.",
      "Il tomba gravement malade à Rome.",
      "Il se souciait davantage de l’inquiétude des Philippiens que de sa propre situation.",
      "Paul le présenta comme un frère, un collaborateur et un compagnon de combat."
    ],
    "keyReading": "Philippiens 2:25-30 ; 4:18",
    "location": "Philippes et Rome.",
    "relationshipWithJehovah": "Épaphrodite servait avec dévouement et mettait les intérêts du Christ avant son propre confort.",
    "didYouKnow": "Paul dit qu’Épaphrodite avait été malade presque au point de mourir, mais que Dieu avait eu pitié de lui.",
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
    "studyFocus": "Tychique était un collaborateur de Paul originaire d’Asie. Paul lui confia des missions importantes, notamment de transmettre des lettres et de donner des nouvelles sur sa situation.",
    "lessonPoints": [
      "Tychique accompagna Paul dans des déplacements missionnaires.",
      "Il fut chargé de missions nécessitant confiance et discrétion.",
      "Paul le considérait comme un frère bien-aimé et fidèle serviteur.",
      "Il aida les congrégations à connaître la situation de Paul et à être encouragées."
    ],
    "keyReading": "Actes 20:4 ; Éphésiens 6:21-22 ; Colossiens 4:7-8 ; 2 Timothée 4:12 ; Tite 3:12",
    "location": "Asie Mineure, Macédoine, Jérusalem et Rome.",
    "relationshipWithJehovah": "Tychique servit fidèlement aux côtés de Paul et contribua à fortifier les congrégations.",
    "didYouKnow": "Paul l’envoya aux Éphésiens et aux Colossiens afin qu’il leur fasse connaître sa situation et réconforte leur cœur.",
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
    "studyFocus": "Démas fut pendant un temps un collaborateur de Paul, mais il abandonna plus tard l’apôtre parce qu’il aimait le présent monde. Son parcours montre qu’un bon départ ne suffit pas : il faut rester fidèle.",
    "lessonPoints": [
      "Démas participa pendant un temps au ministère avec Paul.",
      "Il faisait partie d’un groupe de collaborateurs reconnus.",
      "Son attitude changea au point d’abandonner Paul.",
      "Son parcours rappelle qu’une bonne activité passée ne remplace pas la fidélité jusqu’au bout."
    ],
    "keyReading": "Colossiens 4:14 ; Philémon 24 ; 2 Timothée 4:9-10",
    "location": "Rome et les régions où Paul exerçait son ministère.",
    "relationshipWithJehovah": "Démas avait commencé à servir avec les chrétiens, mais il finit par quitter Paul parce qu’il aimait le présent monde.",
    "didYouKnow": "Démas est cité avec Luc dans les salutations de Paul avant que Paul ne signale plus tard son abandon.",
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
    "difficulties": [
      "Une grande coalition d’Ammôn, de Moab et de Séïr est venue menacer Juda.",
      "Il a eu peur et a dû reconnaître publiquement que lui et son peuple ne savaient pas quoi faire.",
      "Il a aussi été repris pour ses liens avec le méchant roi Ahab et a subi les conséquences de certaines décisions imprudentes.",
      "Malgré ces faiblesses, il a continué à rechercher Jéhovah et à encourager le peuple à lui faire confiance. — 2Ch 19:1-3 ; 20:1-12."
    ]
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
    "studyFocus": "Manoa était le père de Samson et le mari d’une femme stérile à qui un ange annonça la naissance future de leur fils. Il demanda à Jéhovah des indications sur l’éducation de l’enfant. Manoa participa ensuite à l’éducation de Samson selon les instructions reçues.",
    "lessonPoints": [
      "Manoa pria pour recevoir des directives concernant l’enfant promis.",
      "Il voulait savoir comment élever correctement son fils.",
      "Il accepta les instructions de l’ange de Jéhovah.",
      "Son exemple montre l’importance de rechercher la direction divine pour élever un enfant."
    ],
    "keyReading": "Juges 13:1-25",
    "location": "La région de Tsora, dans le territoire de Dan.",
    "relationshipWithJehovah": "Manoa pria Jéhovah et rechercha sa direction lorsqu’il apprit la naissance annoncée de Samson.",
    "didYouKnow": "L’ange qui annonça la naissance de Samson donna à la mère des instructions alimentaires particulières avant même la naissance de l’enfant.",
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
    "difficulties": [
      "Sa femme et lui étaient sans enfant, ce qui constituait une grande épreuve pour leur foyer.",
      "Il a dû accueillir un message angélique annonçant la naissance extraordinaire d’un fils et comprendre comment l’élever.",
      "Il a demandé à Jéhovah de leur donner des instructions supplémentaires, montrant qu’il ne se sentait pas capable de tout comprendre seul.",
      "Plus tard, il a dû voir son fils Samson prendre des décisions qui lui causaient de l’inquiétude. — Jg 13:2-8 ; 14:1-3."
    ]
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
    "difficulties": [
      "Il a prophétisé dans une période marquée par l’idolâtrie et l’infidélité à Jéhovah en Juda.",
      "Son message annonçait un jugement sévère contre Jérusalem et les nations, ce qui demandait du courage pour parler franchement.",
      "Il a dû transmettre un avertissement alors que beaucoup de ses contemporains ne servaient pas fidèlement Jéhovah.",
      "Il a aussi annoncé un message d’espoir pour les humbles qui rechercheraient Jéhovah. — Tse 1:4-6 ; 2:3 ; 3:9-13."
    ]
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
    "difficulties": [
      "Il a été profondément troublé par la violence, l’injustice et l’oppression qu’il observait en Juda.",
      "Il a posé à Jéhovah des questions franches sur la raison pour laquelle le mal semblait durer.",
      "Il a dû accepter que Jéhovah agisse selon son propre calendrier, même lorsqu’il ne comprenait pas encore comment.",
      "Il a finalement exprimé sa détermination à continuer de se réjouir en Jéhovah malgré des circonstances difficiles. — Hab 1:2-4, 12-17 ; 2:2-4 ; 3:17-19."
    ]
  },
  "amos": {
    "studyFocus": "Amos était un éleveur et cultivateur de sycomores de Tekoa que Jéhovah envoya prophétiser au royaume d’Israël. Il dénonça l’injustice, l’oppression des pauvres et une adoration devenue hypocrite. Il transmit son message malgré l’opposition du prêtre Amatsia.",
    "lessonPoints": [
      "Amos n’était pas issu d’une école de prophètes mais reçut une mission de Jéhovah.",
      "Il dénonça courageusement l’exploitation et l’injustice.",
      "Il refusa de modifier son message sous la pression d’un responsable religieux.",
      "Il rappela que le culte de Dieu doit être accompagné d’une conduite juste."
    ],
    "keyReading": "Amos 1:1 ; 3:7-8 ; 5:10-24 ; 7:10-17 ; 8:4-7 ; 9:11-15",
    "location": "Tekoa en Juda puis le royaume d’Israël, notamment Béthel.",
    "relationshipWithJehovah": "Amos considérait sa mission prophétique comme un ordre de Jéhovah et transmit fidèlement son message malgré l’opposition.",
    "didYouKnow": "Amos se décrit comme un éleveur et comme quelqu’un qui travaillait les figuiers-sycomores avant d’être envoyé prophétiser.",
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
    "difficulties": [
      "Il a été envoyé comme prophète auprès du royaume d’Israël alors que le culte était profondément corrompu.",
      "Son message dénonçait l’injustice, l’exploitation des pauvres et l’hypocrisie religieuse.",
      "Il a rencontré l’opposition du prêtre Amatsia, qui lui a ordonné de ne plus prophétiser à Béthel.",
      "Il a continué à transmettre fidèlement le message de Jéhovah malgré cette opposition. — Am 2:6-8 ; 7:10-17."
    ]
  },
  "micah": {
    "studyFocus": "Michée était un prophète de Juda qui dénonça la corruption des chefs, des prêtres et des prophètes infidèles. Il annonça aussi des promesses importantes concernant la domination future et la paix. Son message associait jugement et espérance.",
    "lessonPoints": [
      "Michée dénonça l’injustice même lorsqu’elle concernait des personnes puissantes.",
      "Il rappela les qualités que Jéhovah attend de ses adorateurs.",
      "Il annonça la naissance du futur dirigeant à Bethléem.",
      "Son message montre que Jéhovah condamne l’injustice mais offre aussi une espérance."
    ],
    "keyReading": "Michée 1:1-16 ; 3:1-12 ; 4:1-5 ; 5:1-5 ; 6:6-8",
    "location": "Juda, particulièrement les régions rurales et Jérusalem.",
    "relationshipWithJehovah": "Michée transmit courageusement les jugements et les promesses de Jéhovah et rappela ce que Dieu attend de ceux qui veulent lui plaire.",
    "didYouKnow": "Michée 5:2 identifie Bethléem Éphrata comme le lieu d’où sortirait un futur dirigeant en Israël, prophétie appliquée à Jésus.",
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
    "difficulties": [
      "Il a prophétisé dans une période où l’injustice, la corruption et l’oppression existaient en Juda et en Israël.",
      "Il a dû dénoncer des chefs et des responsables religieux qui abusaient de leur position.",
      "Ses annonces de jugement étaient difficiles à transmettre à un peuple qui s’éloignait de Jéhovah.",
      "Il a aussi proclamé des promesses d’espoir concernant le futur règne de paix et la venue du Messie. — Mi 2:1-2 ; 3:1-12 ; 5:2-5."
    ]
  },
  "obadiah": {
    "studyFocus": "Abdias fut un prophète dont le livre annonce le jugement contre Édom. Il dénonça notamment la joie malveillante des Édomites devant le malheur de leurs frères, les descendants de Jacob. Le livre se termine par une annonce de restauration pour le peuple de Jéhovah.",
    "lessonPoints": [
      "Jéhovah condamne la joie malveillante devant le malheur d’autrui.",
      "Abdias montre que la violence et l’orgueil nationaux ne restent pas impunis.",
      "Le jugement annoncé contre Édom s’inscrit dans la fidélité de Jéhovah à ses normes de justice.",
      "La prophétie se termine sur l’idée que la souveraineté appartiendrait à Jéhovah."
    ],
    "keyReading": "Abdias 1-21",
    "location": "Juda; le contexte de la prophétie concerne particulièrement Édom et Jérusalem.",
    "relationshipWithJehovah": "Abdias transmit un message de jugement de Jéhovah contre Édom et une annonce de rétablissement pour son peuple.",
    "didYouKnow": "Le livre d’Abdias est le plus court des livres prophétiques des Écritures hébraïques, avec seulement 21 versets.",
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
    "difficulties": [
      "Il a prophétisé contre Édom après que celui-ci s’était réjoui des malheurs de Juda.",
      "Son message annonçait que Jéhovah demanderait des comptes à Édom pour son hostilité envers son peuple.",
      "Comme tout prophète chargé d’annoncer un jugement, il devait transmettre un message sérieux et peu agréable.",
      "Il a cependant annoncé que la délivrance serait accordée au peuple de Jéhovah. — Abd 10-17."
    ]
  },
  "joel": {
    "studyFocus": "Joël fut un prophète dont le message commence par une invasion de sauterelles et appelle le peuple à revenir sincèrement vers Jéhovah. Il annonce ensuite des bénédictions, l’effusion de l’esprit et le jour de Jéhovah.",
    "lessonPoints": [
      "Joël invita le peuple à revenir vers Jéhovah avec tout son cœur.",
      "Il montra que la repentance véritable ne consiste pas seulement en gestes extérieurs.",
      "Il annonça que Jéhovah pouvait restaurer ce qui avait été dévasté.",
      "Sa prophétie sur l’esprit saint fut appliquée à la Pentecôte."
    ],
    "keyReading": "Joël 1:1-20 ; 2:1-32 ; 3:1-21",
    "location": "Juda et Jérusalem.",
    "relationshipWithJehovah": "Joël exhorta le peuple à revenir vers Jéhovah et rappela que Dieu est miséricordieux envers ceux qui se repentent sincèrement.",
    "didYouKnow": "Actes 2:16-21 applique aux événements de la Pentecôte la prophétie de Joël concernant l’effusion de l’esprit saint.",
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
    "difficulties": [
      "Il a vécu une période marquée par une invasion dévastatrice de sauterelles et par les conséquences d’un désastre agricole.",
      "Il a dû expliquer que cette catastrophe devait pousser le peuple à revenir sincèrement vers Jéhovah.",
      "Son message appelait prêtres et peuple à se réunir, jeûner et revenir à Dieu de tout leur cœur.",
      "Il a également annoncé un avenir d’espoir pour ceux qui invoqueraient le nom de Jéhovah. — Jl 1:2-14 ; 2:12-17, 28-32."
    ]
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
    "difficulties": [
      "Il a annoncé le jugement de Jéhovah contre Ninive, capitale de l’Assyrie, une puissance redoutée et violente.",
      "Son message concernait une nation qui avait opprimé de nombreux peuples, dont Juda.",
      "Il devait proclamer avec conviction la chute future d’une puissance qui semblait alors très forte.",
      "Son message rappelait néanmoins que Jéhovah est un refuge pour ceux qui cherchent refuge en lui. — Na 1:7-15 ; 2:1-13."
    ]
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
    "studyFocus": "Joseph était le père adoptif de Jésus et un descendant de David. Il était charpentier et époux de Marie. Il suivit les instructions de Jéhovah transmises par des anges, protégeant Jésus enfant en partant notamment en Égypte puis en revenant s’installer à Nazareth.",
    "lessonPoints": [
      "Joseph accepta la situation inhabituelle concernant la grossesse de Marie après avoir reçu une explication divine.",
      "Il protégea Jésus en obéissant rapidement aux avertissements reçus.",
      "Il prit soin de sa famille en exerçant le métier de charpentier.",
      "Il transmit à Jésus l’environnement familial et religieux d’un Juif fidèle."
    ],
    "keyReading": "Matthieu 1:18-25 ; 2:13-23 ; Luc 2:1-52 ; Jean 1:45 ; 6:42",
    "location": "Bethléem, Égypte et Nazareth.",
    "relationshipWithJehovah": "Joseph obéit aux instructions reçues de Jéhovah et assuma fidèlement ses responsabilités envers Marie et Jésus.",
    "didYouKnow": "Joseph n’est plus mentionné dans les récits du ministère public de Jésus; cela peut indiquer qu’il était décédé auparavant, mais la Bible ne précise pas les circonstances de sa mort.",
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
    "studyFocus": "Caïphe était le grand prêtre durant une partie du ministère de Jésus. Il participa aux décisions des chefs religieux contre Jésus et présida l’interrogatoire au cours duquel Jésus fut accusé de blasphème.",
    "lessonPoints": [
      "Caïphe occupait une position religieuse très importante.",
      "Il participa au complot visant à faire mourir Jésus.",
      "Il interrogea Jésus devant le Sanhédrin.",
      "Il contribua ensuite à remettre Jésus au pouvoir romain."
    ],
    "keyReading": "Matthieu 26:57-68 ; Jean 11:45-53 ; 18:12-24",
    "location": "Jérusalem.",
    "relationshipWithJehovah": "Bien qu’il occupe la fonction de grand prêtre, Caïphe rejeta Jésus et participa à sa condamnation; sa conduite contraste avec la fidélité demandée à un représentant du culte de Jéhovah.",
    "didYouKnow": "Caïphe était le grand prêtre cette année-là, et Jean rapporte qu’il avait déclaré qu’il était avantageux qu’un seul homme meure pour le peuple.",
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
    "studyFocus": "Jeanne était une femme qui faisait partie des femmes qui accompagnaient Jésus et les Douze et qui les soutenaient avec leurs biens. Elle avait été guérie par Jésus et resta attachée à son ministère.",
    "lessonPoints": [
      "Jeanne avait personnellement bénéficié de l’aide de Jésus.",
      "Elle soutenait Jésus et les Douze avec ses ressources.",
      "Elle faisait partie des femmes qui accompagnèrent Jésus.",
      "Elle fut aussi associée au témoignage concernant la résurrection."
    ],
    "keyReading": "Luc 8:1-3 ; 23:55-56 ; 24:1-10",
    "location": "Galilée et Jérusalem.",
    "relationshipWithJehovah": "Jeanne manifesta sa reconnaissance envers Dieu en soutenant fidèlement le ministère de Jésus.",
    "didYouKnow": "Jeanne était la femme de Chuza, intendant d’Hérode, et faisait partie des femmes qui fournissaient leurs biens pour soutenir Jésus et les Douze.",
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
    "studyFocus": "L’un des dix lépreux guéris par Jésus était Samaritain. Alors que les neuf autres ne revinrent pas, lui retourna glorifier Dieu et remercier Jésus.",
    "lessonPoints": [
      "Il cria vers Jésus avec foi pour demander miséricorde.",
      "Il obéit à l’instruction de Jésus d’aller se montrer aux prêtres.",
      "Il remarqua qu’il était guéri et revint immédiatement.",
      "Il glorifia Dieu et remercia Jésus."
    ],
    "keyReading": "Luc 17:11-19",
    "location": "Entre la Samarie et la Galilée.",
    "relationshipWithJehovah": "Sa gratitude pour la guérison l’amena à glorifier Dieu et à revenir remercier Jésus.",
    "didYouKnow": "Jésus souligna que le seul lépreux revenu pour rendre gloire à Dieu était un Samaritain.",
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
    "studyFocus": "Une femme souffrant de pertes de sang depuis douze ans s’approcha de Jésus avec une grande foi. Elle toucha discrètement son vêtement et fut immédiatement guérie, puis reconnut publiquement son geste.",
    "lessonPoints": [
      "Elle endura une maladie longue et épuisante.",
      "Elle fit confiance au pouvoir de Jésus malgré sa situation.",
      "Elle ne se cacha pas lorsque Jésus demanda qui l’avait touché.",
      "Elle reçut de Jésus une parole rassurante sur sa foi."
    ],
    "keyReading": "Marc 5:25-34 ; Luc 8:43-48 ; Matthieu 9:20-22",
    "location": "Galilée, dans la région de Capharnaüm.",
    "relationshipWithJehovah": "Sa confiance en Jésus témoignait de sa foi dans le pouvoir de guérison que Jéhovah lui avait accordé.",
    "didYouKnow": "Jésus sentit qu’une force était sortie de lui lorsqu’elle toucha son vêtement et demanda qui l’avait touché.",
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
    "studyFocus": "L’homme possédé par des démons dans la région des Géraséniens vivait dans des conditions terribles et était isolé. Jésus le délivra, puis l’homme voulut accompagner Jésus, mais Jésus lui demanda de rentrer chez lui et de raconter ce que Dieu avait fait pour lui.",
    "lessonPoints": [
      "Il souffrait profondément à cause de l’influence démoniaque.",
      "Jésus le libéra complètement de cette oppression.",
      "Il voulut rester avec Jésus après sa guérison.",
      "Il obéit à Jésus et proclama dans toute la région ce que Jésus avait fait pour lui."
    ],
    "keyReading": "Marc 5:1-20 ; Luc 8:26-39",
    "location": "Région des Géraséniens, à l’est de la mer de Galilée.",
    "relationshipWithJehovah": "Après sa délivrance, il témoigna de ce que Dieu avait fait pour lui et devint un proclamateur local du pouvoir de Dieu.",
    "didYouKnow": "Jésus lui demanda de retourner chez lui et de raconter tout ce que Jéhovah avait fait pour lui ; il proclama alors dans toute la ville ce que Jésus avait fait.",
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
    "studyFocus": "Jason était un chrétien de Thessalonique qui accueillit Paul et Silas. Des opposants l’accusèrent ensuite devant les autorités en raison de son soutien aux prédicateurs chrétiens.",
    "lessonPoints": [
      "Jason ouvrit sa maison à Paul et Silas.",
      "Il fut entraîné dans un conflit public à cause de son soutien aux missionnaires.",
      "Il fournit une garantie financière aux autorités pour calmer la situation.",
      "Son exemple montre que l’hospitalité chrétienne peut demander du courage."
    ],
    "keyReading": "Actes 17:1-9 ; Romains 16:21",
    "location": "Thessalonique, en Macédoine.",
    "relationshipWithJehovah": "Jason soutint les prédicateurs chrétiens et accepta les conséquences de son hospitalité.",
    "didYouKnow": "Les adversaires accusèrent Jason et les autres frères de soutenir un prétendu roi rival de César, Jésus.",
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
    "studyFocus": "Onésiphore était un chrétien qui avait rendu de nombreux services à Paul. Il rechercha l’apôtre à Rome sans avoir honte de ses chaînes et avait auparavant servi fidèlement à Éphèse.",
    "lessonPoints": [
      "Onésiphore n’eut pas honte de Paul malgré son emprisonnement.",
      "Il fit des efforts pour retrouver Paul à Rome.",
      "Son service apporta un réel réconfort à l’apôtre.",
      "Son exemple montre qu’un chrétien fidèle peut soutenir courageusement un frère dans une période difficile."
    ],
    "keyReading": "2 Timothée 1:15-18 ; 4:19",
    "location": "Éphèse et Rome.",
    "relationshipWithJehovah": "Onésiphore servit courageusement les chrétiens et Paul demanda que Jéhovah accorde miséricorde à sa maison.",
    "didYouKnow": "Paul se souvenait particulièrement des nombreux services qu’Onésiphore lui avait rendus à Éphèse.",
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
    "studyFocus": "Marie, mère de Jacques, faisait partie des femmes qui suivirent Jésus et le servirent. Elle se trouvait parmi les personnes qui observèrent les événements entourant sa mort et se rendit au tombeau après le sabbat.",
    "lessonPoints": [
      "Marie faisait partie des femmes qui soutenaient le ministère de Jésus.",
      "Elle resta attachée aux disciples pendant la période de sa mort.",
      "Elle se rendit au tombeau pour prendre soin du corps de Jésus.",
      "Son témoignage fait partie des récits annonçant la résurrection."
    ],
    "keyReading": "Matthieu 27:55-61 ; 28:1-10 ; Marc 15:40-47 ; 16:1-8",
    "location": "Galilée et Jérusalem.",
    "relationshipWithJehovah": "Marie servit parmi les disciples de Jésus et participa au témoignage concernant sa mort et sa résurrection.",
    "didYouKnow": "Marie mère de Jacques faisait partie des femmes qui préparèrent des aromates pour aller au tombeau après le sabbat.",
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
    "studyFocus": "Marie, mère de Jean-Marc, était une chrétienne de Jérusalem dont la maison servait de lieu de réunion à la congrégation. Lorsque Pierre fut libéré de prison, il se rendit chez elle, où de nombreux disciples priaient.",
    "lessonPoints": [
      "Marie mettait sa maison à disposition pour les réunions chrétiennes.",
      "Elle soutenait une congrégation qui priait activement.",
      "Sa maison semble avoir été un lieu connu des disciples de Jérusalem.",
      "Son exemple illustre l’hospitalité et le soutien matériel à la congrégation."
    ],
    "keyReading": "Actes 12:5-17",
    "location": "Jérusalem.",
    "relationshipWithJehovah": "Marie soutenait la congrégation en ouvrant sa maison aux disciples qui se réunissaient et priaient.",
    "didYouKnow": "Lorsque Pierre fut libéré par l’ange, il se rendit directement à la maison de Marie, où plusieurs disciples étaient réunis pour prier.",
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
    "studyFocus": "Apphia était une chrétienne de Colosses à qui Paul adressa personnellement sa lettre avec Philémon et Archippe. Elle faisait partie du cercle de personnes liées à la congrégation qui se réunissait chez Philémon.",
    "lessonPoints": [
      "Apphia était connue de Paul et associée à la congrégation de Colosses.",
      "Elle reçut une lettre qui traitait d’une question chrétienne délicate concernant Onésime.",
      "Elle appartenait à un foyer impliqué dans la vie de la congrégation.",
      "Son exemple rappelle que les femmes chrétiennes participaient activement à la vie des premières congrégations."
    ],
    "keyReading": "Philémon 1-2",
    "location": "Colosses, en Asie Mineure.",
    "relationshipWithJehovah": "Apphia était une chrétienne associée à la congrégation qui se réunissait chez Philémon.",
    "didYouKnow": "Paul adresse sa lettre non seulement à Philémon et Apphia, mais aussi à Archippe et à la congrégation qui se réunissait dans leur maison.",
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
    "studyFocus": "Archippe était un chrétien de Colosses associé à Philémon et Apphia. Paul lui demanda de veiller à bien accomplir le ministère qu’il avait reçu dans le Seigneur.",
    "lessonPoints": [
      "Archippe avait reçu un ministère dans le Seigneur.",
      "Paul le connaissait suffisamment pour lui adresser une exhortation personnelle.",
      "Il faisait partie d’un foyer ou d’un groupe très impliqué dans la congrégation de Colosses.",
      "Son exemple souligne l’importance d’aller jusqu’au bout d’une responsabilité chrétienne."
    ],
    "keyReading": "Philémon 1-2 ; Colossiens 4:17",
    "location": "Colosses, en Asie Mineure.",
    "relationshipWithJehovah": "Archippe avait reçu un ministère dans le Seigneur et Paul l’encouragea à le mener pleinement à bien.",
    "didYouKnow": "Paul demanda aux Colossiens de dire à Archippe : « Continue à veiller à bien accomplir le ministère que tu as reçu dans le Seigneur. »",
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
    "studyFocus": "Jean-Marc était un compagnon de Paul et Barnabas, et le cousin de Barnabas. Il accompagna les deux hommes au début d’un voyage missionnaire mais les quitta ensuite. Plus tard, il redevint un collaborateur apprécié de Paul.",
    "lessonPoints": [
      "Jean-Marc commença son service missionnaire avec Paul et Barnabas.",
      "Il abandonna le voyage à un moment donné, ce qui provoqua plus tard un désaccord entre Paul et Barnabas.",
      "Barnabas continua à lui faire confiance.",
      "Paul reconnut ensuite que Marc lui était utile pour le ministère."
    ],
    "keyReading": "Actes 12:12,25 ; 13:5,13 ; 15:36-40 ; Colossiens 4:10 ; 2 Timothée 4:11 ; Philémon 24",
    "location": "Jérusalem, Antioche et diverses régions missionnaires.",
    "relationshipWithJehovah": "Jean-Marc progressa dans le service chrétien et finit par être reconnu comme un collaborateur utile.",
    "didYouKnow": "Marc est mentionné par Paul comme étant utile au ministère vers la fin de la vie de l’apôtre, malgré leur difficulté antérieure.",
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
    "studyFocus": "Priscille était une chrétienne mariée à Aquilas. Avec lui, elle collabora avec Paul, participa à l’enseignement d’Apollos et mit sa maison à disposition des congrégations.",
    "lessonPoints": [
      "Priscille travaillait avec Aquilas pour subvenir à leurs besoins.",
      "Elle participa activement à l’enseignement chrétien avec son mari.",
      "Elle contribua à corriger la compréhension d’Apollos avec tact.",
      "Elle et Aquilas mirent leur maison à disposition de la congrégation."
    ],
    "keyReading": "Actes 18:18-28 ; Romains 16:3-5 ; 1 Corinthiens 16:19 ; 2 Timothée 4:19",
    "location": "Corinthe, Éphèse et Rome.",
    "relationshipWithJehovah": "Priscille servait Jéhovah avec Aquilas en combinant travail, prédication, enseignement et hospitalité.",
    "didYouKnow": "Paul appelle Priscille et Aquilas ses « collaborateurs en Christ Jésus » et précise qu’ils ont risqué leur vie pour lui.",
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
    "studyFocus": "Claude Lysias commandait la garnison romaine de Jérusalem. Il intervint pour protéger Paul contre la foule, découvrit que Paul était citoyen romain et l’envoya sous escorte à Césarée.",
    "lessonPoints": [
      "Il intervint rapidement lorsqu’une foule attaqua Paul.",
      "Il vérifia le statut de Paul avant de le faire fouetter.",
      "Il organisa une escorte importante pour transférer Paul en sécurité.",
      "Sa lettre au gouverneur résuma les faits connus de l’affaire."
    ],
    "keyReading": "Actes 21:31-40 ; 22:22-30 ; 23:10-35",
    "location": "Jérusalem et Césarée.",
    "relationshipWithJehovah": "Le récit ne le présente pas comme adorateur de Jéhovah, mais ses interventions protégèrent Paul et permirent à celui-ci de poursuivre son témoignage.",
    "didYouKnow": "Claude Lysias mobilisa des soldats, des cavaliers et des lanciers pour escorter Paul hors de Jérusalem jusqu’à Antipatris.",
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
    "studyFocus": "Julius était un centurion chargé de conduire Paul et d’autres prisonniers à Rome. Il traita Paul avec bonté pendant le voyage et contribua à préserver la vie des prisonniers après le naufrage.",
    "lessonPoints": [
      "Julius permit à Paul de recevoir l’aide de ses amis à Sidon.",
      "Il écouta Paul au cours de la traversée.",
      "Il refusa que les soldats tuent les prisonniers après le naufrage.",
      "Son attitude montre qu’une autorité peut agir avec humanité envers des prisonniers."
    ],
    "keyReading": "Actes 27:1-44 ; 28:1-16",
    "location": "Césarée, Méditerranée, Malte et Rome.",
    "relationshipWithJehovah": "Julius n’est pas présenté comme adorateur de Jéhovah, mais sa conduite contribua à la protection de Paul et des autres prisonniers.",
    "didYouKnow": "Après le naufrage, Julius empêcha les soldats d’exécuter les prisonniers afin de sauver Paul.",
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
    "studyFocus": "Gaius de Macédoine était un compagnon de Paul qui fut entraîné dans l’émeute provoquée à Éphèse par l’opposition à la prédication. Il faisait partie des compagnons de voyage de Paul.",
    "lessonPoints": [
      "Gaius accompagna Paul dans son activité missionnaire.",
      "Il accepta les risques liés à la prédication chrétienne.",
      "Il fut saisi avec Aristarque lors de l’émeute d’Éphèse.",
      "Son exemple montre que le service chrétien pouvait exposer les missionnaires à une forte opposition."
    ],
    "keyReading": "Actes 19:28-31 ; 20:4",
    "location": "Macédoine et Éphèse.",
    "relationshipWithJehovah": "Gaius soutenait l’activité missionnaire de Paul malgré les risques liés à l’opposition.",
    "didYouKnow": "Lors de l’émeute d’Éphèse, les compagnons de Paul empêchèrent celui-ci d’entrer dans le théâtre, où la foule s’était rassemblée.",
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
    "studyFocus": "Aristarque était un Macédonien de Thessalonique et un compagnon de voyage de Paul. Il fut saisi pendant l’émeute d’Éphèse et accompagna ensuite Paul dans des voyages difficiles, notamment vers Rome.",
    "lessonPoints": [
      "Aristarque resta proche de Paul malgré l’opposition.",
      "Il fut exposé au danger pendant l’émeute d’Éphèse.",
      "Il accompagna Paul dans son voyage vers Rome.",
      "Paul le qualifia plus tard de compagnon de captivité."
    ],
    "keyReading": "Actes 19:29-31 ; 20:4 ; 27:1-2 ; Colossiens 4:10 ; Philémon 24",
    "location": "Thessalonique, Éphèse et Rome.",
    "relationshipWithJehovah": "Aristarque resta fidèle au service chrétien et soutint Paul dans des circonstances éprouvantes.",
    "didYouKnow": "Aristarque accompagna Paul jusqu’à Rome et fut ensuite appelé par Paul son « compagnon de captivité ».",
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
    "studyFocus": "Syntyche était une chrétienne de Philippes qui, comme Évodie, avait travaillé avec Paul pour la bonne nouvelle. Paul lui demanda de retrouver avec Évodie la même pensée dans le Seigneur.",
    "lessonPoints": [
      "Syntyche participa activement à la prédication avec Paul.",
      "Elle avait une place suffisamment connue dans la congrégation pour être citée personnellement.",
      "Paul traita leur désaccord comme un problème à résoudre avec amour.",
      "Son exemple rappelle qu’une divergence personnelle ne doit pas effacer les années de service commun."
    ],
    "keyReading": "Philippiens 4:2-3",
    "location": "Philippes, en Macédoine.",
    "relationshipWithJehovah": "Syntyche était une servante chrétienne active et était encouragée à préserver l’unité de la congrégation.",
    "didYouKnow": "Paul cite Évodie et Syntyche parmi celles qui avaient « lutté côte à côte » avec lui pour la bonne nouvelle.",
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
