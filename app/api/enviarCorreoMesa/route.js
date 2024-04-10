import { sendMail } from "/service/mailService";

export async function GET(req, res) {
    try {
        res.status(200).send(req.auth_data);
    }catch (err) {
        res.status(400).json({
          error_code: "api_one",
          message: err.message,
        });
      }
    //res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
    //res.status(405).end(`Method ${method} Not Allowed`);
}

export async function POST(req, res){
    const data = await req.json();
    const usuario = process.env.MAILMESA;
    //const act = data.actividadadi;
    
    try {
        await sendMail(
            "Registro de un nuevo Soporte",
            usuario,
            "Esto es una prueba del funcionamiento del correo",
            "<h1>Registro de Actividad Adicional para Soporte Espacio Académicos</h1> <p> Buen dia </p> <p>Se registro la siguiente actividad adicional:  " + data.actividadadi + " para el bloque y salon:  " + data.salon + "</p> <p> Agradecemos crear el caso correspondiente para dar solucion lo mas pronto posible. </p> <p> Cordialmente </p>"
          );
          res.status(200).send("Success");
    } catch (err) {
        res.status(400).json({
          error_code: "api_one",
          message: err.message,
        });
      }
      //res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
      //res.status(405).end(`Method ${method} Not Allowed`);
}
