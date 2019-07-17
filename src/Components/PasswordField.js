import React from 'react';
import hasha from 'hasha';
import { Redirect } from 'react-router-dom';

class PasswordField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        
        if(hasha(this.state.value) === "75da598c06f0d35b9f7dd8d7bad7d31d16e29cf2ead925beac365404d09aa0dcf2411d3ea2d93e4f760ab685b9f65c93989189974217af885fb7bab9d9dc47fb")
            return <Redirect to='/na/' />
        else
            alert('pass failed');

        event.preventDefault();
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                nuq vIta' vISov.:
                <input type="password" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="vIleghjaj" />
            </form>
        );
    }
}

export default PasswordField;