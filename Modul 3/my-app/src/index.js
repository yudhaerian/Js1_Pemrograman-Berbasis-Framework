import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './Test';
import * as serviceWorker from './serviceWorkerRegistration';
import HelloComponent from './component/HelloComponent'

// const HelloComponent = ()=>{ // no 1
// return HelloComponent
// }


// class StateFullComponent extends React.Component // no 2
// {
//     render(){
//         return <p>StatefullComponent</p>
//     }
// }

//  ReactDOM.render(<StateFullComponent />, document.getElementById('root'));


// ReactDOM.render( //no 3 membuat props
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render( //no 4 test lifecycle component
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render( //no 4 test lifecycle component
//   <React.StrictMode>
//     <HelloComponent />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// If you want your app to work offline and load faster, you can change
// unregister () to register () below. Note thisctomesewitmemevpitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister ();