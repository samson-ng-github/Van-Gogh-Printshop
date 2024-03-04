import { useDispatch } from 'react-redux';
import { openWorkPanel } from '../../redux/workPanelSlice';
import { closeCartPanel } from '../../redux/cartSlice';
import { closeSearchPanel } from '../../redux/searchPanelSlice';

const WorkThumb = ({ src, name }) => {
  const dispatch = useDispatch();

  return (
    <li
      onClick={() => {
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
