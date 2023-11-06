import pageNotFound from "../assets/images/pageNotFound.png";
import {Link} from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../components/Button";

export const PageNotFound = () => {
  useEffect(()=>{
    document.title=`Page Not Found/Cinemate`;
  })
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-grey 700 font-bold my-10 dark:text-white">
            404,oops
          </p>
          <div className="max-w-lg">
            <img
              className="rounded"
              src={pageNotFound}
              alt="404 not found page"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
        <Link to="/">
            <Button>Back To Cinemate</Button>
          </Link>  
        </div>
      </section>
    </main>
  );
};
