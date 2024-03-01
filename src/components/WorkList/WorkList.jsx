import WorkThumb from './WorkThumb';

const WorkList = ({ workList, toggleWorkPanel }) => {
  const WorkListUl = workList.map((work) => {
    return (
      <WorkThumb
        key={work.id}
        name={work.name}
        src={'/src/assets/workThumbs/' + work.id + '.jpg'}
        onclick={toggleWorkPanel}
      />
    );
  });

  return (
    <main id="workList">
      <ul>{WorkListUl}</ul>;
    </main>
  );
};

export default WorkList;
