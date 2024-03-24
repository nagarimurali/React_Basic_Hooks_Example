/* eslint-disable react/jsx-pascal-case */
//UseStateExample
// import UseStateExample_1 from "./ReactHooks/useStateHook/UseStateExample_1";
// import UseStateExam from "./ReactHooks/UseStateExam";
//  import UseStateBoolean from './ReactHooks/UseStateBoolean'
// import UseStateExample_1 from "./ReactHooks/useStateHook/UseStateExample_1";
// import CrudExample1 from "./ReactHooks/useStateHook/CrudOperation";

//UseEeffectExample
// import UseEeffectFirstExam from "./ReactHooks/UseEeffectHook/UseEeffectFirstExam";

//UseContextExample
// import UseContexExample from "./ReactHooks/UseContex/UseContexExample";

// UseReducerExample
// import UseReducerExample from "./ReactHooks/UseReducerHook/UseReducerExample";
import UseReduceHookExample2 from "./ReactHooks/UseReducerHook/UseReduceHookExample2";
import { useContext } from "react";
import { Mode } from "./context/modeContext";

const App=()=>{
  const mode=useContext(Mode)
  console.log("Mode",mode);
  return(
    <>
      <div style={{ background:mode.theme === 'light' ? 'red' : 'yellow' }}>
    {/* <div style={{background:`${mode.theme}==="light"?"red":"green"`}}> */}
<h4>{mode.theme}</h4>
  <UseReduceHookExample2/>
    </div>
    </>
  )
}
export default App;