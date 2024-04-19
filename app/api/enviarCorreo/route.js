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
    const usuario = data.usuario + "@unbosque.edu.co";
    const url = process.env.LINKENCUESTA;
    const urlCompleta = `<a href="` + url + `"> LINK </a>`;
    
    //console.log(usuario)
    try {
        await sendMail(
            "Registro de un nuevo Soporte",
            usuario,
            "Esto es una prueba del funcionamiento del correo",
            "<h1>Registro Solicitudes - Soporte Espacios Académicos</h1> <p> Estimado Docente/Funcionario:" + data.nombre + "</p> <p>Facultad: " + data.programa + "  Programa: " + data.materia + "</p> <p> La unidad de soporte IT le informa que recibimos una solicitud de soporte para el bloque y salon " + data.salon + " en la fecha " + data.fecha + " </p> <p> El servicio fue atendido por el tecnico: " + data.nombreTec + " y la actividad realizada fue: " + data.actividad + " </p> <p> Le solicitamos cordialmente diligenciar la siguiente encuesta para asi poder mejorar constantemente nuestro servicio.</p>" + urlCompleta + "<p>Cordial Saludo</p>"
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
