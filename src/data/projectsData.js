import battleshipSnap from '../assets/images/project-pics/battleship.png';
import yeOldSnap from '../assets/images/project-pics/yeOldMemories.png';
import burguerSnap from '../assets/images/project-pics/burgerBay.png';
import dashboardSnap from '../assets/images/project-pics/dashboard.png';

const projects = [
  {
    title: 'Burger Bay',
    imagePath: burguerSnap,
    imageAlt: 'Burger Bay screenshot',
    linkURL: 'https://al-ptk.github.io/odin-restaurant/',
  },
  {
    title: 'Dashboard',
    imagePath: dashboardSnap,
    imageAlt: 'Dashboard page screenshot',
    linkURL: 'https://al-ptk.github.io/odin-dashboard/',
  },
  {
    title: 'Battleship',
    imagePath: battleshipSnap,
    imageAlt: 'Battleship game screenshot',
    linkURL: 'https://al-ptk.github.io/odin-battleship/',
  },
  {
    title: "Ye Ol' Memories",
    imagePath: yeOldSnap,
    imageAlt: 'Ye Ol Memories game screenshot',
    linkURL: 'https://al-ptk.github.io/odin-memory-game/',
  },
];

const getProjects = () => projects;

export { getProjects };
