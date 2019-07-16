import React from 'react';

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
        alert('A name was submitted: ' + this.state.value);
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