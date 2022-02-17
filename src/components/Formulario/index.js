
import PartOne from "./PartOne"
import PartTwo from "./PartTwo"
export default function Formulario(){
    return <div className="flex mt-32 border w-full bg-white rounded-xl p-4 grid grid-cols-2">
      <PartOne />
      <PartTwo />
    </div>
  }