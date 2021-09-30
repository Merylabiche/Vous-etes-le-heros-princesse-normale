let chapitre1 = {
  subtitle: "Le commencement",
  text: "Tu es une princesse et tu te réveille d'un cauchemar sans personne à côté de toi. Le prince s'est enfui et tu veux le retrouver.",
  img: "tiana_dort.jpg",
  option: [
    chateau = {
      text: "Tu sors de ton château.",
      action: "" // ici, le joueur meurts
    },
    pomme = {
      text: "Tu manges la pomme sur le comptoir.",
      action: "" // ici, le joueur meurts
    },
    steak = {
      text: "Tu lances le steak que ta pas fini par la fenêtre.",
      action: "goToChapter(les_chemins)"
    },
  ],
};

let chapitre2 = {
  subtitle: "Les chemins",
  text: "Tu vois 3 chemins devant toi.",
  img: "chemins.jpg",
  option: [
    miroirs = {
      text: "Chemin avec des miroirs.",
      action: "" // ici, le joueur meurts
    },
    papillons = {
      text: "Chemin avec des papillons et des licornes.",
      action: "" // ici, le joueur meurts
    },
    volcanique = {
      text: "Chemin volcanique avec tremblement de terre.",
      action: "goToChapter(la_chine)"
    },
  ],
};

let chapitre3 = {
  subtitle: "La Chine",
  text: "Un requin qui vient de sortir de la tornade fonce sur toi et te fait tomber. Tu atterris sur la muraille de chine.",
  img: "chine.jpg",
  option: [
    miroirs = {
      text: "Tu prends une roche à terre.",
      action: "" // ici, le joueur meurts
    },
    papillons = {
      text: "Tu sautes en bas de la muraille.",
      action: "goToChapter(pouvoir_ultime_mauvais)"
    },
    volcanique = {
      text: "Tu aides le père Noël à retrouver son chemin.",
      action: "goToChapter(autre_planete)"
    },
  ],
};

let chapitre4 = {
  subtitle: "Autre planète",
  text: " Un Alien vient te voir.",
  img: "alien.jpg",
  option: [
    choix1 = {
      text: "90E3HDGBVC",
      action: "" // ici, le joueur meurts
    },
    choix2 = {
      text: "PKÈFQJRBGEQ",
      action: "" // ici, le joueur meurts
    },
    choix3 = {
      text: "JO3RFRGGEUFVOW",
      action: "goToChapter(dilemme_coffre)"
    },
  ],
};

let chapitre5 = {
  subtitle: "Dilemme du coffre",
  text: "Un coffre apparait et te demande: As-tu aidé le père Noël?",
  img: "coffre.jpg",
  option: [
    mentir = {
      text: "Mentir et dire non.",
      action: "" // ici, le joueur meurts
    },
    verite = {
      text: "Oui.",
      action: "goToChapter(moment_attendu)"
    },
  ],
};

let chapitre6 = {
  subtitle: "Le moment tant attendu",
  text: "Tu arrives devant ton prince.",
  img: "prince.jpg",
  option: [
    mentir = {
      text: "Tu le laisse vivre.",
      action: "" // ici, le joueur meurts
    },
    verite = {
      text: "Tu le tues.",
      action: "" // ici, le joueur gagne
    },
  ],
};

let chapitreMauvais1 = {
  subtitle: "Pouvoir ultime",
  text: "Elle trouve le gant de Thanos avec toutes les pierres.",
  img: "thanos.jpg",
  option: [
    claque = {
      text: "Tu ne claques des doigts avec le gant.",
      action: "" // ici, le joueur meurts
    },
    pasclaque = {
      text: "Tu claques des doigts avec le gant.",
      action: "goToChapter(autre_pouvoir_mauvais)"
    },
  ],
};

let chapitreMauvais2 = {
  subtitle: "Autre planète",
  text: "Un Alien vient te voir.",
  img: "alien.jpg",
  option: [
    choix1 = {
      text: "90E3HDGBVC",
      action: "" // ici, le joueur meurts
    },
    choix2 = {
      text: "PKÈFQJRBGEQ",
      action: "" // ici, le joueur meurts
    },
    choix3 = {
      text: "JO3RFRGGEUFVOW",
      action: "goToChapter(dilemme_coffre_mauvais)"
    },
  ],
};

let chapitreMauvais3 = {
  subtitle: "Dilemme du coffre",
  text: "Un coffre apparait et te demande: As-tu aidé le père Noël?",
  img: "coffre.jpg",
  option: [
    mentir = {
      text: "Mentir et dire non.",
      action: "" // ici, le joueur meurts
    },
    verite = {
      text: "Oui.",
      action: "" // ici, le joueur meurts
    },
  ],
};

let chaptersObj = {
  le_commencement: chapitre1,
  les_chemins: chapitre2,
  la_chine: chapitre3,
  autre_planete: chapitre4,
  dilemme_coffre: chapitre5,
  moment_attendu: chapitre6,
  pouvoir_ultime_mauvais: chapitreMauvais1,
  autre_planete_mauvais: chapitreMauvais2,
  dilemme_coffre_mauvais: chapitreMauvais3,
};

function goToChapter(chapterName) {
  let chapitre = chaptersObj.chapterName;
  console.log(chapitre.subtitle);
  console.log(chapitre.text);
  console.log(chapitre.img);
}
