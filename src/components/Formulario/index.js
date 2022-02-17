
import PartOne from "./PartOne"
import PartTwo from "./PartTwo"
export default function Formulario(){
    return <div className="flex"> 
    <div className="w-72 p-8">
      <span className="font-bold text-xl">Add Member</span>
    
    </div>
    <div className="flex mt-32 border w-full bg-white rounded-xl p-4 grid grid-cols-2">
      <PartOne />
      <PartTwo />
    </div>
    </div>
  }