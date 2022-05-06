import axios from 'axios'
import {useEffect} from 'react'

export function Card({props}) {
    useEffect(()=> {
       const getData = async ()=> {
           const path = await axios.get(props.url)
           const res = path.data
           console.log("effect do card",path)
       }
       getData()
    },[])
    return(
        <div>
            <p>{props.name}</p>
        </div>
    )
}