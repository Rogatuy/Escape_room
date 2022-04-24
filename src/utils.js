import { ALL_TYPES, complexity } from "const";
import { typeQuest } from "const";
import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';

export const getLevel = (level) => {
  switch(level) {
    case 'medium':
      return complexity.medium;
    case 'hard':
      return complexity.hard;
    case 'easy':
      return complexity.easy;
    default:
  }
}

export const getGenre = (type) => {
  switch(type) {
    case 'all_types':
      return typeQuest.all_types;
    case 'adventures':
      return typeQuest.adventures;
    case 'horror':
      return typeQuest.horror;
    case 'mystic':
      return typeQuest.mystic;
    case 'detective':
      return typeQuest.detective;
    case 'sci-fi':
      return typeQuest.sci_fi;
    default:
  }
}

export const getIconForType = (type) => {
  switch(type) {
    case ALL_TYPES:
      return <IconAllQuests />;
    case 'adventures':
      return <IconAdventures />;
    case 'horror':
      return <IconHorrors />;
    case 'mystic':
      return <IconMystic />;
    case 'detective':
      return <IconDetective />;
    case 'sci-fi':
      return <IconScifi/>;
    default:
  }
}
