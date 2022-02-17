import React, { useState } from "react";

import api from "../../services/api";
export default function Login() {
  const [email] = useState("developer@ceawebsystems.com");
  const [password] = useState("uniontracking");

  let headersList = {
    "Accept": "application/json",
    "Content-Type": "application/json" 
   }
   
   let bodyContent = JSON.stringify({
       email,
       password
   });
   
   let reqOptions = {
     url: "https://uniontracking-3.frogi.dev/api/login",
     method: "POST",
     headers: headersList,
     body: bodyContent,
   }
   


  let sendinfo = () => {
    api.request(reqOptions)
    .then(function (response) {
        console.log(response.data);
      }).catch((e)=>{
        console.log(e);
      })
  };
  return (
    <form className="w-full text-center">
      <div className="mt-40 mx-48 md:w-96 border p-4 rounded bg-gray-200">
        Login
        <div className="p-4 text-left">
          <div>email:</div>
          <div>
            <input
              value="{email}"
              className="w-full my-2 bg-gray-100"
              type="text"
              name="email"
            />
          </div>
        </div>
        <div className=" p-4 text-left">
          <div>Password:</div>
          <div>
          
            <input
              type="password"
              value="{password}"
              className="w-full my-2 bg-gray-100"
              name="password"
            />
          </div>
        </div>
        <div className=" p-4 text-center">
          <button onClick={sendinfo} className="p-2 bg-green-400 rounded">
            Sign in
          </button>
        </div>
      </div>
    </form>
  );
}
