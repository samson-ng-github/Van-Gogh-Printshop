import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shuffleWorks } from '../../redux/worksSlice';
import WorkThumb from './WorkThumb';

const WorkList = ({ workList }) => {
  const { worksData } = useSelector((store) => store.works);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(shuffleWorks());
  }, []);

  const WorkListUi = worksData.map((work) => {
    return (
      <WorkThumb
        key={work.id}
        id={work.id}
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
