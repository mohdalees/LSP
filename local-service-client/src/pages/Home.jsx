import About from "../components/About";
import Searchbar from "../components/Searchbar";
import Textcarousel from "../components/Textcarousel";
// import Providerdash from "./Providerdash";

export default function Home() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold mb-4">
        Find Trusted Local Services Near You
      </h1>
      <p className="text-grey-600 font-italic ">
        Plumber • Electrician • Tutor • Mechanic
      </p>
      <div className="p-7">
        <Searchbar/>
      </div>
       <div className=" h-[20rem] flex flex-col justify-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        Find Trusted{" "}
        <Textcarousel /> <br />
        Near You
      </h1>

      <p className="text-center font-italic text-grey-600 ">
        Fast • Reliable • Verified Professionals
      </p>
    </div>
     <About/>
    </div>
  );
}
