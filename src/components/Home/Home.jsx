import QuestionCard from "../QuestionCard/QuestionCard";
import { AboutUs } from "./AboutUs";
import { Header } from "./Header";
import { Services } from "./Services/Services";
// import { Survey } from "../Survey/Survey";

export const Home = () => {
  return (
    <div className="container__home">
      <Header />
      <Services />
      <AboutUs />
      <QuestionCard />
    </div>
  )
}
