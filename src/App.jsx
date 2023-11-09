import { useEffect, useState } from "react"
import Loading from "./components/Loading"
import JobInfo from "./components/JobInfo"
import BtnWrapper from "./components/BtnWrapper"

const url = "https://course-api.com/react-tabs-project"

function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [jobs, setJobs] = useState([])
    const [currentItem, setCurrentItem] = useState(0)

    const fetchJobs = async () => {
        const response = await fetch(url)
        const newJobs = await response.json()
        setJobs(newJobs)
        setIsLoading(false)
    }
    useEffect(() => {
        fetchJobs()
    }, [])
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="container mx-auto px-8 py-16 flex gap-32">
            <BtnWrapper
                jobs={jobs}
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
            />
            <JobInfo jobs={jobs} currentItem={currentItem} />
        </div>
    )
}

export default App
