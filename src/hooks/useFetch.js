import { useEffect,useState } from "react"

//user define hooks

const useFetch =(url)=>{ //useFetch() - to fetch data from the url -url

    const [data,setData] = useState("")

    useEffect(()=>{
        fetch(url).then((res)=>{
            res.json().then((arrayData)=>setData(arrayData.products))
        })
    },[url])

    return data

}

export default useFetch