import React from 'react';

export default function Greeter ({name, phrase}) {
    return (
        <h2 className="Greeter">{`${phrase}, ${name}!`}</h2>
    );
}