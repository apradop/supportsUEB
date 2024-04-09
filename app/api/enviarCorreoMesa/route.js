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
    const act = data.actividadadi;
    
    try {
        await sendMail(
            "Registro de un nuevo Soporte",
            usuario,
            "Esto es una prueba del funcionamiento del correo",
            "<h1>Hola Mundo</h1> <p> Esto es la prueba del parrafo dentro del formato html del correo </p>" + act
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
