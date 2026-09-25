export type AdventureChoice = { label: string; correct: boolean };
export type AdventureQuestion = {
  id: string;
  type: 'quiz' | 'truefalse' | 'order' | 'mystery';
  prompt: string;
  choices: AdventureChoice[];
  explanation?: string;
};
export type AdventureEpisode = {
  id: string;
  number: number;
  title: string;
  icon: string;
  intro: string;
  context?: string;
  keyPoint: string;
  quality?: { title: string; text: string };
  questions: AdventureQuestion[];
  promise?: 'discover' | 'keep' | 'alliance';
  characterIds?: string[];
};

export const SEASON_1 = {
  id: 'season-1',
  number: 1,
  title: 'De la création au déluge',
  subtitle: '1re partie du Recueil d’histoires bibliques',
  description: 'Découvre les premières grandes histoires de la Bible et commence à suivre le fil de la promesse.',
  seasonIntro: {
    title: 'Au commencement',
    story: 'Jéhovah crée la terre et prépare un magnifique avenir pour les humains. Mais Adam et Ève désobéissent, le péché entre dans le monde et la méchanceté augmente. Malgré cela, certains humains restent fidèles. Noé en fait partie.',
    transition: 'Après le Déluge, une nouvelle étape commencera avec Noé, puis avec Abraham. La grande histoire biblique continue.',
    thread: 'Le péché a changé la situation des humains. Mais le projet de Jéhovah n’est pas abandonné.',
  },
  seasonSummary: {
    title: 'Ce que tu découvres sur Jéhovah',
    qualities: [
      { title: 'Créateur', text: 'Jéhovah est à l’origine de la création et prépare la terre pour les humains.' },
      { title: 'Généreux', text: 'Il donne aux humains un magnifique cadre de vie et tout ce dont ils ont besoin.' },
      { title: 'Juste', text: 'La désobéissance a des conséquences, et Jéhovah agit contre la méchanceté.' },
      { title: 'Attentif', text: 'Il voit ce qui se passe dans le cœur des humains et avertit avant qu’un mauvais choix ne soit commis.' },
      { title: 'Fidèle', text: 'Il protège Noé et sa famille et fait avancer son projet malgré la désobéissance humaine.' },
    ],
  },
  episodes: [
    {
      id: 'creation',
      number: 1,
      title: 'Dieu se met à créer',
      icon: '🌍',
      intro: 'Dieu commence son œuvre de création. La lumière apparaît, puis le ciel, la terre, les végétaux, les astres, les animaux et enfin les humains.',
      context: 'Le récit commence par la création du ciel et de la terre. Jéhovah prépare progressivement un cadre de vie pour les humains, puis crée l’être humain.',
      keyPoint: 'Jéhovah est le Créateur. Les humains sont créés le sixième jour.',
      quality: { title: 'Créateur', text: 'Jéhovah prépare la terre et crée les humains.' },
      questions: [
        { id: 'creation-q1', type: 'quiz', prompt: 'Qui est le Créateur ?', choices: [{ label: 'Jéhovah', correct: true }, { label: 'Adam', correct: false }, { label: 'Noé', correct: false }, { label: 'Moïse', correct: false }] },
        { id: 'creation-q2', type: 'quiz', prompt: 'Quand les humains sont-ils créés ?', choices: [{ label: 'Le premier jour', correct: false }, { label: 'Le troisième jour', correct: false }, { label: 'Le sixième jour', correct: true }, { label: 'Le septième jour', correct: false }] },
        { id: 'creation-order', type: 'order', prompt: 'Quel élément vient en dernier dans cette séquence ?', choices: [{ label: 'Les humains', correct: true }, { label: 'La lumière', correct: false }, { label: 'Les végétaux', correct: false }, { label: 'Les poissons', correct: false }] },
        { id: 'creation-tf', type: 'truefalse', prompt: 'Dieu se repose de son œuvre créatrice le septième jour.', choices: [{ label: 'Vrai', correct: true }, { label: 'Faux', correct: false }] },
      ],
    },
    {
      id: 'eden',
      number: 2,
      title: 'Un jardin magnifique',
      icon: '🌳',
      intro: 'Jéhovah prépare un magnifique jardin en Éden. Adam y trouve des arbres, des animaux et tout ce dont il a besoin.',
      keyPoint: 'Éden est un jardin magnifique préparé par Dieu pour l’être humain.',
      quality: { title: 'Généreux', text: 'Jéhovah donne aux humains un magnifique cadre de vie.' },
      questions: [
        { id: 'eden-q1', type: 'quiz', prompt: 'Comment s’appelait le jardin où Adam vivait ?', choices: [{ label: 'Éden', correct: true }, { label: 'Babel', correct: false }, { label: 'Canaan', correct: false }, { label: 'Guilgal', correct: false }] },
        { id: 'eden-q2', type: 'quiz', prompt: 'Que trouve-t-on dans le jardin ?', choices: [{ label: 'Des arbres et des animaux', correct: true }, { label: 'Une ville fortifiée', correct: false }, { label: 'Un palais', correct: false }, { label: 'Une arche', correct: false }] },
        { id: 'eden-tf', type: 'truefalse', prompt: 'Dieu voulait que la terre entière devienne comme un paradis.', choices: [{ label: 'Vrai', correct: true }, { label: 'Faux', correct: false }] },
      ],
    },
    {
      id: 'adam-eve',
      number: 3,
      title: 'Adam et Ève',
      icon: '👫',
      intro: 'Adam prend soin du jardin et donne un nom aux animaux. Puis Jéhovah crée Ève. Le premier couple humain commence sa vie ensemble.',
      keyPoint: 'Adam et Ève sont le premier couple humain.',
      quality: { title: 'Attentionné', text: 'Jéhovah donne aux humains une vie organisée et un rôle dans sa création.' },
      questions: [
        { id: 'adam-q1', type: 'quiz', prompt: 'Qui est le premier homme ?', choices: [{ label: 'Adam', correct: true }, { label: 'Abel', correct: false }, { label: 'Noé', correct: false }, { label: 'Caïn', correct: false }] },
        { id: 'adam-q2', type: 'quiz', prompt: 'Qui devient la femme d’Adam ?', choices: [{ label: 'Ève', correct: true }, { label: 'Sarah', correct: false }, { label: 'Ruth', correct: false }, { label: 'Noémi', correct: false }] },
        { id: 'adam-tf', type: 'truefalse', prompt: 'Adam devait prendre soin du jardin.', choices: [{ label: 'Vrai', correct: true }, { label: 'Faux', correct: false }] },
      ],
      characterIds: ['adam'],
    },
    {
      id: 'eden-expulsion',
      number: 4,
      title: 'Expulsés du jardin d’Éden',
      icon: '🚪',
      intro: 'Adam et Ève désobéissent à Jéhovah en mangeant le fruit interdit. Leur désobéissance entraîne de graves conséquences et ils sont expulsés du jardin.',
      keyPoint: 'La désobéissance d’Adam et Ève entraîne leur perte du paradis.',
      quality: { title: 'Juste', text: 'La désobéissance a des conséquences réelles.' },
      questions: [
        { id: 'expulsion-q1', type: 'quiz', prompt: 'Quel commandement Adam et Ève ont-ils désobéi ?', choices: [{ label: 'Ne pas manger du fruit interdit', correct: true }, { label: 'Ne pas quitter Éden', correct: false }, { label: 'Ne pas parler aux animaux', correct: false }, { label: 'Ne pas avoir d’enfants', correct: false }] },
        { id: 'expulsion-q2', type: 'quiz', prompt: 'Qui parle à Ève par l’intermédiaire du serpent ?', choices: [{ label: 'Satan', correct: true }, { label: 'Noé', correct: false }, { label: 'Adam', correct: false }, { label: 'Abel', correct: false }] },
        { id: 'expulsion-tf', type: 'truefalse', prompt: 'Adam et Ève restent dans le jardin après leur désobéissance.', choices: [{ label: 'Vrai', correct: false }, { label: 'Faux', correct: true }] },
      ],
      characterIds: ['adam'],
    },
    {
      id: 'genesis-315',
      number: 5,
      title: 'Une vie pénible commence',
      icon: '📜',
      intro: 'Hors d’Éden, la vie devient pénible. Mais au moment même où le mal apparaît, Jéhovah annonce une promesse : Genèse 3:15. Cette promesse deviendra un fil qui traversera toute l’histoire biblique.',
      keyPoint: 'La promesse annoncée en Genèse 3:15 ouvre un fil qui se poursuivra dans l’histoire biblique.',
      quality: { title: 'Fidèle à son projet', text: 'Malgré le péché, Jéhovah annonce une suite à son projet pour les humains.' },
      questions: [
        { id: 'promise-q2', type: 'quiz', prompt: 'Que devient la vie humaine après la désobéissance ?', choices: [{ label: 'Elle devient pénible et mène à la mort', correct: true }, { label: 'Elle devient parfaite', correct: false }, { label: 'Elle ne change pas', correct: false }, { label: 'Elle devient éternelle', correct: false }] },
        { id: 'promise-tf', type: 'truefalse', prompt: 'Genèse 3:15 annonce une descendance promise.', choices: [{ label: 'Vrai', correct: true }, { label: 'Faux', correct: false }] },
      ],
      promise: 'discover',
      characterIds: ['adam'],
    },
    {
      id: 'cain-abel',
      number: 6,
      title: 'Caïn et Abel',
      icon: '⚔️',
      intro: 'Caïn est cultivateur et Abel est berger. Leurs offrandes ne sont pas accueillies de la même manière. Caïn se laisse dominer par la colère et tue son frère Abel.',
      keyPoint: 'Caïn est averti de maîtriser le péché avant de tuer Abel.',
      quality: { title: 'Attentif', text: 'Jéhovah avertit Caïn avant que sa colère ne l’amène à commettre un meurtre.' },
      questions: [
        { id: 'cain-q1', type: 'quiz', prompt: 'Quel métier Caïn exerce-t-il ?', choices: [{ label: 'Cultivateur', correct: true }, { label: 'Berger', correct: false }, { label: 'Pêcheur', correct: false }, { label: 'Forgeron', correct: false }] },
        { id: 'cain-q2', type: 'quiz', prompt: 'Quel métier Abel exerce-t-il ?', choices: [{ label: 'Berger', correct: true }, { label: 'Cultivateur', correct: false }, { label: 'Roi', correct: false }, { label: 'Pêcheur', correct: false }] },
        { id: 'cain-q3', type: 'quiz', prompt: 'Que fait Caïn à Abel ?', choices: [{ label: 'Il le tue', correct: true }, { label: 'Il le chasse', correct: false }, { label: 'Il le protège', correct: false }, { label: 'Il le quitte', correct: false }] },
        { id: 'cain-tf', type: 'truefalse', prompt: 'Jéhovah avertit Caïn avant qu’il tue Abel.', choices: [{ label: 'Vrai', correct: true }, { label: 'Faux', correct: false }] },
      ],
    },
    {
      id: 'henoch',
      number: 7,
      title: 'Un homme courageux',
      icon: '🧍',
      intro: 'La méchanceté augmente autour d’Hénoch, mais il continue de servir Dieu. La Bible dit qu’il marchait avec le vrai Dieu.',
      keyPoint: 'Hénoch reste fidèle malgré un environnement mauvais.',
      quality: { title: 'Il apprécie la fidélité', text: 'Jéhovah remarque ceux qui choisissent de faire le bien même quand leur entourage fait le mal.' },
      questions: [
        { id: 'henoch-q1', type: 'quiz', prompt: 'Avec qui Hénoch marchait-il ?', choices: [{ label: 'Avec le vrai Dieu', correct: true }, { label: 'Avec Caïn', correct: false }, { label: 'Avec Noé', correct: false }, { label: 'Avec Adam', correct: false }] },
        { id: 'henoch-q2', type: 'quiz', prompt: 'Combien d’années Hénoch a-t-il vécu ?', choices: [{ label: '365 ans', correct: true }, { label: '120 ans', correct: false }, { label: '500 ans', correct: false }, { label: '969 ans', correct: false }] },
        { id: 'henoch-tf', type: 'truefalse', prompt: 'Hénoch abandonne son service de Dieu parce que son époque est mauvaise.', choices: [{ label: 'Vrai', correct: false }, { label: 'Faux', correct: true }] },
      ],
    },
    {
      id: 'nephilim',
      number: 8,
      title: 'Des géants sur la terre',
      icon: '🗿',
      intro: 'Des anges rebelles se matérialisent sur terre. Les Nefilim deviennent connus pour leur violence et la terre se remplit de corruption. Au milieu de cette génération, Noé marche avec le vrai Dieu.',
      keyPoint: 'La violence et la corruption augmentent avant le Déluge.',
      quality: { title: 'Juste', text: 'Jéhovah ne considère pas la violence et la corruption comme normales ou acceptables.' },
      questions: [
        { id: 'nephilim-q1', type: 'quiz', prompt: 'Comment s’appellent les géants de cette époque ?', choices: [{ label: 'Les Nefilim', correct: true }, { label: 'Les Philistins', correct: false }, { label: 'Les Amalécites', correct: false }, { label: 'Les Moabites', correct: false }] },
        { id: 'nephilim-q2', type: 'quiz', prompt: 'Que caractérise particulièrement cette époque ?', choices: [{ label: 'La violence', correct: true }, { label: 'La paix', correct: false }, { label: 'La prospérité', correct: false }, { label: 'La construction du temple', correct: false }] },
        { id: 'nephilim-tf', type: 'truefalse', prompt: 'Noé marchait avec le vrai Dieu.', choices: [{ label: 'Vrai', correct: true }, { label: 'Faux', correct: false }] },
      ],
      characterIds: ['noe'],
    },
    {
      id: 'noah-ark',
      number: 9,
      title: 'Noé construit une arche',
      icon: '🚢',
      intro: 'Jéhovah annonce le Déluge à Noé et lui demande de construire une arche. Noé, sa famille et les animaux qu’il doit préserver se préparent pendant que les autres ne l’écoutent pas.',
      keyPoint: 'Noé fait exactement ce que Dieu lui demande malgré l’incrédulité des autres.',
      quality: { title: 'Protecteur', text: 'Jéhovah donne à Noé des instructions pour préserver sa famille et des animaux.' },
      questions: [
        { id: 'noah-q1', type: 'quiz', prompt: 'Pourquoi Noé construit-il une arche ?', choices: [{ label: 'Pour survivre au Déluge', correct: true }, { label: 'Pour voyager', correct: false }, { label: 'Pour devenir roi', correct: false }, { label: 'Pour stocker de l’or', correct: false }] },
        { id: 'noah-q2', type: 'quiz', prompt: 'Combien de personnes composent la famille de Noé dans l’arche ?', choices: [{ label: '8', correct: true }, { label: '4', correct: false }, { label: '12', correct: false }, { label: '40', correct: false }] },
        { id: 'noah-q3', type: 'quiz', prompt: 'Quels sont les trois fils de Noé ?', choices: [{ label: 'Sem, Cham et Japhet', correct: true }, { label: 'Caïn, Abel et Seth', correct: false }, { label: 'Abraham, Isaac et Jacob', correct: false }, { label: 'Pierre, Jean et Jacques', correct: false }] },
        { id: 'noah-tf', type: 'truefalse', prompt: 'Noé fait ce que Dieu lui demande.', choices: [{ label: 'Vrai', correct: true }, { label: 'Faux', correct: false }] },
      ],
      characterIds: ['noe'],
    },
    {
      id: 'flood',
      number: 10,
      title: 'Le Déluge universel',
      icon: '🌊',
      intro: 'Noé et sa famille sont dans l’arche. La porte est fermée, puis la pluie commence. Après la décrue, une colombe rapporte une feuille d’olivier et la famille peut finalement sortir.',
      keyPoint: 'Après le Déluge, Jéhovah établit une alliance avec Noé et donne l’arc-en-ciel comme signe.',
      quality: { title: 'Fidèle', text: 'Jéhovah établit son alliance avec Noé et en donne un signe visible.' },
      questions: [
        { id: 'flood-q1', type: 'quiz', prompt: 'Combien de jours et de nuits la pluie tombe-t-elle ?', choices: [{ label: '40', correct: true }, { label: '7', correct: false }, { label: '12', correct: false }, { label: '70', correct: false }] },
        { id: 'flood-q2', type: 'quiz', prompt: 'Quel oiseau rapporte une feuille d’olivier ?', choices: [{ label: 'La colombe', correct: true }, { label: 'Le corbeau', correct: false }, { label: 'L’aigle', correct: false }, { label: 'Le moineau', correct: false }] },
        { id: 'flood-q3', type: 'quiz', prompt: 'Qui ferme la porte de l’arche ?', choices: [{ label: 'Jéhovah', correct: true }, { label: 'Noé', correct: false }, { label: 'Sem', correct: false }, { label: 'Un Nefilim', correct: false }] },
        { id: 'flood-tf', type: 'truefalse', prompt: 'L’arc-en-ciel devient le signe de l’alliance avec Noé.', choices: [{ label: 'Vrai', correct: true }, { label: 'Faux', correct: false }] },
      ],
      promise: 'alliance',
      characterIds: ['noe'],
    },
  ] as AdventureEpisode[],
} as const;

export type AdventureSeason = typeof SEASON_1;
