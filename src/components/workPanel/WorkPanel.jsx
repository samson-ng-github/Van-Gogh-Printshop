import workHero from '../../assets/works/F789JH2006.jpg'; //F779JH2117
import AddToCartButton from './AddToCartButton';
import CrossButton from './CrossButton';
import WorkPanelMapMenu from './WorkPanelMapMenu';

const WorkPanel = ({ isWorkPanelOn, toggleWorkPanel }) => {
  return (
    <section className={'workPanelOn ' + (isWorkPanelOn ? 'workPanelOff' : '')}>
      <div id="workPanel">
        <img id="workHero" src={workHero} />
        <div id="workInfo">
          <h1 id="workTitle">The Church at Auvers</h1>
          <p id="workDateLocation">June 1890 • Musée d'Orsay, Paris</p>
          <div id="workPrices">
            <form>
              <hr></hr>
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <label htmlFor="html">
                <span className="size">94 x 74cm</span>
                <span className="type">Original size</span>
                <span className="price">£23.19</span>
              </label>
              <hr></hr>
              <input type="radio" name="fav_language" value="CSS" />
              <label htmlFor="css">
                <span className="size">47 x 37cm</span>
                <span className="type">Half size</span>
                <span className="price">£17.39</span>
              </label>
              <hr></hr>
              <input type="radio" name="fav_language" value="JavaScript" />
              <label htmlFor="javascript">
                <span className="size">23.5 x 18.5cm</span>
                <span className="type">Quarter size</span>
                <span className="price">£13.04</span>
              </label>
              <hr></hr>
              <input type="radio" name="fav_language" value="JavaScript" />
              <label htmlFor="javascript">
                <span className="size">14.8 x 10.5cm</span>
                <span className="type">Postcard</span>
                <span className="price">£20.00</span>
              </label>
              <hr></hr>
            </form>
          </div>
          <AddToCartButton />
          <WorkPanelMapMenu />
        </div>
        <CrossButton id="closeButton" toggleWorkPanel={toggleWorkPanel} />
      </div>
    </section>
  );
};

export default WorkPanel;
