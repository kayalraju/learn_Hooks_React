import logo from './logo.svg';
import './App.css';
import react,{useState} from 'react';
import Usestatehook from './componenthook/Usestatehook';
import Toggledata from './componenthook/Toggledata';
import Arrayusestate from './componenthook/Arrayusestate';
import Objectusestate from './componenthook/Objectusestate';
import Hookuseeffect from './componenthook/useeffecthooks/Hookuseeffect';
import TimerExample from './componenthook/useeffecthooks/TimerExample';
import FetchapiData from './componenthook/useeffecthooks/FetchapiData';
import FetchapiLoding from './componenthook/useeffecthooks/FetchapiLoding';
import ControlFrom from './componenthook/ControlUncontrolfrom/ControlFrom';
import Arrayhook from './componenthook/useStatehook/Arrayhook';
import Contex from './componenthook/ContexHooks/Contex';
import Userefs from './componenthook/UseRefHook/Useref'
import FormValidate from './componenthook/FormValidation/FormValidate';
import NoteState from './Context/notes/NoteState';
import Result from './Context/Result';
import Redusercount from './componenthook/Reduserhooks/Redusercount';
import Advancereduce from './componenthook/Reduserhooks/Advancereduce';
import Userefhook from './componenthook/Useref/Userefhook';
import Advanceuseref from './componenthook/Useref/Advanceuseref';
import Reduceexample1 from './componenthook/Reduserhooks/Reduceexample1';
import Reduceadvance1 from './componenthook/Reduserhooks/Reduceadvance1';
import Getpostapiredusehook from './componenthook/Reduserhooks/Getpostapiredusehook';
import TestCount from './componenthook/Reduserhooks/TestCount';

function App() {
 
  return (
    <>
  
    <div className="">
      <h1 className='headd'>we learn all hooks in this class </h1>
      {/* <Usestatehook /> */}
      {/* <Toggledata /> */}
      {/* <Arrayusestate /> */}
      {/* <Objectusestate /> */}
      {/* <Hookuseeffect/> */}
      {/* <TimerExample /> */}
      <FetchapiData />
      {/* <FetchapiLoding /> */}
      {/* <ControlFrom /> */}
      {/* <Arrayhook/> */}
      {/* <Contex/> */}
      {/* <Userefs/> */}
      {/* <FormValidate/> */}
      {/* <NoteState>
        <Result/>
      </NoteState> */}
      {/* <Redusercount/> */}
      {/* <Advancereduce/> */}
      {/* <Userefhook/> */}
      {/* <Advanceuseref/> */}
      {/* <Reduceexample1/> */}
      {/* <Reduceadvance1/> */}
      {/* <Getpostapiredusehook/> */}
      {/* <TestCount/> */}
    </div>
    </>
  );
}

export default App;
