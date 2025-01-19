import connection from "../configDB.js";

const question = async (req, res) => {

    try {
        const [rows] = await connection.query('SELECT * FROM question')
        res.send(rows);
        console.log(rows);
    } catch (error) {
        console.log(error +'error al acceder a las preguntas');
    }

} 


export default question;