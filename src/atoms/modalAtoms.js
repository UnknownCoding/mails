import { atom } from "recoil";

export const modalState=atom({
    key:'modalState',
    default: false,
})

export const mailId=atom({
    key:'mailId',
    default: null,
})

export const mailInfo=atom({
    key:'mailInfo',
    default: {id:null,title:'',subject:'',description:'',time:''},
})


