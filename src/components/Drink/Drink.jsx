import { Layer } from "../Layer";


export const Drink = ({ name, image, layers }) => { 
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={image} alt={name} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          
          


          <div className="drink__layers">
            {layers.map((layerData, index) => (
              <Layer key={index} color={layerData.color} label={layerData.label} />
            ))}
          </div>
        </div>
      </div>
      <form className="drink__controls">
        <input type="hidden" className="order-id" value="" />
        <button className="order-btn">
          Objednat
        </button>
      </form>
    </div>
  );
};