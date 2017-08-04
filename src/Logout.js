import React from 'react';

export default ({onPress}) =>
    <div className="col-md-12 App-signout">
        <button onClick={onPress} className="btn btn-lg btn-danger App-signout-btn">Sign out</button>
    </div>;