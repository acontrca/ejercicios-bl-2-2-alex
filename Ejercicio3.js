
function getDias (strFecha1, strFecha2){
  
  const fecha1 = new Date (strFecha1.split("/")[2], strFecha1.split("/")[1], strFecha1.split("/")[0]);
  const fecha2 = new Date (strFecha2.split("/")[2], strFecha2.split("/")[1], strFecha2.split("/")[0]);
  const diff = fecha2.getTime() - fecha1.getTime();
  let dias = Math.round( (diff)/(1000*60*60*24));
  
  return dias
}

console.log (getDias ('01/01/2023', '27/02/2023'));
