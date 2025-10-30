import { useState, useEffect } from 'react';

export default function Console(props) {

    return (
        <div className='container p-4 rounded bg-warning bg-opacity-10'>
            {props.messages?.map(msg => (
                <p>{msg}</p>
            ))}
        </div>
    );
}
