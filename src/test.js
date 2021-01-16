import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {company:'', Model:'', color:''}
    }



    render()
    {
        return <div>Rang: {this.state.color}</div>
        return <div>Model: {this.state.module}</div>
        return <div>Color: {this.state.color}</div>

    }


}

ReactDOM.render(document.querySelector('#root'));