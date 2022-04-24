import * as S from './quests-list.styled';
import QuestCard from '../quest-card/quest-card';
import { useAppSelector } from 'hooks';
import { ALL_TYPES } from 'const';
import { getSelectedType } from 'store/selected-type/selectors';

const QuestsList = ({quests}) => {
  const chooseType = useAppSelector(getSelectedType);
  const choosingQuests = chooseType === ALL_TYPES
    ? quests
    : quests.filter((quest) => quest.type === chooseType )

  return (
    <>
    <S.QuestsList>
      {choosingQuests.map((quest) => (
      <QuestCard
        quest={quest}>
      </QuestCard>
      ))}
    </S.QuestsList>
  </>
  );
};

export default QuestsList;
