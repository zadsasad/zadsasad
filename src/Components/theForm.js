import React from 'react';

class theForm extends React.Component {
    render() {
        return (
            <form action="http://zasasa.com/en/download_instagram_stories.php" method="POST">
                <input type="text" id="url" name="url" size="80" value="nadiaannuar" /><br/ >
                <br /><br />
                <input type="submit" value="Download"></input>
            </form>
        );
    }
}

export default theForm;