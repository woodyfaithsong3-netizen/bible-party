import { jwV54Quiz, jwV54TrueFalse, jwV54Mystery, jwV54TimesUp } from './jw_enrichment_v54';
import { jwV53Quiz, jwV53TrueFalse, jwV53Mystery, jwV53TimesUp, jwV53Quotes, jwV53Chronology, jwV53Intruders } from './jw_enrichment_v53';
import { jwV56Mystery, jwV56Challenges, jwV56Quotes, jwV56Chronology, jwV56Intruders, jwV56TimesUp } from './jw_enrichment_v56';
import { jwV55Mystery, jwV55Quotes, jwV55Chronology, jwV55Intruders, jwV55Challenges } from './jw_enrichment_v55';
import { jwV57Challenges, jwV57Quotes, jwV57Chronology, jwV57Intruders, jwV57TimesUp } from './jw_enrichment_v57';
import { jwV58Quiz, jwV58Mystery, jwV58TrueFalse } from './jw_enrichment_v58';
import { jwV61Quote, jwV61Forbidden } from './jw_enrichment_v61';
import { Challenge, ChronologyQuestion, Difficulty, IntruderQuestion, MysteryQuestion, QuizQuestion, QuoteQuestion, TimesUpQuestion, TrueFalseQuestion } from '@/types';
import { categoryQuizExpansion, categoryTrueFalseExpansion, categoryMysteryExpansion, categoryTimesUpExpansion, categoryQuoteExpansion, categoryChronologyExpansion, categoryIntruderExpansion, categoryChallengeExpansion } from './jwCategories';

/**
 * Banque éditoriale V15.
 * Les faits sont formulés de façon originale et vérifiables à partir des références bibliques.
 * Les références pointent vers la Bible disponible sur JW.org ; aucun texte d'article ou de page JW.org n'est copié.
 */
const facts: Array<[string, string[], number, string, string, string]> = [
  ['Qui a construit l’arche avant le Déluge ?', ['Noé','Moïse','Abraham','Josué'], 0, 'Noé a construit l’arche en suivant les instructions de Dieu.', 'Genèse 6:14-22', 'Histoire biblique'],
  ['Quel était le métier de David lorsqu’il était encore jeune ?', ['Pêcheur','Berger','Charpentier','Forgeron'], 1, 'David gardait les moutons de son père Jessé.', '1 Samuel 16:11; 17:34', 'Personnages'],
  ['Qui a interprété les rêves de Pharaon concernant les années à venir ?', ['Joseph','Daniel','Samuel','Esdras'], 0, 'Joseph a expliqué les rêves de Pharaon et a proposé une organisation pour faire face à la famine.', 'Genèse 41:14-16, 28-41', 'Personnages'],
  ['Qui a reçu la Loi au mont Sinaï ?', ['Josué','Aaron','Moïse','Élie'], 2, 'Moïse a reçu les paroles de Dieu au mont Sinaï.', 'Exode 19:20; 20:1-17', 'Bible'],
  ['Qui a été choisi comme premier roi d’Israël ?', ['David','Saül','Salomon','Roboam'], 1, 'Saül a été choisi et oint comme premier roi d’Israël.', '1 Samuel 10:1, 24', 'Rois & prophètes'],
  ['Comment s’appelait la mère de Samuel ?', ['Anne','Ruth','Déborah','Miriam'], 0, 'Anne a prié pour avoir un fils et l’a appelé Samuel.', '1 Samuel 1:9-20', 'Personnages'],
  ['Quel fils de David lui a succédé sur le trône ?', ['Absalom','Salomon','Joab','Ézéchias'], 1, 'Salomon est devenu roi après David.', '1 Rois 2:10-12', 'Rois & prophètes'],
  ['Quel prophète a organisé une confrontation avec les prophètes de Baal au mont Carmel ?', ['Élisée','Élie','Isaïe','Jérémie'], 1, 'Élie a proposé l’épreuve du mont Carmel pour montrer qui était le vrai Dieu.', '1 Rois 18:19-39', 'Rois & prophètes'],
  ['Quel prophète a été envoyé à Ninive après avoir tenté de fuir sa mission ?', ['Jonas','Amos','Nahum','Habacuc'], 0, 'Jonas a d’abord fui, puis a finalement annoncé le message à Ninive.', 'Jonas 1:1-3; 3:1-5', 'Rois & prophètes'],
  ['Quel serviteur de Dieu a été jeté dans une fosse aux lions ?', ['Daniel','David','Samson','Pierre'], 0, 'Daniel a été jeté dans la fosse, mais Dieu l’a protégé.', 'Daniel 6:16-23', 'Personnages'],
  ['Quelle femme a choisi de rester avec Noémi après la mort de son mari ?', ['Ruth','Esther','Abigaïl','Lydie'], 0, 'Ruth a décidé de rester avec Noémi et d’adorer son Dieu.', 'Ruth 1:14-17', 'Personnages'],
  ['Quelle reine est intervenue courageusement en faveur de son peuple ?', ['Esther','Miriam','Déborah','Houlda'], 0, 'Esther a pris le risque de parler au roi afin de demander la protection de son peuple.', 'Esther 4:13-16; 7:3-4', 'Personnages'],
  ['Qui est devenu le premier roi du royaume des dix tribus après la division du royaume ?', ['Jéroboam','Roboam','Saül','Omri'], 0, 'Jéroboam a été établi roi sur les dix tribus d’Israël.', '1 Rois 12:20', 'Rois & prophètes'],
  ['Sous quel roi le premier temple de Jérusalem a-t-il été construit ?', ['David','Salomon','Ézéchias','Zorobabel'], 1, 'David a préparé beaucoup de choses, mais Salomon a construit le temple.', '1 Rois 5:15-19; 6:1, 14', 'Rois & prophètes'],
  ['Comment s’appelait le père de David ?', ['Jessé','Saül','Boaz','Éli'], 0, 'Jessé était le père de David.', '1 Samuel 16:1, 10-13', 'Personnages'],
  ['Qui a épousé Ruth après avoir accepté son rôle de rédempteur ?', ['Boaz','Jessé','Éli','Nabal'], 0, 'Boaz a épousé Ruth et ils ont eu un fils nommé Obed.', 'Ruth 4:9-13, 17', 'Personnages'],
  ['Quel homme a reçu l’ordre de quitter son pays et sa parenté ?', ['Abraham','Moïse','Samuel','Josué'], 0, 'Abraham a quitté son pays conformément à l’instruction de Dieu.', 'Genèse 12:1-4', 'Personnages'],
  ['Comment s’appelait le frère de Moïse ?', ['Aaron','Caleb','Josué','Éléazar'], 0, 'Aaron était le frère de Moïse et de Miriam.', 'Exode 4:14-16; 6:20', 'Personnages'],
  ['Comment s’appelait la sœur de Moïse et d’Aaron ?', ['Miriam','Ruth','Anne','Déborah'], 0, 'Miriam est présentée comme prophétesse et comme sœur d’Aaron et de Moïse.', 'Exode 15:20; Nombres 26:59', 'Personnages'],
  ['Qui a été désigné pour conduire Israël après la mort de Moïse ?', ['Josué','Caleb','Aaron','Éléazar'], 0, 'Josué a reçu la responsabilité de conduire Israël après Moïse.', 'Josué 1:1-6', 'Personnages'],
  ['Quel juge était particulièrement connu pour sa force ?', ['Gédéon','Samson','Barak','Jephté'], 1, 'La force exceptionnelle de Samson lui venait de Jéhovah ; il était naziréen dès sa naissance.', 'Juges 13:5, 24-25', 'Rois & prophètes'],
  ['Qui a vaincu Goliath ?', ['David','Saül','Jonathan','Joab'], 0, 'David a frappé Goliath avec une pierre lancée avec sa fronde.', '1 Samuel 17:45-50', 'Personnages'],
  ['Quel apôtre était auparavant collecteur d’impôts ?', ['Matthieu','Jean','André','Thomas'], 0, 'Jésus a appelé Matthieu alors qu’il était assis au bureau des impôts.', 'Matthieu 9:9', 'Évangiles'],
  ['Quel disciple était aussi appelé Didyme ?', ['Thomas','Philippe','Jude','Barthélémy'], 0, 'Jean identifie Thomas par le nom Didyme.', 'Jean 11:16; 20:24', 'Évangiles'],
  ['Quel apôtre a renié Jésus trois fois ?', ['Pierre','Jean','Jacques','Thomas'], 0, 'Pierre a renié Jésus trois fois avant que le coq chante.', 'Matthieu 26:69-75', 'Évangiles'],
];


const extraFacts: Array<[string, string[], number, string, string, string]> = [
  ['Quel homme a reçu le nom d’Israël après une nuit de lutte ?', ['Jacob','Isaac','Ésaü','Joseph'], 0, 'Jacob a reçu le nom Israël après cet épisode.', 'Genèse 32:24-28', 'Personnages'],
  ['Qui a vendu son droit de fils aîné pour un repas ?', ['Jacob','Ésaü','Joseph','Ruben'], 1, 'Ésaü a vendu son droit de fils aîné à Jacob.', 'Genèse 25:29-34', 'Personnages'],
  ['Qui était la femme qu’Abraham a envoyée chercher pour Isaac ?', ['Rébecca','Rachel','Léa','Abigaïl'], 0, 'Rébecca a été choisie comme femme pour Isaac.', 'Genèse 24:10-20, 58-67', 'Personnages'],
  ['Quel fils de Joseph a reçu la bénédiction la plus importante de Jacob sur son lit de mort ?', ['Éphraïm','Manassé','Ruben','Juda'], 0, 'Jacob a béni Éphraïm et Manassé, mais a placé Éphraïm avant son frère et lui a accordé la plus grande bénédiction.', 'Genèse 48:13-20', 'Personnages'],
  ['Quel homme a interprété des rêves alors qu’il était prisonnier en Égypte ?', ['Joseph','Moïse','Daniel','Néhémie'], 0, 'Joseph a interprété les rêves de deux serviteurs de Pharaon.', 'Genèse 40:1-23', 'Personnages'],
  ['Quel patriarche a été enterré dans la grotte de Makpéla ?', ['Abraham','Moïse','Samuel','David'], 0, 'Abraham a été enterré avec Sara dans la grotte de Makpéla.', 'Genèse 25:7-10', 'Personnages'],
  ['Quel signe a attiré l’attention de Moïse au début de sa mission ?', ['Un buisson en feu qui ne se consumait pas','Une colonne de feu','Un arc-en-ciel','Une pluie de cailles'], 0, 'Moïse a vu un buisson en feu qui ne brûlait pas.', 'Exode 3:1-6', 'Bible'],
  ['Quel aliment Jéhovah a-t-il fourni aux Israélites dans le désert ?', ['La manne','Les raisins','Le miel','Le blé'], 0, 'La manne est devenue la nourriture quotidienne des Israélites dans le désert.', 'Exode 16:4, 13-15', 'Histoire biblique'],
  ['Quel événement a marqué le départ des Israélites hors d’Égypte ?', ['La Pâque et la dixième plaie','La chute de Jéricho','La construction du temple','La division du royaume'], 0, 'La Pâque a précédé le départ d’Israël hors d’Égypte.', 'Exode 12:1-42', 'Histoire biblique'],
  ['Quelle mer les Israélites ont-ils traversée lors de leur sortie d’Égypte ?', ['La mer Rouge','La mer Morte','La Méditerranée','La mer de Galilée'], 0, 'Les Israélites ont traversé la mer Rouge tandis que Jéhovah ouvrait un passage.', 'Exode 14:21-31', 'Histoire biblique'],
  ['Quelle femme a caché les espions israélites à Jéricho ?', ['Rahab','Déborah','Ruth','Jaël'], 0, 'Rahab a caché les deux espions et les a aidés à repartir.', 'Josué 2:1-14', 'Personnages'],
  ['Quel lieu est tombé après que les Israélites ont marché autour de lui et sonné des trompettes ?', ['Jéricho','Jérusalem','Samarie','Sichem'], 0, 'Les murailles de Jéricho sont tombées après la marche et les cris du peuple.', 'Josué 6:1-20', 'Histoire biblique'],
  ['Quelle prophétesse jugeait Israël à l’époque de Barak ?', ['Déborah','Houlda','Miriam','Anne'], 0, 'Déborah jugeait Israël et a soutenu Barak.', 'Juges 4:4-10', 'Rois & prophètes'],
  ['Quel juge a demandé un signe avec une toison ?', ['Gédéon','Jephté','Samson','Éhoud'], 0, 'Gédéon a demandé des signes concernant la toison.', 'Juges 6:36-40', 'Rois & prophètes'],
  ['Quel homme était chef de l’armée de Jabîn ?', ['Sissera','Barak','Gédéon','Jephté'], 0, 'Sissera commandait l’armée du roi Jabîn.', 'Juges 4:2-3', 'Rois & prophètes'],
  ['Qui a montré une grande amitié envers David alors que Saül était jaloux de lui ?', ['Jonathan','Absalom','Joab','Nabal'], 0, 'Jonathan et David ont noué une profonde amitié.', '1 Samuel 18:1-4', 'Personnages'],
  ['Quelle femme a évité à David de commettre une faute grave contre Nabal ?', ['Abigaïl','Mikal','Anne','Betsabée'], 0, 'Abigaïl a parlé avec sagesse et a empêché David d’agir sous le coup de la colère.', '1 Samuel 25:14-35', 'Personnages'],
  ['Quel roi a demandé de la sagesse pour bien juger le peuple ?', ['Salomon','David','Saül','Ézéchias'], 0, 'Salomon a demandé sagesse et discernement plutôt que richesse.', '1 Rois 3:5-12', 'Rois & prophètes'],
  ['Quel prophète a été nourri par des corbeaux ?', ['Élie','Élisée','Isaïe','Jérémie'], 0, 'Jéhovah a utilisé des corbeaux pour fournir de la nourriture à Élie.', '1 Rois 17:2-6', 'Rois & prophètes'],
  ['Dans quelle ville une veuve a-t-elle accueilli Élie pendant la sécheresse ?', ['Sarepta','Jéricho','Ninive','Béthel'], 0, 'Élie s’est rendu à Sarepta, où une veuve lui a fourni de la nourriture.', '1 Rois 17:8-16', 'Rois & prophètes'],
  ['Quel prophète est devenu le successeur d’Élie ?', ['Élisée','Isaïe','Jérémie','Ézéchiel'], 0, 'Élisée a été désigné pour succéder à Élie.', '1 Rois 19:19-21', 'Rois & prophètes'],
  ['Quel Syrien a été guéri de la lèpre après s’être plongé sept fois dans le Jourdain ?', ['Naamân','Guéhazi','Sissera','Ben-Hadad'], 0, 'Naamân a suivi les instructions d’Élisée et a été guéri.', '2 Rois 5:9-14', 'Rois & prophètes'],
  ['Quel roi de Juda a fait détruire le serpent de cuivre devenu un objet de culte ?', ['Ézéchias','Josias','Josaphat','Roboam'], 0, 'Ézéchias a détruit le serpent de cuivre parce que le peuple lui offrait de l’encens.', '2 Rois 18:1-4', 'Rois & prophètes'],
  ['Quel roi a commencé à régner à huit ans ?', ['Josias','Ézéchias','Joas','Josaphat'], 0, 'Josias avait huit ans lorsqu’il est devenu roi de Juda.', '2 Rois 22:1-2', 'Rois & prophètes'],
  ['Qui a découvert le livre de la Loi lors des réparations du temple sous Josias ?', ['Hilqiya','Ézéchias','Néhémie','Esdras'], 0, 'Le prêtre en chef Hilqiya a trouvé le livre de la Loi.', '2 Rois 22:8-11', 'Rois & prophètes'],
  ['Quel roi a pris des mesures énergiques pour éliminer l’idolâtrie en Juda ?', ['Josias','Achaz','Manassé','Roboam'], 0, 'Josias a soutenu une réforme de la vraie adoration.', '2 Rois 23:4-20', 'Rois & prophètes'],
  ['Lequel de ces personnages a été jeté dans une fournaise ardente avec deux compagnons ?', ['Shadrak','Daniel','Néhémie','Esdras'], 0, 'Shadrak, avec Méshak et Abed-Négo, a été jeté dans la fournaise.', 'Daniel 3:16-27', 'Personnages'],
  ['Quels trois jeunes Hébreux ont refusé de se prosterner devant la statue du roi ?', ['Shadrak, Méshak et Abed-Négo','Pierre, Jacques et Jean','Saül, David et Jonathan','Daniel, Ézéchiel et Jérémie'], 0, 'Shadrak, Méshak et Abed-Négo ont refusé de rendre un culte à la statue.', 'Daniel 3:12-18', 'Personnages'],
  ['Quel roi a jeté trois jeunes Hébreux dans une fournaise ardente ?', ['Nabuchodonosor','Darius','Cyrus','Pharaon'], 0, 'Nabuchodonosor a ordonné de jeter les trois Hébreux dans la fournaise.', 'Daniel 3:19-23', 'Rois & prophètes'],
  ['Quel disciple a été appelé alors qu’il réparait des filets avec son frère ?', ['André','Matthieu','Thomas','Jude'], 0, 'André était avec Simon Pierre et réparait les filets lorsqu’ils ont été appelés.', 'Matthieu 4:18-20', 'Évangiles'],
  ['Quel disciple était le frère de Simon Pierre ?', ['André','Philippe','Thomas','Matthieu'], 0, 'André était le frère de Simon Pierre.', 'Matthieu 4:18-20', 'Évangiles'],
  ['Combien de jours Jésus a-t-il jeûné dans le désert avant d’être tenté ?', ['40','7','12','3'], 0, 'Jésus a jeûné 40 jours et 40 nuits dans le désert.', 'Matthieu 4:1-2', 'Évangiles'],
  ['Quels trois apôtres ont accompagné Jésus lors de la transfiguration ?', ['Pierre, Jacques et Jean','Pierre, André et Matthieu','Jean, Thomas et Philippe','Jacques, Jude et Barthélémy'], 0, 'Pierre, Jacques et Jean étaient présents lors de la transfiguration.', 'Matthieu 17:1-5', 'Évangiles'],
  ['Qui est apparu avec Jésus lors de la transfiguration ?', ['Moïse et Élie','Abraham et David','Pierre et Jean','Isaïe et Jérémie'], 0, 'Moïse et Élie sont apparus dans la vision de la transfiguration.', 'Matthieu 17:1-5', 'Évangiles'],
  ['Quel miracle est associé à une pièce trouvée dans la bouche d’un poisson ?', ['Le paiement de l’impôt','La multiplication des pains','La guérison d’un aveugle','La pêche miraculeuse'], 0, 'Jésus a indiqué à Pierre comment trouver une pièce dans la bouche d’un poisson pour payer l’impôt.', 'Matthieu 17:24-27', 'Évangiles'],
  ['Quel homme paralysé a été descendu par le toit pour être amené à Jésus ?', ['Un paralysé à Capharnaüm','Lazare','Bartimée','Le serviteur du centurion'], 0, 'Quatre hommes ont fait descendre un paralysé à travers le toit.', 'Marc 2:1-12', 'Évangiles'],
  ['Quel nom est associé à Lévi dans le récit de son appel au poste d’impôts ?', ['Matthieu','Pierre','Marc','Paul'], 0, 'Le récit de Matthieu parle de Matthieu au bureau des impôts, tandis que Marc et Luc parlent de Lévi dans ce même épisode.', 'Marc 2:13-17; Matthieu 9:9; Luc 5:27-28', 'Évangiles'],
  ['Quelle parabole met en scène un homme qui cherche une brebis perdue ?', ['La brebis perdue','Le semeur','Les dix vierges','Le bon Samaritain'], 0, 'Jésus a utilisé l’exemple d’une brebis perdue pour illustrer la valeur de retrouver ce qui est perdu.', 'Luc 15:3-7', 'Évangiles'],
  ['Dans quelle parabole un père accueille-t-il son fils revenu après être parti ?', ['Le fils perdu','Les talents','Le bon Samaritain','Le riche insensé'], 0, 'Le père accueille avec joie son fils qui revient.', 'Luc 15:11-24', 'Évangiles'],
  ['Quel chef de collecteurs d’impôts a grimpé dans un sycomore pour voir Jésus ?', ['Zachée','Matthieu','Lévi','Jairus'], 0, 'Zachée était trop petit pour voir Jésus à cause de la foule et a grimpé dans un sycomore.', 'Luc 19:1-6', 'Évangiles'],
  ['Dans quelle ville Jésus a-t-il rencontré Zachée ?', ['Jéricho','Jérusalem','Bethléhem','Cana'], 0, 'Zachée vivait à Jéricho.', 'Luc 19:1-2', 'Évangiles'],
  ['Dans quelle ville a eu lieu le mariage où Jésus a changé de l’eau en vin ?', ['Cana','Béthanie','Jéricho','Nazareth'], 0, 'Le premier miracle rapporté par Jean a eu lieu à Cana en Galilée.', 'Jean 2:1-11', 'Évangiles'],
  ['Combien de jarres en pierre étaient présentes au mariage de Cana ?', ['Six','Deux','Douze','Sept'], 0, 'Jean mentionne six grandes jarres en pierre.', 'Jean 2:6-9', 'Évangiles'],
  ['Avec qui Jésus a-t-il parlé près d’un puits en Samarie ?', ['Une Samaritaine','Une reine','Une veuve de Sarepta','Marie de Béthanie'], 0, 'Jésus a parlé avec une femme samaritaine près du puits de Jacob.', 'Jean 4:5-26', 'Évangiles'],
  ['Quel homme Jésus a-t-il guéri alors qu’il était aveugle depuis sa naissance ?', ['Un homme né aveugle','Bartimée','Zachée','Un paralysé'], 0, 'Jésus a guéri un homme qui était aveugle depuis sa naissance.', 'Jean 9:1-7', 'Évangiles'],
  ['Dans quel bassin l’homme né aveugle devait-il se laver ?', ['Siloé','Béthesda','Jourdain','Kédrôn'], 0, 'Jésus lui a demandé de se laver au bassin de Siloé.', 'Jean 9:6-7', 'Évangiles'],
  ['Lors de la Pentecôte, combien de personnes ont été baptisées après le discours de Pierre ?', ['Environ 3 000','Environ 300','Environ 30','Environ 30 000'], 0, 'Environ 3 000 personnes ont été baptisées ce jour-là.', 'Actes 2:37-41', 'Histoire biblique'],
  ['Quel jeune homme est devenu compagnon de voyage de Paul à Lystre ?', ['Timothée','Tite','Marc','Silas'], 0, 'Paul a souhaité que Timothée l’accompagne.', 'Actes 16:1-3', 'Personnages'],
  ['Qui a reçu une vision d’un homme macédonien demandant de l’aide ?', ['Paul','Pierre','Barnabé','Timothée'], 0, 'Paul a reçu une vision qui l’a conduit avec ses compagnons à partir pour la Macédoine.', 'Actes 16:6-10', 'Personnages'],
  ['Qui a été baptisée avec sa maisonnée après avoir écouté Paul à Philippes ?', ['Lydie','Damaris','Priscille','Dorcas'], 0, 'Lydie a été baptisée avec sa maisonnée après avoir accepté le message.', 'Actes 16:14-15', 'Personnages'],
  ['Quel apôtre a survécu à un naufrage en route vers Rome ?', ['Paul','Pierre','Jean','André'], 0, 'Paul et ceux qui voyageaient avec lui ont fait naufrage, mais tous ont survécu.', 'Actes 27:39-44', 'Personnages'],
  ['Vers quelle ville Paul se rendait-il lorsqu’il a fait naufrage ?', ['Rome','Jérusalem','Philippes','Éphèse'], 0, 'Paul se rendait à Rome comme prisonnier.', 'Actes 27:1-2, 39-44', 'Histoire biblique'],
  ['Quelle qualité est décrite comme patiente et bonne dans 1 Corinthiens 13 ?', ['L’amour','La foi','La connaissance','La richesse'], 0, 'Paul explique les qualités de l’amour chrétien.', '1 Corinthiens 13:4-7', 'Bible'],
  ['Quel livre biblique contient le chapitre célèbre sur l’amour chrétien ?', ['1 Corinthiens','Romains','Hébreux','Jacques'], 0, 'Le chapitre 13 de 1 Corinthiens développe la supériorité de l’amour.', '1 Corinthiens 13:1-13', 'Bible'],
];


const extraFacts2: Array<[string, string[], number, string, string, string]> = [
  ['Quel patriarche était le père d’Isaac ?', ['Abraham','Jacob','Noé','Joseph'], 0, 'Abraham était le père d’Isaac et Sara sa mère.', 'Genèse 21:1-7', 'Personnages'],
  ['Quelle femme était la mère d’Ésaü et de Jacob ?', ['Rébecca','Sara','Rachel','Léa'], 0, 'Rébecca a donné naissance aux jumeaux Ésaü et Jacob.', 'Genèse 25:19-26', 'Personnages'],
  ['Quel fils de Jacob a reçu un vêtement spécial de son père ?', ['Joseph','Benjamin','Juda','Ruben'], 0, 'Jacob aimait particulièrement Joseph et lui avait fait un vêtement spécial.', 'Genèse 37:3-4', 'Personnages'],
  ['Quel homme a rêvé d’une échelle ou d’un escalier reliant la terre au ciel ?', ['Jacob','Joseph','Ésaü','Moïse'], 0, 'Jacob a fait ce rêve à Béthel alors qu’il voyageait vers Padân-Aram.', 'Genèse 28:10-17', 'Personnages'],
  ['Quel homme a été sauvé des eaux du Nil alors qu’il était bébé ?', ['Moïse','Samuel','David','Jérémie'], 0, 'La mère de Moïse l’a placé dans un panier parmi les roseaux du Nil.', 'Exode 2:1-10', 'Histoire biblique'],
  ['Quel homme a été choisi comme assistant de Moïse pour parler à Pharaon ?', ['Aaron','Josué','Caleb','Éléazar'], 0, 'Aaron a été désigné pour parler au nom de Moïse.', 'Exode 4:14-16, 27-31', 'Personnages'],
  ['Quel événement s’est produit lorsque Moïse a frappé le rocher à Rephidim ?', ['De l’eau a jailli','Le Jourdain s’est ouvert','La manne est tombée','Le feu est descendu du ciel'], 0, 'Jéhovah a fait sortir de l’eau du rocher pour le peuple.', 'Exode 17:1-6', 'Histoire biblique'],
  ['Quel objet les Israélites ont-ils transporté dans le Très-Saint du tabernacle ?', ['L’Arche de l’Alliance','Le trône de David','La harpe de David','Le rouleau d’Esther'], 0, 'L’Arche de l’Alliance se trouvait dans le Très-Saint.', 'Exode 25:10-22; 40:20-21', 'Bible'],
  ['Quel homme a succédé à Moïse et a conduit Israël à travers le Jourdain ?', ['Josué','Caleb','Aaron','Éléazar'], 0, 'Josué a dirigé Israël lors de l’entrée en Canaan.', 'Josué 1:1-6; 3:14-17', 'Personnages'],
  ['Quel juge a délivré Israël avec une armée de seulement 300 hommes ?', ['Gédéon','Barak','Samson','Éhoud'], 0, 'Jéhovah a réduit l’armée de Gédéon à 300 hommes.', 'Juges 7:2-7', 'Rois & prophètes'],
  ['Quelle femme a tué Sissera en enfonçant un piquet dans sa tente ?', ['Jaël','Déborah','Abigaïl','Dalila'], 0, 'Jaël a tué Sissera alors qu’il cherchait refuge dans sa tente.', 'Juges 4:17-22', 'Personnages'],
  ['Quel juge gaucher a tué le roi Églôn de Moab ?', ['Éhoud','Gédéon','Jephté','Barak'], 0, 'Éhoud a utilisé son épée pour tuer Églôn.', 'Juges 3:15-23', 'Rois & prophètes'],
  ['Quel juge a fait un vœu avant de partir combattre les Ammonites ?', ['Jephté','Samson','Gédéon','Éhoud'], 0, 'Jephté a fait un vœu à Jéhovah avant la bataille.', 'Juges 11:29-31', 'Rois & prophètes'],
  ['Quel homme a été choisi pour remplacer Saül comme roi et a été oint par Samuel ?', ['David','Jonathan','Absalom','Salomon'], 0, 'Samuel a oint David au milieu de ses frères.', '1 Samuel 16:1-13', 'Rois & prophètes'],
  ['Quel roi a épargné Saül alors qu’il aurait pu le tuer dans une grotte ?', ['David','Salomon','Jonathan','Ézéchias'], 0, 'David a refusé de porter la main sur Saül, l’oint de Jéhovah.', '1 Samuel 24:1-7', 'Personnages'],
  ['Quel roi a organisé le transfert de l’Arche à Jérusalem avec beaucoup de joie ?', ['David','Salomon','Samuel','Abiatar'], 0, 'David a organisé le transfert de l’Arche à Jérusalem et a participé aux célébrations.', '2 Samuel 6:1-15', 'Rois & prophètes'],
  ['Quelle reine de Saba est venue voir Salomon pour éprouver sa sagesse ?', ['La reine de Saba','Esther','Jézabel','Athalie'], 0, 'La reine de Saba est venue à Jérusalem et a posé des questions difficiles à Salomon.', '1 Rois 10:1-10', 'Rois & prophètes'],
  ['Quel prophète a demandé à Jéhovah de faire descendre le feu sur l’autel du mont Carmel ?', ['Élie','Élisée','Isaïe','Nathan'], 0, 'Élie a prié et le feu est descendu sur l’offrande.', '1 Rois 18:30-39', 'Rois & prophètes'],
  ['Quel prophète a été emporté dans une tempête de vent sous les yeux d’Élisée ?', ['Élie','Ésaïe','Jérémie','Samuel'], 0, 'Élie a été emporté dans une tempête de vent et Élisée a vu l’événement.', '2 Rois 2:1-12', 'Rois & prophètes'],
  ['Quel prophète a indiqué à Naaman comment être guéri de sa lèpre ?', ['Élisée','Élie','Isaïe','Ézéchiel'], 0, 'Élisée lui a transmis les instructions qui ont conduit à sa guérison.', '2 Rois 5:8-14', 'Rois & prophètes'],
  ['Quel roi de Juda a demandé à Jéhovah de délivrer Jérusalem de l’armée assyrienne ?', ['Ézéchias','Josias','Manassé','Roboam'], 0, 'Ézéchias a prié Jéhovah lorsque Sennachérib menaçait Jérusalem.', '2 Rois 19:14-19', 'Rois & prophètes'],
  ['Quel roi de Juda a fait détruire les objets utilisés dans le culte de Baal ?', ['Josias','Ézéchias','Asa','Josaphat'], 0, 'Josias a entrepris une vaste réforme de la vraie adoration.', '2 Rois 23:4-14', 'Rois & prophètes'],
  ['Quel prophète a interprété pour Nabuchodonosor le rêve de la grande statue ?', ['Daniel','Ézéchiel','Jérémie','Esdras'], 0, 'Daniel a expliqué le rêve de la statue et son interprétation.', 'Daniel 2:31-45', 'Personnages'],
  ['Quel groupe de trois Hébreux a été jeté dans une fournaise ardente ?', ['Shadrak, Méshak et Abed-Négo','Pierre, Jacques et Jean','Moisé, Aaron et Miriam','David, Jonathan et Joab'], 0, 'Shadrak, Méshak et Abed-Négo ont refusé d’adorer la statue.', 'Daniel 3:12-27', 'Personnages'],
  ['Quel prophète a été chargé de parler à la ville de Ninive ?', ['Jonas','Nahum','Amos','Habacuc'], 0, 'Jéhovah a envoyé Jonas à Ninive pour lui transmettre un message.', 'Jonas 1:1-2; 3:1-5', 'Rois & prophètes'],
  ['Qui était le père de Jean le Baptiseur ?', ['Zacharie','Joseph','Éli','Nicodème'], 0, 'Zacharie était prêtre et père de Jean le Baptiseur.', 'Luc 1:5-13, 57-63', 'Évangiles'],
  ['Quelle parente de Marie était enceinte de Jean le Baptiseur ?', ['Élisabeth','Marthe','Marie de Béthanie','Anne'], 0, 'Élisabeth, parente de Marie, attendait Jean.', 'Luc 1:36, 57-60', 'Évangiles'],
  ['Quel homme a préparé le chemin pour Jésus en prêchant et en baptisant ?', ['Jean le Baptiseur','Pierre','Paul','Barnabé'], 0, 'Jean a préparé les gens à la venue du Messie.', 'Matthieu 3:1-6; 11:7-10', 'Évangiles'],
  ['Quel homme âgé a vu le bébé Jésus au temple et a remercié Dieu ?', ['Siméon','Nicodème','Zacharie','Joseph d’Arimathie'], 0, 'Siméon a vu Jésus au temple et a remercié Jéhovah.', 'Luc 2:25-32', 'Évangiles'],
  ['Quelle prophétesse âgée a parlé de Jésus à ceux qui attendaient la délivrance de Jérusalem ?', ['Anne','Déborah','Houlda','Miriam'], 0, 'Anne, une prophétesse âgée, parlait de Jésus à ceux qui attendaient la délivrance.', 'Luc 2:36-38', 'Évangiles'],
  ['Quel homme a demandé à Jésus comment naître de nouveau ?', ['Nicodème','Zachée','Jairus','Bartimée'], 0, 'Nicodème, un chef des Juifs, a parlé avec Jésus de la nouvelle naissance.', 'Jean 3:1-10', 'Évangiles'],
  ['Quel homme aveugle a appelé Jésus « Fils de David » près de Jéricho ?', ['Bartimée','Zachée','Jairus','Lazare'], 0, 'Bartimée, aveugle, a crié vers Jésus alors qu’il quittait Jéricho.', 'Marc 10:46-52', 'Évangiles'],
  ['Quel chef de synagogue a demandé à Jésus de guérir sa fille ?', ['Jaïrus','Nicodème','Zachée','Lazare'], 0, 'Jaïrus a supplié Jésus de venir pour sa fille malade.', 'Marc 5:21-24, 35-43', 'Évangiles'],
  ['Quel ami de Jésus vivait à Béthanie avec Marthe et Marie ?', ['Lazare','Zachée','Nicodème','Bartimée'], 0, 'Lazare vivait à Béthanie avec ses sœurs Marthe et Marie.', 'Jean 11:1-5', 'Évangiles'],
  ['Quel disciple a remplacé Judas Iscariote après sa mort ?', ['Matthias','Barnabé','Silas','Étienne'], 0, 'Matthias a été choisi pour prendre la place laissée par Judas.', 'Actes 1:15-26', 'Actes'],
  ['Quel chrétien a été choisi avec six autres hommes pour une tâche liée à la distribution quotidienne ?', ['Étienne','Matthias','Barnabé','Timothée'], 0, 'Étienne faisait partie des sept hommes choisis pour cette tâche.', 'Actes 6:1-6', 'Actes'],
  ['Quel compagnon de Paul était connu pour son esprit encourageant et venait de Chypre ?', ['Barnabé','Silas','Timothée','Tite'], 0, 'Barnabé venait de Chypre et a beaucoup soutenu les chrétiens.', 'Actes 4:36-37; 11:22-26', 'Actes'],
];


const extraFacts3: Array<[string, string[], number, string, string, string]> = [
  ['Quel homme a été choisi pour conduire Israël après la mort de Moïse et avant l’entrée en Canaan ?', ['Josué','Caleb','Aaron','Samuel'], 0, 'Josué a reçu la mission de conduire Israël après Moïse.', 'Josué 1:1-6', 'Personnages'],
  ['Quel juge a vaincu les Madianites avec seulement 300 hommes ?', ['Gédéon','Samson','Éhoud','Barak'], 0, 'Gédéon a conduit une force réduite à 300 hommes.', 'Juges 7:2-7', 'Rois & prophètes'],
  ['Qui a tué Sissera après qu’il s’est réfugié dans sa tente ?', ['Jaël','Déborah','Ruth','Abigaïl'], 0, 'Jaël a tué Sissera alors qu’il cherchait refuge chez elle.', 'Juges 4:17-22', 'Personnages'],
  ['Quel homme a rêvé d’une échelle reliant la terre et le ciel ?', ['Jacob','Joseph','Isaac','Samuel'], 0, 'Jacob a fait ce rêve alors qu’il voyageait vers la maison de Laban.', 'Genèse 28:10-17', 'Genèse'],
  ['Qui était l’ami très proche de David et le fils de Saül ?', ['Jonathan','Joab','Samuel','Abner'], 0, 'Jonathan et David ont noué une profonde amitié.', '1 Samuel 18:1-4', 'Personnages'],
  ['Quelle femme a empêché David de se venger de Nabal ?', ['Abigaïl','Mikal','Betsabée','Anne'], 0, 'Abigaïl a parlé avec sagesse et a retenu David.', '1 Samuel 25:23-35', 'Personnages'],
  ['Quel roi a reçu la visite de la reine de Saba ?', ['Salomon','David','Ézéchias','Josias'], 0, 'La reine de Saba est venue éprouver la sagesse de Salomon.', '1 Rois 10:1-10', 'Rois & prophètes'],
  ['Quel prophète a été nourri par des corbeaux pendant une période de sécheresse ?', ['Élie','Élisée','Jérémie','Isaïe'], 0, 'Jéhovah a utilisé des corbeaux pour nourrir Élie.', '1 Rois 17:2-6', 'Rois & prophètes'],
  ['Quelle veuve a accueilli Élie à Sarepta ?', ['Une veuve de Sarepta','La veuve de Jéricho','La veuve de Noémi','La veuve de Nabal'], 0, 'Une veuve de Sarepta a accueilli Élie malgré ses ressources limitées.', '1 Rois 17:8-16', 'Rois & prophètes'],
  ['Quel prophète a demandé à Élisée ce qu’il voulait recevoir avant son départ ?', ['Élie','Isaïe','Jérémie','Samuel'], 0, 'Élie a demandé à Élisée ce qu’il désirait avant d’être emporté.', '2 Rois 2:9-12', 'Rois & prophètes'],
  ['Quel roi de Juda a prié lorsque Sennachérib menaçait Jérusalem ?', ['Ézéchias','Josias','Manassé','Roboam'], 0, 'Ézéchias a présenté la menace de Sennachérib à Jéhovah dans la prière.', '2 Rois 19:14-20', 'Rois & prophètes'],
  ['Quel prophète a interprété le rêve de la grande statue de Nabuchodonosor ?', ['Daniel','Ézéchiel','Jérémie','Esdras'], 0, 'Daniel a expliqué le rêve et sa signification.', 'Daniel 2:31-45', 'Personnages'],
  ['Quels trois Hébreux ont été jetés dans une fournaise ardente ?', ['Shadrak, Méshak et Abed-Négo','Pierre, Jacques et Jean','Paul, Silas et Timothée','David, Jonathan et Joab'], 0, 'Ces trois jeunes Hébreux ont refusé de se prosterner devant la statue.', 'Daniel 3:12-27', 'Personnages'],
  ['Quel disciple a signalé à Jésus la présence d’un garçon ayant cinq pains et deux poissons ?', ['André','Philippe','Thomas','Matthieu'], 0, 'André a signalé le garçon qui avait les pains et les poissons.', 'Jean 6:5-13', 'Évangiles'],
  ['Quel disciple était assis au bureau des impôts lorsque Jésus l’a appelé ?', ['Matthieu','Jean','André','Thomas'], 0, 'Jésus a appelé Matthieu alors qu’il était au bureau des impôts.', 'Matthieu 9:9', 'Évangiles'],
  ['Quel homme a été descendu à travers un toit pour être amené à Jésus ?', ['Un paralysé','Bartimée','Zachée','Jairus'], 0, 'Des hommes ont fait descendre un paralysé à travers le toit.', 'Marc 2:1-12', 'Évangiles'],
  ['Quel aveugle a crié vers Jésus près de Jéricho ?', ['Bartimée','Jairus','Zachée','Nicodème'], 0, 'Bartimée a appelé Jésus alors qu’il était près de Jéricho.', 'Marc 10:46-52', 'Évangiles'],
  ['Quel chef de synagogue a demandé à Jésus de venir pour sa fille malade ?', ['Jairus','Nicodème','Zachée','Simon'], 0, 'Jairus a demandé à Jésus de venir auprès de sa fille.', 'Marc 5:21-24, 35-43', 'Évangiles'],
  ['Quel homme a reçu Jésus chez lui à Jéricho après être monté sur un sycomore ?', ['Zachée','Bartimée','Jairus','Lévi'], 0, 'Zachée a grimpé dans un sycomore puis a accueilli Jésus.', 'Luc 19:1-10', 'Évangiles'],
  ['Quelle femme a parlé avec Jésus près d’un puits en Samarie ?', ['Une Samaritaine','Marthe','Marie de Béthanie','Lydie'], 0, 'Jésus a parlé avec une Samaritaine près du puits de Jacob.', 'Jean 4:5-30', 'Évangiles'],
  ['Quel homme nommé Nicodème est venu voir Jésus de nuit ?', ['Un pharisien','Un collecteur d’impôts','Un soldat romain','Un pêcheur'], 0, 'Nicodème était un pharisien et un chef des Juifs.', 'Jean 3:1-2', 'Évangiles'],
  ['Dans quelle ville Jésus a-t-il transformé de l’eau en vin ?', ['Cana','Bethléem','Béthanie','Jéricho'], 0, 'Le mariage de Cana est associé au premier signe rapporté par Jean.', 'Jean 2:1-11', 'Évangiles'],
  ['Quel disciple a apporté à Jésus le garçon qui avait cinq pains et deux poissons ?', ['André','Pierre','Philippe','Thomas'], 0, 'André a signalé la présence du garçon avec les pains et les poissons.', 'Jean 6:5-13', 'Évangiles'],
  ['Quel disciple a demandé à Jésus de lui montrer le Père ?', ['Philippe','Thomas','André','Jude'], 0, 'Philippe a posé cette question lors de la dernière soirée de Jésus avec ses apôtres.', 'Jean 14:8-10', 'Évangiles'],
  ['Quel homme a été ressuscité après avoir été dans la tombe depuis plusieurs jours ?', ['Lazare','Jairus','Étienne','Tabitha'], 0, 'Jésus a ressuscité Lazare à Béthanie.', 'Jean 11:38-44', 'Évangiles'],
  ['Quelle femme a été ressuscitée par Pierre à Joppé ?', ['Tabitha','Lydie','Dorcas','Marthe'], 0, 'Tabitha, aussi appelée Dorcas, a été relevée par Pierre.', 'Actes 9:36-42', 'Actes'],
  ['Quel homme a été baptisé après avoir entendu Philippe expliquer Isaïe sur la route de Gaza ?', ['Un Éthiopien eunuque','Un soldat romain','Un Samaritain','Un geôlier'], 0, 'Philippe a enseigné à un fonctionnaire éthiopien qui a ensuite demandé le baptême.', 'Actes 8:26-39', 'Actes'],
  ['Quel centurion romain a reçu Pierre chez lui après une vision ?', ['Corneille','Jules','César','Festus'], 0, 'Corneille a fait venir Pierre après avoir reçu des instructions divines.', 'Actes 10:1-8, 17-48', 'Actes'],
  ['Quel compagnon de Paul était médecin ?', ['Luc','Silas','Barnabé','Tite'], 0, 'Paul mentionne Luc comme un médecin bien-aimé.', 'Colossiens 4:14', 'Actes'],
  ['Quel jeune compagnon de Paul avait une mère croyante juive et un père grec ?', ['Timothée','Tite','Silas','Marc'], 0, 'Timothée avait une mère juive croyante et un père grec.', 'Actes 16:1-3', 'Actes'],
  ['Quel chrétien de Chypre a vendu un champ et remis l’argent aux apôtres ?', ['Barnabé','Silas','Étienne','Matthias'], 0, 'Barnabé a fait cette contribution volontaire.', 'Actes 4:36-37', 'Actes'],
  ['Quel homme a été lapidé après avoir témoigné devant le Sanhédrin ?', ['Étienne','Barnabé','Philippe','Matthias'], 0, 'Étienne a été lapidé après son témoignage.', 'Actes 6:8-15; 7:54-60', 'Actes'],
  ['Quel apôtre a été libéré de prison par un ange alors que des chrétiens priaient ?', ['Pierre','Paul','Jean','Jacques'], 0, 'Un ange a libéré Pierre de prison pendant que la congrégation priait.', 'Actes 12:5-11', 'Actes'],
  ['Quelle femme était marchande d’articles de pourpre à Philippes ?', ['Lydie','Priscille','Dorcas','Damaris'], 0, 'Lydie vendait des articles de pourpre et a accueilli Paul.', 'Actes 16:14-15', 'Actes'],
  ['Quel couple a expliqué plus exactement le chemin de Dieu à Apollos ?', ['Priscille et Aquilas','Lydie et son mari','Ananias et Saphira','Paul et Barnabé'], 0, 'Priscille et Aquilas ont aidé Apollos à mieux comprendre l’enseignement chrétien.', 'Actes 18:24-26', 'Actes'],
  ['Quel couple était fabricant de tentes comme Paul ?', ['Priscille et Aquilas','Lydie et son mari','Barnabé et Marc','Pierre et André'], 0, 'Paul a travaillé avec Priscille et Aquilas, qui exerçaient le même métier.', 'Actes 18:1-3', 'Actes'],
  ['Quel jeune homme s’est endormi pendant un long discours de Paul et est tombé d’une fenêtre ?', ['Eutyche','Timothée','Trophime','Aristarque'], 0, 'Eutyche est tombé d’une fenêtre pendant que Paul parlait longtemps.', 'Actes 20:7-12', 'Actes'],
  ['Sur quelle île Paul a-t-il fait naufrage avant son voyage final vers Rome ?', ['Malte','Chypre','Crète','Patmos'], 0, 'Après le naufrage, Paul et les autres survivants ont atteint l’île de Malte.', 'Actes 27:39-44; 28:1', 'Actes'],
  ['Quel livre raconte principalement les voyages missionnaires de Paul et les débuts de la congrégation chrétienne ?', ['Actes','Romains','Hébreux','Révélation'], 0, 'Le livre des Actes raconte l’expansion du christianisme au premier siècle.', 'Actes 1:1-8; 13–28', 'Actes'],
  ['Quel livre biblique raconte l’histoire d’une femme moabite devenue ancêtre dans la lignée de David ?', ['Ruth','Esther','Juges','Néhémie'], 0, 'Le livre de Ruth raconte l’histoire de Ruth, de Noémi et de Boaz.', 'Ruth 1–4', 'Histoire biblique'],
  ['Quel homme a reconstruit les murailles de Jérusalem avec le soutien du peuple ?', ['Néhémie','Esdras','Zorobabel','Daniel'], 0, 'Néhémie a organisé la reconstruction des murailles de Jérusalem.', 'Néhémie 2:17-18; 6:15-16', 'Histoire biblique'],
  ['Quel prêtre et copiste a lu et expliqué la Loi au peuple revenu à Jérusalem ?', ['Esdras','Néhémie','Hilqiya','Zorobabel'], 0, 'Esdras était un copiste habile de la Loi et a contribué à son enseignement.', 'Esdras 7:6, 10; Néhémie 8:1-8', 'Histoire biblique'],
  ['Quel gouverneur a dirigé la reconstruction des murailles de Jérusalem ?', ['Néhémie','Zorobabel','Esdras','Josué'], 0, 'Néhémie a dirigé les travaux de reconstruction des murailles.', 'Néhémie 2:11-18; 6:15', 'Personnages'],
  ['Quel roi perse a autorisé les Juifs à retourner à Jérusalem et à reconstruire le temple ?', ['Cyrus','Darius','Artaxerxès','Assuérus'], 0, 'Cyrus a publié une proclamation permettant le retour et la reconstruction du temple.', 'Esdras 1:1-4', 'Rois & prophètes'],
  ['Quel prophète a encouragé la reconstruction du temple après l’exil ?', ['Aggée','Jonas','Amos','Nahum'], 0, 'Aggée a encouragé les Juifs à reprendre la reconstruction du temple.', 'Aggée 1:1-8', 'Rois & prophètes'],
  ['Quel prophète a eu une vision de chevaux parmi plusieurs visions liées à la reconstruction de Jérusalem ?', ['Zacharie','Aggée','Daniel','Ézéchiel'], 0, 'Zacharie a reçu plusieurs visions encourageant le peuple.', 'Zacharie 1:7-17', 'Rois & prophètes'],
  ['Quel homme a été décrit comme digne de confiance et craignant le vrai Dieu plus que beaucoup d’autres ?', ['Hanania','Néhémie','Esdras','Zorobabel'], 0, 'Hanania, chef de la forteresse, est décrit comme un homme digne de confiance et craignant le vrai Dieu.', 'Néhémie 7:2', 'Personnages'],
  ['Qui a inspecté de nuit les murailles de Jérusalem avant de lancer les travaux de reconstruction ?', ['Néhémie','Esdras','Zorobabel','Cyrus'], 0, 'Néhémie a inspecté les murailles avant d’organiser leur reconstruction.', 'Néhémie 2:11-18', 'Histoire biblique'],
  ['Quel roi a demandé à ses sages d’interpréter un rêve qu’il avait oublié ?', ['Nabuchodonosor','Darius','Cyrus','Saül'], 0, 'Nabuchodonosor a exigé que ses sages révèlent et interprètent son rêve.', 'Daniel 2:1-13', 'Rois & prophètes'],
];


const extraFacts4: Array<[string, string[], number, string, string, string]> = [
  ['Qui était le fils d’Isaac et de Rébecca qui a reçu le nom Israël ?', ['Jacob','Ésaü','Joseph','Juda'], 0, 'Jacob a reçu le nom Israël.', 'Genèse 32:28', 'Personnages'],
  ['Qui a donné naissance à Joseph et Benjamin ?', ['Rachel','Léa','Rébecca','Anne'], 0, 'Rachel a donné naissance à Joseph puis à Benjamin.', 'Genèse 30:22-24; 35:16-18', 'Personnages'],
  ['Quel fils de Jacob est devenu gouverneur en Égypte après avoir interprété les rêves de Pharaon ?', ['Joseph','Juda','Benjamin','Ruben'], 0, 'Joseph a été établi au-dessus du pays d’Égypte pour gérer les réserves.', 'Genèse 41:37-43', 'Personnages'],
  ['Quel homme a lutté toute une nuit et a reçu le nom Israël ?', ['Jacob','Ésaü','Moïse','Josué'], 0, 'Jacob a reçu le nom Israël après cet épisode.', 'Genèse 32:24-28', 'Personnages'],
  ['Qui était le frère jumeau de Jacob ?', ['Ésaü','Joseph','Benjamin','Juda'], 0, 'Ésaü et Jacob étaient jumeaux.', 'Genèse 25:24-26', 'Personnages'],
  ['Quel homme a interprété le rêve de Pharaon annonçant sept années d’abondance puis sept années de famine ?', ['Joseph','Daniel','Samuel','Esdras'], 0, 'Joseph a expliqué les rêves de Pharaon.', 'Genèse 41:14-32', 'Personnages'],
  ['Quel homme a vu un buisson en feu qui ne se consumait pas ?', ['Moïse','Aaron','Josué','Élie'], 0, 'Moïse a vu ce signe lorsqu’il gardait le troupeau de son beau-père.', 'Exode 3:1-6', 'Bible'],
  ['Quel aliment les Israélites recevaient-ils chaque matin dans le désert ?', ['La manne','Le poisson','Les olives','Le blé'], 0, 'Jéhovah leur a fourni la manne comme nourriture.', 'Exode 16:4, 13-15', 'Histoire biblique'],
  ['Quel homme a frappé le rocher et en a fait sortir de l’eau pour le peuple ?', ['Moïse','Aaron','Josué','Caleb'], 0, 'Moïse a frappé le rocher à Réphidim et de l’eau en est sortie.', 'Exode 17:1-6', 'Histoire biblique'],
  ['Qui a porté les deux tables de la Loi en descendant du mont Sinaï ?', ['Moïse','Aaron','Josué','Éléazar'], 0, 'Moïse est descendu avec les deux tables du Témoignage.', 'Exode 32:15-16', 'Bible'],
  ['Quelle femme a aidé les espions israélites à sortir de Jéricho en les faisant descendre par une fenêtre ?', ['Rahab','Déborah','Jaël','Ruth'], 0, 'Rahab les a fait descendre par une fenêtre au moyen d’une corde.', 'Josué 2:15-16', 'Personnages'],
  ['Quel homme a demandé au soleil et à la lune de rester immobiles pendant une bataille ?', ['Josué','Caleb','Gédéon','Barak'], 0, 'Josué a demandé que le soleil et la lune restent immobiles.', 'Josué 10:12-14', 'Histoire biblique'],
  ['Quelle juge d’Israël était aussi prophétesse ?', ['Déborah','Jaël','Ruth','Houlda'], 0, 'Déborah est présentée comme prophétesse et juge.', 'Juges 4:4-5', 'Rois & prophètes'],
  ['Quel juge a délivré Israël en utilisant une épée cachée sur sa cuisse droite ?', ['Éhoud','Gédéon','Jephté','Samson'], 0, 'Éhoud a utilisé une épée à double tranchant pour tuer Églôn.', 'Juges 3:15-23', 'Rois & prophètes'],
  ['Quel juge a été utilisé par Jéhovah pour vaincre Madian avec seulement 300 hommes ?', ['Gédéon','Barak','Jephté','Samson'], 0, 'L’armée de Gédéon a été réduite à 300 hommes.', 'Juges 7:2-7', 'Rois & prophètes'],
  ['Quel homme était l’ami proche de David et le fils du roi Saül ?', ['Jonathan','Joab','Abner','Absalom'], 0, 'Jonathan, fils de Saül, était profondément attaché à David.', '1 Samuel 18:1-4', 'Personnages'],
  ['Quelle femme a donné à David des provisions et des conseils pour éviter une vengeance ?', ['Abigaïl','Mikal','Betsabée','Anne'], 0, 'Abigaïl a parlé avec sagesse à David.', '1 Samuel 25:18-35', 'Personnages'],
  ['Quel prophète a été nourri par des corbeaux pendant une période de sécheresse ?', ['Élie','Élisée','Isaïe','Jérémie'], 0, 'Des corbeaux apportaient du pain et de la viande à Élie.', '1 Rois 17:2-6', 'Rois & prophètes'],
  ['Quel roi a demandé à Jéhovah de lui donner un cœur obéissant pour juger le peuple ?', ['Salomon','David','Josias','Ézéchias'], 0, 'Salomon a demandé sagesse et discernement.', '1 Rois 3:5-12', 'Rois & prophètes'],
  ['Quel prophète a été successeur d’Élie ?', ['Élisée','Isaïe','Jérémie','Ézéchiel'], 0, 'Élisée a été choisi pour succéder à Élie.', '1 Rois 19:19-21', 'Rois & prophètes'],
  ['Quel homme a été guéri de la lèpre après s’être plongé sept fois dans le Jourdain ?', ['Naamân','Gehazi','Élisée','Ézéchias'], 0, 'Naamân a suivi les instructions d’Élisée et a été guéri.', '2 Rois 5:10-14', 'Rois & prophètes'],
  ['Quel roi a prié Jéhovah après avoir reçu une lettre menaçante de Sennachérib ?', ['Ézéchias','Josias','Manassé','Roboam'], 0, 'Ézéchias a présenté la lettre devant Jéhovah et a prié.', '2 Rois 19:14-20', 'Rois & prophètes'],
  ['Quel roi a entrepris de réparer le temple après avoir appris ce qui était écrit dans le livre de la Loi ?', ['Josias','Ézéchias','Salomon','Roboam'], 0, 'Josias a fait réparer le temple et a ensuite entrepris une réforme de la vraie adoration.', '2 Rois 22:3-13; 23:1-20', 'Rois & prophètes'],
  ['Quel homme a reconstruit les murailles de Jérusalem malgré l’opposition ?', ['Néhémie','Esdras','Zorobabel','Cyrus'], 0, 'Néhémie a dirigé les travaux jusqu’à l’achèvement des murailles.', 'Néhémie 2:11-18; 6:15-16', 'Histoire biblique'],
  ['Quel roi perse a autorisé le retour des Juifs à Jérusalem ?', ['Cyrus','Darius','Artaxerxès','Assuérus'], 0, 'Cyrus a publié une proclamation permettant le retour et la reconstruction du temple.', 'Esdras 1:1-4', 'Rois & prophètes'],
  ['Quel prophète a encouragé les Juifs à reprendre la reconstruction du temple après l’exil ?', ['Aggée','Amos','Nahum','Jonas'], 0, 'Aggée a encouragé le peuple à reprendre les travaux du temple.', 'Aggée 1:1-8', 'Rois & prophètes'],
  ['Quel prophète a reçu une vision d’ossements desséchés qui reprenaient vie ?', ['Ézéchiel','Daniel','Jérémie','Zacharie'], 0, 'Ézéchiel a reçu la vision de la vallée d’ossements desséchés.', 'Ézéchiel 37:1-14', 'Rois & prophètes'],
  ['Quel jeune Hébreu a refusé de se souiller avec les mets et le vin du roi à Babylone ?', ['Daniel','Shadrak','Joseph','Néhémie'], 0, 'Daniel a décidé de rester pur malgré la nourriture du roi.', 'Daniel 1:8-16', 'Personnages'],
  ['Quels trois Hébreux ont été jetés dans une fournaise parce qu’ils refusaient de se prosterner devant la statue ?', ['Shadrak, Méshak et Abednégo','Pierre, Jacques et Jean','Paul, Barnabé et Silas','Daniel, Ézéchiel et Jérémie'], 0, 'Shadrak, Méshak et Abednégo ont refusé de se prosterner.', 'Daniel 3:12-27', 'Personnages'],
  ['Quel prophète a expliqué à Nabuchodonosor un rêve qu’aucun de ses sages ne pouvait révéler ?', ['Daniel','Ézéchiel','Jérémie','Esdras'], 0, 'Daniel a révélé et expliqué le rêve du roi.', 'Daniel 2:17-23, 31-45', 'Personnages'],
  ['Quelle reine a risqué sa vie pour demander au roi de sauver son peuple ?', ['Esther','Vashti','Ruth','Déborah'], 0, 'Esther s’est présentée devant le roi malgré le danger.', 'Esther 4:15-16; 7:3-4', 'Personnages'],
  ['Quel homme a été jeté dans une fosse aux lions après avoir continué à prier ?', ['Daniel','Jérémie','Ézéchiel','Néhémie'], 0, 'Daniel a continué à prier malgré l’interdiction du roi.', 'Daniel 6:7-23', 'Personnages'],
  ['Qui a préparé le chemin pour le ministère de Jésus en prêchant dans le désert ?', ['Jean le Baptiseur','Pierre','Philippe','Étienne'], 0, 'Jean le Baptiseur prêchait et appelait les gens à se repentir.', 'Matthieu 3:1-6', 'Évangiles'],
  ['Quel événement a marqué le début du ministère public de Jésus dans les récits évangéliques ?', ['Son baptême','Sa naissance','La transfiguration','Son entrée à Jérusalem'], 0, 'Jésus a été baptisé avant de commencer son ministère.', 'Matthieu 3:13-17; 4:17', 'Évangiles'],
  ['Quel disciple a amené son frère Simon à Jésus ?', ['André','Jean','Philippe','Thomas'], 0, 'André a amené Simon à Jésus.', 'Jean 1:40-42', 'Évangiles'],
  ['Quel homme de petite taille est monté sur un sycomore pour voir Jésus ?', ['Zachée','Bartimée','Jaïrus','Nicodème'], 0, 'Zachée a grimpé sur un sycomore parce qu’il voulait voir Jésus.', 'Luc 19:1-4', 'Évangiles'],
  ['Quel homme aveugle a crié vers Jésus près de Jéricho ?', ['Bartimée','Zachée','Jaïrus','Nicodème'], 0, 'Bartimée a insisté pour attirer l’attention de Jésus et a retrouvé la vue.', 'Marc 10:46-52', 'Évangiles'],
  ['Quel chef de synagogue a demandé à Jésus de venir voir sa fille malade ?', ['Jaïrus','Nicodème','Zachée','Corneille'], 0, 'Jaïrus a supplié Jésus de venir auprès de sa fille.', 'Marc 5:21-24', 'Évangiles'],
  ['Quel pharisien a rencontré Jésus de nuit ?', ['Nicodème','Gamaliel','Saul','Joseph d’Arimathie'], 0, 'Nicodème est venu voir Jésus de nuit.', 'Jean 3:1-2', 'Évangiles'],
  ['Quel apôtre a demandé à Jésus de lui montrer le Père ?', ['Philippe','Thomas','André','Matthieu'], 0, 'Philippe a posé cette demande à Jésus.', 'Jean 14:8-10', 'Évangiles'],
  ['Quel apôtre a remplacé Judas Iscariote parmi les Douze ?', ['Matthias','Barnabé','Paul','Silas'], 0, 'Matthias a été choisi pour remplacer Judas.', 'Actes 1:15-26', 'Actes'],
  ['Combien de personnes environ ont été baptisées après le discours de Pierre à la Pentecôte ?', ['Environ 3 000','Environ 300','Environ 30 000','Environ 120'], 0, 'Environ 3 000 personnes ont accepté le message et ont été baptisées.', 'Actes 2:37-41', 'Actes'],
  ['Quel chrétien a été choisi parmi les sept hommes chargés d’un service particulier et est ensuite mort lapidé ?', ['Étienne','Barnabé','Philippe','Matthias'], 0, 'Étienne a été choisi pour ce service et a ensuite été lapidé.', 'Actes 6:1-6; 7:54-60', 'Actes'],
  ['Quel disciple a expliqué les Écritures à un fonctionnaire éthiopien dans son char ?', ['Philippe','Pierre','Barnabé','Étienne'], 0, 'Philippe a expliqué le passage d’Isaïe au fonctionnaire.', 'Actes 8:26-39', 'Actes'],
  ['Quel officier romain a reçu Pierre après une vision ?', ['Corneille','Julius','Festus','Gallion'], 0, 'Corneille a envoyé chercher Pierre après avoir reçu une vision.', 'Actes 10:1-8, 17-23', 'Actes'],
  ['Quelle femme de Philippes vendait des articles de pourpre ?', ['Lydie','Damaris','Priscille','Tabitha'], 0, 'Lydie était marchande d’articles de pourpre.', 'Actes 16:14-15', 'Actes'],
  ['Quel couple a aidé Apollos à mieux comprendre la voie de Dieu ?', ['Priscille et Aquilas','Lydie et son mari','Ananias et Saphira','Paul et Barnabé'], 0, 'Priscille et Aquilas ont expliqué plus exactement la voie de Dieu à Apollos.', 'Actes 18:24-26', 'Actes'],
  ['Quel homme a été mordu par un serpent à Malte sans subir de mal ?', ['Paul','Pierre','Barnabé','Silas'], 0, 'Paul a été mordu par une vipère mais n’en a pas subi de mal.', 'Actes 28:1-6', 'Actes'],
  ['Dans quelle ville Paul est-il resté sous garde tout en prêchant pendant deux ans ?', ['Rome','Jérusalem','Philippes','Éphèse'], 0, 'Paul est resté à Rome dans une maison qu’il louait, avec un soldat pour le garder.', 'Actes 28:16-31', 'Actes'],
];

const quizDifficulties: Difficulty[] = [
  'easy', 'easy', 'medium', 'easy', 'easy', 'medium', 'easy', 'medium', 'easy', 'easy',
  'medium', 'medium', 'hard', 'medium', 'medium', 'medium', 'easy', 'easy', 'medium', 'easy',
  'easy', 'easy', 'medium', 'hard', 'easy', 'medium', 'medium', 'medium', 'hard', 'medium',
  'hard', 'easy', 'easy', 'easy', 'easy', 'medium', 'easy', 'medium', 'medium', 'hard',
  'medium', 'medium', 'easy', 'medium', 'medium', 'medium', 'medium', 'hard', 'medium', 'hard',
  'medium', 'easy', 'easy', 'medium', 'medium', 'medium', 'easy', 'medium', 'medium', 'medium',
  'medium', 'hard', 'easy', 'easy', 'easy', 'medium', 'easy', 'hard', 'medium', 'medium',
  'hard', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'easy', 'medium', 'easy',
  'medium', 'easy', 'medium', 'easy', 'medium', 'medium', 'medium', 'easy', 'medium', 'medium',
  'hard', 'hard', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium',
  'medium', 'medium', 'easy', 'easy', 'medium', 'medium', 'easy', 'medium', 'hard', 'medium',
  'medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'easy', 'medium', 'medium', 'medium',
  'medium', 'medium', 'medium', 'medium', 'medium', 'hard', 'medium', 'medium', 'easy', 'hard',
  'medium', 'medium', 'medium', 'medium', 'easy', 'medium', 'medium', 'easy', 'hard', 'hard',
  'easy', 'medium', 'medium', 'medium', 'hard', 'hard', 'hard', 'medium', 'medium', 'medium',
  'hard', 'hard', 'hard', 'medium', 'medium', 'medium', 'medium', 'hard', 'medium', 'medium',
  'hard', 'hard', 'hard', 'hard', 'medium', 'medium', 'medium', 'easy', 'medium', 'medium',
  'medium', 'easy', 'easy', 'medium', 'medium', 'medium', 'medium', 'medium', 'hard', 'medium',
  'medium', 'medium', 'medium', 'easy', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium',
  'hard', 'medium', 'medium', 'easy', 'medium', 'medium', 'easy', 'easy', 'medium', 'medium',
  'easy', 'medium', 'medium', 'medium', 'hard', 'medium', 'medium', 'medium', 'medium', 'medium',
  'medium', 'hard', 'medium', 'medium',
];



// Extension éditoriale V37 — contenu original vérifié à partir des récits et références
// bibliques accessibles sur JW.org. Aucun texte d’article n’est reproduit.
const jwQuizExpansion: Array<[string, string[], number, string, string, string]> = [
  ['Qui a reçu les instructions de construire l’arche de l’Alliance ?', ['Moïse','David','Josué','Salomon'], 0, 'Moïse a reçu les instructions concernant le tabernacle et l’arche.', 'Exode 25:8-22', 'Bible'],
  ['Quel homme a été choisi pour remplacer Judas Iscariote parmi les apôtres ?', ['Matthias','Barnabé','Silas','Étienne'], 0, 'Matthias a été choisi pour rejoindre les onze apôtres.', 'Actes 1:21-26', 'Actes'],
  ['Quel livre raconte principalement la vie et le ministère de Jésus selon Jean ?', ['Jean','Romains','Actes','Hébreux'], 0, 'L’Évangile de Jean rapporte de nombreux épisodes du ministère de Jésus.', 'Jean 20:30-31', 'Évangiles'],
  ['Quel homme a été appelé « ami de Dieu » dans les Écritures ?', ['Abraham','David','Moïse','Élie'], 0, 'Abraham est présenté comme ami de Dieu.', 'Jacques 2:23', 'Personnages'],
  ['Quelle femme était la mère de Jean le Baptiseur ?', ['Élisabeth','Anne','Marie','Marthe'], 0, 'Élisabeth était la mère de Jean.', 'Luc 1:5-25, 57-66', 'Évangiles'],
  ['Quel prêtre était le mari d’Élisabeth ?', ['Zacharie','Siméon','Caïphe','Corneille'], 0, 'Zacharie était prêtre et mari d’Élisabeth.', 'Luc 1:5-13', 'Évangiles'],
  ['Quel homme a aidé Jésus à porter le poteau de supplice ?', ['Simon de Cyrène','Joseph d’Arimathie','Nicodème','Jairus'], 0, 'Simon de Cyrène a été réquisitionné pour porter le poteau.', 'Luc 23:26', 'Évangiles'],
  ['Dans quelle ville Jésus a-t-il grandi ?', ['Nazareth','Bethléem','Jéricho','Capharnaüm'], 0, 'Jésus a grandi à Nazareth.', 'Matthieu 2:19-23; Luc 2:39-40', 'Évangiles'],
  ['Dans quelle ville Jésus est-il né ?', ['Bethléem','Nazareth','Jérusalem','Béthanie'], 0, 'Jésus est né à Bethléem de Judée.', 'Matthieu 2:1; Luc 2:4-7', 'Évangiles'],
  ['Quel apôtre était frère de Jean ?', ['Jacques','Thomas','Matthieu','Philippe'], 0, 'Jacques et Jean étaient fils de Zébédée.', 'Matthieu 4:21-22', 'Évangiles'],
  ['Quel homme a été ressuscité par Jésus après être resté quatre jours dans le tombeau ?', ['Lazare','Jairus','Étienne','Eutique'], 0, 'Lazare était dans le tombeau depuis quatre jours lorsque Jésus l’a appelé.', 'Jean 11:38-44', 'Évangiles'],
  ['Quelle femme était sœur de Marthe et de Lazare ?', ['Marie','Salomé','Élisabeth','Dorcas'], 0, 'Marie vivait à Béthanie avec Marthe et Lazare.', 'Jean 11:1-2', 'Évangiles'],
  ['Quel disciple a douté avant de voir Jésus ressuscité ?', ['Thomas','Pierre','André','Philippe'], 0, 'Thomas a demandé à voir les marques des blessures de Jésus.', 'Jean 20:24-29', 'Évangiles'],
  ['Quel apôtre a été appelé « le Zélote » ?', ['Simon','Matthieu','Philippe','Jude'], 0, 'Simon est présenté comme le Zélote dans les listes des apôtres.', 'Luc 6:13-15', 'Évangiles'],
  ['Quel homme a été transformé en colonne de sel ?', ['La femme de Lot','La femme de Manoah','La femme de Job','La femme de Potiphar'], 0, 'La femme de Lot a regardé en arrière malgré l’avertissement.', 'Genèse 19:15-26', 'Bible'],
  ['Quel patriarche a eu deux fils nommés Ésaü et Jacob ?', ['Isaac','Abraham','Jacob','Joseph'], 0, 'Rébecca a donné naissance aux jumeaux Ésaü et Jacob à Isaac.', 'Genèse 25:19-26', 'Personnages'],
  ['Quel fils de Jacob a été vendu en Égypte par ses frères ?', ['Joseph','Benjamin','Juda','Ruben'], 0, 'Joseph a été vendu puis emmené en Égypte.', 'Genèse 37:23-28', 'Personnages'],
  ['Quel frère de Joseph a proposé de le vendre plutôt que de le tuer ?', ['Juda','Ruben','Siméon','Benjamin'], 0, 'Juda a proposé de vendre Joseph aux marchands.', 'Genèse 37:26-28', 'Personnages'],
  ['Quel roi a vu l’écriture apparaître sur un mur pendant un festin ?', ['Belshatsar','Nabuchodonosor','Darius','Cyrus'], 0, 'Belshatsar a vu une écriture mystérieuse sur le mur.', 'Daniel 5:1-6', 'Rois & prophètes'],
  ['Quel prophète a expliqué l’écriture sur le mur à Belshatsar ?', ['Daniel','Jérémie','Ézéchiel','Ésaïe'], 0, 'Daniel a expliqué le message du mur.', 'Daniel 5:13-28', 'Rois & prophètes'],
  ['Quel roi a autorisé Néhémie à reconstruire les murailles de Jérusalem après l’exil ?', ['Artaxerxès','Saül','Ézéchias','Hérode'], 0, 'Artaxerxès a autorisé Néhémie à retourner à Jérusalem et lui a fourni des lettres et du bois pour les travaux.', 'Néhémie 2:1-8', 'Rois & prophètes'],
  ['Quel homme a reconstruit les murailles de Jérusalem malgré l’opposition ?', ['Néhémie','Esdras','Zorobabel','Daniel'], 0, 'Néhémie a dirigé les travaux de reconstruction.', 'Néhémie 2:17-20; 6:15-16', 'Personnages'],
  ['Quel prophète a vu une vallée remplie d’ossements desséchés ?', ['Ézéchiel','Ésaïe','Jérémie','Daniel'], 0, 'Ézéchiel a reçu cette vision symbolique.', 'Ézéchiel 37:1-14', 'Rois & prophètes'],
  ['Quel prophète a été jeté dans une citerne où il s’est enfoncé dans la boue ?', ['Jérémie','Ézéchiel','Élie','Amos'], 0, 'Jérémie a été descendu dans une citerne et sauvé par Ébed-Mélek.', 'Jérémie 38:6-13', 'Rois & prophètes'],
  ['Quel homme a construit le temple après avoir reçu les préparatifs de David ?', ['Salomon','Zorobabel','Néhémie','Ézéchias'], 0, 'Salomon a construit le premier temple à Jérusalem.', '1 Rois 6:1, 14', 'Rois & prophètes'],
  ['Quel roi a organisé une grande célébration lors de l’inauguration du temple ?', ['Salomon','David','Josias','Ézéchias'], 0, 'Salomon a inauguré le temple avec une grande assemblée.', '1 Rois 8:1-11, 62-66', 'Rois & prophètes'],
  ['Quel roi a fait réparer le temple et a retrouvé le livre de la Loi ?', ['Josias','Manassé','Achaz','Roboam'], 0, 'Le livre de la Loi a été retrouvé pendant les travaux sous Josias.', '2 Rois 22:3-13', 'Rois & prophètes'],
  ['Quel juge a utilisé seulement 300 hommes pour combattre Madian ?', ['Gédéon','Samson','Barak','Éhoud'], 0, 'Gédéon a combattu avec une petite troupe de 300 hommes.', 'Juges 7:2-7', 'Rois & prophètes'],
  ['Quel juge a délivré Israël d’Églon le roi de Moab ?', ['Éhoud','Samson','Jephté','Otniel'], 0, 'Éhoud a tué Églon et a ensuite rassemblé Israël.', 'Juges 3:15-30', 'Rois & prophètes'],
  ['Quelle femme a tué Sissera avec un piquet de tente ?', ['Jaël','Déborah','Ruth','Abigaïl'], 0, 'Jaël a tué Sissera après qu’il s’est réfugié dans sa tente.', 'Juges 4:17-22', 'Personnages'],
  ['Quel homme a fait un vœu concernant sa fille après une victoire ?', ['Jephté','Gédéon','Samson','Saül'], 0, 'Jephté a fait un vœu imprudent avant la bataille.', 'Juges 11:29-40', 'Rois & prophètes'],
  ['Quel homme a perdu sa force après que ses cheveux ont été coupés ?', ['Samson','Absalom','Saül','Gédéon'], 0, 'Samson a perdu sa force lorsque sa chevelure a été coupée après sa trahison.', 'Juges 16:15-21', 'Personnages'],
  ['Quel prophète a confronté le roi David au sujet de son péché avec Bath-Shéba ?', ['Nathan','Gad','Élie','Samuel'], 0, 'Nathan a utilisé une illustration pour amener David à reconnaître sa faute.', '2 Samuel 12:1-13', 'Rois & prophètes'],
  ['Quel jeune garçon a été appelé par Jéhovah alors qu’il servait auprès d’Héli ?', ['Samuel','David','Josué','Daniel'], 0, 'Jéhovah a appelé Samuel alors qu’il servait au tabernacle sous la direction d’Héli.', '1 Samuel 3:1-10', 'Personnages'],
  ['Quel prophète a annoncé une sécheresse au temps du roi Achab ?', ['Élie','Élisée','Amos','Jérémie'], 0, 'Élie a annoncé qu’il n’y aurait ni rosée ni pluie pendant une période.', '1 Rois 17:1', 'Rois & prophètes'],
  ['Quel apôtre a eu une vision d’un drap contenant des animaux ?', ['Pierre','Paul','Jean','Jacques'], 0, 'Pierre a reçu une vision qui l’a aidé à comprendre que Dieu n’est pas partial.', 'Actes 10:9-16, 34-35', 'Actes'],
  ['Quel homme a été libéré miraculeusement de prison par un ange ?', ['Pierre','Paul','Silas','Jacques'], 0, 'Un ange a fait sortir Pierre de prison.', 'Actes 12:5-11', 'Actes'],
  ['Quel couple a été frappé après avoir menti au sujet d’une contribution ?', ['Ananias et Saphira','Priscille et Aquilas','Hérode et Hérodiade','Zacharie et Élisabeth'], 0, 'Ananias et Saphira ont menti au sujet de l’argent donné.', 'Actes 5:1-10', 'Actes'],
  ['Quel homme a été surnommé Barnabé par les apôtres ?', ['Joseph','Saul','Jean-Marc','Silas'], 0, 'Joseph a reçu le surnom Barnabé.', 'Actes 4:36-37', 'Actes'],
  ['Quel jeune homme est tombé d’une fenêtre pendant que Paul parlait longtemps ?', ['Eutique','Timothée','Tite','Onésime'], 0, 'Eutique est tombé du troisième étage et a été relevé vivant.', 'Actes 20:7-12', 'Actes'],
  ['Quel couple a hébergé Paul et l’a accompagné dans son activité chrétienne ?', ['Priscille et Aquilas','Ananias et Saphira','Zacharie et Élisabeth','Corneille et sa femme'], 0, 'Priscille et Aquilas ont travaillé avec Paul.', 'Actes 18:1-3, 18-26', 'Actes'],
  ['Quel homme a demandé à Jésus : « Que dois-je faire pour hériter de la vie éternelle ? » ?', ['Un homme riche','Zachée','Nicodème','Jairus'], 0, 'Un homme riche a posé cette question à Jésus.', 'Matthieu 19:16-22', 'Évangiles'],
  ['Quel apôtre a signalé à Jésus le garçon qui avait cinq pains et deux poissons ?', ['André','Philippe','Thomas','Matthieu'], 0, 'André a signalé à Jésus le garçon qui avait cinq pains et deux poissons.', 'Jean 6:5-13', 'Évangiles'],
];

export const quizQuestions: QuizQuestion[] = [...facts, ...extraFacts, ...extraFacts2, ...extraFacts3, ...extraFacts4].map((f, i) => ({
  id: `quiz-${i + 1}`,
  type: 'quiz',
  category: f[5],
  difficulty: quizDifficulties[i] || 'medium',
  question: f[0], answers: f[1], correctAnswer: f[2], explanation: f[3], reference: f[4],
}));

quizQuestions.push(...jwQuizExpansion.map((f, i) => ({ id: `quiz-jw-${i + 1}`, type: 'quiz' as const, category: f[5], difficulty: 'medium' as Difficulty, question: f[0], answers: f[1], correctAnswer: f[2], explanation: f[3], reference: f[4] })));

const mysteries: Array<[string, string[], string]> = [
  ['Noé',['J’ai reçu des instructions précises pour construire une grande embarcation.','J’ai vécu avant le Déluge.','Ma famille a été préservée avec moi.'],'Genèse 6:9-22'],
  ['Abraham',['J’ai quitté mon pays sur ordre de Dieu.','J’ai reçu une promesse concernant ma descendance.','J’ai montré ma foi lors d’une épreuve concernant Isaac.'],'Genèse 12:1-4; 22:1-18'],
  ['Joseph',['Mes frères m’ont vendu.','J’ai interprété les rêves de Pharaon.','J’ai administré les réserves d’Égypte pendant une famine.'],'Genèse 37:28; 41:14-41'],
  ['Moïse',['J’ai été élevé en Égypte.','J’ai conduit Israël hors d’Égypte.','J’ai reçu la Loi au Sinaï.'],'Exode 2:10; 14:21-31; 19:20'],
  ['Josué',['J’ai servi aux côtés de Moïse.','J’ai reçu la responsabilité de diriger Israël après sa mort.','J’ai conduit le peuple en Canaan.'],'Josué 1:1-6'],
  ['Ruth',['Je suis devenue veuve.','J’ai choisi de rester avec Noémi.','Boaz est devenu mon mari.'],'Ruth 1:16-17; 4:13'],
  ['David',['J’étais le plus jeune des fils de Jessé.','J’ai gardé les moutons.','J’ai affronté Goliath.'],'1 Samuel 16:11-13; 17:34-50'],
  ['Salomon',['Je suis devenu roi après David.','J’ai demandé de la sagesse à Dieu.','J’ai construit le temple de Jérusalem.'],'1 Rois 2:10-12; 3:5-12; 6:1'],
  ['Élie',['J’ai annoncé une période de sécheresse.','J’ai affronté les prophètes de Baal.','Le mont Carmel est associé à mon ministère.'],'1 Rois 17:1; 18:19-39'],
  ['Daniel',['J’ai servi à Babylone.','J’ai continué à prier malgré une interdiction royale.','J’ai été jeté dans une fosse aux lions.'],'Daniel 1:1-6; 6:7-23'],
  ['Esther',['Je suis devenue reine.','Mardochée m’a encouragée à agir avec courage.','J’ai parlé au roi en faveur de mon peuple.'],'Esther 2:17; 4:13-16; 7:3-4'],
  ['Jonas',['J’ai essayé de fuir une mission.','J’ai été dans un grand poisson.','J’ai finalement annoncé un message à Ninive.'],'Jonas 1:1-3, 17; 3:1-5'],
  ['Samuel',['Ma mère avait prié pour avoir un enfant.','J’ai entendu un appel de nuit alors que j’étais encore jeune.','J’ai servi comme prophète et juge.'],'1 Samuel 1:20; 3:1-10; 7:15-17'],
  ['Samson',['Ma force exceptionnelle me venait de Jéhovah.','J’ai combattu les Philistins.','J’étais naziréen dès ma naissance, et mes cheveux ne devaient pas être coupés.'],'Juges 13:5; 14:6; 15:14; 16:17-19'],
  ['Pierre',['J’étais pêcheur.','J’ai marché quelque temps sur l’eau vers Jésus.','J’ai renié Jésus trois fois.'],'Matthieu 4:18-20; 14:28-31; 26:69-75'],
  ['Matthieu',['J’étais collecteur d’impôts.','J’ai quitté mon bureau pour suivre Jésus.','Mon nom figure parmi les Douze.'],'Matthieu 9:9; 10:2-4'],
  ['Thomas',['Je faisais partie des Douze.','J’ai voulu des preuves de la résurrection de Jésus.','Je suis aussi appelé Didyme.'],'Jean 20:24-29'],
  ['Paul',['J’ai persécuté les disciples avant de devenir chrétien.','Une apparition de Jésus a bouleversé ma route vers Damas.','J’ai participé à plusieurs voyages missionnaires.'],'Actes 9:1-22; 13:1-4'],
  ['Lydie',['Je vendais des articles de pourpre.','J’habitais à Philippes.','J’ai accueilli Paul et ses compagnons.'],'Actes 16:14-15, 40'],
  ['Lazare',['Je vivais à Béthanie.','Mes sœurs étaient Marthe et Marie.','Jésus m’a ressuscité.'],'Jean 11:1-44'],
  ['Marie de Béthanie',['Ma sœur s’appelait Marthe.','Mon frère était Lazare.','J’ai choisi d’écouter Jésus alors que Marthe était occupée.'],'Luc 10:38-42; Jean 11:1-2'],
  ['Marthe',['Je vivais à Béthanie.','J’étais la sœur de Marie et de Lazare.','J’ai parlé avec Jésus au sujet de la résurrection.'],'Luc 10:38-42; Jean 11:20-27'],
  ['Jérémie',['J’ai servi comme prophète avant la destruction de Jérusalem.','J’ai averti Juda à plusieurs reprises.','Mon ministère a rencontré une forte opposition.'],'Jérémie 1:4-10; 26:8-15'],
  ['Ézéchias',['J’ai été roi de Juda.','J’ai encouragé la vraie adoration.','Le prophète Isaïe m’a transmis des messages de Jéhovah.'],'2 Rois 18:1-7; 19:1-7'],

  ['Jacob',['J’ai reçu le nom Israël.','J’ai eu douze fils qui ont donné leur nom aux tribus d’Israël.','J’ai travaillé de nombreuses années chez Laban.'],'Genèse 29:15-30; 32:24-28; 35:22-26'],
  ['Rébecca',['J’ai été choisie comme femme pour Isaac.','J’ai rencontré le serviteur d’Abraham près d’un puits.','J’ai eu des jumeaux, Jacob et Ésaü.'],'Genèse 24:10-20, 58-67; 25:19-26'],
  ['Rahab',['J’habitais à Jéricho.','J’ai caché deux espions israélites.','Ma famille a été épargnée lors de la prise de la ville.'],'Josué 2:1-14; 6:22-25'],
  ['Déborah',['J’étais prophétesse.','Je jugeais Israël sous un palmier.','J’ai encouragé Barak à combattre Sissera.'],'Juges 4:4-10'],
  ['Gédéon',['J’ai demandé des signes à l’aide d’une toison.','J’ai combattu les Madianites.','Mon armée a été réduite à 300 hommes.'],'Juges 6:36-40; 7:2-7'],
  ['Jonathan',['J’étais le fils de Saül.','J’ai noué une profonde amitié avec David.','J’ai soutenu David malgré la jalousie de mon père.'],'1 Samuel 18:1-4; 20:12-17'],
  ['Abigaïl',['Mon mari s’appelait Nabal.','J’ai rencontré David alors qu’il était en colère contre mon mari.','J’ai parlé avec sagesse pour empêcher une vengeance.'],'1 Samuel 25:2-35'],
  ['Élisée',['J’ai été désigné comme successeur d’Élie.','J’ai aidé une veuve qui avait une dette.','J’ai guéri Naamân de la lèpre.'],'1 Rois 19:19-21; 2 Rois 4:1-7; 5:1-14'],
  ['Naamân',['J’étais chef de l’armée de Syrie.','J’étais lépreux.','J’ai été guéri après m’être plongé dans le Jourdain.'],'2 Rois 5:1-14'],
  ['Hilqiya',['J’étais prêtre au temple.','J’ai trouvé le livre de la Loi pendant des réparations.','J’ai remis ce livre au secrétaire Shaphân.'],'2 Rois 22:8-13'],
  ['Shadrak',['J’étais un jeune Hébreu à Babylone.','Je refusais de me prosterner devant la statue du roi.','J’ai été jeté dans une fournaise avec deux compagnons.'],'Daniel 3:12-27'],
  ['André',['J’étais pêcheur.','J’étais le frère de Simon Pierre.','J’ai été parmi les premiers disciples appelés par Jésus.'],'Matthieu 4:18-20; Jean 1:40-42'],
  ['Zachée',['J’étais chef de collecteurs d’impôts.','J’étais de petite taille.','J’ai grimpé dans un sycomore pour voir Jésus.'],'Luc 19:1-10'],
  ['La Samaritaine',['J’ai rencontré Jésus près du puits de Jacob.','J’habitais en Samarie.','J’ai parlé aux habitants de ma ville au sujet de Jésus.'],'Jean 4:5-30, 39-42'],
  ['Timothée',['Ma mère était une croyante juive et mon père était grec.','Paul souhaitait que je l’accompagne.','J’ai accompagné Paul dans son activité chrétienne.'],'Actes 16:1-5'],
  ['Le gardien de prison de Philippes',['J’étais chargé de surveiller Paul et Silas.','Un tremblement de terre a ouvert les portes de la prison.','J’ai été baptisé avec ma maisonnée.'],'Actes 16:25-34'],
  ['Lévi',['J’étais collecteur d’impôts.','Jésus m’a appelé à le suivre.','Je suis aussi appelé Matthieu.'],'Marc 2:13-17; Matthieu 9:9'],
  ['L’homme né aveugle',['J’étais aveugle depuis ma naissance.','Jésus a mis de la boue sur mes yeux.','Je me suis lavé au bassin de Siloé et j’ai vu.'],'Jean 9:1-11'],
  ['Paul',['J’ai voyagé en bateau vers Rome comme prisonnier.','J’ai survécu à un naufrage.','Tous les passagers ont survécu au naufrage.'],'Actes 27:1-44'],
  ['Josias',['Je suis devenu roi très jeune.','Le temple a été réparé sous mon règne.','J’ai soutenu une réforme de la vraie adoration.'],'2 Rois 22:1-13; 23:1-20'],
];



const mysteries3: Array<[string, string[], string]> = [
  ['Isaac',['Je suis le fils d’Abraham et de Sara.','J’ai épousé Rébecca.','J’ai eu les jumeaux Ésaü et Jacob.'],'Genèse 21:1-7; 24:67; 25:19-26'],
  ['Rachel',['J’ai rencontré Jacob près d’un puits.','Je suis devenue sa femme.','J’ai donné naissance à Joseph puis à Benjamin.'],'Genèse 29:9-12, 28-30; 30:22-24; 35:16-18'],
  ['Caleb',['J’ai espionné Canaan avec Josué.','J’ai gardé confiance malgré le rapport négatif de la majorité.','J’ai reçu Hébron comme territoire.'],'Nombres 13:1-3, 30; 14:6-9; Josué 14:6-13'],
  ['Jephté',['J’étais juge en Israël.','J’ai combattu les Ammonites.','J’ai fait un vœu avant la bataille.'],'Juges 11:1-11, 29-40'],
  ['Jaël',['Sissera est venu chercher refuge chez moi.','J’ai accueilli cet ennemi d’Israël dans ma tente.','Je l’ai tué avec un piquet de tente.'],'Juges 4:17-22; 5:24-27'],
  ['Anne',['Je désirais profondément avoir un enfant.','J’ai prié Jéhovah au tabernacle.','J’ai ensuite consacré Samuel à son service.'],'1 Samuel 1:9-28'],
  ['Ézéchiel',['J’étais prêtre et prophète.','J’ai reçu des visions parmi les exilés.','J’ai vu une vision d’ossements desséchés.'],'Ézéchiel 1:1-3; 37:1-14'],
  ['Esdras',['J’étais prêtre et copiste habile de la Loi.','Je suis monté de Babylone à Jérusalem.','J’ai enseigné la Loi au peuple.'],'Esdras 7:6, 10; Néhémie 8:1-8'],
  ['Néhémie',['J’étais échanson du roi de Perse.','J’ai demandé la permission de retourner à Jérusalem.','J’ai dirigé la reconstruction des murailles.'],'Néhémie 1:11; 2:1-18; 6:15'],
  ['Cyrus',['J’étais un roi perse.','Une proclamation liée à mon règne a permis le retour des Juifs.','La reconstruction du temple de Jérusalem a été autorisée.'],'Esdras 1:1-4'],
  ['Aggée',['J’étais prophète après l’exil.','J’ai encouragé les Juifs à reprendre les travaux du temple.','Mon message insistait sur leurs priorités spirituelles.'],'Aggée 1:1-8'],
  ['Zacharie',['J’étais prophète après l’exil.','J’ai reçu plusieurs visions.','J’ai encouragé la reconstruction de Jérusalem et du temple.'],'Zacharie 1:7-17; 4:6-10'],
  ['Bartimée',['J’étais aveugle.','Je mendiais près de Jéricho.','J’ai crié vers Jésus et j’ai retrouvé la vue.'],'Marc 10:46-52'],
  ['Jairus',['J’étais chef de synagogue.','Ma fille était gravement malade.','Jésus a ressuscité ma fille.'],'Marc 5:21-24, 35-43'],
  ['Nicodème',['J’étais pharisien.','J’ai rencontré Jésus de nuit.','J’ai ensuite contribué à son enterrement.'],'Jean 3:1-2; 7:50-52; 19:39-40'],
  ['Philippe',['J’étais l’un des Douze.','J’ai présenté Nathanaël à Jésus.','J’ai demandé à Jésus de montrer le Père.'],'Jean 1:43-46; 14:8-10'],
  ['Corneille',['J’étais centurion.','J’ai reçu une vision qui m’a conduit à faire venir Pierre.','L’esprit saint est venu sur moi et ma maisonnée.'],'Actes 10:1-8, 34-48'],
  ['Priscille',['J’étais chrétienne et je travaillais avec Aquilas.','Nous avons aidé Apollos à mieux comprendre la vérité.','J’ai accompagné mon mari dans l’activité chrétienne.'],'Actes 18:1-3, 24-26'],
  ['Eutyche',['J’étais assis à une fenêtre pendant un long discours de Paul.','Je me suis endormi.','Je suis tombé du troisième étage.'],'Actes 20:7-12'],
  ['Étienne',['J’ai été choisi parmi sept hommes pour servir la congrégation.','J’ai témoigné avec courage.','J’ai été lapidé.'],'Actes 6:1-6, 8-15; 7:54-60'],
];

const mysteries2: Array<[string, string[], string]> = [
  ['Isaac',['Je suis le fils promis à Abraham et Sara.','J’ai été presque offert en sacrifice par mon père.','J’ai épousé Rébecca.'],'Genèse 21:1-7; 22:1-18; 24:67'],
  ['Rachel',['J’ai rencontré Jacob près d’un puits.','Je suis devenue l’une de ses femmes.','J’ai donné naissance à Joseph et Benjamin.'],'Genèse 29:9-12, 28-30; 30:22-24; 35:16-18'],
  ['Léa',['Je suis devenue la femme de Jacob avant Rachel.','J’ai eu plusieurs fils.','J’ai donné naissance à Juda.'],'Genèse 29:21-35'],
  ['Caleb',['J’ai été envoyé comme espion en Canaan avec Josué.','J’ai gardé une foi forte alors que beaucoup avaient peur.','J’ai finalement reçu Hébron comme territoire.'],'Nombres 13:1-3, 30; 14:6-9; Josué 14:6-13'],
  ['Éhoud',['J’étais gaucher.','J’ai été utilisé pour délivrer Israël de Moab.','J’ai tué le roi Églôn.'],'Juges 3:15-23'],
  ['Jephté',['J’ai été juge en Israël.','J’ai combattu les Ammonites.','J’ai fait un vœu à Jéhovah avant la bataille.'],'Juges 11:1-11, 29-40'],
  ['Jaël',['Une femme appelée Déborah était contemporaine de mon histoire.','Sissera a cherché refuge chez moi.','J’ai utilisé un piquet de tente pour le tuer.'],'Juges 4:17-22; 5:24-27'],
  ['Anne',['Je désirais profondément avoir un enfant.','J’ai prié Jéhovah au tabernacle.','J’ai consacré Samuel au service de Jéhovah.'],'1 Samuel 1:9-28'],
  ['Ézéchiel',['J’étais prêtre et prophète.','J’ai reçu des visions alors que j’étais parmi les exilés.','Une de mes visions célèbre montre des ossements desséchés.'],'Ézéchiel 1:1-3; 37:1-14'],
  ['Esdras',['J’étais prêtre et copiste habile de la Loi.','Je suis allé à Jérusalem après l’exil.','J’ai enseigné la Loi au peuple.'],'Esdras 7:1-10; Néhémie 8:1-8'],
  ['Néhémie',['J’étais échanson du roi de Perse.','J’ai appris que les murailles de Jérusalem étaient en mauvais état.','J’ai dirigé la reconstruction des murailles.'],'Néhémie 1:1-4; 2:1-8; 6:15-16'],
  ['Job',['J’étais connu comme un homme intègre.','J’ai subi de grandes pertes.','J’ai continué à parler de ma confiance en Dieu malgré mes épreuves.'],'Job 1:1-22; 2:9-10; 42:10-17'],
  ['Marie, mère de Jésus',['Un ange m’a annoncé que j’aurais un fils.','J’ai donné naissance à Jésus.','J’étais présente avec les disciples après l’ascension de Jésus.'],'Luc 1:26-38; 2:4-7; Actes 1:12-14'],
  ['Jean le Baptiseur',['Je portais un vêtement simple et mangeais de façon particulière.','Je prêchais dans le désert de Judée.','J’ai baptisé Jésus.'],'Matthieu 3:1-6, 13-17'],
  ['Nicodème',['J’étais un chef des Juifs.','Je suis venu parler à Jésus de nuit.','J’ai plus tard contribué à préparer le corps de Jésus pour l’ensevelissement.'],'Jean 3:1-10; 19:38-40'],
  ['Bartimée',['J’étais aveugle.','Je mendiais près de Jéricho.','J’ai insisté pour que Jésus me prête attention.'],'Marc 10:46-52'],
  ['Jaïrus',['J’étais chef de synagogue.','Ma fille était gravement malade.','Jésus l’a ramenée à la vie.'],'Marc 5:21-24, 35-43'],
  ['Matthias',['J’ai été choisi après la mort de Judas.','J’avais accompagné Jésus et ses disciples depuis le baptême de Jean.','J’ai été compté parmi les apôtres.'],'Actes 1:15-26'],
  ['Étienne',['J’étais connu pour ma foi et ma puissance spirituelle.','J’ai été choisi parmi les sept hommes chargés d’un service.','J’ai été tué par lapidation après avoir témoigné.'],'Actes 6:1-6, 8-15; 7:54-60'],
  ['Barnabé',['Je venais de Chypre.','J’ai vendu un champ et donné l’argent aux apôtres.','J’ai accompagné Paul dans son activité missionnaire.'],'Actes 4:36-37; 9:26-27; 13:1-4'],
];


const mysteries4: Array<[string, string[], string]> = [
  ['Ésaü',['Je suis le frère jumeau de Jacob.','J’ai vendu mon droit de fils aîné pour un repas.','Je suis devenu l’ancêtre d’Édom.'],'Genèse 25:24-34; 36:1-9'],
  ['Boaz',['Je suis un parent de la famille d’Élimélek.','J’ai montré de la bonté envers Ruth.','Je suis devenu le mari de Ruth.'],'Ruth 2:1-12; 4:9-13'],
  ['Obed',['Je suis le fils de Boaz et de Ruth.','Ma naissance a apporté de la joie à Noémi.','Je suis devenu le père de Jessé.'],'Ruth 4:13-17, 21-22'],
  ['Joab',['J’étais chef de l’armée de David.','J’ai combattu pour le royaume de David.','J’ai participé à plusieurs épisodes marquants de son règne.'],'2 Samuel 8:16; 10:7-14; 20:23'],
  ['Abner',['J’étais chef de l’armée de Saül.','J’ai ensuite soutenu Is-Bosheth.','J’ai finalement conclu une alliance avec David.'],'1 Samuel 14:50-51; 2 Samuel 2:8-10; 3:6-21'],
  ['Mical',['J’étais la fille de Saül.','J’ai été donnée en mariage à David.','J’ai aidé David à s’échapper de Saül.'],'1 Samuel 18:20-21; 19:11-17'],
  ['Houlda',['J’étais prophétesse à Jérusalem.','On m’a consultée après la découverte du livre de la Loi.','J’ai transmis le message de Jéhovah au sujet du jugement à venir.'],'2 Rois 22:14-20'],
  ['Barak',['J’ai été appelé à combattre Sissera.','Déborah m’a encouragé à agir.','J’ai participé à la victoire sur l’armée de Jabîn.'],'Juges 4:4-16'],
  ['Sissera',['J’étais chef de l’armée de Jabîn.','J’ai fui après la défaite de mon armée.','J’ai trouvé la mort dans la tente de Jaël.'],'Juges 4:2-22'],
  ['Manoah',['Je suis le père de Samson.','Un ange m’a annoncé la naissance de mon fils.','J’ai demandé des précisions sur la façon d’élever l’enfant.'],'Juges 13:2-14'],
  ['Éli',['J’étais prêtre au tabernacle.','Samuel a grandi auprès de moi.','J’ai compris finalement que Jéhovah appelait Samuel.'],'1 Samuel 1:9-28; 3:1-18'],
  ['Guéhazi',['J’étais le serviteur d’Élisée.','J’ai poursuivi Naamân après sa guérison.','Ma cupidité a entraîné une punition.'],'2 Rois 5:20-27'],
  ['Micaïa',['J’étais prophète à l’époque du roi Achab.','J’ai annoncé une issue défavorable à une campagne militaire.','Achab ne m’a pas apprécié pour mon message.'],'1 Rois 22:8-28'],
  ['Zorobabel',['J’ai dirigé le premier groupe de Juifs revenus d’exil.','J’ai participé à la reconstruction du temple.','Mon nom est associé à Josué le grand prêtre dans les prophéties de Zacharie.'],'Esdras 2:1-2; 3:8-13; Zacharie 4:6-10'],
  ['Sédécias',['J’étais roi de Juda.','J’ai régné lorsque Jérusalem a finalement été détruite par Babylone.','J’ai tenté de fuir avant d’être capturé.'],'2 Rois 24:18-20; 25:1-7'],
  ['Belschatsar',['J’étais roi à Babylone.','J’ai donné un grand festin.','Une écriture mystérieuse est apparue sur le mur pendant ce festin.'],'Daniel 5:1-6, 17-30'],
  ['Darius le Mède',['J’ai régné sur le royaume après la chute de Babylone.','Daniel a continué à prier malgré un décret.','J’ai passé une nuit très inquiet pour Daniel dans la fosse aux lions.'],'Daniel 5:30-31; 6:1-23'],
  ['Pilate',['J’étais gouverneur romain de Judée.','J’ai interrogé Jésus avant son exécution.','J’ai finalement livré Jésus pour être exécuté.'],'Matthieu 27:11-26; Jean 18:28-40; 19:1-16'],
  ['Joseph d’Arimathie',['J’étais un homme riche et un disciple de Jésus.','Je n’étais pas d’accord avec la décision du Sanhédrin.','J’ai demandé le corps de Jésus et l’ai placé dans un tombeau neuf.'],'Matthieu 27:57-60; Luc 23:50-53'],
  ['Gamaliel',['J’étais un enseignant de la Loi respecté.','J’ai conseillé au Sanhédrin de ne pas agir précipitamment contre les apôtres.','Saul de Tarse avait été formé à mes pieds.'],'Actes 5:34-39; 22:3'],
];

const mysteryDifficulties: Difficulty[] = [
  'easy', 'easy', 'easy', 'easy', 'medium', 'medium', 'easy', 'easy', 'medium', 'easy',
  'medium', 'easy', 'medium', 'easy', 'easy', 'medium', 'medium', 'easy', 'hard', 'medium',
  'hard', 'medium', 'medium', 'hard', 'easy', 'medium', 'medium', 'medium', 'medium', 'medium',
  'medium', 'medium', 'medium', 'hard', 'medium', 'medium', 'medium', 'medium', 'medium', 'hard',
  'hard', 'hard', 'easy', 'medium', 'easy', 'medium', 'medium', 'hard', 'medium', 'medium',
  'medium', 'hard', 'medium', 'medium', 'hard', 'hard', 'medium', 'medium', 'medium', 'medium',
  'medium', 'hard', 'hard', 'medium', 'easy', 'medium', 'medium', 'medium', 'hard', 'hard',
  'medium', 'medium', 'medium', 'hard', 'medium', 'easy', 'easy', 'easy', 'medium', 'medium',
  'medium', 'hard', 'medium', 'medium', 'medium', 'medium', 'hard', 'hard', 'hard', 'hard',
  'hard', 'hard', 'hard', 'hard', 'medium', 'hard', 'hard', 'hard', 'hard', 'hard',
  'hard', 'medium', 'hard', 'hard',
];

export const mysteryQuestions: MysteryQuestion[] = [...mysteries, ...mysteries2, ...mysteries3, ...mysteries4].map((m, i) => ({
  id: `mystery-${i + 1}`, type: 'mystery', category: 'personnages',
  difficulty: mysteryDifficulties[i] || 'medium', answer: m[0], clues: m[1],
  explanation: `Le personnage recherché est ${m[0]}.`, reference: m[2],
}));

const tfFacts: Array<[string, boolean, string, string]> = [
  ['David était le fils de Jessé.', true, 'Jessé était le père de David.', '1 Samuel 16:1, 10-13'],
  ['Salomon a construit l’arche de Noé.', false, 'Noé a construit l’arche ; Salomon est associé à la construction du temple.', 'Genèse 6:14-22; 1 Rois 6:1'],
  ['Ruth est restée avec Noémi après la mort de son mari.', true, 'Ruth a choisi de rester avec Noémi.', 'Ruth 1:14-17'],
  ['Daniel a été jeté dans une fosse aux lions.', true, 'Daniel a été jeté dans la fosse, puis protégé par Dieu.', 'Daniel 6:16-23'],
  ['Pierre était pêcheur avant de suivre Jésus.', true, 'Pierre faisait partie des pêcheurs appelés par Jésus.', 'Matthieu 4:18-20'],
  ['Matthieu était collecteur d’impôts avant de suivre Jésus.', true, 'Jésus a appelé Matthieu alors qu’il était au bureau des impôts.', 'Matthieu 9:9'],
  ['Jonas a immédiatement accepté d’aller à Ninive.', false, 'Jonas a d’abord tenté de fuir sa mission.', 'Jonas 1:1-3'],
  ['Moïse était le frère d’Aaron.', true, 'Aaron était le frère de Moïse.', 'Exode 4:14-16'],
  ['Saül a été le premier roi d’Israël.', true, 'Saül a été choisi comme premier roi d’Israël.', '1 Samuel 10:1, 24'],
  ['Boaz a épousé Ruth.', true, 'Boaz a épousé Ruth après avoir rempli son rôle de rédempteur.', 'Ruth 4:9-13'],
  ['Élie a affronté les prophètes de Baal au mont Carmel.', true, '1 Rois 18 décrit cette confrontation.', '1 Rois 18:19-39'],
  ['Esther a parlé au roi en faveur de son peuple.', true, 'Esther a demandé au roi de protéger son peuple.', 'Esther 7:3-4'],
  ['Joseph a été vendu par ses frères.', true, 'Les frères de Joseph l’ont vendu à des marchands.', 'Genèse 37:28'],
  ['Josué a succédé à Moïse dans la direction d’Israël.', true, 'Josué a reçu cette responsabilité après la mort de Moïse.', 'Josué 1:1-6'],
  ['Samuel était le père de David.', false, 'Jessé était le père de David ; Samuel a oint David.', '1 Samuel 16:1, 10-13'],
  ['Lazare vivait à Béthanie.', true, 'Lazare et ses sœurs vivaient à Béthanie.', 'Jean 11:1'],
  ['Thomas était aussi appelé Didyme.', true, 'Jean identifie Thomas comme Didyme.', 'Jean 11:16; 20:24'],
  ['Paul faisait partie des Douze choisis par Jésus pendant son ministère terrestre.', false, 'Paul est devenu chrétien après la mort et la résurrection de Jésus et a reçu une mission particulière.', 'Actes 9:1-22; 13:1-4'],
  ['Miriam était la sœur de Moïse.', true, 'Miriam est présentée comme sœur d’Aaron et de Moïse.', 'Exode 15:20; Nombres 26:59'],
  ['Salomon a succédé à David comme roi.', true, 'Salomon a commencé à régner après David.', '1 Rois 2:10-12'],

  ['Jacob a reçu le nom Israël.', true, 'Après avoir lutté avec un ange, Jacob a reçu le nom Israël.', 'Genèse 32:24-28'],
  ['Ésaü a vendu son droit de fils aîné pour un repas.', true, 'Ésaü a vendu son droit de fils aîné à Jacob.', 'Genèse 25:29-34'],
  ['Rébecca était la femme d’Isaac.', true, 'Rébecca est devenue la femme d’Isaac.', 'Genèse 24:59-67'],
  ['La manne tombait du ciel pour nourrir les Israélites dans le désert.', true, 'Jéhovah a fourni la manne aux Israélites.', 'Exode 16:4, 13-15'],
  ['Les Israélites ont traversé la mer Rouge pendant leur sortie d’Égypte.', true, 'Jéhovah a ouvert un passage dans la mer Rouge.', 'Exode 14:21-31'],
  ['Rahab vivait à Jéricho.', true, 'Rahab habitait à Jéricho et a caché les espions.', 'Josué 2:1-14'],
  ['Déborah était prophétesse et jugeait Israël.', true, 'Déborah est présentée comme prophétesse et juge.', 'Juges 4:4-5'],
  ['Gédéon avait une armée de 30 000 hommes lors de la bataille décisive contre Madian.', false, 'L’armée a été réduite jusqu’à 300 hommes.', 'Juges 7:2-7'],
  ['Jonathan était le fils de David.', false, 'Jonathan était le fils de Saül et l’ami de David.', '1 Samuel 18:1-4'],
  ['Abigaïl a contribué à empêcher David de se venger de Nabal.', true, 'Ses paroles sages ont retenu David d’agir sous le coup de la colère.', '1 Samuel 25:23-35'],
  ['Élisée était le successeur d’Élie.', true, 'Élisée a été désigné pour succéder à Élie.', '1 Rois 19:19-21'],
  ['Naamân a été guéri de sa lèpre en se plongeant sept fois dans le Jourdain.', true, 'Naamân a suivi les instructions d’Élisée et a été guéri.', '2 Rois 5:9-14'],
  ['Josias est devenu roi de Juda à l’âge de huit ans.', true, 'Josias avait huit ans lorsqu’il est devenu roi.', '2 Rois 22:1-2'],
  ['Shadrak, Méshak et Abed-Négo ont adoré la statue de Nabuchodonosor.', false, 'Ils ont refusé de se prosterner devant la statue.', 'Daniel 3:12-18'],
  ['André était le frère de Simon Pierre.', true, 'André est présenté comme le frère de Simon Pierre.', 'Matthieu 4:18-20'],
  ['Jésus a jeûné 40 jours dans le désert avant sa tentation.', true, 'Matthieu indique 40 jours et 40 nuits.', 'Matthieu 4:1-2'],
  ['Pierre, Jacques et Jean ont assisté à la transfiguration.', true, 'Ces trois disciples ont accompagné Jésus sur la montagne.', 'Matthieu 17:1-5'],
  ['Le premier miracle rapporté par Jean a eu lieu à Jéricho.', false, 'Il a eu lieu à Cana, où Jésus a changé de l’eau en vin.', 'Jean 2:1-11'],
  ['Zachée était chef de collecteurs d’impôts à Jéricho.', true, 'Zachée est présenté comme chef de collecteurs d’impôts à Jéricho.', 'Luc 19:1-2'],
  ['Paul est mort dans le naufrage vers Rome.', false, 'Paul et tous les passagers ont survécu au naufrage.', 'Actes 27:39-44'],
];



const tfFacts3: Array<[string, boolean, string, string]> = [
  ['Josué a succédé à Moïse comme dirigeant d’Israël.', true, 'Jéhovah a chargé Josué de conduire le peuple après Moïse.', 'Josué 1:1-6'],
  ['Gédéon a vaincu Madian avec une armée de 30 000 hommes.', false, 'L’armée a été réduite à 300 hommes.', 'Juges 7:2-7'],
  ['Jonathan était le fils de Saül.', true, 'Jonathan était le fils de Saül et l’ami de David.', '1 Samuel 18:1-4'],
  ['Abigaïl a empêché David de tuer Nabal dans sa colère.', true, 'Elle a parlé avec sagesse et a retenu David.', '1 Samuel 25:23-35'],
  ['La reine de Saba a rencontré David.', false, 'Elle est venue voir Salomon.', '1 Rois 10:1-10'],
  ['Élie a été nourri par des corbeaux.', true, 'Jéhovah a utilisé des corbeaux pour lui apporter de la nourriture.', '1 Rois 17:2-6'],
  ['Élisée a succédé à Élie.', true, 'Élisée a été désigné comme successeur d’Élie.', '1 Rois 19:19-21; 2 Rois 2:9-15'],
  ['Naamân était roi de Syrie.', false, 'Il était chef de l’armée de Syrie.', '2 Rois 5:1'],
  ['Ézéchias a prié lorsque Sennachérib menaçait Jérusalem.', true, 'Il a présenté la menace à Jéhovah dans la prière.', '2 Rois 19:14-20'],
  ['Daniel a interprété le rêve de la grande statue de Nabuchodonosor.', true, 'Daniel a expliqué le rêve et sa signification.', 'Daniel 2:31-45'],
  ['Shadrak, Méshak et Abed-Négo ont accepté de se prosterner devant la statue.', false, 'Ils ont refusé et ont été jetés dans la fournaise.', 'Daniel 3:12-23'],
  ['Bartimée était aveugle et mendiant près de Jéricho.', true, 'Marc décrit Bartimée comme aveugle et mendiant.', 'Marc 10:46-52'],
  ['Jairus était chef de synagogue.', true, 'Jairus a demandé de l’aide pour sa fille.', 'Marc 5:21-24'],
  ['Zachée était chef de collecteurs d’impôts.', true, 'Il occupait ce poste à Jéricho.', 'Luc 19:1-2'],
  ['Nicodème était un pêcheur galiléen.', false, 'Nicodème était un pharisien et un chef des Juifs.', 'Jean 3:1-2'],
  ['Lazare vivait à Béthanie.', true, 'Lazare vivait à Béthanie avec Marthe et Marie.', 'Jean 11:1'],
  ['Tabitha a été ressuscitée par Paul.', false, 'Pierre a prié pour Tabitha et elle a repris vie.', 'Actes 9:36-42'],
  ['Corneille était centurion.', true, 'Corneille était un officier romain appelé centurion.', 'Actes 10:1'],
  ['Étienne a été lapidé après son témoignage.', true, 'Étienne a été tué par lapidation.', 'Actes 7:54-60'],
  ['Paul est arrivé à Rome après avoir survécu à un naufrage.', true, 'Le récit raconte le naufrage puis son arrivée à Rome.', 'Actes 27:39-44; 28:16-31'],
];

const tfFacts2: Array<[string, boolean, string, string]> = [
  ['Abraham était le père d’Isaac.', true, 'Isaac est né à Abraham et Sara conformément à la promesse.', 'Genèse 21:1-7'],
  ['Jacob a reçu le nom Israël.', true, 'Jéhovah lui a donné le nom Israël.', 'Genèse 32:24-28'],
  ['Joseph était le fils de Moïse.', false, 'Joseph était l’un des fils de Jacob.', 'Genèse 30:22-24; 35:22-26'],
  ['Moïse a été élevé par la fille de Pharaon.', true, 'La fille de Pharaon a recueilli et élevé Moïse.', 'Exode 2:5-10'],
  ['Aaron était le frère de Moïse.', true, 'Aaron a été envoyé à la rencontre de Moïse en Égypte.', 'Exode 4:14-16, 27'],
  ['Rahab a caché deux espions israélites à Jéricho.', true, 'Rahab a caché les espions et les a aidés à repartir.', 'Josué 2:1-14'],
  ['Déborah jugeait Israël sous un palmier.', true, 'Elle s’asseyait sous le palmier de Déborah pour juger Israël.', 'Juges 4:4-5'],
  ['Jaël était la sœur de Déborah.', false, 'Jaël était la femme de Héber le Kénite.', 'Juges 4:11, 17-22'],
  ['Éhoud était gaucher.', true, 'Le récit de Juges 3 le précise lorsqu’il décrit son arme.', 'Juges 3:15-16'],
  ['David a épargné Saül dans une grotte.', true, 'David a refusé de tuer Saül alors qu’il en avait l’occasion.', '1 Samuel 24:1-7'],
  ['La reine de Saba est venue rencontrer Salomon.', true, 'Elle est venue éprouver sa sagesse avec des questions difficiles.', '1 Rois 10:1-10'],
  ['Élie a été emporté dans une tempête de vent.', true, 'Élisée a vu Élie être emporté dans la tempête.', '2 Rois 2:9-12'],
  ['Ézéchias a demandé l’aide de Jéhovah lorsque Sennachérib menaçait Jérusalem.', true, 'Ézéchias a prié et a reçu une réponse par l’intermédiaire d’Isaïe.', '2 Rois 19:14-20'],
  ['Daniel a interprété le rêve de la grande statue de Nabuchodonosor.', true, 'Daniel a expliqué le rêve et son sens.', 'Daniel 2:31-45'],
  ['Shadrak, Méshak et Abed-Négo se sont prosternés devant la statue.', false, 'Ils ont refusé de se prosterner et ont été jetés dans la fournaise.', 'Daniel 3:12-23'],
];


const tfFacts4: Array<[string, boolean, string, string]> = [
  ['Jacob était le frère jumeau d’Ésaü.', true, 'Jacob et Ésaü étaient jumeaux.', 'Genèse 25:24-26'],
  ['Rachel a donné naissance à Joseph.', true, 'Rachel a eu Joseph puis Benjamin.', 'Genèse 30:22-24; 35:16-18'],
  ['Ésaü a vendu son droit de fils aîné à Jacob.', true, 'Ésaü a vendu son droit de fils aîné pour un repas.', 'Genèse 25:29-34'],
  ['Moïse a vu un buisson en feu qui ne se consumait pas.', true, 'Ce signe a attiré l’attention de Moïse au début de sa mission.', 'Exode 3:1-6'],
  ['La manne était fournie aux Israélites dans le désert.', true, 'Jéhovah a fourni la manne comme nourriture.', 'Exode 16:4, 13-15'],
  ['Rahab habitait à Jérusalem.', false, 'Rahab habitait à Jéricho.', 'Josué 2:1'],
  ['Déborah était prophétesse et juge en Israël.', true, 'Le récit la présente comme prophétesse et juge.', 'Juges 4:4-5'],
  ['Gédéon a remporté sa victoire finale avec 30 000 soldats.', false, 'Son armée a été réduite à 300 hommes.', 'Juges 7:2-7'],
  ['Jonathan était le fils de Saül.', true, 'Jonathan était le fils de Saül et l’ami de David.', '1 Samuel 18:1-4'],
  ['Abigaïl a encouragé David à se venger de Nabal.', false, 'Elle a au contraire empêché David d’agir sous le coup de la colère.', '1 Samuel 25:23-35'],
  ['Élisée a succédé à Élie.', true, 'Élisée a été désigné pour succéder à Élie.', '1 Rois 19:19-21'],
  ['Naamân a été guéri de la lèpre après s’être plongé sept fois dans le Jourdain.', true, 'Il a suivi les instructions données par Élisée.', '2 Rois 5:10-14'],
  ['Josias était roi de Juda lorsqu’on a trouvé le livre de la Loi lors des réparations du temple.', true, 'Hilqiya a trouvé le livre pendant les réparations sous le règne de Josias.', '2 Rois 22:3-13'],
  ['Daniel a cessé de prier pendant l’interdiction royale.', false, 'Il a continué à prier trois fois par jour.', 'Daniel 6:7-13'],
  ['Jean le Baptiseur a baptisé Jésus.', true, 'Jean a baptisé Jésus dans le Jourdain.', 'Matthieu 3:13-17'],
  ['André était le frère de Simon Pierre.', true, 'André a amené Simon à Jésus.', 'Jean 1:40-42'],
  ['Zachée était un pêcheur de Galilée.', false, 'Zachée était chef de collecteurs d’impôts à Jéricho.', 'Luc 19:1-2'],
  ['Matthias a été choisi pour remplacer Judas Iscariote.', true, 'Il a été choisi par tirage au sort après la prière.', 'Actes 1:15-26'],
  ['Étienne est mort lapidé après avoir témoigné devant le Sanhédrin.', true, 'Étienne a été lapidé après son témoignage.', 'Actes 7:54-60'],
  ['Lydie habitait à Philippes et vendait des articles de pourpre.', true, 'Elle était marchande d’articles de pourpre et vivait à Philippes.', 'Actes 16:14-15'],
];

const tfDifficulties: Difficulty[] = [
  'easy', 'easy', 'easy', 'easy', 'easy', 'easy', 'medium', 'easy', 'easy', 'easy',
  'medium', 'medium', 'easy', 'easy', 'medium', 'medium', 'hard', 'medium', 'medium', 'easy',
  'medium', 'medium', 'medium', 'easy', 'easy', 'medium', 'medium', 'medium', 'medium', 'medium',
  'medium', 'medium', 'medium', 'easy', 'medium', 'easy', 'medium', 'medium', 'medium', 'medium',
  'easy', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'hard', 'medium',
  'easy', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium',
  'easy', 'medium', 'easy', 'easy', 'easy', 'medium', 'hard', 'hard', 'hard', 'medium',
  'medium', 'medium', 'hard', 'medium', 'easy', 'medium', 'medium', 'medium', 'easy', 'easy',
  'medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'hard', 'medium', 'easy',
  'medium', 'medium', 'hard', 'medium', 'hard',
];

export const trueFalseQuestions: TrueFalseQuestion[] = [...tfFacts, ...tfFacts2, ...tfFacts3, ...tfFacts4].map((f, i) => ({
  id: `tf-${i + 1}`, type: 'truefalse', category: 'Bible', difficulty: tfDifficulties[i] || 'medium',
  statement: f[0], answer: f[1], explanation: f[2], reference: f[3],
}));




const jwTrueFalseExpansion: TrueFalseQuestion[] = [
  { id:'tf-jw-1', type:'truefalse', category:'Bible', difficulty:'medium', statement:'Abraham a quitté Our avec sa famille sur instruction de Dieu.', answer:true, explanation:'Abraham a quitté son pays et sa parenté conformément à l’instruction reçue.', reference:'Genèse 12:1-5' },
  { id:'tf-jw-2', type:'truefalse', category:'Bible', difficulty:'medium', statement:'Isaac a été le père de Jacob et d’Ésaü.', answer:true, explanation:'Rébecca a donné naissance aux jumeaux Jacob et Ésaü.', reference:'Genèse 25:19-26' },
  { id:'tf-jw-3', type:'truefalse', category:'Bible', difficulty:'medium', statement:'Joseph a reconnu ses frères dès leur première rencontre en Égypte.', answer:true, explanation:'Joseph les a reconnus alors qu’eux ne le reconnaissaient pas.', reference:'Genèse 42:6-8' },
  { id:'tf-jw-4', type:'truefalse', category:'Bible', difficulty:'medium', statement:'Moïse est entré en Terre promise avant sa mort.', answer:false, explanation:'Moïse a vu le pays depuis le mont Nebo mais n’y est pas entré.', reference:'Deutéronome 34:1-5' },
  { id:'tf-jw-5', type:'truefalse', category:'Bible', difficulty:'medium', statement:'Rahab a caché deux espions israélites.', answer:true, explanation:'Elle les a cachés et les a aidés à échapper aux hommes du roi.', reference:'Josué 2:1-14' },
  { id:'tf-jw-6', type:'truefalse', category:'Bible', difficulty:'medium', statement:'Jéricho était la première ville prise par les Israélites après la traversée du Jourdain.', answer:true, explanation:'Le récit de Josué décrit la prise de Jéricho.', reference:'Josué 6:1-21' },
  { id:'tf-jw-7', type:'truefalse', category:'Rois & prophètes', difficulty:'medium', statement:'Samuel était roi d’Israël.', answer:false, explanation:'Samuel était prophète et juge ; Saül a été choisi comme roi.', reference:'1 Samuel 7:15-17; 10:1' },
  { id:'tf-jw-8', type:'truefalse', category:'Rois & prophètes', difficulty:'medium', statement:'David a refusé de tuer Saül alors qu’il en avait l’occasion.', answer:true, explanation:'David a épargné Saül par respect pour son statut d’oint de Jéhovah.', reference:'1 Samuel 24:3-7' },
  { id:'tf-jw-9', type:'truefalse', category:'Rois & prophètes', difficulty:'medium', statement:'Salomon a demandé à Dieu la richesse avant toute autre chose.', answer:false, explanation:'Il a demandé un cœur obéissant et du discernement pour juger.', reference:'1 Rois 3:5-12' },
  { id:'tf-jw-10', type:'truefalse', category:'Rois & prophètes', difficulty:'medium', statement:'Élie a entendu une voix après le vent, le tremblement de terre et le feu.', answer:true, explanation:'Le récit décrit ensuite une voix calme et basse.', reference:'1 Rois 19:11-13' },
  { id:'tf-jw-11', type:'truefalse', category:'Rois & prophètes', difficulty:'medium', statement:'Élisée a demandé une double portion de l’esprit d’Élie.', answer:true, explanation:'Élisée a demandé une double portion avant la séparation des deux hommes.', reference:'2 Rois 2:9-12' },
  { id:'tf-jw-12', type:'truefalse', category:'Rois & prophètes', difficulty:'medium', statement:'Jonas a été envoyé à Ninive après avoir essayé de fuir.', answer:true, explanation:'Après l’épisode du poisson, Jonas a reçu de nouveau la mission.', reference:'Jonas 1:1-3; 3:1-3' },
  { id:'tf-jw-13', type:'truefalse', category:'Évangiles', difficulty:'medium', statement:'Jean le Baptiseur était un roi de Galilée.', answer:false, explanation:'Jean était prophète et prédicateur ; Hérode était le dirigeant mentionné dans le récit.', reference:'Matthieu 3:1-6; 14:1-5' },
  { id:'tf-jw-14', type:'truefalse', category:'Évangiles', difficulty:'medium', statement:'Jésus a choisi douze apôtres.', answer:true, explanation:'Les Évangiles donnent les noms des douze apôtres.', reference:'Luc 6:12-16' },
  { id:'tf-jw-15', type:'truefalse', category:'Évangiles', difficulty:'medium', statement:'Jésus a transformé l’eau en vin à Cana.', answer:true, explanation:'Jean présente cet événement comme le premier signe de Jésus.', reference:'Jean 2:1-11' },
  { id:'tf-jw-16', type:'truefalse', category:'Évangiles', difficulty:'medium', statement:'Jésus a ressuscité la fille de Jaïrus.', answer:true, explanation:'Jésus a pris la jeune fille par la main et l’a relevée.', reference:'Marc 5:21-24, 35-43' },
  { id:'tf-jw-17', type:'truefalse', category:'Évangiles', difficulty:'medium', statement:'Nicodème a parlé à Jésus pendant une réunion publique en plein jour.', answer:false, explanation:'Nicodème est venu voir Jésus de nuit.', reference:'Jean 3:1-2' },
  { id:'tf-jw-18', type:'truefalse', category:'Actes', difficulty:'medium', statement:'Paul a été baptisé après sa conversion sur le chemin de Damas.', answer:true, explanation:'Ananias a été envoyé vers Saul et celui-ci a été baptisé.', reference:'Actes 9:17-19' },
  { id:'tf-jw-19', type:'truefalse', category:'Actes', difficulty:'medium', statement:'Lydie vivait à Jérusalem.', answer:false, explanation:'Lydie était de Thyatire et se trouvait à Philippes.', reference:'Actes 16:11-15' },
  { id:'tf-jw-20', type:'truefalse', category:'Actes', difficulty:'medium', statement:'Paul et Silas chantaient des louanges lorsqu’ils étaient emprisonnés à Philippes.', answer:true, explanation:'Ils priaient et chantaient alors que les autres prisonniers les écoutaient.', reference:'Actes 16:22-25' },
  { id:'tf-jw-21', type:'truefalse', category:'Actes', difficulty:'medium', statement:'Les Béréens examinaient chaque jour les Écritures pour vérifier l’enseignement reçu.', answer:true, explanation:'Ils sont décrits comme examinant attentivement les Écritures.', reference:'Actes 17:10-12' },
  { id:'tf-jw-22', type:'truefalse', category:'Actes', difficulty:'medium', statement:'Paul a passé deux ans à Rome dans une maison louée.', answer:true, explanation:'Il y accueillait ceux qui venaient le voir et prêchait le Royaume.', reference:'Actes 28:30-31' },
  { id:'tf-jw-23', type:'truefalse', category:'Actes', difficulty:'medium', statement:'Dorcas était aussi appelée Tabitha.', answer:true, explanation:'Actes donne les deux noms de cette disciple.', reference:'Actes 9:36' },
  { id:'tf-jw-24', type:'truefalse', category:'Actes', difficulty:'medium', statement:'Corneille était un centurion italien.', answer:true, explanation:'Il était officier dans la troupe dite italienne.', reference:'Actes 10:1' },
  { id:'tf-jw-25', type:'truefalse', category:'Actes', difficulty:'medium', statement:'Étienne était l’un des douze apôtres.', answer:false, explanation:'Il faisait partie des sept hommes choisis pour un service particulier.', reference:'Actes 6:1-6' },
  { id:'tf-jw-26', type:'truefalse', category:'Actes', difficulty:'medium', statement:'Timothée avait une mère juive et un père grec.', answer:true, explanation:'Paul mentionne sa mère juive et son père grec.', reference:'Actes 16:1' },
  { id:'tf-jw-27', type:'truefalse', category:'Actes', difficulty:'medium', statement:'Onésime était un esclave devenu chrétien.', answer:true, explanation:'Paul a écrit à Philémon au sujet d’Onésime.', reference:'Philémon 10-16' },
  { id:'tf-jw-28', type:'truefalse', category:'Actes', difficulty:'medium', statement:'La Révélation a été donnée à Jean alors qu’il était à Patmos.', answer:true, explanation:'Jean se trouvait sur l’île de Patmos lorsqu’il a reçu la révélation.', reference:'Révélation 1:9-11' },
];

const quoteQuestions2: QuoteQuestion[] = [
  { id:'quote-11', type:'quote', category:'Foi', difficulty:'medium', quote:'Quel homme a montré sa confiance en Jéhovah lorsqu’il a refusé de tuer Saül, pourtant à sa merci ?', answers:['David','Jonathan','Samuel','Salomon'], correctAnswer:0, explanation:'David a respecté Saül comme oint de Jéhovah et a refusé de le tuer.', reference:'1 Samuel 24:4-7' },
  { id:'quote-12', type:'quote', category:'Courage', difficulty:'medium', quote:'Quelle femme a agi avec courage alors que Sissera cherchait refuge chez elle ?', answers:['Jaël','Déborah','Abigaïl','Ruth'], correctAnswer:0, explanation:'Jaël a accueilli Sissera puis l’a tué.', reference:'Juges 4:17-22' },
  { id:'quote-13', type:'quote', category:'Humilité', difficulty:'hard', quote:'Quel homme a reconnu devant ses frères que Dieu avait transformé une situation douloureuse en moyen de préserver des vies ?', answers:['Joseph','Moïse','David','Daniel'], correctAnswer:0, explanation:'Joseph explique à ses frères que Dieu l’a envoyé devant eux pour préserver des vies.', reference:'Genèse 45:5-8' },
  { id:'quote-14', type:'quote', category:'Prédication', difficulty:'medium', quote:'Quel homme a accepté de parler de Jésus aux non-Juifs après avoir reçu une vision et des indications de l’esprit ?', answers:['Pierre','Paul','Barnabé','Étienne'], correctAnswer:0, explanation:'Pierre a compris que Dieu ne fait pas de favoritisme et a parlé à Corneille et à sa maisonnée.', reference:'Actes 10:9-48' },
  { id:'quote-15', type:'quote', category:'Persévérance', difficulty:'hard', quote:'Quel homme a continué son voyage vers Rome malgré les avertissements concernant les dangers de la mer ?', answers:['Paul','Pierre','Jean','Silas'], correctAnswer:0, explanation:'Paul a poursuivi son voyage vers Rome et a finalement survécu au naufrage.', reference:'Actes 27:9-26, 39-44' },
];

export const challenges: Challenge[] = [
  ['livres','Cite 5 livres de la Bible en 10 secondes.'],
  ['personnages','Cite 5 personnages bibliques en 10 secondes.'],
  ['prophètes','Cite 3 prophètes en 10 secondes.'],
  ['femmes','Cite 4 femmes mentionnées dans la Bible en 10 secondes.'],
  ['rois','Cite 3 rois d’Israël ou de Juda en 10 secondes.'],
  ['lieux','Cite 4 lieux bibliques en 10 secondes.'],
  ['disciples','Cite 5 disciples de Jésus en 10 secondes.'],
  ['miracles','Cite 4 miracles de Jésus en 10 secondes.'],
  ['livres-hebreux','Cite 5 livres des Écritures hébraïques en 10 secondes.'],
  ['evangiles','Cite les 4 Évangiles en 10 secondes.'],
  ['qualites','Cite 5 qualités chrétiennes en 10 secondes.'],
  ['miracles-anciens','Cite 4 miracles accomplis par des serviteurs de Dieu avant Jésus en 10 secondes.'],
  ['villes','Cite 5 villes mentionnées dans la Bible en 10 secondes.'],
  ['femmes-evangiles','Cite 5 femmes mentionnées dans les Évangiles en 10 secondes.'],
  ['actes','Cite 4 personnages du livre des Actes en 10 secondes.'],
  ['prophètes-ecritures','Cite 5 prophètes des Écritures hébraïques en 10 secondes.'],
].map(([category, prompt], i) => ({
  id: `challenge-${i + 1}`,
  type: 'challenge',
  category,
  difficulty: i < 3 ? 'easy' : 'medium',
  prompt,
  seconds: 10,
  acceptedAnswers: ({
    livres: ['Genèse', 'Exode', 'Lévitique', 'Nombres', 'Deutéronome'],
    personnages: ['Adam', 'Noé', 'Abraham', 'Moïse', 'David'],
    prophètes: ['Isaïe', 'Jérémie', 'Ézéchiel', 'Daniel', 'Élie'],
    femmes: ['Ève', 'Sara', 'Ruth', 'Esther', 'Marie'],
    rois: ['Saül', 'David', 'Salomon', 'Ézéchias', 'Josias'],
    lieux: ['Jérusalem', 'Bethléem', 'Jéricho', 'Nazareth', 'Cana'],
    disciples: ['Pierre', 'André', 'Jean', 'Jacques', 'Matthieu'],
    miracles: ['Eau changée en vin', 'Nourriture multipliée', 'Guérison d’un aveugle', 'Guérison d’un lépreux', 'Résurrection de Lazare'],
    'livres-hebreux': ['Genèse', 'Exode', 'Lévitique', 'Nombres', 'Deutéronome'],
    evangiles: ['Matthieu', 'Marc', 'Luc', 'Jean'],
    qualites: ['Amour', 'Foi', 'Patience', 'Humilité', 'Courage'],
    'miracles-anciens': ['Ouverture de la mer Rouge', 'Manne', 'Eau du rocher', 'Guérison de Naamân', 'Résurrection du fils de la veuve de Sarepta'],
    villes: ['Jérusalem', 'Jéricho', 'Bethléem', 'Nazareth', 'Capharnaüm'],
    'femmes-evangiles': ['Marie', 'Marthe', 'Marie de Béthanie', 'Élisabeth', 'Anne'],
    actes: ['Pierre', 'Paul', 'Barnabé', 'Étienne', 'Philippe'],
    'prophètes-ecritures': ['Isaïe', 'Jérémie', 'Ézéchiel', 'Daniel', 'Amos'],
  } as Record<string, string[]>)[category],
}));

/** Les formulations ci-dessous sont des paraphrases originales, pas des citations textuelles de la Bible. */
const baseQuoteQuestions: QuoteQuestion[] = [
  { id:'quote-1', type:'quote', category:'Personnages', difficulty:'easy', quote:'Qui a exprimé sa disponibilité pour être envoyé en mission ?', answers:['Isaïe','Jérémie','Ézéchiel','Samuel'], correctAnswer:0, explanation:'Isaïe s’est déclaré prêt à accepter la mission qui lui était confiée.', reference:'Isaïe 6:8' },
  { id:'quote-2', type:'quote', category:'Fidélité', difficulty:'easy', quote:'Quelle femme a promis à sa belle-mère de rester avec elle et de partager son peuple et son Dieu ?', answers:['Ruth','Esther','Anne','Miriam'], correctAnswer:0, explanation:'Ruth a exprimé une fidélité remarquable envers Noémi.', reference:'Ruth 1:16-17' },
  { id:'quote-3', type:'quote', category:'Disciples', difficulty:'medium', quote:'Quel disciple a déclaré qu’il n’avait personne d’autre vers qui aller que Jésus ?', answers:['Pierre','Thomas','Jean','Philippe'], correctAnswer:0, explanation:'Pierre a exprimé sa confiance en Jésus lorsque beaucoup d’autres disciples se sont retirés.', reference:'Jean 6:66-69' },
  { id:'quote-4', type:'quote', category:'Jeunes', difficulty:'medium', quote:'Quel jeune serviteur a répondu qu’il était prêt à écouter après avoir compris que Jéhovah l’appelait ?', answers:['Samuel','David','Josué','Timothée'], correctAnswer:0, explanation:'Samuel a appris à reconnaître l’appel de Jéhovah.', reference:'1 Samuel 3:8-10' },
  { id:'quote-5', type:'quote', category:'Courage', difficulty:'hard', quote:'Quelle reine a accepté de risquer sa vie pour aller voir le roi et défendre son peuple ?', answers:['Esther','Ruth','Déborah','Abigaïl'], correctAnswer:0, explanation:'Esther a fait preuve de courage malgré le danger.', reference:'Esther 4:15-16' },

  { id:'quote-6', type:'quote', category:'Foi', difficulty:'easy', quote:'Quel homme a affirmé sa confiance en Dieu alors qu’il affrontait un géant ?', answers:['David','Saül','Jonathan','Gédéon'], correctAnswer:0, explanation:'David a expliqué qu’il comptait sur Jéhovah face à Goliath.', reference:'1 Samuel 17:45-47' },
  { id:'quote-7', type:'quote', category:'Prophètes', difficulty:'medium', quote:'Quel prophète, découragé, a demandé à Jéhovah de mettre fin à sa vie sous un genêt ?', answers:['Élie','Jérémie','Jonas','Élisée'], correctAnswer:0, explanation:'Après les événements du mont Carmel, Élie s’est assis sous un genêt et a demandé à mourir.', reference:'1 Rois 19:3-4' },
  { id:'quote-8', type:'quote', category:'Courage', difficulty:'medium', quote:'Quelle femme a retenu David de se venger par le meurtre après l’affaire de Nabal ?', answers:['Abigaïl','Esther','Déborah','Ruth'], correctAnswer:0, explanation:'Abigaïl a rencontré David et l’a convaincu de ne pas se venger lui-même. David a reconnu son bon sens.', reference:'1 Samuel 25:32-35' },
  { id:'quote-9', type:'quote', category:'Disciples', difficulty:'hard', quote:'Quel disciple a exprimé sa conviction que Jésus avait les paroles de la vie éternelle ?', answers:['Pierre','Thomas','André','Matthieu'], correctAnswer:0, explanation:'Pierre a exprimé cette conviction après que beaucoup de disciples se sont retirés.', reference:'Jean 6:66-69' },
  { id:'quote-10', type:'quote', category:'Amour', difficulty:'hard', quote:'Quel apôtre a expliqué que l’amour est patient, bon et non égoïste ?', answers:['Paul','Pierre','Jean','Jacques'], correctAnswer:0, explanation:'Paul développe les qualités de l’amour dans sa première lettre aux Corinthiens.', reference:'1 Corinthiens 13:4-7' },
];


const quoteQuestions3: QuoteQuestion[] = [
  { id:'quote-16', type:'quote', category:'Foi', difficulty:'easy', quote:'Quel jeune homme a refusé de manger les aliments du roi à Babylone parce qu’il voulait rester fidèle à ses convictions ?', answers:['Daniel','Joseph','Timothée','Samuel'], correctAnswer:0, explanation:'Daniel a décidé dans son cœur de ne pas se souiller avec les mets et le vin du roi.', reference:'Daniel 1:8-16' },
  { id:'quote-17', type:'quote', category:'Courage', difficulty:'medium', quote:'Quel homme a demandé à Jéhovah de confirmer son soutien par un signe lié à une toison ?', answers:['Gédéon','Jephté','Samson','Barak'], correctAnswer:0, explanation:'Gédéon a demandé deux signes liés à la toison.', reference:'Juges 6:36-40' },
  { id:'quote-18', type:'quote', category:'Foi', difficulty:'medium', quote:'Quel roi a présenté devant Jéhovah la lettre menaçante de Sennachérib ?', answers:['Ézéchias','Josias','David','Salomon'], correctAnswer:0, explanation:'Ézéchias a étendu la lettre devant Jéhovah et a prié.', reference:'2 Rois 19:14-20' },
  { id:'quote-19', type:'quote', category:'Prédication', difficulty:'medium', quote:'Quel disciple a expliqué les Écritures à un fonctionnaire éthiopien qui voyageait en char ?', answers:['Philippe','Pierre','Barnabé','Étienne'], correctAnswer:0, explanation:'Philippe a expliqué le passage d’Isaïe puis a enseigné au fonctionnaire éthiopien.', reference:'Actes 8:26-39' },
  { id:'quote-20', type:'quote', category:'Humilité', difficulty:'hard', quote:'Quel homme a expliqué à ses frères que Dieu avait permis les événements ayant conduit leur famille en Égypte ?', answers:['Joseph','Moïse','Jonas','Pierre'], correctAnswer:0, explanation:'Joseph a reconnu la main de Dieu dans les événements qui avaient conduit sa famille en Égypte.', reference:'Genèse 45:4-8' },
];

const quoteQuestions4: QuoteQuestion[] = [
  { id:'quote-21', type:'quote', category:'Humilité', difficulty:'medium', quote:'Quel homme a demandé pourquoi il serait capable de mener Israël hors d’Égypte alors qu’il se sentait peu sûr de lui ?', answers:['Moïse','Josué','Gédéon','Jérémie'], correctAnswer:0, explanation:'Moïse a exprimé ses hésitations lorsqu’il a reçu sa mission.', reference:'Exode 3:10-12' },
  { id:'quote-22', type:'quote', category:'Persévérance', difficulty:'medium', quote:'Quel apôtre a fait appel à son droit de citoyen romain pour éviter une flagellation illégale ?', answers:['Paul','Pierre','Jean','Barnabé'], correctAnswer:0, explanation:'Paul a invoqué sa citoyenneté romaine après avoir été battu à Philippes.', reference:'Actes 16:35-39' },
  { id:'quote-23', type:'quote', category:'Foi', difficulty:'medium', quote:'Quel disciple a déclaré qu’il voulait aller jusqu’à mourir avec Jésus, même s’il a ensuite eu peur ?', answers:['Pierre','Thomas','André','Philippe'], correctAnswer:0, explanation:'Pierre a exprimé une grande confiance en lui-même avant de renier Jésus.', reference:'Matthieu 26:33-35, 69-75' },
  { id:'quote-24', type:'quote', category:'Courage', difficulty:'hard', quote:'Quel prophète a continué à transmettre le message de Jéhovah malgré les menaces et l’opposition ?', answers:['Jérémie','Jonas','Amos','Nahum'], correctAnswer:0, explanation:'Jérémie a continué son ministère malgré une forte opposition.', reference:'Jérémie 20:7-13; 26:8-15' },
  { id:'quote-25', type:'quote', category:'Confiance', difficulty:'hard', quote:'Quel roi a prié Jéhovah après avoir reçu une lettre menaçante du roi d’Assyrie ?', answers:['Ézéchias','Josias','David','Salomon'], correctAnswer:0, explanation:'Ézéchias a étendu la lettre devant Jéhovah et a prié.', reference:'2 Rois 19:14-20' },
];

export const quoteQuestions: QuoteQuestion[] = [...baseQuoteQuestions, ...quoteQuestions2, ...quoteQuestions3, ...quoteQuestions4];





const baseChronologyQuestions: ChronologyQuestion[] = [
  { id:'chron-1', type:'chronology', category:'Grande chronologie', difficulty:'easy', events:['David devient roi','Déluge','Abraham arrive en Canaan','Moïse conduit Israël hors d’Égypte'], correctOrder:[1,2,3,0], explanation:'Le Déluge précède l’époque d’Abraham, puis vient l’Exode, puis le règne de David.', reference:'Genèse 6–12; Exode 12–14; 2 Samuel 5' },
  { id:'chron-2', type:'chronology', category:'Israël', difficulty:'medium', events:['Salomon devient roi','Saül devient roi','David devient roi','Royaume divisé'], correctOrder:[1,2,0,3], explanation:'Saül précède David, David précède Salomon, puis le royaume est divisé après Salomon.', reference:'1 Samuel 10; 2 Samuel 5; 1 Rois 2; 12' },
  { id:'chron-3', type:'chronology', category:'Évangiles', difficulty:'medium', events:['Jésus commence son ministère','Jésus est baptisé','Naissance de Jésus','Mort et résurrection de Jésus'], correctOrder:[2,1,0,3], explanation:'La naissance précède le baptême, puis le ministère et enfin la mort et la résurrection.', reference:'Matthieu 2–4; 27–28' },

  { id:'chron-4', type:'chronology', category:'Genèse', difficulty:'medium', events:['Jacob rencontre Rachel','Joseph est vendu','Joseph interprète les rêves de Pharaon','Jacob et sa famille s’installent en Égypte'], correctOrder:[0,1,2,3], explanation:'La rencontre de Jacob et Rachel précède l’histoire de Joseph, son élévation en Égypte et l’installation de la famille de Jacob.', reference:'Genèse 29:1-30; 37:12-36; 41:14-46; 46:1-7' },
  { id:'chron-5', type:'chronology', category:'Israël', difficulty:'medium', events:['Jéricho tombe','Déborah juge Israël','Gédéon combat Madian','Samson devient juge'], correctOrder:[0,1,2,3], explanation:'La prise de Jéricho précède l’époque des juges, puis viennent Déborah, Gédéon et Samson.', reference:'Josué 6; Juges 4:4-10; 7:1-25; 13:1-5' },
  { id:'chron-6', type:'chronology', category:'Évangiles', difficulty:'easy', events:['Jésus change l’eau en vin','Jésus nourrit 5 000 hommes','Jésus est transfiguré','Jésus meurt et ressuscite'], correctOrder:[0,1,2,3], explanation:'Ces événements suivent l’ordre général présenté dans les Évangiles.', reference:'Jean 2:1-11; Matthieu 14:13-21; 17:1-5; 27–28' },
  { id:'chron-7', type:'chronology', category:'Actes', difficulty:'medium', events:['Paul se convertit','Lydie devient croyante à Philippes','Paul fait naufrage en route vers Rome','Paul arrive à Rome'], correctOrder:[0,1,2,3], explanation:'La conversion de Saul précède ses voyages, son activité à Philippes, puis son voyage de prisonnier vers Rome et son arrivée.', reference:'Actes 9:1-22; 16:11-15; 27:1-44; 28:16-31' },
  { id:'chron-8', type:'chronology', category:'Rois & prophètes', difficulty:'hard', events:['Élie est nourri par des corbeaux','Élie affronte les prophètes de Baal','Élisée est désigné comme successeur d’Élie','Naamân est guéri'], correctOrder:[0,1,2,3], explanation:'Ces épisodes suivent la progression du ministère d’Élie puis celui d’Élisée.', reference:'1 Rois 17:2-6; 18:19-40; 19:19-21; 2 Rois 5:1-14' },
];


const chronologyQuestions2: ChronologyQuestion[] = [
  { id:'chron-9', type:'chronology', category:'Genèse', difficulty:'easy', events:['Isaac naît','Ésaü et Jacob naissent','Jacob rencontre Rachel','Joseph naît'], correctOrder:[0,1,2,3], explanation:'Isaac naît avant ses fils Ésaü et Jacob ; Jacob rencontre ensuite Rachel, puis Joseph naît plus tard.', reference:'Genèse 21:1-7; 25:19-26; 29:1-30; 30:22-24' },
  { id:'chron-10', type:'chronology', category:'Juges', difficulty:'medium', events:['Éhoud délivre Israël','Déborah juge Israël','Gédéon combat Madian','Samson devient juge'], correctOrder:[0,1,2,3], explanation:'Ces épisodes appartiennent à des périodes successives du temps des juges.', reference:'Juges 3:15-30; 4:4-24; 7:1-25; 13:1-5' },
  { id:'chron-11', type:'chronology', category:'Évangiles', difficulty:'medium', events:['Jean le Baptiseur commence à prêcher','Jésus est baptisé','Jésus appelle ses premiers disciples','Jésus meurt et ressuscite'], correctOrder:[0,1,2,3], explanation:'Jean commence son ministère avant le baptême de Jésus ; Jésus appelle ensuite ses disciples et meurt puis ressuscite.', reference:'Matthieu 3:1-17; 4:18-22; 27–28' },
  { id:'chron-12', type:'chronology', category:'Actes', difficulty:'hard', events:['Matthias est choisi','Étienne est tué','Paul se convertit','Paul arrive à Rome'], correctOrder:[0,1,2,3], explanation:'Matthias est choisi avant le témoignage et la mort d’Étienne ; la conversion de Saul suit, puis son voyage final vers Rome.', reference:'Actes 1:15-26; 7:54-60; 9:1-22; 28:16-31' },
];


const chronologyQuestions3: ChronologyQuestion[] = [
  { id:'chron-13', type:'chronology', category:'Israël', difficulty:'medium', events:['Josué conduit Israël en Canaan','Déborah juge Israël','Gédéon combat Madian','Samson devient juge'], correctOrder:[0,1,2,3], explanation:'La période des juges commence après l’entrée en Canaan et ces épisodes se succèdent.', reference:'Josué 6; Juges 4; 7; 13' },
  { id:'chron-14', type:'chronology', category:'Évangiles', difficulty:'easy', events:['Jean le Baptiseur prêche','Jésus est baptisé','Jésus appelle ses disciples','Jésus meurt et ressuscite'], correctOrder:[0,1,2,3], explanation:'Le ministère de Jean précède le baptême et l’appel des disciples ; la mort et la résurrection viennent ensuite.', reference:'Matthieu 3–4; 27–28' },
  { id:'chron-15', type:'chronology', category:'Actes', difficulty:'medium', events:['Matthias est choisi','Pentecôte','Étienne est tué','Paul se convertit'], correctOrder:[0,1,2,3], explanation:'Matthias est choisi avant la Pentecôte ; le témoignage d’Étienne et la conversion de Saul suivent.', reference:'Actes 1:15-26; 2:1-4; 7:54-60; 9:1-22' },
  { id:'chron-16', type:'chronology', category:'Exil et retour', difficulty:'hard', events:['Cyrus autorise le retour','Reconstruction du temple','Esdras arrive à Jérusalem','Néhémie reconstruit les murailles'], correctOrder:[0,1,2,3], explanation:'Le décret de Cyrus précède les travaux du temple, puis la mission d’Esdras et enfin la reconstruction des murailles sous Néhémie.', reference:'Esdras 1:1-4; 6:14-15; 7:6-10; Néhémie 2:11-18; 6:15' },
];

const chronologyQuestions4: ChronologyQuestion[] = [
  { id:'chron-17', type:'chronology', category:'Genèse', difficulty:'easy', events:['Naissance d’Isaac','Naissance d’Ésaü et Jacob','Joseph vendu par ses frères','Jacob descend en Égypte'], correctOrder:[0,1,2,3], explanation:'Ces événements suivent la progression de l’histoire des patriarches.', reference:'Genèse 21:1-7; 25:19-26; 37:1-36; 46:1-7' },
  { id:'chron-18', type:'chronology', category:'Juges', difficulty:'medium', events:['Éhoud délivre Israël','Déborah juge Israël','Gédéon combat Madian','Samson commence à agir contre les Philistins'], correctOrder:[0,1,2,3], explanation:'Les épisodes appartiennent à des périodes successives de l’époque des juges.', reference:'Juges 3:15-30; 4:4-24; 7:1-25; 13–15' },
  { id:'chron-19', type:'chronology', category:'Évangiles', difficulty:'medium', events:['Naissance de Jésus','Baptême de Jésus','Transfiguration','Mort et résurrection de Jésus'], correctOrder:[0,1,2,3], explanation:'La transfiguration intervient pendant le ministère de Jésus, après son baptême et avant sa mort.', reference:'Matthieu 2; 3:13-17; 17:1-9; 27–28' },
  { id:'chron-20', type:'chronology', category:'Actes', difficulty:'medium', events:['Matthias est choisi','Pentecôte','Étienne témoigne devant le Sanhédrin','Saul devient chrétien'], correctOrder:[0,1,2,3], explanation:'Le choix de Matthias précède la Pentecôte ; le témoignage d’Étienne puis la conversion de Saul viennent ensuite.', reference:'Actes 1:15-26; 2:1-4; 6–7; 9:1-22' },
];

export const chronologyQuestions: ChronologyQuestion[] = [...baseChronologyQuestions, ...chronologyQuestions2, ...chronologyQuestions3, ...chronologyQuestions4];





const baseIntruderQuestions: IntruderQuestion[] = [
  { id:'intruder-1', type:'intruder', category:'Personnages', difficulty:'easy', items:['Noé','Abraham','Moïse','Ninive'], intruder:3, explanation:'Ninive est une ville ; les trois autres sont des personnages.', reference:'Genèse 6:9; 12:1; Exode 2:10; Jonas 1:2' },
  { id:'intruder-2', type:'intruder', category:'Rois', difficulty:'medium', items:['Saül','David','Salomon','Samuel'], intruder:3, explanation:'Samuel était prophète et juge, tandis que les trois autres ont été rois d’Israël.', reference:'1 Samuel 7:15; 10:1; 16:13; 1 Rois 2:10-12' },
  { id:'intruder-3', type:'intruder', category:'Lieux', difficulty:'easy', items:['Bethléhem','Béthanie','Jéricho','Pierre'], intruder:3, explanation:'Pierre est un personnage ; les trois autres sont des lieux.', reference:'Matthieu 2:1; Jean 11:1; Josué 6:1; Matthieu 4:18' },
  { id:'intruder-4', type:'intruder', category:'Évangiles', difficulty:'medium', items:['Matthieu','Marc','Luc','Lydie'], intruder:3, explanation:'Lydie est une chrétienne du premier siècle, pas un écrivain d’Évangile.', reference:'Matthieu 9:9; Marc 1:1; Luc 1:1-4; Actes 16:14-15' },

  { id:'intruder-5', type:'intruder', category:'Personnages', difficulty:'easy', items:['Jacob','Isaac','Rébecca','Jéricho'], intruder:3, explanation:'Jéricho est une ville ; les trois autres sont des personnages.', reference:'Genèse 24–25; Josué 6:1' },
  { id:'intruder-6', type:'intruder', category:'Rois & prophètes', difficulty:'medium', items:['Élie','Élisée','Isaïe','Sarepta'], intruder:3, explanation:'Sarepta est une ville ; les trois autres sont des prophètes.', reference:'1 Rois 17:8-16; 19:19-21; Isaïe 1:1' },
  { id:'intruder-7', type:'intruder', category:'Évangiles', difficulty:'easy', items:['Pierre','André','Matthieu','Cana'], intruder:3, explanation:'Cana est un lieu ; les trois autres sont des disciples.', reference:'Matthieu 4:18-20; 9:9; Jean 2:1' },
  { id:'intruder-8', type:'intruder', category:'Actes', difficulty:'medium', items:['Paul','Timothée','Lydie','Rome'], intruder:3, explanation:'Rome est une ville ; les trois autres sont des personnes.', reference:'Actes 16:1-15; 27:1-2' },
  { id:'intruder-9', type:'intruder', category:'Bible', difficulty:'medium', items:['Genèse','Exode','Ruth','Jéricho'], intruder:3, explanation:'Jéricho est un lieu ; les trois autres sont des livres bibliques.', reference:'Genèse 1:1; Exode 1:1; Ruth 1:1; Josué 6:1' },
];


const intruderQuestions2: IntruderQuestion[] = [
  { id:'intruder-10', type:'intruder', category:'Personnages', difficulty:'easy', items:['Isaac','Jacob','Joseph','Cana'], intruder:3, explanation:'Cana est un lieu ; les trois autres sont des personnages de la Genèse.', reference:'Genèse 21:1-7; 28:10-22; 37:1-36; Jean 2:1' },
  { id:'intruder-11', type:'intruder', category:'Juges', difficulty:'medium', items:['Déborah','Gédéon','Éhoud','Jéricho'], intruder:3, explanation:'Jéricho est une ville ; les trois autres ont été des juges en Israël.', reference:'Juges 3:15-30; 4:4-10; 7:1-25; Josué 6:1' },
  { id:'intruder-12', type:'intruder', category:'Évangiles', difficulty:'easy', items:['Nicodème','Bartimée','Jaïrus','Galilée'], intruder:3, explanation:'La Galilée est une région ; les trois autres sont des personnages.', reference:'Jean 3:1; Marc 10:46; Marc 5:22; Matthieu 4:12-16' },
  { id:'intruder-13', type:'intruder', category:'Actes', difficulty:'medium', items:['Matthias','Étienne','Barnabé','Malte'], intruder:3, explanation:'Malte est une île ; les trois autres sont des chrétiens du premier siècle.', reference:'Actes 1:26; 6:5; 4:36; 28:1' },
  { id:'intruder-14', type:'intruder', category:'Rois', difficulty:'medium', items:['Ézéchias','Josias','Salomon','Siloé'], intruder:3, explanation:'Siloé est un lieu ; les trois autres sont des rois.', reference:'2 Rois 18:1; 22:1; 1 Rois 2:10-12; Jean 9:7' },
];


const intruderQuestions3: IntruderQuestion[] = [
  { id:'intruder-15', type:'intruder', category:'Évangiles', difficulty:'easy', items:['Bartimée','Jairus','Zachée','Cana'], intruder:3, explanation:'Cana est un lieu ; les trois autres sont des personnages des Évangiles.', reference:'Marc 10:46; Marc 5:22; Luc 19:1-2; Jean 2:1' },
  { id:'intruder-16', type:'intruder', category:'Actes', difficulty:'medium', items:['Corneille','Tabitha','Étienne','Malte'], intruder:3, explanation:'Malte est une île ; les trois autres sont des personnes.', reference:'Actes 10:1; 9:36; 6:5; 28:1' },
  { id:'intruder-17', type:'intruder', category:'Évangiles', difficulty:'medium', items:['Nicodème','Philippe','André','Cana'], intruder:3, explanation:'Cana est un lieu ; les trois autres sont des disciples ou interlocuteurs de Jésus.', reference:'Jean 3:1; 14:8; 1:40-44; 2:1' },
  { id:'intruder-18', type:'intruder', category:'Exil', difficulty:'medium', items:['Daniel','Shadrak','Cyrus','Babylone'], intruder:3, explanation:'Babylone est une ville ; les trois autres sont des personnes.', reference:'Daniel 1:1-7; 3:12; Esdras 1:1-4' },
  { id:'intruder-19', type:'intruder', category:'Personnages', difficulty:'easy', items:['Rachel','Léa','Rébecca','Siloé'], intruder:3, explanation:'Siloé est un lieu ; les trois autres sont des femmes de la Genèse.', reference:'Genèse 24:15-67; 29:16-30; 30:22-24; Jean 9:7' },
];

const intruderQuestions4: IntruderQuestion[] = [
  { id:'intruder-20', type:'intruder', category:'Genèse', difficulty:'easy', items:['Isaac','Jacob','Rachel','Jéricho'], intruder:3, explanation:'Jéricho est une ville ; les trois autres sont des personnages de la Genèse.', reference:'Genèse 21:1-7; 29:9-30; 32:24-28; Josué 6:1' },
  { id:'intruder-21', type:'intruder', category:'Juges', difficulty:'medium', items:['Éhoud','Gédéon','Samson','Babylone'], intruder:3, explanation:'Babylone est une ville ; les trois autres sont des juges.', reference:'Juges 3:15-30; 7:1-25; 13:1-5; Daniel 1:1' },
  { id:'intruder-22', type:'intruder', category:'Rois', difficulty:'medium', items:['Ézéchias','Josias','Salomon','Néhémie'], intruder:3, explanation:'Néhémie n’était pas roi ; les trois autres ont été rois.', reference:'2 Rois 18:1; 22:1; 1 Rois 2:10-12; Néhémie 1:11' },
  { id:'intruder-23', type:'intruder', category:'Évangiles', difficulty:'easy', items:['Zachée','Bartimée','Jaïrus','Philippes'], intruder:3, explanation:'Philippes est une ville ; les trois autres sont des personnages des Évangiles.', reference:'Luc 19:1-10; Marc 10:46-52; Marc 5:22-43; Actes 16:11-15' },
  { id:'intruder-24', type:'intruder', category:'Actes', difficulty:'medium', items:['Matthias','Étienne','Corneille','Galilée'], intruder:3, explanation:'La Galilée est une région ; les trois autres sont des personnes mentionnées dans les Actes.', reference:'Actes 1:15-26; 6:5-8; 10:1-8; Matthieu 4:12-16' },
];

export const intruderQuestions: IntruderQuestion[] = [...baseIntruderQuestions, ...intruderQuestions2, ...intruderQuestions3, ...intruderQuestions4];





const baseTimesUpQuestions: TimesUpQuestion[] = [
  { id:'timesup-1', type:'timesup', category:'Personnages', difficulty:'easy', answer:'David', clues:['Roi','Berger','Goliath'], reference:'1 Samuel 16–17' },
  { id:'timesup-2', type:'timesup', category:'Personnages', difficulty:'easy', answer:'Noé', clues:['Arche','Déluge','Corbeau'], reference:'Genèse 6–8' },
  { id:'timesup-3', type:'timesup', category:'Personnages', difficulty:'medium', answer:'Daniel', clues:['Babylone','Prière','Lions'], reference:'Daniel 6' },
  { id:'timesup-4', type:'timesup', category:'Personnages', difficulty:'medium', answer:'Esther', clues:['Reine','Mardochée','Courage'], reference:'Esther 2–7' },
  { id:'timesup-5', type:'timesup', category:'Personnages', difficulty:'hard', answer:'Paul', clues:['Damas','Voyages','Nations'], reference:'Actes 9; 13–28' },

  { id:'timesup-6', type:'timesup', category:'Personnages', difficulty:'easy', answer:'Ruth', clues:['Noémi','Moab','Boaz'], reference:'Ruth 1–4' },
  { id:'timesup-7', type:'timesup', category:'Personnages', difficulty:'medium', answer:'Gédéon', clues:['Toison','Madian','300'], reference:'Juges 6–7' },
  { id:'timesup-8', type:'timesup', category:'Personnages', difficulty:'medium', answer:'Zachée', clues:['Jéricho','Sycomore','Impôts'], reference:'Luc 19:1-10' },
  { id:'timesup-9', type:'timesup', category:'Personnages', difficulty:'medium', answer:'Lydie', clues:['Pourpre','Philippes','Hospitalité'], reference:'Actes 16:11-15, 40' },
  { id:'timesup-10', type:'timesup', category:'Personnages', difficulty:'hard', answer:'Naamân', clues:['Syrie','Lèpre','Jourdain'], reference:'2 Rois 5:1-14' },
];


const timesUpQuestions2: TimesUpQuestion[] = [
  { id:'timesup-11', type:'timesup', category:'Personnages', difficulty:'easy', answer:'Moïse', clues:['Égypte','Buisson','Sinaï'], reference:'Exode 2–3; 19–20' },
  { id:'timesup-12', type:'timesup', category:'Personnages', difficulty:'medium', answer:'Salomon', clues:['Sagesse','Temple','Saba'], reference:'1 Rois 3; 6; 10' },
  { id:'timesup-13', type:'timesup', category:'Personnages', difficulty:'medium', answer:'Élisée', clues:['Élie','Naamân','Huile'], reference:'1 Rois 19:19-21; 2 Rois 4–5' },
  { id:'timesup-14', type:'timesup', category:'Personnages', difficulty:'medium', answer:'Pierre', clues:['Pêcheur','Eau','Pentecôte'], reference:'Matthieu 4:18-20; 14:28-31; Actes 2' },
  { id:'timesup-15', type:'timesup', category:'Personnages', difficulty:'hard', answer:'Étienne', clues:['Sept','Témoignage','Lapidation'], reference:'Actes 6–7' },
];


const timesUpQuestions3: TimesUpQuestion[] = [
  { id:'timesup-16', type:'timesup', category:'Personnages', difficulty:'easy', answer:'Gédéon', clues:['Toison','Madian','300'], reference:'Juges 6–7' },
  { id:'timesup-17', type:'timesup', category:'Personnages', difficulty:'medium', answer:'Bartimée', clues:['Aveugle','Jéricho','Vue'], reference:'Marc 10:46-52' },
  { id:'timesup-18', type:'timesup', category:'Personnages', difficulty:'medium', answer:'Néhémie', clues:['Murailles','Jérusalem','Gouverneur'], reference:'Néhémie 2–6' },
  { id:'timesup-19', type:'timesup', category:'Personnages', difficulty:'medium', answer:'Corneille', clues:['Centurion','Vision','Pierre'], reference:'Actes 10' },
  { id:'timesup-20', type:'timesup', category:'Personnages', difficulty:'hard', answer:'Nicodème', clues:['Pharisien','Nuit','Jésus'], reference:'Jean 3; 7:50-52; 19:39-40' },
];

const timesUpQuestions4: TimesUpQuestion[] = [
  { id:'timesup-21', type:'timesup', category:'Personnages', difficulty:'easy', answer:'Jacob', clues:['Israël','Laban','Douze fils'], reference:'Genèse 29–35' },
  { id:'timesup-22', type:'timesup', category:'Personnages', difficulty:'medium', answer:'Rahab', clues:['Jéricho','Espions','Cordon'], reference:'Josué 2; 6:22-25' },
  { id:'timesup-23', type:'timesup', category:'Personnages', difficulty:'medium', answer:'Déborah', clues:['Prophétesse','Barak','Palmier'], reference:'Juges 4:4-10' },
  { id:'timesup-24', type:'timesup', category:'Personnages', difficulty:'medium', answer:'Jean le Baptiseur', clues:['Désert','Jourdain','Baptême'], reference:'Matthieu 3:1-17' },
  { id:'timesup-25', type:'timesup', category:'Personnages', difficulty:'hard', answer:'Philippe', clues:['Samarie','Éthiopien','Évangélisateur'], reference:'Actes 8:4-40' },
];

export const timesUpQuestions: TimesUpQuestion[] = [...baseTimesUpQuestions, ...timesUpQuestions2, ...timesUpQuestions3, ...timesUpQuestions4];







const jwQuoteExpansion: QuoteQuestion[] = [
  { id:'quote-jw-1', type:'quote', category:'Évangiles', difficulty:'easy', quote:'Quel homme Jésus a-t-il appelé alors qu’il était assis au bureau des impôts ?', answers:['Matthieu','Pierre','Zachée','Nicodème'], correctAnswer:0, explanation:'Jésus a appelé Matthieu à le suivre.', reference:'Matthieu 9:9' },
  { id:'quote-jw-2', type:'quote', category:'Évangiles', difficulty:'medium', quote:'Quel homme Jésus a-t-il guéri en lui ordonnant de se lever et de marcher ?', answers:['L’homme guéri près de la piscine de Bethzatha','Bartimée','Zachée','Le serviteur du centurion'], correctAnswer:0, explanation:'Jésus a dit ces paroles à un homme malade près de la piscine de Bethzatha.', reference:'Jean 5:8-9' },
  { id:'quote-jw-3', type:'quote', category:'Personnages', difficulty:'medium', quote:'Quel jeune homme a répondu qu’il était disponible pour recevoir une mission de Jéhovah ?', answers:['Samuel','Jonas','Moïse','Ésaïe'], correctAnswer:0, explanation:'Samuel a répondu ainsi lorsqu’il a compris que Jéhovah l’appelait.', reference:'1 Samuel 3:4-10' },
  { id:'quote-jw-4', type:'quote', category:'Actes', difficulty:'medium', quote:'Quel homme a demandé ce qu’il devait faire pour être sauvé après le tremblement de terre de Philippes ?', answers:['Le geôlier de Philippes','Corneille','Lydie','Eutique'], correctAnswer:0, explanation:'Le geôlier a posé cette question à Paul et Silas.', reference:'Actes 16:29-31' },
  { id:'quote-jw-5', type:'quote', category:'Rois & prophètes', difficulty:'hard', quote:'Quel prophète a demandé au peuple jusqu’à quand il hésiterait entre deux positions ?', answers:['Élie','Élisée','Samuel','Nathan'], correctAnswer:0, explanation:'Élie a lancé ce défi au peuple au mont Carmel.', reference:'1 Rois 18:21' },
  { id:'quote-jw-6', type:'quote', category:'Personnages', difficulty:'medium', quote:'Quelle femme a promis de rester avec Noémi et de partager son peuple ?', answers:['Ruth','Esther','Abigaïl','Rébecca'], correctAnswer:0, explanation:'Ruth a exprimé sa fidélité à Noémi et à son Dieu.', reference:'Ruth 1:16' },
  { id:'quote-jw-7', type:'quote', category:'Évangiles', difficulty:'easy', quote:'Quel homme a présenté Jésus comme l’Agneau de Dieu ?', answers:['Jean le Baptiseur','Pierre','André','Jean'], correctAnswer:0, explanation:'Jean le Baptiseur a identifié Jésus de cette manière.', reference:'Jean 1:29, 36' },
  { id:'quote-jw-8', type:'quote', category:'Actes', difficulty:'hard', quote:'Quel disciple a témoigné avoir vu le ciel ouvert et le Fils de l’homme dans une vision ?', answers:['Étienne','Paul','Philippe','Pierre'], correctAnswer:0, explanation:'Étienne a déclaré cela juste avant sa mort.', reference:'Actes 7:55-56' },
];

const jwChronologyExpansion: ChronologyQuestion[] = [
  { id:'chronology-jw-1', type:'chronology', category:'Bible', difficulty:'easy', events:['Déluge','Appel d’Abraham','Naissance de Moïse','Entrée en Terre promise'], correctOrder:[0,1,2,3], explanation:'Le Déluge précède l’appel d’Abraham, puis viennent Moïse et l’entrée en Terre promise.', reference:'Genèse 12:1-4; Exode 2:1-10; Josué 1:1-6' },
  { id:'chronology-jw-2', type:'chronology', category:'Bible', difficulty:'medium', events:['Joseph vendu par ses frères','Joseph devient administrateur en Égypte','Départ d’Égypte','Traversée de la mer Rouge'], correctOrder:[0,1,2,3], explanation:'Ces événements suivent la chronologie du récit de la Genèse et de l’Exode.', reference:'Genèse 37:28; 41:39-41; Exode 12:31-42; 14:21-31' },
  { id:'chronology-jw-3', type:'chronology', category:'Évangiles', difficulty:'medium', events:['Naissance de Jésus','Baptême de Jésus','Choix des douze apôtres','Mort de Jésus'], correctOrder:[0,1,2,3], explanation:'Les Évangiles présentent ces étapes dans cet ordre général.', reference:'Luc 2:1-20; Matthieu 3:13-17; Luc 6:12-16; Luc 23:33-46' },
  { id:'chronology-jw-4', type:'chronology', category:'Actes', difficulty:'medium', events:['Pentecôte','Conversion de Paul','Premier voyage missionnaire de Paul','Arrivée de Paul à Rome'], correctOrder:[0,1,2,3], explanation:'Ces événements jalonnent le développement de l’activité chrétienne racontée dans les Actes.', reference:'Actes 2; 9; 13–14; 28' },
  { id:'chronology-jw-5', type:'chronology', category:'Rois & prophètes', difficulty:'hard', events:['Saül devient roi','David devient roi','Salomon devient roi','Division du royaume'], correctOrder:[0,1,2,3], explanation:'Saül précède David, puis Salomon ; la division survient après Salomon.', reference:'1 Samuel 10:1; 2 Samuel 5:3-5; 1 Rois 2:10-12; 12:16-20' },
  { id:'chronology-jw-6', type:'chronology', category:'Personnages', difficulty:'medium', events:['Ruth rencontre Boaz','Ruth épouse Boaz','Naissance d’Obed','David naît des générations plus tard'], correctOrder:[0,1,2,3], explanation:'Boaz et Ruth ont eu Obed, ancêtre de David.', reference:'Ruth 2:1-12; 4:9-17; 1 Samuel 16:1-13' },
];

const jwIntruderExpansion: IntruderQuestion[] = [
  { id:'intruder-jw-1', type:'intruder', category:'Évangiles', difficulty:'easy', items:['Matthieu','Marc','Luc','Actes'], intruder:3, explanation:'Actes n’est pas un Évangile ; les trois autres sont des Évangiles.', reference:'Matthieu 1:1; Marc 1:1; Luc 1:1-4; Actes 1:1-2' },
  { id:'intruder-jw-2', type:'intruder', category:'Personnages', difficulty:'easy', items:['Ruth','Esther','Abigaïl','Ninive'], intruder:3, explanation:'Ninive est une ville ; les trois autres sont des femmes.', reference:'Ruth 1:4; Esther 2:7; 1 Samuel 25:3; Jonas 1:2' },
  { id:'intruder-jw-3', type:'intruder', category:'Actes', difficulty:'medium', items:['Corneille','Lydie','Eutique','Patmos'], intruder:3, explanation:'Patmos est une île ; les trois autres sont des personnes.', reference:'Actes 10:1; 16:14; 20:9; Révélation 1:9' },
  { id:'intruder-jw-4', type:'intruder', category:'Rois & prophètes', difficulty:'medium', items:['Élie','Élisée','Nathan','Jérusalem'], intruder:3, explanation:'Jérusalem est une ville ; les trois autres sont des prophètes.', reference:'1 Rois 17:1; 19:19-21; 2 Samuel 12:1; 1 Rois 8:1' },
  { id:'intruder-jw-5', type:'intruder', category:'Personnages', difficulty:'medium', items:['Isaac','Jacob','Joseph','Cana'], intruder:3, explanation:'Cana est un lieu ; les trois autres sont des patriarches/personnages de la Genèse.', reference:'Genèse 21:1-7; 32:24-28; 37:1-36; Jean 2:1' },
  { id:'intruder-jw-6', type:'intruder', category:'Actes', difficulty:'medium', items:['Paul','Barnabé','Silas','Philippes'], intruder:3, explanation:'Philippes est une ville ; les trois autres ont voyagé avec l’activité chrétienne du premier siècle.', reference:'Actes 13:1-3; 15:40; 16:12' },
  { id:'intruder-jw-7', type:'intruder', category:'Évangiles', difficulty:'easy', items:['Pierre','André','Jacques','Béthanie'], intruder:3, explanation:'Béthanie est une ville/village ; les trois autres sont des apôtres.', reference:'Matthieu 4:18-22; Jean 11:1' },
  { id:'intruder-jw-8', type:'intruder', category:'Bible', difficulty:'medium', items:['Genèse','Exode','Ruth','Jéricho'], intruder:3, explanation:'Jéricho est un lieu ; les trois autres sont des livres bibliques.', reference:'Genèse 1:1; Exode 1:1; Ruth 1:1; Josué 6:1' },
];

const jwTimesUpExpansion: TimesUpQuestion[] = [
  { id:'timesup-jw-1', type:'timesup', category:'Personnages', difficulty:'easy', answer:'Samuel', clues:['Enfant','Prophète','Saül'], reference:'1 Samuel 3; 8–10' },
  { id:'timesup-jw-2', type:'timesup', category:'Personnages', difficulty:'medium', answer:'Nathan', clues:['Prophète','David','Parabole'], reference:'2 Samuel 12:1-13' },
  { id:'timesup-jw-3', type:'timesup', category:'Personnages', difficulty:'medium', answer:'Jaël', clues:['Tente','Sissera','Piquet'], reference:'Juges 4:17-22' },
  { id:'timesup-jw-4', type:'timesup', category:'Personnages', difficulty:'easy', answer:'Matthieu', clues:['Impôts','Apôtre','Lévi'], reference:'Matthieu 9:9; Luc 5:27-29' },
  { id:'timesup-jw-5', type:'timesup', category:'Personnages', difficulty:'medium', answer:'Nicodème', clues:['Pharisien','Nuit','Sanhédrin'], reference:'Jean 3:1-2; 7:50-52' },
  { id:'timesup-jw-6', type:'timesup', category:'Personnages', difficulty:'medium', answer:'Tabitha', clues:['Joppé','Bienfaisance','Pierre'], reference:'Actes 9:36-42' },
  { id:'timesup-jw-7', type:'timesup', category:'Personnages', difficulty:'hard', answer:'Onésime', clues:['Philémon','Esclave','Paul'], reference:'Philémon 10-16' },
  { id:'timesup-jw-8', type:'timesup', category:'Personnages', difficulty:'easy', answer:'Zacharie', clues:['Prêtre','Élisabeth','Jean'], reference:'Luc 1:5-25' },
  { id:'timesup-jw-9', type:'timesup', category:'Personnages', difficulty:'medium', answer:'Josias', clues:['Roi','Loi','Temple'], reference:'2 Rois 22:1-13' },
  { id:'timesup-jw-10', type:'timesup', category:'Personnages', difficulty:'medium', answer:'Ézéchiel', clues:['Vision','Ossements','Exil'], reference:'Ézéchiel 1:1; 37:1-14' },
  { id:'timesup-jw-11', type:'timesup', category:'Personnages', difficulty:'hard', answer:'Belshatsar', clues:['Festin','Mur','Daniel'], reference:'Daniel 5:1-30' },
  { id:'timesup-jw-12', type:'timesup', category:'Personnages', difficulty:'easy', answer:'Simon de Cyrène', clues:['Poteau','Jésus','Golgotha'], reference:'Luc 23:26' },
];

const jwChallengeExpansion: Challenge[] = [
  { id:'challenge-jw-1', type:'challenge', category:'Défis', difficulty:'easy', prompt:'En 10 secondes, citez 5 personnages bibliques dont le nom commence par une lettre différente.', seconds:10 },
  { id:'challenge-jw-2', type:'challenge', category:'Défis', difficulty:'easy', prompt:'En 10 secondes, citez 4 livres de la Bible.', seconds:10 },
  { id:'challenge-jw-3', type:'challenge', category:'Défis', difficulty:'medium', prompt:'En 10 secondes, citez 3 juges d’Israël.', seconds:10 },
  { id:'challenge-jw-4', type:'challenge', category:'Défis', difficulty:'medium', prompt:'En 10 secondes, citez 4 apôtres de Jésus.', seconds:10 },
  { id:'challenge-jw-5', type:'challenge', category:'Défis', difficulty:'medium', prompt:'En 10 secondes, citez 3 villes mentionnées dans les Évangiles.', seconds:10 },
  { id:'challenge-jw-6', type:'challenge', category:'Défis', difficulty:'hard', prompt:'En 10 secondes, citez 4 prophètes des Écritures hébraïques.', seconds:10 },
  { id:'challenge-jw-7', type:'challenge', category:'Défis', difficulty:'easy', prompt:'En 10 secondes, citez 3 femmes mentionnées dans la Genèse.', seconds:10 },
  { id:'challenge-jw-8', type:'challenge', category:'Défis', difficulty:'medium', prompt:'En 10 secondes, citez 3 personnes qui ont voyagé avec Paul ou travaillé avec lui.', seconds:10 },
  { id:'challenge-jw-9', type:'challenge', category:'Défis', difficulty:'medium', prompt:'En 10 secondes, citez 3 événements de la vie de David.', seconds:10 },
  { id:'challenge-jw-10', type:'challenge', category:'Défis', difficulty:'hard', prompt:'En 10 secondes, citez 5 personnages qui apparaissent dans le livre des Actes.', seconds:10 },
];



quizQuestions.push(...jwV53Quiz);
quizQuestions.push(...jwV54Quiz);
trueFalseQuestions.push(...jwV54TrueFalse);
mysteryQuestions.push(...jwV54Mystery);
timesUpQuestions.push(...jwV54TimesUp);
trueFalseQuestions.push(...jwV53TrueFalse);
mysteryQuestions.push(...jwV53Mystery);
timesUpQuestions.push(...jwV53TimesUp);
quoteQuestions.push(...jwV53Quotes);
chronologyQuestions.push(...jwV53Chronology);
intruderQuestions.push(...jwV53Intruders);
mysteryQuestions.push(...jwV56Mystery);
challenges.push(...jwV56Challenges);
quoteQuestions.push(...jwV56Quotes);
chronologyQuestions.push(...jwV56Chronology);
intruderQuestions.push(...jwV56Intruders);
timesUpQuestions.push(...jwV56TimesUp);
mysteryQuestions.push(...jwV55Mystery);
quoteQuestions.push(...jwV55Quotes);
chronologyQuestions.push(...jwV55Chronology);
intruderQuestions.push(...jwV55Intruders);
challenges.push(...jwV55Challenges);
challenges.push(...jwV57Challenges);
quoteQuestions.push(...jwV57Quotes);
chronologyQuestions.push(...jwV57Chronology);
intruderQuestions.push(...jwV57Intruders);
timesUpQuestions.push(...jwV57TimesUp);

// V58 : équilibrage des difficultés pour que chaque rubrique reste jouable à tous les niveaux.
quizQuestions.push(...jwV58Quiz);
mysteryQuestions.push(...jwV58Mystery);
trueFalseQuestions.push(...jwV58TrueFalse);

quoteQuestions.push(...jwV61Quote);
mysteryQuestions.push(...jwV61Forbidden);

trueFalseQuestions.push(...jwTrueFalseExpansion);
quoteQuestions.push(...jwQuoteExpansion);
chronologyQuestions.push(...jwChronologyExpansion);
intruderQuestions.push(...jwIntruderExpansion);
timesUpQuestions.push(...jwTimesUpExpansion);
challenges.push(...jwChallengeExpansion);

// V39 — contenu additionnel original, vérifié à partir de thèmes et personnages
// disponibles sur JW.ORG. Les formulations ci-dessous sont propres à Bible Party.
const v39QuizExpansion: QuizQuestion[] = [
  { id:'quiz-v39-01', type:'quiz', category:'Genèse', difficulty:'easy', question:'Quel signe a été donné après le Déluge comme rappel de l’alliance avec Noé ?', answers:['Un arc-en-ciel','Une étoile filante','Une colombe blanche','Une montagne'], correctAnswer:0, explanation:'L’arc-en-ciel a été donné comme signe de l’alliance avec Noé.', reference:'Genèse 9:12-16' },
  { id:'quiz-v39-02', type:'quiz', category:'Genèse', difficulty:'medium', question:'Pourquoi Joseph a-t-il reçu des vêtements spéciaux de la part de son père ?', answers:['Parce qu’il était particulièrement aimé','Parce qu’il était roi','Parce qu’il était prêtre','Parce qu’il avait remporté une guerre'], correctAnswer:0, explanation:'Jacob aimait Joseph plus que ses autres fils et lui a donné un vêtement particulier.', reference:'Genèse 37:3-4' },
  { id:'quiz-v39-03', type:'quiz', category:'Exode', difficulty:'easy', question:'Quel aliment les Israélites ont-ils reçu dans le désert ?', answers:['La manne','Les olives','Le raisin','Le blé cuit'], correctAnswer:0, explanation:'La manne a été fournie aux Israélites comme nourriture dans le désert.', reference:'Exode 16:4-15' },
  { id:'quiz-v39-04', type:'quiz', category:'Juges', difficulty:'medium', question:'Combien d’hommes Gédéon a-t-il finalement gardés pour combattre les Madianites ?', answers:['300','1 000','3 000','12'], correctAnswer:0, explanation:'Jéhovah a réduit l’armée de Gédéon à 300 hommes.', reference:'Juges 7:6-7' },
  { id:'quiz-v39-05', type:'quiz', category:'Rois & prophètes', difficulty:'medium', question:'Quel roi a demandé de la sagesse plutôt que de grandes richesses ?', answers:['Salomon','Saül','Ézéchias','Josias'], correctAnswer:0, explanation:'Salomon a demandé un cœur obéissant et du discernement pour juger le peuple.', reference:'1 Rois 3:5-12' },
  { id:'quiz-v39-06', type:'quiz', category:'Rois & prophètes', difficulty:'hard', question:'Sur quel mont Élie a-t-il affronté les prophètes de Baal ?', answers:['Carmel','Sinaï','Oliviers','Nébo'], correctAnswer:0, explanation:'L’affrontement avec les prophètes de Baal a eu lieu au mont Carmel.', reference:'1 Rois 18:19-20' },
  { id:'quiz-v39-07', type:'quiz', category:'Évangiles', difficulty:'easy', question:'Quel métier Matthieu exerçait-il lorsqu’il a été appelé par Jésus ?', answers:['Collecteur d’impôts','Pêcheur','Charpentier','Berger'], correctAnswer:0, explanation:'Matthieu était assis au bureau des impôts quand Jésus l’a appelé.', reference:'Matthieu 9:9' },
  { id:'quiz-v39-08', type:'quiz', category:'Évangiles', difficulty:'medium', question:'Quel miracle Jésus a-t-il accompli lors d’un mariage à Cana ?', answers:['Il a transformé de l’eau en vin','Il a multiplié les pains','Il a calmé une tempête','Il a guéri un aveugle'], correctAnswer:0, explanation:'À Cana, Jésus a transformé de l’eau en vin.', reference:'Jean 2:1-11' },
  { id:'quiz-v39-09', type:'quiz', category:'Évangiles', difficulty:'easy', question:'Quel disciple a marché sur l’eau vers Jésus ?', answers:['Pierre','Jean','André','Philippe'], correctAnswer:0, explanation:'Pierre est sorti de la barque et a marché sur l’eau vers Jésus.', reference:'Matthieu 14:28-31' },
  { id:'quiz-v39-10', type:'quiz', category:'Actes', difficulty:'medium', question:'Dans quelle ville Paul et Silas ont-ils été emprisonnés avant un tremblement de terre ?', answers:['Philippes','Jérusalem','Antioche','Joppé'], correctAnswer:0, explanation:'Paul et Silas étaient emprisonnés à Philippes lorsqu’un tremblement de terre a ouvert les portes.', reference:'Actes 16:12, 22-26' },
  { id:'quiz-v39-11', type:'quiz', category:'Actes', difficulty:'medium', question:'Quel métier faisait Lydie ?', answers:['Marchande de pourpre','Boulangère','Tisserande de lin','Potière'], correctAnswer:0, explanation:'Lydie vendait de la pourpre et habitait à Philippes.', reference:'Actes 16:14-15' },
  { id:'quiz-v39-12', type:'quiz', category:'Personnages', difficulty:'easy', question:'Qui a été sauvé avec sa famille dans une arche ?', answers:['Noé','Abraham','Moïse','Lot'], correctAnswer:0, explanation:'Noé a construit l’arche sur ordre de Dieu et y est entré avec sa famille.', reference:'Genèse 6:13-22; 7:1' },
  { id:'quiz-v39-13', type:'quiz', category:'Personnages', difficulty:'medium', question:'Qui était la mère de Samuel ?', answers:['Anne','Ruth','Miriam','Abigaïl'], correctAnswer:0, explanation:'Anne a prié pour avoir un fils et a tenu sa promesse de le consacrer au service de Jéhovah.', reference:'1 Samuel 1:9-28' },
  { id:'quiz-v39-14', type:'quiz', category:'Personnages', difficulty:'medium', question:'Quel prophète a été envoyé à Ninive ?', answers:['Jonas','Ésaïe','Jérémie','Malachie'], correctAnswer:0, explanation:'Jonas a reçu la mission d’aller à Ninive.', reference:'Jonas 1:1-3' },
  { id:'quiz-v39-15', type:'quiz', category:'Bible', difficulty:'easy', question:'Quel livre vient juste après les Évangiles ?', answers:['Actes','Romains','Hébreux','Révélation'], correctAnswer:0, explanation:'Dans l’ordre des livres de la Bible, Actes vient après Jean.', reference:'Actes 1:1-2' },
  { id:'quiz-v39-16', type:'quiz', category:'Bible', difficulty:'medium', question:'Quel livre raconte principalement les débuts de l’activité chrétienne après la Pentecôte ?', answers:['Actes','Psaumes','Proverbes','Ruth'], correctAnswer:0, explanation:'Le livre des Actes retrace le développement de l’activité chrétienne au premier siècle.', reference:'Actes 1:8; 2:1-4' },
  { id:'quiz-v39-17', type:'quiz', category:'Personnages', difficulty:'hard', question:'Quel homme a interprété l’écriture apparue sur le mur lors du festin de Belshatsar ?', answers:['Daniel','Néhémie','Esdras','Ézéchiel'], correctAnswer:0, explanation:'Daniel a expliqué le message écrit sur le mur.', reference:'Daniel 5:13-28' },
  { id:'quiz-v39-18', type:'quiz', category:'Personnages', difficulty:'medium', question:'Qui a aidé David à comprendre la gravité de son péché avec Bethsabée ?', answers:['Nathan','Samuel','Élie','Gad'], correctAnswer:0, explanation:'Le prophète Nathan a utilisé une illustration pour amener David à reconnaître sa faute.', reference:'2 Samuel 12:1-13' },
];

const v39TrueFalseExpansion: TrueFalseQuestion[] = [
  { id:'tf-v39-01', type:'truefalse', category:'Genèse', difficulty:'easy', statement:'Noé a reçu l’ordre de construire une arche avant le Déluge.', answer:true, explanation:'Dieu a donné à Noé des instructions précises pour construire l’arche.', reference:'Genèse 6:13-22' },
  { id:'tf-v39-02', type:'truefalse', category:'Exode', difficulty:'easy', statement:'Moïse a été élevé dans la maison de Pharaon après avoir été sauvé des eaux.', answer:true, explanation:'La fille de Pharaon a pris Moïse et l’a élevé comme son fils.', reference:'Exode 2:5-10' },
  { id:'tf-v39-03', type:'truefalse', category:'Juges', difficulty:'medium', statement:'Gédéon a remporté sa victoire avec une armée immense.', answer:false, explanation:'Jéhovah a réduit son groupe à seulement 300 hommes.', reference:'Juges 7:2-7' },
  { id:'tf-v39-04', type:'truefalse', category:'Rois & prophètes', difficulty:'medium', statement:'Élie a affronté les prophètes de Baal au mont Carmel.', answer:true, explanation:'Le défi du mont Carmel a montré qui était le vrai Dieu.', reference:'1 Rois 18:19-24' },
  { id:'tf-v39-05', type:'truefalse', category:'Évangiles', difficulty:'easy', statement:'Matthieu était collecteur d’impôts avant de suivre Jésus.', answer:true, explanation:'Jésus l’a appelé alors qu’il était au bureau des impôts.', reference:'Matthieu 9:9' },
  { id:'tf-v39-06', type:'truefalse', category:'Évangiles', difficulty:'medium', statement:'Pierre n’est jamais sorti de la barque pendant la tempête.', answer:false, explanation:'Pierre est sorti de la barque et a marché sur l’eau vers Jésus.', reference:'Matthieu 14:28-31' },
  { id:'tf-v39-07', type:'truefalse', category:'Actes', difficulty:'medium', statement:'Lydie vendait de la pourpre.', answer:true, explanation:'Elle était marchande de pourpre et a accueilli Paul et ses compagnons.', reference:'Actes 16:14-15' },
  { id:'tf-v39-08', type:'truefalse', category:'Personnages', difficulty:'easy', statement:'Jonas a été envoyé à Ninive.', answer:true, explanation:'Jéhovah lui a demandé de transmettre un message aux habitants de Ninive.', reference:'Jonas 1:1-2' },
  { id:'tf-v39-09', type:'truefalse', category:'Personnages', difficulty:'medium', statement:'Daniel a interprété l’écriture sur le mur pour Belshatsar.', answer:true, explanation:'Daniel a expliqué le message divin au roi.', reference:'Daniel 5:17-28' },
  { id:'tf-v39-10', type:'truefalse', category:'Bible', difficulty:'easy', statement:'Le livre des Actes vient avant les quatre Évangiles.', answer:false, explanation:'Actes vient après Matthieu, Marc, Luc et Jean.', reference:'Actes 1:1-2' },
];

const v39MysteryExpansion: MysteryQuestion[] = [
  { id:'mystery-v39-01', type:'mystery', category:'personnages', difficulty:'easy', answer:'Noé', clues:['J’ai construit un grand moyen de transport.','J’ai fait entrer des animaux par paires.','Je suis passé à travers un Déluge.'], explanation:'Noé a construit l’arche et a survécu au Déluge avec sa famille.', reference:'Genèse 6–9', forbiddenWords:['arche','Déluge','animaux'] },
  { id:'mystery-v39-02', type:'mystery', category:'personnages', difficulty:'medium', answer:'Gédéon', clues:['J’ai combattu les Madianites.','Mon armée a été fortement réduite.','Il ne restait que 300 hommes.'], explanation:'Gédéon a été utilisé pour délivrer Israël avec une petite troupe.', reference:'Juges 6–7', forbiddenWords:['300','Madian','toison'] },
  { id:'mystery-v39-03', type:'mystery', category:'personnages', difficulty:'easy', answer:'Matthieu', clues:['J’avais un métier lié aux impôts.','J’ai quitté mon bureau pour suivre Jésus.','Je suis aussi appelé Lévi.'], explanation:'Matthieu était collecteur d’impôts et est devenu disciple de Jésus.', reference:'Matthieu 9:9; Luc 5:27-29', forbiddenWords:['impôts','Lévi','collecteur'] },
  { id:'mystery-v39-04', type:'mystery', category:'personnages', difficulty:'medium', answer:'Jonas', clues:['Une ville importante m’attendait.','J’ai essayé de fuir ma mission.','J’ai été avalé par un gros poisson.'], explanation:'Jonas a finalement accompli sa mission à Ninive.', reference:'Jonas 1–3', forbiddenWords:['Ninive','poisson','fuir'] },
  { id:'mystery-v39-05', type:'mystery', category:'personnages', difficulty:'hard', answer:'Nathan', clues:['J’étais prophète.','J’ai parlé directement à un roi.','J’ai raconté une histoire sur une brebis.'], explanation:'Nathan a repris David au moyen d’une illustration.', reference:'2 Samuel 12:1-13', forbiddenWords:['David','brebis','prophète'] },
  { id:'mystery-v39-06', type:'mystery', category:'personnages', difficulty:'medium', answer:'Lydie', clues:['Je vivais à Philippes.','Mon commerce concernait une matière précieuse.','J’ai accueilli Paul chez moi.'], explanation:'Lydie était marchande de pourpre et a accueilli les missionnaires.', reference:'Actes 16:13-15', forbiddenWords:['pourpre','Philippes','Paul'] },
  { id:'mystery-v39-07', type:'mystery', category:'personnages', difficulty:'hard', answer:'Daniel', clues:['J’ai interprété des messages difficiles.','J’ai servi sous plusieurs rois.','Une écriture mystérieuse est apparue sur un mur.'], explanation:'Daniel a interprété l’écriture lors du festin de Belshatsar.', reference:'Daniel 5', forbiddenWords:['mur','Belshatsar','lion'] },
  { id:'mystery-v39-08', type:'mystery', category:'personnages', difficulty:'medium', answer:'Anne', clues:['J’ai prié avec beaucoup d’émotion.','J’ai promis de donner mon fils au service de Dieu.','Mon fils s’appelait Samuel.'], explanation:'Anne a tenu sa promesse après la naissance de Samuel.', reference:'1 Samuel 1:9-28', forbiddenWords:['Samuel','prière','fils'] },
];

const v39QuoteExpansion: QuoteQuestion[] = [
  { id:'quote-v39-01', type:'quote', category:'Personnages', difficulty:'easy', quote:'Quel jeune homme a répondu qu’il était prêt à écouter la parole de Jéhovah ?', answers:['Samuel','David','Moïse','Josué'], correctAnswer:0, explanation:'Samuel a répondu ainsi lorsqu’il a compris que Jéhovah l’appelait.', reference:'1 Samuel 3:9-10' },
  { id:'quote-v39-02', type:'quote', category:'Évangiles', difficulty:'easy', quote:'Quel homme a présenté Jésus comme l’Agneau de Dieu ?', answers:['Jean le Baptiseur','Pierre','André','Philippe'], correctAnswer:0, explanation:'Jean le Baptiseur a désigné Jésus de cette manière.', reference:'Jean 1:29, 36' },
  { id:'quote-v39-03', type:'quote', category:'Rois & prophètes', difficulty:'medium', quote:'Quel prophète a demandé au peuple jusqu’à quand il hésiterait entre deux positions ?', answers:['Élie','Nathan','Élisée','Samuel'], correctAnswer:0, explanation:'Élie a lancé ce défi au peuple au mont Carmel.', reference:'1 Rois 18:21' },
  { id:'quote-v39-04', type:'quote', category:'Personnages', difficulty:'medium', quote:'Quelle femme a promis de rester avec Noémi et de partager son peuple ?', answers:['Ruth','Esther','Anne','Déborah'], correctAnswer:0, explanation:'Ruth a exprimé sa fidélité à Noémi et à son Dieu.', reference:'Ruth 1:16' },
];

const v39ChronologyExpansion: ChronologyQuestion[] = [
  { id:'chronology-v39-01', type:'chronology', category:'Bible', difficulty:'easy', events:['Création d’Adam','Déluge','Appel d’Abraham','Naissance de Joseph'], correctOrder:[0,1,2,3], explanation:'Ces événements se succèdent dans cet ordre dans le récit de la Genèse.', reference:'Genèse 1–12; 30:22-24' },
  { id:'chronology-v39-02', type:'chronology', category:'Personnages', difficulty:'medium', events:['David devient roi','Salomon devient roi','Division du royaume','Exil à Babylone'], correctOrder:[0,1,2,3], explanation:'La division du royaume intervient après Salomon, puis vient l’exil bien plus tard.', reference:'2 Samuel 5:3-5; 1 Rois 2:10-12; 12:16-20; 2 Rois 25:8-12' },
  { id:'chronology-v39-03', type:'chronology', category:'Évangiles', difficulty:'easy', events:['Naissance de Jésus','Baptême de Jésus','Choix des apôtres','Mort de Jésus'], correctOrder:[0,1,2,3], explanation:'Ces étapes suivent le déroulement général des Évangiles.', reference:'Luc 2; Matthieu 3; Luc 6; Luc 23' },
  { id:'chronology-v39-04', type:'chronology', category:'Actes', difficulty:'medium', events:['Pentecôte','Conversion de Paul','Voyage missionnaire de Paul','Emprisonnement à Rome'], correctOrder:[0,1,2,3], explanation:'Les Actes racontent ces étapes successives du développement de l’activité chrétienne.', reference:'Actes 2; 9; 13–14; 28' },
];

const v39IntruderExpansion: IntruderQuestion[] = [
  { id:'intruder-v39-01', type:'intruder', category:'Personnages', difficulty:'easy', items:['Noé','Abraham','Moïse','Jéricho'], intruder:3, explanation:'Jéricho est un lieu ; les trois autres sont des personnages.', reference:'Genèse 6; 12; Exode 2; Josué 6' },
  { id:'intruder-v39-02', type:'intruder', category:'Évangiles', difficulty:'easy', items:['Matthieu','Marc','Luc','Philippe'], intruder:3, explanation:'Philippe est une personne ; les trois autres sont des noms d’Évangiles.', reference:'Matthieu 1:1; Marc 1:1; Luc 1:1-4; Actes 8:5' },
  { id:'intruder-v39-03', type:'intruder', category:'Personnages', difficulty:'medium', items:['Anne','Ruth','Lydie','Philippes'], intruder:3, explanation:'Philippes est une ville ; les trois autres sont des femmes.', reference:'1 Samuel 1; Ruth 1; Actes 16:14-15' },
  { id:'intruder-v39-04', type:'intruder', category:'Rois & prophètes', difficulty:'medium', items:['Élie','Élisée','Nathan','Carmel'], intruder:3, explanation:'Carmel est un lieu ; les trois autres sont des prophètes.', reference:'1 Rois 17–19; 2 Samuel 12:1' },
];

const v39TimesUpExpansion: TimesUpQuestion[] = [
  { id:'timesup-v39-01', type:'timesup', category:'Personnages', difficulty:'easy', answer:'Noé', clues:['Arche','Famille','Déluge'], reference:'Genèse 6–9' },
  { id:'timesup-v39-02', type:'timesup', category:'Personnages', difficulty:'medium', answer:'Gédéon', clues:['Toison','Madian','300'], reference:'Juges 6–7' },
  { id:'timesup-v39-03', type:'timesup', category:'Personnages', difficulty:'easy', answer:'Matthieu', clues:['Lévi','Impôts','Apôtre'], reference:'Matthieu 9:9' },
  { id:'timesup-v39-04', type:'timesup', category:'Personnages', difficulty:'medium', answer:'Lydie', clues:['Pourpre','Philippes','Hospitalité'], reference:'Actes 16:14-15' },
  { id:'timesup-v39-05', type:'timesup', category:'Personnages', difficulty:'hard', answer:'Belshatsar', clues:['Festin','Mur','Daniel'], reference:'Daniel 5' },
  { id:'timesup-v39-06', type:'timesup', category:'Personnages', difficulty:'medium', answer:'Anne', clues:['Prière','Samuel','Sanctuaire'], reference:'1 Samuel 1' },
  { id:'timesup-v39-07', type:'timesup', category:'Personnages', difficulty:'medium', answer:'Nathan', clues:['Prophète','David','Brebis'], reference:'2 Samuel 12' },
  { id:'timesup-v39-08', type:'timesup', category:'Personnages', difficulty:'easy', answer:'Jonas', clues:['Ninive','Fuite','Poisson'], reference:'Jonas 1–3' },
];

const v39ChallengeExpansion: Challenge[] = [
  { id:'challenge-v39-01', type:'challenge', category:'Défis', difficulty:'easy', prompt:'En 10 secondes, citez 5 personnages bibliques.', seconds:10 },
  { id:'challenge-v39-02', type:'challenge', category:'Défis', difficulty:'easy', prompt:'En 10 secondes, citez 4 livres de la Bible.', seconds:10 },
  { id:'challenge-v39-03', type:'challenge', category:'Défis', difficulty:'medium', prompt:'En 10 secondes, citez 3 prophètes.', seconds:10 },
  { id:'challenge-v39-04', type:'challenge', category:'Défis', difficulty:'medium', prompt:'En 10 secondes, citez 4 apôtres de Jésus.', seconds:10 },
  { id:'challenge-v39-05', type:'challenge', category:'Défis', difficulty:'medium', prompt:'En 10 secondes, citez 3 femmes de la Bible.', seconds:10 },
  { id:'challenge-v39-06', type:'challenge', category:'Défis', difficulty:'hard', prompt:'En 10 secondes, citez 5 lieux mentionnés dans les Évangiles.', seconds:10 },
];

quizQuestions.push(...v39QuizExpansion);
trueFalseQuestions.push(...v39TrueFalseExpansion);
mysteryQuestions.push(...v39MysteryExpansion);
quoteQuestions.push(...v39QuoteExpansion);
chronologyQuestions.push(...v39ChronologyExpansion);
intruderQuestions.push(...v39IntruderExpansion);
timesUpQuestions.push(...v39TimesUpExpansion);
challenges.push(...v39ChallengeExpansion);


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

const v50PersonnageTrueFalseSupplement: TrueFalseQuestion[] = [
  { id:'tf-v50-personnages-06', type:'truefalse', category:'Personnages', difficulty:'easy', statement:'Abraham est présenté comme un ami de Dieu.', answer:true, explanation:'Les Écritures présentent Abraham comme ami de Dieu.', reference:'Jacques 2:23' },
  { id:'tf-v50-personnages-07', type:'truefalse', category:'Personnages', difficulty:'easy', statement:'Ésaü et Jacob étaient jumeaux.', answer:true, explanation:'Rébecca a donné naissance aux jumeaux Ésaü et Jacob.', reference:'Genèse 25:24-26' },
  { id:'tf-v50-personnages-08', type:'truefalse', category:'Personnages', difficulty:'medium', statement:'Joseph a été vendu par ses frères avant d’arriver en Égypte.', answer:true, explanation:'Ses frères l’ont vendu à des marchands qui l’ont emmené en Égypte.', reference:'Genèse 37:23-28' },
  { id:'tf-v50-personnages-09', type:'truefalse', category:'Personnages', difficulty:'easy', statement:'Ruth était une Moabite.', answer:true, explanation:'Ruth était originaire de Moab avant de venir avec Noémi.', reference:'Ruth 1:4, 16-17' },
  { id:'tf-v50-personnages-10', type:'truefalse', category:'Personnages', difficulty:'medium', statement:'David était le fils de Jessé.', answer:true, explanation:'Jessé était le père de David.', reference:'1 Samuel 16:1, 10-13' },
  { id:'tf-v50-personnages-11', type:'truefalse', category:'Personnages', difficulty:'medium', statement:'Jonathan était le fils de Saül.', answer:true, explanation:'Jonathan était le fils de Saül et l’ami proche de David.', reference:'1 Samuel 18:1-4' },
  { id:'tf-v50-personnages-12', type:'truefalse', category:'Personnages', difficulty:'medium', statement:'Déborah était prophétesse et juge en Israël.', answer:true, explanation:'Le récit la présente comme prophétesse et juge.', reference:'Juges 4:4-5' },
  { id:'tf-v50-personnages-13', type:'truefalse', category:'Personnages', difficulty:'medium', statement:'Jaël était la sœur de Déborah.', answer:false, explanation:'Jaël était la femme de Héber le Kénite.', reference:'Juges 4:11, 17-22' },
  { id:'tf-v50-personnages-14', type:'truefalse', category:'Personnages', difficulty:'medium', statement:'Élisée a succédé au prophète Élie.', answer:true, explanation:'Élisée a été désigné pour poursuivre son service prophétique.', reference:'1 Rois 19:19-21; 2 Rois 2:9-15' },
  { id:'tf-v50-personnages-15', type:'truefalse', category:'Personnages', difficulty:'medium', statement:'Daniel a continué à prier malgré l’interdiction royale.', answer:true, explanation:'Daniel a continué à prier trois fois par jour.', reference:'Daniel 6:7-13' },
  { id:'tf-v50-personnages-16', type:'truefalse', category:'Personnages', difficulty:'easy', statement:'Pierre était pêcheur avant de suivre Jésus.', answer:true, explanation:'Pierre faisait partie des pêcheurs appelés par Jésus.', reference:'Matthieu 4:18-20' },
  { id:'tf-v50-personnages-17', type:'truefalse', category:'Personnages', difficulty:'easy', statement:'André était le frère de Simon Pierre.', answer:true, explanation:'André est présenté comme le frère de Simon Pierre.', reference:'Jean 1:40-42' },
  { id:'tf-v50-personnages-18', type:'truefalse', category:'Personnages', difficulty:'medium', statement:'Tabitha était aussi appelée Dorcas.', answer:true, explanation:'Actes donne ces deux noms pour la même disciple.', reference:'Actes 9:36' },
  { id:'tf-v50-personnages-19', type:'truefalse', category:'Personnages', difficulty:'medium', statement:'Timothée avait une mère juive et un père grec.', answer:true, explanation:'Paul mentionne cette origine familiale.', reference:'Actes 16:1' },
  { id:'tf-v50-personnages-20', type:'truefalse', category:'Personnages', difficulty:'easy', statement:'Lydie était une marchande d’articles de pourpre.', answer:true, explanation:'Lydie exerçait ce commerce à Philippes.', reference:'Actes 16:14-15' },
];

quizQuestions.push(...v50CategoryQuizExpansion);
trueFalseQuestions.push(...v50CategoryTrueFalseExpansion, ...v50PersonnageTrueFalseSupplement);
mysteryQuestions.push(...v50CategoryMysteryExpansion);
timesUpQuestions.push(...v50CategoryTimesUpExpansion);

// Enrichissement éditorial des 8 nouvelles rubriques.
quizQuestions.push(...categoryQuizExpansion);
trueFalseQuestions.push(...categoryTrueFalseExpansion);
mysteryQuestions.push(...categoryMysteryExpansion);
timesUpQuestions.push(...categoryTimesUpExpansion);
quoteQuestions.push(...categoryQuoteExpansion);
chronologyQuestions.push(...categoryChronologyExpansion);
intruderQuestions.push(...categoryIntruderExpansion);
challenges.push(...categoryChallengeExpansion);


// Nettoyage éditorial final : aucune carte strictement identique ne doit apparaître
// plusieurs fois dans un même mode. Les cartes ayant le même personnage mais des
// indices différents restent volontairement conservées.
function dedupeInPlace<T extends { type?: string; id?: string; question?: string; statement?: string; quote?: string; prompt?: string; answer?: string | boolean; clues?: string[]; events?: string[]; items?: string[] }>(items: T[]) {
  const seen = new Set<string>();
  const keyOf = (q: T) => {
    if (q.type === 'quiz') return `quiz|${q.question?.trim().toLowerCase()}`;
    if (q.type === 'truefalse') return `truefalse|${q.statement?.trim().toLowerCase()}`;
    if (q.type === 'quote') return `quote|${q.quote?.trim().toLowerCase()}`;
    if (q.type === 'challenge') return `challenge|${q.prompt?.trim().toLowerCase()}`;
    if (q.type === 'chronology') return `chronology|${JSON.stringify((q.events || []).map((v) => v.trim().toLowerCase()))}`;
    if (q.type === 'intruder') return `intruder|${JSON.stringify((q.items || []).map((v) => v.trim().toLowerCase()))}`;
    if (q.type === 'mystery' || q.type === 'timesup') return `${q.type}|${String(q.answer ?? '').trim().toLowerCase()}|${JSON.stringify((q.clues || []).map((v) => v.trim().toLowerCase()))}`;
    return q.id || '';
  };
  for (let i = items.length - 1; i >= 0; i -= 1) {
    const key = keyOf(items[i]);
    if (seen.has(key)) items.splice(i, 1);
    else seen.add(key);
  }
}

dedupeInPlace(quizQuestions);
dedupeInPlace(mysteryQuestions);
dedupeInPlace(trueFalseQuestions);
dedupeInPlace(challenges);
dedupeInPlace(quoteQuestions);
dedupeInPlace(chronologyQuestions);
dedupeInPlace(intruderQuestions);
dedupeInPlace(timesUpQuestions);



// ===== Audit éditorial V89 =====
// Corrections ciblées : suppression de doublons quasi identiques, remplacement de cartes
// trop élémentaires et correction des cartes « Qui est-ce ? » qui répondaient à un verset
// ou à un objet alors que le mode est centré sur les personnages.
const editorialRemoveQuizIds = new Set([
  'quiz-22','quiz-33','quiz-35','quiz-37','quiz-57','quiz-67','quiz-78','quiz-80','quiz-84',
  'quiz-141','quiz-173','quiz-197','quiz-201','quiz-103','quiz-129',
  'quiz-186','quiz-202','quiz-203','v54-q046','v54-q058','quiz-v50-personnages-02','jwcat-quiz-22','jwcat-quiz-68',
]);
for (let i = quizQuestions.length - 1; i >= 0; i -= 1) {
  if (editorialRemoveQuizIds.has(quizQuestions[i].id)) quizQuestions.splice(i, 1);
}

quizQuestions.push(
  { id:'quiz-22', type:'quiz', category:'Personnages', difficulty:'medium', question:'Avant son combat contre Goliath, quelle partie de l’équipement de Saül David a-t-il finalement refusée ?', answers:['L’armure de Saül','La fronde','Le bâton de berger','Le bouclier de Jonathan'], correctAnswer:0, explanation:'David a essayé l’équipement de Saül, mais ne pouvait pas marcher avec et a préféré utiliser sa fronde et cinq pierres.', reference:'1 Samuel 17:38-40' },
  { id:'quiz-33', type:'quiz', category:'Questions bibliques', difficulty:'medium', question:'Quelle disposition particulière était prévue pour la manne le sixième jour ?', answers:['Une double portion devait être recueillie','Elle devait être conservée pendant sept jours','Elle ne tombait pas ce jour-là','Elle devait être cuite uniquement au matin'], correctAnswer:0, explanation:'Le sixième jour, les Israélites devaient recueillir deux fois plus de manne en prévision du sabbat.', reference:'Exode 16:22-26' },
  { id:'quiz-35', type:'quiz', category:'Questions bibliques', difficulty:'medium', question:'Que s’est-il produit lorsque Moïse a étendu sa main sur la mer au moment de la sortie d’Égypte ?', answers:['Les eaux se sont séparées pour laisser passer Israël','La mer s’est transformée en eau douce','Une barque est apparue pour le peuple','Les Égyptiens ont traversé les premiers'], correctAnswer:0, explanation:'Un vent d’est a fait reculer les eaux et les Israélites ont traversé sur un sol sec.', reference:'Exode 14:21-22' },
  { id:'quiz-37', type:'quiz', category:'Histoire biblique', difficulty:'medium', question:'Quel objet les prêtres portaient-ils devant le peuple pendant la marche autour de Jéricho ?', answers:['L’arche de l’Alliance','Le chandelier du tabernacle','La table des pains','Les vêtements du grand prêtre'], correctAnswer:0, explanation:'Les prêtres portaient l’arche de l’Alliance pendant les marches autour de la ville.', reference:'Josué 6:6-9' },
  { id:'quiz-57', type:'quiz', category:'Évangiles', difficulty:'medium', question:'Lors de la première tentation dans le désert, sur quel principe Jésus s’est-il appuyé pour répondre au Diable ?', answers:['L’homme ne vit pas seulement de pain','Il faut toujours demander un signe','La richesse protège de la tentation','Les anges doivent être invoqués'], correctAnswer:0, explanation:'Jésus a rappelé que la vie dépend de la parole de Dieu et pas seulement de la nourriture.', reference:'Matthieu 4:1-4' },
  { id:'quiz-67', type:'quiz', category:'Évangiles', difficulty:'medium', question:'Qui a signalé à Jésus que le vin manquait pendant le mariage de Cana ?', answers:['Marie, sa mère','Pierre','Le maître de maison','Jean le Baptiseur'], correctAnswer:0, explanation:'Marie a attiré l’attention de Jésus sur le manque de vin, puis a demandé aux serviteurs de suivre ses instructions.', reference:'Jean 2:1-5' },
  { id:'quiz-78', type:'quiz', category:'Que veulent dire ces versets ?', difficulty:'medium', question:'Selon 1 Corinthiens 13:6, comment l’amour réagit-il face à l’injustice ?', answers:['Il ne se réjouit pas de l’injustice mais se réjouit avec la vérité','Il ignore l’injustice pour éviter les conflits','Il cherche à obtenir justice par vengeance','Il considère que toute injustice est acceptable'], correctAnswer:0, explanation:'Paul oppose clairement la joie de l’amour à l’injustice et l’associe à la vérité.', reference:'1 Corinthiens 13:6' },
  { id:'quiz-80', type:'quiz', category:'Personnages', difficulty:'medium', question:'Dans quel lieu Dieu a-t-il demandé à Abraham d’aller pour l’épreuve concernant Isaac ?', answers:['Le pays de Moria','Le mont Carmel','La région de Béthel','La vallée de Josaphat'], correctAnswer:0, explanation:'Dieu a demandé à Abraham de se rendre au pays de Moria pour cette épreuve.', reference:'Genèse 22:1-3' },
  { id:'quiz-84', type:'quiz', category:'Personnages', difficulty:'medium', question:'Qui a découvert le bébé Moïse dans le Nil et a décidé de le prendre comme fils ?', answers:['La fille de Pharaon','La femme de Pharaon','La sœur de Moïse','La femme de Potiphar'], correctAnswer:0, explanation:'La fille de Pharaon a trouvé l’enfant, a eu pitié de lui et l’a pris comme fils.', reference:'Exode 2:5-10' },
  { id:'quiz-141', type:'quiz', category:'Évangiles', difficulty:'medium', question:'Pourquoi Jésus a-t-il laissé passer du temps avant de se rendre auprès de Lazare malade ?', answers:['Pour que la situation conduise à manifester la gloire de Dieu','Parce qu’il ignorait où Lazare se trouvait','Parce qu’il attendait une invitation de Jérusalem','Parce que Lazare avait déjà été enterré depuis des semaines'], correctAnswer:0, explanation:'Jésus a expliqué que cette maladie devait servir à la gloire de Dieu et à la gloire du Fils de Dieu.', reference:'Jean 11:4-6' },
  { id:'quiz-173', type:'quiz', category:'Questions bibliques', difficulty:'medium', question:'Quelle règle concernant la manne distinguait le sixième jour des autres jours ?', answers:['Il fallait en recueillir une double quantité','Il fallait ne rien recueillir avant midi','Il fallait la partager uniquement avec les Lévites','Il fallait la garder sept jours'], correctAnswer:0, explanation:'Le sixième jour, une double portion était recueillie afin de ne pas avoir à ramasser de manne le sabbat.', reference:'Exode 16:22-30' },
  { id:'quiz-197', type:'quiz', category:'Personnages', difficulty:'medium', question:'Quelle habitude Daniel a-t-il conservée malgré l’interdiction royale qui menaçait sa vie ?', answers:['Prier régulièrement en direction de Jérusalem','Quitter Babylone en secret','Refuser toute nourriture du roi','Prêcher publiquement dans les rues'], correctAnswer:0, explanation:'Daniel a continué à prier trois fois par jour comme il en avait l’habitude.', reference:'Daniel 6:7-13' },
  { id:'quiz-201', type:'quiz', category:'Évangiles', difficulty:'medium', question:'Pourquoi Zachée est-il monté sur un arbre avant l’arrivée de Jésus ?', answers:['Il était trop petit pour voir Jésus à cause de la foule','Il voulait se cacher de Jésus','Il cherchait un endroit pour dormir','Il devait surveiller les portes de Jéricho'], correctAnswer:0, explanation:'Zachée était de petite taille et a grimpé à un sycomore pour voir Jésus passer.', reference:'Luc 19:1-4' },
  { id:'quiz-103', type:'quiz', category:'Personnages', difficulty:'medium', question:'Quel argument les trois Hébreux ont-ils donné lorsqu’ils ont refusé de se prosterner devant la statue ?', answers:['Ils refusaient d’adorer la statue même si le roi les condamnait','Ils pensaient que la statue était trop petite','Ils n’avaient pas entendu la musique','Ils avaient quitté Babylone avant le décret'], correctAnswer:0, explanation:'Ils ont expliqué qu’ils ne serviraient pas les dieux du roi ni n’adoreraient la statue.', reference:'Daniel 3:16-18' },
  { id:'quiz-129', type:'quiz', category:'Personnages', difficulty:'hard', question:'Après leur refus d’adorer la statue, quel élément a changé dans la fournaise ?', answers:['Le roi a vu une quatrième personne avec eux','La fournaise s’est éteinte avant leur entrée','Ils ont été immédiatement libérés sans être conduits à la fournaise','Les musiciens ont cessé de jouer'], correctAnswer:0, explanation:'Nabuchodonosor a vu quatre hommes marcher dans le feu sans être blessés.', reference:'Daniel 3:23-27' },
  { id:'quiz-186', type:'quiz', category:'Rois & prophètes', difficulty:'medium', question:'Quel détail du récit montre que Naamân s’attendait à une guérison très différente de celle proposée par Élisée ?', answers:['Il pensait qu’Élisée viendrait personnellement le voir et invoquerait son Dieu','Il pensait devoir offrir un sacrifice à Jérusalem','Il refusait de parler à un prophète','Il voulait d’abord retourner en Syrie'], correctAnswer:0, explanation:'Naamân s’attendait à un geste spectaculaire, mais il a finalement dû suivre une instruction simple : se baigner sept fois dans le Jourdain.', reference:'2 Rois 5:9-14' },
  { id:'quiz-202', type:'quiz', category:'Évangiles', difficulty:'medium', question:'Que criait Bartimée pour attirer l’attention de Jésus près de Jéricho ?', answers:['Fils de David, aie pitié de moi','Maître, donne-moi du pain','Seigneur, montre-moi le temple','Rabbi, guéris mes amis'], correctAnswer:0, explanation:'Bartimée a appelé Jésus « Fils de David » et lui a demandé d’avoir pitié de lui.', reference:'Marc 10:46-52' },
  { id:'quiz-203', type:'quiz', category:'Évangiles', difficulty:'medium', question:'Quel signe Jésus a-t-il donné à Jaïrus et à sa famille lorsqu’il a relevé sa fille ?', answers:['Il a pris la jeune fille par la main et lui a ordonné de se lever','Il a envoyé Jean prier à sa place','Il a demandé à Jaïrus d’attendre sept jours','Il a envoyé la foule chercher Élie'], correctAnswer:0, explanation:'Jésus a pris la jeune fille par la main et l’a relevée.', reference:'Marc 5:35-43' },
  { id:'v54-q046', type:'quiz', category:'Personnages', difficulty:'medium', question:'Quel détail montre le courage d’Esther lorsqu’elle s’est présentée devant le roi ?', answers:['Elle savait qu’elle risquait la mort en entrant sans y être convoquée','Elle était déjà certaine d’avoir l’autorisation du roi','Elle était accompagnée d’une armée','Elle avait été nommée reine par Mardochée'], correctAnswer:0, explanation:'Esther a accepté de se présenter devant le roi malgré le risque prévu par la loi.', reference:'Esther 4:11-16' },
  { id:'v54-q058', type:'quiz', category:'Évangiles', difficulty:'medium', question:'Que cherchait le jeune homme riche en demandant à Jésus ce qu’il devait faire pour avoir la vie éternelle ?', answers:['À savoir quelle étape lui manquait malgré son obéissance aux commandements','À devenir l’un des Douze','À obtenir une charge politique','À savoir comment devenir prêtre'], correctAnswer:0, explanation:'Jésus l’a amené à réfléchir à ce qui lui manquait : renoncer à ses biens et le suivre.', reference:'Matthieu 19:16-22' },
  { id:'quiz-v50-personnages-02', type:'quiz', category:'Personnages', difficulty:'medium', question:'Quel détail du récit montre le discernement de Joseph lorsqu’il a interprété les rêves de Pharaon ?', answers:['Il a attribué l’interprétation à Dieu avant d’expliquer les sept années à venir','Il a prétendu connaître l’avenir par lui-même','Il a demandé à Pharaon de quitter l’Égypte','Il a refusé de parler de la famine'], correctAnswer:0, explanation:'Joseph a précisé que Dieu donnerait une réponse favorable à Pharaon avant de proposer l’interprétation et le plan d’action.', reference:'Genèse 41:15-36' },
  { id:'jwcat-quiz-22', type:'quiz', category:'Questions bibliques', difficulty:'medium', question:'Que conseille Jésus après avoir comparé ses disciples à une lumière ?', answers:['Laisser leur lumière briller par leurs belles œuvres','Cacher leurs bonnes actions pour éviter toute responsabilité','Chercher à être admiré par tous','Éviter de parler de leurs convictions'], correctAnswer:0, explanation:'Jésus encourage ses disciples à laisser leur lumière briller afin que les autres voient leurs belles œuvres et rendent gloire à Dieu.', reference:'Matthieu 5:14-16' },
  { id:'jwcat-quiz-68', type:'quiz', category:'Évangiles', difficulty:'medium', question:'Quel disciple a signalé que les cinq pains et les deux petits poissons étaient insuffisants pour nourrir la foule ?', answers:['André','Pierre','Philippe','Jean'], correctAnswer:0, explanation:'André a signalé à Jésus la présence d’un garçon avec cinq pains d’orge et deux petits poissons.', reference:'Jean 6:8-9' },
);

const editorialRemoveMysteryIds = new Set(['jwcat-mystery-1','jwcat-mystery-2','jwcat-mystery-3','jwcat-mystery-6']);
for (let i = mysteryQuestions.length - 1; i >= 0; i -= 1) {
  if (editorialRemoveMysteryIds.has(mysteryQuestions[i].id)) mysteryQuestions.splice(i, 1);
}
mysteryQuestions.push(
  {id:'jwcat-mystery-1',type:'mystery',answer:'Nicodème',clues:['Je suis un pharisien.','Je suis venu voir Jésus de nuit.','Nous avons parlé de la nouvelle naissance.'],category:'Évangiles',reference:'Jean 3:1-10',difficulty:'medium',explanation:'Le personnage recherché est Nicodème.'},
  {id:'jwcat-mystery-2',type:'mystery',answer:'Étienne',clues:['J’ai été choisi avec six autres hommes pour un service.','J’ai témoigné devant le Sanhédrin.','J’ai vu les cieux ouverts avant d’être lapidé.'],category:'Actes',reference:'Actes 6:1-6; 7:54-60',difficulty:'medium',explanation:'Le personnage recherché est Étienne.'},
  {id:'jwcat-mystery-3',type:'mystery',answer:'Ézéchiel',clues:['J’ai reçu de nombreuses visions.','J’ai vu une vallée remplie d’ossements desséchés.','J’ai annoncé une restauration symbolisée par ces ossements.'],category:'Rois & prophètes',reference:'Ézéchiel 1:1; 37:1-14',difficulty:'hard',explanation:'Le personnage recherché est Ézéchiel.'},
  {id:'jwcat-mystery-6',type:'mystery',answer:'Rahab',clues:['J’habitais à Jéricho.','J’ai caché deux espions israélites.','Un cordon rouge a été associé au signe de protection de ma maison.'],category:'Personnages',reference:'Josué 2:1-21; 6:22-25',difficulty:'medium',explanation:'Le personnage recherché est Rahab.'},
);

// Le mode « Qui a dit ça ? » doit présenter une parole ou une idée formulée à la première
// personne. Les anciennes cartes qui demandaient simplement d’identifier un lieu, un livre,
// un support ou un concept sont retirées de ce mode et remplacées par une petite banque de
// paraphrases bibliques clairement non présentées comme des citations mot à mot.
const editorialQuoteQuestions: QuoteQuestion[] = [
  {id:'v89-q-01',type:'quote',category:'Personnages',difficulty:'easy',quote:'Je suis prêt à accepter la mission qui m’est confiée.',answers:['Isaïe','Jérémie','Ézéchiel','Samuel'],correctAnswer:0,explanation:'Isaïe se déclare disponible après la vision du temple.',reference:'Isaïe 6:8'},
  {id:'v89-q-02',type:'quote',category:'Personnages',difficulty:'easy',quote:'Je suis prêt à écouter ; parle-moi.',answers:['Samuel','David','Josué','Timothée'],correctAnswer:0,explanation:'Samuel apprend à répondre à l’appel de Jéhovah.',reference:'1 Samuel 3:8-10'},
  {id:'v89-q-03',type:'quote',category:'Personnages',difficulty:'medium',quote:'Je resterai avec Noémi et je ferai de son peuple mon peuple.',answers:['Ruth','Esther','Anne','Déborah'],correctAnswer:0,explanation:'Ruth exprime sa fidélité à Noémi.',reference:'Ruth 1:16-17'},
  {id:'v89-q-04',type:'quote',category:'Personnages',difficulty:'medium',quote:'Je viens au nom de Jéhovah, et je ne me fie pas à une épée pour remporter ce combat.',answers:['David','Jonathan','Gédéon','Samuel'],correctAnswer:0,explanation:'David explique à Goliath sur qui repose sa confiance.',reference:'1 Samuel 17:45-47'},
  {id:'v89-q-05',type:'quote',category:'Évangiles',difficulty:'medium',quote:'Je ne vois pas vers qui d’autre aller : tu as des paroles qui donnent la vie éternelle.',answers:['Pierre','Thomas','Jean','Philippe'],correctAnswer:0,explanation:'Pierre répond ainsi lorsque beaucoup de disciples cessent de suivre Jésus.',reference:'Jean 6:67-69'},
  {id:'v89-q-06',type:'quote',category:'Personnages',difficulty:'medium',quote:'Je me présenterai devant le roi même si cette décision peut me coûter la vie.',answers:['Esther','Ruth','Déborah','Abigaïl'],correctAnswer:0,explanation:'Esther accepte le risque pour défendre son peuple.',reference:'Esther 4:15-16'},
  {id:'v89-q-07',type:'quote',category:'Rois & prophètes',difficulty:'medium',quote:'Donne-moi le discernement nécessaire pour gouverner ton peuple.',answers:['Salomon','David','Josias','Ézéchias'],correctAnswer:0,explanation:'Salomon demande surtout la sagesse et le discernement.',reference:'1 Rois 3:5-12'},
  {id:'v89-q-08',type:'quote',category:'Rois & prophètes',difficulty:'medium',quote:'Je me demande qui je suis pour aller voir Pharaon et faire sortir Israël d’Égypte.',answers:['Moïse','Aaron','Josué','Gédéon'],correctAnswer:0,explanation:'Moïse exprime son sentiment d’insuffisance lors de son appel.',reference:'Exode 3:10-12'},
  {id:'v89-q-09',type:'quote',category:'Rois & prophètes',difficulty:'hard',quote:'Si c’est bien toi qui veux délivrer Israël par mon intermédiaire, donne-moi un signe.',answers:['Gédéon','Élie','Samuel','Barak'],correctAnswer:0,explanation:'Gédéon demande plusieurs confirmations avant d’agir.',reference:'Juges 6:36-40'},
  {id:'v89-q-10',type:'quote',category:'Personnages',difficulty:'medium',quote:'Ce n’est pas vous seuls qui avez décidé de mon destin : Dieu a permis que je sois envoyé devant vous pour préserver des vies.',answers:['Joseph','Benjamin','Jacob','Juda'],correctAnswer:0,explanation:'Joseph explique à ses frères comment il comprend les événements qui les ont conduits en Égypte.',reference:'Genèse 45:5-8'},
  {id:'v89-q-11',type:'quote',category:'Personnages',difficulty:'medium',quote:'Pour ma part, ma famille et moi, nous voulons servir Jéhovah.',answers:['Josué','Caleb','Moïse','Samuel'],correctAnswer:0,explanation:'Josué prend position pour sa maison à la fin de son discours.',reference:'Josué 24:15'},
  {id:'v89-q-12',type:'quote',category:'Personnages',difficulty:'medium',quote:'J’ai demandé cet enfant dans la prière et je le confie maintenant à Jéhovah.',answers:['Anne','Sara','Rébecca','Élisabeth'],correctAnswer:0,explanation:'Anne rappelle sa prière et présente Samuel pour le service sacré.',reference:'1 Samuel 1:10-28'},
  {id:'v89-q-13',type:'quote',category:'Rois & prophètes',difficulty:'medium',quote:'J’ai présenté devant Jéhovah la lettre qui menaçait Jérusalem.',answers:['Ézéchias','Josias','Manassé','Roboam'],correctAnswer:0,explanation:'Ézéchias étale la lettre de Sennachérib devant Jéhovah et prie.',reference:'2 Rois 19:14-19'},
  {id:'v89-q-14',type:'quote',category:'Rois & prophètes',difficulty:'medium',quote:'Jusqu’à quand allez-vous hésiter entre deux positions ?',answers:['Élie','Élisée','Nathan','Samuel'],correctAnswer:0,explanation:'Élie interpelle le peuple au mont Carmel.',reference:'1 Rois 18:21'},
  {id:'v89-q-15',type:'quote',category:'Rois & prophètes',difficulty:'hard',quote:'Tu es l’homme qui a agi de cette manière ; tu dois reconnaître ta faute.',answers:['Nathan','Samuel','Gad','Élie'],correctAnswer:0,explanation:'Nathan amène David à reconnaître son péché par une illustration.',reference:'2 Samuel 12:1-13'},
  {id:'v89-q-16',type:'quote',category:'Personnages',difficulty:'medium',quote:'Je ne vais pas adorer la statue, même si cela signifie entrer dans la fournaise.',answers:['Shadrak, Méshak et Abed-Négo','Daniel','Esdras','Néhémie'],correctAnswer:0,explanation:'Les trois Hébreux refusent de se prosterner devant la statue de Nabuchodonosor.',reference:'Daniel 3:16-18'},
  {id:'v89-q-17',type:'quote',category:'Personnages',difficulty:'medium',quote:'Je continuerai à prier comme d’habitude, même si le décret du roi l’interdit.',answers:['Daniel','Néhémie','Ézéchiel','Esdras'],correctAnswer:0,explanation:'Daniel continue de prier trois fois par jour malgré le décret.',reference:'Daniel 6:7-13'},
  {id:'v89-q-18',type:'quote',category:'Actes',difficulty:'medium',quote:'Que dois-je faire pour être sauvé ?',answers:['Le geôlier de Philippes','Corneille','Sergius Paulus','Eutique'],correctAnswer:0,explanation:'Le geôlier pose cette question à Paul et Silas après le tremblement de terre.',reference:'Actes 16:25-34'},
  {id:'v89-q-19',type:'quote',category:'Actes',difficulty:'medium',quote:'Je comprends maintenant que Dieu ne fait pas de favoritisme entre les personnes.',answers:['Pierre','Paul','Barnabé','Philippe'],correctAnswer:0,explanation:'Pierre formule cette conclusion en entrant chez Corneille.',reference:'Actes 10:34-35'},
  {id:'v89-q-20',type:'quote',category:'Actes',difficulty:'hard',quote:'Je fais appel à César.',answers:['Paul','Pierre','Silas','Barnabé'],correctAnswer:0,explanation:'Paul utilise son droit de citoyen romain pour faire appel à César.',reference:'Actes 25:10-12'},
  {id:'v89-q-21',type:'quote',category:'Évangiles',difficulty:'medium',quote:'Je sais que le Messie vient ; lorsqu’il viendra, il nous expliquera tout.',answers:['La Samaritaine','Marthe','Marie de Béthanie','Nicodème'],correctAnswer:0,explanation:'La femme samaritaine parle ainsi avec Jésus près du puits.',reference:'Jean 4:25'},
  {id:'v89-q-22',type:'quote',category:'Évangiles',difficulty:'medium',quote:'Je sais que tu es le Saint de Dieu.',answers:['Pierre','Thomas','Jean','André'],correctAnswer:0,explanation:'Pierre reconnaît l’identité de Jésus dans sa réponse après l’enseignement de Jésus.',reference:'Jean 6:68-69'},
  {id:'v89-q-23',type:'quote',category:'Évangiles',difficulty:'medium',quote:'Seigneur, je crois que tu es le Christ, le Fils de Dieu.',answers:['Marthe','Marie','Élisabeth','Anne'],correctAnswer:0,explanation:'Marthe exprime sa foi à Jésus avant la résurrection de Lazare.',reference:'Jean 11:25-27'},
  {id:'v89-q-24',type:'quote',category:'Évangiles',difficulty:'medium',quote:'Mon Seigneur et mon Dieu !',answers:['Thomas','Pierre','Philippe','Jean'],correctAnswer:0,explanation:'Thomas réagit ainsi après avoir vu Jésus ressuscité.',reference:'Jean 20:26-28'},
  {id:'v89-q-25',type:'quote',category:'Évangiles',difficulty:'medium',quote:'Seigneur, je n’ai pas besoin que tu entres sous mon toit ; dis seulement une parole et mon serviteur sera guéri.',answers:['Un officier romain','Jaïrus','Nicodème','Zachée'],correctAnswer:0,explanation:'L’officier montre une grande foi en l’autorité de Jésus.',reference:'Matthieu 8:5-10'},
  {id:'v89-q-26',type:'quote',category:'Évangiles',difficulty:'medium',quote:'Je suis prêt à aller en prison et même à mourir avec toi.',answers:['Pierre','Thomas','Jacques','André'],correctAnswer:0,explanation:'Pierre affirme sa fidélité avant le reniement.',reference:'Luc 22:33-34'},
  {id:'v89-q-27',type:'quote',category:'Évangiles',difficulty:'medium',quote:'Seigneur, montre-nous le Père ; cela nous suffit.',answers:['Philippe','Thomas','André','Matthieu'],correctAnswer:0,explanation:'Philippe demande cela à Jésus pendant son enseignement aux apôtres.',reference:'Jean 14:8-10'},
  {id:'v89-q-28',type:'quote',category:'Évangiles',difficulty:'hard',quote:'Voici l’Agneau de Dieu qui enlève le péché du monde.',answers:['Jean le Baptiseur','Pierre','André','Philippe'],correctAnswer:0,explanation:'Jean le Baptiseur désigne Jésus de cette manière.',reference:'Jean 1:29'},
  {id:'v89-q-29',type:'quote',category:'Évangiles',difficulty:'medium',quote:'Je ne suis pas digne de dénouer la lanière de ses sandales.',answers:['Jean le Baptiseur','Pierre','Zachée','Nicodème'],correctAnswer:0,explanation:'Jean souligne ainsi la supériorité de Jésus.',reference:'Jean 1:27'},
  {id:'v89-q-30',type:'quote',category:'Personnages',difficulty:'medium',quote:'J’ai péché contre Jéhovah.',answers:['David','Saül','Salomon','Achan'],correctAnswer:0,explanation:'David reconnaît sa faute après avoir été repris par Nathan.',reference:'2 Samuel 12:13'},
  {id:'v89-q-31',type:'quote',category:'Rois & prophètes',difficulty:'hard',quote:'Je ne demande ni richesse ni longue vie ; donne-moi plutôt le discernement pour juger ton peuple.',answers:['Salomon','David','Josias','Ézéchias'],correctAnswer:0,explanation:'Salomon demande surtout un cœur capable de discerner le bien du mal.',reference:'1 Rois 3:9-12'},
  {id:'v89-q-32',type:'quote',category:'Prophéties',difficulty:'medium',quote:'Je suis la voix de quelqu’un qui crie dans le désert : préparez le chemin de Jéhovah.',answers:['Jean le Baptiseur','Isaïe','Élie','Zacharie'],correctAnswer:0,explanation:'Les Évangiles appliquent cette prophétie au ministère de Jean le Baptiseur.',reference:'Matthieu 3:1-3; Isaïe 40:3'},
  {id:'v89-q-33',type:'quote',category:'Personnages',difficulty:'medium',quote:'Je ne connais pas cet homme.',answers:['Pierre','Judas Iscariote','Thomas','Caïphe'],correctAnswer:0,explanation:'Pierre renie Jésus à trois reprises.',reference:'Matthieu 26:69-75'},
  {id:'v89-q-34',type:'quote',category:'Personnages',difficulty:'hard',quote:'Même s’il me tuait, j’attendrais encore.',answers:['Job','Joseph','Daniel','Néhémie'],correctAnswer:0,explanation:'Job exprime sa confiance en Dieu même au milieu de son épreuve.',reference:'Job 13:15'},
  {id:'v89-q-35',type:'quote',category:'Rois & prophètes',difficulty:'medium',quote:'Je ne suis pas prophète professionnel ; je suis un éleveur et un cultivateur de sycomores, mais Jéhovah m’a envoyé.',answers:['Amos','Michée','Aggée','Malachie'],correctAnswer:0,explanation:'Amos décrit son activité avant d’expliquer qu’il a reçu sa mission.',reference:'Amos 7:14-15'},
  {id:'v89-q-36',type:'quote',category:'Prophéties',difficulty:'hard',quote:'Je suis trop jeune pour parler, mais Dieu me demande de transmettre son message.',answers:['Jérémie','Samuel','Timothée','Josué'],correctAnswer:0,explanation:'Jérémie exprime son sentiment d’être trop jeune lorsque Dieu l’appelle comme prophète.',reference:'Jérémie 1:6-7'},
  {id:'v89-q-37',type:'quote',category:'Rois & prophètes',difficulty:'medium',quote:'Me voici, envoie-moi.',answers:['Isaïe','Élie','Élisée','Jérémie'],correctAnswer:0,explanation:'Isaïe répond ainsi après avoir entendu l’appel.',reference:'Isaïe 6:8'},
  {id:'v89-q-38',type:'quote',category:'Personnages',difficulty:'medium',quote:'Je ne laisserai pas partir l’ange sans avoir reçu sa bénédiction.',answers:['Jacob','Abraham','Moïse','Gédéon'],correctAnswer:0,explanation:'Jacob lutte jusqu’à demander une bénédiction.',reference:'Genèse 32:24-30'},
  {id:'v89-q-39',type:'quote',category:'Personnages',difficulty:'hard',quote:'Même si Dieu ne me délivre pas de la fournaise, je ne servirai pas tes dieux.',answers:['Shadrak, Méshak et Abed-Négo','Daniel','Néhémie','Esdras'],correctAnswer:0,explanation:'Les trois Hébreux refusent de conditionner leur fidélité à une délivrance.',reference:'Daniel 3:16-18'},
  {id:'v89-q-40',type:'quote',category:'Actes',difficulty:'medium',quote:'Je vois les cieux ouverts et le Fils de l’homme debout à la droite de Dieu.',answers:['Étienne','Philippe','Pierre','Paul'],correctAnswer:0,explanation:'Étienne prononce cette déclaration juste avant d’être lapidé.',reference:'Actes 7:54-60'},
];
quoteQuestions.splice(0, quoteQuestions.length, ...editorialQuoteQuestions);


// ===== V90 : corrections demandées après test réel en partie =====
// Le maître de jeu doit pouvoir retrouver immédiatement la cible et les indices.
// Pour INTRUS, on retire les cartes dont la mécanique dépend principalement de références
// de versets difficiles à identifier et on ajoute des associations plus accessibles mais
// réellement discriminantes.
const v90IntruderReasoning: IntruderQuestion[] = [
  {id:'v90-i-001',type:'intruder',category:'Personnages',difficulty:'medium',items:['Néhémie','Esdras','Zorobabel','Timothée'],intruder:3,explanation:'Les trois premiers sont directement liés au retour des Juifs après l’exil et à la reconstruction ; Timothée appartient à la période chrétienne du Ier siècle.',reference:'Esdras 2:2; 7:6-10; Néhémie 2:11-18; Actes 16:1-3'},
  {id:'v90-i-002',type:'intruder',category:'Rois & prophètes',difficulty:'medium',items:['David','Salomon','Ézéchias','Néhémie'],intruder:3,explanation:'Les trois premiers ont été rois ; Néhémie a été gouverneur et dirigeant de la reconstruction des murailles.',reference:'2 Samuel 5:3-5; 1 Rois 2:10-12; 2 Rois 18:1-3; Néhémie 5:14-16'},
  {id:'v90-i-003',type:'intruder',category:'Rois & prophètes',difficulty:'medium',items:['Élie','Élisée','Samuel','Jonathan'],intruder:3,explanation:'Les trois premiers sont associés à un rôle prophétique ; Jonathan est surtout connu comme fils de Saül et ami de David.',reference:'1 Samuel 3:19-21; 1 Rois 17:1; 2 Rois 2:9-15; 1 Samuel 18:1-4'},
  {id:'v90-i-004',type:'intruder',category:'Personnages',difficulty:'medium',items:['Pierre','Paul','Barnabé','Néhémie'],intruder:3,explanation:'Les trois premiers sont des prédicateurs chrétiens du Ier siècle ; Néhémie appartient à une période bien antérieure.',reference:'Actes 4:8-12; 13:2-3; 15:35-39; Néhémie 1:1'},
  {id:'v90-i-005',type:'intruder',category:'Personnages',difficulty:'medium',items:['Rahab','Ruth','Esther','Jonathan'],intruder:3,explanation:'Les trois premières sont des femmes connues pour leur rôle dans des récits bibliques ; Jonathan est un homme.',reference:'Josué 2:1; Ruth 1:4; Esther 2:17; 1 Samuel 18:1-4'},
  {id:'v90-i-006',type:'intruder',category:'Histoire biblique',difficulty:'medium',items:['Cyrus','Darius','Artaxerxès','Hérode'],intruder:3,explanation:'Les trois premiers sont des rois perses liés au contexte du retour et de l’administration de l’empire ; Hérode appartient au contexte des Évangiles.',reference:'Esdras 1:1; 6:1; 7:1; Matthieu 2:1'},
  {id:'v90-i-007',type:'intruder',category:'Histoire biblique',difficulty:'medium',items:['Galilée','Judée','Samarie','Jérusalem'],intruder:3,explanation:'Les trois premières désignent des régions ; Jérusalem est une ville.',reference:'Matthieu 4:12-16; Jean 4:3-4; Luc 3:1; 2 Samuel 5:5'},
  {id:'v90-i-008',type:'intruder',category:'Histoire biblique',difficulty:'medium',items:['Égypte','Assyrie','Babylone','Canaan'],intruder:3,explanation:'Les trois premiers sont des puissances ou grands ensembles politiques de l’histoire biblique ; Canaan désigne surtout le pays vers lequel Israël est entré.',reference:'Exode 1:8-14; 2 Rois 17:5-6; 2 Rois 25:1-12; Josué 3:10-17'},
  {id:'v90-i-009',type:'intruder',category:'Personnages',difficulty:'medium',items:['Moïse','Aaron','Josué','Ésaïe'],intruder:3,explanation:'Les trois premiers sont directement liés à la sortie d’Égypte et à l’entrée en Canaan ; Ésaïe appartient à une période prophétique beaucoup plus tardive.',reference:'Exode 4:14-16; Josué 1:1-6; Ésaïe 1:1'},
  {id:'v90-i-010',type:'intruder',category:'Rois & prophètes',difficulty:'medium',items:['Élie','Élisée','Isaïe','Jonathan'],intruder:3,explanation:'Les trois premiers sont des prophètes ; Jonathan est le fils de Saül et l’ami de David.',reference:'1 Rois 17:1; 2 Rois 2:9-15; Isaïe 1:1; 1 Samuel 18:1-4'},
  {id:'v90-i-011',type:'intruder',category:'Questions bibliques',difficulty:'hard',items:['Arche de Noé','Arche de l’Alliance','Tabernacle','Tombeau vide'],intruder:3,explanation:'Les trois premiers appartiennent aux récits des Écritures hébraïques ; le tombeau vide concerne les récits de la résurrection de Jésus.',reference:'Genèse 6–9; Exode 25–40; Matthieu 28:1-10'},
  {id:'v90-i-012',type:'intruder',category:'Personnages',difficulty:'medium',items:['Saül','David','Salomon','Néhémie'],intruder:3,explanation:'Les trois premiers ont été rois d’Israël ; Néhémie a été gouverneur à Jérusalem après l’exil.',reference:'1 Samuel 10:1; 2 Samuel 5:3-5; 1 Rois 2:10-12; Néhémie 5:14'},
  {id:'v90-i-013',type:'intruder',category:'Personnages',difficulty:'medium',items:['Marie','Marthe','Élisabeth','Lydie'],intruder:3,explanation:'Les trois premières sont des femmes rencontrées dans les récits liés à Jésus et à sa naissance ; Lydie apparaît dans le livre des Actes.',reference:'Luc 1:5-45; Jean 11:1-5; Luc 1:26-38; Actes 16:14-15'},
  {id:'v90-i-014',type:'intruder',category:'Personnages',difficulty:'medium',items:['Goliath','Samson','Saül','Joseph'],intruder:3,explanation:'Les trois premiers sont directement associés à des récits de combat ou de guerre ; Joseph est surtout connu pour son parcours en Égypte et ses responsabilités administratives.',reference:'1 Samuel 17; Juges 13–16; 1 Samuel 10; Genèse 41'},
  {id:'v90-i-015',type:'intruder',category:'Histoire biblique',difficulty:'medium',items:['Jérusalem','Bethléem','Jéricho','Galilée'],intruder:3,explanation:'Les trois premières sont des villes ; la Galilée est une région.',reference:'2 Samuel 5:5; Luc 2:4-7; Josué 6:1-20; Matthieu 4:12-16'},
  {id:'v90-i-016',type:'intruder',category:'Rois & prophètes',difficulty:'medium',items:['Josias','Ézéchias','Salomon','Esdras'],intruder:3,explanation:'Les trois premiers sont des rois ; Esdras était prêtre et copiste de la Loi.',reference:'2 Rois 18:1-3; 22:1-2; 1 Rois 2:10-12; Esdras 7:6-10'},
  {id:'v90-i-017',type:'intruder',category:'Personnages',difficulty:'hard',items:['Joseph','Daniel','Néhémie','Gédéon'],intruder:3,explanation:'Les trois premiers ont servi dans des fonctions administratives importantes auprès d’un pouvoir ou d’une autorité ; Gédéon est surtout connu comme juge et chef militaire.',reference:'Genèse 41:37-43; Daniel 2:46-49; Néhémie 5:14-16; Juges 6–8'},
  {id:'v90-i-018',type:'intruder',category:'Questions bibliques',difficulty:'medium',items:['Nazareth','Capharnaüm','Bethléem','Samarie'],intruder:3,explanation:'Les trois premières sont des villes ; la Samarie désigne une région et aussi un cadre géographique plus large dans les récits.',reference:'Matthieu 2:23; Matthieu 4:13; Luc 2:4-7; Jean 4:4-5'},
];

const v90IntruderVerseLike = /\b(?:Genèse|Exode|Lévitique|Nombres|Deutéronome|Josué|Juges|Ruth|Samuel|Rois|Chroniques|Esdras|Néhémie|Esther|Job|Psaume|Proverbes|Isaïe|Jérémie|Ézéchiel|Daniel|Matthieu|Marc|Luc|Jean|Actes|Romains|Corinthiens|Galates|Éphésiens|Philippiens|Colossiens|Hébreux|Jacques|Pierre|Révélation)\s+\d/;
const v90CleanIntruders = intruderQuestions.filter((q) =>
  !q.category.toLowerCase().includes('versets') &&
  !q.items.some((item) => v90IntruderVerseLike.test(item))
);
intruderQuestions.splice(0, intruderQuestions.length, ...v90CleanIntruders, ...v90IntruderReasoning);

// TIME'S UP : les cibles doivent être des personnages, lieux ou concepts faciles à faire deviner,
// pas des références de versets. Les références restent dans la carte pour le maître de jeu.
const v90TimesUpExtra: TimesUpQuestion[] = [
  {id:'v90-tu-001',type:'timesup',category:'Personnages',difficulty:'medium',answer:'Abigaïl',clues:['Carmel','David','Nabal'],reference:'1 Samuel 25:2-42'},
  {id:'v90-tu-002',type:'timesup',category:'Personnages',difficulty:'medium',answer:'Abigaïl',clues:['Provisions','David','Sagesse'],reference:'1 Samuel 25:18-35'},
  {id:'v90-tu-003',type:'timesup',category:'Personnages',difficulty:'medium',answer:'Esdras',clues:['Prêtre','Loi','Jérusalem'],reference:'Esdras 7:1-10'},
  {id:'v90-tu-004',type:'timesup',category:'Personnages',difficulty:'medium',answer:'Zachée',clues:['Petit','Sycomore','Jéricho'],reference:'Luc 19:1-10'},
  {id:'v90-tu-005',type:'timesup',category:'Personnages',difficulty:'medium',answer:'Barnabé',clues:['Chypre','Paul','Encouragement'],reference:'Actes 4:36-37; 9:27; 11:22-26'},
  {id:'v90-tu-006',type:'timesup',category:'Personnages',difficulty:'medium',answer:'Étienne',clues:['Premier martyr chrétien','Vision','Actes'],reference:'Actes 6–7'},
  {id:'v90-tu-007',type:'timesup',category:'Lieux',difficulty:'easy',answer:'Jéricho',clues:['Murailles','Josué','Zachée'],reference:'Josué 6:1-20; Luc 19:1-10'},
  {id:'v90-tu-008',type:'timesup',category:'Lieux',difficulty:'easy',answer:'Bethléem',clues:['David','Naissance','Juda'],reference:'1 Samuel 16:1-13; Luc 2:4-7'},
  {id:'v90-tu-009',type:'timesup',category:'Lieux',difficulty:'medium',answer:'Césarée',clues:['Pierre','Corneille','Mer'],reference:'Actes 10:1-8'},
  {id:'v90-tu-010',type:'timesup',category:'Objets',difficulty:'medium',answer:'Arche de l’Alliance',clues:['Alliance','Prêtres','Jourdain'],reference:'Josué 3:13-17'},
  {id:'v90-tu-011',type:'timesup',category:'Concepts',difficulty:'medium',answer:'Manne',clues:['Désert','Matin','Sixième jour'],reference:'Exode 16:4-5, 22-26'},
  {id:'v90-tu-012',type:'timesup',category:'Personnages',difficulty:'medium',answer:'Gédéon',clues:['Madian','300','Torches'],reference:'Juges 6–7'},
];
const v90VerseTargets = /\d/;
const v90CleanTimesUp = timesUpQuestions.filter((q) => !v90VerseTargets.test(q.answer));
timesUpQuestions.splice(0, timesUpQuestions.length, ...v90CleanTimesUp, ...v90TimesUpExtra);


// ===== Audit éditorial V98 : rééquilibrage naturel du Vrai/Faux =====
// Une partie de la banque était trop souvent vraie. On ne bascule pas mécaniquement
// les réponses : ces cartes sont reformulées avec un fait faux explicite et une
// explication qui donne la correction. L’objectif est d’éviter que « Vrai » soit
// une stratégie de devinette et de conserver une vraie valeur pédagogique.
const v98TrueFalseRewrites: Record<string, { statement: string; explanation: string }> = {
  'tf-jw-2': { statement: 'Isaac était le père de Joseph et de Benjamin.', explanation: 'Joseph et Benjamin étaient les fils de Jacob, lui-même fils d’Isaac.' },
  'tf-jw-5': { statement: 'Rahab a caché trois espions israélites à Jéricho.', explanation: 'Rahab a caché deux espions israélites envoyés à Jéricho.' },
  'tf-jw-6': { statement: 'Aï a été la première ville prise par les Israélites après la traversée du Jourdain.', explanation: 'Jéricho est la première ville dont la prise est racontée après la traversée du Jourdain.' },
  'tf-jw-8': { statement: 'David a tué Saül lorsqu’il en a eu l’occasion dans une grotte.', explanation: 'David a refusé de tuer Saül alors qu’il en avait l’occasion.' },
  'tf-jw-10': { statement: 'Élie a entendu la voix de Jéhovah avant le vent, le tremblement de terre et le feu.', explanation: 'Le récit situe la voix après le vent, le tremblement de terre et le feu.' },
  'tf-jw-11': { statement: 'Élisée a demandé une double portion de l’esprit de Samuel.', explanation: 'Élisée a demandé une double portion de l’esprit d’Élie.' },
  'tf-jw-12': { statement: 'Jonas a été envoyé à Jérusalem après avoir essayé de fuir.', explanation: 'Jonas a été envoyé à Ninive après avoir essayé de fuir sa mission.' },
  'tf-jw-14': { statement: 'Jésus a choisi onze apôtres.', explanation: 'Les Évangiles rapportent que Jésus a choisi douze apôtres.' },
  'tf-jw-15': { statement: 'Jésus a transformé l’eau en vin à Béthanie.', explanation: 'Le changement de l’eau en vin a eu lieu à Cana.' },
  'tf-jw-16': { statement: 'Jésus a ressuscité la fille de Lazare.', explanation: 'Jésus a ressuscité la fille de Jaïrus ; Lazare était un homme que Jésus a également ramené à la vie.' },
  'tf-jw-18': { statement: 'Paul a été baptisé avant sa conversion sur le chemin de Damas.', explanation: 'Paul a été baptisé après sa conversion, à la suite de l’intervention d’Ananias.' },
  'tf-jw-20': { statement: 'Paul et Silas chantaient des louanges lorsqu’ils étaient emprisonnés à Jérusalem.', explanation: 'Paul et Silas priaient et chantaient des louanges lorsqu’ils étaient emprisonnés à Philippes.' },
  'tf-jw-21': { statement: 'Les Béréens n’examinaient jamais les Écritures pour vérifier l’enseignement reçu.', explanation: 'Les Béréens examinaient chaque jour les Écritures pour vérifier l’enseignement de Paul et Silas.' },
  'tf-jw-22': { statement: 'Paul a passé deux ans à Rome dans une maison louée avant son voyage à Rome.', explanation: 'À Rome, Paul a passé deux ans dans une maison qu’il louait ; cette période se situe après son voyage à Rome.' },
  'tf-jw-23': { statement: 'Dorcas était aussi appelée Lydie.', explanation: 'Dorcas était aussi appelée Tabitha.' },
  'tf-jw-24': { statement: 'Corneille était un prêtre lévite à Jérusalem.', explanation: 'Corneille était un centurion stationné à Césarée.' },
  'tf-jw-26': { statement: 'Timothée avait une mère grecque et un père juif.', explanation: 'Timothée avait une mère juive et un père grec.' },
  'tf-jw-27': { statement: 'Onésime était un gouverneur romain devenu chrétien.', explanation: 'Onésime était un esclave devenu chrétien.' },
  'tf-jw-28': { statement: 'La Révélation a été donnée à Jean alors qu’il était à Jérusalem.', explanation: 'La Révélation a été donnée à Jean alors qu’il se trouvait à Patmos.' },
  'tf-v39-02': { statement: 'Moïse a été élevé dans la maison de David après avoir été sauvé des eaux.', explanation: 'Moïse a été élevé dans la maison de Pharaon après avoir été sauvé des eaux.' },
  'tf-v39-04': { statement: 'Élisée a affronté les prophètes de Baal au mont Carmel.', explanation: 'C’est Élie qui a affronté les prophètes de Baal au mont Carmel.' },
  'tf-v39-05': { statement: 'Matthieu était pêcheur avant de suivre Jésus.', explanation: 'Matthieu était collecteur d’impôts avant de suivre Jésus.' },
  'tf-v39-07': { statement: 'Lydie vendait du blé à Philippes.', explanation: 'Lydie vendait des articles de pourpre à Philippes.' },
  'tf-v39-08': { statement: 'Jonas a été envoyé à Jérusalem.', explanation: 'Jonas a été envoyé à Ninive.' },
  'tf-v39-09': { statement: 'Daniel a interprété l’écriture sur le mur pour Pharaon.', explanation: 'Daniel a interprété l’écriture sur le mur pour Belshatsar.' },
  'tf-v50-bible-02': { statement: 'L’arche de l’Alliance se trouvait dans le lieu saint du tabernacle, devant le rideau.', explanation: 'L’arche de l’Alliance se trouvait dans le Très-Saint, derrière le rideau.' },
  'tf-v50-bible-04': { statement: 'Noé a reçu des instructions pour construire un palais avant le Déluge.', explanation: 'Noé a reçu des instructions pour construire une arche avant le Déluge.' },
  'tf-v50-bible-05': { statement: 'L’arc-en-ciel est présenté comme un signe de l’alliance avec Abraham.', explanation: 'L’arc-en-ciel est présenté comme un signe de l’alliance avec Noé.' },
  'tf-v50-personnages-01': { statement: 'Samuel a commencé à servir au sanctuaire seulement après être devenu adulte.', explanation: 'Samuel a commencé à servir au sanctuaire alors qu’il était encore jeune.' },
  'tf-v50-personnages-03': { statement: 'Joseph a interprété les rêves de Pharaon concernant trois années d’abondance et trois années de famine.', explanation: 'Joseph a interprété les rêves concernant sept années d’abondance et sept années de famine.' },
  'tf-v50-personnages-04': { statement: 'Zacharie était le père de l’apôtre Jean.', explanation: 'Zacharie était le père de Jean le Baptiseur.' },
  'tf-v50-evangiles-01': { statement: 'Matthieu était pêcheur lorsqu’il a été appelé par Jésus.', explanation: 'Matthieu était collecteur d’impôts lorsqu’il a été appelé par Jésus.' },
  'tf-v50-evangiles-03': { statement: 'Nicodème est venu voir Jésus à midi.', explanation: 'Nicodème est venu voir Jésus pendant la nuit.' },
  'tf-v50-evangiles-05': { statement: 'Thomas a demandé à Jésus de lui montrer le Père.', explanation: 'Philippe a demandé à Jésus de lui montrer le Père.' },
};

for (const q of trueFalseQuestions) {
  const rewrite = v98TrueFalseRewrites[q.id];
  if (rewrite) {
    q.statement = rewrite.statement;
    q.explanation = rewrite.explanation;
    q.answer = false;
  }
}

// Exports globaux placés en fin de fichier pour inclure tous les enrichissements.
export const allQuestions = [
  ...quizQuestions, ...mysteryQuestions, ...trueFalseQuestions, ...challenges,
  ...quoteQuestions, ...chronologyQuestions, ...intruderQuestions, ...timesUpQuestions,
];

export const v2Questions = [...quoteQuestions, ...chronologyQuestions, ...intruderQuestions, ...timesUpQuestions];
