import React from 'react';

// import leftPad from 'left-pad';

function getTime(timestamp) {
    const time = new Date(timestamp);
    let date = `${time.getDay()}-${time.getMonth()}-${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`;
    return date.replace(/\b(\d{1})\b/g, '0$1');
    // return `${time.getHours()}:${leftPad(time.getMinutes(), 2, '0')}`;
}

export default ({userName, message, timestamp}) =>
    <li className="message">
        <span>{userName}
            <small> {getTime(timestamp)}</small>
        </span>
        <p>{message}</p>
    </li>;
