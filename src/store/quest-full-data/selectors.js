import { NameSpace } from '../../const';

export const getQuestFull = (state) => state[NameSpace.QuestFullData].questFull;
export const getQuestFullLoadedDataStatus = (state) => state[NameSpace.QuestFullData].isDataLoaded;
