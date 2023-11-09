import Duties from "./Duties"

const JobInfo = ({ jobs, currentItem }) => {
    const { company, dates, duties, title } = jobs[currentItem]
    return (
        <article className="max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <span className="bg-yellow-500 text-white px-4 py-1 rounded-md">
                {company}
            </span>
            <p className="mt-4 mb-4 text-gray-500">{dates}</p>
            <Duties duties={duties} />
        </article>
    )
}
export default JobInfo
