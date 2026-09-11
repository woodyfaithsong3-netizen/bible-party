import { MysteryQuestion, QuoteQuestion, ChronologyQuestion, IntruderQuestion, Challenge } from '@/types';

// V55: garantie de jouabilité par rubrique et par mode.
// Chaque rubrique dispose désormais d'au moins un élément dans ces 5 familles.

const C = [
  'Questions bibliques',
  'Que veulent dire ces versets ?',
  'La Bible et l’Histoire',
  'La Bible et la science',
  'Personnages',
  'Évangiles',
  'Rois & prophètes',
  'Prophéties',
] as const;

export const jwV55Mystery: MysteryQuestion[] = [
  {id:'v55-m-001',type:'mystery',category:C[0],difficulty:'easy',answer:'Moïse',clues:['Égypte','Mer Rouge','Loi'],explanation:'Moïse a conduit Israël hors d’Égypte et a reçu la Loi.',reference:'Exode 3–20'},
  {id:'v55-m-002',type:'mystery',category:C[1],difficulty:'easy',answer:'David',clues:['Psaumes','Berger','Lampe'],explanation:'David est associé à de nombreux psaumes et à l’image de la parole qui guide.',reference:'Psaume 23; 119:105'},
  {id:'v55-m-003',type:'mystery',category:C[2],difficulty:'medium',answer:'Cyrus',clues:['Perse','Babylone','Décret'],explanation:'Cyrus a permis le retour des Juifs après l’exil.',reference:'Esdras 1:1-4'},
  {id:'v55-m-004',type:'mystery',category:C[3],difficulty:'medium',answer:'Job',clues:['Création','Eau','Nature'],explanation:'Le livre de Job contient des observations sur la nature et le cycle de l’eau.',reference:'Job 36:27-28; 38–39'},
  {id:'v55-m-005',type:'mystery',category:C[4],difficulty:'easy',answer:'Esther',clues:['Reine','Perse','Courage'],explanation:'Esther a courageusement agi pour son peuple.',reference:'Esther 2:17; 4:14-16'},
  {id:'v55-m-006',type:'mystery',category:C[5],difficulty:'easy',answer:'Zachée',clues:['Jéricho','Impôts','Arbre'],explanation:'Zachée a rencontré Jésus après être monté sur un arbre pour le voir.',reference:'Luc 19:1-10'},
  {id:'v55-m-007',type:'mystery',category:C[6],difficulty:'medium',answer:'Josias',clues:['Roi','Loi','Réforme'],explanation:'Josias a entrepris une importante réforme après la découverte du livre de la Loi.',reference:'2 Rois 22–23'},
  {id:'v55-m-008',type:'mystery',category:C[7],difficulty:'medium',answer:'Isaïe',clues:['Prophète','Messie','Emmanuel'],explanation:'Isaïe a transmis plusieurs prophéties messianiques.',reference:'Isaïe 7:14; 9:5-6; 11:1-5'},
];

export const jwV55Quotes: QuoteQuestion[] = [
  {id:'v55-q-001',type:'quote',category:C[0],difficulty:'easy',quote:'Quel personnage a enseigné à ses disciples à demander que le Royaume de Dieu vienne ?',answers:['Jésus','David','Moïse','Paul'],correctAnswer:0,explanation:'Jésus a inclus cette demande dans le modèle de prière.',reference:'Matthieu 6:9-10'},
  {id:'v55-q-002',type:'quote',category:C[1],difficulty:'easy',quote:'Quel prophète a encouragé à appeler Jéhovah pour recevoir une réponse ?',answers:['Jérémie','Isaïe','Élie','David'],correctAnswer:0,explanation:'Jérémie 33:3 présente cette invitation de Dieu à le prier.',reference:'Jérémie 33:3'},
  {id:'v55-q-003',type:'quote',category:C[2],difficulty:'medium',quote:'Quel prophète a annoncé que Cyrus serait utilisé comme berger dans le projet de Dieu ?',answers:['Isaïe','Jérémie','Ézéchiel','Daniel'],correctAnswer:0,explanation:'Isaïe annonce le rôle de Cyrus dans la reconstruction de Jérusalem.',reference:'Isaïe 44:28'},
  {id:'v55-q-004',type:'quote',category:C[3],difficulty:'medium',quote:'Quel homme a décrit la Terre comme étant suspendue sur rien ?',answers:['Job','Moïse','David','Isaïe'],correctAnswer:0,explanation:'Job utilise cette image lorsqu’il parle de l’œuvre de Dieu.',reference:'Job 26:7'},
  {id:'v55-q-005',type:'quote',category:C[4],difficulty:'easy',quote:'Quelle femme a promis de rester avec Noémi et de partager son peuple ?',answers:['Ruth','Esther','Anne','Déborah'],correctAnswer:0,explanation:'Ruth exprime ainsi sa fidélité à Noémi.',reference:'Ruth 1:16-17'},
  {id:'v55-q-006',type:'quote',category:C[5],difficulty:'easy',quote:'Quel homme a présenté Jésus comme l’Agneau de Dieu ?',answers:['Jean le Baptiseur','Pierre','Thomas','Matthieu'],correctAnswer:0,explanation:'Jean le Baptiseur identifie Jésus avec cette expression.',reference:'Jean 1:29'},
  {id:'v55-q-007',type:'quote',category:C[6],difficulty:'medium',quote:'Quel prophète a demandé au peuple d’arrêter d’hésiter entre deux positions ?',answers:['Élie','Élisée','Samuel','Nathan'],correctAnswer:0,explanation:'Élie interpelle le peuple lors de la confrontation au Carmel.',reference:'1 Rois 18:21'},
  {id:'v55-q-008',type:'quote',category:C[7],difficulty:'medium',quote:'Quel prophète a annoncé la naissance d’un enfant appelé à exercer une grande autorité ?',answers:['Isaïe','Michée','Daniel','Jérémie'],correctAnswer:0,explanation:'Isaïe annonce un futur dirigeant dans cette prophétie.',reference:'Isaïe 9:5-6'},
];

export const jwV55Chronology: ChronologyQuestion[] = [
  {id:'v55-c-001',type:'chronology',category:C[0],difficulty:'easy',events:['Déluge','Don de la Loi','Royaume d’Israël'],correctOrder:[0,1,2],explanation:'Ces événements appartiennent à des périodes successives.',reference:'Genèse 6–9; Exode 19–20; 1 Samuel 8'},
  {id:'v55-c-002',type:'chronology',category:C[1],difficulty:'easy',events:['Genèse 1:1','Exode 20:12','Psaume 119:105'],correctOrder:[0,1,2],explanation:'Ces passages appartiennent à des périodes successives du récit biblique.',reference:'Genèse 1:1; Exode 20:12; Psaume 119:105'},
  {id:'v55-c-003',type:'chronology',category:C[2],difficulty:'medium',events:['Jérusalem détruite','Décret de Cyrus','Retour des exilés'],correctOrder:[0,1,2],explanation:'Le décret de Cyrus intervient après la destruction et l’exil.',reference:'2 Rois 25:8-12; Esdras 1:1-4'},
  {id:'v55-c-004',type:'chronology',category:C[3],difficulty:'easy',events:['Création','Déluge','Mesures sanitaires en Israël'],correctOrder:[0,1,2],explanation:'Ces épisodes et dispositions apparaissent dans cet ordre général.',reference:'Genèse 1; 6–9; Lévitique 13; Deutéronome 23'},
  {id:'v55-c-005',type:'chronology',category:C[4],difficulty:'easy',events:['Abraham','Moïse','David'],correctOrder:[0,1,2],explanation:'Ces personnages appartiennent à des périodes successives.',reference:'Genèse 12:1-4; Exode 2:1-10; 2 Samuel 5:3-5'},
  {id:'v55-c-006',type:'chronology',category:C[5],difficulty:'easy',events:['Naissance de Jésus','Baptême de Jésus','Mort et résurrection de Jésus'],correctOrder:[0,1,2],explanation:'Les Évangiles présentent ces étapes dans cet ordre général.',reference:'Luc 2; Matthieu 3; Luc 23–24'},
  {id:'v55-c-007',type:'chronology',category:C[6],difficulty:'medium',events:['Saül devient roi','David devient roi','Salomon devient roi'],correctOrder:[0,1,2],explanation:'Ces trois règnes se succèdent au début de la monarchie.',reference:'1 Samuel 10:1; 2 Samuel 5:3-5; 1 Rois 2:10-12'},
  {id:'v55-c-008',type:'chronology',category:C[7],difficulty:'medium',events:['Promesse à David','Prophétie de Michée','Vision de Daniel'],correctOrder:[0,1,2],explanation:'Ces annonces appartiennent à des périodes successives.',reference:'2 Samuel 7:12-16; Michée 5:2; Daniel 7'},
];

export const jwV55Intruders: IntruderQuestion[] = [
  {id:'v55-i-001',type:'intruder',category:C[0],difficulty:'easy',items:['Foi','Espérance','Amour','Cyrus'],intruder:3,explanation:'Les trois premiers sont des qualités ou thèmes bibliques ; Cyrus est un personnage historique.',reference:'1 Corinthiens 13:13; Esdras 1:1-4'},
  {id:'v55-i-002',type:'intruder',category:C[1],difficulty:'easy',items:['Psaume 23','Proverbes 3:5-6','Jérémie 33:3','Genèse 37'],intruder:3,explanation:'Les trois premiers sont des passages étudiés pour leur sens ; Genèse 37 est un récit.',reference:'Psaume 23; Proverbes 3:5-6; Jérémie 33:3; Genèse 37'},
  {id:'v55-i-003',type:'intruder',category:C[2],difficulty:'medium',items:['Papyrus','Parchemin','Manuscrit','Cana'],intruder:3,explanation:'Les trois premiers sont liés à la transmission écrite ; Cana est un lieu des Évangiles.',reference:'2 Timothée 4:13; Jean 2:1-11'},
  {id:'v55-i-004',type:'intruder',category:C[3],difficulty:'easy',items:['Cycle de l’eau','Hygiène','Création','Ruth'],intruder:3,explanation:'Ruth est un personnage biblique, contrairement aux trois thèmes proposés.',reference:'Job 36:27-28; Deutéronome 23:12-14; Genèse 1; Ruth 1'},
  {id:'v55-i-005',type:'intruder',category:C[4],difficulty:'easy',items:['Esther','Ruth','Rahab','Babylone'],intruder:3,explanation:'Les trois premières sont des femmes ; Babylone est une ville/puissance.',reference:'Esther 2:17; Ruth 1:4; Josué 2:1; Daniel 5:1'},
  {id:'v55-i-006',type:'intruder',category:C[5],difficulty:'easy',items:['Matthieu','Marc','Luc','Néhémie'],intruder:3,explanation:'Les trois premiers sont les noms d’Évangiles ; Néhémie est un personnage et un livre biblique.',reference:'Matthieu 1:1; Marc 1:1; Luc 1:1-4; Néhémie 1:1'},
  {id:'v55-i-007',type:'intruder',category:C[6],difficulty:'easy',items:['Élie','Élisée','Ésaïe','Zachée'],intruder:3,explanation:'Les trois premiers sont des prophètes ; Zachée apparaît dans les Évangiles.',reference:'1 Rois 17:1; 2 Rois 2:9-15; Isaïe 1:1; Luc 19:1-10'},
  {id:'v55-i-008',type:'intruder',category:C[7],difficulty:'medium',items:['Michée 5:2','Isaïe 9:5-6','Jérémie 31:31','Ruth 1:16'],intruder:3,explanation:'Les trois premiers sont des passages prophétiques ; Ruth 1:16 est une déclaration de fidélité.',reference:'Michée 5:2; Isaïe 9:5-6; Jérémie 31:31; Ruth 1:16'},
];

export const jwV55Challenges: Challenge[] = [
  {id:'v55-d-001',type:'challenge',category:C[0],difficulty:'easy',prompt:'En 10 secondes, citez trois thèmes sur lesquels la Bible donne des conseils.',seconds:10},
  {id:'v55-d-002',type:'challenge',category:C[1],difficulty:'easy',prompt:'En 10 secondes, citez deux versets connus et expliquez leur idée principale.',seconds:10},
  {id:'v55-d-003',type:'challenge',category:C[2],difficulty:'medium',prompt:'En 10 secondes, citez trois empires ou lieux liés à l’histoire biblique.',seconds:10},
  {id:'v55-d-004',type:'challenge',category:C[3],difficulty:'easy',prompt:'En 10 secondes, citez deux exemples de phénomènes naturels évoqués dans la Bible.',seconds:10},
  {id:'v55-d-005',type:'challenge',category:C[4],difficulty:'easy',prompt:'En 10 secondes, citez cinq personnages bibliques.',seconds:10},
  {id:'v55-d-006',type:'challenge',category:C[5],difficulty:'easy',prompt:'En 10 secondes, citez quatre disciples ou personnages des Évangiles.',seconds:10},
  {id:'v55-d-007',type:'challenge',category:C[6],difficulty:'medium',prompt:'En 10 secondes, citez trois rois ou prophètes.',seconds:10},
  {id:'v55-d-008',type:'challenge',category:C[7],difficulty:'medium',prompt:'En 10 secondes, citez trois prophéties ou livres prophétiques.',seconds:10},
];
