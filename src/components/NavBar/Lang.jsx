import { useContext } from "react";
import { LenguaContext } from "../../Context/LangProvider";

export const Lang = () => {
  const useLengua = () => useContext(LenguaContext);
  const {  lang, changeLang } = useLengua();
  return (
    <div className="container__lang">
      <button className={(lang === "castellano" ? "active" : "") + " btn-idioma"} onClick={() => changeLang("castellano")}>
          ESP
        </button>
        <div className="divisor"></div>
        <button className={(lang === "english" ? "active" : "") + " btn-idioma"} onClick={() => changeLang("english")}>
          ENG
        </button>
    </div>
  )
}
