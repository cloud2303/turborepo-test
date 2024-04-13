import React, {useState} from 'react';
import "./bcc.css"
function Bcc() {
    let [value, setValue] = useState(0);
    return (
        <div className={"cc"}>hello 我是一个bcc啊<button onClick={()=>{
            setValue(value += 1)
        }}>点我{value}</button></div>
    );
}

export {Bcc};
