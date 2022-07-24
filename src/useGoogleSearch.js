import { useState,useEffect } from "react";
import API_key from "./keys";
const CONTEXT_KEY = "c4d219d5e2114259e"
const UseGoogleSearch = (term) => {
    const [data, setData] = useState(null)

    useEffect(()=> {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_key}&cx=${CONTEXT_KEY}&g=${term}`
            )
            .then(response => response.json())
            .then (result => {
                setData(result)
            })
        }
        fetchData()
    }, [term]) //whenever term changes, we fire all the code in the useEffect, which gets the search results
    return {data}
}

export default UseGoogleSearch;
