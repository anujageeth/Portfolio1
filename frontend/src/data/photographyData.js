// Import all photography images
import img1668940068548 from '../assets/photography/1668940068548.jpg';
import img1673467810839 from '../assets/photography/1673467810839.jpg';
import img1685639342691 from '../assets/photography/1685639342691.jpg';
import img1694424874200 from '../assets/photography/1694424874200.jpg';
import img1695890231156 from '../assets/photography/1695890231156.jpg';
import img1706668698133 from '../assets/photography/1706668698133.jpg';
import img1706668843635 from '../assets/photography/1706668843635.jpg';
import img1709410471356 from '../assets/photography/1709410471356.jpg';
import img1709410519786 from '../assets/photography/1709410519786.jpg';
import img1709410795510 from '../assets/photography/1709410795510.jpg';
import img1709410804752 from '../assets/photography/1709410804752.jpg';
import imgIMG_20221106_190146 from '../assets/photography/IMG_20221106_190146.jpg';
import imgIMG_20230625_100131 from '../assets/photography/IMG_20230625_100131.jpg';
import imgIMG_20231103_000314 from '../assets/photography/IMG_20231103_000314.jpg';
import imgIMG_20240315_094355 from '../assets/photography/IMG_20240315_094355~2.jpg';
import imgIMG_20240415_170017 from '../assets/photography/IMG_20240415_170017.jpg';
import imgIMG_20240629_160218 from '../assets/photography/IMG_20240629_160218.jpg';
import imgIMG_20240630_171556 from '../assets/photography/IMG_20240630_171556.jpg';
import imgIMG_20240706_111343 from '../assets/photography/IMG_20240706_111343.jpg';
import imgIMG_20240721_140638 from '../assets/photography/IMG_20240721_140638.jpg';
import imgIMG_20240810_175857 from '../assets/photography/IMG_20240810_175857.jpg';
import imgIMG_20241005_004041 from '../assets/photography/IMG_20241005_004041.jpg';
import imgIMG_20241027_123043 from '../assets/photography/IMG_20241027_123043~2 (1).jpg';
import IMG_20241103_140507 from '../assets/photography/IMG_20241103_140507.jpg';
import IMG_20241222_175154 from '../assets/photography/IMG_20241222_175154.jpg';
import IMG_20241225_014146 from '../assets/photography/IMG_20241225_014146.jpg';
import IMG_20241231_232623 from '../assets/photography/IMG_20241231_232623~2.jpg';
import IMG_20250110_194659 from '../assets/photography/IMG_20250110_194659.jpg';
import IMG_20250110_194740 from '../assets/photography/IMG_20250110_194740.jpg';
import IMG_20250203_152113 from '../assets/photography/IMG_20250203_152113 (1).jpg';
import IMG_20250308_153758_00_062 from '../assets/photography/IMG_20250308_153758_00_062.jpg';
import IMG_20250308_190239 from '../assets/photography/IMG_20250308_190239.jpg';
import IMG_20250513_132556 from '../assets/photography/IMG_20250513_132556.jpg';
import IMG_20250515_111502 from '../assets/photography/IMG_20250515_111502.jpg';
import IMG_20250515_142819 from '../assets/photography/IMG_20250515_142819.jpg';
import IMG_20250515_143258 from '../assets/photography/IMG_20250515_143258.jpg';
import IMG_20250515_143624 from '../assets/photography/IMG_20250515_143624.jpg';
import IMG_20250601_115615 from '../assets/photography/IMG_20250601_115615~2.jpg';
import IMG_20250601_115655 from '../assets/photography/IMG_20250601_115655 (1).jpg';
import IMG_20240824_WA0098 from '../assets/photography/IMG-20240824-WA0098~2.jpg';

// Photography categories
export const photoCategories = [
  { id: 'all', name: 'All Photos' },
  { id: 'landscape', name: 'Landscape' },
  { id: 'portrait', name: 'Portraits' },
  { id: 'street', name: 'Street & Travel' },
  { id: 'nature', name: 'Nature' },
    { id: 'creative', name: 'Creative' },
  { id: 'events', name: 'Event Coverage' }
];

// Photo data - shuffled order
export const photographyData = [
  {
    id: 1,
    title: 'Dutch Architecture',
    description: 'Dutch colonial architecture in Galle Fort',
    imageUrl: IMG_20241231_232623,
    category: 'street',
    source: 'facebook',
    sourceUrl: 'https://facebook.com/anujageeth'
  },
  {
    id: 2,
    title: 'Portrait Session',
    description: 'Professional portrait with lighting',
    imageUrl: img1709410471356,
    category: 'portrait',
    source: 'instagram',
    sourceUrl: 'https://instagram.com/anuja_geeth'
  },
  {
    id: 3,
    title: 'Wet Oil Lamps',
    description: 'Oil lamps in Buduruwagala temple',
    imageUrl: IMG_20250515_143258,
    category: '',
    source: 'facebook',
    sourceUrl: 'https://facebook.com/anujageeth'
  },
  {
    id: 4,
    title: 'Pigeon Island',
    description: 'Cloudy view of Pigeon Island',
    imageUrl: img1694424874200,
    category: 'landscape',
    source: 'instagram',
    sourceUrl: 'https://instagram.com/anuja_geeth'
  },
  {
    id: 5,
    title: 'Connected Giants',
    description: 'Urban landscape of Colombo with modern architecture',
    imageUrl: IMG_20241103_140507,
    category: 'landscape',
    source: 'facebook',
    sourceUrl: 'https://facebook.com/anujageeth'
  },
  {
    id: 6,
    title: 'Yatchs in Spring',
    description: 'Sailing yatch in Jungle Beach sea, Galle',
    imageUrl: IMG_20250203_152113,
    category: 'landscape',
    source: 'instagram',
    sourceUrl: 'https://instagram.com/anuja_geeth'
  },
  {
    id: 7,
    title: 'Flowers & Notes',
    description: 'Aesthetic photograph with flowers and notes',
    imageUrl: imgIMG_20231103_000314,
    category: 'creative',
    source: 'facebook',
    sourceUrl: 'https://facebook.com/anujageeth'
  },
  {
    id: 8,
    title: 'Lights & Decor',
    description: 'Festive lights and decorations at night',
    imageUrl: img1673467810839,
    category: 'street',
    source: 'instagram',
    sourceUrl: 'https://instagram.com/anuja_geeth'
  },
  {
    id: 9,
    title: 'Surfing Times',
    description: 'Portrait of a surfer in action',
    imageUrl: IMG_20250308_153758_00_062,
    category: 'portrait',
    source: 'facebook',
    sourceUrl: 'https://facebook.com/anujageeth'
  },
  {
    id: 10,
    title: 'Talking Chairs',
    description: 'Chairs with a story at a local café',
    imageUrl: IMG_20240824_WA0098,
    category: 'landscape',
    source: 'instagram',
    sourceUrl: 'https://instagram.com/anuja_geeth'
  },
  {
    id: 11,
    title: 'Paintings',
    description: 'Colorful street paintings in Unawatuna',
    imageUrl: IMG_20250110_194659,
    category: 'street',
    source: 'facebook',
    sourceUrl: 'https://facebook.com/anujageeth'
  },
  {
    id: 12,
    title: 'Misty Morning',
    description: 'Misty morning view with soft light',
    imageUrl: imgIMG_20230625_100131,
    category: 'street',
    source: 'instagram',
    sourceUrl: 'https://instagram.com/anuja_geeth'
  },
  {
    id: 13,
    title: 'Smiling Friend',
    description: 'A candid shot of a dog smiling in the street',
    imageUrl: IMG_20250515_142819,
    category: 'street',
    source: 'facebook',
    sourceUrl: 'https://facebook.com/anujageeth'
  },
  {
    id: 14,
    title: 'Library Moments',
    description: 'Quiet moments in a library with old books',
    imageUrl: IMG_20250515_111502,
    category: 'creative',
    source: 'instagram',
    sourceUrl: 'https://instagram.com/anuja_geeth'
  },
  {
    id: 15,
    title: 'Shadow Portrait',
    description: 'Creative portrait using shadows',
    imageUrl: img1709410804752,
    category: 'portrait',
    source: 'facebook',
    sourceUrl: 'https://facebook.com/anujageeth'
  },
  {
    id: 16,
    title: 'Kelani Viharaya',
    description: 'Scenic traditional landscape at Kelani Viharaya',
    imageUrl: IMG_20250601_115615,
    category: 'landscape',
    source: 'instagram',
    sourceUrl: 'https://instagram.com/anuja_geeth'
  },
  {
    id: 17,
    title: 'Sunlight through Trees',
    description: 'Sunlight filtering through trees in a forest',
    imageUrl: imgIMG_20240629_160218,
    category: 'nature',
    source: 'facebook',
    sourceUrl: 'https://facebook.com/anujageeth'
  },
  {
    id: 18,
    title: 'Night Lights',
    description: 'Urban street lights reflecting in the evening',
    imageUrl: IMG_20250110_194740,
    category: 'street',
    source: 'instagram',
    sourceUrl: 'https://instagram.com/anuja_geeth'
  },
  {
    id: 19,
    title: 'Christmas Night',
    description: 'Christmas night at Bandarawela church',
    imageUrl: IMG_20241225_014146,
    category: 'landscape',
    source: 'facebook',
    sourceUrl: 'https://facebook.com/anujageeth'
  },
  {
    id: 20,
    title: 'Night at Galle Fort',
    description: 'Galle Fort at night lighting',
    imageUrl: IMG_20250308_190239,
    category: 'landscape',
    source: 'instagram',
    sourceUrl: 'https://instagram.com/anuja_geeth'
  },
  {
    id: 21,
    title: 'Traffic Lights & Craws',
    description: 'Traffic lights and crows in Galle city at evening',
    imageUrl: IMG_20241222_175154,
    category: 'street',
    source: 'facebook',
    sourceUrl: 'https://facebook.com/anujageeth'
  },
  {
    id: 22,
    title: 'Portrait Session',
    description: 'Portrait with light and shadows',
    imageUrl: img1709410795510,
    category: 'portrait',
    source: 'instagram',
    sourceUrl: 'https://instagram.com/anuja_geeth'
  },
  {
    id: 23,
    title: 'Koggala Lake',
    description: 'Beautiful view of Koggala Lake',
    imageUrl: img1668940068548,
    category: 'landscape',
    source: 'facebook',
    sourceUrl: 'https://facebook.com/anujageeth'
  },
  {
    id: 24,
    title: 'Railway Blossoms',
    description: 'Blossoms along the railway tracks in Bandarawela',
    imageUrl: IMG_20250513_132556,
    category: 'landscape',
    source: 'instagram',
    sourceUrl: 'https://instagram.com/anuja_geeth'
  },
  {
    id: 25,
    title: 'Lotus Tower',
    description: 'Lotus Tower with clear sky',
    imageUrl: imgIMG_20240315_094355,
    category: 'street',
    source: 'facebook',
    sourceUrl: 'https://facebook.com/anujageeth'
  },
  {
    id: 26,
    title: 'Badulla Railway Station',
    description: 'Historic Badulla Railway Station with vintage charm',
    imageUrl: img1685639342691,
    category: 'landscape',
    source: 'instagram',
    sourceUrl: 'https://instagram.com/anuja_geeth'
  },
  {
    id: 27,
    title: 'Stone Carvings',
    description: 'Ancient stone carvings with historical significance in Buduruwagala',
    imageUrl: IMG_20250515_143624,
    category: 'landscape',
    source: 'facebook',
    sourceUrl: 'https://facebook.com/anujageeth'
  },
  {
    id: 28,
    title: 'Tower View from Street',
    description: 'View of Lotus Tower from Pettah Bus Stand',
    imageUrl: imgIMG_20240706_111343,
    category: 'landscape',
    source: 'instagram',
    sourceUrl: 'https://instagram.com/anuja_geeth'
  },
  {
    id: 29,
    title: 'Yudaganawa Temple',
    description: 'Yudaganawa Temple with serene surroundings',
    imageUrl: imgIMG_20240415_170017,
    category: 'landscape',
    source: 'facebook',
    sourceUrl: 'https://facebook.com/anujageeth'
  },
  {
    id: 30,
    title: 'Lights & Shadows',
    description: 'Capturing the interplay of light and shadows on temple paintings',
    imageUrl: IMG_20250601_115655,
    category: 'street',
    source: 'instagram',
    sourceUrl: 'https://instagram.com/anuja_geeth'
  },
  {
    id: 31,
    title: 'Water Drops',
    description: 'Close-up of water drops on leaves',
    imageUrl: img1695890231156,
    category: 'nature',
    source: 'facebook',
    sourceUrl: 'https://facebook.com/anujageeth'
  },
  {
    id: 32,
    title: 'Pirith Ceremony',
    description: 'Pirith ceremony with traditional art designs',
    imageUrl: imgIMG_20241005_004041,
    category: '',
    source: 'instagram',
    sourceUrl: 'https://instagram.com/anuja_geeth'
  },
  {
    id: 33,
    title: 'Flowers',
    description: 'Close-up of flowers with vibrant colors',
    imageUrl: imgIMG_20221106_190146,
    category: 'creative',
    source: 'facebook',
    sourceUrl: 'https://facebook.com/anujageeth'
  },
  {
    id: 34,
    title: 'Morning sunrise in Adam\'s Peak',
    description: 'Early morning sunrise view from Adam\'s Peak',
    imageUrl: img1706668843635,
    category: 'landscape',
    source: 'instagram',
    sourceUrl: 'https://instagram.com/anuja_geeth'
  },
  {
    id: 35,
    title: 'Kites in Galle Sky',
    description: 'Colorful kites flying in the sky over Galle',
    imageUrl: imgIMG_20240630_171556,
    category: 'street',
    source: 'facebook',
    sourceUrl: 'https://facebook.com/anujageeth'
  },
  {
    id: 36,
    title: 'Sama Temple',
    description: 'Sama Temple with beautiful landscape',
    imageUrl: imgIMG_20240810_175857,
    category: 'landscape',
    source: 'instagram',
    sourceUrl: 'https://instagram.com/anuja_geeth'
  },
  {
    id: 37,
    title: 'Portrait Session',
    description: 'Outdoor portrait with dark vibes',
    imageUrl: img1709410519786,
    category: 'portrait',
    source: 'facebook',
    sourceUrl: 'https://facebook.com/anujageeth'
  },
  {
    id: 38,
    title: 'Pelican in Bere Lake',
    description: 'Pelican resting in Bere Lake',
    imageUrl: imgIMG_20240721_140638,
    category: 'nature',
    source: 'instagram',
    sourceUrl: 'https://instagram.com/anuja_geeth'
  },
  {
    id: 39,
    title: 'Mountain View from Adam\'s Peak',
    description: 'Stunning view from the top of Adam\'s Peak',
    imageUrl: img1706668698133,
    category: 'landscape',
    source: 'facebook',
    sourceUrl: 'https://facebook.com/anujageeth'
  },
  {
    id: 40,
    title: 'Classics of Fort',
    description: 'Classic car in Galle Fort',
    imageUrl: imgIMG_20241027_123043,
    category: 'street',
    source: 'instagram',
    sourceUrl: 'https://instagram.com/anuja_geeth'
  }
];

export default photographyData;