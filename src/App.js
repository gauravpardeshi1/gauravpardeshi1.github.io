
import './App.css';
import Header from './Component/Navbar';
import AllRoutes from './Component/AllRoutes';
import styled from 'styled-components'
import { useContext } from 'react';
import { AuthContext } from './Context/Context';
function App() {
  const {state}=useContext(AuthContext)
  console.log("Auth",state);
  return (
    <DIV className="App" state={state}>
    {/* <Navbar/> */}
    <Header/>
    
    <AllRoutes/>
    </DIV>
  );
}

export default App;


const DIV = styled.div

`
width:100%;
${({state})=> (state?`background:DarkSlateGrey;`:`background:Black;`)}
`