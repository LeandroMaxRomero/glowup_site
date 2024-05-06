import { Accordion } from "./Accordion";
import { useState } from "react";

export const Services = () => {
  const [active, setActive] = useState("");

  const texto = [
    {
      titulo1: "SERVICE 1",
      titulo2: "SERVICE 2",
      titulo3: "SERVICE 3",
      titulo4: "SERVICE 4",
      titulo5: "SERVICE 5"
    },
    {
      conte1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      conte2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      conte3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      conte4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      conte5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
    }
  ]

  return (
    <div className="container__services" id="services">
        <h2>What we do</h2>
        <Accordion tittle={texto[0].titulo1} contenido={texto[1].conte1} active={active} setActive={setActive} />
        <Accordion tittle={texto[0].titulo2} contenido={texto[1].conte2} active={active} setActive={setActive} />
        <Accordion tittle={texto[0].titulo3} contenido={texto[1].conte3} active={active} setActive={setActive} />
        <Accordion tittle={texto[0].titulo4} contenido={texto[1].conte4} active={active} setActive={setActive} />
        <Accordion tittle={texto[0].titulo5} contenido={texto[1].conte5} active={active} setActive={setActive} />
    </div>
  )
}
