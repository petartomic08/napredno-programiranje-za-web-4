import { useState, useEffect } from "react"

const useFetch = (url, isLocalServer = true) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortController = new AbortController()
        function fetchData() {
            fetch(url, {
                signal: abortController.signal
            })
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch data for that resource')
                    }
                    return res.json()
                })
                .then((data) => {
                    setIsPending(false)
                    setData(data)
                    setError(null)
                })
                .catch(err => {
                    if (err.name === "AbortError") {
                        return
                    } else {
                        setError(err.message)
                        setIsPending(false)
                    }
                })
        }

        if (isLocalServer) {
            setTimeout(() => {
                // go to api and fetch data to display
                fetchData()
            }, 1000);
        } else {
            fetchData()
        }

        return () => { abortController.abort() }
    }, [url, isLocalServer])

    return { data, isPending, error }
}

export default useFetch