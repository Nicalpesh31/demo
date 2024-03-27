import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
        setInterval(()=> this.setTime(),1000);
    }
    setTime() {
       
        this.setState((state, props) => (
            {
                date: new Date()
            }
        ))
    }
    render(){
        return(
            <div>
                <h1>{this.state.date.toString()}</h1>
            </div>
        )
    }

}
export default Clock;