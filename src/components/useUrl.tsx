import {useState, useEffect} from 'react'
import axios from 'axios'
const useUrl = (url: string, deps: any[] = []) => {
    const [data, setData] = useState<any>(null)
    const [state, setState] = useState(false)
    useEffect(() => {
        setState(true)
        axios.get(url).then((res) => {
            console.log(res)
            setState(false)
            setData(res.data)
        })
    }, deps)
    return [data, state]
}
export default useUrl