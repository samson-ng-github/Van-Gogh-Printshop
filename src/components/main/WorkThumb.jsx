const WorkThumb = ({ src, name }) => {
  return (
    <li>
      <div className={'rollOver'}>{name}</div>
      <img src={src} />
    </li>
  );
};

export default WorkThumb;
