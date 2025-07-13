
export const Drink = ({ name, image }) => {
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          {/* 'image' je použito jako atribut 'src' a 'name' jako 'alt' text */}
          <img src={image} alt={name} />
        </div>
        <div className="drink__info">
          {/* 'name' je použito jako nadpis H3 */}
          <h3>{name}</h3>
          {/* Následující blok pro 'layers' je zakomentován/nepoužíván podle zadání */}
          {/*
          <div className="layer">
            <div className="layer__color" style={{ backgroundColor: '#613916' }}></div>
            <div className="layer__label">espresso</div>
          </div>
          */}
        </div>
      </div>
      <form className="drink__controls">
        {/* 'id' je zatím nepoužito, ale input je ponechán pro budoucí rozšíření */}
        <input type="hidden" className="order-id" value="" />
        <button className="order-btn">
          Objednat
        </button>
      </form>
    </div>
  );
};
