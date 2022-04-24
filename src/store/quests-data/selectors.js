import { NameSpace } from '../../const';

export const getQuestsList = (state) => state[NameSpace.QuestsData].quests;
export const getQuestsLoadedDataStatus = (state) => state[NameSpace.QuestsData].isDataLoaded;
