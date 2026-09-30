import { MysteryQuestion, QuoteQuestion, ChronologyQuestion, IntruderQuestion, Challenge, TimesUpQuestion } from '@/types';

// V56: équilibrage ciblé. Objectif : au moins 5 cartes par rubrique
// dans chacun des modes les plus sensibles aux répétitions.
// Formulations originales, avec références bibliques comme repères.

const C = {
  versets: 'Que veulent dire ces versets ?',
  histoire: 'La Bible et l’Histoire',
  science: 'La Bible et la science',
  propheties: 'Prophéties',
} as const;

export const jwV56Mystery: MysteryQuestion[] = [
  {id:'v56-m-001',type:'mystery',category:C.versets,difficulty:'medium',answer:'Salomon',clues:['roi','sagesse','Jéhovah'],explanation:'Salomon a demandé à Jéhovah de lui donner de la sagesse pour gouverner.',reference:'1 Rois 3:5-12'},
  {id:'v56-m-002',type:'mystery',category:C.versets,difficulty:'easy',answer:'Pierre',clues:['pêcheur','apôtre','Jésus'],explanation:'Pierre était pêcheur avant de suivre Jésus comme apôtre.',reference:'Matthieu 4:18-20'},
  {id:'v56-m-003',type:'mystery',category:C.histoire,difficulty:'medium',answer:'Ézéchias',clues:['roi de Juda','Assyrie','eau'],explanation:'Ézéchias a fait réaliser des travaux pour amener l’eau à Jérusalem.',reference:'2 Rois 18:1-7; 20:20'},
  {id:'v56-m-004',type:'mystery',category:C.histoire,difficulty:'medium',answer:'Esdras',clues:['prêtre','Loi','Jérusalem'],explanation:'Esdras était prêtre et bien versé dans la Loi de Jéhovah.',reference:'Esdras 7:6, 10'},
  {id:'v56-m-005',type:'mystery',category:C.science,difficulty:'medium',answer:'Salomon',clues:['plantes','animaux','sagesse'],explanation:'Salomon parlait des plantes et des animaux grâce à la sagesse qu’il avait reçue.',reference:'1 Rois 4:29-34'},
];

export const jwV56Challenges: Challenge[] = [
  {id:'v56-d-001',type:'challenge',category:C.versets,difficulty:'easy',prompt:'En 10 secondes, citez trois personnages qui ont fait confiance à Jéhovah.',seconds:10},
  {id:'v56-d-002',type:'challenge',category:C.versets,difficulty:'medium',prompt:'En 10 secondes, citez deux livres bibliques qui donnent des conseils pratiques.',seconds:10},
  {id:'v56-d-003',type:'challenge',category:C.versets,difficulty:'medium',prompt:'En 10 secondes, citez trois conseils bibliques sur la confiance en Jéhovah, la prière ou les relations avec les autres.',seconds:10},
  {id:'v56-d-004',type:'challenge',category:C.histoire,difficulty:'easy',prompt:'En 10 secondes, citez trois villes importantes de la Bible.',seconds:10},
  {id:'v56-d-005',type:'challenge',category:C.histoire,difficulty:'medium',prompt:'En 10 secondes, citez trois royaumes ou empires mentionnés dans la Bible.',seconds:10},
  {id:'v56-d-006',type:'challenge',category:C.histoire,difficulty:'medium',prompt:'En 10 secondes, citez trois supports utilisés pour écrire dans l’Antiquité.',seconds:10},
  {id:'v56-d-007',type:'challenge',category:C.science,difficulty:'easy',prompt:'En 10 secondes, citez trois éléments de la nature mentionnés dans la Bible.',seconds:10},
  {id:'v56-d-008',type:'challenge',category:C.science,difficulty:'medium',prompt:'En 10 secondes, citez trois règles bibliques liées à l’hygiène.',seconds:10},
  {id:'v56-d-009',type:'challenge',category:C.science,difficulty:'medium',prompt:'En 10 secondes, citez trois éléments de la nature évoqués dans Job.',seconds:10},
  {id:'v56-d-010',type:'challenge',category:C.propheties,difficulty:'medium',prompt:'En 10 secondes, citez trois prophètes qui ont annoncé l’avenir.',seconds:10},
  {id:'v56-d-011',type:'challenge',category:C.propheties,difficulty:'medium',prompt:'En 10 secondes, citez trois livres bibliques qui contiennent des prophéties.',seconds:10},
  {id:'v56-d-012',type:'challenge',category:C.propheties,difficulty:'hard',prompt:'En 10 secondes, citez trois prophéties messianiques et dites dans quels livres elles se trouvent.',seconds:10},
];

export const jwV56Quotes: QuoteQuestion[] = [
  {id:'v56-q-001',type:'quote',category:C.versets,difficulty:'easy',quote:'Après son péché avec Bethsabée, quel roi a reconnu sa faute ?',answers:['David','Saül','Salomon','Pierre'],correctAnswer:0,explanation:'David reconnaît sa faute dans une prière de repentance.',reference:'Psaume 51:4'},
  {id:'v56-q-002',type:'quote',category:C.versets,difficulty:'medium',quote:'Quel apôtre a dit qu’il pouvait tout supporter grâce à la force reçue de Christ ?',answers:['Paul','Pierre','Jacques','Jean'],correctAnswer:0,explanation:'Paul exprime sa confiance dans la force que Dieu lui donne.',reference:'Philippiens 4:13'},
  {id:'v56-q-003',type:'quote',category:C.versets,difficulty:'easy',quote:'Quel roi a comparé Jéhovah à un berger ?',answers:['David','Moïse','Asaph','Salomon'],correctAnswer:0,explanation:'Cette image ouvre le Psaume 23.',reference:'Psaume 23:1'},
  {id:'v56-q-004',type:'quote',category:C.histoire,difficulty:'medium',quote:'Quel roi perse a autorisé la reconstruction du temple à Jérusalem ?',answers:['Cyrus','Darius','Néhémie','Esdras'],correctAnswer:0,explanation:'Le décret de Cyrus concerne le retour et la reconstruction du temple.',reference:'Esdras 1:2-4'},
  {id:'v56-q-005',type:'quote',category:C.histoire,difficulty:'medium',quote:'Quel prêtre a reconnu que la main de Dieu avait été sur lui ?',answers:['Esdras','Néhémie','Daniel','Zorobabel'],correctAnswer:0,explanation:'Esdras attribue la protection reçue à la faveur de Dieu.',reference:'Esdras 8:22'},
  {id:'v56-q-006',type:'quote',category:C.histoire,difficulty:'easy',quote:'Quelle femme Jésus a-t-il citée comme avertissement ?',answers:['La femme de Lot','Esther','Ruth','Déborah'],correctAnswer:0,explanation:'Jésus utilise cet exemple lorsqu’il parle de l’importance de rester attentif.',reference:'Luc 17:32'},
  {id:'v56-q-007',type:'quote',category:C.science,difficulty:'medium',quote:'Quel homme a décrit la formation des gouttes et la pluie ?',answers:['Job','Salomon','David','Élihou'],correctAnswer:0,explanation:'Le livre de Job décrit le cycle de l’eau sous une forme poétique.',reference:'Job 36:27-28'},
  {id:'v56-q-008',type:'quote',category:C.science,difficulty:'easy',quote:'Quel homme a dit que la Terre était suspendue sur rien ?',answers:['Job','Isaïe','Moïse','David'],correctAnswer:0,explanation:'Job emploie cette formulation imagée en parlant de l’œuvre de Dieu.',reference:'Job 26:7'},
  {id:'v56-q-009',type:'quote',category:C.science,difficulty:'medium',quote:'Par qui la règle concernant le sang et la vie a-t-elle été transmise ?',answers:['Moïse','Aaron','Ézéchiel','David'],correctAnswer:0,explanation:'Cette règle apparaît dans la Loi donnée à Israël.',reference:'Lévitique 17:11'},
  {id:'v56-q-010',type:'quote',category:C.propheties,difficulty:'medium',quote:'Quel prophète a annoncé qu’un dirigeant viendrait de Bethléem ?',answers:['Michée','Isaïe','Jérémie','Daniel'],correctAnswer:0,explanation:'Michée annonce un futur dirigeant lié à Bethléem.',reference:'Michée 5:2'},
  {id:'v56-q-011',type:'quote',category:C.propheties,difficulty:'medium',quote:'Quel prophète a annoncé une effusion de l’esprit sur toutes sortes de personnes ?',answers:['Joël','Isaïe','Ézéchiel','Amos'],correctAnswer:0,explanation:'Joël annonce une future effusion de l’esprit de Dieu.',reference:'Joël 2:28-29'},
];

export const jwV56Chronology: ChronologyQuestion[] = [
  {id:'v56-c-001',type:'chronology',category:C.versets,difficulty:'easy',events:['Création','Déluge','Don de la Loi','Période chrétienne'],correctOrder:[0,1,2,3],explanation:'Ces étapes suivent l’ordre général du récit biblique.',reference:'Genèse 1; 6–9; Exode 19–20; Actes 2'},
  {id:'v56-c-002',type:'chronology',category:C.versets,difficulty:'medium',events:['Abraham reçoit une promesse','Israël sort d’Égypte','David devient roi','Jésus commence son ministère'],correctOrder:[0,1,2,3],explanation:'Les événements se succèdent dans cet ordre.',reference:'Genèse 12:1-4; Exode 12; 2 Samuel 5; Matthieu 4:17'},
  {id:'v56-c-003',type:'chronology',category:C.versets,difficulty:'easy',events:['Psaume 23','Isaïe exerce son activité prophétique','Jésus prononce le Sermon sur la montagne'],correctOrder:[0,1,2],explanation:'Ces éléments se suivent dans l’histoire biblique.',reference:'Psaume 23; Isaïe 1:1; Matthieu 5–7'},
  {id:'v56-c-004',type:'chronology',category:C.histoire,difficulty:'medium',events:['Exode d’Égypte','Construction du temple de Salomon','Destruction de Jérusalem','Retour sous Cyrus'],correctOrder:[0,1,2,3],explanation:'Ces événements se suivent dans l’histoire biblique.',reference:'Exode 12; 1 Rois 6; 2 Rois 25; Esdras 1'},
  {id:'v56-c-005',type:'chronology',category:C.histoire,difficulty:'medium',events:['Règne de David','Règne de Salomon','Exil à Babylone','Reconstruction du temple'],correctOrder:[0,1,2,3],explanation:'Le règne de David précède celui de Salomon, puis l’exil et la reconstruction.',reference:'2 Samuel 5; 1 Rois 2–6; 2 Rois 25; Esdras 3–6'},
  {id:'v56-c-006',type:'chronology',category:C.science,difficulty:'easy',events:['Création','Déluge','Lois sanitaires données à Israël','Ministère de Jésus'],correctOrder:[0,1,2,3],explanation:'Ces événements suivent l’ordre du récit biblique.',reference:'Genèse 1; 6–9; Lévitique 13–15; Matthieu 4'},
  {id:'v56-c-007',type:'chronology',category:C.science,difficulty:'medium',events:['Job parle du cycle de l’eau','Salomon décrit la nature','Jésus utilise des exemples tirés de la nature'],correctOrder:[0,1,2],explanation:'Ces trois références appartiennent à des périodes successives.',reference:'Job 36:27-28; 1 Rois 4:33; Matthieu 6:26-30'},
  {id:'v56-c-008',type:'chronology',category:C.science,difficulty:'medium',events:['Création des cieux et de la terre','Cycle de l’eau évoqué par Job','Conseils sanitaires dans la Loi'],correctOrder:[0,1,2],explanation:'Ces références suivent cet ordre dans le récit biblique.',reference:'Genèse 1:1; Job 36:27-28; Lévitique 13–15'},
  {id:'v56-c-009',type:'chronology',category:C.propheties,difficulty:'medium',events:['Promesse à Abraham','Promesse faite à David','Prophétie de Michée','Prophétie de Daniel'],correctOrder:[0,1,2,3],explanation:'Ces annonces se suivent dans l’histoire biblique.',reference:'Genèse 22:18; 2 Samuel 7:12-16; Michée 5:2; Daniel 7'},
  {id:'v56-c-010',type:'chronology',category:C.propheties,difficulty:'hard',events:['Isaïe annonce Emmanuel','Michée annonce Bethléem','Daniel décrit des royaumes successifs'],correctOrder:[0,1,2],explanation:'Ces prophéties se suivent dans cet ordre chronologique.',reference:'Isaïe 7:14; Michée 5:2; Daniel 2:31-45'},
];

export const jwV56Intruders: IntruderQuestion[] = [
  {id:'v56-i-001',type:'intruder',category:C.versets,difficulty:'easy',items:['Psaume 23','Proverbes 3:5-6','Philippiens 4:6-7','Néhémie 6'],intruder:3,explanation:'Les trois premiers sont des passages de conseil ; Néhémie 6 est un récit.',reference:'Psaume 23; Proverbes 3:5-6; Philippiens 4:6-7; Néhémie 6'},
  {id:'v56-i-002',type:'intruder',category:C.versets,difficulty:'medium',items:['Jacques 1:5','Matthieu 6:33','Psaume 119:105','2 Rois 9'],intruder:3,explanation:'Les trois premiers donnent des conseils ; 2 Rois 9 raconte un événement.',reference:'Jacques 1:5; Matthieu 6:33; Psaume 119:105; 2 Rois 9'},
  {id:'v56-i-009',type:'intruder',category:C.versets,difficulty:'easy',items:['Matthieu 6:33','Psaume 37:4','Proverbes 3:5-6','Genèse 14'],intruder:3,explanation:'Les trois premiers donnent des conseils sur les priorités et la confiance ; Genèse 14 est un récit.',reference:'Matthieu 6:33; Psaume 37:4; Proverbes 3:5-6; Genèse 14'},
  {id:'v56-i-003',type:'intruder',category:C.histoire,difficulty:'easy',items:['Papyrus','Parchemin','Codex','Béthanie'],intruder:3,explanation:'Les trois premiers sont liés aux écrits anciens ; Béthanie est un lieu.',reference:'2 Timothée 4:13; Luc 10:38-42'},
  {id:'v56-i-004',type:'intruder',category:C.histoire,difficulty:'medium',items:['Cyrus','Darius','Artaxerxès','Galilée'],intruder:3,explanation:'Les trois premiers sont des rois perses ; la Galilée est une région.',reference:'Esdras 1:1; 6:1; 7:1; Matthieu 4:12-16'},
  {id:'v56-i-005',type:'intruder',category:C.science,difficulty:'easy',items:['Cycle de l’eau','Hygiène','Sang','Bethléem'],intruder:3,explanation:'Les trois premiers concernent la nature ou la santé ; Bethléem est un lieu.',reference:'Job 36:27-28; Lévitique 13–15; Lévitique 17:11; Michée 5:2'},
  {id:'v56-i-006',type:'intruder',category:C.science,difficulty:'medium',items:['Création','Observation des animaux','Cycle de l’eau','Néhémie'],intruder:3,explanation:'Les trois premiers concernent le monde naturel ; Néhémie est un personnage.',reference:'Genèse 1; Job 38–39; Job 36:27-28; Néhémie 1:1'},
  {id:'v56-i-007',type:'intruder',category:C.propheties,difficulty:'medium',items:['Isaïe 7:14','Michée 5:2','Daniel 7','Néhémie 2'],intruder:3,explanation:'Les trois premiers sont prophétiques ; Néhémie 2 raconte une reconstruction.',reference:'Isaïe 7:14; Michée 5:2; Daniel 7; Néhémie 2'},
  {id:'v56-i-008',type:'intruder',category:C.propheties,difficulty:'medium',items:['Joël 2','Ésaïe 9','Jérémie 31','Ruth 2'],intruder:3,explanation:'Les trois premiers sont prophétiques ; Ruth 2 est un récit.',reference:'Joël 2:28-29; Isaïe 9:5-6; Jérémie 31:31; Ruth 2'},
];

export const jwV56TimesUp: TimesUpQuestion[] = [
  {id:'v56-t-001',type:'timesup',category:C.versets,difficulty:'easy',answer:'Psaume 23',clues:['berger','vallée','confiance'],reference:'Psaume 23'},
  {id:'v56-t-002',type:'timesup',category:C.versets,difficulty:'medium',answer:'Proverbes 3:5-6',clues:['confiance','cœur','direction'],reference:'Proverbes 3:5-6'},
  {id:'v56-t-003',type:'timesup',category:C.histoire,difficulty:'medium',answer:'Cyrus',clues:['Perse','Babylone','décret'],reference:'Esdras 1:1-4'},
  {id:'v56-t-004',type:'timesup',category:C.histoire,difficulty:'medium',answer:'Néhémie',clues:['murailles','Jérusalem','gouverneur'],reference:'Néhémie 2–6'},
  {id:'v56-t-005',type:'timesup',category:C.science,difficulty:'easy',answer:'Cycle de l’eau',clues:['vapeur', 'nuages', 'pluie'],reference:'Job 36:27-28'},
  {id:'v56-t-006',type:'timesup',category:C.science,difficulty:'medium',answer:'Deutéronome',clues:['Loi', 'Moïse', 'alliance'],reference:'Deutéronome 5:1-3; 6:1-9'},
  {id:'v56-t-007',type:'timesup',category:C.propheties,difficulty:'medium',answer:'Michée',clues:['prophète','Bethléem','dirigeant'],reference:'Michée 5:2'},
  {id:'v56-t-008',type:'timesup',category:C.propheties,difficulty:'medium',answer:'Ézéchiel',clues:['vision', 'exil', 'roue'],reference:'Ézéchiel 1:1-28'},
];
