import { useAppDispatch, useAppSelector } from '../../../../hooks/index';
import { changeType } from '../../../../store/selected-type/selected-type'
import { ALL_TYPES } from 'const';
import * as S from './list-of-type.styled';
import { getGenre, getIconForType } from 'utils';
import { getSelectedType } from 'store/selected-type/selectors';

export const ListOfType = ({quests}) => {
  const type = useAppSelector(getSelectedType);
  const dispatch = useAppDispatch();

  const types = quests.map((quest) => quest.type);
  const allTypes = [ALL_TYPES, ...types];

  const allTypesSet = [...new Set(allTypes)];


  return (
    <S.Tabs>
      {allTypesSet.map((typeItem) => (
      <S.TabItem>
        <S.TabBtn
          isActive={typeItem === type}
          onClick={() => dispatch(changeType(typeItem))}
          >
          {getIconForType(typeItem)}
          <S.TabTitle>{getGenre(typeItem)}</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>

      ))}

    </S.Tabs>

  )

};
