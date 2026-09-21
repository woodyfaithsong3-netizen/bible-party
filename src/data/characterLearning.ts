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
    "studyFocus": "Adam fut le premier humain créé par Jéhovah. Il reçut la responsabilité de cultiver et de prendre soin de la terre, ainsi qu’une instruction claire concernant l’arbre de la connaissance du bon et du mauvais. Son récit montre à la fois la dignité de l’être humain créé à l’image de Dieu et les conséquences de la désobéissance.",
    "lessonPoints": [
      "Observer les responsabilités que Jéhovah confia à Adam avant même la création d’Ève.",
      "Comparer la décision d’Adam avec l’instruction précise qu’il avait reçue en Genèse 2:16, 17.",
      "Examiner comment le récit montre la responsabilité personnelle et les conséquences du péché, sans minimiser le choix d’Adam."
    ],
    "keyReading": "Genèse 1:26–31 ; 2:7–25 ; 3:1–24 ; 5:1-5",
    "location": "Jardin d’Éden, puis le cadre terrestre où Adam vécut après son expulsion.",
    "relationshipWithJehovah": "Adam reçut directement de Jéhovah des instructions et des responsabilités. Sa désobéissance au commandement concernant l’arbre montre qu’il connaissait la volonté de Dieu mais a choisi de la transgresser.",
    "didYouKnow": "Adam est présenté comme le premier humain et comme un « fils de Dieu » en Luc 3:38.",
    "jwResources": [
      {
        "title": "Adam — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Adam/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
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
    "studyFocus": "Noé vivait dans un monde devenu extrêmement violent et corrompu, mais la Bible le présente comme un homme juste qui marchait avec le vrai Dieu. Sur ordre de Jéhovah, il construisit l’arche avec sa famille et fut aussi « prédicateur de justice ».",
    "lessonPoints": [
      "Observer comment la foi de Noé s’est traduite par une longue obéissance concrète à des instructions précises.",
      "Étudier le rôle de sa famille dans la construction de l’arche et dans la préservation de la vie.",
      "Examiner aussi l’incident survenu après le Déluge afin de garder une vision honnête d’un homme fidèle mais imparfait."
    ],
    "keyReading": "Genèse 5:28–9:29 ; Hébreux 11:7 ; 2 Pierre 2:5",
    "location": "Le monde antédiluvien ; l’arche ; puis la terre après le Déluge.",
    "relationshipWithJehovah": "La Bible dit que Noé « marchait avec le vrai Dieu ». JW.org explique cette expression par une obéissance fidèle et un amour profond pour Jéhovah. Sa foi l’a poussé à faire exactement ce que Dieu lui demandait.",
    "didYouKnow": "Selon Étude perspicace des Écritures, Noé naquit en 2970 av. n. è., 126 ans après la mort d’Adam.",
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
    "identity": "Chef de famille et constructeur de l’arche — Noé est présenté comme un homme juste qui marchait avec le vrai Dieu et qui a construit l’arche sur ordre divin.",
    "era": "Genèse",
    "familyAndEntourage": [
      "Lamek",
      "Sa femme",
      "Sem",
      "Cham",
      "Japhet",
      "Leurs femmes"
    ],
    "bibleAccount": [
      "Construit l’arche selon les instructions de Jéhovah.",
      "Prêche à sa génération tout en préparant l’arche.",
      "Entre dans l’arche avec sa femme, ses trois fils et leurs femmes, ainsi qu’avec les animaux selon les instructions reçues.",
      "Après le Déluge, construit un autel et offre des sacrifices à Jéhovah.",
      "La fiche JW.org souligne sa foi et son obéissance."
    ],
    "qualities": [
      "Foi",
      "Obéissance",
      "Persévérance",
      "Courage",
      "Attachement à sa famille"
    ],
    "difficulties": [
      "Noé était imparfait et a lui aussi connu une faiblesse après le Déluge. Son récit ne présente donc pas un homme parfait, mais un serviteur fidèle qui marchait avec Jéhovah."
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
    "keyReading": "Genèse 11:27–25:10 ; Hébreux 11:8-19 ; Jacques 2:21-23",
    "location": "Our en Chaldée ; Harân ; Canaan, notamment Sichem, Béthel, Hébron et les environs de Beer-Shéba.",
    "relationshipWithJehovah": "Abraham connaissait le nom de Jéhovah, dressait des autels et priait. Il eut foi en Jéhovah et fut appelé son ami. Même dans l’épreuve concernant Isaac, il continua de faire confiance à la capacité de Jéhovah d’accomplir sa promesse.",
    "didYouKnow": "Étude perspicace indique qu’Abraham naquit en 2018 av. n. è. et qu’il descendait de Noé à la dixième génération par Sem.",
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
    "identity": "Patriarche — Abraham a quitté Our conformément à l’appel de Jéhovah et a été appelé « ami de Dieu ».",
    "era": "Genèse",
    "familyAndEntourage": [
      "Sarah",
      "Isaac",
      "Lot",
      "Ismaël"
    ],
    "bibleAccount": [
      "Quitte Our et se rend au pays indiqué par Dieu.",
      "Intercède au sujet de Sodome.",
      "Est disposé à offrir Isaac lorsqu’il reçoit cette instruction.",
      "JW.org met notamment en avant sa foi et sa confiance dans les promesses de Jéhovah."
    ],
    "qualities": [
      "Foi",
      "Confiance",
      "Hospitalité"
    ],
    "difficulties": [
      "La foi se manifeste aussi par des décisions concrètes."
    ]
  },
  "sarah": {
    "studyFocus": "Sara a vécu pendant des années avec la promesse de Jéhovah alors qu’elle était stérile. Elle quitta Our avec Abraham, vécut en Canaan et devint finalement mère d’Isaac à 90 ans. La Bible la présente aussi comme un exemple de foi.",
    "lessonPoints": [
      "Observer comment Sara a continué à vivre avec Abraham malgré une longue attente avant la naissance d’Isaac.",
      "Étudier avec nuance son intervention au sujet d’Agar et d’Yishmaël, ainsi que l’approbation divine ultérieure concernant le renvoi.",
      "Examiner pourquoi Hébreux 11:11 cite Sara comme exemple de foi."
    ],
    "keyReading": "Genèse 11:29–23:20 ; Hébreux 11:11 ; 1 Pierre 3:5, 6",
    "location": "Our ; Harân ; Sichem ; région montagneuse à l’est de Béthel ; Égypte ; Guérar ; Hébron/Mamré.",
    "relationshipWithJehovah": "Sara a servi Jéhovah avec Abraham et a été citée comme exemple de foi. Son histoire montre aussi qu’une personne fidèle peut traverser des périodes de doute ou prendre des décisions qui entraînent des difficultés.",
    "didYouKnow": "Sara avait 90 ans lorsqu’elle donna naissance à Isaac et mourut à 127 ans, selon Étude perspicace des Écritures.",
    "jwResources": [
      {
        "title": "Sara — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Sara/"
      },
      {
        "title": "Marche courageusement avec Dieu — Sara",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/patriarches-juges/sara-na-pas-regarde-en-arriere/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Sara : Dieu l’a appelée « Princesse »",
        "url": "https://www.jw.org/fr/bibliotheque/revues/tour-garde-no5-2017-septembre/sara-princesse/"
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
    "keyReading": "Genèse 25:19–50:14 ; Hébreux 11:21",
    "location": "Canaan ; Harân/Paddân-Aram ; Béthel ; Penouël ; Sichem ; Égypte.",
    "relationshipWithJehovah": "Jéhovah lui apparut à plusieurs moments clés, confirma la promesse faite à Abraham et Isaac et l’accompagna malgré ses imperfections. Jacob a appris à s’appuyer davantage sur Jéhovah au cours de ses épreuves.",
    "didYouKnow": "Jacob naquit en 1858 av. n. è. et reçut plus tard le nom d’Israël, nom qui désigna ensuite ses descendants comme nation.",
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
    "identity": "Patriarche d’Israël — Jacob, fils d’Isaac et de Rébecca, a vécu de nombreux changements et épreuves avant de devenir l’ancêtre des douze tribus d’Israël.",
    "era": "Genèse",
    "familyAndEntourage": [
      "Isaac",
      "Rébecca",
      "Ésaü",
      "Rachel",
      "Léa",
      "Joseph"
    ],
    "bibleAccount": [
      "Travaille de nombreuses années pour fonder sa famille.",
      "Reçoit le nom Israël.",
      "Descend en Égypte avec sa famille.",
      "JW.org propose notamment d’étudier les endroits où Jacob a vécu et les relations avec sa famille."
    ],
    "qualities": [
      "Persévérance",
      "Attachement aux promesses"
    ],
    "difficulties": []
  },
  "joseph": {
    "studyFocus": "Joseph, fils de Jacob et de Rachel, fut vendu comme esclave à 17 ans. Malgré l’injustice, l’éloignement et la prison, il resta fidèle à Jéhovah. Il fut ensuite établi à une haute fonction en Égypte et contribua à préserver sa famille pendant la famine.",
    "lessonPoints": [
      "Observer comment Joseph a gardé ses principes alors qu’il était loin de sa famille.",
      "Étudier son refus des avances de la femme de Potiphar et sa raison centrée sur le péché contre Dieu.",
      "Observer qu’il attribuait à Dieu les interprétations des rêves plutôt que de s’en attribuer le mérite.",
      "Étudier sa manière de traiter ses frères lorsqu’il aurait pu se venger."
    ],
    "keyReading": "Genèse 37–50 ; Hébreux 11:22",
    "location": "Canaan ; Paddân-Aram dans son enfance ; Égypte, notamment la maison de Potiphar, la prison et la cour de Pharaon.",
    "relationshipWithJehovah": "Joseph a montré qu’il considérait le péché comme une offense contre Dieu même lorsqu’aucun humain ne semblait pouvoir le surveiller. Il a aussi attribué à Dieu les interprétations des rêves et a continué à agir avec fidélité pendant les injustices.",
    "didYouKnow": "Joseph avait 17 ans lorsqu’il fut emmené en Égypte et 30 ans lorsqu’il fut établi dans une haute fonction auprès de Pharaon.",
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
    "identity": "Fils de Jacob et administrateur en Égypte — Joseph passe de l’esclavage à une position élevée en Égypte et permet à sa famille de survivre à la famine.",
    "era": "Genèse",
    "familyAndEntourage": [
      "Jacob",
      "Benjamin",
      "Juda",
      "Pharaon"
    ],
    "bibleAccount": [
      "Est vendu par ses frères.",
      "Explique des rêves en prison puis devant Pharaon.",
      "Organise les réserves de nourriture pendant la famine.",
      "Pardonne à ses frères."
    ],
    "qualities": [
      "Fidélité",
      "Maîtrise de soi",
      "Pardon",
      "Sagesse"
    ],
    "difficulties": []
  },
  "moise": {
    "studyFocus": "Moïse conduit Israël hors d’Égypte, reçoit la Loi au Sinaï et reste un médiateur central entre Jéhovah et le peuple.",
    "lessonPoints": [
      "Étudier la qualité « Humilité » dans les épisodes bibliques cités.",
      "Étudier la qualité « Courage » dans les épisodes bibliques cités.",
      "Étudier la qualité « Persévérance » dans les épisodes bibliques cités."
    ],
    "keyReading": "Exode 3–4 ; 12–14 ; 19–20 ; Nombres 12 ; 20:1-13",
    "location": "Égypte ; mont Sinaï ; désert ; plaines de Moab.",
    "relationshipWithJehovah": "Jéhovah choisit Moïse et le forme progressivement. Malgré ses hésitations, Moïse apprend à compter sur la puissance et la direction de Jéhovah.",
    "didYouKnow": "Moïse passa 40 ans à Madian avant de recevoir sa mission auprès de Pharaon.",
    "jwResources": [
      {
        "title": "Moïse — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Mo%C3%AFse/"
      },
      {
        "title": "Marche courageusement avec Dieu — Moïse",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/patriarches-juges/moise-a-fait-le-bon-choix/"
      },
      {
        "title": "Moïse — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
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
    "studyFocus": "Josué sert comme assistant de Moïse puis conduit Israël en Canaan. Il doit fortifier son courage et rester attaché aux instructions de Jéhovah.",
    "lessonPoints": [
      "Étudier la qualité « Courage » dans les épisodes bibliques cités.",
      "Étudier la qualité « Confiance » dans les épisodes bibliques cités.",
      "Étudier la qualité « Obéissance » dans les épisodes bibliques cités."
    ],
    "keyReading": "Josué 1–6 ; 23–24",
    "location": "Désert ; Canaan ; Jéricho ; Sichem.",
    "relationshipWithJehovah": "Jéhovah encourage Josué à être fort et courageux et lui demande de méditer la Loi avec constance.",
    "didYouKnow": "Josué avait été l’un des douze espions envoyés en Canaan et, avec Caleb, il donna un rapport favorable.",
    "jwResources": [
      {
        "title": "Marche courageusement avec Dieu — Josué",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/patriarches-juges/josue-a-suivi-des-instructions-etranges/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Josué — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Josué et les Gabaonites",
        "url": "https://www.jw.org/fr/bibliotheque/livres/j-apprends-en-lisant-la-bible/"
      }
    ],
    "identity": "Successeur de Moïse — Josué conduit Israël dans la conquête du pays et reste attaché aux instructions reçues.",
    "era": "Josué",
    "familyAndEntourage": [
      "Moïse",
      "Caleb",
      "Rahab"
    ],
    "bibleAccount": [
      "Accompagne les espions.",
      "Conduit Israël à travers le Jourdain.",
      "Dirige plusieurs campagnes en Canaan.",
      "Encourage le peuple à servir Jéhovah."
    ],
    "qualities": [
      "Courage",
      "Confiance",
      "Obéissance"
    ],
    "difficulties": []
  },
  "ruth": {
    "studyFocus": "Ruth, Moabite, choisit de rester avec Noémi et de devenir une adoratrice de Jéhovah. Elle travaille humblement et devient l’ancêtre du roi David.",
    "lessonPoints": [
      "Étudier la qualité « Loyauté » dans les épisodes bibliques cités.",
      "Étudier la qualité « Humilité » dans les épisodes bibliques cités.",
      "Étudier la qualité « Foi » dans les épisodes bibliques cités."
    ],
    "keyReading": "Ruth 1–4",
    "location": "Moab ; Bethléem ; champs de Boaz.",
    "relationshipWithJehovah": "Ruth abandonne ses anciennes attaches religieuses et manifeste une loyauté remarquable envers Noémi et envers le peuple de Jéhovah.",
    "didYouKnow": "Ruth figure dans la généalogie menant à David et à Jésus Christ.",
    "jwResources": [
      {
        "title": "Marche courageusement avec Dieu — Ruth",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/patriarches-juges/noemi-et-ruth-des-larmes-a-la-joie/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Ruth — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Ruth et Naomi",
        "url": "https://www.jw.org/fr/bibliotheque/livres/histoires-bibliques/"
      }
    ],
    "identity": "Moabite devenue ancêtre de David — Ruth, une Moabite, s’est attachée à Noémi et au peuple de Jéhovah avec une fidélité remarquable.",
    "era": "Juges",
    "familyAndEntourage": [
      "Naomi",
      "Boaz",
      "Obed"
    ],
    "bibleAccount": [
      "Reste auprès de Naomi.",
      "Travaille dans les champs de Boaz.",
      "Épouse Boaz.",
      "JW.org présente Ruth comme un exemple de fidélité et d’amitié."
    ],
    "qualities": [
      "Fidélité",
      "Loyauté",
      "Humilité"
    ],
    "difficulties": []
  },
  "samuel": {
    "studyFocus": "Samuel sert Jéhovah dès son enfance et devient prophète et juge en Israël. Il accompagne la transition vers la royauté tout en restant fidèle aux directives divines.",
    "lessonPoints": [
      "Étudier la qualité « Écoute » dans les épisodes bibliques cités.",
      "Étudier la qualité « Fidélité » dans les épisodes bibliques cités.",
      "Étudier la qualité « Courage » dans les épisodes bibliques cités."
    ],
    "keyReading": "1 Samuel 1–3 ; 7–12 ; 15",
    "location": "Shilo ; Rama ; Israël.",
    "relationshipWithJehovah": "Jéhovah se sert de Samuel comme prophète et juge. Samuel apprend à écouter sa voix et à transmettre ses messages même lorsqu’ils sont difficiles.",
    "didYouKnow": "Samuel reçut son premier message prophétique alors qu’il était encore jeune garçon.",
    "jwResources": [
      {
        "title": "Marche courageusement avec Dieu — Samuel",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/patriarches-juges/samuel-garcon-qui-a-parle-au-nom-de-jehovah/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Samuel — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Jéhovah parle à Samuel",
        "url": "https://www.jw.org/fr/bibliotheque/livres/j-apprends-en-lisant-la-bible/"
      }
    ],
    "identity": "Prophète et juge — Samuel sert dès son enfance et joue un rôle important lors de la transition vers la monarchie en Israël.",
    "era": "Juges à Rois",
    "familyAndEntourage": [
      "Anne",
      "Éli",
      "Saül",
      "David"
    ],
    "bibleAccount": [
      "Reçoit son appel alors qu’il est jeune.",
      "Juge Israël.",
      "Oint Saül puis David sur instruction divine."
    ],
    "qualities": [
      "Écoute",
      "Fidélité",
      "Courage"
    ],
    "difficulties": []
  },
  "david": {
    "studyFocus": "David devient roi après avoir été oint par Samuel. Sa vie montre une foi profonde, mais aussi les conséquences graves de ses fautes et l’importance du repentir.",
    "lessonPoints": [
      "Étudier la qualité « Foi » dans les épisodes bibliques cités.",
      "Étudier la qualité « Courage » dans les épisodes bibliques cités.",
      "Étudier la qualité « Loyauté » dans les épisodes bibliques cités.",
      "Étudier la qualité « Repentir » dans les épisodes bibliques cités."
    ],
    "keyReading": "1 Samuel 16–17 ; 24 ; 2 Samuel 5–12 ; Psaume 51",
    "location": "Bethléem ; Hébron ; Jérusalem.",
    "relationshipWithJehovah": "David recherche régulièrement la direction de Jéhovah et, après ses fautes graves, accepte la discipline et exprime un repentir sincère.",
    "didYouKnow": "David est appelé « un homme selon le cœur » de Jéhovah, sans que cela signifie qu’il était sans péché.",
    "jwResources": [
      {
        "title": "David — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/David/"
      },
      {
        "title": "Marche courageusement avec Dieu — David",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/rois-reconstruction-jerusalem/david-a-affronte-un-geant/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "David — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
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
    "studyFocus": "Salomon reçoit de Jéhovah une sagesse remarquable, construit le temple et connaît une grande prospérité. Mais ses mariages et son attachement à des femmes étrangères contribuent ensuite à son infidélité.",
    "lessonPoints": [
      "Étudier la qualité « Sagesse » dans les épisodes bibliques cités.",
      "Étudier la qualité « Discernement » dans les épisodes bibliques cités.",
      "Étudier la qualité « Vigilance » dans les épisodes bibliques cités."
    ],
    "keyReading": "1 Rois 3 ; 5–8 ; 11",
    "location": "Gabaon ; Jérusalem.",
    "relationshipWithJehovah": "Jéhovah répond à la demande de sagesse de Salomon, mais la fidélité exige de continuer à protéger son cœur et à obéir.",
    "didYouKnow": "Salomon construisit le temple de Jérusalem et régna 40 ans.",
    "jwResources": [
      {
        "title": "Salomon — Étude perspicace des Écritures",
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
      },
      {
        "title": "Étude perspicace des Écritures — Salomon",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Salomon/"
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
    "keyReading": "1 Rois 17–19 ; 21 ; 2 Rois 2",
    "location": "Israël du Nord ; mont Carmel ; désert ; région du Jourdain.",
    "relationshipWithJehovah": "Élie sert comme prophète de Jéhovah et apprend que la puissance divine ne dépend pas d’un spectacle impressionnant : Jéhovah le rassure et le guide.",
    "didYouKnow": "Élie fut nourri pendant un temps par des corbeaux près du torrent de Kerith.",
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
    "identity": "Prophète — Élie défend le culte de Jéhovah face au culte de Baal et accomplit plusieurs miracles.",
    "era": "Rois",
    "familyAndEntourage": [
      "Élisée",
      "Achab",
      "Jézabel"
    ],
    "bibleAccount": [
      "Annonce une sécheresse.",
      "Est nourri près du torrent de Kerith.",
      "Affronte les prophètes de Baal au mont Carmel."
    ],
    "qualities": [
      "Courage",
      "Zèle",
      "Confiance"
    ],
    "difficulties": []
  },
  "esther": {
    "studyFocus": "Esther devient reine et utilise sa position pour intervenir en faveur des Juifs menacés d’extermination. Son récit met en évidence courage, prudence et souci du peuple de Dieu.",
    "lessonPoints": [
      "Étudier la qualité « Courage » dans les épisodes bibliques cités.",
      "Étudier la qualité « Prudence » dans les épisodes bibliques cités.",
      "Étudier la qualité « Sacrifice » dans les épisodes bibliques cités."
    ],
    "keyReading": "Esther 2–9",
    "location": "Suse, en Perse.",
    "relationshipWithJehovah": "Même dans une situation dangereuse, Esther agit avec prudence et courage pour défendre le peuple de Jéhovah.",
    "didYouKnow": "Le livre d’Esther ne mentionne pas directement le nom de Jéhovah.",
    "jwResources": [
      {
        "title": "Marche courageusement avec Dieu — Esther",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/rois-reconstruction-jerusalem/esther-si-je-dois-mourir-alors-je-mourrai/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Esther — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Esther — Les personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/enfants/personnages-bibliques/"
      },
      {
        "title": "Étude perspicace des Écritures — Esther",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Esther/"
      }
    ],
    "identity": "Reine — Esther utilise sa position pour intervenir en faveur de son peuple lorsqu’un projet de destruction est préparé.",
    "era": "Période perse",
    "familyAndEntourage": [
      "Mardochée",
      "Assuérus",
      "Haman"
    ],
    "bibleAccount": [
      "Devient reine.",
      "Révèle son identité et le projet d’Haman.",
      "Intervient auprès du roi pour protéger les Juifs."
    ],
    "qualities": [
      "Courage",
      "Discrétion",
      "Abnégation"
    ],
    "difficulties": []
  },
  "daniel": {
    "studyFocus": "Daniel reste fidèle à Jéhovah pendant l’exil à Babylone et sous plusieurs souverains. Il refuse de compromettre son culte et continue de prier malgré l’interdiction royale.",
    "lessonPoints": [
      "Étudier la qualité « Intégrité » dans les épisodes bibliques cités.",
      "Étudier la qualité « Courage » dans les épisodes bibliques cités.",
      "Étudier la qualité « Fidélité » dans les épisodes bibliques cités."
    ],
    "keyReading": "Daniel 1 ; 6 ; 9",
    "location": "Babylone et l’Empire médo-perse.",
    "relationshipWithJehovah": "Daniel garde des habitudes de prière et met sa confiance dans Jéhovah même lorsque sa fidélité entraîne un danger réel.",
    "didYouKnow": "Daniel avait environ 15 ans lorsqu’il fut emmené à Babylone, selon la chronologie présentée par les publications JW.",
    "jwResources": [
      {
        "title": "Que dit la Bible à propos de Daniel ?",
        "url": "https://www.jw.org/fr/la-bible-et-vous/questions-bibliques/daniel-dans-la-bible/"
      },
      {
        "title": "Daniel — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Daniel — Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "La Bible en ligne",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Étude perspicace des Écritures — Daniel",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Daniel/"
      }
    ],
    "identity": "Prophète et haut fonctionnaire — Daniel reste fidèle pendant son service dans les cours babylonienne et perse et reçoit plusieurs visions.",
    "era": "Exil à Babylone",
    "familyAndEntourage": [
      "Hanania",
      "Mishaël",
      "Azaria",
      "Neboukadnetsar",
      "Darius"
    ],
    "bibleAccount": [
      "Refuse de se souiller avec la nourriture du roi.",
      "Interprète des rêves.",
      "Continue de prier malgré l’interdiction.",
      "Survit à la fosse aux lions."
    ],
    "qualities": [
      "Fidélité",
      "Courage",
      "Discipline",
      "Prière"
    ],
    "difficulties": []
  },
  "jean-baptiste": {
    "studyFocus": "Jean le Baptiseur a préparé le chemin pour le Messie avec courage, humilité et fidélité. Son exemple montre comment défendre ce qui est juste tout en dirigeant l’attention vers Jésus et vers Jéhovah.",
    "lessonPoints": [
      "Courage : Jean a dénoncé publiquement les mauvaises actions, notamment celles d’Hérode, sans laisser la peur l’empêcher de faire ce qui était juste.",
      "Humilité : il a reconnu que Jésus devait augmenter tandis que lui devait diminuer, et il s’est présenté comme celui qui préparait le chemin.",
      "Fidélité : malgré une vie simple, l’opposition et l’emprisonnement, Jean a continué à accomplir la mission que Jéhovah lui avait confiée."
    ],
    "keyReading": "Matthieu 3:1-12 ; Jean 1:19-34 ; Matthieu 11:2-11 ; Marc 6:17-29",
    "jwResources": [
      {
        "title": "Marche courageusement avec Dieu — Jean le Baptiseur",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/debuts-du-christianisme/jean-baptiseur-aucun-homme-plus-grand/"
      },
      {
        "title": "Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "La Bible en ligne — Traduction du monde nouveau",
        "url": "https://www.jw.org/fr/bibliotheque/bible/"
      },
      {
        "title": "Imitez leur foi — personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/la-foi-en-dieu/portraits-hommes-femmes-bible/"
      },
      {
        "title": "Étude perspicace des Écritures — Jean le Baptiseur",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Jean-le-baptiseur/"
      }
    ],
    "location": "Région du Jourdain ; il a notamment prêché dans le désert de Judée.",
    "relationshipWithJehovah": "Jean a été choisi pour préparer le chemin du Messie. Sa vie consacrée à cette mission et son courage face à l’opposition montrent sa fidélité à Jéhovah.",
    "didYouKnow": "Jésus a dit qu’« aucun homme » parmi ceux qui étaient nés de femmes n’avait été suscité de plus grand que Jean le Baptiseur, tout en soulignant que le plus petit dans le Royaume des cieux serait plus grand que lui (Matthieu 11:11).",
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
    "studyFocus": "Marie, mère de Jésus, accepte humblement une mission exceptionnelle et accompagne son fils pendant différentes étapes de sa vie et de son ministère.",
    "lessonPoints": [
      "Étudier la qualité « Foi » dans les épisodes bibliques cités.",
      "Étudier la qualité « Humilité » dans les épisodes bibliques cités.",
      "Étudier la qualité « Endurance » dans les épisodes bibliques cités."
    ],
    "keyReading": "Luc 1:26-56; 2:19,33-35,51; Jean 19:25-27",
    "location": "Nazareth ; Bethléem ; Jérusalem.",
    "relationshipWithJehovah": "Elle accepte humblement la mission annoncée par l’ange et exprime sa confiance en Jéhovah. Elle conserve et médite les événements liés à Jésus.",
    "didYouKnow": "JW.org explique que Marie était de la tribu de Juda et descendante de David; cela contribue à établir la descendance davidique de Jésus selon la chair.",
    "jwResources": [
      {
        "title": "Marche courageusement avec Dieu — Marie",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/debuts-du-christianisme/marie-courage-de-dire-oui/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Marie — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Marie — Les personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/enfants/personnages-bibliques/"
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
    "studyFocus": "Pierre a progressé d’un pêcheur impulsif à un apôtre mûr qui s’est appuyé sur Jéhovah et Jésus malgré ses erreurs.",
    "lessonPoints": [
      "Foi : Pierre a appris à regarder vers Jésus plutôt que vers les circonstances.",
      "Humilité : après avoir renié Jésus, il a accepté la discipline et a continué à servir.",
      "Courage : rempli d’esprit saint, il a parlé avec franchise malgré l’opposition."
    ],
    "keyReading": "Matthieu 14:22-33 ; 16:13-23 ; 26:69-75 ; Jean 21 ; Actes 2–5",
    "location": "Galilée ; Jérusalem ; Joppé ; Césarée.",
    "relationshipWithJehovah": "Jésus corrige Pierre mais continue de le former. Après sa résurrection, il lui confie de prendre soin de ses disciples.",
    "didYouKnow": "Pierre était pêcheur et travaillait avec son frère André.",
    "jwResources": [
      {
        "title": "Pierre, I — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Pierre-I/"
      },
      {
        "title": "Marche courageusement avec Dieu — Pierre",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/debuts-du-christianisme/pierre-je-suis-un-homme-pecheur/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Pierre — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
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
    "studyFocus": "Paul a consacré sa vie à annoncer la bonne nouvelle et à fortifier les congrégations, en s’appuyant sur Jéhovah dans de nombreuses épreuves.",
    "lessonPoints": [
      "Zèle : Paul a fait de la prédication sa priorité.",
      "Endurance : il a continué malgré les persécutions, les voyages et les difficultés.",
      "Amour : il a manifesté un profond intérêt pour les personnes qu’il aidait à devenir chrétiennes."
    ],
    "keyReading": "Actes 9 ; 13–28 ; Philippiens 3 ; 2 Corinthiens 11",
    "location": "Jérusalem ; Syrie ; Asie Mineure ; Grèce ; Rome.",
    "relationshipWithJehovah": "Jéhovah et Jésus réorientent complètement la vie de Paul. Il considère ensuite son ministère comme un trésor et supporte de nombreuses épreuves pour l’accomplir.",
    "didYouKnow": "Paul était aussi appelé Saul et était citoyen romain.",
    "jwResources": [
      {
        "title": "Marche courageusement avec Dieu — Paul",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/debuts-du-christianisme/paul-je-vous-recommande-de-ne-pas-vous-decourager/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Paul — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Paul — Imitez leur foi",
        "url": "https://www.jw.org/fr/bibliotheque/livres/vraie-foi/"
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
    "studyFocus": "L’apôtre Jean est proche de Jésus et devient un témoin important de sa vie, de sa mort et de sa résurrection. Il insiste fortement sur l’amour, la vérité et la fidélité.",
    "lessonPoints": [
      "Étudier la qualité « Amour » dans les épisodes bibliques cités.",
      "Étudier la qualité « Fidélité » dans les épisodes bibliques cités.",
      "Étudier la qualité « Vérité » dans les épisodes bibliques cités."
    ],
    "keyReading": "Jean 13:23-25; 19:25-27; 21:20-24; Révélation 1:9-20",
    "location": "Galilée ; Jérusalem ; Éphèse, selon les sources historiques utilisées par JW.org.",
    "relationshipWithJehovah": "Son attachement à Jésus s’est exprimé par un témoignage fidèle. Ses écrits mettent fortement en avant l’amour, l’obéissance et la fidélité à Dieu.",
    "didYouKnow": "Jean et Pierre sont présentés comme des pêcheurs de métier, et Jean appartenait au cercle des trois apôtres qui ont accompagné Jésus dans certaines circonstances particulières.",
    "jwResources": [
      {
        "title": "Jean — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Jean — Les personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/enfants/personnages-bibliques/"
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
    "studyFocus": "Isaac est le fils promis à Abraham et à Sara et un maillon essentiel de la lignée menant au Christ. Sa vie comprend l’épreuve du mont Moria, son mariage avec Rébecca, la naissance d’Ésaü et de Jacob et son rôle dans la transmission de la promesse.",
    "lessonPoints": [
      "Observer la place d’Isaac dans la réalisation de la promesse faite à Abraham.",
      "Étudier son attitude lors de l’épisode où Abraham devait l’offrir en sacrifice.",
      "Examiner comment Isaac a recherché la paix dans certains conflits liés aux puits et aux territoires.",
      "Suivre la transmission de la promesse à Jacob malgré les tensions familiales."
    ],
    "keyReading": "Genèse 21:1–35:29 ; Hébreux 11:17-20",
    "location": "Canaan, notamment Beer-Shéba, le pays du Néguev et la région de Guérar.",
    "relationshipWithJehovah": "Isaac bénéficiait directement des promesses faites à Abraham et se montra soumis dans l’épreuve du mont Moria. Jéhovah confirma ensuite l’alliance avec Isaac.",
    "didYouKnow": "Isaac mourut à 180 ans ; il devint père des jumeaux Ésaü et Jacob à l’âge de 60 ans.",
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
    "identity": "Fils d’Abraham et de Sarah — Isaac est le fils de la promesse et devient le père d’Ésaü et de Jacob.",
    "era": "Genèse",
    "familyAndEntourage": [
      "Abraham",
      "Sarah",
      "Rébecca",
      "Ésaü",
      "Jacob"
    ],
    "bibleAccount": [
      "Grandit comme le fils promis à Abraham et Sarah.",
      "Épouse Rébecca.",
      "Bénit et transmet l’héritage familial à Jacob."
    ],
    "qualities": [
      "Foi",
      "Paix",
      "Persévérance"
    ],
    "difficulties": []
  },
  "samson": {
    "studyFocus": "Samson fut un juge d’Israël choisi avant sa naissance pour entreprendre de délivrer Israël de la main des Philistins. Nazaréen dès sa naissance, il reçut une force exceptionnelle lorsqu’il agissait sous l’influence de l’esprit de Jéhovah. Son récit montre à la fois ses victoires contre les Philistins, ses faiblesses personnelles et son retour vers Jéhovah à la fin de sa vie.",
    "lessonPoints": [
      "Observer les instructions données par l’ange de Jéhovah aux parents de Samson avant sa naissance.",
      "Étudier comment Samson a utilisé sa force dans sa lutte contre les Philistins et ce qui montre que cette force venait de Jéhovah.",
      "Examiner ses choix personnels, notamment dans ses relations avec des femmes, sans confondre sa mission divine avec l’approbation de toutes ses décisions.",
      "Observer sa prière finale et la manière dont il a de nouveau compté sur Jéhovah."
    ],
    "keyReading": "Juges 13–16 ; Hébreux 11:32",
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
    "location": "Tsora et son territoire ; vallée de Sorek ; Timna ; Gaza ; Lehi ; région des Philistins.",
    "relationshipWithJehovah": "Jéhovah avait mis Samson à part dès sa naissance et son esprit lui donnait une force extraordinaire. Malgré des erreurs graves, Samson a continué à se tourner vers Jéhovah et l’a supplié de se souvenir de lui lors de sa dernière épreuve.",
    "didYouKnow": "Samson est présenté comme un des juges remarquables d’Israël et son récit est particulièrement lié à sa mission contre les Philistins.",
    "identity": "Juge d’Israël — Samson reçoit une force exceptionnelle et combat les Philistins, mais son histoire comporte aussi de graves faiblesses personnelles.",
    "era": "Juges",
    "familyAndEntourage": [
      "Manoah",
      "Dalila",
      "Les Philistins"
    ],
    "bibleAccount": [
      "Combat les Philistins.",
      "Accomplit plusieurs exploits.",
      "Est capturé après avoir révélé le secret de sa force à Dalila.",
      "Utilise une dernière fois sa force contre les Philistins."
    ],
    "qualities": [
      "Courage",
      "Force"
    ],
    "difficulties": [
      "Son récit montre les dangers du manque de maîtrise de soi et de mauvaises fréquentations."
    ]
  },
  "naomi": {
    "studyFocus": "Naomi a connu de grandes pertes mais a retrouvé la joie grâce à l’affection fidèle de Ruth et à la disposition de Jéhovah à prendre soin de ses serviteurs.",
    "lessonPoints": [
      "Persévérance : Naomi a continué à avancer malgré un profond chagrin.",
      "Amour fidèle : elle a apprécié la loyauté remarquable de Ruth.",
      "Espérance : son histoire montre que Jéhovah peut transformer une période très douloureuse."
    ],
    "keyReading": "Ruth 1–4",
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
    "location": "Bethléhem en Juda ; Moab ; retour à Bethléhem et environnement de la famille d’Élimélek.",
    "relationshipWithJehovah": "Naomi a traversé une période où elle pensait que Jéhovah avait rendu sa situation très amère. Pourtant, elle a continué à agir dans le cadre du culte de Jéhovah et a reconnu la main de Dieu lorsque Boaz est intervenu en faveur de sa famille.",
    "didYouKnow": "Naomi fut la belle-mère de Ruth, laquelle devint une ancêtre de David et de Jésus Christ.",
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
    "studyFocus": "Boaz a fait preuve de bonté loyale envers Ruth et Naomi et a respecté les dispositions de Jéhovah concernant le droit de rachat.",
    "lessonPoints": [
      "Générosité : Boaz a protégé et aidé Ruth avec bonté.",
      "Respect des dispositions divines : il a suivi la procédure prévue pour le rachat.",
      "Réputation : sa conduite juste lui a valu le respect de la communauté."
    ],
    "keyReading": "Ruth 2–4 ; Matthieu 1:5, 6",
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
    "location": "Bethléhem en Juda, notamment les champs de Boaz et l’espace public où les démarches légales sont effectuées.",
    "relationshipWithJehovah": "Boaz invoquait Jéhovah dans ses salutations et reconnaissait que Ruth avait cherché refuge sous les ailes de Jéhovah. Il respecta les dispositions légales et agit avec bonté dans le cadre du culte de Jéhovah.",
    "didYouKnow": "Boaz était fils de Salma et de Rahab, et devint le père d’Obed. Il constitue un maillon de la lignée menant au Messie.",
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
    "studyFocus": "Élisée a servi fidèlement Jéhovah pendant des années et a montré une grande confiance dans sa puissance.",
    "lessonPoints": [
      "Foi : Élisée a compté sur Jéhovah dans des situations humainement difficiles.",
      "Persévérance : il a continué son ministère après avoir succédé à Élie.",
      "Générosité : plusieurs récits montrent son souci sincère du bien des autres."
    ],
    "keyReading": "1 Rois 19:16, 19-21 ; 2 Rois 2–13 ; Luc 4:27",
    "jwResources": [
      {
        "title": "Élisha — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/%C3%89lisha/"
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
    "location": "Royaume d’Israël et régions voisines ; notamment Abel-Mehola, Jéricho, Samarie, Dothan et les territoires concernés par son activité prophétique.",
    "relationshipWithJehovah": "Élisha fut un prophète de Jéhovah et montra un grand zèle pour le vrai culte. JW.org souligne sa patience, son amour, sa bonté et sa fermeté lorsque le nom de Jéhovah était en cause.",
    "didYouKnow": "Élisha servit peut-être environ six ans comme assistant d’Éliya, puis exerça seul son activité prophétique pendant environ 60 ans. Étude perspicace lui attribue 16 miracles, contre 8 pour Éliya.",
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
    "studyFocus": "Nehémia était échanson du roi perse Artaxerxès avant de devenir gouverneur des Juifs. Lorsqu’il apprit l’état désolé de Jérusalem, il jeûna et pria, demanda l’autorisation de reconstruire la muraille et dirigea ensuite les travaux malgré une opposition importante.",
    "lessonPoints": [
      "Observer la réaction de Nehémia lorsqu’il apprend la situation de Jérusalem.",
      "Étudier sa prière avant de demander quelque chose au roi Artaxerxès.",
      "Examiner comment il organise les travaux tout en faisant face aux moqueries, aux menaces et aux complots.",
      "Observer comment il continue à défendre le culte pur et à corriger certaines pratiques après la reconstruction."
    ],
    "keyReading": "Néhémie 1–6 ; 8–10 ; 13",
    "jwResources": [
      {
        "title": "Marche courageusement avec Dieu — Néhémie",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/rois-reconstruction-jerusalem/nehemie-a-reconstruit-les-murailles/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Nehémia — Étude perspicace des Écritures",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Neh%C3%A9mia/"
      },
      {
        "title": "Livre de Néhémie — Bible en ligne",
        "url": "https://www.jw.org/fr/bibliotheque/bible/bible-d-etude/livres/N%C3%A9h%C3%A9mie/"
      }
    ],
    "location": "Suse, capitale royale perse ; Jérusalem et son district, où Nehémia exerce ensuite comme gouverneur.",
    "relationshipWithJehovah": "Nehémia priait régulièrement Jéhovah et s’appuyait sur lui pour obtenir l’autorisation du roi, protéger les travailleurs et mener à bien la reconstruction. Le livre de Néhémia présente Jéhovah comme Celui qui exauce les prières sincères de ses serviteurs.",
    "didYouKnow": "La muraille de Jérusalem fut achevée en 52 jours. Nehémia était échanson d’Artaxerxès avant de devenir gouverneur des Juifs.",
    "identity": "Gouverneur et restaurateur de Jérusalem — Néhémie organise la reconstruction des murailles de Jérusalem malgré l’opposition.",
    "era": "Période perse",
    "familyAndEntourage": [
      "Artaxerxès",
      "Esdras",
      "Sanballat",
      "Tobiah"
    ],
    "bibleAccount": [
      "Prie après avoir appris l’état de Jérusalem.",
      "Obtient l’autorisation royale de reconstruire les murailles.",
      "Organise le travail malgré les menaces.",
      "Participe à des réformes parmi le peuple."
    ],
    "qualities": [
      "Prière",
      "Organisation",
      "Courage",
      "Persévérance"
    ],
    "difficulties": []
  },
  "mary_magdalen": {
    "studyFocus": "Marie Madeleine a été une disciple fidèle de Jésus qui l’a accompagné et soutenu et qui a eu le privilège d’être parmi les premières personnes à le voir après sa résurrection.",
    "lessonPoints": [
      "Fidélité : elle est restée proche de Jésus même lors de sa mort.",
      "Reconnaissance : elle avait été libérée de graves souffrances et a continué à le soutenir.",
      "Témoignage : Jésus lui a confié une mission d’annoncer sa résurrection aux disciples."
    ],
    "keyReading": "Luc 8:1-3 ; Jean 19:25 ; 20:1-18",
    "location": "Galilée et Jérusalem ; tombeau de Jésus.",
    "relationshipWithJehovah": "Son parcours montre une fidélité durable au service de Jésus et une reconnaissance profonde pour ce qu’il avait fait pour elle.",
    "didYouKnow": "Marie Madeleine est distincte de Marie de Béthanie et de la femme « pécheresse » mentionnée en Luc 7 ; les Évangiles l’identifient notamment comme une femme dont Jésus avait expulsé sept démons.",
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
    "identity": "Disciple de Jésus — Marie Madeleine fait partie des femmes qui accompagnent Jésus et témoigne des événements entourant sa mort et sa résurrection.",
    "era": "Évangiles",
    "familyAndEntourage": [
      "Jésus",
      "Les autres disciples"
    ],
    "bibleAccount": [
      "Suit Jésus avec d’autres femmes.",
      "Assiste aux événements liés à sa mort.",
      "Est parmi les premières à témoigner de sa résurrection."
    ],
    "qualities": [
      "Fidélité",
      "Persévérance",
      "Reconnaissance"
    ],
    "difficulties": []
  },
  "zacchaeus": {
    "studyFocus": "Zachée, collecteur d’impôts en chef, a montré par ses actions qu’il voulait réellement changer lorsqu’il a accepté Jésus et corrigé les torts qu’il avait commis.",
    "lessonPoints": [
      "Repentance : il a pris des mesures concrètes pour changer.",
      "Générosité : il a décidé de donner aux pauvres.",
      "Honnêteté : il a promis de rendre au quadruple ce qu’il avait extorqué."
    ],
    "keyReading": "Luc 19:1-10",
    "location": "Jéricho, au moment où Jésus traversait la ville.",
    "relationshipWithJehovah": "Le récit montre qu’une personne peut répondre favorablement à l’appel de Jésus et démontrer cette réaction par des changements concrets dans sa conduite.",
    "didYouKnow": "Zachée était chef des collecteurs d’impôts à Jéricho, une fonction qui lui donnait une position importante parmi les collecteurs.",
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
    "identity": "Chef des collecteurs d’impôts à Jéricho — Zachée cherche à voir Jésus et annonce ensuite des mesures montrant sa volonté de réparer les torts.",
    "era": "Évangiles",
    "familyAndEntourage": [
      "Jésus",
      "Les habitants de Jéricho"
    ],
    "bibleAccount": [
      "Monte sur un sycomore pour voir Jésus.",
      "Accueille Jésus chez lui.",
      "Annonce des mesures généreuses envers les pauvres et les personnes qu’il aurait lésées."
    ],
    "qualities": [
      "Réceptivité",
      "Générosité",
      "Volonté de changer"
    ],
    "difficulties": []
  },
  "barnabas": {
    "studyFocus": "Barnabas était un encourageant généreux qui a soutenu Paul et Jean-Marc et a contribué à fortifier les congrégations.",
    "lessonPoints": [
      "Encouragement : son nom et son rôle sont associés à la consolation et au soutien.",
      "Générosité : il a vendu un champ et a apporté l’argent aux apôtres.",
      "Confiance : il a donné une occasion à Jean-Marc de reprendre une activité utile."
    ],
    "keyReading": "Actes 4:36-37 ; 9:26-27 ; 11:22-26 ; 15:36-39",
    "location": "Jérusalem, Antioche de Syrie, Tarse et différentes régions parcourues pendant l’activité missionnaire.",
    "relationshipWithJehovah": "Barnabé a montré sa foi par une générosité concrète, l’encouragement des autres et un service persévérant dans la bonne nouvelle.",
    "didYouKnow": "Son nom araméen était Joseph ; les apôtres lui donnèrent le surnom Barnabé, qui signifie « Fils de consolation » ou « Fils d’encouragement ».",
    "jwResources": [
      {
        "title": "Étude perspicace des Écritures — encyclopédie biblique",
        "url": "https://www.jw.org/fr/bibliotheque/livres/etude-perspicace-des-ecritures/"
      },
      {
        "title": "Marche courageusement avec Dieu — Barnabé",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/debuts-du-christianisme/barnabe-fils-de-consolation/"
      },
      {
        "title": "Marche courageusement avec Dieu",
        "url": "https://www.jw.org/fr/bibliotheque/livres/marche-couragement-avec-dieu/"
      },
      {
        "title": "Barnabé — Les personnages de la Bible",
        "url": "https://www.jw.org/fr/la-bible-et-vous/enfants/personnages-bibliques/barnabe/"
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
    "studyFocus": "Corneille était un officier romain qui craignait Dieu, priait régulièrement et faisait des dons de miséricorde. Son récit marque une étape importante dans l’ouverture du christianisme aux non-Juifs.",
    "lessonPoints": [
      "Prière : Corneille priait régulièrement et Jéhovah a remarqué sa sincérité.",
      "Générosité : ses dons de miséricorde étaient connus.",
      "Réceptivité : lui et les siens ont humblement accepté l’enseignement transmis par Pierre."
    ],
    "keyReading": "Actes 10:1-48",
    "location": "Césarée, où Corneille résidait dans le cadre de son service militaire.",
    "relationshipWithJehovah": "Avant même de devenir chrétien, Corneille priait Dieu et faisait des dons de miséricorde ; il s’est ensuite montré réceptif à la direction fournie par Jéhovah.",
    "didYouKnow": "Corneille était centurion de la troupe appelée la cohorte italienne et sa conversion a ouvert une étape majeure dans l’accueil des non-Juifs dans la congrégation chrétienne.",
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
    "identity": "Officier romain — Corneille est présenté comme un homme pieux qui reçoit le témoignage chrétien avec sa maisonnée.",
    "era": "Actes",
    "familyAndEntourage": [
      "Pierre",
      "Sa maisonnée"
    ],
    "bibleAccount": [
      "Prie et fait régulièrement des dons de miséricorde.",
      "Envoie chercher Pierre après avoir reçu une vision.",
      "Écoute le témoignage de Pierre avec sa maisonnée."
    ],
    "qualities": [
      "Piété",
      "Générosité",
      "Réceptivité"
    ],
    "difficulties": []
  },
  "hagar": {
    "studyFocus": "Agar était une servante égyptienne de Sara et la mère d’Yishmaël. Son histoire comprend deux moments où elle se retrouve dans le désert et reçoit une aide ou une direction de la part de Jéhovah.",
    "lessonPoints": [
      "Observer ce qui s’est passé entre Agar et Sara après la grossesse d’Agar.",
      "Étudier l’instruction de l’ange de Jéhovah près de la source sur le chemin de Shour.",
      "Examiner le récit du renvoi d’Agar et d’Yishmaël et la manière dont Dieu a répondu à leur détresse.",
      "Ne pas attribuer à Agar des intentions que le texte biblique ne précise pas."
    ],
    "keyReading": "Genèse 16:1-16 ; 21:8-21 ; Galates 4:21-31",
    "location": "Égypte à l’origine ; source près du chemin de Shour ; désert de Béer-Shéba ; désert de Paran.",
    "relationshipWithJehovah": "Le récit montre que Jéhovah a vu la détresse d’Agar, lui a parlé par l’intermédiaire de son ange et a veillé sur son fils. Agar a répondu en utilisant le nom de Jéhovah après la première rencontre.",
    "didYouKnow": "Agar était égyptienne et l’ange de Jéhovah la trouva près d’une source sur le chemin de Shour lorsqu’elle avait fui Sara.",
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
    "identity": "Servante de Sara — Agar est la servante égyptienne de Sara et la mère d’Ismaël.",
    "era": "Genèse",
    "familyAndEntourage": [
      "Abraham",
      "Sara",
      "Ismaël"
    ],
    "bibleAccount": [
      "Donne naissance à Ismaël.",
      "Fuit dans le désert puis revient auprès de Sara.",
      "Reçoit des indications concernant l’avenir de son fils."
    ],
    "qualities": [
      "Persévérance"
    ],
    "difficulties": []
  },
  "leah": {
    "studyFocus": "Léa, fille aînée de Labân, devient la première femme de Jacob. Son récit permet d’étudier sa place dans la famille de Jacob et le rôle de ses enfants dans l’histoire d’Israël.",
    "lessonPoints": [
      "Labân donne Léa à Jacob à la place de Rachel après les sept années de service de Jacob.",
      "Jacob aime Rachel davantage, mais Léa devient la mère de plusieurs fils et de Dina.",
      "Ses fils comprennent Ruben, Siméon, Lévi, Juda, Issakar et Zéboulôn.",
      "Lévi devient l’ancêtre de la tribu sacerdotale et Juda celui de la tribu royale.",
      "Léa est mentionnée avec Rachel comme ayant contribué à bâtir la maison d’Israël."
    ],
    "keyReading": "Genèse 29:16-35 ; 30:1-21 ; 31:11-18 ; Ruth 4:11",
    "location": "Paddân-Aram puis Canaan ; elle est enterrée dans la grotte de Makpéla.",
    "relationshipWithJehovah": "Le récit montre que Jéhovah a vu la situation de Léa et lui a donné des enfants alors qu’elle vivait dans une relation conjugale où elle était moins aimée que Rachel.",
    "didYouKnow": "Léa est la mère de Juda et de Lévi, deux lignées qui auront une place majeure dans l’histoire biblique.",
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
    "identity": "Femme de Jacob — Léa devient l’une des femmes de Jacob et la mère de plusieurs de ses fils.",
    "era": "Genèse",
    "familyAndEntourage": [
      "Jacob",
      "Rachel",
      "Ruben",
      "Juda",
      "Lévi"
    ],
    "bibleAccount": [
      "Épouse Jacob.",
      "Donne naissance à plusieurs fils et à Dina.",
      "Participe à la formation de la famille de Jacob."
    ],
    "qualities": [
      "Persévérance",
      "Attachement familial"
    ],
    "difficulties": []
  },
  "esau": {
    "studyFocus": "Ésaü est le premier-né d’Isaac et le frère jumeau de Jacob. Son récit permet d’examiner la valeur accordée aux choses spirituelles, la maîtrise de soi et la réconciliation.",
    "lessonPoints": [
      "Il vend son droit d’aînesse contre un repas alors qu’il est affamé.",
      "Il perd ensuite la bénédiction que son père destinait au premier-né.",
      "Il devient l’ancêtre des Édomites.",
      "Plus tard, il rencontre Jacob et l’accueille sans chercher à se venger.",
      "Hébreux 12:16 utilise son exemple pour mettre en garde contre le fait de ne pas apprécier les choses sacrées."
    ],
    "keyReading": "Genèse 25:19-34 ; 27:1-45 ; 33:1-16 ; Hébreux 12:16",
    "location": "Canaan, notamment la région de Séïr et les territoires d’Édom associés à ses descendants.",
    "relationshipWithJehovah": "Son histoire met en évidence l’importance d’accorder de la valeur aux promesses et aux choses sacrées plutôt qu’à une satisfaction immédiate.",
    "didYouKnow": "Ésaü reçut le nom d’Édom, « Rouge », en rapport avec le plat rouge de lentilles contre lequel il vendit son droit d’aînesse.",
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
    "identity": "Fils d’Isaac et de Rébecca — Ésaü est le frère jumeau de Jacob et l’ancêtre des Édomites.",
    "era": "Genèse",
    "familyAndEntourage": [
      "Isaac",
      "Rébecca",
      "Jacob"
    ],
    "bibleAccount": [
      "Vend son droit d’aînesse à Jacob.",
      "Perd la bénédiction destinée au premier-né.",
      "Se réconcilie ensuite avec Jacob."
    ],
    "qualities": [
      "Générosité dans la réconciliation"
    ],
    "difficulties": [
      "Son choix concernant le droit d’aînesse illustre les conséquences d’un choix accordant peu de valeur aux choses sacrées."
    ]
  },
  "melchizedek": {
    "studyFocus": "Melkisédec, roi de Salem et prêtre du Dieu Très-Haut, apparaît brièvement dans la Genèse mais joue un rôle important dans l’explication biblique de la fonction sacerdotale de Jésus.",
    "lessonPoints": [
      "Vénération pour Jéhovah : Melkisédec est présenté comme prêtre du Dieu Très-Haut.",
      "Bénédiction : il a béni Abraham après sa victoire.",
      "Valeur du modèle : son rôle aide à comprendre pourquoi Jésus est présenté comme prêtre « à la manière de Melkisédec »."
    ],
    "keyReading": "Genèse 14:17-20 ; Psaume 110:1-4 ; Hébreux 5:5-10 ; 7:1-17",
    "location": "Salem, probablement associée à l’ancienne Jérusalem, et la Basse Plaine de Shavé lors de sa rencontre avec Abraham.",
    "relationshipWithJehovah": "Melkisédec est présenté comme « prêtre du Dieu Très-Haut », Jéhovah, et comme celui qui bénit Abraham au nom de Dieu.",
    "didYouKnow": "Melkisédec est le premier prêtre mentionné dans les Écritures ; Hébreux présente Jésus comme grand prêtre « à la manière de Melkisédec ».",
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
    "identity": "Roi de Salem et prêtre — Melchisédek rencontre Abraham après sa victoire et le bénit.",
    "era": "Genèse",
    "familyAndEntourage": [
      "Abraham"
    ],
    "bibleAccount": [
      "Apporte du pain et du vin à Abraham.",
      "Bénit Abraham.",
      "Reçoit de lui le dixième de tout."
    ],
    "qualities": [
      "Bénédiction",
      "Service sacré"
    ],
    "difficulties": []
  },
  "jethro": {
    "studyFocus": "Jéthro, prêtre de Madian et beau-père de Moïse, a donné à Moïse un conseil pratique qui l’a aidé à mieux assumer ses responsabilités.",
    "lessonPoints": [
      "Sagesse pratique : Jéthro a proposé une organisation qui répartissait les responsabilités.",
      "Humilité : Moïse a accepté un conseil utile venant de son beau-père.",
      "Intérêt pour les autres : Jéthro s’est réjoui de ce que Jéhovah avait fait pour Israël."
    ],
    "keyReading": "Exode 2:16-22 ; 3:1 ; 18:1-27",
    "location": "Madian et le désert du Sinaï.",
    "relationshipWithJehovah": "Jéthro reconnaît la puissance de Jéhovah et se réjouit de la délivrance d’Israël; son conseil à Moïse favorise une organisation plus équilibrée.",
    "didYouKnow": "Jéthro est aussi appelé Réouël dans le récit biblique et était le beau-père de Moïse.",
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
    "identity": "Prêtre de Madian et beau-père de Moïse — Jéthro accueille Moïse et lui donne des conseils pratiques pour organiser ses responsabilités.",
    "era": "Exode",
    "familyAndEntourage": [
      "Moïse",
      "Séphora"
    ],
    "bibleAccount": [
      "Accueille Moïse à Madian.",
      "Lui donne sa fille Séphora en mariage.",
      "Conseille Moïse sur la délégation de responsabilités."
    ],
    "qualities": [
      "Hospitalité",
      "Sagesse pratique"
    ],
    "difficulties": []
  },
  "zipporah": {
    "studyFocus": "Tsippora, femme de Moïse, a joué un rôle dans sa famille et a agi rapidement dans une situation grave liée à la circoncision de leur fils.",
    "lessonPoints": [
      "Réactivité : Tsippora a agi sans tarder lorsqu’une situation urgente l’exigeait.",
      "Famille : son récit rappelle l’importance de prendre au sérieux les responsabilités familiales.",
      "Respect des exigences de Jéhovah : l’épisode souligne la gravité de ses commandements."
    ],
    "keyReading": "Exode 2:16-22 ; 4:18-26 ; 18:1-6",
    "location": "Madian et le camp d’Israël dans le désert.",
    "relationshipWithJehovah": "Son intervention en Exode 4 montre qu’elle prend au sérieux une exigence liée à l’alliance avec Jéhovah.",
    "didYouKnow": "Séphora était fille de Jéthro et mère de deux fils de Moïse.",
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
    "identity": "Femme de Moïse — Séphora est la fille de Jéthro et la femme de Moïse.",
    "era": "Exode",
    "familyAndEntourage": [
      "Moïse",
      "Jéthro",
      "Gershom",
      "Éliézer"
    ],
    "bibleAccount": [
      "Épouse Moïse.",
      "Accompagne une partie de son parcours familial.",
      "Intervient lors d’une situation urgente liée à la circoncision de son fils."
    ],
    "qualities": [
      "Décision",
      "Attachement familial"
    ],
    "difficulties": []
  },
  "korah": {
    "studyFocus": "Coré, Lévite de la famille de Qehath, conteste l’autorité de Moïse et d’Aaron avec d’autres hommes. Son récit est un avertissement contre l’ambition et la contestation d’une disposition divine.",
    "lessonPoints": [
      "Il possède déjà des privilèges de service comme Lévite.",
      "Il rassemble des hommes influents contre Moïse et Aaron.",
      "Moïse laisse Jéhovah montrer qui a été choisi.",
      "La rébellion entraîne un jugement sévère.",
      "Des descendants de Coré continueront pourtant à servir fidèlement."
    ],
    "keyReading": "Nombres 16:1-35 ; 26:9-11 ; Psaume 106:16-18",
    "location": "Le camp d’Israël dans le désert.",
    "relationshipWithJehovah": "Coré connaissait les dispositions du culte mais contesta l’autorité que Jéhovah avait confiée à Moïse et Aaron.",
    "didYouKnow": "Les fils de Coré ne moururent pas avec lui et leurs descendants furent associés au service et à plusieurs psaumes.",
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
    "identity": "Lévite opposé à Moïse — Coré conteste l’autorité établie de Moïse et Aaron et mène une rébellion.",
    "era": "Exode et désert",
    "familyAndEntourage": [
      "Moïse",
      "Aaron",
      "Dathan",
      "Abiram"
    ],
    "bibleAccount": [
      "Conteste Moïse et Aaron avec d’autres hommes.",
      "Rassemble des soutiens contre eux.",
      "Subit le jugement divin avec les rebelles."
    ],
    "qualities": [],
    "difficulties": [
      "Son récit met en garde contre l’ambition et la contestation présomptueuse."
    ]
  },
  "balaam": {
    "studyFocus": "Balaam est sollicité par Balak pour maudire Israël. Jéhovah empêche cette malédiction et Balaam prononce au contraire des déclarations prophétiques sur Israël.",
    "lessonPoints": [
      "Balak lui propose une récompense.",
      "Jéhovah limite ce que Balaam peut dire.",
      "L’ânesse voit l’ange de Jéhovah sur le chemin.",
      "Balaam prononce plusieurs déclarations favorables à Israël.",
      "Les Écritures dénoncent ensuite son amour de la récompense injuste."
    ],
    "keyReading": "Nombres 22–24 ; 31:8, 16 ; 2 Pierre 2:15, 16 ; Révélation 2:14",
    "location": "Péthor puis les hauteurs de Moab.",
    "relationshipWithJehovah": "Balaam reconnaît qu’il ne peut dire que ce que Jéhovah permet, mais son désir de récompense révèle un mauvais mobile.",
    "didYouKnow": "Balaam prononça quatre déclarations prophétiques successives concernant Israël.",
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
    "identity": "Devineur appelé par Balak — Balaam est sollicité pour maudire Israël mais prononce finalement des bénédictions.",
    "era": "Désert",
    "familyAndEntourage": [
      "Balak",
      "Israël"
    ],
    "bibleAccount": [
      "Est appelé par Balak.",
      "Prononce des paroles concernant Israël.",
      "Se rend coupable d’une conduite répréhensible liée à son influence."
    ],
    "qualities": [],
    "difficulties": [
      "Son parcours montre le danger de rechercher un avantage personnel au détriment de la volonté divine."
    ]
  },
  "balak": {
    "studyFocus": "Balak, roi de Moab, cherche à faire maudire Israël par Balaam. Son récit montre qu’aucune manœuvre humaine ne peut annuler la bénédiction que Jéhovah accorde à son peuple.",
    "lessonPoints": [
      "Il craint Israël après ses victoires.",
      "Il envoie chercher Balaam.",
      "Il change plusieurs fois d’endroit pour tenter d’obtenir une malédiction.",
      "Balaam annonce finalement des paroles favorables à Israël."
    ],
    "keyReading": "Nombres 22:1-41 ; 23:1–24:25",
    "location": "Les plaines de Moab, à l’est du Jourdain.",
    "relationshipWithJehovah": "Balak agit contre le peuple que Jéhovah a béni et découvre qu’il ne peut pas modifier la volonté divine.",
    "didYouKnow": "Balak était roi de Moab à l’époque où Israël approchait de la Terre promise.",
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
    "identity": "Roi de Moab — Balak cherche à faire maudire Israël par Balaam.",
    "era": "Désert",
    "familyAndEntourage": [
      "Balaam",
      "Moab",
      "Israël"
    ],
    "bibleAccount": [
      "Craint l’arrivée d’Israël.",
      "Envoie chercher Balaam.",
      "Demande à plusieurs reprises qu’Israël soit maudit."
    ],
    "qualities": [],
    "difficulties": [
      "La peur et l’opposition au peuple de Dieu dominent son récit."
    ]
  },
  "eli": {
    "studyFocus": "Éli a servi comme grand prêtre et juge en Israël. Son histoire montre à la fois l’importance d’écouter les avertissements de Jéhovah et les conséquences de ne pas corriger une mauvaise conduite.",
    "lessonPoints": [
      "Discipline familiale : Éli a été réprimandé parce qu’il n’avait pas suffisamment corrigé ses fils.",
      "Écouter les avertissements : il a finalement reconnu que Jéhovah avait raison.",
      "Humilité : sa réaction au jugement de Jéhovah montre qu’il pouvait accepter la décision divine."
    ],
    "keyReading": "1 Samuel 1:24–4:22",
    "location": "Shilo et le tabernacle d’Israël.",
    "relationshipWithJehovah": "Éli a servi Jéhovah pendant des années, mais son récit montre qu’il faut prendre au sérieux la discipline et la responsabilité familiale.",
    "didYouKnow": "Éli jugea Israël pendant 40 ans.",
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
    "identity": "Grand prêtre et juge d’Israël — Éli sert au tabernacle et joue un rôle dans l’éducation du jeune Samuel, mais ses fils sont source de graves problèmes.",
    "era": "Juges et Samuel",
    "familyAndEntourage": [
      "Hanna",
      "Samuel",
      "Hophni",
      "Phinéhas"
    ],
    "bibleAccount": [
      "Sert comme prêtre et juge.",
      "Discute avec Hanna au tabernacle.",
      "Prend Samuel sous sa responsabilité.",
      "Réprimande ses fils sans empêcher leurs mauvaises actions."
    ],
    "qualities": [
      "Service",
      "Attention spirituelle"
    ],
    "difficulties": [
      "Son récit souligne la responsabilité de corriger sérieusement une mauvaise conduite."
    ]
  },
  "hannah": {
    "studyFocus": "Anne a prié Jéhovah avec confiance dans une situation qui lui causait une grande souffrance, puis elle a tenu sa promesse en consacrant Samuel à son service.",
    "lessonPoints": [
      "Prière sincère : Anne a parlé à Jéhovah avec franchise de ce qu’elle ressentait.",
      "Confiance : elle a laissé sa situation entre les mains de Jéhovah et a retrouvé la paix.",
      "Reconnaissance : son cantique montre sa profonde reconnaissance envers Jéhovah."
    ],
    "keyReading": "1 Samuel 1:1–2:11",
    "location": "Rama et le tabernacle de Shilo.",
    "relationshipWithJehovah": "Hanna compte sur Jéhovah dans la prière et lui fait confiance avant même de voir une solution.",
    "didYouKnow": "Hanna rendait chaque année visite à Samuel à Shilo et lui apportait un petit vêtement sans manches.",
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
    "identity": "Mère de Samuel — Hanna prie avec ferveur au tabernacle et tient sa promesse de présenter Samuel au service de Jéhovah.",
    "era": "Samuel",
    "familyAndEntourage": [
      "Samuel",
      "Éli",
      "Elkana"
    ],
    "bibleAccount": [
      "Prie pour avoir un enfant.",
      "Fait un vœu concernant son fils.",
      "Présente Samuel au service au tabernacle.",
      "Exprime sa reconnaissance dans une prière."
    ],
    "qualities": [
      "Foi",
      "Persévérance dans la prière",
      "Reconnaissance"
    ],
    "difficulties": []
  },
  "michal": {
    "studyFocus": "Mical, fille de Saül et femme de David, a vécu dans une famille marquée par les conflits et a pris des décisions qui ont eu des conséquences dans sa vie conjugale.",
    "lessonPoints": [
      "Ne pas laisser les conflits familiaux déterminer nos choix spirituels.",
      "Cultiver le respect : son récit montre l’importance de respecter ceux qui manifestent du zèle pour Jéhovah.",
      "Prudence : les paroles et attitudes peuvent avoir des conséquences durables dans les relations."
    ],
    "keyReading": "1 Samuel 18:20-29 ; 19:11-17 ; 25:44 ; 2 Samuel 3:12-16 ; 6:16-23",
    "location": "Gibéa et Jérusalem.",
    "relationshipWithJehovah": "La Bible ne la présente pas comme un modèle de foi ; son récit invite à examiner les motivations et l’attitude envers le culte de Jéhovah.",
    "didYouKnow": "Mical est la seule femme explicitement décrite comme ayant aimé David avant leur mariage.",
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
    "identity": "Fille de Saül et femme de David — Mical aime David et l’aide à échapper à Saül, mais leur relation connaît ensuite des tensions.",
    "era": "Rois",
    "familyAndEntourage": [
      "Saül",
      "David",
      "Palti"
    ],
    "bibleAccount": [
      "Aide David à fuir lorsque Saül veut le tuer.",
      "Est donnée à un autre homme puis reprise par David.",
      "Critique David lorsqu’il danse devant l’Arche."
    ],
    "qualities": [
      "Courage dans une situation dangereuse"
    ],
    "difficulties": [
      "Son conflit avec David illustre aussi les tensions pouvant naître d’un jugement critique."
    ]
  },
  "joab": {
    "studyFocus": "Joab était un chef militaire capable, mais son histoire montre les dangers d’une ambition personnelle et d’actions contraires aux décisions du roi établi par Jéhovah.",
    "lessonPoints": [
      "Loyauté : les capacités ne remplacent pas une véritable fidélité.",
      "Maîtrise de soi : la vengeance et l’ambition peuvent pousser à des actes graves.",
      "Respect de l’autorité : il faut agir selon les principes de Jéhovah plutôt que selon ses propres intérêts."
    ],
    "keyReading": "2 Samuel 2:12–3:39 ; 10:1-19 ; 18:1-33 ; 20:1-23 ; 1 Rois 1:5-53 ; 2:28-35",
    "location": "Jérusalem et les territoires où l’armée de David combat.",
    "relationshipWithJehovah": "Le récit met surtout en évidence les conséquences de décisions violentes et ambitieuses plutôt qu’un modèle de fidélité à Jéhovah.",
    "didYouKnow": "Joab était fils de Tsérouya, sœur de David, et ses frères comprenaient Abishaï et Asaël.",
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
    "identity": "Chef de l’armée de David — Joab est un puissant commandant de l’armée de David dont le parcours mêle loyauté politique, habileté militaire et actes violents.",
    "era": "Rois",
    "familyAndEntourage": [
      "David",
      "Abner",
      "Amasa",
      "Adoniya"
    ],
    "bibleAccount": [
      "Commande l’armée de David.",
      "Participe à de nombreuses campagnes militaires.",
      "Tue Abner puis Amasa.",
      "Soutient finalement Adoniya avant l’accession de Salomon."
    ],
    "qualities": [
      "Habileté militaire",
      "Loyauté envers David"
    ],
    "difficulties": [
      "Son recours à la violence et ses décisions politiques montrent les dangers de l’ambition et de la vengeance."
    ]
  },
  "herod_antipas": {
    "studyFocus": "Hérode Antipas a exercé le pouvoir en Galilée et en Pérée à l’époque de Jésus. Son histoire est notamment liée à Jean le Baptiseur.",
    "lessonPoints": [
      "Courage face à la pression : son récit montre les conséquences de céder aux pressions humaines.",
      "Respect de la vérité : Jean le Baptiseur lui avait courageusement parlé de sa conduite.",
      "Humilité : la recherche de l’approbation humaine peut conduire à de graves décisions."
    ],
    "keyReading": "Matthieu 14:1-12 ; Marc 6:14-29 ; Luc 3:19,20 ; 23:6-12",
    "location": "Galilée et Pérée, notamment Tibériade.",
    "relationshipWithJehovah": "Hérode n’est pas présenté comme serviteur de Jéhovah. Son récit montre plutôt les conséquences de l’opposition à Jean et d’un mauvais usage de l’autorité.",
    "didYouKnow": "Hérode Antipas était fils d’Hérode le Grand et dirigeait la Galilée et la Pérée comme tétrarque.",
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
    "identity": "Dirigeant de Galilée et de Pérée — Hérode Antipas exerce son autorité à l’époque de Jésus et fait exécuter Jean le Baptiseur.",
    "era": "Évangiles",
    "familyAndEntourage": [
      "Jean le Baptiseur",
      "Hérodiade",
      "Jésus",
      "Pilate"
    ],
    "bibleAccount": [
      "Entend parler du ministère de Jésus.",
      "Fait emprisonner Jean le Baptiseur.",
      "Fait exécuter Jean après un serment irréfléchi.",
      "Interroge Jésus avant sa condamnation."
    ],
    "qualities": [],
    "difficulties": [
      "Son récit illustre les dangers de la pression sociale, des promesses irréfléchies et de l’abus du pouvoir."
    ]
  },
  "pilate": {
    "studyFocus": "Ponce Pilate était le gouverneur romain qui présida au procès de Jésus. Son récit montre le conflit entre ce qu’il reconnaissait comme juste et la pression de la foule.",
    "lessonPoints": [
      "Courage moral : reconnaître l’innocence de quelqu’un exige d’agir en conséquence.",
      "Pression humaine : Pilate a cédé à la pression des chefs religieux et de la foule.",
      "Responsabilité : une position d’autorité implique de prendre au sérieux les décisions rendues."
    ],
    "keyReading": "Matthieu 27:11-26 ; Marc 15:1-15 ; Luc 23:1-25 ; Jean 18:28–19:16",
    "location": "Jérusalem, au prétoire romain.",
    "relationshipWithJehovah": "Pilate n’est pas présenté comme adorateur de Jéhovah. Les récits montrent néanmoins qu’il disposait d’informations suffisantes sur l’accusation portée contre Jésus.",
    "didYouKnow": "Pilate était préfet romain de Judée et son autorité comprenait le pouvoir d’autoriser une exécution.",
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
    "identity": "Gouverneur romain de Judée — Pilate préside au procès de Jésus et autorise son exécution malgré les éléments rapportés dans les récits évangéliques.",
    "era": "Évangiles",
    "familyAndEntourage": [
      "Jésus",
      "Les chefs religieux",
      "Hérode Antipas"
    ],
    "bibleAccount": [
      "Interroge Jésus.",
      "Reconnaît dans le récit une absence de faute méritant la mort.",
      "Cède aux pressions et livre Jésus pour être exécuté."
    ],
    "qualities": [],
    "difficulties": [
      "Son récit illustre le conflit entre jugement personnel, pression politique et responsabilité."
    ]
  },
  "isaiah": {
    "studyFocus": "Isaïe exerce son ministère prophétique en Juda. Il reçoit une vision de Jéhovah et accepte la mission d’annoncer des messages comprenant des jugements et des promesses.",
    "lessonPoints": [
      "Il répond à l’appel prophétique par sa disponibilité.",
      "Il transmet des messages parfois difficiles.",
      "Il annonce de nombreuses prophéties messianiques.",
      "Il met l’accent sur la sainteté de Jéhovah et la confiance en lui."
    ],
    "keyReading": "Isaïe 1–6 ; 7:10-17 ; 9:1-7 ; 11:1-10 ; 53",
    "location": "Jérusalem et le royaume de Juda.",
    "relationshipWithJehovah": "Isaïe est présenté comme prophète de Jéhovah et reçoit sa mission dans une vision de la sainteté divine.",
    "didYouKnow": "Le livre d’Isaïe contient de nombreuses prophéties que les Écritures grecques chrétiennes appliquent à Jésus Christ.",
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
        "title": "Étude perspicace des Écritures — Isaïe",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/Isa%C3%AFe/"
      }
    ],
    "identity": "Prophète de Juda — Isaïe transmet des messages de Jéhovah à Juda et annonce plusieurs événements concernant le peuple et le Messie.",
    "era": "Rois et prophètes",
    "familyAndEntourage": [
      "Ézéchias",
      "Achaz"
    ],
    "bibleAccount": [
      "Accepte une mission prophétique.",
      "Transmet des avertissements et des encouragements à Juda.",
      "Annonce des prophéties concernant le Messie et l’avenir de Jérusalem."
    ],
    "qualities": [
      "Disponibilité",
      "Courage",
      "Foi"
    ],
    "difficulties": []
  },
  "jeremiah": {
    "studyFocus": "Jérémie sert comme prophète avant et pendant la destruction de Jérusalem. Malgré les menaces et l’emprisonnement, il continue à transmettre les messages de Jéhovah.",
    "lessonPoints": [
      "Jéhovah le charge de parler à des nations et à des rois.",
      "Il rencontre une forte opposition.",
      "Il achète un champ comme signe de confiance dans le retour futur des Juifs.",
      "Il transmet la promesse d’une nouvelle alliance.",
      "Son endurance montre l’importance de continuer à parler même lorsque le message est impopulaire."
    ],
    "keyReading": "Jérémie 1 ; 20 ; 26 ; 36-38 ; 31:31-34 ; 40-43",
    "location": "Jérusalem, Juda et les régions voisines.",
    "relationshipWithJehovah": "Jérémie entretient une relation étroite avec Jéhovah par la prière et l’obéissance, même lorsqu’il est découragé ou menacé.",
    "didYouKnow": "Jérémie a servi pendant plusieurs décennies et a été témoin de la destruction de Jérusalem.",
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
        "title": "Étude perspicace des Écritures — Jérémie",
        "url": "https://www.jw.org/fr/bibliotheque/livres/%C3%89tude-perspicace-des-%C3%89critures/J%C3%A9r%C3%A9mie/"
      }
    ],
    "identity": "Prophète de Juda — Jérémie annonce les conséquences de l’infidélité de Jérusalem tout en transmettant des messages d’espérance.",
    "era": "Rois et exil",
    "familyAndEntourage": [
      "Baruch",
      "Sédécias",
      "Les habitants de Jérusalem"
    ],
    "bibleAccount": [
      "Prêche malgré une forte opposition.",
      "Annonce la chute de Jérusalem.",
      "Subit emprisonnement et mauvais traitements.",
      "Transmet une promesse concernant une nouvelle alliance."
    ],
    "qualities": [
      "Endurance",
      "Courage",
      "Fidélité"
    ],
    "difficulties": []
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
    "keyReading": "Ézéchiel 1–3 ; 18 ; 33 ; 36–37 ; 40–48",
    "location": "Babylone, notamment près du fleuve Kebar.",
    "relationshipWithJehovah": "Ézéchiel reçoit des visions et des messages de Jéhovah et doit les transmettre fidèlement aux exilés.",
    "didYouKnow": "Ézéchiel était prêtre et a commencé à prophétiser parmi les exilés à Babylone.",
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
    "identity": "Prophète parmi les exilés — Ézéchiel transmet des visions et des messages aux exilés de Juda à Babylone.",
    "era": "Exil à Babylone",
    "familyAndEntourage": [
      "Les exilés de Juda"
    ],
    "bibleAccount": [
      "Reçoit une vision inaugurale.",
      "Annonce le jugement sur Jérusalem.",
      "Encourage les exilés avec des promesses de restauration.",
      "Transmet la vision du temple."
    ],
    "qualities": [
      "Obéissance",
      "Persévérance",
      "Courage"
    ],
    "difficulties": []
  },
  "ezra": {
    "studyFocus": "Esdras est un prêtre et un copiste habile de la Loi qui retourne à Jérusalem après l’exil. Il s’applique à étudier, mettre en pratique et enseigner la Loi de Jéhovah.",
    "lessonPoints": [
      "Il prépare son cœur à étudier la Loi de Jéhovah.",
      "Il obtient une autorisation royale pour soutenir le culte à Jérusalem.",
      "Il prie et jeûne avant le voyage.",
      "Il enseigne au peuple et agit lorsqu’il découvre des problèmes spirituels.",
      "Son exemple associe étude personnelle et mise en pratique."
    ],
    "keyReading": "Esdras 7:1-10 ; 8:15-36 ; 9-10",
    "location": "Babylone et Jérusalem.",
    "relationshipWithJehovah": "Esdras prépare son cœur à consulter la Loi de Jéhovah, à la pratiquer et à l’enseigner.",
    "didYouKnow": "Esdras était prêtre et copiste.",
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
    "identity": "Prêtre et copiste — Esdras retourne à Jérusalem et aide le peuple à mieux connaître et appliquer la Loi.",
    "era": "Retour d’exil",
    "familyAndEntourage": [
      "Néhémie",
      "Les exilés revenus"
    ],
    "bibleAccount": [
      "Retourne à Jérusalem avec d’autres exilés.",
      "Étudie et enseigne la Loi.",
      "Organise une lecture publique de la Loi.",
      "Encourage le peuple à corriger certaines pratiques."
    ],
    "qualities": [
      "Étude",
      "Enseignement",
      "Zèle"
    ],
    "difficulties": []
  },
  "zerubbabel": {
    "studyFocus": "Zorobabel dirige le premier groupe important de Juifs revenus de Babylone et participe à la reconstruction du temple. Son parcours montre l’importance de la persévérance malgré l’opposition.",
    "lessonPoints": [
      "Il revient à Jérusalem avec le reste juif.",
      "Il participe au rétablissement de l’autel et du culte.",
      "La construction du temple est interrompue par l’opposition.",
      "Aggée et Zekaria l’encouragent.",
      "Le temple est finalement achevé."
    ],
    "keyReading": "Esdras 2–6 ; Aggée 1–2 ; Zekaria 4",
    "location": "Jérusalem et Juda après le retour de l’exil.",
    "relationshipWithJehovah": "Jéhovah utilise Aggée et Zekaria pour fortifier Zorobabel dans sa responsabilité.",
    "didYouKnow": "Zorobabel appartient à la lignée royale de David et figure dans les généalogies liées à Jésus.",
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
    "identity": "Gouverneur de Juda — Zorobabel dirige les Juifs revenus d’exil et joue un rôle majeur dans la reconstruction du temple.",
    "era": "Retour d’exil",
    "familyAndEntourage": [
      "Josué le grand prêtre",
      "Aggée",
      "Zekaria"
    ],
    "bibleAccount": [
      "Retourne à Jérusalem avec les exilés.",
      "Participe à la reconstruction de l’autel et du temple.",
      "Poursuit le chantier malgré l’opposition."
    ],
    "qualities": [
      "Persévérance",
      "Courage",
      "Coopération"
    ],
    "difficulties": []
  },
  "haggai": {
    "studyFocus": "Aggée prophétise après le retour d’exil et pousse les Juifs à reprendre la construction du temple. Il les aide à remettre les intérêts de Jéhovah au premier plan.",
    "lessonPoints": [
      "Il dénonce le fait que le peuple s’occupe de ses maisons alors que le temple reste en ruines.",
      "Il encourage Zorobabel, Josué et le peuple à agir.",
      "Il rappelle que Jéhovah est avec eux.",
      "Il annonce que la gloire future de la maison sera plus grande.",
      "Son message transforme une période d’inertie en action."
    ],
    "keyReading": "Aggée 1–2",
    "location": "Jérusalem et Juda après le retour de l’exil.",
    "relationshipWithJehovah": "Aggée transmet les paroles de Jéhovah avec clarté et aide le peuple à rétablir ses priorités spirituelles.",
    "didYouKnow": "Aggée et Zekaria ont prophétisé à la même époque pour encourager la reconstruction du temple.",
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
    "identity": "Prophète — Aggée encourage les Juifs revenus d’exil à reprendre la construction du temple.",
    "era": "Retour d’exil",
    "familyAndEntourage": [
      "Zorobabel",
      "Josué le grand prêtre"
    ],
    "bibleAccount": [
      "Transmet des messages aux dirigeants et au peuple.",
      "Encourage la reprise des travaux du temple.",
      "Rappelle les priorités spirituelles du peuple."
    ],
    "qualities": [
      "Courage",
      "Clarté",
      "Zèle"
    ],
    "difficulties": []
  },
  "zechariah": {
    "studyFocus": "Zekaria sert comme prophète après l’exil et reçoit une série de visions destinées à encourager la reconstruction du temple et le rétablissement du peuple.",
    "lessonPoints": [
      "Ses premières visions encouragent le peuple à revenir vers Jéhovah.",
      "Il reçoit des visions sur Jérusalem, le grand prêtre Josué et Zorobabel.",
      "Il insiste sur le rôle de l’esprit de Jéhovah plutôt que sur la seule puissance humaine.",
      "Son livre contient des prophéties messianiques.",
      "Son ministère soutient l’encouragement et la restauration du vrai culte."
    ],
    "keyReading": "Zekaria 1–8 ; 9:9 ; 12:10 ; 13:7",
    "location": "Jérusalem et Juda après le retour de l’exil.",
    "relationshipWithJehovah": "Zekaria reçoit des visions de Jéhovah et transmet leurs messages pour fortifier le peuple.",
    "didYouKnow": "Zekaria signifie « Jéhovah s’est souvenu » et son livre contient plusieurs visions symboliques.",
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
    "identity": "Prophète — Zekaria encourage les Juifs revenus d’exil au moyen de visions et de messages concernant la restauration.",
    "era": "Retour d’exil",
    "familyAndEntourage": [
      "Zorobabel",
      "Josué le grand prêtre"
    ],
    "bibleAccount": [
      "Transmet plusieurs visions.",
      "Encourage la reconstruction du temple.",
      "Annonce des éléments prophétiques concernant le futur roi."
    ],
    "qualities": [
      "Foi",
      "Encouragement",
      "Persévérance"
    ],
    "difficulties": []
  },
  "malachi": {
    "studyFocus": "Malachie reprend les prêtres et le peuple pour leur manque de respect envers le culte de Jéhovah. Son message dénonce le culte mécanique et annonce une œuvre préparatoire avant le jour de Jéhovah.",
    "lessonPoints": [
      "Il dénonce les sacrifices défectueux.",
      "Il rappelle aux prêtres leur responsabilité d’enseigner correctement.",
      "Il condamne l’infidélité conjugale et d’autres pratiques fautives.",
      "Il annonce la venue d’un messager qui préparera le chemin.",
      "Il termine par une promesse concernant Élie avant le grand jour de Jéhovah."
    ],
    "keyReading": "Malachie 1–4",
    "location": "Jérusalem et la communauté juive restaurée après l’exil.",
    "relationshipWithJehovah": "Malachie insiste sur le fait que Jéhovah mérite un culte sincère, respectueux et entier.",
    "didYouKnow": "Malachie est le dernier livre des Écritures hébraïques dans l’ordre habituel des Bibles françaises.",
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
    "identity": "Prophète — Malachie reprend des pratiques religieuses négligées et annonce la venue d’un messager préparant le chemin.",
    "era": "Après l’exil",
    "familyAndEntourage": [
      "Prêtres et peuple de Juda"
    ],
    "bibleAccount": [
      "Dénonce des pratiques négligentes dans le culte.",
      "Encourage une attitude fidèle envers Jéhovah.",
      "Annonce la venue d’un messager."
    ],
    "qualities": [
      "Courage",
      "Fidélité"
    ],
    "difficulties": []
  },
  "gamaliel": {
    "studyFocus": "Gamaliel est un pharisien et enseignant de la Loi, membre du Sanhédrin. Il recommande la prudence lorsqu’on veut faire disparaître les apôtres.",
    "lessonPoints": [
      "Il est présenté comme un enseignant de la Loi respecté.",
      "Il intervient lors du procès des apôtres.",
      "Il recommande de laisser du temps avant une décision irréversible.",
      "Son raisonnement distingue une opposition humaine d’une œuvre qui pourrait être soutenue par Dieu.",
      "Paul dit avoir été instruit à ses pieds."
    ],
    "keyReading": "Actes 5:33-42 ; 22:3",
    "location": "Jérusalem, au sein du milieu religieux juif du Ier siècle.",
    "relationshipWithJehovah": "Le récit ne dit pas que Gamaliel est devenu chrétien ; il montre néanmoins qu’il reconnaît la possibilité que l’œuvre des apôtres soit soutenue par Dieu.",
    "didYouKnow": "Paul dit avoir été instruit aux pieds de Gamaliel.",
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
    "identity": "Pharisien et enseignant de la Loi — Gamaliel intervient devant le Sanhédrin en faveur d’une approche prudente concernant les apôtres.",
    "era": "Actes",
    "familyAndEntourage": [
      "Paul",
      "Les apôtres",
      "Sanhédrin"
    ],
    "bibleAccount": [
      "Intervient lors du procès des apôtres.",
      "Conseille le Sanhédrin à ne pas agir précipitamment.",
      "Est présenté comme un enseignant respecté de la Loi."
    ],
    "qualities": [
      "Prudence",
      "Raisonnement"
    ],
    "difficulties": []
  },
  "apollos": {
    "studyFocus": "Apollos est un Juif d’Alexandrie, éloquent et connaissant bien les Écritures. Après avoir reçu des explications plus précises d’Aquila et Priscille, il devient un prédicateur efficace.",
    "lessonPoints": [
      "Il connaît les Écritures et enseigne avec zèle.",
      "Sa connaissance initiale du baptême est incomplète.",
      "Aquila et Priscille lui expliquent plus exactement la voie de Dieu.",
      "Il utilise ensuite les Écritures pour démontrer que Jésus est le Christ.",
      "Paul présente Apollos et lui-même comme des serviteurs plutôt que des chefs rivaux."
    ],
    "keyReading": "Actes 18:24-28; 19:1-7; 1 Corinthiens 1:10-13; 3:4-9,21-23; 4:6",
    "location": "Alexandrie ; Éphèse ; Achaïe, notamment Corinthe.",
    "relationshipWithJehovah": "Apollos avait déjà du zèle pour les Écritures et pour enseigner, puis il accepte l’aide de Priscille et Aquilas. Une fois mieux instruit, il utilise ses connaissances pour fortifier les croyants.",
    "didYouKnow": "Apollos venait d’Alexandrie, grande ville intellectuelle d’Égypte, et la Bible le présente comme un homme éloquent qui connaissait bien les Écritures.",
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
    "identity": "Apollos était un Juif originaire d’Alexandrie, homme éloquent et connaisseur des Écritures, qui annonçait Jésus avec zèle mais ne connaissait d’abord que le baptême de Jean.",
    "era": "Premières décennies de la congrégation chrétienne, vers le milieu du Ier siècle",
    "familyAndEntourage": [
      "Priscille",
      "Aquilas",
      "Paul",
      "Les disciples d’Éphèse et d’Achaïe"
    ],
    "bibleAccount": [
      "Il arrive à Éphèse et parle avec assurance dans la synagogue.",
      "Priscille et Aquilas lui expliquent plus exactement les enseignements de Dieu.",
      "Il se rend en Achaïe et aide grandement les croyants.",
      "Il réfute publiquement les arguments des opposants à l’aide des Écritures."
    ],
    "qualities": [
      "Éloquence",
      "Zèle",
      "Connaissance des Écritures",
      "Humilité pour accepter une instruction supplémentaire"
    ],
    "difficulties": [
      "Sa connaissance était incomplète au départ puisqu’il ne connaissait que le baptême de Jean."
    ]
  },
  "silas": {
    "studyFocus": "Silas — compagnon fidèle de Paul",
    "lessonPoints": [
      "Fidélité dans les épreuves",
      "Courage dans le ministère",
      "Encourager les autres"
    ],
    "keyReading": "Actes 15:22-41; 16:19-40; 17:10-15; 18:5; 1 Pierre 5:12",
    "location": "Jérusalem, Antioche et les villes de Macédoine et d’Achaïe.",
    "relationshipWithJehovah": "Silas priait et chantait des louanges à Jéhovah même en prison. Son endurance et son service fidèle dans plusieurs régions montrent une foi active malgré les mauvais traitements.",
    "didYouKnow": "JW.org indique que « Silvain » dans les lettres de Paul et de Pierre est manifestement la forme latine du nom « Silas » utilisée dans le livre des Actes.",
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
    "studyFocus": "Onésime — d’esclave à frère chrétien",
    "lessonPoints": [
      "Transformation par la vérité",
      "Pardon chrétien",
      "Valeur d’une personne"
    ],
    "keyReading": "Philémon 8-21; Colossiens 4:7-9",
    "location": "Rome et Colosses.",
    "relationshipWithJehovah": "Après être devenu chrétien grâce à Paul, Onésime est décrit comme un frère bien-aimé. Son parcours montre comment la foi peut transformer une personne et l’amener à assumer ses responsabilités.",
    "didYouKnow": "JW.org explique qu’Onésime a parcouru probablement environ 1 400 kilomètres entre Colosses et Rome, vraisemblablement pour fuir son maître.",
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
    "studyFocus": "Philémon a été un chrétien fidèle dont la relation avec Paul et la situation d’Onésime montrent la puissance de l’amour chrétien et du pardon.",
    "lessonPoints": [
      "Pardon : Paul l’a encouragé à accueillir Onésime comme un frère.",
      "Amour chrétien : Philémon était connu pour son amour envers les saints.",
      "Générosité : son foyer était associé à l’accueil et au soutien des chrétiens."
    ],
    "keyReading": "Philémon 1-25",
    "location": "Colosses.",
    "relationshipWithJehovah": "Paul remercie Jéhovah pour l’amour et la foi de Philémon. Son hospitalité et sa manière attendue de traiter Onésime étaient directement liées à son amour pour Christ et pour les chrétiens.",
    "didYouKnow": "La lettre à Philémon est la seule lettre de Paul adressée principalement à un particulier au sujet d’une situation personnelle précise.",
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
    "studyFocus": "Tite était un collaborateur fiable de Paul, chargé de responsabilités importantes dans les congrégations et encouragé à rester attaché à un enseignement sain.",
    "lessonPoints": [
      "Fiabilité : Paul lui confiait des missions délicates.",
      "Enseignement sain : Tite devait aider les congrégations à rester attachées à la saine doctrine.",
      "Bon exemple : il devait montrer dans sa propre conduite ce qu’il enseignait aux autres."
    ],
    "keyReading": "2 Corinthiens 7:6-16; 8:16-24; Tite 1:4-9; 2:11-15; 3:12-15",
    "location": "Crète et autres régions du ministère de Paul.",
    "relationshipWithJehovah": "Paul lui confiait des responsabilités parce qu’il avait démontré sa fiabilité dans le service chrétien. Sa mission consistait à aider les congrégations à rester saines dans la foi et dans la conduite.",
    "didYouKnow": "Paul appelle Tite son « véritable enfant selon une foi que nous partageons », une expression qui montre leur relation spirituelle étroite.",
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
    "studyFocus": "Eutyche est surtout connu pour l’événement survenu lors d’une réunion à Troas, qui montre l’intérêt porté par Paul et les chrétiens à la vie de leurs compagnons.",
    "lessonPoints": [
      "Réunions chrétiennes : Eutyche était présent avec les autres disciples pour écouter l’enseignement.",
      "Courage : après l’accident, les frères ont été profondément rassurés de le retrouver vivant.",
      "Encouragement : cet épisode montre la valeur du soutien apporté aux compagnons."
    ],
    "keyReading": "Actes 20:7-12",
    "location": "Troas.",
    "relationshipWithJehovah": "Après être tombé d’une fenêtre pendant un long discours de Paul, Eutyche est relevé vivant; l’événement console profondément les disciples.",
    "didYouKnow": "Eutyche s’était assis à une fenêtre au troisième étage.",
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
    "studyFocus": "Marthe — une femme qui aimait Jésus",
    "lessonPoints": [
      "Équilibre entre service et écoute",
      "Foi",
      "Hospitalité"
    ],
    "keyReading": "Luc 10:38-42; Jean 11:1-44; 12:1-8",
    "location": "Béthanie, près de Jérusalem.",
    "relationshipWithJehovah": "Sa foi s’est manifestée notamment lorsqu’elle a affirmé sa confiance en Jésus et dans la résurrection à venir, même avant de voir Lazare revenir à la vie.",
    "didYouKnow": "Les Écritures ne disent pas précisément si Marthe était l’épouse, la veuve ou la fille de Simon le lépreux; JW.org souligne qu’il ne faut donc pas présenter cette identification comme un fait.",
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
    "identity": "Marthe est la sœur de Lazare et de Marie de Béthanie. Jésus et ses proches l’aimaient et se rendait chez eux lorsqu’il était près de Jérusalem.",
    "era": "Ministère terrestre de Jésus, vers le Ier siècle de n. è.",
    "familyAndEntourage": [
      "Lazare",
      "Marie de Béthanie",
      "Jésus, qui aimait les trois membres de cette famille"
    ],
    "bibleAccount": [
      "Elle accueille Jésus chez elle.",
      "Elle se préoccupe de nombreuses tâches tandis que Marie écoute Jésus.",
      "Elle exprime sa foi en Jésus avant la résurrection de Lazare.",
      "Elle participe ensuite à un repas donné en l’honneur de Jésus."
    ],
    "qualities": [
      "Hospitalité",
      "Foi",
      "Franchise"
    ],
    "difficulties": [
      "Elle s’est laissé distraire par de nombreuses tâches et a demandé à Jésus d’intervenir dans la situation avec Marie."
    ]
  },
  "mary_bethany": {
    "studyFocus": "Marie de Béthanie aimait profondément Jésus et montrait son intérêt pour les choses spirituelles en écoutant attentivement son enseignement.",
    "lessonPoints": [
      "Priorités spirituelles : elle a choisi de s’asseoir aux pieds de Jésus pour l’écouter.",
      "Foi : elle a exprimé sa confiance en Jésus lors de la mort de son frère Lazare.",
      "Générosité : elle a manifesté son amour pour Jésus par un acte de grand prix."
    ],
    "keyReading": "Luc 10:38-42 ; Jean 11:1-44 ; 12:1-8",
    "location": "Béthanie.",
    "relationshipWithJehovah": "Marie choisit d’écouter Jésus et lui témoigne ensuite un profond attachement en utilisant un parfum précieux.",
    "didYouKnow": "Jésus a dit que Marie avait choisi la bonne part.",
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
    "identity": "Amie de Jésus — Marie, sœur de Marthe et de Lazare, accorde une grande valeur à l’enseignement de Jésus et lui manifeste son attachement.",
    "era": "Évangiles",
    "familyAndEntourage": [
      "Marthe",
      "Lazare",
      "Jésus"
    ],
    "bibleAccount": [
      "Écoute Jésus avec attention.",
      "Exprime sa foi au sujet de Lazare.",
      "Utilise une huile parfumée coûteuse pour honorer Jésus."
    ],
    "qualities": [
      "Foi",
      "Attachement",
      "Générosité"
    ],
    "difficulties": []
  },
  "joseph_arimathea": {
    "studyFocus": "Joseph d’Arimathie était un homme riche et membre respecté du Sanhédrin qui a pris position avec courage pour honorer Jésus après sa mort.",
    "lessonPoints": [
      "Courage : il n’a pas laissé sa position sociale l’empêcher d’agir en faveur de Jésus.",
      "Respect : il a demandé le corps de Jésus et lui a fourni une tombe.",
      "Foi : il est présenté comme attendant lui aussi le Royaume de Dieu."
    ],
    "keyReading": "Matthieu 27:57-60 ; Marc 15:42-46 ; Jean 19:38-42",
    "location": "Jérusalem et Arimathie.",
    "relationshipWithJehovah": "Bien qu’il soit membre respecté du Sanhédrin, Joseph ne consent pas au traitement réservé à Jésus et demande son corps pour l’ensevelir.",
    "didYouKnow": "Il est présenté comme un homme riche et comme disciple de Jésus.",
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
    "identity": "Homme riche et disciple de Jésus — Joseph d’Arimathée demande le corps de Jésus et participe à son ensevelissement.",
    "era": "Évangiles",
    "familyAndEntourage": [
      "Jésus",
      "Pilate",
      "Nicodème"
    ],
    "bibleAccount": [
      "Est présenté comme un homme juste attendant le Royaume de Dieu.",
      "Demande à Pilate le corps de Jésus.",
      "Place Jésus dans un tombeau neuf."
    ],
    "qualities": [
      "Courage",
      "Respect",
      "Attachement"
    ],
    "difficulties": []
  },
  "jairus": {
    "studyFocus": "Jaïrus, responsable de synagogue, a humblement demandé l’aide de Jésus lorsque sa fille était mourante et a continué à croire malgré l’annonce de sa mort.",
    "lessonPoints": [
      "Foi : il a demandé l’aide de Jésus malgré sa position sociale.",
      "Persévérance : il a continué à écouter Jésus lorsque la situation semblait désespérée.",
      "Amour familial : son récit montre la profondeur de son souci pour sa fille."
    ],
    "keyReading": "Marc 5:21-43 ; Luc 8:40-56",
    "location": "Capharnaüm et ses environs.",
    "relationshipWithJehovah": "Jaïrus supplie Jésus pour sa fille et continue à faire confiance malgré l’annonce de sa mort.",
    "didYouKnow": "Jésus lui dit de ne pas avoir peur mais de montrer de la foi.",
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
    "identity": "Président de synagogue — Jaïrus demande à Jésus d’aider sa fille malade et assiste à sa guérison.",
    "era": "Évangiles",
    "familyAndEntourage": [
      "Jésus",
      "Sa fille"
    ],
    "bibleAccount": [
      "Supplie Jésus de venir auprès de sa fille.",
      "Continue à faire confiance malgré l’annonce de la mort de l’enfant.",
      "Est témoin du retour à la vie de sa fille."
    ],
    "qualities": [
      "Foi",
      "Persévérance"
    ],
    "difficulties": []
  },
  "thomas": {
    "studyFocus": "Thomas était un apôtre sincère qui a exprimé ses doutes après la mort de Jésus, puis a été convaincu par les preuves de sa résurrection.",
    "lessonPoints": [
      "Sincérité : Thomas n’a pas caché ce qu’il avait du mal à croire.",
      "Foi fondée sur des preuves : lorsqu’il a vu Jésus ressuscité, il a réagi avec conviction.",
      "Persévérance : malgré ses moments de doute, il est resté attaché au groupe des disciples."
    ],
    "keyReading": "Jean 11:16; 14:1-7; 20:24-29; 21:1-2",
    "location": "Jérusalem et la Judée.",
    "relationshipWithJehovah": "Thomas ne cache pas ses doutes. Jésus l’aide à parvenir à la foi, et Thomas répond par une déclaration de foi remarquable.",
    "didYouKnow": "Jean donne à Thomas le surnom ou équivalent « Didyme », qui signifie « Jumeau ».",
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
    "keyReading": "Actes 15:13-29 ; 21:18-25 ; Galates 1:19 ; 2:9",
    "location": "Jérusalem.",
    "relationshipWithJehovah": "Jacques devient un chrétien mûr et joue un rôle important dans la congrégation de Jérusalem.",
    "didYouKnow": "Jésus lui apparaît après sa résurrection, ce qui contribue à sa foi.",
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
    "identity": "Ancien à Jérusalem — Jacques, frère de Jésus, devient un membre éminent de la congrégation de Jérusalem et intervient lors de la question de la circoncision.",
    "era": "Congrégation chrétienne du Ier siècle",
    "familyAndEntourage": [
      "Jésus",
      "Pierre",
      "Paul"
    ],
    "bibleAccount": [
      "Est d’abord sceptique envers Jésus avec ses frères.",
      "Devient ensuite croyant.",
      "Participe à la décision prise à Jérusalem au sujet des non-Juifs.",
      "Rédige la lettre biblique qui porte son nom."
    ],
    "qualities": [
      "Foi",
      "Sagesse pratique",
      "Courage"
    ],
    "difficulties": []
  },
  "jude_brother_jesus": {
    "studyFocus": "Jude, frère de Jésus, s’est présenté comme esclave de Jésus Christ et a exhorté les chrétiens à lutter pour la foi.",
    "lessonPoints": [
      "Humilité : il ne s’est pas présenté en mettant en avant son lien familial avec Jésus.",
      "Défense de la foi : il a encouragé les chrétiens à protéger les enseignements reçus.",
      "Vigilance : il a averti contre ceux qui introduisaient une conduite mauvaise dans la congrégation."
    ],
    "keyReading": "Jude 1-25",
    "location": "Palestine et congrégations chrétiennes du Ier siècle.",
    "relationshipWithJehovah": "Jude encourage les chrétiens à combattre pour la foi et à se garder des influences corrompues.",
    "didYouKnow": "Il se présente comme esclave de Jésus Christ et frère de Jacques.",
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
    "identity": "Disciple chrétien — Judas, frère de Jésus, est cité parmi les frères de Jésus et est traditionnellement associé à la lettre de Jude.",
    "era": "Évangiles",
    "familyAndEntourage": [
      "Jésus",
      "Jacques"
    ],
    "bibleAccount": [
      "Figure parmi les frères de Jésus.",
      "Devient croyant après le ministère terrestre de Jésus.",
      "Encourage les chrétiens à défendre la vraie foi dans la lettre de Jude."
    ],
    "qualities": [
      "Foi",
      "Courage",
      "Vigilance spirituelle"
    ],
    "difficulties": []
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
    "keyReading": "Marc 5:21-43; Luc 8:40-56",
    "location": "Capharnaüm et ses environs.",
    "relationshipWithJehovah": "La Bible ne rapporte pas de parole ou de prière personnelle de cette enfant. Son récit met plutôt en évidence le pouvoir donné par Jéhovah à Jésus de ressusciter les morts et l’espérance de la résurrection.",
    "didYouKnow": "Elle avait 12 ans et était l’enfant unique de Jaïrus.",
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
    "identity": "La fille de Jaïrus était une fillette de 12 ans, fille unique d’un président de synagogue, que Jésus a ramenée à la vie.",
    "era": "Vers la fin de 31 ou au début de 32 de n. è., pendant le ministère terrestre de Jésus",
    "familyAndEntourage": [
      "Jaïrus, son père",
      "Sa mère",
      "Jésus",
      "Pierre, Jacques et Jean, témoins de la résurrection"
    ],
    "bibleAccount": [
      "Elle tombe gravement malade.",
      "Jaïrus demande à Jésus de venir la guérir.",
      "Elle meurt avant l’arrivée de Jésus à la maison.",
      "Jésus la prend par la main et la ramène à la vie."
    ],
    "qualities": [],
    "difficulties": [
      "Elle a subi une maladie mortelle puis la mort, mais son récit se termine par une résurrection."
    ]
  },
  "blind_bartimaeus": {
    "studyFocus": "Bartimée, un aveugle mendiant, a persisté à appeler Jésus malgré les reproches de la foule et a manifesté une grande foi.",
    "lessonPoints": [
      "Persévérance : il n’a pas cessé de crier vers Jésus lorsque la foule voulait le faire taire.",
      "Foi : il a appelé Jésus « Fils de David », reconnaissant son rôle messianique.",
      "Gratitude : après avoir retrouvé la vue, il a suivi Jésus."
    ],
    "keyReading": "Marc 10:46-52; Luc 18:35-43",
    "location": "Jéricho.",
    "relationshipWithJehovah": "Son récit ne rapporte pas une prière adressée directement à Jéhovah, mais sa confiance dans Jésus et sa persévérance illustrent une foi qui agit.",
    "didYouKnow": "Le nom Bartimée signifie « fils de Timée »; Marc conserve à la fois la forme araméenne et sa traduction.",
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
    "identity": "Bartimée était un aveugle mendiant près de Jéricho qui a crié vers Jésus et a retrouvé la vue.",
    "era": "Fin du ministère terrestre de Jésus",
    "familyAndEntourage": [
      "Timée, son père",
      "Jésus",
      "La foule qui suivait Jésus"
    ],
    "bibleAccount": [
      "Il mendie au bord de la route.",
      "Il apprend que Jésus de Nazareth passe et crie vers lui.",
      "Malgré les reproches de la foule, il insiste.",
      "Jésus lui rend la vue et il se met à le suivre."
    ],
    "qualities": [
      "Persévérance",
      "Foi",
      "Courage"
    ],
    "difficulties": [
      "Il devait vivre avec la cécité et la condition sociale difficile d’un mendiant."
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
    "relationshipWithJehovah": "Elle écoute Jésus, accepte son témoignage et parle de lui à de nombreux habitants de sa ville.",
    "didYouKnow": "Beaucoup de Samaritains croient grâce à son témoignage.",
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
    "identity": "Habitante de Samarie — Une Samaritaine échange avec Jésus près d’un puits et parle ensuite de lui aux habitants de sa ville.",
    "era": "Évangiles",
    "familyAndEntourage": [
      "Jésus",
      "Les Samaritains de Sychar"
    ],
    "bibleAccount": [
      "Discute avec Jésus au puits de Jacob.",
      "Réfléchit à ses paroles concernant l’eau et le vrai culte.",
      "Parle de Jésus aux habitants de la ville."
    ],
    "qualities": [
      "Ouverture",
      "Courage",
      "Zèle pour partager"
    ],
    "difficulties": []
  },
  "roman_centurion": {
    "studyFocus": "Le centurion romain de Capharnaüm a montré une foi remarquable dans le pouvoir de guérison de Jésus et une grande humilité.",
    "lessonPoints": [
      "Foi : il croyait que Jésus pouvait guérir son serviteur sans même venir chez lui.",
      "Humilité : il estimait ne pas être digne de recevoir Jésus chez lui.",
      "Compassion : il se souciait profondément d’un serviteur malade."
    ],
    "keyReading": "Matthieu 8:5-13; Luc 7:1-10",
    "location": "Capharnaüm.",
    "relationshipWithJehovah": "Jésus présente sa foi comme remarquable. Son attitude montre une confiance profonde dans l’autorité que Jéhovah avait accordée à Jésus.",
    "didYouKnow": "Le récit souligne que ce centurion ne demanda même pas à Jésus d’entrer chez lui: il estimait qu’une parole de Jésus suffirait.",
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
    "identity": "Un centurion romain de Capharnaüm a demandé à Jésus de guérir son serviteur et a manifesté une foi remarquable dans son autorité.",
    "era": "Ministère terrestre de Jésus",
    "familyAndEntourage": [
      "Son serviteur malade",
      "Des anciens des Juifs venus parler en sa faveur",
      "Jésus"
    ],
    "bibleAccount": [
      "Il se préoccupe de son serviteur malade.",
      "Il fait demander à Jésus de le guérir.",
      "Il estime ne pas être digne de recevoir Jésus chez lui.",
      "Jésus guérit le serviteur."
    ],
    "qualities": [
      "Foi",
      "Humilité",
      "Compassion"
    ],
    "difficulties": [
      "Il était soumis aux limites de son époque et de son statut militaire, mais le récit ne rapporte pas de faute personnelle précise."
    ]
  },
  "felix": {
    "studyFocus": "Félix a entendu Paul parler de justice, de maîtrise de soi et du jugement à venir, mais a repoussé sa réaction.",
    "lessonPoints": [
      "Écouter et agir : connaître la vérité ne suffit pas si l’on refuse d’agir.",
      "Maîtrise de soi : Paul a directement abordé cette qualité devant lui.",
      "Intégrité : il faut éviter de laisser les intérêts personnels influencer les décisions justes."
    ],
    "keyReading": "Actes 23:23-35 ; 24:1-27",
    "location": "Césarée.",
    "relationshipWithJehovah": "Paul lui parle de justice, de maîtrise de soi et du jugement à venir, mais Félix reporte sa décision.",
    "didYouKnow": "Félix tremble en entendant le message de Paul.",
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
    "identity": "Gouverneur romain de Judée — Félix entend Paul parler de la justice, de la maîtrise de soi et du jugement à venir, mais reporte sa décision.",
    "era": "Actes",
    "familyAndEntourage": [
      "Paul",
      "Drusille"
    ],
    "bibleAccount": [
      "Fait comparaître Paul.",
      "Écoute son enseignement sur des questions morales et spirituelles.",
      "Garde Paul détenu pendant une période prolongée."
    ],
    "qualities": [
      "Autorité administrative"
    ],
    "difficulties": [
      "Le récit montre le danger de remettre à plus tard une décision concernant la foi."
    ]
  },
  "festus": {
    "studyFocus": "Festus a présidé l’affaire de Paul après Félix et a reconnu qu’il n’avait pas commis de crime méritant la mort, tout en cherchant à formuler l’accusation pour César.",
    "lessonPoints": [
      "Examen des faits : il a entendu les accusations et la défense de Paul.",
      "Respect des procédures : Paul a exercé son droit d’en appeler à César.",
      "Prudence : une autorité doit distinguer les faits des accusations portées contre quelqu’un."
    ],
    "keyReading": "Actes 25:1-27 ; 26:1-32",
    "location": "Césarée.",
    "relationshipWithJehovah": "Festus cherche à comprendre l’affaire de Paul et l’envoie finalement à César après son appel.",
    "didYouKnow": "Festus discute avec Agrippa de l’accusation portée contre Paul.",
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
    "identity": "Gouverneur romain de Judée — Festus succède à Félix et entend l’affaire de Paul avant que celui-ci n’en appelle à César.",
    "era": "Actes",
    "familyAndEntourage": [
      "Paul",
      "Agrippa",
      "Félix"
    ],
    "bibleAccount": [
      "Reprend le dossier de Paul.",
      "Entend les accusations portées contre lui.",
      "Accepte l’appel de Paul à César.",
      "Présente l’affaire à Agrippa."
    ],
    "qualities": [
      "Prudence juridique"
    ],
    "difficulties": []
  },
  "agrippa_ii": {
    "studyFocus": "Agrippa II a entendu Paul expliquer sa conversion, son ministère et l’accomplissement des prophéties concernant le Messie.",
    "lessonPoints": [
      "Écouter les Écritures : Paul a raisonné à partir des prophètes connus d’Agrippa.",
      "Réflexion personnelle : entendre un témoignage demande ensuite d’examiner sincèrement sa propre position.",
      "Courage du témoin : Paul a parlé librement devant un dirigeant."
    ],
    "keyReading": "Actes 25:13-27 ; 26:1-32",
    "location": "Césarée.",
    "relationshipWithJehovah": "Agrippa écoute longuement Paul exposer sa foi et les prophéties concernant le Christ.",
    "didYouKnow": "Paul lui demande s’il croit aux prophètes.",
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
    "identity": "Roi — Agrippa II entend le témoignage de Paul avec Bérénice et Festus et connaît les coutumes et controverses juives.",
    "era": "Actes",
    "familyAndEntourage": [
      "Bérénice",
      "Paul",
      "Festus"
    ],
    "bibleAccount": [
      "Écoute Paul exposer son parcours et sa foi.",
      "Examine l’affaire avec Festus.",
      "Reconnaît que Paul ne semble pas avoir fait quelque chose qui mérite la mort ou les chaînes."
    ],
    "qualities": [
      "Connaissance des affaires juives"
    ],
    "difficulties": []
  },
  "berenice": {
    "studyFocus": "Bérénice était présente lors de l’audience où Paul défendit sa foi devant Agrippa et Festus.",
    "lessonPoints": [
      "Attention au témoignage : elle a entendu directement la défense de Paul.",
      "Contexte historique : son récit illustre le cadre officiel dans lequel Paul a rendu témoignage.",
      "Responsabilité personnelle : entendre la vérité ne remplace pas une réponse personnelle."
    ],
    "keyReading": "Actes 25:13-27 ; 26:30-32",
    "location": "Césarée.",
    "relationshipWithJehovah": "Bérénice assiste avec Agrippa à l’audience où Paul témoigne de sa foi.",
    "didYouKnow": "Elle est mentionnée avec Agrippa lors de cette audience officielle.",
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
    "identity": "Personnage royal — Bérénice accompagne Agrippa II lors de l’audience où Paul présente sa défense devant Festus.",
    "era": "Actes",
    "familyAndEntourage": [
      "Agrippa II",
      "Festus",
      "Paul"
    ],
    "bibleAccount": [
      "Se rend à Césarée avec Agrippa.",
      "Assiste à l’audience de Paul."
    ],
    "qualities": [
      "Présence dans les affaires publiques"
    ],
    "difficulties": []
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
    "relationshipWithJehovah": "Son service pour la congrégation et son aide envers de nombreux chrétiens montrent une foi qui se traduisait par des actes concrets de soutien.",
    "didYouKnow": "JW.org explique que le mot grec traduit par « ministre » à propos de Phœbé ne signifie pas qu’elle avait été nommée assistante ministérielle; Paul l’emploie pour parler de son activité au service de la bonne nouvelle.",
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
    "identity": "Phœbé était une chrétienne de Cenchrées que Paul recommande chaleureusement aux chrétiens de Rome.",
    "era": "Vers 56-58 de n. è., au cours du ministère de Paul",
    "familyAndEntourage": [
      "Paul",
      "Les chrétiens de Cenchrées",
      "Les chrétiens de Rome"
    ],
    "bibleAccount": [
      "Paul la recommande à la congrégation de Rome.",
      "Elle est présentée comme une aide pour beaucoup, y compris Paul.",
      "Paul demande aux chrétiens de Rome de l’accueillir et de l’assister dans toute affaire où elle aurait besoin d’eux."
    ],
    "qualities": [
      "Service",
      "Générosité",
      "Fiabilité"
    ],
    "difficulties": []
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
    "relationshipWithJehovah": "Paul ne remet pas en cause leur engagement chrétien; il les encourage plutôt à retrouver l’unité dans le Seigneur, montrant que même des chrétiennes actives devaient préserver la paix.",
    "didYouKnow": "Paul dit qu’Évodie et Syntyche avaient « lutté côte à côte » avec lui dans la bonne nouvelle, ce qui montre qu’elles avaient déjà beaucoup travaillé pour la prédication.",
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
    "identity": "Évodie était une chrétienne de la congrégation de Philippes que Paul exhorte, avec Syntyche, à être unies dans le Seigneur.",
    "era": "Premières décennies de la congrégation chrétienne",
    "familyAndEntourage": [
      "Syntyche",
      "Paul",
      "La congrégation de Philippes"
    ],
    "bibleAccount": [
      "Elle avait travaillé aux côtés de Paul dans la bonne nouvelle.",
      "Paul lui adresse une exhortation personnelle à être du même avis dans le Seigneur.",
      "Il demande à un fidèle collaborateur de les aider à régler leur désaccord."
    ],
    "qualities": [
      "Zèle dans la bonne nouvelle",
      "Engagement dans la congrégation"
    ],
    "difficulties": [
      "Elle avait un désaccord avec Syntyche suffisamment important pour nécessiter l’aide d’un autre chrétien."
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
    "relationshipWithJehovah": "Paul le présente comme un frère, collaborateur et compagnon de combat qui s’est dépensé pour servir Christ et aider les autres chrétiens.",
    "didYouKnow": "Paul précise qu’Épaphrodite était très inquiet parce que les Philippiens avaient appris qu’il était malade; il se souciait donc aussi de l’inquiétude que son état causait à ses frères.",
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
    "identity": "Épaphrodite était un chrétien de Philippes envoyé auprès de Paul pour lui apporter une aide matérielle et personnelle. Il tomba gravement malade pendant cette période.",
    "era": "Vers 60-61 de n. è., pendant la première détention de Paul à Rome",
    "familyAndEntourage": [
      "Paul",
      "La congrégation de Philippes",
      "Les chrétiens de Rome"
    ],
    "bibleAccount": [
      "Les Philippiens l’envoient servir Paul.",
      "Il tombe gravement malade et manque de mourir.",
      "Il se rétablit par la faveur de Jéhovah.",
      "Paul le renvoie à Philippes avec une recommandation chaleureuse."
    ],
    "qualities": [
      "Dévouement",
      "Courage",
      "Esprit de sacrifice",
      "Amour fraternel"
    ],
    "difficulties": [
      "Il a risqué sa vie en accomplissant son service et a souffert d’une grave maladie."
    ]
  },
  "tychicus": {
    "studyFocus": "Tychique était un assistant fidèle de Paul, chargé de transmettre des lettres et de réconforter les congrégations.",
    "lessonPoints": [
      "Fiabilité : Paul lui confiait des missions importantes.",
      "Encouragement : il devait renseigner les frères sur Paul et les consoler.",
      "Disponibilité : il a accepté plusieurs missions au service des congrégations."
    ],
    "keyReading": "Actes 20:4-6; Éphésiens 6:21-22; Colossiens 4:7-9; 2 Timothée 4:12; Tite 3:12",
    "location": "Asie, Rome et autres régions.",
    "relationshipWithJehovah": "Paul lui confiait des missions importantes parce qu’il le considérait comme fidèle dans le service du Seigneur.",
    "didYouKnow": "Tychique a probablement été le porteur de plusieurs lettres de Paul, notamment celles adressées aux Éphésiens et aux Colossiens.",
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
    "identity": "Tychique était un chrétien originaire de la province d’Asie qui accompagna Paul et servit de messager pour plusieurs de ses lettres.",
    "era": "Premières décennies de la congrégation chrétienne",
    "familyAndEntourage": [
      "Paul",
      "Les assemblées d’Asie",
      "Onésime",
      "Les chrétiens de Colosses et d’Éphèse"
    ],
    "bibleAccount": [
      "Il accompagne Paul dans son activité missionnaire.",
      "Paul le décrit comme un frère bien-aimé, ministre fidèle et compagnon de service.",
      "Il est chargé de renseigner les frères sur la situation de Paul.",
      "Paul envisage de l’envoyer remplacer Timothée ou Titus selon les circonstances."
    ],
    "qualities": [
      "Fidélité",
      "Fiabilité",
      "Esprit de service"
    ],
    "difficulties": [
      "Son service impliquait des déplacements et des responsabilités dans une période où les chrétiens subissaient opposition et difficultés."
    ]
  },
  "demas": {
    "studyFocus": "Démas a collaboré avec Paul pendant un temps, mais Paul a ensuite indiqué qu’il l’avait abandonné parce qu’il aimait le présent système de choses.",
    "lessonPoints": [
      "Vigilance spirituelle : un bon passé ne dispense pas de rester fidèle.",
      "Priorités : l’amour des avantages du monde peut détourner du service chrétien.",
      "Persévérance : il faut protéger régulièrement sa relation avec Jéhovah."
    ],
    "keyReading": "Colossiens 4:14; Philémon 23-24; 2 Timothée 4:10",
    "location": "Rome et le monde méditerranéen.",
    "relationshipWithJehovah": "Le parcours de Démas montre qu’une participation initiale au service chrétien ne garantit pas la fidélité jusqu’au bout; l’attachement aux choses du monde peut détourner quelqu’un.",
    "didYouKnow": "Démas est d’abord présenté simplement comme un collaborateur de Paul avant que sa décision de quitter Paul ne soit rapportée dans 2 Timothée.",
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
    "identity": "Démas était un collaborateur de Paul pendant une période, mais Paul rapporte plus tard qu’il l’avait abandonné parce qu’il avait aimé le présent monde.",
    "era": "Premières années de la congrégation chrétienne",
    "familyAndEntourage": [
      "Paul",
      "Luc",
      "Les collaborateurs de Paul"
    ],
    "bibleAccount": [
      "Paul le mentionne parmi ses collaborateurs dans ses lettres.",
      "Plus tard, Paul écrit que Démas l’a abandonné et est parti pour Thessalonique parce qu’il aimait le présent monde."
    ],
    "qualities": [
      "Collaboration initiale au ministère"
    ],
    "difficulties": [
      "Il a finalement abandonné Paul et son service à cause de son attachement au présent monde."
    ]
  },
  "naaman": {
    "studyFocus": "Naaman, chef de l’armée syrienne, a dû mettre son orgueil de côté pour suivre les instructions de Jéhovah et a ensuite reconnu le vrai Dieu.",
    "lessonPoints": [
      "Humilité : il a accepté une instruction simple malgré sa première réaction.",
      "Foi et obéissance : sa guérison est venue après avoir suivi la direction donnée par Élisée.",
      "Reconnaissance : Naaman a exprimé sa détermination à ne plus adorer d’autres dieux."
    ],
    "keyReading": "2 Rois 5:1-19",
    "location": "Syrie et Samarie.",
    "relationshipWithJehovah": "Naaman accepte l’instruction d’Élisée, se lave dans le Jourdain et reconnaît le pouvoir de Jéhovah.",
    "didYouKnow": "Il souffrait de lèpre et était chef de l’armée syrienne.",
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
    "identity": "Chef de l’armée syrienne — Naaman, atteint de lèpre, accepte finalement les instructions du prophète Élisée et est guéri.",
    "era": "Rois d’Israël",
    "familyAndEntourage": [
      "Élisée",
      "La jeune servante israélite"
    ],
    "bibleAccount": [
      "Écoute le témoignage d’une jeune Israélite.",
      "Se rend auprès d’Élisée.",
      "Accepte de se laver sept fois dans le Jourdain.",
      "Reconnaît la puissance de Jéhovah."
    ],
    "qualities": [
      "Humilité",
      "Obéissance",
      "Foi progressive"
    ],
    "difficulties": []
  },
  "hezekiah": {
    "studyFocus": "Ézéchias s’est appuyé sur Jéhovah face aux menaces assyriennes et a travaillé à rétablir le vrai culte.",
    "lessonPoints": [
      "Confiance : devant la menace de Sennakérib, Ézéchias a recherché l’aide de Jéhovah.",
      "Zèle pour le vrai culte : il a entrepris des mesures pour purifier le culte en Juda.",
      "Humilité : son récit montre aussi qu’un serviteur fidèle doit rester vigilant face à l’orgueil."
    ],
    "keyReading": "2 Rois 18:1-7 ; 19:1-37 ; 20:1-21",
    "location": "Jérusalem et Juda.",
    "relationshipWithJehovah": "Ézéchias s’attache à Jéhovah et recherche son aide face aux menaces assyriennes.",
    "didYouKnow": "Il a détruit le serpent de cuivre lorsqu’il est devenu un objet d’idolâtrie.",
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
    "identity": "Roi de Juda — Ézéchias entreprend une réforme du culte et fait confiance à Jéhovah lors de la menace assyrienne.",
    "era": "Rois de Juda",
    "familyAndEntourage": [
      "Isaïe",
      "Sennachérib",
      "Le peuple de Juda"
    ],
    "bibleAccount": [
      "Nettoie et réorganise le temple.",
      "Encourage le peuple à revenir au vrai culte.",
      "Cherche l’aide de Jéhovah face à l’Assyrie.",
      "Organise une grande célébration de la Pâque."
    ],
    "qualities": [
      "Foi",
      "Courage",
      "Zèle"
    ],
    "difficulties": []
  },
  "josiah": {
    "studyFocus": "Josias a cherché Jéhovah alors qu’il était encore jeune et a entrepris une vaste réforme du culte en Juda.",
    "lessonPoints": [
      "Chercher Jéhovah : Josias a commencé à agir alors qu’il était encore jeune.",
      "Réagir à la Parole de Dieu : lorsqu’il a entendu le livre de la Loi, il a été profondément touché.",
      "Courage : il a supprimé des pratiques liées au faux culte et a encouragé le peuple à servir Jéhovah."
    ],
    "keyReading": "2 Rois 22:1-23:30 ; 2 Chroniques 34:1-35:27",
    "location": "Juda et Jérusalem.",
    "relationshipWithJehovah": "Josias entreprend une vaste réforme religieuse après avoir entendu les paroles de la Loi.",
    "didYouKnow": "Il commence à rechercher le Dieu de David alors qu’il est encore jeune.",
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
    "identity": "Roi de Juda — Josias entreprend une réforme religieuse et réagit avec humilité à la découverte du livre de la Loi.",
    "era": "Rois de Juda",
    "familyAndEntourage": [
      "Houlda",
      "Les prêtres",
      "Juda"
    ],
    "bibleAccount": [
      "Fait réparer le temple.",
      "Écoute la lecture du livre de la Loi.",
      "Supprime des pratiques idolâtriques.",
      "Organise une importante célébration de la Pâque."
    ],
    "qualities": [
      "Humilité",
      "Zèle",
      "Réceptivité aux conseils"
    ],
    "difficulties": []
  },
  "jehoshaphat": {
    "studyFocus": "Josaphat a souvent recherché Jéhovah et a encouragé le peuple de Juda à lui faire confiance, même lorsqu’une grande armée menaçait le pays.",
    "lessonPoints": [
      "Rechercher Jéhovah : face au danger, Josaphat a demandé l’aide de Jéhovah.",
      "Foi : le récit montre l’importance de compter sur Jéhovah plutôt que sur sa propre force.",
      "Vigilance : son histoire rappelle aussi qu’une bonne décision peut être compromise par de mauvaises associations."
    ],
    "keyReading": "2 Chroniques 17:1-19 ; 20:1-30",
    "location": "Juda et Jérusalem.",
    "relationshipWithJehovah": "Yehoshaphat recherche Jéhovah et organise l’enseignement de la Loi dans Juda.",
    "didYouKnow": "Il envoie des princes, des Lévites et des prêtres pour enseigner au peuple.",
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
    "studyFocus": "Jonas a appris à accepter la mission de Jéhovah et à comprendre davantage sa miséricorde envers les personnes qui se repentent.",
    "lessonPoints": [
      "Obéissance : après avoir essayé de fuir, Jonas a accompli la mission reçue.",
      "Humilité : il a dû corriger son point de vue sur la miséricorde de Jéhovah.",
      "Miséricorde : le récit montre que Jéhovah se soucie des personnes et leur laisse la possibilité de se repentir."
    ],
    "keyReading": "Jonas 1:1-17 ; 2:1-10 ; 3:1-10 ; 4:1-11",
    "location": "Joppé, Ninive et les environs.",
    "relationshipWithJehovah": "Yona fuit d’abord sa mission, mais Jéhovah lui donne une nouvelle occasion et lui enseigne la miséricorde.",
    "didYouKnow": "Il prie depuis l’intérieur du grand poisson.",
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
    "studyFocus": "Saül a commencé son règne avec des qualités appréciables, mais sa désobéissance répétée aux instructions de Jéhovah a eu de graves conséquences.",
    "lessonPoints": [
      "Obéissance : les instructions de Jéhovah ne doivent pas être remplacées par nos propres raisonnements.",
      "Humilité : rechercher l’approbation des humains peut conduire à de mauvais choix.",
      "Persévérance dans le bien : son récit montre l’importance de rester fidèle à Jéhovah jusqu’au bout."
    ],
    "keyReading": "1 Samuel 8:4-22 ; 9:15-10:27 ; 15:1-35",
    "location": "Guilgal, Rama et le territoire d’Israël.",
    "relationshipWithJehovah": "Saül commence avec l’approbation de Jéhovah, mais son désordre et sa désobéissance répétée lui font perdre sa faveur.",
    "didYouKnow": "Saül est le premier roi humain établi sur Israël à la demande du peuple.",
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
    "studyFocus": "Manoah et sa femme ont reçu des instructions concernant la naissance et l’éducation de Samson et ont recherché la direction de Jéhovah.",
    "lessonPoints": [
      "Prière : Manoah a demandé à Jéhovah de guider les parents dans l’éducation de leur fils.",
      "Confiance : ils ont pris au sérieux les instructions reçues.",
      "Famille : leur récit met en valeur l’importance de chercher la direction de Jéhovah pour les responsabilités familiales."
    ],
    "keyReading": "Juges 13:1-25",
    "location": "Tsora et les environs.",
    "relationshipWithJehovah": "Manoah prie Jéhovah pour obtenir des directives concernant l’enfant promis et prend au sérieux les instructions reçues.",
    "didYouKnow": "Il est le père de Samson.",
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
    "studyFocus": "Zéphania a proclamé les avertissements de Jéhovah contre le mal tout en encourageant les humbles à rechercher Jéhovah.",
    "lessonPoints": [
      "Courage : transmettre fidèlement le message de Jéhovah même lorsqu’il contient des avertissements.",
      "Humilité : rechercher Jéhovah et la justice plutôt que suivre les pratiques corrompues autour de soi.",
      "Espérance : le message prophétique montre que Jéhovah peut préserver un peuple humble."
    ],
    "keyReading": "Sophonie 1:1-18 ; 2:1-3 ; 3:9-20",
    "location": "Juda et Jérusalem.",
    "relationshipWithJehovah": "Sophonie avertit contre l’infidélité et encourage les humbles à rechercher Jéhovah.",
    "didYouKnow": "Il prophétise aux jours de Josias, roi de Juda.",
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
    "studyFocus": "Habaqouq a exprimé ses questions à Jéhovah et a appris à attendre avec confiance l’accomplissement de la justice divine.",
    "lessonPoints": [
      "Prière sincère : il a parlé ouvertement à Jéhovah de ce qui le préoccupait.",
      "Patience : il a appris à attendre le moment fixé par Jéhovah.",
      "Foi : son exemple montre qu’on peut continuer à faire confiance à Jéhovah même lorsque l’on ne comprend pas immédiatement ses actions."
    ],
    "keyReading": "Habacuc 1:1-17 ; 2:1-20 ; 3:1-19",
    "location": "Juda.",
    "relationshipWithJehovah": "Habacuc exprime ses inquiétudes à Jéhovah puis renforce sa confiance en lui, même avant de voir la délivrance.",
    "didYouKnow": "Il termine sa prière par une expression de joie malgré des conditions difficiles.",
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
    "studyFocus": "Amos, qui n’était pas issu d’un milieu prophétique professionnel, a courageusement transmis le message de Jéhovah contre l’injustice et le faux culte.",
    "lessonPoints": [
      "Courage : Amos n’a pas laissé son statut social l’empêcher de parler au nom de Jéhovah.",
      "Justice : le vrai culte ne peut pas être séparé d’une conduite juste envers les autres.",
      "Fidélité : il a continué sa mission malgré l’opposition."
    ],
    "keyReading": "Amos 1:1 ; 7:10-17 ; 9:11-15",
    "location": "Juda et le royaume d’Israël.",
    "relationshipWithJehovah": "Amos accepte la mission de Jéhovah et dénonce courageusement l’injustice et le faux culte.",
    "didYouKnow": "Il n’était pas fils de prophète mais éleveur de moutons et cultivateur de figues sycomores.",
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
    "studyFocus": "Mika a dénoncé l’injustice et le faux culte tout en rappelant ce que Jéhovah attend de ses adorateurs.",
    "lessonPoints": [
      "Justice : Jéhovah demande à ses serviteurs d’agir avec justice.",
      "Miséricorde : la fidélité à Jéhovah implique aussi de manifester une bonté loyale.",
      "Humilité : marcher modestement avec Jéhovah est présenté comme essentiel."
    ],
    "keyReading": "Michée 1:1-9 ; 6:6-8 ; 7:18-20",
    "location": "Juda et Israël.",
    "relationshipWithJehovah": "Michée rappelle ce que Jéhovah demande : pratiquer la justice, aimer la fidélité et marcher modestement avec lui.",
    "didYouKnow": "Sa prophétie annonce que le Messie naîtrait à Bethléem.",
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
    "studyFocus": "Obadia a annoncé le jugement de Jéhovah contre Édom pour son attitude envers Juda et a montré que Jéhovah tient les nations responsables de leurs actes.",
    "lessonPoints": [
      "Responsabilité : les actions hostiles envers les serviteurs de Jéhovah ne passent pas inaperçues.",
      "Humilité : la fierté fondée sur une position élevée ou sur la sécurité apparente peut être trompeuse.",
      "Confiance : le jugement de Jéhovah donne une raison de rester fidèle même dans l’adversité."
    ],
    "keyReading": "Abdias 1-21",
    "location": "Juda et Édom.",
    "relationshipWithJehovah": "Abdias transmet fidèlement le message de Jéhovah concernant l’orgueil et la violence d’Édom.",
    "didYouKnow": "Le livre d’Abdias est le plus court des livres prophétiques de la Bible.",
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
    "studyFocus": "Joël a annoncé le jour de Jéhovah et a appelé le peuple à revenir sincèrement vers lui.",
    "lessonPoints": [
      "Repentir : revenir à Jéhovah doit venir du cœur.",
      "Urgence spirituelle : le message de Joël encourage à prendre au sérieux le jour de Jéhovah.",
      "Espérance : Jéhovah promet sa faveur à ceux qui reviennent sincèrement vers lui."
    ],
    "keyReading": "Yoël 1:1-20 ; 2:1-32 ; 3:1-21",
    "location": "Juda.",
    "relationshipWithJehovah": "Yoël appelle le peuple à revenir à Jéhovah de tout son cœur et annonce des bénédictions liées à l’effusion de l’esprit.",
    "didYouKnow": "Pierre cite Yoël 2 à la Pentecôte pour expliquer l’effusion de l’esprit saint.",
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
    "studyFocus": "Nahum a proclamé le jugement de Jéhovah contre Ninive et a montré que Jéhovah ne tolère pas indéfiniment la violence et la méchanceté.",
    "lessonPoints": [
      "Justice : Jéhovah voit les actes de violence et d’oppression.",
      "Confiance : son jugement peut rassurer ceux qui subissent l’injustice.",
      "Révérence : la puissance de Jéhovah mérite un profond respect."
    ],
    "keyReading": "Nahoum 1:1-15 ; 2:1-13 ; 3:1-19",
    "location": "Juda et Ninive.",
    "relationshipWithJehovah": "Nahoum proclame le jugement de Jéhovah contre Ninive et rappelle que Jéhovah est juste et puissant.",
    "didYouKnow": "Son message est particulièrement lié à la chute de Ninive, capitale assyrienne.",
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
    "studyFocus": "Zacharie le prêtre — père de Jean le Baptiseur",
    "lessonPoints": [
      "Foi dans les promesses",
      "Obéissance",
      "Reconnaissance"
    ],
    "keyReading": "Luc 1:5-25,57-79",
    "location": "Jérusalem et la région montagneuse de Judée.",
    "relationshipWithJehovah": "Il servait régulièrement comme prêtre. Après la naissance de Jean, il reconnaît publiquement l’action de Jéhovah et prophétise sur le rôle futur de son fils.",
    "didYouKnow": "Zekaria appartenait à la division sacerdotale d’Abiya, l’une des divisions organisées pour assurer le service au temple.",
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
    "identity": "Zekaria était prêtre de la division d’Abiya, mari d’Élisabeth et père de Jean le Baptiseur.",
    "era": "Juste avant et au début du ministère terrestre de Jésus",
    "familyAndEntourage": [
      "Élisabeth",
      "Jean le Baptiseur",
      "Gabriel",
      "Marie"
    ],
    "bibleAccount": [
      "Il accomplit son service sacerdotal au temple.",
      "L’ange Gabriel lui annonce la naissance d’un fils.",
      "Après avoir exprimé des doutes, il reste muet jusqu’à la naissance de Jean.",
      "Il prophétise ensuite sous l’inspiration de l’esprit saint."
    ],
    "qualities": [
      "Service sacré",
      "Foi retrouvée",
      "Reconnaissance"
    ],
    "difficulties": [
      "Il a demandé un signe alors que Gabriel lui annonçait une réponse à sa prière, et il a été temporairement privé de parole."
    ]
  },
  "elizabeth": {
    "studyFocus": "Élisabeth était une femme fidèle qui a accueilli Marie avec joie et a reconnu sous inspiration le rôle particulier de l’enfant qu’elle portait.",
    "lessonPoints": [
      "Foi : elle et son mari étaient décrits comme justes devant Jéhovah.",
      "Joie : elle a accueilli Marie avec affection et reconnaissance.",
      "Humilité : elle a reconnu le privilège accordé à Marie sans jalousie."
    ],
    "keyReading": "Luc 1:5-25, 39-45, 57-66",
    "location": "Région montagneuse de Judée.",
    "relationshipWithJehovah": "Élisabeth accueille Marie et reconnaît avec joie le rôle de son enfant et celui de Jésus.",
    "didYouKnow": "Elle est une descendante d’Aaron et la mère de Jean le Baptiseur.",
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
    "identity": "Mère de Jean le Baptiseur — Élisabeth, femme de Zekaria, est décrite comme juste et devient la mère de Jean le Baptiseur.",
    "era": "Évangiles",
    "familyAndEntourage": [
      "Zekaria",
      "Jean le Baptiseur",
      "Marie"
    ],
    "bibleAccount": [
      "Reste fidèle malgré une longue période sans enfant.",
      "Accueille Marie pendant sa grossesse.",
      "Donne naissance à Jean.",
      "Reconnaît avec foi l’importance de l’enfant que porte Marie."
    ],
    "qualities": [
      "Foi",
      "Humilité",
      "Reconnaissance"
    ],
    "difficulties": []
  },
  "joseph_jesus_father": {
    "studyFocus": "Joseph, père adoptif de Jésus, était un homme juste qui a suivi les directives de Jéhovah et a protégé sa famille.",
    "lessonPoints": [
      "Obéissance : Joseph a agi rapidement selon les instructions reçues de Jéhovah.",
      "Protection : il a accepté de déplacer sa famille pour protéger Jésus.",
      "Humilité : il a assumé une responsabilité familiale exceptionnelle sans rechercher la gloire."
    ],
    "keyReading": "Matthieu 1:18-25 ; 2:13-23 ; Luc 2:1-52",
    "location": "Bethléem, Égypte, Nazareth et Jérusalem.",
    "relationshipWithJehovah": "Joseph obéit aux directives de Jéhovah concernant Marie et Jésus et protège sa famille malgré les difficultés.",
    "didYouKnow": "Il était charpentier et descendant de David.",
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
    "identity": "Charpentier et époux de Marie — Joseph protège Jésus et Marie et agit conformément aux instructions reçues dans les rêves.",
    "era": "Évangiles",
    "familyAndEntourage": [
      "Marie",
      "Jésus"
    ],
    "bibleAccount": [
      "Accepte de prendre Marie pour épouse.",
      "Protège Jésus en allant en Égypte.",
      "Retourne s’installer à Nazareth.",
      "Enseigne à Jésus son métier et l’emmène au temple avec la famille."
    ],
    "qualities": [
      "Obéissance",
      "Courage",
      "Responsabilité"
    ],
    "difficulties": []
  },
  "joseph_caiaphas": {
    "studyFocus": "Caïphe — grand prêtre au temps de Jésus",
    "lessonPoints": [
      "Danger de la pression religieuse",
      "Responsabilité",
      "Examiner les motivations"
    ],
    "keyReading": "Jean 11:47-53; 18:12-24; Matthieu 26:57-68; Actes 4:5-10",
    "location": "Jérusalem.",
    "relationshipWithJehovah": "Le récit ne présente pas Caïphe comme un homme servant fidèlement Jéhovah. Sa position religieuse élevée ne l’a pas empêché de rejeter Jésus et de participer à l’opposition contre ses disciples.",
    "didYouKnow": "Caïphe était gendre d’Anne et exerça la fonction de grand prêtre pendant une période particulièrement importante du ministère de Jésus.",
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
    "identity": "Joseph Caïphe était grand prêtre durant une partie du ministère de Jésus. Il participa aux décisions des chefs religieux qui cherchèrent à faire mourir Jésus.",
    "era": "Ministère de Jésus et premières années de la congrégation chrétienne",
    "familyAndEntourage": [
      "Anne, ancien grand prêtre et membre influent de la famille sacerdotale",
      "Le Sanhédrin",
      "Jésus",
      "Pierre et Jean"
    ],
    "bibleAccount": [
      "Il participe à la réunion du Sanhédrin concernant Jésus.",
      "Il affirme qu’il vaut mieux qu’un seul homme meure pour le peuple.",
      "Il préside l’interrogatoire de Jésus avec d’autres chefs religieux.",
      "Après la résurrection, il participe aux démarches contre les apôtres."
    ],
    "qualities": [],
    "difficulties": [
      "Il a participé à une décision injuste contre Jésus et à l’opposition envers ses disciples."
    ]
  },
  "joanna": {
    "studyFocus": "Jeanne faisait partie des femmes qui accompagnaient Jésus et les apôtres et les soutenaient matériellement.",
    "lessonPoints": [
      "Générosité : elle a utilisé ses ressources pour soutenir le ministère de Jésus.",
      "Fidélité : elle a continué à être associée aux disciples.",
      "Témoignage : elle faisait partie des femmes qui ont rapporté aux apôtres ce qu’elles avaient vu après la résurrection."
    ],
    "keyReading": "Luc 8:1-3 ; 24:1-10",
    "location": "Galilée et Jérusalem.",
    "relationshipWithJehovah": "Jeanne fait partie des femmes qui accompagnent Jésus et ses apôtres et les servent avec leurs biens.",
    "didYouKnow": "Elle était la femme de Chouza, intendant d’Hérode.",
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
    "identity": "Disciple de Jésus — Jeanne, femme de Chuza, fait partie des femmes qui accompagnent Jésus et soutiennent son ministère.",
    "era": "Évangiles",
    "familyAndEntourage": [
      "Chuza",
      "Jésus",
      "Marie Madeleine"
    ],
    "bibleAccount": [
      "Suit Jésus avec d’autres femmes.",
      "Contribue matériellement au soutien du groupe.",
      "Fait partie des femmes qui témoignent de la résurrection."
    ],
    "qualities": [
      "Générosité",
      "Fidélité"
    ],
    "difficulties": []
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
    "relationshipWithJehovah": "Parmi dix lépreux guéris, il revient glorifier Dieu et remercier Jésus, montrant une reconnaissance remarquable.",
    "didYouKnow": "Il est le seul des dix guéris à revenir remercier Jésus.",
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
    "identity": "Homme guéri par Jésus — Parmi dix lépreux guéris, un Samaritain revient remercier Jésus.",
    "era": "Évangiles",
    "familyAndEntourage": [
      "Jésus",
      "Les neuf autres lépreux"
    ],
    "bibleAccount": [
      "Crie vers Jésus avec neuf autres lépreux.",
      "Est guéri avec eux.",
      "Revient glorifier Dieu et remercier Jésus."
    ],
    "qualities": [
      "Reconnaissance",
      "Foi"
    ],
    "difficulties": []
  },
  "woman_issue_blood": {
    "studyFocus": "La femme qui souffrait de pertes de sang depuis douze ans a manifesté une foi remarquable en Jésus et a reçu une guérison.",
    "lessonPoints": [
      "Foi : elle croyait qu’un contact avec le vêtement de Jésus suffirait à l’aider.",
      "Persévérance : elle avait cherché de nombreuses solutions avant de venir à Jésus.",
      "Humilité : elle a expliqué publiquement ce qui lui était arrivé lorsque Jésus l’a interrogée."
    ],
    "keyReading": "Matthieu 9:18-26 ; Marc 5:25-34 ; Luc 8:43-48",
    "location": "Galilée, probablement près de Capharnaüm.",
    "relationshipWithJehovah": "Elle croit qu’un simple contact avec le vêtement de Jésus peut la guérir et agit malgré la foule.",
    "didYouKnow": "Elle souffrait depuis douze ans avant d’être guérie.",
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
    "identity": "Femme guérie par Jésus — Une femme malade depuis douze ans manifeste sa foi en touchant le vêtement de Jésus et est guérie.",
    "era": "Évangiles",
    "familyAndEntourage": [
      "Jésus",
      "La foule"
    ],
    "bibleAccount": [
      "Cherche de l’aide pendant de nombreuses années.",
      "S’approche de Jésus avec foi.",
      "Touche son vêtement.",
      "Reconnaît devant Jésus ce qui s’est passé."
    ],
    "qualities": [
      "Foi",
      "Persévérance",
      "Courage"
    ],
    "difficulties": []
  },
  "gerasene_man": {
    "studyFocus": "L’homme de la région des Géraséniens qui avait été libéré de l’influence démoniaque a voulu suivre Jésus, mais Jésus lui a confié une autre mission : raconter ce que Dieu avait fait pour lui.",
    "lessonPoints": [
      "Gratitude : il voulait rester avec Jésus après avoir été libéré.",
      "Obéissance : il a accepté la mission qui lui a été donnée plutôt que de choisir lui-même son service.",
      "Témoignage : il a raconté dans toute la région ce que Jésus avait fait pour lui."
    ],
    "keyReading": "Marc 5:1-20 ; Luc 8:26-39",
    "location": "Région des Géraséniens.",
    "relationshipWithJehovah": "Jésus libère cet homme de l’influence démoniaque et lui confie le témoignage de ce que Dieu a fait pour lui.",
    "didYouKnow": "Après sa guérison, il proclame dans la Décapole ce que Jésus avait fait.",
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
    "identity": "Homme délivré par Jésus — Jésus délivre un homme gravement tourmenté dans la région des Géraséniens, qui souhaite ensuite rester avec lui.",
    "era": "Évangiles",
    "familyAndEntourage": [
      "Jésus",
      "Les habitants de la Décapole"
    ],
    "bibleAccount": [
      "Vit dans un état de grande détresse.",
      "Est délivré par Jésus.",
      "Retrouve une vie normale.",
      "Annonce dans sa région ce que Jésus a fait pour lui."
    ],
    "qualities": [
      "Reconnaissance",
      "Zèle"
    ],
    "difficulties": []
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
    "relationshipWithJehovah": "Son accueil des prédicateurs et son soutien à l’activité chrétienne montrent qu’il était disposé à prendre des risques personnels pour soutenir la bonne nouvelle.",
    "didYouKnow": "Paul mentionne aussi un Jason parmi ses proches dans Romains 16:21; il n’est pas certain qu’il s’agisse du même homme que celui de Thessalonique.",
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
    "identity": "Jason était un chrétien de Thessalonique qui accueillit Paul et Silas et fut entraîné dans l’opposition déclenchée contre eux.",
    "era": "Vers 50-51 de n. è., durant le deuxième voyage missionnaire de Paul",
    "familyAndEntourage": [
      "Paul",
      "Silas",
      "Les frères de Thessalonique",
      "Les autorités de la ville"
    ],
    "bibleAccount": [
      "Il accueille Paul et Silas chez lui.",
      "Des opposants cherchent Paul et Silas dans sa maison.",
      "Jason et d’autres frères sont traînés devant les autorités.",
      "Il fournit une garantie avant leur libération."
    ],
    "qualities": [
      "Hospitalité",
      "Courage",
      "Soutien aux prédicateurs"
    ],
    "difficulties": [
      "Son hospitalité l’expose à l’hostilité d’une foule et à des accusations devant les autorités."
    ]
  },
  "onesiphorus": {
    "studyFocus": "Onésiphore a manifesté un courage et une fidélité remarquables en recherchant Paul et en le réconfortant lorsqu’il était prisonnier.",
    "lessonPoints": [
      "Courage : il n’a pas eu honte des chaînes de Paul.",
      "Persévérance : il l’a recherché avec soin jusqu’à le trouver.",
      "Réconfort : il a souvent encouragé Paul et lui a fait du bien."
    ],
    "keyReading": "2 Timothée 1:15-18 ; 4:19",
    "location": "Éphèse et Rome.",
    "relationshipWithJehovah": "Onésiphore recherche Paul et le réconforte sans avoir honte de ses chaînes.",
    "didYouKnow": "Paul prie pour que Jéhovah fasse miséricorde à sa maisonnée.",
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
    "identity": "Chrétien de l’entourage de Paul — Onésiphore aide Paul et n’a pas honte de ses chaînes.",
    "era": "Congrégation chrétienne du Ier siècle",
    "familyAndEntourage": [
      "Paul",
      "Sa maisonnée"
    ],
    "bibleAccount": [
      "Réconforte Paul.",
      "Recherche Paul avec empressement à Rome.",
      "Soutient Paul alors qu’il est emprisonné."
    ],
    "qualities": [
      "Courage",
      "Loyauté",
      "Générosité"
    ],
    "difficulties": []
  },
  "mary_mother_james": {
    "studyFocus": "Marie mère de Jacques — une disciple fidèle",
    "lessonPoints": [
      "Fidélité",
      "Courage",
      "Persévérance"
    ],
    "keyReading": "Matthieu 27:55-61; 28:1-10; Marc 15:40-47; 16:1-8",
    "location": "Galilée et Jérusalem.",
    "relationshipWithJehovah": "Sa fidélité se manifeste par son attachement à Jésus et par sa présence lors d’événements où beaucoup auraient pu avoir peur.",
    "didYouKnow": "Les Évangiles mentionnent plusieurs femmes nommées Marie; identifier précisément chacune demande donc de tenir compte de son entourage et des événements associés.",
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
    "identity": "Marie, mère de Jacques et de José, faisait partie des femmes qui accompagnaient Jésus depuis la Galilée et qui furent témoins de sa mort et de son ensevelissement.",
    "era": "Ministère terrestre de Jésus",
    "familyAndEntourage": [
      "Jacques",
      "José",
      "Jésus",
      "D’autres femmes disciples"
    ],
    "bibleAccount": [
      "Elle accompagne Jésus depuis la Galilée.",
      "Elle assiste à son exécution.",
      "Elle observe où son corps est déposé.",
      "Elle se rend au tombeau après le sabbat avec d’autres femmes."
    ],
    "qualities": [
      "Fidélité",
      "Courage",
      "Persévérance"
    ],
    "difficulties": [
      "Elle a dû assister à l’exécution de Jésus puis attendre jusqu’après le sabbat avant de retourner au tombeau."
    ]
  },
  "mary_mark_mother": {
    "studyFocus": "Marie, mère de Jean-Marc — une chrétienne hospitalière",
    "lessonPoints": [
      "Hospitalité",
      "Soutenir la congrégation",
      "Prière"
    ],
    "keyReading": "Actes 12:1-17",
    "location": "Jérusalem.",
    "relationshipWithJehovah": "Elle soutenait concrètement les chrétiens en ouvrant sa maison pour leurs réunions, ce qui montre que son attachement au vrai culte se traduisait par l’hospitalité.",
    "didYouKnow": "La maison de Marie avait une porte donnant sur la rue et une servante appelée Rhodé; cela montre qu’il s’agissait d’une maison suffisamment importante pour accueillir des réunions de disciples.",
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
    "identity": "Marie, mère de Jean Marc, était une chrétienne de Jérusalem dont la maison servait de lieu de réunion aux disciples.",
    "era": "Premières années de la congrégation chrétienne, vers 44 de n. è.",
    "familyAndEntourage": [
      "Jean Marc",
      "Pierre",
      "Barnabé",
      "Les chrétiens réunis chez elle"
    ],
    "bibleAccount": [
      "Sa maison est un lieu où de nombreux disciples se réunissent.",
      "Pierre se rend chez elle après sa libération miraculeuse de prison.",
      "La servante Rhodé répond à Pierre à la porte."
    ],
    "qualities": [
      "Hospitalité",
      "Générosité",
      "Soutien à la congrégation"
    ],
    "difficulties": [
      "Elle mettait sa maison à disposition dans une période où les disciples subissaient une persécution intense."
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
    "relationshipWithJehovah": "Paul l’appelle « notre sœur », ce qui montre qu’elle était une chrétienne reconnue au sein de la congrégation. Le texte souligne aussi l’importance de la foi et de l’amour dans son entourage chrétien.",
    "didYouKnow": "JW.org indique qu’Apphia était peut-être la femme de Philémon, mais la Bible ne l’affirme pas explicitement.",
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
    "identity": "Apphia était une chrétienne associée à Philémon et Archippe dans la lettre personnelle que Paul adressa à la maisonnée et à la congrégation qui se réunissait chez Philémon.",
    "era": "Premières décennies de la congrégation chrétienne",
    "familyAndEntourage": [
      "Philémon",
      "Archippe",
      "Onésime",
      "La congrégation réunie dans la maison de Philémon"
    ],
    "bibleAccount": [
      "Paul lui adresse directement sa lettre avec Philémon et Archippe.",
      "Elle faisait apparemment partie de la maisonnée de Philémon.",
      "Elle était liée à une congrégation qui se réunissait dans cette maison."
    ],
    "qualities": [
      "Engagement chrétien",
      "Hospitalité"
    ],
    "difficulties": [
      "Elle faisait partie d’une maisonnée confrontée au retour d’Onésime, ancien esclave de Philémon devenu chrétien."
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
    "relationshipWithJehovah": "Son service chrétien était suffisamment important pour que Paul l’encourage personnellement à le mener à bien dans le Seigneur.",
    "didYouKnow": "Archippe est cité dans deux lettres de Paul, et l’une d’elles lui adresse une exhortation directe concernant son ministère.",
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
    "identity": "Archippe était un chrétien associé à Philémon et Apphia à Colosses. Paul l’appelle « notre compagnon d’armes » et lui demande de veiller à accomplir le ministère reçu dans le Seigneur.",
    "era": "Premières décennies de la congrégation chrétienne",
    "familyAndEntourage": [
      "Philémon",
      "Apphia",
      "Onésime",
      "La congrégation de Colosses"
    ],
    "bibleAccount": [
      "Il reçoit une salutation personnelle dans la lettre à Philémon.",
      "Paul le qualifie de compagnon d’armes.",
      "Dans sa lettre aux Colossiens, Paul l’exhorte à veiller à accomplir le ministère reçu dans le Seigneur."
    ],
    "qualities": [
      "Engagement",
      "Persévérance dans le service"
    ],
    "difficulties": [
      "Paul lui rappelle la nécessité de continuer à accomplir pleinement le service qui lui avait été confié."
    ]
  },
  "john_mark": {
    "studyFocus": "Jean-Marc a connu un début de service marqué par une difficulté, mais il a ensuite retrouvé la confiance de Paul et est devenu un collaborateur utile.",
    "lessonPoints": [
      "Progrès : une erreur ou une période difficile ne détermine pas toute une vie de service.",
      "Persévérance : Jean-Marc a repris une activité missionnaire.",
      "Encouragement : Barnabas et plus tard Paul ont reconnu son utilité."
    ],
    "keyReading": "Actes 12:12,25; 13:5,13; 15:36-40; Colossiens 4:10; 2 Timothée 4:11; 1 Pierre 5:13",
    "location": "Jérusalem, Chypre et diverses régions.",
    "relationshipWithJehovah": "Son parcours montre qu’un faux pas dans le service n’empêche pas nécessairement de progresser. Plus tard, Paul lui-même le considère comme utile au ministère.",
    "didYouKnow": "Paul, qui avait refusé de l’emmener après son abandon initial, demanda plus tard expressément que Jean Marc vienne le rejoindre parce qu’il lui était utile pour le service.",
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
    "identity": "Jean Marc était un chrétien de Jérusalem, fils de Marie, cousin ou proche parent de Barnabé, et collaborateur de Paul et de Pierre. Après un abandon temporaire du service missionnaire, il redevint un compagnon utile à Paul.",
    "era": "Premières décennies de la congrégation chrétienne",
    "familyAndEntourage": [
      "Marie, sa mère",
      "Barnabé",
      "Paul",
      "Pierre",
      "Les chrétiens de Jérusalem"
    ],
    "bibleAccount": [
      "Sa maison à Jérusalem accueille des chrétiens.",
      "Il accompagne Barnabé et Paul lors d’une première partie de leur voyage missionnaire.",
      "Il les quitte ensuite et retourne à Jérusalem.",
      "Barnabé veut lui redonner une occasion, ce qui provoque un désaccord avec Paul.",
      "Plus tard, Paul le considère de nouveau comme utile au ministère."
    ],
    "qualities": [
      "Persévérance",
      "Disponibilité à servir",
      "Capacité à progresser"
    ],
    "difficulties": [
      "Il quitte Paul et Barnabé pendant leur voyage, ce qui entraîne un désaccord entre les deux hommes sur l’opportunité de l’emmener de nouveau."
    ]
  },
  "priscilla": {
    "studyFocus": "Priscille et Aquilas formaient un couple chrétien qui a collaboré étroitement avec Paul et a aidé Apollos à mieux comprendre les enseignements de Dieu.",
    "lessonPoints": [
      "Enseignement : Priscille et Aquilas ont expliqué plus précisément les enseignements à Apollos.",
      "Hospitalité : leur foyer servait au soutien de l’activité chrétienne.",
      "Collaboration : ils ont travaillé avec Paul et ont risqué leur vie pour lui."
    ],
    "keyReading": "Actes 18:1-3,18-28; Romains 16:3-5; 1 Corinthiens 16:19",
    "location": "Corinthe, Éphèse et Rome.",
    "relationshipWithJehovah": "Priscille mettait ses ressources, son foyer et ses compétences au service de la congrégation. Avec Aquilas, elle a aidé Apollos à mieux comprendre les enseignements de Dieu.",
    "didYouKnow": "La Bible mentionne toujours Priscille et Aquilas ensemble dans les passages qui les citent, et Paul les appelle ses « collaborateurs ».",
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
    "identity": "Priscille, aussi appelée Prisca, était une chrétienne mariée à Aquilas. Avec lui, elle fut collaboratrice de Paul et participa activement à l’enseignement chrétien.",
    "era": "Premières décennies de la congrégation chrétienne",
    "familyAndEntourage": [
      "Aquilas, son mari",
      "Paul",
      "Apollos",
      "Les assemblées de Corinthe, Éphèse et Rome"
    ],
    "bibleAccount": [
      "Elle et Aquilas quittent Rome après le décret de Claude.",
      "Ils travaillent avec Paul à Corinthe.",
      "À Éphèse, ils expliquent plus exactement la voie de Dieu à Apollos.",
      "Leur maison sert de lieu de réunion pour l’assemblée.",
      "Paul les appelle ses collaborateurs."
    ],
    "qualities": [
      "Hospitalité",
      "Courage",
      "Enseignement",
      "Esprit de collaboration"
    ],
    "difficulties": [
      "Le décret de Claude les oblige à quitter Rome.",
      "Paul indique qu’ils ont risqué leur vie pour lui, sans préciser l’événement exact."
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
    "relationshipWithJehovah": "La Bible ne présente pas Claudius Lysias comme un adorateur de Jéhovah. Son rôle montre néanmoins comment les circonstances et les autorités humaines ont contribué à préserver Paul pour que son témoignage se poursuive.",
    "didYouKnow": "Lysias avait acheté sa citoyenneté romaine pour une grosse somme d’argent, selon son propre témoignage à Paul.",
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
    "identity": "Claudius Lysias était le commandant militaire de la garnison romaine de Jérusalem. Il intervint lorsque Paul fut attaqué dans le temple et le protégea de la foule.",
    "era": "Vers 56-58 de n. è., durant la détention de Paul à Jérusalem",
    "familyAndEntourage": [
      "Paul",
      "Les soldats romains",
      "Le Sanhédrin",
      "Le tribun de la garnison"
    ],
    "bibleAccount": [
      "Il intervient pour arrêter Paul lorsqu’une foule le bat.",
      "Il ordonne qu’on l’attache et qu’on l’interroge.",
      "Il apprend ensuite que Paul est citoyen romain et évite de le faire fouetter.",
      "Il organise son transfert à Césarée sous escorte importante pour le protéger d’un complot."
    ],
    "qualities": [
      "Prudence administrative",
      "Respect des procédures romaines une fois la citoyenneté connue"
    ],
    "difficulties": [
      "Il se trompe d’abord sur l’identité de Paul et envisage de le faire interroger sous le fouet avant d’apprendre qu’il est citoyen romain."
    ]
  },
  "julius_centurion": {
    "studyFocus": "Julius, officier de la troupe impériale, a traité Paul avec humanité pendant son transfert vers Rome.",
    "lessonPoints": [
      "Humanité : il a permis à Paul de recevoir des soins et de l’aide de ses amis.",
      "Jugement : il a écouté Paul à plusieurs reprises pendant le voyage.",
      "Responsabilité : il devait assurer la sécurité des prisonniers dans des circonstances difficiles."
    ],
    "keyReading": "Actes 27:1-3,11,31-44",
    "location": "Césarée, mer Méditerranée et Rome.",
    "relationshipWithJehovah": "La Bible ne dit pas que Julius adorait Jéhovah. Son comportement envers Paul montre toutefois qu’il pouvait agir avec bienveillance et que Dieu a permis que Paul et les autres prisonniers soient préservés.",
    "didYouKnow": "Julius appartenait à la « cohorte impériale », et il autorisa Paul à recevoir les soins de ses amis à Sidon pendant le voyage.",
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
    "identity": "Julius était un officier romain de la cohorte impériale chargé de conduire Paul et d’autres prisonniers vers Rome.",
    "era": "Vers 59-60 de n. è., pendant le voyage de Paul vers Rome",
    "familyAndEntourage": [
      "Paul",
      "Les autres prisonniers",
      "Les soldats sous ses ordres",
      "Le capitaine du navire"
    ],
    "bibleAccount": [
      "Il embarque Paul à destination de Rome.",
      "Il traite Paul avec bienveillance et lui permet d’aller voir ses amis à Sidon.",
      "Lors de la tempête, il empêche les soldats de tuer les prisonniers.",
      "Il permet finalement à tous les passagers de rejoindre la terre après le naufrage."
    ],
    "qualities": [
      "Bienveillance",
      "Prudence",
      "Maîtrise de la situation"
    ],
    "difficulties": [
      "Il doit prendre des décisions difficiles pendant une violente tempête et après le naufrage."
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
    "keyReading": "Actes 19:29; 20:4; 27:2; Colossiens 4:10; Philémon 23-24",
    "location": "Macédoine, Éphèse et Rome.",
    "relationshipWithJehovah": "Aristarque a continué à soutenir Paul malgré les risques. Son service fidèle et sa persévérance montrent un attachement concret à l’activité chrétienne.",
    "didYouKnow": "JW.org précise qu’on ne sait pas exactement à quel titre Aristarque accompagnait Paul vers Rome; il est même possible qu’il ait été son esclave, mais le texte ne permet pas de l’affirmer.",
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
    "identity": "Aristarque était un chrétien macédonien de Thessalonique, proche collaborateur de Paul, qui l’accompagna dans plusieurs voyages et partagea même ses emprisonnements.",
    "era": "Troisième voyage missionnaire de Paul et années suivantes",
    "familyAndEntourage": [
      "Paul",
      "Gaïus le Macédonien",
      "Les chrétiens de Thessalonique",
      "Onésime et d’autres collaborateurs de Paul"
    ],
    "bibleAccount": [
      "Il est entraîné avec Gaïus au théâtre pendant l’émeute d’Éphèse.",
      "Il accompagne Paul lors de son voyage vers la Judée et en direction de Rome.",
      "À Rome, il continue de soutenir Paul et est appelé son compagnon de captivité."
    ],
    "qualities": [
      "Fidélité",
      "Courage",
      "Persévérance",
      "Esprit de sacrifice"
    ],
    "difficulties": [
      "Il a subi l’hostilité de la foule à Éphèse et a partagé les difficultés de Paul, y compris la captivité."
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
    "relationshipWithJehovah": "Son exemple montre qu’un service fidèle ne dispense pas de devoir régler rapidement les désaccords et de rechercher l’unité chrétienne.",
    "didYouKnow": "Syntyche n’est connue que par quelques lignes de Philippiens, mais Paul la présente comme une femme qui avait personnellement travaillé avec lui pour la bonne nouvelle.",
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
    "identity": "Syntyche était une chrétienne de Philippes qui avait travaillé avec Paul dans la bonne nouvelle. Elle est citée avec Évodie dans un appel à retrouver l’unité.",
    "era": "Premières décennies de la congrégation chrétienne",
    "familyAndEntourage": [
      "Évodie",
      "Paul",
      "La congrégation de Philippes"
    ],
    "bibleAccount": [
      "Elle a collaboré avec Paul dans la bonne nouvelle.",
      "Paul demande qu’elle soit du même avis qu’Évodie dans le Seigneur.",
      "Il sollicite l’aide d’un collaborateur fidèle pour les aider."
    ],
    "qualities": [
      "Zèle dans la bonne nouvelle",
      "Engagement chrétien"
    ],
    "difficulties": [
      "Un désaccord avec Évodie troublait leur unité et nécessitait une aide extérieure."
    ]
  }
};
