import connection from "../configDB.js";


const botControl = async (req, res) => {
    const { id } = req.params;
    console.log('id recibido' +id);

    try {
        const [results] = await connection.query('SELECT * FROM options WHERE question_id = ? ', [id] );
        res.send(results);
        console.log(results);
    } catch (error) {
        console.log(error + 'error con el bot por aca en botcontroller')
        res.send(error + 'error con el bot por aca en botcontroller')
    }

} 

export default botControl