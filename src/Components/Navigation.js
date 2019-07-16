import React from 'react';
import { BrowserRouter as Route, Link} from 'react-router-dom';

import TheForm from './TheForm';
import PasswordField from './PasswordField';

class Navigation extends React.Component {
    render () {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/na/">NA</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={PasswordField} />
                <Route path="/na/" component={TheForm} />
            </div>
        );
    }
}

export default Navigation;