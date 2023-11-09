import { FaAngleDoubleRight } from "react-icons/fa"
import { v4 as uuidv4 } from "uuid"

const Duties = ({ duties }) => {
    return (
        <div>
            {duties.map((duty, index) => {
                const id = uuidv4()
                return (
                    <div key={id} className="flex gap-4 items-center mb-4">
                        <FaAngleDoubleRight className="text-yellow-500 text-xl w-10" />
                        <p>{duty}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Duties
