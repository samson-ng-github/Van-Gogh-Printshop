import WorkThumb from './WorkThumb';

const WorkList = ({ workList, toggleWorkPanel }) => {
  const WorkListUl = workList.map((work) => {
    return (
      <WorkThumb
        key={work.id}
        name={work.name}
        src={'/src/assets/workThumbs/' + work.id + '.jpg'}
        toggleWorkPanel={toggleWorkPanel}
      />
    );
  });

  return <ul>{WorkListUl}</ul>;
};

export default WorkList;
