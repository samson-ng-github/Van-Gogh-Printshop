import WorkThumb from './WorkThumb';

const WorkList = ({ workList }) => {
  const WorkListUi = workList.map((work) => {
    return (
      <WorkThumb
        key={work.id}
        name={work.name}
        src={'/src/assets/workThumbs/' + work.id + '.jpg'}
      />
    );
  });

  return (
    <main id="workList">
      <ul>{WorkListUi}</ul>;
    </main>
  );
};

export default WorkList;
