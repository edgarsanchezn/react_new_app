export default function PartOne(){
  return <div>
    <span className="text-red-600 font-bold ">Personal Info</span>
    <div className="grid grid-cols-2">
          <div className="">
            <div>Title</div>
            <div>
                  <select name="title" id="1"  >
              <option value="1">Select a Title</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
              </div>
          </div>
          <div className="">
            <div>Last Name</div>
            <div>
      <input className="bg-gray-100 rounded" type="text"/> 
              </div>
          </div>
      
                <div className="">
            <div>First Name</div>
            <div>
      <input className="bg-gray-100 rounded" type="text"/> 
              </div>
          </div>
      
                     <div className="">
            <div>MIddle Name</div>
            <div>
      <input className="bg-gray-100 rounded" type="text"/> 
              </div>
          </div>
      
                           <div className="col-span-2 w-full border">
            <div>Suffix (Type in custom Suffix)</div>
            <div>
      <input className="bg-gray-100 rounded" type="text"/> 
              </div>
          </div>
                                 <div className="col-span-2 w-full border">
            <div>Suffix (Type in custom Suffix)</div>
            <div>
      <input className="bg-gray-100 rounded" type="text"/> 
              </div>
          </div>
                                 <div className="col-span-2 w-full border">
            <div>Suffix (Type in custom Suffix)</div>
            <div>
      <input className="bg-gray-100 rounded" type="text"/> 
              </div>
          </div>
      
                                 <div className=" w-full border">
            <div>Zip Code</div>
            <div>
      <input className="bg-gray-100 rounded" type="text"/> 
              </div>
          </div>
      
                                       <div className=" w-full border">
            <div>State</div>
            <div>
      <input className="bg-gray-100 rounded" type="text"/> 
              </div>
          </div>
      <div className=" w-full border">
                  <div>City</div>
            <div>
      <input className="bg-gray-100 rounded" type="text"/> 
              </div>
          </div>
    <div className=" w-full border">
                      <div>Social Security #</div>
            <div>
      <input className="bg-gray-100 rounded" type="text"/> 
              </div>
          </div>
  <div className=" w-full border">
                        <div>Employee Number</div>
            <div>
      <input className="bg-gray-100 rounded" type="text"/> 
              </div>
          </div>
      
        <div className=" w-full border">
                        <div>IAFF#</div>
            <div>
      <input className="bg-gray-100 rounded" type="text"/> 
              </div>
          </div>
  



    </div>
  </div>
}