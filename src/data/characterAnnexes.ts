import { characterProfiles } from './characterProfiles';

export type CharacterAnnex = {
  id: string;
  characterId: string;
  title: string;
  period: string;
  story: string;
  questions: { prompt: string; choices: string[]; correct: number }[];
  seasonNumber: number;
  afterEpisode: number;
};

const CHRONOLOGY: Record<string, { seasonNumber: number; afterEpisode: number }> = {
  melchizedek:{seasonNumber:2,afterEpisode:13}, hagar:{seasonNumber:2,afterEpisode:13},
  amos:{seasonNumber:4,afterEpisode:65}, micah:{seasonNumber:4,afterEpisode:72},
  zephaniah:{seasonNumber:4,afterEpisode:73}, nahum:{seasonNumber:4,afterEpisode:76},
  habakkuk:{seasonNumber:4,afterEpisode:76}, obadiah:{seasonNumber:4,afterEpisode:76},
  malachi:{seasonNumber:5,afterEpisode:83},
  mary_bethany:{seasonNumber:6,afterEpisode:90}, joanna:{seasonNumber:6,afterEpisode:93},
  samaritan_leper:{seasonNumber:6,afterEpisode:96}, martha:{seasonNumber:6,afterEpisode:92},
  woman_issue_blood:{seasonNumber:6,afterEpisode:96}, gerasene_man:{seasonNumber:6,afterEpisode:96},
  zacchaeus:{seasonNumber:6,afterEpisode:97},
  james_brother_jesus:{seasonNumber:7,afterEpisode:104}, jude_brother_jesus:{seasonNumber:7,afterEpisode:104},
  john_mark:{seasonNumber:7,afterEpisode:105}, mary_mark_mother:{seasonNumber:7,afterEpisode:106},
  tabitha:{seasonNumber:7,afterEpisode:106}, lydia:{seasonNumber:7,afterEpisode:109},
  jason_thessalonica:{seasonNumber:7,afterEpisode:110}, priscilla:{seasonNumber:7,afterEpisode:110},
  apollos:{seasonNumber:7,afterEpisode:110}, euodia:{seasonNumber:7,afterEpisode:110},
  syntyche:{seasonNumber:7,afterEpisode:110}, gaius_macedonian:{seasonNumber:7,afterEpisode:110},
  phoebe:{seasonNumber:7,afterEpisode:113}, claudius_lycias:{seasonNumber:7,afterEpisode:108},
  felix:{seasonNumber:7,afterEpisode:113}, festus:{seasonNumber:7,afterEpisode:113},
  agrippa_ii:{seasonNumber:7,afterEpisode:113}, berenice:{seasonNumber:7,afterEpisode:113},
  onesimus:{seasonNumber:7,afterEpisode:113}, apphia:{seasonNumber:7,afterEpisode:113},
  archippus:{seasonNumber:7,afterEpisode:113}, onesiphorus:{seasonNumber:7,afterEpisode:113},
  demas:{seasonNumber:7,afterEpisode:113}, titus:{seasonNumber:7,afterEpisode:113},
};
const make = (characterId: string, title: string, period: string, story: string, prompt: string, choices: string[], correct = 0): CharacterAnnex => {
  const chronology = CHRONOLOGY[characterId];
  if (!chronology) throw new Error(`Missing chronology for character annex: ${characterId}`);
  return {
    id: `annex-${characterId}`, characterId, title, period, story,
    questions: [{ prompt, choices, correct }],
    ...chronology,
  };
};

export const CHARACTER_ANNEXES: CharacterAnnex[] = [
  make('melchizedek','Melchisédek rencontre Abraham','Après la victoire d’Abraham','Melchisédek, roi de Salem et prêtre du Dieu Très-Haut, rencontre Abraham après sa victoire. Il lui apporte du pain et du vin, le bénit, puis Abraham lui donne un dixième de tout.','Quel titre Melchisédek portait-il ?',['Roi de Salem et prêtre','Roi d’Égypte','Chef de l’armée d’Israël','Prophète de Babylone']),
  make('hagar','Agar dans le désert','Époque d’Abraham','Agar, la servante égyptienne de Sara, donne naissance à Ismaël. Plus tard, elle se retrouve dans le désert avec son fils. Jéhovah voit sa situation et lui donne des indications concernant l’avenir d’Ismaël.','Qui est le fils d’Agar ?',['Ismaël','Isaac','Jacob','Ésaü']),
  make('joel','Yoël, un prophète','Période des prophètes','Yoël transmet un message prophétique. Son livre appelle le peuple à revenir à Jéhovah et annonce aussi l’action de l’esprit de Dieu.','Qui était Yoël ?',['Un prophète','Un roi','Un juge','Un apôtre']),
  make('amos','Amos, un prophète courageux','Période des rois','Amos était un berger et cultivateur de sycomores avant de recevoir la mission de prophétiser contre l’injustice et l’infidélité d’Israël.','Quel métier Amos exerçait-il notamment ?',['Berger','Roi','Prêtre','Soldat']),
  make('micah','Michée annonce une promesse','Période des rois','Michée est un prophète qui dénonce l’injustice et annonce notamment qu’un dirigeant sortirait de Bethléem.','Michée était-il…',['Un prophète','Un roi','Un juge','Un apôtre']),
  make('zephaniah','Sophonie avertit Juda','Époque de Josias','Sophonie prophétise à l’époque de Josias. Il avertit contre les pratiques mauvaises et encourage à rechercher Jéhovah avec humilité.','À quelle époque Sophonie a-t-il prophétisé ?',['À l’époque de Josias','À l’époque de Moïse','Après Jésus','À l’époque de David']),
  make('nahum','Nahum annonce le jugement de Ninive','Avant la chute de Ninive','Nahum annonce le jugement de Ninive. Son message montre que la violence et l’oppression ne restent pas impunies.','Quelle ville est au centre de la prophétie de Nahum ?',['Ninive','Jérusalem','Bethléem','Babylone']),
  make('habakkuk','Habacuc pose ses questions à Jéhovah','Avant la destruction de Jérusalem','Habacuc voit la violence et demande à Jéhovah combien de temps cette situation durera. Il apprend à attendre avec foi l’accomplissement de la réponse divine.','Que fait Habacuc face à l’injustice ?',['Il interroge Jéhovah','Il devient roi','Il quitte Israël pour l’Égypte','Il construit le temple']),
  make('obadiah','Obadia transmet un message','Période des royaumes','Obadia transmet une prophétie concernant Édom. Son message montre que l’orgueil et les actes hostiles envers le peuple de Dieu ont des conséquences.','Obadia était-il…',['Un prophète','Un roi','Un juge','Un apôtre']),
  make('malachi','Malachie, le dernier prophète','Après le retour d’exil','Malachie transmet des reproches et des encouragements au peuple revenu à Jérusalem. Il rappelle l’importance d’un culte sincère et annonce la venue d’un messager.','Quel était le rôle de Malachie ?',['Prophète','Roi','Soldat','Gouverneur']),
  make('mary_bethany','Marie de Béthanie écoute Jésus','Ministère de Jésus','Marie de Béthanie est la sœur de Marthe et de Lazare. Elle est connue pour avoir choisi d’écouter Jésus et, plus tard, pour avoir manifesté son attachement à Jésus avant sa mort.','De qui Marie de Béthanie est-elle la sœur ?',['Marthe et Lazare','Pierre et Jean','Paul et Barnabé','Jacques et Jean']),
  make('joanna','Jeanne accompagne Jésus','Ministère de Jésus','Jeanne fait partie des femmes qui accompagnent Jésus et ses disciples et les soutiennent de leurs biens. Elle est ensuite mentionnée parmi celles qui constatent que le tombeau de Jésus est vide.','Jeanne faisait partie de…',['Femmes qui accompagnaient Jésus','Douze apôtres','Rois de Judée','Prêtres du temple']),
  make('samaritan_leper','Un Samaritain revient remercier Jésus','Ministère de Jésus','Dix hommes atteints de lèpre demandent de l’aide à Jésus. Ils sont guéris, mais un seul revient pour remercier Jésus : c’est un Samaritain.','Combien d’hommes guéris reviennent remercier Jésus ?',['Un','Deux','Dix','Aucun']),
  make('martha','Marthe accueille Jésus','Ministère de Jésus','Marthe accueille Jésus chez elle. Elle est active dans le service, tandis que sa sœur Marie s’assoit pour écouter Jésus. Plus tard, Marthe manifeste sa foi envers Jésus avant la résurrection de Lazare.','Quelle est la sœur de Marie de Béthanie ?',['Marthe','Jeanne','Élisabeth','Martha n’a pas de sœur']),
  make('woman_issue_blood','Une femme est guérie par sa foi','Ministère de Jésus','Une femme souffre de pertes de sang depuis longtemps. Elle croit que toucher le vêtement de Jésus suffira. Jésus la guérit et lui parle avec bonté.','Depuis combien de temps cette femme souffrait-elle ?',['12 ans','3 ans','7 ans','40 ans']),
  make('gerasene_man','Un homme de la région des Géraséniens est libéré','Ministère de Jésus','Dans la région des Géraséniens, Jésus libère un homme tourmenté par des esprits impurs. L’homme veut ensuite rester avec Jésus, mais Jésus lui demande de raconter ce que Dieu a fait pour lui.','Que demande Jésus à cet homme après l’avoir libéré ?',['De raconter ce que Dieu a fait','De devenir roi','De retourner à Jérusalem','De quitter sa famille']),
  make('zacchaeus','Zachée rencontre Jésus','Ministère de Jésus','Zachée est collecteur d’impôts et veut voir Jésus. Comme il est petit, il monte sur un arbre. Jésus l’appelle, et Zachée montre ensuite par ses actes qu’il veut changer.','Pourquoi Zachée monte-t-il dans un arbre ?',['Pour voir Jésus','Pour se cacher de Jésus','Pour dormir','Pour surveiller Jéricho']),
  make('james_brother_jesus','Jacques, frère de Jésus, devient un disciple','Après la résurrection','Les frères de Jésus ne mettent pas toujours leur foi en lui pendant son ministère. Plus tard, Jacques devient un disciple important de la congrégation de Jérusalem et participe à des décisions majeures.','Dans quelle congrégation Jacques joue-t-il un rôle important ?',['Jérusalem','Rome','Corinthe','Éphèse']),
  make('jude_brother_jesus','Judas, frère de Jésus, écrit une lettre','Après la résurrection','Judas, frère de Jésus, devient lui aussi un disciple. Il écrit une lettre aux chrétiens pour les encourager à défendre la foi et à rester fidèles.','Judas était-il…',['Un frère de Jésus','Un roi d’Israël','Un apôtre choisi par Jésus','Un gouverneur romain']),
  make('john_mark','Jean Marc accompagne les premiers chrétiens','Début du christianisme','Jean Marc est associé aux premières congrégations chrétiennes. Sa mère Marie possède une maison où des disciples se réunissent. Jean Marc accompagne ensuite Barnabé et Paul dans le service chrétien.','Avec qui Jean Marc part-il en mission ?',['Barnabé','Pilate','Caïphe','Corneille']),
  make('lydia','Lydie accueille les missionnaires','Voyages de Paul','Lydie, vendeuse de pourpre, écoute Paul à Philippes. Elle accepte le message et ouvre sa maison à Paul et à ses compagnons.','Quel métier Lydie exerçait-elle ?',['Vendeuse de pourpre','Pêcheuse','Prêtresse','Soldate']),
  make('titus','Tite aide Paul','Début du christianisme','Tite est un compagnon de Paul et participe à l’activité chrétienne. Paul lui confie des responsabilités dans les congrégations et lui adresse ensuite une lettre.','Tite était surtout…',['Un compagnon de Paul','Un roi romain','Un juge d’Israël','Un prêtre du temple']),
  make('jason_thessalonica','Jason accueille Paul','Voyage de Paul','À Thessalonique, Jason accueille Paul et ses compagnons. Des opposants provoquent une agitation et Jason doit répondre devant les autorités.','Dans quelle ville Jason accueille-t-il Paul ?',['Thessalonique','Jérusalem','Rome','Jéricho']),
  make('priscilla','Priscille aide Apollos','Voyage de Paul','Priscille et son mari Aquilas rencontrent Apollos. Ils l’aident à mieux comprendre la voie de Dieu, avec tact et précision.','Qui Priscille aide-t-elle à mieux comprendre la voie de Dieu ?',['Apollos','Pilate','Julius','Zachée']),
  make('apollos','Apollos devient un prédicateur zélé','Voyages de Paul','Apollos connaît bien les Écritures et parle avec zèle. Priscille et Aquilas l’aident à mieux comprendre certaines choses, puis il devient un prédicateur utile.','Quelle qualité caractérise Apollos ?',['Il connaît bien les Écritures','Il est roi','Il commande une armée','Il construit le temple']),
  make('euodia','Évodie sert dans la congrégation','Époque des premières congrégations','Évodie a travaillé aux côtés de Paul pour faire connaître la bonne nouvelle. Paul l’encourage, avec Syntyche, à retrouver l’unité.','Avec qui Évodie est-elle encouragée à être en paix ?',['Syntyche','Lydie','Priscille','Phœbé']),
  make('syntyche','Syntyche sert aux côtés des chrétiens','Époque des premières congrégations','Syntyche a travaillé avec Paul pour la bonne nouvelle. Paul lui demande, ainsi qu’à Évodie, de parvenir à un même état d’esprit.','Avec qui Syntyche a-t-elle travaillé pour la bonne nouvelle ?',['Paul','Pilate','Hérode','Caïphe']),
  make('gaius_macedonian','Gaïus accompagne Paul','Voyages de Paul','Gaïus est un Macédonien et un compagnon de voyage de Paul. À Éphèse, il est entraîné dans l’agitation provoquée par les opposants.','Gaïus était originaire de…',['Macédoine','Égypte','Babylone','Judée']),
  make('phoebe','Phœbé aide la congrégation','Époque des premières congrégations','Phœbé est recommandée par Paul aux chrétiens de Rome. Elle a aidé beaucoup de frères et sœurs, y compris Paul.','Qui recommande Phœbé aux chrétiens de Rome ?',['Paul','Pierre','Jean','Timothée']),
  make('claudius_lycias','Claude Lysias protège Paul','Emprisonnement de Paul','Claude Lysias est le commandant militaire qui intervient lorsque Paul est menacé à Jérusalem. Il le fait transférer sous escorte pour éviter qu’il soit tué.','Quel est le rôle de Claude Lysias ?',['Commandant militaire','Prêtre','Prophète','Roi']),
  make('felix','Félix entend Paul','Emprisonnement de Paul','Félix est gouverneur de Judée. Paul est détenu devant lui et lui parle de la justice, de la maîtrise de soi et du jugement à venir.','Félix était…',['Gouverneur','Apôtre','Prophète','Roi d’Israël']),
  make('festus','Festus entend l’affaire de Paul','Emprisonnement de Paul','Porcius Festus succède à Félix comme gouverneur. Il entend l’affaire de Paul et l’interroge avant que Paul ne fasse appel à César.','Qui succède à Félix comme gouverneur ?',['Festus','Agrippa','Julius','Claude Lysias']),
  make('agrippa_ii','Agrippa II écoute Paul','Emprisonnement de Paul','Hérode Agrippa II vient à Césarée avec Bérénice. Festus lui parle de l’affaire de Paul, et Agrippa écoute ensuite la défense de l’apôtre.','Qui écoute la défense de Paul avec Bérénice ?',['Agrippa II','Pilate','César','Caïphe']),
  make('berenice','Bérénice vient à Césarée','Emprisonnement de Paul','Bérénice accompagne Hérode Agrippa II lorsqu’ils viennent rendre visite à Festus. Elle entend la défense de Paul avec les responsables présents.','Avec qui Bérénice vient-elle à Césarée ?',['Agrippa II','Paul','Julius','Festus']),
  make('onesimus','Onésime rencontre Paul','Époque des premières congrégations','Onésime est un esclave qui devient chrétien après avoir rencontré Paul. Paul écrit à Philémon pour l’encourager à accueillir Onésime comme un frère.','Qui Paul encourage-t-il à accueillir Onésime comme un frère ?',['Philémon','Festus','Agrippa','Tite']),
  make('apphia','Apphia est associée à Philémon','Époque des premières congrégations','Apphia est saluée avec Philémon et Archippe dans la lettre de Paul. Elle fait partie des chrétiens concernés par ce message.','Dans quelle lettre Apphia est-elle saluée ?',['Philémon','Romains','Actes','Révélation']),
  make('archippus','Archippe reçoit une responsabilité','Époque des premières congrégations','Archippe est salué dans la lettre à Philémon. Paul l’encourage aussi à bien accomplir le ministère qu’il a reçu.','Archippe est associé à quelle lettre de Paul ?',['Philémon','Actes','Luc','Matthieu']),
  make('onesiphorus','Onésiphore soutient Paul','Époque des premières congrégations','Onésiphore recherche Paul avec courage et lui apporte du réconfort. Paul se souvient avec reconnaissance de son aide.','Que fait Onésiphore pour Paul ?',['Il le réconforte','Il le fait emprisonner','Il devient son juge','Il le remplace comme apôtre']),
  make('demas','Démas abandonne Paul','Fin du ministère de Paul','Démas a travaillé avec Paul pendant un temps. Plus tard, Paul explique que Démas l’a abandonné parce qu’il a aimé le présent monde.','Pourquoi Démas abandonne-t-il Paul ?',['Parce qu’il aime le présent monde','Parce qu’il devient roi','Parce qu’il part en mission','Parce qu’il est emprisonné']),
  make('mary_mark_mother','Marie accueille les disciples','Début du christianisme','Marie, mère de Jean Marc, possède une maison à Jérusalem où de nombreux disciples se réunissent pour prier. Pierre s’y rend après sa libération de prison.','Qui se réunit dans la maison de Marie ?',['Des disciples chrétiens','Des soldats romains','Des rois','Des prêtres de Baal']),
  make('tabitha','Tabitha est ressuscitée','Début du christianisme','Tabitha, aussi appelée Dorcas, est connue pour ses bonnes actions et ses vêtements offerts aux personnes dans le besoin. Elle meurt, mais Pierre prie et elle est ramenée à la vie.','Quel apôtre Dieu utilise-t-il pour ramener Tabitha à la vie ?',['Pierre','Paul','Jean','Étienne']),
];

export const CHARACTER_ANNEX_CHARACTER_IDS = new Set(CHARACTER_ANNEXES.map(x => x.characterId));
export const getCharacterAnnex = (id: string) => CHARACTER_ANNEXES.find(x => x.id === id);
