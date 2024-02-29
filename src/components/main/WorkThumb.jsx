const WorkThumb = ({ src, name, toggleWorkPanel }) => {
  return (
    <li onClick={toggleWorkPanel}>
      <div className={'rollOver'}>{name}</div>
      <img src={src} />
    </li>
  );
};

export default WorkThumb;
