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

  useEffect(() => {}, [worksData]);

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
      {worksData.length ? (
        <ul>{WorkListUi}</ul>
      ) : (
        <p id="noWorks">Your search return no matches.</p>
      )}
    </main>
  );
};

export default WorkList;
