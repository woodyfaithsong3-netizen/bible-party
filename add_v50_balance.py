from pathlib import Path
p=Path('/mnt/data/v50audit/src/data/questions.ts')
s=p.read_text()
append=r'''

// V50 — enrichissement éditorial équilibré par catégorie.
// Les questions sont formulées originalement à partir de références bibliques,
// après recherche thématique sur JW.ORG. Aucun texte d’article n’est repris.
const v50CategoryQuizExpansion: QuizQuestion[] = [
  // BIBLE
  { id:'quiz-v50-bible-01', type:'quiz', category:'Bible', difficulty:'easy', question:'Quel livre vient immédiatement après les Psaumes ?', answers:['Proverbes','Job','Ecclésiaste','Isaïe'], correctAnswer:0, explanation:'Dans l’ordre des livres bibliques, Proverbes suit les Psaumes.', reference:'Psaume 150; Proverbes 1:1' },
  { id:'quiz-v50-bible-02', type:'quiz', category:'Bible', difficulty:'medium', question:'Quel livre raconte la reconstruction des murailles de Jérusalem sous la direction de Néhémie ?', answers:['Néhémie','Esdras','Esther','Chroniques'], correctAnswer:0, explanation:'Le livre de Néhémie décrit notamment cette reconstruction.', reference:'Néhémie 2:11-18; 6:15-16' },
  { id:'quiz-v50-bible-03', type:'quiz', category:'Bible', difficulty:'easy', question:'Quel homme a reçu de Dieu la mission de construire une arche avant le Déluge ?', answers:['Noé','Abraham','Moïse','Josué'], correctAnswer:0, explanation:'Noé a reçu des instructions précises concernant l’arche.', reference:'Genèse 6:13-22' },
  { id:'quiz-v50-bible-04', type:'quiz', category:'Bible', difficulty:'medium', question:'Quel objet était placé dans le Très-Saint du tabernacle ?', answers:['L’arche de l’Alliance','Le bassin de cuivre','La table des pains','Le chandelier'], correctAnswer:0, explanation:'L’arche se trouvait dans le Très-Saint.', reference:'Exode 25:10-22; 26:33-34' },
  { id:'quiz-v50-bible-05', type:'quiz', category:'Bible', difficulty:'medium', question:'Quel roi perse a autorisé le retour des Juifs à Jérusalem pour reconstruire le temple ?', answers:['Cyrus','Darius','Artaxerxès','Assuérus'], correctAnswer:0, explanation:'Cyrus a publié un décret permettant le retour et la reconstruction.', reference:'Esdras 1:1-4' },
  { id:'quiz-v50-bible-06', type:'quiz', category:'Bible', difficulty:'easy', question:'Quel signe a été associé à l’alliance conclue avec Noé après le Déluge ?', answers:['Un arc-en-ciel','Une colombe','Une étoile','Un nuage'], correctAnswer:0, explanation:'L’arc-en-ciel a servi de signe de cette alliance.', reference:'Genèse 9:12-16' },

  // PERSONNAGES
  { id:'quiz-v50-personnages-01', type:'quiz', category:'Personnages', difficulty:'easy', question:'Quel homme a été le père de Jean le Baptiseur ?', answers:['Zacharie','Joseph','Siméon','Nicodème'], correctAnswer:0, explanation:'Zacharie était prêtre et mari d’Élisabeth.', reference:'Luc 1:5-13' },
  { id:'quiz-v50-personnages-02', type:'quiz', category:'Personnages', difficulty:'medium', question:'Quel personnage a interprété les rêves de Pharaon annonçant sept années d’abondance puis sept années de famine ?', answers:['Joseph','Daniel','Samuel','Esdras'], correctAnswer:0, explanation:'Joseph a expliqué les rêves de Pharaon et proposé une stratégie pour les années de famine.', reference:'Genèse 41:14-36' },
  { id:'quiz-v50-personnages-03', type:'quiz', category:'Personnages', difficulty:'easy', question:'Quel jeune homme a servi auprès du prophète Éli avant de recevoir un appel de Jéhovah ?', answers:['Samuel','David','Josué','Timothée'], correctAnswer:0, explanation:'Samuel servait auprès d’Éli lorsqu’il a entendu l’appel de Jéhovah.', reference:'1 Samuel 3:1-10' },
  { id:'quiz-v50-personnages-04', type:'quiz', category:'Personnages', difficulty:'medium', question:'Quelle femme a accueilli les espions israélites à Jéricho ?', answers:['Rahab','Ruth','Déborah','Esther'], correctAnswer:0, explanation:'Rahab a caché les espions et les a aidés à repartir.', reference:'Josué 2:1-14' },
  { id:'quiz-v50-personnages-05', type:'quiz', category:'Personnages', difficulty:'medium', question:'Quel homme a accompagné Paul et Silas dans plusieurs déplacements missionnaires ?', answers:['Timothée','Caïphe','Naboth','Mardochée'], correctAnswer:0, explanation:'Timothée s’est joint à Paul et Silas après avoir été recommandé aux frères.', reference:'Actes 16:1-5' },

  // ÉVANGILES
  { id:'quiz-v50-evangiles-01', type:'quiz', category:'Évangiles', difficulty:'easy', question:'Quel apôtre était collecteur d’impôts avant de suivre Jésus ?', answers:['Matthieu','Pierre','André','Jean'], correctAnswer:0, explanation:'Matthieu était assis au bureau des impôts lorsque Jésus l’a appelé.', reference:'Matthieu 9:9' },
  { id:'quiz-v50-evangiles-02', type:'quiz', category:'Évangiles', difficulty:'easy', question:'Dans quelle ville Jésus a-t-il accompli son premier signe rapporté par Jean ?', answers:['Cana','Jérusalem','Bethléem','Béthanie'], correctAnswer:0, explanation:'À Cana, Jésus a transformé de l’eau en vin.', reference:'Jean 2:1-11' },
  { id:'quiz-v50-evangiles-03', type:'quiz', category:'Évangiles', difficulty:'medium', question:'Quel homme est venu voir Jésus de nuit pour lui poser des questions ?', answers:['Nicodème','Zachée','Jairus','Bartimée'], correctAnswer:0, explanation:'Nicodème était un pharisien et un chef des Juifs.', reference:'Jean 3:1-2' },
  { id:'quiz-v50-evangiles-04', type:'quiz', category:'Évangiles', difficulty:'medium', question:'Quel disciple a demandé à Jésus de lui montrer le Père ?', answers:['Philippe','Thomas','André','Jude'], correctAnswer:0, explanation:'Philippe a posé cette question pendant le dernier repas avec les apôtres.', reference:'Jean 14:8-10' },
  { id:'quiz-v50-evangiles-05', type:'quiz', category:'Évangiles', difficulty:'easy', question:'Qui a baptisé Jésus dans le Jourdain ?', answers:['Jean le Baptiseur','Pierre','André','Philippe'], correctAnswer:0, explanation:'Jean le Baptiseur a baptisé Jésus.', reference:'Matthieu 3:13-17' },

  // ROIS & PROPHÈTES
  { id:'quiz-v50-rois-01', type:'quiz', category:'Rois & prophètes', difficulty:'easy', question:'Quel roi a demandé à Dieu du discernement pour gouverner le peuple ?', answers:['Salomon','Saül','David','Josias'], correctAnswer:0, explanation:'Salomon a demandé un cœur obéissant et du discernement.', reference:'1 Rois 3:5-12' },
  { id:'quiz-v50-rois-02', type:'quiz', category:'Rois & prophètes', difficulty:'medium', question:'Quel prophète a affronté les prophètes de Baal au mont Carmel ?', answers:['Élie','Élisée','Nathan','Jérémie'], correctAnswer:0, explanation:'Élie a lancé ce défi au mont Carmel.', reference:'1 Rois 18:19-39' },
  { id:'quiz-v50-rois-03', type:'quiz', category:'Rois & prophètes', difficulty:'medium', question:'Quel roi a fait lire le livre de la Loi retrouvé pendant les réparations du temple ?', answers:['Josias','Manassé','Roboam','Achaz'], correctAnswer:0, explanation:'Le livre de la Loi a été retrouvé pendant le règne de Josias.', reference:'2 Rois 22:8-13' },
  { id:'quiz-v50-rois-04', type:'quiz', category:'Rois & prophètes', difficulty:'medium', question:'Quel prophète a dénoncé le péché de David au moyen d’une histoire sur un riche et une brebis ?', answers:['Nathan','Samuel','Gad','Élie'], correctAnswer:0, explanation:'Nathan a raconté cette illustration pour amener David à reconnaître sa faute.', reference:'2 Samuel 12:1-13' },
  { id:'quiz-v50-rois-05', type:'quiz', category:'Rois & prophètes', difficulty:'hard', question:'Quel prophète a reçu une vision d’une vallée remplie d’ossements desséchés ?', answers:['Ézéchiel','Daniel','Jérémie','Ésaïe'], correctAnswer:0, explanation:'Ézéchiel a reçu cette vision symbolique.', reference:'Ézéchiel 37:1-14' },

  // ACTES
  { id:'quiz-v50-actes-01', type:'quiz', category:'Actes', difficulty:'easy', question:'Quel homme a été choisi pour remplacer Judas Iscariote parmi les apôtres ?', answers:['Matthias','Barnabé','Silas','Étienne'], correctAnswer:0, explanation:'Matthias a été choisi après la prière et la présentation de deux candidats.', reference:'Actes 1:21-26' },
  { id:'quiz-v50-actes-02', type:'quiz', category:'Actes', difficulty:'easy', question:'Quel homme a été libéré de prison par un ange alors que la congrégation priait ?', answers:['Pierre','Paul','Silas','Jean'], correctAnswer:0, explanation:'Pierre a été libéré de prison par un ange.', reference:'Actes 12:5-11' },
  { id:'quiz-v50-actes-03', type:'quiz', category:'Actes', difficulty:'medium', question:'Quelle femme vendait des articles de pourpre à Philippes ?', answers:['Lydie','Priscille','Damaris','Tabitha'], correctAnswer:0, explanation:'Lydie était marchande d’articles de pourpre.', reference:'Actes 16:14-15' },
  { id:'quiz-v50-actes-04', type:'quiz', category:'Actes', difficulty:'medium', question:'Quel homme a demandé : « Que dois-je faire pour être sauvé ? » après le tremblement de terre à Philippes ?', answers:['Le geôlier','Corneille','Eutique','Sergius Paulus'], correctAnswer:0, explanation:'Le geôlier de Philippes a posé cette question à Paul et Silas.', reference:'Actes 16:25-34' },
  { id:'quiz-v50-actes-05', type:'quiz', category:'Actes', difficulty:'medium', question:'Quel homme a été lapidé après avoir témoigné devant le Sanhédrin ?', answers:['Étienne','Barnabé','Philippe','Matthias'], correctAnswer:0, explanation:'Étienne a été lapidé après son témoignage.', reference:'Actes 7:54-60' },
  { id:'quiz-v50-actes-06', type:'quiz', category:'Actes', difficulty:'medium', question:'Quel centurion a reçu Pierre à Césarée ?', answers:['Corneille','Jules','Festus','Sergius Paulus'], correctAnswer:0, explanation:'Corneille a fait venir Pierre après avoir reçu des instructions.', reference:'Actes 10:1-8, 24-48' },
];

const v50CategoryTrueFalseExpansion: TrueFalseQuestion[] = [
  { id:'tf-v50-bible-01', type:'truefalse', category:'Bible', difficulty:'easy', statement:'Le livre de Néhémie raconte la reconstruction des murailles de Jérusalem.', answer:true, explanation:'Néhémie a organisé et dirigé cette reconstruction malgré l’opposition.', reference:'Néhémie 2:11-18; 6:15-16' },
  { id:'tf-v50-bible-02', type:'truefalse', category:'Bible', difficulty:'easy', statement:'L’arche de l’Alliance se trouvait dans le Très-Saint du tabernacle.', answer:true, explanation:'L’arche était placée derrière le rideau séparant le Très-Saint.', reference:'Exode 26:33-34' },
  { id:'tf-v50-bible-03', type:'truefalse', category:'Bible', difficulty:'medium', statement:'Cyrus a interdit aux Juifs de retourner à Jérusalem.', answer:false, explanation:'Cyrus a au contraire autorisé leur retour et la reconstruction du temple.', reference:'Esdras 1:1-4' },
  { id:'tf-v50-bible-04', type:'truefalse', category:'Bible', difficulty:'easy', statement:'Noé a reçu des instructions pour construire une arche avant le Déluge.', answer:true, explanation:'Le récit de la Genèse décrit les instructions données à Noé.', reference:'Genèse 6:13-22' },
  { id:'tf-v50-bible-05', type:'truefalse', category:'Bible', difficulty:'medium', statement:'L’arc-en-ciel est présenté comme un signe de l’alliance avec Noé.', answer:true, explanation:'Dieu a associé l’arc-en-ciel à cette alliance.', reference:'Genèse 9:12-16' },
  { id:'tf-v50-bible-06', type:'truefalse', category:'Bible', difficulty:'medium', statement:'Le livre de Ruth raconte principalement la vie d’un roi d’Israël.', answer:false, explanation:'Ruth raconte notamment l’histoire de Ruth, Noémi et Boaz.', reference:'Ruth 1–4' },
  { id:'tf-v50-personnages-01', type:'truefalse', category:'Personnages', difficulty:'easy', statement:'Samuel a commencé à servir au sanctuaire alors qu’il était encore jeune.', answer:true, explanation:'Samuel servait auprès d’Éli lorsqu’il a reçu son appel.', reference:'1 Samuel 3:1-10' },
  { id:'tf-v50-personnages-02', type:'truefalse', category:'Personnages', difficulty:'easy', statement:'Rahab habitait à Jérusalem.', answer:false, explanation:'Rahab habitait à Jéricho.', reference:'Josué 2:1' },
  { id:'tf-v50-personnages-03', type:'truefalse', category:'Personnages', difficulty:'medium', statement:'Joseph a interprété les rêves de Pharaon concernant sept années d’abondance et sept années de famine.', answer:true, explanation:'Joseph a expliqué les rêves et proposé une organisation des réserves.', reference:'Genèse 41:14-36' },
  { id:'tf-v50-personnages-04', type:'truefalse', category:'Personnages', difficulty:'easy', statement:'Zacharie était le père de Jean le Baptiseur.', answer:true, explanation:'Zacharie et Élisabeth étaient les parents de Jean.', reference:'Luc 1:5-13, 57-66' },
  { id:'tf-v50-personnages-05', type:'truefalse', category:'Personnages', difficulty:'medium', statement:'Timothée a accompagné Paul dans son activité chrétienne.', answer:true, explanation:'Timothée s’est joint à Paul et Silas.', reference:'Actes 16:1-5' },
  { id:'tf-v50-evangiles-01', type:'truefalse', category:'Évangiles', difficulty:'easy', statement:'Matthieu était collecteur d’impôts lorsqu’il a été appelé par Jésus.', answer:true, explanation:'Jésus l’a appelé alors qu’il était assis au bureau des impôts.', reference:'Matthieu 9:9' },
  { id:'tf-v50-evangiles-02', type:'truefalse', category:'Évangiles', difficulty:'easy', statement:'Le premier signe de Jésus rapporté par Jean a eu lieu à Cana.', answer:true, explanation:'Jésus y a transformé de l’eau en vin.', reference:'Jean 2:1-11' },
  { id:'tf-v50-evangiles-03', type:'truefalse', category:'Évangiles', difficulty:'medium', statement:'Nicodème est venu voir Jésus pendant la nuit.', answer:true, explanation:'Jean précise qu’il est venu de nuit.', reference:'Jean 3:1-2' },
  { id:'tf-v50-evangiles-04', type:'truefalse', category:'Évangiles', difficulty:'easy', statement:'Jean le Baptiseur a baptisé Jésus.', answer:true, explanation:'Jésus a demandé à Jean de le baptiser dans le Jourdain.', reference:'Matthieu 3:13-17' },
  { id:'tf-v50-evangiles-05', type:'truefalse', category:'Évangiles', difficulty:'medium', statement:'Philippe a demandé à Jésus de lui montrer le Père.', answer:true, explanation:'Philippe a posé cette question à Jésus.', reference:'Jean 14:8-10' },
  { id:'tf-v50-rois-01', type:'truefalse', category:'Rois & prophètes', difficulty:'easy', statement:'Salomon a demandé du discernement pour gouverner le peuple.', answer:true, explanation:'Salomon a demandé un cœur obéissant et du discernement.', reference:'1 Rois 3:5-12' },
  { id:'tf-v50-rois-02', type:'truefalse', category:'Rois & prophètes', difficulty:'easy', statement:'Élie a affronté les prophètes de Baal au mont Carmel.', answer:true, explanation:'Le récit de 1 Rois 18 décrit cette confrontation.', reference:'1 Rois 18:19-39' },
  { id:'tf-v50-rois-03', type:'truefalse', category:'Rois & prophètes', difficulty:'medium', statement:'Josias était roi de Juda lorsque le livre de la Loi a été retrouvé.', answer:true, explanation:'Le livre a été retrouvé pendant les réparations du temple sous son règne.', reference:'2 Rois 22:1-13' },
  { id:'tf-v50-rois-04', type:'truefalse', category:'Rois & prophètes', difficulty:'medium', statement:'Nathan était le prophète qui a repris David au sujet de son péché.', answer:true, explanation:'Nathan a utilisé une illustration pour aider David à reconnaître sa faute.', reference:'2 Samuel 12:1-13' },
  { id:'tf-v50-rois-05', type:'truefalse', category:'Rois & prophètes', difficulty:'hard', statement:'Ézéchiel a reçu une vision d’une vallée remplie d’ossements desséchés.', answer:true, explanation:'Cette vision est rapportée en Ézéchiel chapitre 37.', reference:'Ézéchiel 37:1-14' },
  { id:'tf-v50-actes-01', type:'truefalse', category:'Actes', difficulty:'easy', statement:'Matthias a été choisi pour remplacer Judas Iscariote.', answer:true, explanation:'Il a été choisi après la prière et la présentation de deux hommes.', reference:'Actes 1:21-26' },
  { id:'tf-v50-actes-02', type:'truefalse', category:'Actes', difficulty:'easy', statement:'Pierre a été libéré de prison par un ange.', answer:true, explanation:'Un ange l’a fait sortir pendant que les chrétiens priaient.', reference:'Actes 12:5-11' },
  { id:'tf-v50-actes-03', type:'truefalse', category:'Actes', difficulty:'medium', statement:'Lydie vendait des articles de pourpre à Philippes.', answer:true, explanation:'Lydie était marchande d’articles de pourpre.', reference:'Actes 16:14-15' },
  { id:'tf-v50-actes-04', type:'truefalse', category:'Actes', difficulty:'medium', statement:'Étienne a été lapidé après avoir témoigné devant le Sanhédrin.', answer:true, explanation:'Le récit d’Actes 7 décrit sa mort après son témoignage.', reference:'Actes 7:54-60' },
  { id:'tf-v50-actes-05', type:'truefalse', category:'Actes', difficulty:'medium', statement:'Corneille était un centurion.', answer:true, explanation:'Actes le présente comme centurion de la troupe dite italienne.', reference:'Actes 10:1' },
  { id:'tf-v50-actes-06', type:'truefalse', category:'Actes', difficulty:'medium', statement:'Le geôlier de Philippes a demandé à Paul et Silas comment être sauvé.', answer:true, explanation:'Il a posé cette question après le tremblement de terre.', reference:'Actes 16:25-34' },
];

const v50CategoryMysteryExpansion: MysteryQuestion[] = [
  { id:'mystery-v50-bible-01', type:'mystery', category:'Bible', difficulty:'easy', answer:'Noé', clues:['Arche','Déluge','Corbeau et colombe'], explanation:'Le personnage recherché est Noé.', reference:'Genèse 6–9' },
  { id:'mystery-v50-bible-02', type:'mystery', category:'Bible', difficulty:'medium', answer:'Néhémie', clues:['Murailles','Jérusalem','Gouverneur'], explanation:'Le personnage recherché est Néhémie.', reference:'Néhémie 2–6' },
  { id:'mystery-v50-bible-03', type:'mystery', category:'Bible', difficulty:'medium', answer:'Cyrus', clues:['Roi perse','Retour des Juifs','Décret'], explanation:'Le personnage recherché est Cyrus.', reference:'Esdras 1:1-4' },
  { id:'mystery-v50-evangiles-01', type:'mystery', category:'Évangiles', difficulty:'easy', answer:'Matthieu', clues:['Impôts','Apôtre','Évangile'], explanation:'Le personnage recherché est Matthieu.', reference:'Matthieu 9:9' },
  { id:'mystery-v50-evangiles-02', type:'mystery', category:'Évangiles', difficulty:'medium', answer:'Nicodème', clues:['Pharisien','Nuit','Jésus'], explanation:'Le personnage recherché est Nicodème.', reference:'Jean 3:1-2' },
  { id:'mystery-v50-evangiles-03', type:'mystery', category:'Évangiles', difficulty:'easy', answer:'Jean le Baptiseur', clues:['Jourdain','Désert','Baptême'], explanation:'Le personnage recherché est Jean le Baptiseur.', reference:'Matthieu 3:1-17' },
  { id:'mystery-v50-rois-01', type:'mystery', category:'Rois & prophètes', difficulty:'medium', answer:'Élie', clues:['Carmel','Baal','Corbeaux'], explanation:'Le personnage recherché est Élie.', reference:'1 Rois 17–18' },
  { id:'mystery-v50-rois-02', type:'mystery', category:'Rois & prophètes', difficulty:'medium', answer:'Josias', clues:['Roi de Juda','Loi retrouvée','Temple'], explanation:'Le personnage recherché est Josias.', reference:'2 Rois 22–23' },
  { id:'mystery-v50-rois-03', type:'mystery', category:'Rois & prophètes', difficulty:'hard', answer:'Ézéchiel', clues:['Prophète','Exil','Ossements'], explanation:'Le personnage recherché est Ézéchiel.', reference:'Ézéchiel 1; 37' },
  { id:'mystery-v50-actes-01', type:'mystery', category:'Actes', difficulty:'easy', answer:'Lydie', clues:['Philippes','Pourpre','Hospitalité'], explanation:'Le personnage recherché est Lydie.', reference:'Actes 16:11-15' },
  { id:'mystery-v50-actes-02', type:'mystery', category:'Actes', difficulty:'medium', answer:'Corneille', clues:['Centurion','Césarée','Pierre'], explanation:'Le personnage recherché est Corneille.', reference:'Actes 10:1-48' },
  { id:'mystery-v50-actes-03', type:'mystery', category:'Actes', difficulty:'medium', answer:'Étienne', clues:['Sept hommes','Témoignage','Lapidation'], explanation:'Le personnage recherché est Étienne.', reference:'Actes 6–7' },
  { id:'mystery-v50-personnages-01', type:'mystery', category:'Personnages', difficulty:'easy', answer:'Rahab', clues:['Jéricho','Espions','Cordon rouge'], explanation:'Le personnage recherché est Rahab.', reference:'Josué 2:1-21; 6:22-25' },
  { id:'mystery-v50-personnages-02', type:'mystery', category:'Personnages', difficulty:'medium', answer:'Joseph', clues:['Frères','Égypte','Rêves'], explanation:'Le personnage recherché est Joseph.', reference:'Genèse 37; 41' },
  { id:'mystery-v50-personnages-03', type:'mystery', category:'Personnages', difficulty:'easy', answer:'Samuel', clues:['Enfant','Éli','Prophète'], explanation:'Le personnage recherché est Samuel.', reference:'1 Samuel 3:1-10' },
];

const v50CategoryTimesUpExpansion: TimesUpQuestion[] = [
  { id:'timesup-v50-bible-01', type:'timesup', category:'Bible', difficulty:'easy', answer:'Noé', clues:['Arche','Déluge','Alliance'], reference:'Genèse 6–9' },
  { id:'timesup-v50-bible-02', type:'timesup', category:'Bible', difficulty:'medium', answer:'Néhémie', clues:['Murailles','Jérusalem','Reconstruction'], reference:'Néhémie 2–6' },
  { id:'timesup-v50-evangiles-01', type:'timesup', category:'Évangiles', difficulty:'easy', answer:'Matthieu', clues:['Impôts','Apôtre','Lévi'], reference:'Matthieu 9:9' },
  { id:'timesup-v50-evangiles-02', type:'timesup', category:'Évangiles', difficulty:'medium', answer:'Nicodème', clues:['Pharisien','Nuit','Jésus'], reference:'Jean 3:1-2' },
  { id:'timesup-v50-rois-01', type:'timesup', category:'Rois & prophètes', difficulty:'medium', answer:'Élie', clues:['Carmel','Baal','Corbeaux'], reference:'1 Rois 17–18' },
  { id:'timesup-v50-rois-02', type:'timesup', category:'Rois & prophètes', difficulty:'medium', answer:'Josias', clues:['Roi','Loi','Temple'], reference:'2 Rois 22–23' },
  { id:'timesup-v50-actes-01', type:'timesup', category:'Actes', difficulty:'easy', answer:'Lydie', clues:['Philippes','Pourpre','Hospitalité'], reference:'Actes 16:11-15' },
  { id:'timesup-v50-actes-02', type:'timesup', category:'Actes', difficulty:'medium', answer:'Corneille', clues:['Centurion','Césarée','Pierre'], reference:'Actes 10:1-48' },
  { id:'timesup-v50-personnages-01', type:'timesup', category:'Personnages', difficulty:'easy', answer:'Rahab', clues:['Jéricho','Espions','Cordon rouge'], reference:'Josué 2:1-21' },
  { id:'timesup-v50-personnages-02', type:'timesup', category:'Personnages', difficulty:'medium', answer:'Joseph', clues:['Frères','Égypte','Rêves'], reference:'Genèse 37; 41' },
];

quizQuestions.push(...v50CategoryQuizExpansion);
trueFalseQuestions.push(...v50CategoryTrueFalseExpansion);
mysteryQuestions.push(...v50CategoryMysteryExpansion);
timesUpQuestions.push(...v50CategoryTimesUpExpansion);
'''
p.write_text(s+append)
