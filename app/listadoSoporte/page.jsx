
import ListadoSoporte from "@/components/ListadoSoporte";
import Navigation from "@/components/Navigation";


async function consulta() {
  const res = await fetch("http://localhost:3000/api/listadoSoportes", {
    method: "POST",
    body: JSON.stringify({ mensaje: "mensaje" }),
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    mode: "cors",
  });

  //console.log(res);
  const dat = await res.json();
  console.log(dat);
  return dat;
}
async function page() {
  const soportes = await consulta();
  //console.log(clases);

  return (
    <>
      <Navigation />
      <ListadoSoporte soportes={soportes} />
    </>
  );
}

export default page;
