import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeWorkPanel } from '../../redux/worksSlice';
import { addCartItem, openCartPanel } from '../../redux/cartSlice';

import workHero from '../../assets/works/7892006.jpg'; //F779JH2117
import AddToCartButton from '../Buttons/AddToCartButton';
import CloseButton from '../Buttons/CloseButton';
import MapMenu from '../Aside/MapMenu';

const WorkPanel = () => {
  const [selections, setSelections] = useState([]);
  const { workOnFocus, isWorkPanelOn } = useSelector((store) => store.works);
  const dispatch = useDispatch();

  const dimensions = workOnFocus.size.split(' x ');

  const sizes = {
    original: `${workOnFocus.size} cm`,
    half: `${dimensions[0] / 2} x ${dimensions[1] / 2} cm`,
    quarter: `${dimensions[0] / 4} x ${dimensions[1] / 4} cm`,
    postcard: '14 x 9 cm',
  };

  const prices = {
    original: (dimensions[0] * dimensions[1] * 0.04).toFixed(2),
    half: (dimensions[0] * dimensions[1] * 0.01).toFixed(2),
    quarter: (dimensions[0] * dimensions[1] * 0.0025).toFixed(2),
    postcard: (5).toFixed(2),
  };

  const types = {
    original: 'Original size',
    half: 'Half size',
    quarter: 'Quarter size',
    postcard: 'Postcard',
  };

  const onSelect = (e) => {
    const isChecked = e.target.checked;
    const selected = e.target.dataset.id;
    if (isChecked === true)
      setSelections((oldValue) => [...oldValue, selected]);
    else {
      const filteredSelection = selections.filter(
        (selections, index) => selections !== selected
      );
      setSelections(filteredSelection);
    }
  };

  const addToCart = () => {
    setSelections([]);
    dispatch(closeWorkPanel());

    if (selections.length > 0) {
      for (let i = 0; i < selections.length; i++) {
        const newCartItem = { ...workOnFocus };
        newCartItem.id += ' ' + selections[i];
        newCartItem.amount = 1;
        newCartItem.productSize = sizes[selections[i]];
        newCartItem.productPrice = prices[selections[i]];
        newCartItem.productType = types[selections[i]];
        dispatch(addCartItem(newCartItem));
      }

      dispatch(openCartPanel());
    }
  };

  return (
    <section className={'workPanelOn ' + (isWorkPanelOn ? 'workPanelOff' : '')}>
      <div id="workPanel">
        <img
          id="workOnFocus"
          src={'/src/assets/works/' + workOnFocus.id + '.jpg'}
        />
        <div id="workInfo">
          <h1 id="workTitle">{workOnFocus.name}</h1>
          <p id="workDateLocation">
            {`${workOnFocus.date} • ${workOnFocus.location}`}
          </p>
          <div id="workPrices">
            <form>
              <hr></hr>
              <input
                type="checkbox"
                data-id={'original'}
                id={'original'}
                value={'original'}
                onChange={onSelect}
                checked={selections.includes('original')}
              />
              <label htmlFor="original">
                <span className="size">{sizes.original}</span>
                <span className="type">{types.original}</span>
                <span className="price">{`£${prices.original}`}</span>
              </label>
              <hr></hr>
              <input
                type="checkbox"
                data-id={'half'}
                id={'half'}
                value={'half'}
                onChange={onSelect}
                checked={selections.includes('half')}
              />
              <label htmlFor="half">
                <span className="size">{sizes.half}</span>
                <span className="type">{types.half}</span>
                <span className="price">{`£${prices.half}`}</span>
              </label>
              <hr></hr>
              <input
                type="checkbox"
                data-id={'quarter'}
                id={'quarter'}
                value={'quarter'}
                onChange={onSelect}
                checked={selections.includes('quarter')}
              />
              <label htmlFor="quarter">
                <span className="size">{sizes.quarter}</span>
                <span className="type">{types.quarter}</span>
                <span className="price">{`£${prices.quarter}`}</span>
              </label>
              <hr></hr>
              <input
                type="checkbox"
                data-id={'postcard'}
                id={'postcard'}
                value={'postcard'}
                onChange={onSelect}
                checked={selections.includes('postcard')}
              />
              <label htmlFor="postcard">
                <span className="size">{sizes.postcard}</span>
                <span className="type">{types.postcard}</span>
                <span className="price">{`£${prices.postcard}`}</span>
              </label>
              <hr></hr>
            </form>
          </div>
          <AddToCartButton action={addToCart} />
          <MapMenu />
        </div>
        <CloseButton
          action={() => {
            setSelections([]);
            dispatch(closeWorkPanel());
          }}
        />
      </div>
    </section>
  );
};

export default WorkPanel;
