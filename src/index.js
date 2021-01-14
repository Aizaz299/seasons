import React from 'react';
import ReactDOM from 'react-dom';

//functional base component
//const App = ()=>{
  //  window.navigator.geolocation.getCurrentPosition(
   //     (position)=>console.log(position),
  //      (err)=>console.log(err)
  //      ); 
  //  return(
 //   <div>Season!</div>
  //  );
//};

//class base component
class App extends React.Component
{   //react says we have to define render!!!

    constructor(props){  //gonna be called anytime instance of this class is created.
        super(props); //making sure React.component constructor gets called.
       //this is the only time we do direct assignment to state this.state!!
        this.state={lat:null};

        window.navigator.geolocation.getCurrentPosition(
            position=>{

                this.setState({lat:position.coords.latitude});
            },
            (err)=>console.log(err)
            );
    }
    render()
    {
         
        return <div> {this.state.lat}</div>;
    }

};



    ReactDOM.render(
    <App/>,
    document.querySelector('#root'));




