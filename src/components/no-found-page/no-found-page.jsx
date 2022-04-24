import { MainLayout, PageHeading, PageTitle} from "components/common/common";
import * as S from './no-found-page.styled';

const NoFoundPage = () => (
  <MainLayout>
    <S.Main forwardedAs="main">
      <PageHeading>
        <PageTitle> 404. Page not found</PageTitle>
        <S.QuestItemLink to="/">Вернуться на главную</S.QuestItemLink>
      </PageHeading>
    </S.Main>
  </MainLayout>
);

export default NoFoundPage;
