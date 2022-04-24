
import { ListOfType } from '../list-of-type/list-of-type';
import QuestsList from '../quests-list/quests-list';

const QuestsCatalog = ({quests}) => (
  <>
    {ListOfType({quests})}
    {QuestsList({quests})}
  </>
);

export default QuestsCatalog;
