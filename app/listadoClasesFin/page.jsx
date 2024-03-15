
import ListadoClasesFin from "@/components/ListadoClaseFin"
import Navigation from "@/components/Navigation";



async function consulta() {
  const res = await fetch('http://localhost:3000/api/listadoClasesFin', {
    method: "POST",
    body: JSON.stringify({"mensaje":"mensaje"}),
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    mode: "cors"
  });

  //console.log(res);
  const dat = await res.json();
  console.log(dat);
  return (dat);
}
 
async function page(){

  const clases = await consulta();
  //console.log(clases);
  
    return (
        <>
        <Navigation />
        <ListadoClasesFin clases = {clases}/>
</>
    )

}

export default page;