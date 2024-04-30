import { useContext } from "react";
import { LenguaContext } from "../../Context/LangProvider";

export const Lang = () => {
  const useLengua = () => useContext(LenguaContext);
  const {  changeLang } = useLengua();
  return (
    <div className="container__lang">
      <button className="btn-idioma" onClick={() => changeLang("castellano")}>
          ESP
        </button>
        <div className="divisor"></div>
        <button className="btn-idioma" onClick={() => changeLang("english")}>
          ENG
        </button>
    </div>
  )
}
