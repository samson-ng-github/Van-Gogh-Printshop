import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeWorkPanel } from '../../redux/worksSlice';
import { addCartItem } from '../../redux/cartSlice';

import workHero from '../../assets/works/7892006.jpg'; //F779JH2117
import AddToCartButton from '../Buttons/AddToCartButton';
import CloseButton from '../Buttons/CloseButton';
import MapMenu from '../Aside/MapMenu';

const WorkPanel = () => {
  const initialSelection = {
    'Original Size': false,
    'Half Size': false,
    'Quarter Size': false,
    'Postcard Size': false,
  };
  const [selection, setSelection] = useState({});
  const { workOnFocus, isWorkPanelOn } = useSelector((store) => store.works);
  const dispatch = useDispatch();

  const dimensions = workOnFocus.size.split(' x ');
  const originalSize = `${workOnFocus.size}`;
  const halfSize = `${dimensions[0] / 2} x ${dimensions[1] / 2} cm`;
  const quarterSize = `${dimensions[0] / 4} x ${dimensions[1] / 4} cm`;
  const posterSize = '14 x 9 cm';
  const sizes = {
    'Original Size': originalSize,
    'Half Size': halfSize,
    'Quarter Size': quarterSize,
    'Postcard Size': posterSize,
  };

  const originalSizePrice = (
    (Number(dimensions[0] * 2) * Number(dimensions[1] * 2)) /
    100
  ).toFixed(2);
  const halfSizePrice = (
    (Number(dimensions[0]) * Number(dimensions[1])) /
    100
  ).toFixed(2);
  const quarterSizePrice = (
    (Number(dimensions[0] / 2) * Number(dimensions[1] / 2)) /
    100
  ).toFixed(2);
  const postcardSizePrice = (5).toFixed(2);
  const prices = {
    'Original Size': originalSizePrice,
    'Half Size': halfSizePrice,
    'Quarter Size': quarterSizePrice,
    'Postcard Size': postcardSizePrice,
  };

  const addToCart = () => {
    for (let size in selection) {
      if (selection[size]) {
        const newCartItem = { ...workOnFocus };
        newCartItem.id += ' ' + size;
        newCartItem.amount = 1;
        newCartItem.productSize = sizes[size];
        newCartItem.productType = size;
        newCartItem.productPrice = prices[size];
        dispatch(addCartItem(newCartItem));
        console.log(size);
        console.log(selection[size]);
        console.log(newCartItem);
      }
    }
    setSelection(initialSelection);
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
                checked={selection.original}
                id="original"
                onChange={() => {
                  setSelection({
                    ...selection,
                    'Original Size': !selection.original,
                  });
                }}
              />
              <label htmlFor="original">
                <span className="size">{`${originalSize} cm`}</span>
                <span className="type">Original size</span>
                <span className="price">{`£${originalSizePrice}`}</span>
              </label>
              <hr></hr>
              <input
                type="checkbox"
                checked={selection.half}
                id="half"
                onChange={() =>
                  setSelection({
                    ...selection,
                    'Half Size': !selection.half,
                  })
                }
              />
              <label htmlFor="half">
                <span className="size">{halfSize}</span>
                <span className="type">Half size</span>
                <span className="price">{`£${halfSizePrice}`}</span>
              </label>
              <hr></hr>
              <input
                type="checkbox"
                checked={selection.quarter}
                id="quarter"
                onChange={() =>
                  setSelection({
                    ...selection,
                    'Quarter Size': !selection.quarter,
                  })
                }
              />
              <label htmlFor="quarter">
                <span className="size">{quarterSize}</span>
                <span className="type">Quarter size</span>
                <span className="price">{`£${quarterSizePrice}`}</span>
              </label>
              <hr></hr>
              <input
                type="checkbox"
                checked={selection.postcard}
                id="postcard"
                onChange={() =>
                  setSelection({
                    ...selection,
                    'Postcard Size': !selection.postcard,
                  })
                }
              />
              <label htmlFor="postcard">
                <span className="size">{posterSize}</span>
                <span className="type">Postcard</span>
                <span className="price">{`£${postcardSizePrice}`}</span>
              </label>
              <hr></hr>
            </form>
          </div>
          <AddToCartButton action={addToCart} />
          <MapMenu />
        </div>
        <CloseButton
          action={() => {
            console.log(selection);
            dispatch(closeWorkPanel());
          }}
        />
      </div>
    </section>
  );
};

export default WorkPanel;
