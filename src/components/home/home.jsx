import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from 'components/common/common';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';
import {getQuestsList} from '../../store/quests-data/selectors';
import { useAppSelector } from '../../hooks';

const HomePage = () => {
  const quests = useAppSelector(getQuestsList);

  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        <PageHeading>
          <PageTitle>Выберите тематику</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </PageHeading>
        <QuestsCatalog quests={quests} />
      </S.Main>
    </MainLayout>
  );
};

export default HomePage;
