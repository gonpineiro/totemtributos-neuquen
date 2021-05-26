import "./cargando.scss";
export const Cargando = () => {
  return (
    <div className="container">
      <div className="box d-flex justify-content-center h-100 cargando">
        <div className="spinner-border text-primary" role="status">
          <span class="sr-only"></span>
        </div>
      </div>
    </div>
  );
};
