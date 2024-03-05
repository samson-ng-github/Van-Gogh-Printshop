import { useDispatch } from 'react-redux';
import { findWorkOnFocus, openWorkPanel } from '../../redux/worksSlice';
import { closeCartPanel } from '../../redux/cartSlice';
import { closeSearchPanel } from '../../redux/searchPanelSlice';

const WorkThumb = ({ id, src, name }) => {
  const dispatch = useDispatch();

  return (
    <li
      onClick={() => {
        dispatch(findWorkOnFocus(id));
        dispatch(openWorkPanel());
        dispatch(closeCartPanel());
        dispatch(closeSearchPanel());
      }}
    >
      <div className={'rollOver'}>{name}</div>
      <img src={src} />
    </li>
  );
};

export default WorkThumb;
