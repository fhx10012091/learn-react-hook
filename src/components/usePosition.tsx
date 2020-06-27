import {useState, useEffect} from 'react'

const usePosition = () => {
    let [position, setPosition] = useState({x: 0, y: 0})
    useEffect(() => {
        const updataPos = (e: MouseEvent) => {
            setPosition({x: e.clientX, y: e.clientY})
        }
        document.addEventListener('click', updataPos)
        // 清除副作用，相当于类组件中的componentWillUnMount
        return () => {
            document.removeEventListener('click', updataPos)
        }
    })
    return position
} 

export default usePosition