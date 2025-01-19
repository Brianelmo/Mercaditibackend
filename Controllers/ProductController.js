import connection from "../configDB.js";

const ProductControll = async (req, res) => {
  try {
    const [rows] = await connection.query("SELECT * FROM productos");
    res.send(rows);
  } catch (error) {
    console.log(error + "error al conectar con la base de datos");
  }
};

export default ProductControll;
