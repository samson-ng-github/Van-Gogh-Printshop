const Shade = ({ isSearchPanelOn, isWorkPanelOn, isCartPanelOn }) => {
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
