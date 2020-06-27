import React, {useState} from 'react';
import logo from './logo.svg';
import Hello from './components/Hello'
import LikeButton from './components/LikeButton'
// import Mouse from './components/Mouse'
import usePosition from './components/usePosition'
import useUrl from './components/useUrl'
import './App.css';
interface ILoad{
  message: string;
  status: string;
}
interface IThemeProps {
  [key: string] : {color: string; background: string;}
}
const theme: IThemeProps = {
  'light': {
    color: 'green',
    background: 'red'
  },
  "dark": {
    color: 'white',
    background: '#000'
  }
}

export const ThemeContext = React.createContext(theme.dark)

export const App = () => {
  const position = usePosition()
  const [show, setShow] = useState(false)
  const [data, state] = useUrl('https://dog.ceo/api/breeds/image/random', [show])
  const loadData = data as ILoad
  return (
    <div className="App">
      <header className="App-header">
        <ThemeContext.Provider value={theme.dark}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <LikeButton/>
          <Hello  message="hello world"/>
          <button onClick={() => setShow(!show)}>traggle</button>
          <p>X: {position.x} Y: {position.y}</p>
          {
            state? <p>正在加载小狗</p>:<img src={loadData && loadData.message} alt=""/>
          }
          {/* <Mouse/> */}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </ThemeContext.Provider>
      </header>
    </div>
  );
}


