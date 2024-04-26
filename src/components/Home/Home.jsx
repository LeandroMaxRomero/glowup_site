import QuestionCard from "../QuestionCard/QuestionCard";
import { Header } from "./Header";
// import { Survey } from "../Survey/Survey";

export const Home = () => {
  return (
    <div className="container__home">
      <Header />
      <QuestionCard />
    </div>
  )
}
