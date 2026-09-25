import type { AdventureEpisode } from './adventure';

export const SEASON_8 = {
  id: 'season-8',
  number: 8,
  title: 'Tout ce qu’annonce la Bible se réalise',
  subtitle: '8e partie du Recueil d’histoires bibliques',
  description: 'Découvre les promesses bibliques concernant la fin de la méchanceté, le nouveau paradis et la vie éternelle.',
  seasonIntro: {
    title: 'Ce que la Bible annonce pour l’avenir',
    story: 'La Bible ne raconte pas seulement le passé. Elle annonce aussi ce que Jéhovah fera dans l’avenir : mettre fin à la méchanceté, établir un monde nouveau et offrir la vie éternelle à ceux qui lui sont agréables.',
    transition: 'Après avoir suivi l’histoire jusqu’à Paul, cette dernière saison ouvre la perspective sur les promesses bibliques pour l’avenir.',
    thread: 'Le fil de l’histoire arrive à une conclusion tournée vers l’espérance : ce que Jéhovah annonce se réalisera.',
  },
  seasonSummary: {
    title: 'Ce que tu découvres sur Jéhovah',
    qualities: [
      { title: 'Fidèle', text: 'Jéhovah réalise les promesses qu’il fait concernant l’avenir.' },
      { title: 'Juste', text: 'Il mettra fin à la méchanceté et fera disparaître les injustices.' },
      { title: 'Protecteur', text: 'Il promet de protéger ses serviteurs au moment où il mettra fin à la méchanceté.' },
      { title: 'Généreux', text: 'Il offre l’espérance d’une vie sans fin dans un paradis terrestre.' },
    ],
  },
  episodes: [
    {id:'end-wickedness',number:114,title:'Fin de la méchanceté',icon:'⚡',intro:'La Bible annonce une grande intervention de Dieu qui mettra fin à la méchanceté. Jésus dirige cette action contre ceux qui pratiquent le mal.',keyPoint:'Jéhovah promet de mettre fin à la méchanceté et de protéger ses serviteurs.',quality:{title:'Juste',text:'Jéhovah ne laissera pas la méchanceté et l’injustice durer pour toujours.'},questions:[{id:'r114a',type:'quiz',prompt:'Que promet Jéhovah de faire ?',choices:[{label:'Mettre fin à la méchanceté',correct:true},{label:'Faire durer l’injustice',correct:false},{label:'Abandonner les humains',correct:false},{label:'Supprimer toute espérance',correct:false}]},{id:'r114b',type:'quiz',prompt:'Qui dirige l’armée mentionnée dans cette histoire ?',choices:[{label:'Jésus',correct:true},{label:'Moïse',correct:false},{label:'David',correct:false},{label:'Paul',correct:false}]}],},
context:'Après toutes les étapes racontées depuis la création, le récit arrive à son aboutissement. La Bible annonce la fin de la méchanceté et la victoire du Roi établi par Dieu.',    {id:'new-paradise',number:115,title:'Le nouveau paradis',icon:'🌳',intro:'La Bible annonce un paradis sur la terre où les humains pourront vivre en paix. La maladie et la mort ne seront plus.',keyPoint:'Jéhovah promet un avenir sans maladie ni mort pour les humains qui lui sont agréables.',quality:{title:'Généreux',text:'Jéhovah offre aux humains l’espérance d’une vie heureuse et durable dans un paradis terrestre.'},questions:[{id:'r115a',type:'quiz',prompt:'Où la Bible annonce-t-elle un nouveau paradis ?',choices:[{label:'Sur la terre',correct:true},{label:'Sur Mars',correct:false},{label:'À Babylone',correct:false},{label:'Seulement dans une ville',correct:false}]},{id:'r115b',type:'truefalse',prompt:'Dans le nouveau paradis, la maladie et la mort ne seront plus.',choices:[{label:'Vrai',correct:true},{label:'Faux',correct:false}]}],},
context:'La fin de la méchanceté ouvre sur la réalisation de la promesse du paradis. Ce que Jésus montrait déjà par ses miracles donne un aperçu de ce que son règne accomplira.',    {id:'eternal-life',number:116,title:'Qui aura la vie éternelle ?',icon:'❤️',intro:'La dernière histoire pose une question essentielle : que faut-il faire pour obtenir la vie éternelle ? Il faut apprendre à connaître Jéhovah et Jésus et agir en accord avec ce qu’ils enseignent.',keyPoint:'Connaître Jéhovah et Jésus implique plus que mémoriser des informations : il faut aussi agir en accord avec leur volonté.',quality:{title:'Proche',text:'Jéhovah veut que les humains apprennent à le connaître et développent une vraie relation avec lui.'},questions:[{id:'r116a',type:'quiz',prompt:'Que faut-il apprendre à connaître pour obtenir la vie éternelle ?',choices:[{label:'Jéhovah et Jésus',correct:true},{label:'Les rois d’Égypte',correct:false},{label:'Les dirigeants romains',correct:false},{label:'Les prophètes de Babylone',correct:false}]},{id:'r116b',type:'quiz',prompt:'Connaître Jéhovah et Jésus signifie-t-il seulement mémoriser des informations ?',choices:[{label:'Non, il faut aussi agir en accord avec leur volonté',correct:true},{label:'Oui, rien d’autre ne compte',correct:false},{label:'Oui, il suffit de connaître leurs noms',correct:false},{label:'Non, il faut seulement connaître les dates',correct:false}]}],},
context:'La dernière histoire ramène le joueur à l’essentiel : connaître Jéhovah et Jésus ne consiste pas seulement à mémoriser des informations. Il faut aussi agir en accord avec ce que l’on apprend.',  ] as AdventureEpisode[],
} as const;