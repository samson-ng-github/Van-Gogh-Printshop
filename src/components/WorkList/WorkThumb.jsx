const WorkThumb = ({ src, name, onclick }) => {
  return (
    <li onClick={onclick}>
      <div className={'rollOver'}>{name}</div>
      <img src={src} />
    </li>
  );
};

export default WorkThumb;
