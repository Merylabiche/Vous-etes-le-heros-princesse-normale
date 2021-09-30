
let chaptersObj = {
  le_commencement: {  
    subtitle: "Le commencement",
    text: "Tu es une princesse et tu te réveille d'un cauchemar sans personne à côté de toi. Le prince s'est enfui et tu veux le retrouver.",
    img: "tiana_dort.jpg",
    option: [
      {
      text: "Tu sors de ton château.",
      action: "goToChapter(mort_commencement_1)"
      },
      {
      text: "Tu manges la pomme sur le comptoir.",
      action: "goToChapter(mort_commencement_2)" 
      },
      { 
      text: "Tu lances le steak que ta pas fini par la fenêtre.",
      action: "goToChapter(suite_commencement)"
      },
    ],
  },

  mort_commencement_1: {  
    subtitle: "Game Over",
    text: "Tu te fais tué par le dragon.",
    img: "qqch.jpg",
    option: [
      {
      text: "On recommence.",
      action: "goToChapter(le_commencement)"
      }
    ],
  },

  mort_commencement_2: {  
    subtitle: "Game Over",
    text: "Tu deviens hyper musclé et tu tue le dragon. En sortant du château, tu traverses le pont devant toi. Tu meurs parce que tu casses le pont avec ton poids" ,
    img: "qqch.jpg",
    option: [
      {
      text: "On recommence.",
      action: "goToChapter(le_commencement)"
      }
    ],
  },

  suite_commencement: {  
    subtitle: "Le pont",
    text: "Le dragon mange le steak et tu sors du château.",
    img: "qqch.jpg",
    option: [
      {
      text: "Traverser le pont",
      action: "goToChapter(les_chemins)"
      }
    ],
  },


  les_chemins: {
    subtitle: "Les chemins",
    text: "Tu vois 3 chemins devant toi.",
    img: "chemins.jpg",
    option: [
      {
      text: "Chemin avec des miroirs.",
      action: "goToChapter(mort_chemins_1)" 
      },
       {
      text: "Chemin avec des papillons et des licornes.",
      action: "goToChapter(mort_chemins_2)"
      },
      {
      text: "Chemin volcanique avec tremblement de terre.",
      action: "goToChapter(suite_chemins)"
      },
    ],
  },
  
  mort_chemins_1: {  
    subtitle: "Game Over",
    text: "Tu meurs parce que tu es trop belle.",
    img: "qqch.jpg",
    option: [
      {
      text: "On recommence.",
      action: "goToChapter(le_commencement)"
      }
    ],
  },

  mort_chemins_2: {  
    subtitle: "Game Over",
    text: "Tu meurs par les papillons kamikaze et les licornes qui tirent des lasers.",
    img: "qqch.jpg",
    option: [
      {
      text: "On recommence.",
      action: "goToChapter(le_commencement)"
      }
    ],
  },

  suite_chemins: {  
    subtitle: "La tornade",
    text: "Un lait à la fraise sort d'un trou volcanique. Tu le bois et tu voles. En volant, tu vois une tornade au loin. .",
    img: "qqch.jpg",
    option: [
      {
      text: "Regarder la tornade",
      action: "goToChapter(la_chine)"
      }
    ],
  },

  la_chine: {
  subtitle: "La Chine",
  text: "Un requin qui vient de sortir de la tornade fonce sur toi et te fait tomber. Tu atterris sur la muraille de chine.",
  img: "chine.jpg",
  option: [
    {
    text: "Tu prends une roche à terre.",
    action: "goToChapter(mort_chine)" 
    },
    {
    text: "Tu sautes en bas de la muraille.",
    action: "goToChapter(suite_chine_1)"
    },
    {
    text: "Tu aides le père Noël à retrouver son chemin.",
    action: "goToChapter(suite_chine_2)"
    },
  ],
},

  mort_chine: {  
    subtitle: "Game Over",
    text: "Tu détruits complètement la muraille et des millénaires d'histoire. Tu meurs écrasé.",
    img: "qqch.jpg",
    option: [
      {
      text: "On recommence.",
      action: "goToChapter(le_commencement)"
      }
    ],
  },

  suite_chine_1: {  
    subtitle: "Le pudding",
    text: "Un pudding géant aux poissons et aux algues te rattrappes. Tu sors doucement en glissant.",
    img: "qqch.jpg",
    option: [
      {
      text: "Marcher",
      action: "goToChapter(pouvoir_ultime_mauvais)"
      }
    ],
  },

  suite_chine_2: {  
    subtitle: "Le père Noël",
    text: "Il te téléporte avec sa barbe sur une autre planète",
    img: "qqch.jpg",
    option: [
      {
      text: "Regarder autour",
      action: "goToChapter(autre_planete)"
      }
    ],
  },

  autre_planete: {
    subtitle: "Autre planète",
    text: " Un Alien vient te voir.",
    img: "alien.jpg",
    option: [
      {
      text: "90E3HDGBVC",
      action: "goToChapter(mort_planete)" 
      },
      {
      text: "PKÈFQJRBGEQ",
      action: "goToChapter(restart_planete)"
      },
      {
      text: "JO3RFRGGEUFVOW",
      action: "goToChapter(suite_planete)"
      },
    ],
  },

  mort_planete: {  
    subtitle: "Game Over",
    text: "Tu te transforme en montagne.",
    img: "qqch.jpg",
    option: [
      {
      text: "On recommence.",
      action: "goToChapter(le_commencement)"
      }
    ],
  },

  restart_planete: {  
    subtitle: "Le mauvais pont",
    text: "Le Naruto Bridge apparait devant toi.",
    img: "qqch.jpg",
    option: [
      {
      text: "Traverser",
      action: "goToChapter(les_chemins)"
      }
    ],
  },

  suite_planete: {  
    subtitle: "Ocarina",
    text: "De la musique de Zelda commence à jouer",
    img: "qqch.jpg",
    option: [
      {
      text: "Écouter",
      action: "goToChapter(dilemme_coffre)"
      }
    ],
  },

  dilemme_coffre: {
    subtitle: "Dilemme du coffre",
    text: "Un coffre apparait et te demande: As-tu aidé le père Noël?",
    img: "coffre.jpg",
    option: [
      {
      text: "Mentir et dire non.",
      action: "goToChapter(mort_coffre)" 
      },
      {
      text: "Oui.",
      action: "goToChapter(suite_coffre)"
      },
    ],
  },

  mort_coffre: {  
    subtitle: "Game Over",
    text: "Tu es forcé à te battre avec Vegeta pour le reste des temps",
    img: "qqch.jpg",
    option: [
      {
      text: "On recommence.",
      action: "goToChapter(le_commencement)"
      }
    ],
  },

  suite_coffre: {  
    subtitle: "One Piece!",
    text: "Le Going Merry sort du coffre.",
    img: "qqch.jpg",
    option: [
      {
      text: "Monter",
      action: "goToChapter(moment_attendu)"
      }
    ],
  },

  moment_attendu: {
    subtitle: "Le moment tant attendu",
    text: "Tu arrives devant ton prince.",
    img: "prince.jpg",
    option: [
      {
      text: "Tu le laisse vivre.",
      action: "goToChapter(mort_attendu)"
      },
      {
      text: "Tu le tues.",
      action: "goToChapter(fin_attendu)" 
      },
    ],
  },

  mort_attendu: {  
    subtitle: "Game Over",
    text: "Pumba arrive avec la musique de THX et vous tuent tout les deux avec sa flatulence",
    img: "qqch.jpg",
    option: [
      {
      text: "On recommence.",
      action: "goToChapter(le_commencement)"
      }
    ],
  },

  fin_attendu: {  
    subtitle: "The End",
    text: "Tu prends toute sa richesse et vit heureuse pour la fin des temps.",
    img: "qqch.jpg",
    option: [
      {
      text: "Reccomencer?",
      action: "goToChapter(le_commencement)"
      }
    ],
  },

  pouvoir_ultime_mauvais: {
    subtitle: "Pouvoir ultime",
    text: "Elle trouve le gant de Thanos avec toutes les pierres.",
    img: "thanos.jpg",
    option: [
      {
      text: "Tu ne claques des doigts avec le gant.",
      action: "goToChapter(mort_pouvoir_mauvais)"
      },
      {
      text: "Tu claques des doigts avec le gant.",
      action: "goToChapter(suite_pouvoir_mauvais)"
      },
    ],
  },

  mort_pouvoir_mauvais: {  
    subtitle: "Game Over",
    text: "LeBron James arrive et fait un panier avec le gant mais celui-ci tombe sur toi et tu meurs.",
    img: "qqch.jpg",
    option: [
      {
      text: "On recommence.",
      action: "goToChapter(le_commencement)"
      }
    ],
  },

  suite_pouvoir_mauvais: {  
    subtitle: "Game Over",
    text: "Tu te téléportes sur une autre planète.",
    img: "qqch.jpg",
    option: [
      {
      text: "On recommence.",
      action: "goToChapter(autre_planete_mauvais)"
      }
    ],
  },


  autre_planete_mauvais: {
    subtitle: "Autre planète",
    text: "Un Alien vient te voir.",
    img: "alien.jpg",
    option: [
      {
      text: "90E3HDGBVC",
      action: "goToChapter(mort_planete_mauvais)" 
      },
      {
      text: "PKÈFQJRBGEQ",
      action: "goToChapter(restart_planete_mauvais)"
      },
      {
      text: "JO3RFRGGEUFVOW",
      action: "goToChapter(suite_planete_mauvais)"
      },
    ],
  },

  mort_planete_mauvais: {  
    subtitle: "Game Over",
    text: "Tu te transforme en montagne.",
    img: "qqch.jpg",
    option: [
      {
      text: "On recommence.",
      action: "goToChapter(le_commencement)"
      }
    ],
  },

  restart_planete_mauvais: {  
    subtitle: "Le mauvais pont",
    text: "Le Naruto Bridge apparait devant toi.",
    img: "qqch.jpg",
    option: [
      {
      text: "Traverser",
      action: "goToChapter(les_chemins)"
      }
    ],
  },

  suite_planete_mauvais: {  
    subtitle: "Ocarina",
    text: "De la musique de Zelda commence à jouer",
    img: "qqch.jpg",
    option: [
      {
      text: "Écouter",
      action: "goToChapter(dilemme_coffre_mauvais)"
      }
    ],
  },

  dilemme_coffre_mauvais:{
    subtitle: "Dilemme du coffre",
    text: "Un coffre apparait et te demande: As-tu aidé le père Noël?",
    img: "coffre.jpg",
    option: [
      {
      text: "Mentir et dire oui.",
      action: "goToChapter(mort_coffre_mauvais_2)"
      },
      {
      text: "Oui.",
      action: "goToChapter(mort_coffre_mauvais_1)" 
      },
    ],
  },

  mort_coffre_mauvais_1: {  
    subtitle: "Game Over",
    text: "Plante Piranha sort du coffre et te manges.",
    img: "qqch.jpg",
    option: [
      {
      text: "On recommence.",
      action: "goToChapter(le_commencement)"
      }
    ],
  },

  mort_coffre_mauvais_2: {  
    subtitle: "Game Over",
    text: "Tu es forcé à manger de la lasagne avec Garfield pour le reste de tes temps",
    img: "qqch.jpg",
    option: [
      {
      text: "On recommence.",
      action: "goToChapter(le_commencement)"
      }
    ],
  },
};

function goToChapter(chapterName) {
  let chapitre = chaptersObj[chapterName];
  console.log(chapitre.subtitle);
  console.log(chapitre.text);
  console.log(chapitre.img);
}
