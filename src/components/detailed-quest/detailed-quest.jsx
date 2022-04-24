import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { END_ITEM_INDEX, START_ITEM_INDEX} from 'const';
import { getGenre, getLevel } from 'utils';
import { useAppDispatch, useAppSelector } from 'hooks';
import { AppRoute } from 'const';
import LoadingScreen from 'components/loading-screen/loading-screen';
import { fetchFullQuestAction } from 'store/api-actions';
import { getQuestFull, getQuestFullLoadedDataStatus } from 'store/quest-full-data/selectors';

const DetailedQuest = () => {
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const questFull = useAppSelector(getQuestFull);
  const isDataLoadedQuestFull = useAppSelector(getQuestFullLoadedDataStatus);
  const params = useParams();
  const questId = Number(params.id);

  const history = useHistory();
  const dispatch = useAppDispatch();

  useEffect(() => {

    if (questFull.id === 0 || questFull?.id !== questId) {
      dispatch(fetchFullQuestAction(questId));
    }}, [questId, dispatch, questFull, history]);

  if (questFull.id === 0)  {
    if ( !isDataLoadedQuestFull) {
      return (
        <LoadingScreen />
      );
    }
  }

  if (questFull.id === 0 && isDataLoadedQuestFull) {
    history.push(AppRoute.NoFoundScreen);
  }

  const minPerson = questFull.peopleCount[START_ITEM_INDEX];
  const maxPerson = questFull.peopleCount[END_ITEM_INDEX];

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`../${questFull.coverImg}`}
          alt= {questFull.title}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{questFull.title}</S.PageTitle>
            <S.PageSubtitle>{getGenre(questFull.type)}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{questFull.duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{minPerson}–{maxPerson} чел</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{getLevel(questFull.level)}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
            {questFull.description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
