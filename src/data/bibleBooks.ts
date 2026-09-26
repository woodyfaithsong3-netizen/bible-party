export type BibleBookStatus = 'adventure' | 'annex' | 'new-annex';

export type BibleBook = {
  id: string;
  number: number;
  name: string;
  section: 'hebrew' | 'greek';
  category: string;
  writer: string;
  compositionPlace: string;
  writtenBy: string;
  completionDate: string;
  status: BibleBookStatus;
  adventureEpisodes?: number[];
  annexId?: string;
  note?: string;
  /** ID d’un épisode ou d’une annexe qui sert de porte d’entrée vers ce livre. */
  discoveryLabel?: string;
};

/**
 * Cartographie des 66 livres de la Bible.
 *
 * Source de référence pour écrivain, lieu et fin de rédaction :
 * JW.org — Table des livres de la Bible.
 *
 * Dans l’application, « écrivain » désigne le rédacteur humain.
 * « Jéhovah » reste l’Auteur divin de la Bible et la source de son inspiration.
 */
export const BIBLE_BOOKS: BibleBook[] = [
  {id:'genesis',number:1,name:'Genèse',section:'hebrew',category:'Histoire et lois',writer:'Moïse',compositionPlace:'Désert',writtenBy:'Jéhovah',completionDate:'1513 av. n. è.',status:'adventure',adventureEpisodes:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]},
  {id:'exodus',number:2,name:'Exode',section:'hebrew',category:'Histoire et lois',writer:'Moïse',compositionPlace:'Désert',writtenBy:'Jéhovah',completionDate:'1512 av. n. è.',status:'adventure',adventureEpisodes:[28,29,30,31,32,33,34,35,36,37,38,39,40]},
  {id:'leviticus',number:3,name:'Lévitique',section:'hebrew',category:'Histoire et lois',writer:'Moïse',compositionPlace:'Désert',writtenBy:'Jéhovah',completionDate:'1512 av. n. è.',status:'adventure',adventureEpisodes:[37]},
  {id:'numbers',number:4,name:'Nombres',section:'hebrew',category:'Histoire et lois',writer:'Moïse',compositionPlace:'Désert et plaines de Moab',writtenBy:'Jéhovah',completionDate:'1473 av. n. è.',status:'adventure',adventureEpisodes:[38,39,40,41,42]},
  {id:'deuteronomy',number:5,name:'Deutéronome',section:'hebrew',category:'Histoire et lois',writer:'Moïse',compositionPlace:'Plaines de Moab',writtenBy:'Jéhovah',completionDate:'1473 av. n. è.',status:'adventure',adventureEpisodes:[41,42,43]},
  {id:'joshua',number:6,name:'Josué',section:'hebrew',category:'Histoire de la nation d’Israël',writer:'Josué',compositionPlace:'Canaan',writtenBy:'Jéhovah',completionDate:'v. 1450 av. n. è.',status:'adventure',adventureEpisodes:[43,44,45,46,47,48,49]},
  {id:'judges',number:7,name:'Juges',section:'hebrew',category:'Histoire de la nation d’Israël',writer:'Samuel',compositionPlace:'Israël',writtenBy:'Jéhovah',completionDate:'v. 1100 av. n. è.',status:'adventure',adventureEpisodes:[50,51,52,53,54,55]},
  {id:'ruth',number:8,name:'Ruth',section:'hebrew',category:'Histoire de la nation d’Israël',writer:'Samuel',compositionPlace:'Israël',writtenBy:'Jéhovah',completionDate:'v. 1090 av. n. è.',status:'adventure',adventureEpisodes:[51]},
  {id:'1-samuel',number:9,name:'1 Samuel',section:'hebrew',category:'Histoire de la nation d’Israël',writer:'Samuel ; Gad ; Nathan',compositionPlace:'Israël',writtenBy:'Jéhovah',completionDate:'v. 1078 av. n. è.',status:'adventure',adventureEpisodes:[55,56,57,58,59,60]},
  {id:'2-samuel',number:10,name:'2 Samuel',section:'hebrew',category:'Histoire de la nation d’Israël',writer:'Gad ; Nathan',compositionPlace:'Israël',writtenBy:'Jéhovah',completionDate:'v. 1040 av. n. è.',status:'adventure',adventureEpisodes:[60,61,62,63,64]},
  {id:'1-kings',number:11,name:'1 Rois',section:'hebrew',category:'Histoire de la nation d’Israël',writer:'Jérémie',compositionPlace:'Juda',writtenBy:'Jéhovah',completionDate:'580 av. n. è.',status:'adventure',adventureEpisodes:[64,65,66,67,68,69,70]},
  {id:'2-kings',number:12,name:'2 Rois',section:'hebrew',category:'Histoire de la nation d’Israël',writer:'Jérémie',compositionPlace:'Juda et Égypte',writtenBy:'Jéhovah',completionDate:'580 av. n. è.',status:'adventure',adventureEpisodes:[68,69,70,71,72,73,74,75,76]},
  {id:'1-chronicles',number:13,name:'1 Chroniques',section:'hebrew',category:'Histoire de la nation d’Israël',writer:'Esdras',compositionPlace:'Jérusalem (?)',writtenBy:'Jéhovah',completionDate:'v. 460 av. n. è.',status:'adventure',adventureEpisodes:[57,58,61,62]},
  {id:'2-chronicles',number:14,name:'2 Chroniques',section:'hebrew',category:'Histoire de la nation d’Israël',writer:'Esdras',compositionPlace:'Jérusalem (?)',writtenBy:'Jéhovah',completionDate:'v. 460 av. n. è.',status:'adventure',adventureEpisodes:[61,62,63,64,65,66,67,68,69,71,72,73,74,75,76]},
  {id:'ezra',number:15,name:'Esdras',section:'hebrew',category:'Histoire de la nation d’Israël',writer:'Esdras',compositionPlace:'Jérusalem',writtenBy:'Jéhovah',completionDate:'v. 460 av. n. è.',status:'adventure',adventureEpisodes:[80,81]},
  {id:'nehemiah',number:16,name:'Néhémie',section:'hebrew',category:'Histoire de la nation d’Israël',writer:'Néhémie',compositionPlace:'Jérusalem',writtenBy:'Jéhovah',completionDate:'apr. 443 av. n. è.',status:'adventure',adventureEpisodes:[83]},
  {id:'esther',number:17,name:'Esther',section:'hebrew',category:'Histoire de la nation d’Israël',writer:'Mardochée',compositionPlace:'Suse, Élam',writtenBy:'Jéhovah',completionDate:'v. 475 av. n. è.',status:'adventure',adventureEpisodes:[82]},
  {id:'job',number:18,name:'Job',section:'hebrew',category:'Poèmes',writer:'Moïse',compositionPlace:'Désert',writtenBy:'Jéhovah',completionDate:'v. 1473 av. n. è.',status:'new-annex',note:'Aucune histoire principale dédiée : prévoir une découverte courte du livre.'},
  {id:'psalms',number:19,name:'Psaumes',section:'hebrew',category:'Poèmes',writer:'David et d’autres',compositionPlace:'—',writtenBy:'Jéhovah',completionDate:'v. 460 av. n. è.',status:'new-annex'},
  {id:'proverbs',number:20,name:'Proverbes',section:'hebrew',category:'Poèmes',writer:'Salomon ; Agour ; Lemouel',compositionPlace:'Jérusalem',writtenBy:'Jéhovah',completionDate:'v. 717 av. n. è.',status:'new-annex'},
  {id:'ecclesiastes',number:21,name:'Ecclésiaste',section:'hebrew',category:'Poèmes',writer:'Salomon',compositionPlace:'Jérusalem',writtenBy:'Jéhovah',completionDate:'av. 1000 av. n. è.',status:'new-annex'},
  {id:'song-of-solomon',number:22,name:'Chant de Salomon',section:'hebrew',category:'Poèmes',writer:'Salomon',compositionPlace:'Jérusalem',writtenBy:'Jéhovah',completionDate:'v. 1020 av. n. è.',status:'new-annex'},
  {id:'isaiah',number:23,name:'Isaïe',section:'hebrew',category:'Prophéties',writer:'Isaïe',compositionPlace:'Jérusalem',writtenBy:'Jéhovah',completionDate:'apr. 732 av. n. è.',status:'adventure',adventureEpisodes:[71,72,74,80]},
  {id:'jeremiah',number:24,name:'Jérémie',section:'hebrew',category:'Prophéties',writer:'Jérémie',compositionPlace:'Juda ; Égypte',writtenBy:'Jéhovah',completionDate:'580 av. n. è.',status:'adventure',adventureEpisodes:[73,74,76]},
  {id:'lamentations',number:25,name:'Lamentations',section:'hebrew',category:'Prophéties',writer:'Jérémie',compositionPlace:'À proximité de Jérusalem',writtenBy:'Jéhovah',completionDate:'607 av. n. è.',status:'new-annex'},
  {id:'ezekiel',number:26,name:'Ézéchiel',section:'hebrew',category:'Prophéties',writer:'Ézéchiel',compositionPlace:'Babylone',writtenBy:'Jéhovah',completionDate:'v. 591 av. n. è.',status:'new-annex',note:'Ne pas l’associer artificiellement à l’histoire 76.'},
  {id:'daniel',number:27,name:'Daniel',section:'hebrew',category:'Prophéties',writer:'Daniel',compositionPlace:'Babylone',writtenBy:'Jéhovah',completionDate:'v. 536 av. n. è.',status:'adventure',adventureEpisodes:[75]},
  {id:'hosea',number:28,name:'Osée',section:'hebrew',category:'Prophéties',writer:'Osée',compositionPlace:'Samarie (district)',writtenBy:'Jéhovah',completionDate:'apr. 745 av. n. è.',status:'new-annex'},
  {id:'joel',number:29,name:'Joël',section:'hebrew',category:'Prophéties',writer:'Joël',compositionPlace:'Juda',writtenBy:'Jéhovah',completionDate:'v. 820 av. n. è. (?)',status:'annex',annexId:'annex-joel'},
  {id:'amos',number:30,name:'Amos',section:'hebrew',category:'Prophéties',writer:'Amos',compositionPlace:'Juda',writtenBy:'Jéhovah',completionDate:'v. 804 av. n. è.',status:'annex',annexId:'annex-amos'},
  {id:'obadiah',number:31,name:'Abdias',section:'hebrew',category:'Prophéties',writer:'Abdias',compositionPlace:'—',writtenBy:'Jéhovah',completionDate:'v. 607 av. n. è.',status:'annex',annexId:'annex-obadiah'},
  {id:'jonah',number:32,name:'Jonas',section:'hebrew',category:'Prophéties',writer:'Jonas',compositionPlace:'—',writtenBy:'Jéhovah',completionDate:'v. 844 av. n. è.',status:'adventure',adventureEpisodes:[70]},
  {id:'micah',number:33,name:'Michée',section:'hebrew',category:'Prophéties',writer:'Michée',compositionPlace:'Juda',writtenBy:'Jéhovah',completionDate:'av. 717 av. n. è.',status:'annex',annexId:'annex-micah'},
  {id:'nahum',number:34,name:'Nahum',section:'hebrew',category:'Prophéties',writer:'Nahum',compositionPlace:'Juda',writtenBy:'Jéhovah',completionDate:'av. 632 av. n. è.',status:'annex',annexId:'annex-nahum'},
  {id:'habakkuk',number:35,name:'Habacuc',section:'hebrew',category:'Prophéties',writer:'Habacuc',compositionPlace:'Juda',writtenBy:'Jéhovah',completionDate:'v. 628 av. n. è. (?)',status:'annex',annexId:'annex-habakkuk'},
  {id:'zephaniah',number:36,name:'Sophonie',section:'hebrew',category:'Prophéties',writer:'Sophonie',compositionPlace:'Juda',writtenBy:'Jéhovah',completionDate:'av. 648 av. n. è.',status:'annex',annexId:'annex-zephaniah'},
  {id:'haggai',number:37,name:'Aggée',section:'hebrew',category:'Prophéties',writer:'Aggée',compositionPlace:'Jérusalem',writtenBy:'Jéhovah',completionDate:'520 av. n. è.',status:'adventure',adventureEpisodes:[80,81]},
  {id:'zechariah',number:38,name:'Zacharie',section:'hebrew',category:'Prophéties',writer:'Zacharie',compositionPlace:'Jérusalem',writtenBy:'Jéhovah',completionDate:'518 av. n. è.',status:'adventure',adventureEpisodes:[80,81]},
  {id:'malachi',number:39,name:'Malachie',section:'hebrew',category:'Prophéties',writer:'Malachie',compositionPlace:'Jérusalem',writtenBy:'Jéhovah',completionDate:'apr. 443 av. n. è.',status:'annex',annexId:'annex-malachi'},

  {id:'matthew',number:40,name:'Matthieu',section:'greek',category:'Évangiles',writer:'Matthieu',compositionPlace:'Israël',writtenBy:'Jéhovah',completionDate:'v. 41 de n. è.',status:'adventure',adventureEpisodes:[84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101]},
  {id:'mark',number:41,name:'Marc',section:'greek',category:'Évangiles',writer:'Marc',compositionPlace:'Rome',writtenBy:'Jéhovah',completionDate:'v. 60-65 de n. è.',status:'adventure',adventureEpisodes:[84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101]},
  {id:'luke',number:42,name:'Luc',section:'greek',category:'Évangiles',writer:'Luc',compositionPlace:'Césarée',writtenBy:'Jéhovah',completionDate:'v. 56-58 de n. è.',status:'adventure',adventureEpisodes:[84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101]},
  {id:'john',number:43,name:'Jean',section:'greek',category:'Évangiles',writer:'Apôtre Jean',compositionPlace:'Éphèse, ou à proximité',writtenBy:'Jéhovah',completionDate:'v. 98 de n. è.',status:'adventure',adventureEpisodes:[84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101]},
  {id:'acts',number:44,name:'Actes',section:'greek',category:'Actes des apôtres',writer:'Luc',compositionPlace:'Rome',writtenBy:'Jéhovah',completionDate:'v. 61 de n. è.',status:'adventure',adventureEpisodes:[102,103,104,105,106,107,108,109,110,111,112,113]},
  {id:'romans',number:45,name:'Romains',section:'greek',category:'Lettres',writer:'Paul',compositionPlace:'Corinthe',writtenBy:'Jéhovah',completionDate:'v. 56 de n. è.',status:'new-annex'},
  {id:'1-corinthians',number:46,name:'1 Corinthiens',section:'greek',category:'Lettres',writer:'Paul',compositionPlace:'Éphèse',writtenBy:'Jéhovah',completionDate:'v. 55 de n. è.',status:'new-annex'},
  {id:'2-corinthians',number:47,name:'2 Corinthiens',section:'greek',category:'Lettres',writer:'Paul',compositionPlace:'Macédoine',writtenBy:'Jéhovah',completionDate:'v. 55 de n. è.',status:'new-annex'},
  {id:'galatians',number:48,name:'Galates',section:'greek',category:'Lettres',writer:'Paul',compositionPlace:'Corinthe ou Antioche de Syrie',writtenBy:'Jéhovah',completionDate:'v. 50-52 de n. è.',status:'new-annex'},
  {id:'ephesians',number:49,name:'Éphésiens',section:'greek',category:'Lettres',writer:'Paul',compositionPlace:'Rome',writtenBy:'Jéhovah',completionDate:'v. 60-61 de n. è.',status:'new-annex'},
  {id:'philippians',number:50,name:'Philippiens',section:'greek',category:'Lettres',writer:'Paul',compositionPlace:'Rome',writtenBy:'Jéhovah',completionDate:'v. 60-61 de n. è.',status:'new-annex'},
  {id:'colossians',number:51,name:'Colossiens',section:'greek',category:'Lettres',writer:'Paul',compositionPlace:'Rome',writtenBy:'Jéhovah',completionDate:'v. 60-61 de n. è.',status:'new-annex'},
  {id:'1-thessalonians',number:52,name:'1 Thessaloniciens',section:'greek',category:'Lettres',writer:'Paul',compositionPlace:'Corinthe',writtenBy:'Jéhovah',completionDate:'v. 50 de n. è.',status:'new-annex'},
  {id:'2-thessalonians',number:53,name:'2 Thessaloniciens',section:'greek',category:'Lettres',writer:'Paul',compositionPlace:'Corinthe',writtenBy:'Jéhovah',completionDate:'v. 51 de n. è.',status:'new-annex'},
  {id:'1-timothy',number:54,name:'1 Timothée',section:'greek',category:'Lettres',writer:'Paul',compositionPlace:'Macédoine',writtenBy:'Jéhovah',completionDate:'v. 61-64 de n. è.',status:'new-annex',note:'Prévoir une découverte dédiée à 1 Timothée.'},
  {id:'2-timothy',number:55,name:'2 Timothée',section:'greek',category:'Lettres',writer:'Paul',compositionPlace:'Rome',writtenBy:'Jéhovah',completionDate:'v. 65 de n. è.',status:'new-annex'},
  {id:'titus',number:56,name:'Tite',section:'greek',category:'Lettres',writer:'Paul',compositionPlace:'Macédoine (?)',writtenBy:'Jéhovah',completionDate:'v. 61-64 de n. è.',status:'annex',annexId:'annex-titus'},
  {id:'philemon',number:57,name:'Philémon',section:'greek',category:'Lettres',writer:'Paul',compositionPlace:'Rome',writtenBy:'Jéhovah',completionDate:'v. 60-61 de n. è.',status:'annex',annexId:'annex-onesimus'},
  {id:'hebrews',number:58,name:'Hébreux',section:'greek',category:'Lettres',writer:'Paul',compositionPlace:'Rome',writtenBy:'Jéhovah',completionDate:'v. 61 de n. è.',status:'new-annex'},
  {id:'james',number:59,name:'Jacques',section:'greek',category:'Lettres',writer:'Jacques (frère de Jésus)',compositionPlace:'Jérusalem',writtenBy:'Jéhovah',completionDate:'av. 62 de n. è.',status:'annex',annexId:'annex-james_brother_jesus'},
  {id:'1-peter',number:60,name:'1 Pierre',section:'greek',category:'Lettres',writer:'Pierre',compositionPlace:'Babylone',writtenBy:'Jéhovah',completionDate:'v. 62-64 de n. è.',status:'new-annex'},
  {id:'2-peter',number:61,name:'2 Pierre',section:'greek',category:'Lettres',writer:'Pierre',compositionPlace:'Babylone (?)',writtenBy:'Jéhovah',completionDate:'v. 64 de n. è.',status:'new-annex'},
  {id:'1-john',number:62,name:'1 Jean',section:'greek',category:'Lettres',writer:'Apôtre Jean',compositionPlace:'Éphèse, ou à proximité',writtenBy:'Jéhovah',completionDate:'v. 98 de n. è.',status:'new-annex'},
  {id:'2-john',number:63,name:'2 Jean',section:'greek',category:'Lettres',writer:'Apôtre Jean',compositionPlace:'Éphèse, ou à proximité',writtenBy:'Jéhovah',completionDate:'v. 98 de n. è.',status:'new-annex'},
  {id:'3-john',number:64,name:'3 Jean',section:'greek',category:'Lettres',writer:'Apôtre Jean',compositionPlace:'Éphèse, ou à proximité',writtenBy:'Jéhovah',completionDate:'v. 98 de n. è.',status:'new-annex'},
  {id:'jude',number:65,name:'Jude',section:'greek',category:'Lettres',writer:'Jude (frère de Jésus)',compositionPlace:'Israël (?)',writtenBy:'Jéhovah',completionDate:'v. 65 de n. è.',status:'annex',annexId:'annex-jude_brother_jesus'},
  {id:'revelation',number:66,name:'Révélation',section:'greek',category:'Révélation',writer:'Apôtre Jean',compositionPlace:'Patmos',writtenBy:'Jéhovah',completionDate:'v. 96 de n. è.',status:'adventure',adventureEpisodes:[114,115]},
];

export const BIBLE_BOOKS_BY_ID = Object.fromEntries(BIBLE_BOOKS.map(book => [book.id, book])) as Record<string, BibleBook>;
export const BIBLE_BOOKS_WITH_NEW_ANNEXES = BIBLE_BOOKS.filter(book => book.status === 'new-annex');
export const BIBLE_BOOKS_WITH_EXISTING_ANNEXES = BIBLE_BOOKS.filter(book => book.status === 'annex');
