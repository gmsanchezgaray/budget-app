import "./Activity.scss";

const Activity = () => {
  const current_datetime = new Date();
  const formatted_date =
    current_datetime.getDate() +
    "-" +
    (current_datetime.getMonth() + 1) +
    "-" +
    current_datetime.getFullYear();
  return (
    <div className="activity">
      <div className="activity__category">
        {/* //TODO Mas adelante cambiar por array de iconos  */}
        <h1 className="activity__category--icon">💰</h1>
      </div>
      <div className="activity__wrapper">
        <p className="activity__title">Category Name</p>
        <p className="activity__date">{formatted_date}</p>
        {/* //TODO En vez de agregar solo la fecha, agregar un boton con icono de info para mostrar: Fecha, categoria, tipo de  movimiento, detalle */}
      </div>
      <p className="activity__amount--income">$99.000.00</p>
      <div className="activity__type--income"></div>
    </div>
  );
};

export default Activity;
