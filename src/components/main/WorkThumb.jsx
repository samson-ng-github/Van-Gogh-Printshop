const WorkThumb = ({ src, name, toggleWorkModule }) => {
  return (
    <li onClick={toggleWorkModule}>
      <div className={'rollOver'}>{name}</div>
      <img src={src} />
    </li>
  );
};

export default WorkThumb;
