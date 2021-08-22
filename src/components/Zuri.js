
import React from "react";
import {  UsersIcon } from "@heroicons/react/solid";


export default function Zuri() {
  return (
    <section  className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium uppercase title-font text-white mb-12">
          Inspired by 
          <br/>
          <a href="https://training.zuri.team/"  rel="noopener noreferrer" target="_blank">Zuri</a>
        </h1>

        <div className="ml-5 px-5 mr-0 center text-center">
            <a 
            href="https://internship.zuri.team/"
            rel="noopener noreferrer"
            target="_blank"
              className="sm:w-1/2 w-100 p-4 text-center">
              <div className="center text-center">
                <img
                  alt="gallery"
                  className="text-center"
                  src="https://hng-stage-2-task.herokuapp.com/images/HNG.png"
                />
              
              </div>
            </a>
         
        </div>
      </div>
    </section>
  );
}