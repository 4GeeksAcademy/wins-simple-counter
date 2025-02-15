import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter";  // importo el componente counter desde Counter
import "@fortawesome/fontawesome-free/css/all.min.css"; // importo fontawesome para el icono del reloj



const root = ReactDOM.createRoot(document.getElementById("root")); // lo saqué desde las instrucciones del proyecto para renderizar el componente con el prop seconds

let seconds = 0; // variable para contar segundos empezando por 0

//setInterval ejecuta el codigo cada cierto tiempo, en este caso cada 1 segundo (1000)

setInterval(() => {
  seconds++;
  root.render(<Counter seconds={seconds} />);
}, 1000);
export default Home;