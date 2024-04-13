"use client"





import {C30ReadVersion} from "@tt/commands";
import {Bcc} from "@tt/ui";

function Btn() {
    return (
        <>
        <button onClick={()=>{
            let res = C30ReadVersion()
            console.log(res)
        }}>hello world</button>
            <Bcc/>
        </>
    );
}

export default Btn;
