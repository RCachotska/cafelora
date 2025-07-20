


export const Layer = ({ color, label }) => {
  return (
    <div className="layer"> {/* Zde je správně 'className' */}
      <div className="layer__color" style={{ backgroundColor: color }}></div> {/* Zde je správně 'className' */}
      <div className="layer__label">{label}</div> {/* Zde je správně 'className' */}
    </div>
  );
};

