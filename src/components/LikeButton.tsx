import React, { useState, Fragment, useEffect, useRef, useContext } from 'react'
import usePosition from './usePosition'
import {ThemeContext} from '../App'
const LikeButton: React.FC = () => {
    let [like, setLike] = useState(0)
    let [on, setOn] = useState(true)
    let position = usePosition()
    const likeRef = useRef(0)
    const didMountRef = useRef(false)
    const domRef = useRef<HTMLInputElement>(null)
    const style = useContext(ThemeContext)
    
    useEffect(() => {
        if(didMountRef.current){
            console.log('componentDidUpdata')
        }else{
            console.log('componentDidMount')
            didMountRef.current = true
        }
    })
    // useEffect就是只要组件渲染后添加副作用
    // 有些副作用不需要清除，有些就要
    // componentDidMount componentDidUpdata
    useEffect(() => {
        if(domRef && domRef.current){
            domRef.current.focus()
        }
    })
    useEffect(() => {
        document.title = `执行了${like}次了`
        console.log(likeRef.current)
        
    }, [like]) // 第二个参数判断数组中的state改变才会执行该副作用
    // 相当于shouldComponentUpdata
    function getCurrentCount(){
        setTimeout(() => {
            alert('这是第' + likeRef.current)
        },3000)
    }
    return (
        <Fragment>
            <input type="text" ref={domRef}/>
            <button style={style} onClick={() => {
                setLike(like+1);
                likeRef.current++
            }}>{like}赞</button>
            <button onClick={() => {
                setOn(!on)
            }}>{on?"ON": "OFF"}</button>
             <p>X: {position.x} Y: {position.y}</p>
             <button onClick={getCurrentCount}>fdf</button>
        </Fragment>
    )
}

export default LikeButton