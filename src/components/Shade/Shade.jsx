import { useSelector } from 'react-redux';

const Shade = () => {
  const { isCartPanelOn } = useSelector((store) => store.works);
  const { isSearchPanelOn } = useSelector((store) => store.searchPanel);
  const { isWorkPanelOn } = useSelector((store) => store.works);

  return (
    <div
      className={
        'shadeOff ' +
        (isSearchPanelOn ? 'shadeOnSearchPanel' : '') +
        (isWorkPanelOn || isCartPanelOn ? 'shadeOnWorkModel' : '')
      }
    ></div>
  );
};
export default Shade;
