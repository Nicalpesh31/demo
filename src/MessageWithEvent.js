import React from 'react';

class MessageWithEvent extends React.Component {
    constructor(props) {
        super(props)
        this.logEventToConsole = this.logEventToConsole.bind();
    }
    logEventToConsole(msgid,e){
        alert("Hello "+e.target.innerHTML);
        alert(msgid);
    }
    render()
    {
        return(
            <div>
                <button onClick={this.logEventToConsole.bind(this,Math.floor(Math.random()* 10))}>Submit</button>
                <h1>Hello {this.props.name}!</h1>
            </div>
        )
    }

}
export default MessageWithEvent;
