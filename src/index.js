import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonsDisplay'

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

 //   constructor(props)
  //  {  //gonna be called anytime instance of this class is created.
  //      super(props); //making sure React.component constructor gets called.
       //this is the only time we do direct assignment to state this.state!!
  //      this.state={lat:null, errorMessage:''
   // };
        // setting states in this API
 //} 
    //Above constructor does the same thing as this single line below.
    state ={lati:null, errMessage:''};

    componentDidMount(){  //good for one time setup.
        window.navigator.geolocation.getCurrentPosition(
            position=>this.setState({lati:position.coords.latitude}),
            err=>this.setState({errorMessage:err.message})
            );


        console.log("Rendred");
    }


    
    render()
    {
         if (this.state.errorMessage && !this.state.lati) {

             return <div> Error:{this.state.errorMessage} </div>
         }

         if (!this.state.errorMessage && this.state.lati) {
             //we took state and pass it as a prop to SeasonsDisplay
             // when state is updated that will update SeasonsDisplay
             // as well. means in addition component will re-render 
             // any children like SeasonsDisplay.
             return <div><SeasonDisplay lati={this.state.lati}/></div>      
         }
         return <div>Loading...</div>
    }

};



    ReactDOM.render(
    <App/>,
    document.querySelector('#root'));




