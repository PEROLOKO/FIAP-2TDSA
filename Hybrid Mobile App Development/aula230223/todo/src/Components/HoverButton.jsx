import React, { useState } from "react";

const style = {
    padding: '10px',
    fontSize: '16px',
    margin: '10px',
    marginRight: '0px',
    color: '#fff',
    backgroundColor: '#0066ff',
    border: '2px solid #0066ff',
    borderRadius: '5px'
};

const hoverStyle = {
    ...style,
    backgroundColor: '#003399',
    border: '2px solid #003399',
    cursor: 'pointer'
};

const HoverButton = ({ caption, event}) => {
    const [currentStyle, setCurrentStyle] = useState(style);
    return (
        <button style={currentStyle}
            onClick={event}
            onMouseEnter={() => setCurrentStyle(hoverStyle)}
            onMouseLeave={() => setCurrentStyle(style)}
        >
            {caption}
        </button>
    )
};

export { HoverButton };