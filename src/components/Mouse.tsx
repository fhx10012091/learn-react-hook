import React, { useState, useEffect} from 'react'

const Mouse: React.FC = () => {
    let [position, setPosition] = useState({x: 0, y: 0})
    useEffect(() => {
        console.log('渲染完后执行的副作用')
        const updataPos = (e: MouseEvent) => {
            console.log('监听执行')
            setPosition({x: e.clientX, y: e.clientY})
        }
        document.addEventListener('click', updataPos)
        return () => {
            console.log('移除监听事件')
            document.removeEventListener('click', updataPos)
        }
    })
    console.log('before render'+ position.x)
    return (
    <p>X: {position.x} Y: {position.y}</p>
    )
}

export default Mouse