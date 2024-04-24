import QuestionCard from "../QuestionCard/QuestionCard";
// import { Survey } from "../Survey/Survey";

export const Home = () => {
  return (
    <div>
      {/* <Survey /> */}
      <QuestionCard />
      <a href="/form"><button>Ir al formulario</button></a>
    </div>
  )
}
