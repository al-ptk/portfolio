import battleshipSnap from '../assets/images/project-pics/battleship.png';
import yeOldSnap from '../assets/images/project-pics/yeOldMemories.png';
import burguerSnap from '../assets/images/project-pics/burgerBay.png';
import dashboardSnap from '../assets/images/project-pics/dashboard.png';
import brittaniaSnap from '../assets/images/project-pics/brittania.webp'

const projects = [
  {
    title: 'Brittania',
    imagePath: brittaniaSnap,
    imageAlt: 'Britannia Project Screenshot',
    linkURL: '#',
    sourceUrl: 'https://github.com/al-ptk/fashion-store',
  },
  {
    title: 'Burger Bay',
    imagePath: burguerSnap,
    imageAlt: 'Burger Bay Project screenshot',
    linkURL: 'https://al-ptk.github.io/odin-restaurant/',
    sourceUrl: 'https://github.com/al-ptk/odin-restaurant',
  },
  {
    title: 'Dashboard',
    imagePath: dashboardSnap,
    imageAlt: 'Dashboard Project screenshot',
    linkURL: 'https://al-ptk.github.io/odin-dashboard/',
    sourceUrl: 'https://github.com/al-ptk/odin-dashboard',
  },
  {
    title: 'Battleship',
    imagePath: battleshipSnap,
    imageAlt: 'Battleship Project screenshot',
    linkURL: 'https://al-ptk.github.io/odin-battleship/',
    sourceUrl: 'https://github.com/al-ptk/odin-battleship',
  },
  {
    title: "Ye Ol' Memories",
    imagePath: yeOldSnap,
    imageAlt: 'Ye Ol Memories Project screenshot',
    linkURL: 'https://al-ptk.github.io/odin-memory-game/',
    sourceUrl: 'https://github.com/al-ptk/odin-memory-game',
  },
];

const getProjects = () => projects;

export { getProjects };
