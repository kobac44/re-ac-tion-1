import React, { useState, useRef } from 'react';
import './boxes.css';


function Boxes() {
    const dragItem = useRef();
    const [list, setList] = useState(['Boxee 1','Boxee 2','Boxee 3','Boxee 4']);

    const dragStart = (e, position) => {
        dragItem.current = position;
        console.log(e.target.innerHTML);
    };
    


    return (
       {
        list &&
        list.map((boxee, index) => (
            <div className="item-boxee">
                <div className="Boxee-1">Boxee #1</div>
                <div className="Boxee-2">Boxee #2</div>
                <div className="Boxee-3">Boxee #3</div>
                <div className="Boxee-4">Boxee #4</div>
            onDragStart={(e) => dragStart(e, index)}
            key={index}
            draggable
                {boxee}
            </div>
        )}
    )
}

export default Boxes;