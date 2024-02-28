import WorkThumb from './WorkThumb';

const WorkList = ({ workList, toggleWorkModule }) => {
  const WorkListUl = workList.map((work) => {
    return (
      <WorkThumb
        key={work.id}
        name={work.name}
        src={'/src/assets/workThumbs/' + work.id + '.jpg'}
        toggleWorkModule={toggleWorkModule}
      />
    );
  });

  return <ul>{WorkListUl}</ul>;
};

export default WorkList;
