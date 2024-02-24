import { Button, Table } from "react-bootstrap";
import ItemReceta from "./receta/ItemReceta";

const Administrador = () => {
    return (
        <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Recetas disponibles</h1>
        
        <Button className="btn btn-success" >
          <i className="bi bi-database-add"></i>
        </Button>
        
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead className="table-dark">
          <tr className="text-center">
            <th>Cod</th>
            <th>Receta</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <ItemReceta></ItemReceta>
          <ItemReceta></ItemReceta>
          <ItemReceta></ItemReceta>
        </tbody>
      </Table>
    </section>
    );
};

export default Administrador;