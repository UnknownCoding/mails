import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import '../Modal.css';
import { useForm } from "react-hook-form";
import { modalState } from '../atoms/modalAtoms';
import { useRecoilState } from 'recoil';
import { addDoc, collection, doc, onSnapshot, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import {  db } from '../firebase';



const Modal = () => {
    const onSubmit = async ({email,message,subject}) => {
        await addDoc(collection(db,'emails'),{
                to:email,
                message:message,
                subject:subject,
                timestamp:serverTimestamp()
                })
                
        setOpen(false)
    }; 

    const { register, handleSubmit,formState: { errors } } = useForm();
    const [open,setOpen] = useRecoilState(modalState)

    return (
        <div className='sendMail'>
            <div className='sendHeader'>
                <h3>New Messaee</h3>
                <CloseIcon onClick={()=>{setOpen(!open)}}/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input type="email" placeholder='To' {...register("email",{required:true})} ></input>
                {errors.email && <p className='error'>please enter a valid email</p>}
                <input type="text" placeholder='Subject' {...register("subject",{required:true})}></input>
                {errors.subject && <p className='error'>enter a subject</p>}
                <input type="text" placeholder='Message' className='formMess' {...register("message",{required:true})}></input>
                {errors.message && <p className='error'>enter a proper message  </p>}
                <div className='sendOps'>
                    <Button className='buttonz' type='submit' variant="contained" color='primary'>Send</Button>
                </div>
            </form>
        </div>
    )
}

export default Modal