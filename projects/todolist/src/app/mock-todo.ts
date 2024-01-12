import { Todo } from './todo';

export let TODOS: Todo[] = [
  {
    id: 1,
    title: 'Peindre le mur',
    content: 'Peindre le mur de la cuisine en blanc cassé',
    author: 'john Doe',
    isCompleted: true,
    createdAt: new Date(),
    completedAt: null,
  },
  {
    id: 2,
    title: 'Acheter du lait',
    content: 'Acheter une brique de lait demi-écrémé.',
    author: 'Alice',
    isCompleted: false,
    createdAt: new Date(),
    completedAt: null,
  },
  {
    id: 3,
    title: 'Rendre le livre à la bibliothèque',
    content:
      'Rendre le livre emprunté la semaine dernière à la bibliothèque municipale.',
    author: 'Bob',
    isCompleted: false,
    createdAt: new Date(),
    completedAt: null,
  },
  {
    id: 4,
    title: 'Appeler le plombier',
    content:
      "Prendre rendez-vous avec le plombier pour réparer la fuite d'eau dans la salle de bains.",
    author: 'Caroline',
    isCompleted: false,
    createdAt: new Date(),
    completedAt: null,
  },
  {
    id: 5,
    title: 'Nettoyer le frigo',
    content: 'Jeter les aliments périmés et nettoyer le frigo.',
    author: 'David',
    isCompleted: false,
    createdAt: new Date(),
    completedAt: null,
  },
  {
    id: 6,
    title: "Réserver un billet d'avion",
    content: "Réserver un billet d'avion pour les vacances d'été.",
    author: 'Emilie',
    isCompleted: true,
    createdAt: new Date(),
    completedAt: null,
  },
  {
    id: 7,
    title: 'Faire les courses',
    content:
      'Acheter les produits de base pour la semaine : pain, lait, oeufs, fruits et légumes.',
    author: 'François',
    isCompleted: false,
    createdAt: new Date(),
    completedAt: null,
  },
  {
    id: 8,
    title: 'Aller chez le coiffeur',
    content: 'Prendre rendez-vous chez le coiffeur pour une coupe de cheveux.',
    author: 'Géraldine',
    isCompleted: true,
    createdAt: new Date(),
    completedAt: null,
  },
  {
    id: 9,
    title: 'Réparer la voiture',
    content: 'Prendre rendez-vous chez le garagiste pour réparer la voiture.',
    author: 'Hector',
    isCompleted: true,
    createdAt: new Date(),
    completedAt: null,
  },
  {
    id: 10,
    title: 'Faire du sport',
    content: 'Faire une séance de jogging de 30 minutes.',
    author: 'Isabelle',
    isCompleted: true,
    createdAt: new Date(),
    completedAt: null,
  },
  {
    id: 11,
    title: 'Apprendre une nouvelle langue',
    content:
      "Commencer à apprendre l'italien en regardant des vidéos sur Youtube.",
    author: 'Julien',
    isCompleted: true,
    createdAt: new Date(),
    completedAt: null,
  },
];
