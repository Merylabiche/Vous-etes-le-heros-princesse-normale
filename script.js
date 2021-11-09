let chaptersObj = {
  le_commencement: {  
    subtitle: "Le commencement",
    text: "Tu es une princesse et tu te réveilles d'un cauchemar sans personne à côté de toi. Le prince s'est enfui et tu veux le retrouver.",
    img: "assets/img/tiana_dort.jpg",
    option: [
      {
      text: "Tu sors de ton château.",
      action: "goToChapter('mort_commencement_1')"
      },
      {
      text: "Tu manges la pomme sur le comptoir.",
      action: "goToChapter('mort_commencement_2')" 
      },
      { 
      text: "Tu lances le steak que ta pas fini par la fenêtre.",
      action: "goToChapter('suite_commencement')"
      },
    ],
  },

  mort_commencement_1: {  
    subtitle: "Game Over",
    text: "Tu te fais tuer par le dragon.",
    img: "assets/img/dragon.jfif",
    option: [
      {
      text: "On recommence.",
      action: "recommencer()"
      }
    ],
  },

  mort_commencement_2: {  
    subtitle: "Game Over",
    text: "Tu deviens hyper musclé et tu tues le dragon. En sortant du château, tu traverses le pont devant toi. Tu meurs parce que tu casses le pont avec ton poids" ,
    img: "assets/img/pont_casse.jpg",
    option: [
      {
      text: "On recommence.",
      action: "recommencer()"
      }
    ],
  },

  suite_commencement: {  
    subtitle: "Le pont",
    text: "Le dragon mange le steak et tu sors du château.",
    img: "assets/img/dragon_mange.png",
    option: [
      {
      text: "Traverser le pont.",
      action: "goToChapter('les_chemins')"
      }
    ],
  },


  les_chemins: {
    subtitle: "Les chemins",
    text: "Tu vois 3 chemins devant toi.",
    img: "assets/img/chemins.jpg",
    option: [
      {
      text: "Chemin volcanique avec tremblement de terre.",
      action: "goToChapter('suite_chemins')"
      },
      {
      text: "Chemin avec des papillons et des licornes.",
      action: "goToChapter('mort_chemins_2')"
      },
      {
      text: "Chemin avec des miroirs.",
      action: "goToChapter('mort_chemins_1')" 
      },
    ],
  },
  
  mort_chemins_1: {  
    subtitle: "Game Over",
    text: "Tu meurs parce que tu es trop belle.",
    img: "assets/img/miroir.jpg",
    option: [
      {
      text: "On recommence.",
      action: "recommencer()"
      }
    ],
  },

  mort_chemins_2: {  
    subtitle: "Game Over",
    text: "Tu meurs par des papillons kamikaze et des licornes qui tirent des lasers.",
    img: "assets/img/unicorn.jpeg",
    video: "assets/vid/unicorn.mp4",
    option: [
      {
      text: "On recommence.",
      action: "recommencer()"
      }
    ],
  },

  suite_chemins: {  
    subtitle: "La tornade",
    text: "Un lait à la fraise sort d'un trou volcanique. Tu le bois et tu voles. En volant, tu vois une tornade au loin, tu y vois bizarrement des requins.",
    img: "assets/img/tornade.jpg",
    option: [
      {
      text: "Regarder la tornade",
      action: "goToChapter('la_chine')"
      }
    ],
  },

  la_chine: {
  subtitle: "La Chine",
  text: "Un requin qui vient de sortir de la tornade fonce sur toi et te fait tomber. Tu atterris sur la muraille de chine.",
  img: "assets/img/chine.jpg",
  option: [
    {
    text: "Tu prends une roche à terre.",
    action: "goToChapter('mort_chine')" 
    },
    {
    text: "Tu sautes en bas de la muraille.",
    action: "goToChapter('suite_chine_1')"
    },
    {
    text: "Tu aides le père Noël à retrouver son chemin.",
    action: "aide()"
    },
  ],
},

  mort_chine: {  
    subtitle: "Game Over",
    text: "Tu détruits complètement la muraille et des millénaires d'histoire. Tu meurs écrasé.",
    img: "assets/img/wall.jpg",
    option: [
      {
      text: "On recommence.",
      action: "recommencer()"
      }
    ],
  },

  suite_chine_1: {  
    subtitle: "Le pudding",
    text: "Un pudding géant aux poissons et aux algues te rattrappes. Tu sors doucement en glissant.",
    img: "assets/img/pudding.jpg",
    option: [
      {
      text: "Marcher",
      action: "goToChapter('pouvoir_ultime_mauvais')"
      }
    ],
  },

  suite_chine_2: {  
    subtitle: "Le père Noël",
    text: "Il te téléporte avec sa barbe sur une autre planète",
    img: "assets/img/pere_noel.jpg",
    video: "assets/vid/santaclaus.mp4",
    option: [
      {
      text: "Regarder autour.",
      action: "goToChapter('autre_planete')"
      }
    ],
  },

  autre_planete: {
    subtitle: "Autre planète",
    text: " Un Alien vient te voir.",
    img: "assets/img/alien.jpg",
    option: [
      {
      text: "90E3HDGBVC",
      action: "goToChapter('mort_planete')" 
      },
      {
      text: "JO3RFRGGEUFVOW",
      action: "goToChapter('suite_planete')"
      },
      {
      text: "PKÈFQJRBGEQ",
      action: "goToChapter('restart_planete')"
      },
    ],
  },

  mort_planete: {  
    subtitle: "Game Over",
    text: "Tu te transformes en montagne.",
    img: "assets/img/montagne.jpg",
    option: [
      {
      text: "On recommence.",
      action: "recommencer()"
      }
    ],
  },

  restart_planete: {  
    subtitle: "Le mauvais pont",
    text: "Le Naruto Bridge apparait devant toi.",
    img: "assets/img/naruto.jpg",
    option: [
      {
      text: "Traverser",
      action: "retourChemins()"
      }
    ],
  },

  suite_planete: {  
    subtitle: "Ocarina",
    text: "De la musique de Zelda commence à jouer.",
    img: "assets/img/navi.png",
    option: [
      {
      text: "Écouter",
      action: "impact()"
      }
    ],
  },

  dilemme_coffre: {
    subtitle: "Dilemme du coffre",
    text: "Un coffre apparait et te demande: As-tu aidé le père Noël?",
    img: "assets/img/coffre.jpg",
    option: [
      {
      text: "Mentir et dire non.",
      action: "goToChapter('mort_coffre')" 
      },
      {
      text: "Oui.",
      action: "goToChapter('suite_coffre')"
      },
    ],
  },

  mort_coffre: {  
    subtitle: "Game Over",
    text: "Tu es forcé à te battre avec Vegeta pour le reste des temps",
    img: "assets/img/vegeta.jpg",
    option: [
      {
      text: "On recommence.",
      action: "recommencer()"
      }
    ],
  },

  suite_coffre: {  
    subtitle: "One Piece!",
    text: "Le Going Merry sort du coffre.",
    img: "assets/img/going_merry.png",
    option: [
      {
      text: "Monter",
      action: "goToChapter('moment_attendu')"
      }
    ],
  },
  
  moment_attendu: {
    subtitle: "Le moment tant attendu",
    text: "Tu arrives devant ton prince.",
    img: "assets/img/prince.jpg",
    option: [
      {
      text: "Tu le laisses vivre.",
      action: "goToChapter('mort_attendu')"
      },
      {
      text: "Tu le tues.",
      action: "goToChapter('fin_attendu')" 
      },
    ],
  },

  mort_attendu: {  
    subtitle: "Game Over",
    text: "Pumba arrive avec la musique de THX et vous tuent tous les deux avec sa flatulence",
    img: "assets/img/pumba.png",
    option: [
      {
      text: "On recommence.",
      action: "recommencer()"
      }
    ],
  },

  fin_attendu: {  
    subtitle: "The End",
    text: "Tu prends toute sa richesse et vit heureuse jusqu'à la fin des temps.",
    img: "assets/img/richesse.jpg",
    option: [
      {
      text: "Reccomencer?",
      action: "recommencer()"
      }
    ],
  },

  pouvoir_ultime_mauvais: {
    subtitle: "Pouvoir ultime",
    text: "Tu trouves le gant de Thanos avec toutes les pierres.",
    img: "assets/img/thanos.jpg",
    option: [
      {
      text: "Tu claques des doigts avec le gant.",
      action: "goToChapter('suite_pouvoir_mauvais')"
      },
      {
      text: "Tu ne claques pas des doigts avec le gant.",
      action: "goToChapter('mort_pouvoir_mauvais')"
      },
    ],
  },

  mort_pouvoir_mauvais: {  
    subtitle: "Game Over",
    text: "LeBron James arrive, fait un panier avec le gant mais celui-ci tombe sur toi et tu meurs.",
    img: "assets/img/lebron.jpg",
    option: [
      {
      text: "On recommence.",
      action: "recommencer()"
      }
    ],
  },

  suite_pouvoir_mauvais: {  
    subtitle: "Autre planète",
    text: "Tu te téléportes sur une autre planète.",
    img: "assets/img/planete.jpg",
    option: [
      {
      text: "Regarder autour",
      action: "goToChapter('autre_planete')"
      }
    ],
  }, 

  dilemme_coffre_mauvais: {
    subtitle: "Dilemme du coffre",
    text: "Un coffre apparait et te demande: As-tu aidé le père Noël?",
    img: "assets/img/coffre.jpg",
    option: [
      {
      text: "Non",
      action: "goToChapter('mort_coffre_mauvais_1')" 
      },
      {
      text: "Mentir et dire oui.",
      action: "goToChapter('mort_coffre_mauvais_2')"
      },
    ],
  },

  mort_coffre_mauvais_1: {  
    subtitle: "Game Over",
    text: "Plante Piranha sort du coffre et te manges.",
    img: "assets/img/piranha.jpg",
    option: [
      {
      text: "On recommence.",
      action: "recommencer()"
      }
    ],
  },

  mort_coffre_mauvais_2: {  
    subtitle: "Game Over",
    text: "Tu es forcé à manger de la lasagne avec Garfield pour le reste de tes temps",
    img: "assets/img/garfield.jfif",
    option: [
      {
      text: "On recommence.",
      action: "recommencer()"
      }
    ],
  },
}




let pereNoel = false;

function goToChapter(chapterName) {
  let chapitre = chaptersObj[chapterName];
  document.querySelector('h3').innerHTML =  chapitre.subtitle;
  document.querySelector('p').innerHTML = chapitre.text;
  document.querySelector('img').src = chapitre.img;
  let bouton = '';
  for (let i = 0; i < chapitre.option.length; i++) {
    bouton += `<button onclick="${chapitre.option[i].action}">${chapitre.option[i].text}</button>`;
  }
  document.querySelector('.options').innerHTML = bouton;

  let video = '';
  if (chapitre.video != undefined){
    video += `<video src="${chapitre.video}" poster="${chapitre.img}" loop muted autoplay></video>`
    document.querySelector('img').innerHTML = video;
  }
}


function aide(){
  pereNoel = true;
  goToChapter('suite_chine_2')
}

function impact(){
 if(pereNoel == false){
    goToChapter('dilemme_coffre_mauvais')
 }
 else if(pereNoel == true){
    goToChapter('dilemme_coffre')
 }
}

function recommencer(){
 pereNoel = false;
 goToChapter('le_commencement');
}

function retourChemins(){
  pereNoel = false;
  goToChapter('les_chemins');
}

goToChapter('suite_chine_2')