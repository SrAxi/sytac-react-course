import React from 'react';

export default ({onPress}) =>
    <div className="App-content">
        <h2>Please log in</h2>
        <button onClick={onPress} className="btn btn-primary">Sign in</button>
    </div>;
