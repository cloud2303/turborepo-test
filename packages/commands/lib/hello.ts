import {Command} from "../index";

export function C30ReadVersion(){
    return "C30ReadVersion";
}

export function C30WriteVersion(){
    return "C30WriteVersionddd";
}


export function C30DeleteVersion(params:Command){
    console.log("C30DeleteVersion()",params.name);
}
