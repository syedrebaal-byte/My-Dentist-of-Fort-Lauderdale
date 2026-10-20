import heroImg from './hero.jpg';
import drZelkaImg from './dr-zelka.jpg';
import smileMakeoverImg from './smile-makeover.jpg';
import clinicLoungeImg from './clinic-lounge.jpg';
import dentalImplantsImg from './dental-implants.jpg';
import clearAlignersImg from './clear-aligners.jpg';
import botoxWellnessImg from './botox-wellness.jpg';
import smileBeforeImg from './smile-before.jpg';
import smileAfterImg from './smile-after.jpg';

export const IMAGES = {
  hero: heroImg,
  drZelka: drZelkaImg,
  smileMakeover: smileMakeoverImg,
  clinicLounge: clinicLoungeImg,
  dentalImplants: dentalImplantsImg,
  clearAligners: clearAlignersImg,
  botoxWellness: botoxWellnessImg,
  smileBefore: smileBeforeImg,
  smileAfter: smileAfterImg,
} as const;

export default IMAGES;
