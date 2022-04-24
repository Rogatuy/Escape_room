import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import { END_ITEM_INDEX, START_ITEM_INDEX } from 'const';
import * as S from './quest-card.styled';
import { getLevel } from 'utils';

const QuestCard = ({quest}) => {
  const minPerson = quest.peopleCount[START_ITEM_INDEX];
  const maxPerson = quest.peopleCount[END_ITEM_INDEX];

 return (
    <S.QuestItem>
        <S.QuestItemLink to={`/detailed-quest/${quest.id}`}>
          <S.Quest>
            <S.QuestImage
              src={quest.previewImg}
              width="344"
              height="232"
              alt={quest.title}
            />

            <S.QuestContent>
              <S.QuestTitle>{quest.title}</S.QuestTitle>

              <S.QuestFeatures>
                <S.QuestFeatureItem>
                  <IconPerson />
                  {minPerson}–{maxPerson} чел
                </S.QuestFeatureItem>
                <S.QuestFeatureItem>
                  <IconPuzzle />
                  {getLevel(quest.level)}
                </S.QuestFeatureItem>
              </S.QuestFeatures>
            </S.QuestContent>
          </S.Quest>
        </S.QuestItemLink>
    </S.QuestItem>
  );
 };


export default QuestCard;
