import { useSelector } from 'react-redux';

const Shade = () => {
  const { isCartPanelOn } = useSelector((store) => store.cartPanel);
  const { isSearchPanelOn } = useSelector((store) => store.searchPanel);
  const { isWorkPanelOn } = useSelector((store) => store.workPanel);

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
