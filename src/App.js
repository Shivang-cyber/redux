import './App.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { useState } from 'react'
// import { addObject } from "./actions/objectAction"
// import { addStr } from './actions/stringAction';
// import { Push } from "./actions/arrayAction"
import Translate from './comps/Translate';
function App() {
  // const { objects } = useSelector(store => store.object)
  // const {str}= useSelector(store => store.string)
  // const {arr} = useSelector(store=>store.array)
  // const [ob, setOb] = useState({})
  // const dispatch = useDispatch()

  // function handleChange(e, i) { 
  //   setOb({ ...ob, [i]: e.target.value })
  // }

  // function handleClick(t) {
  //   switch (t) {
  //     case "obj":
  //       dispatch(addObject(ob))
  //       break;
  //     case "str":
  //       dispatch(addStr(ob.str))
  //       break; 
  //       case "arr":
  //       dispatch(Push(ob.arr))
  //       break;

  //     default:
  //       break;
  //   }
  // }

  // function renderobj() {
  //   return (
  //     <ul>
  //       {Object.keys(objects).map(function (key) {
  //         return <option key={key} value={key}>{key}: {objects[key]}</option>
  //       })}
  //     </ul>
  //   )
  // }
  return (
    <div className="App">
      {/* <div>
        <h1>objects</h1>
        <div>{renderobj()}</div>
        <input type="text" placeholder='setkey' onChange={(e) => handleChange(e, 'k')} />
        <input type="text" placeholder='setvalue' onChange={(e) => handleChange(e, 'v')} />
        <button onClick={()=>handleClick('obj')}>push to ob</button>
      </div> */}
      {/* <div>
        <h1>translate</h1>
        <h2>{str}</h2>
        <input type="text" placeholder='string' onChange={(e) => handleChange(e, 'str')} />
        <button onClick={()=>handleClick('str')}>push to ob</button>
      </div> */}
      <div>
        <Translate ></Translate>
      </div>
      {/* <div>
        {arr.map((e,i)=><div key={i}>{e}</div>)}
        <input type="text" onChange={(e)=>handleChange(e,'arr')} />
        <button onClick={()=>handleClick('arr')}>add to arr</button>
      </div> */}
    </div>
  );
}

export default App;
