const BtnWrapper = ({ jobs, currentItem, setCurrentItem }) => {
    return (
        <div className="flex flex-col gap-4 items-start">
            {jobs.map((job, index) => {
                return (
                    <button
                        key={job.id}
                        onClick={() => setCurrentItem(index)}
                        className={
                            index === currentItem
                                ? "font-bold active"
                                : "font-bold hover:text-yellow-500 duration-300"
                        }>
                        {job.company}
                    </button>
                )
            })}
        </div>
    )
}
export default BtnWrapper
