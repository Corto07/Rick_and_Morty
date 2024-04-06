import React from "react";
import { Link } from "react-router-dom";
import imageNoFound from "../../assets/img/RickyNoFound.png"

const Card = ({ page, results }) => {
  let display;

  if (results) {
    display = (
      
			<div className="flex flex-wrap">
        {results.map((x) => {
          let { id, image, name, status, location, species } = x;

          return (
            <div key={id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 p-4">  
              
              <div className="bg-gray-700 rounded-xl overflow-hidden">
    
                <Link to={`${page}${id}`} style={{ textDecoration: "none" }}>
                  <img className="w-full h-auto rounded-t-xl shadow transition duration-700 hover:scale-105" src={image} alt="" />
                </Link>
                  
                <div className="p-4">
              	  <Link to={`${page}${id}`} style={{ textDecoration: "none" }}>
                    <div className="text-xl text-white font-bold mb-4 hover:text-orange-600 transition-transform hover:scale-105 duration-500">{name}</div>
                	</Link>
                    <div className="text-sm text-gray-400 mb-1">Last known location</div>
                    <div className="text-md text-white">{location.name}</div>
                    </div>
                    <div className={`flex items-center justify-center p-2 text-sm rounded-b-xl ${status === "Dead" ? "text-white bg-[red]" : (status === "Alive" ? "text-white bg-[green]" : "bg-gray-400")}`}>
                         {status} <div className="ml-3 mr-3 w-2 h-2 rounded-full bg-gray-800 text-sm "> </div> <div className="text-sm text-white"> {species} </div>
                </div>
              
							</div>
            
						</div>
          );
        })}
      
				</div>
    
		);

  } else {
    display = (
      <div className="flex justify-center items-center flex-col text-center" >
       <div className="font-bold text-3xl text-white font-MiFuente"> No Characters Found</div>
        <img className="w-[50%] h-auto " src={imageNoFound} alt="Logo" />
      </div>
    );
  }

  return <>{display}</>;
};

export default Card;