import { useState } from "react"
// import { CardOne } from "./CardOne"
// import { CardTwo } from "./CardTwo"
// import { CardThree } from "./CardThree"

export const Survey = () => {

    const [enc, setEnc] = useState(true)
    const [cardOne, setCardOne] = useState(true)
    const [cardTwo, setCardTwo] = useState(false)
    const [cardThree, setCardThree] = useState(false)

    const turnCardTwo = () => {
        setCardOne(!cardOne)
        setCardTwo(!cardTwo)
    }

    const turnCardThree = () => {
        setCardTwo(!cardTwo)
        setCardThree(!cardThree)
    }

    const turnCardFour = () => {
        setCardThree(!cardThree)
    }

  return (
    <div className={(enc === true ? "show" : "") + " container__survey"}>

        <h2>Encuesta</h2>

        <div>
            <button onClick={() => setEnc(!enc)}>Cerrar</button>

            <div>    
                <div className={(cardOne === true ? "show" : "") + " card--one"} >
                    <input type="text" />
                    <select name="" id="" onChange={()=>turnCardTwo()}>
                        <option value="">Primera</option>
                        <option value="">Segunda</option>
                        <option value="">Tercera</option>
                    </select>
                </div>

                <div className={(cardTwo === true?"show":"")+" card--two"} >
                    <input type="text" />
                    <select name="" id="" onChange={()=>turnCardThree()}>
                        <option value="">Cuarta</option>
                        <option value="">Quinta</option>
                        <option value="">Sexta</option>
                    </select>
                </div>

                <div className={(cardThree===true?"show":"")+" card--three"} >
                    <input type="text" />
                    <select name="" id="" onChange={()=>turnCardFour()}>
                        <option value="">Septima</option>
                        <option value="">Octava</option>
                        <option value="">Novena</option>
                    </select>
                </div>
            </div>
        </div>

    </div>
  )
}
