import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import '../Mail.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import DeleteIcon from '@mui/icons-material/Delete';
import ErrorIcon from '@mui/icons-material/Error';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportant from '@mui/icons-material/LabelImportant';
import MoreVert from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useRecoilState } from 'recoil';
import { mailId, mailInfo } from '../atoms/modalAtoms';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';


const Mail = () => {
    const navigate = useNavigate()
    const [ids,setIds] = useRecoilState(mailId)
    const [dos,setDos] = useState(null)
    const [info,setInfo] = useRecoilState(mailInfo)
    
    
    useEffect( ()=>{
        console.log(ids)
        const workpls = async () => {
            const docRef = doc(db,'emails',ids.toString());
            const docSnap = await getDoc(docRef);    
            setDos(docSnap)
            console.log(dos)

        }
        workpls()
    },[])


    return (
        <div className='mail'>
            <div className='mail-tools'>
                <div className='mail-toolsL'>
                    <IconButton onClick={()=>navigate('/')}>
                        <ArrowBackIcon/>
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon/>
                    </IconButton>
                    <IconButton>
                        <ErrorIcon/>
                    </IconButton>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton>
                        <EmailIcon/>
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon/>
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon/>
                    </IconButton>
                    <IconButton>
                        <LabelImportant/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
                <div className='mail-toolsR'>
                    <IconButton>
                        <UnfoldMoreIcon/>
                    </IconButton>
                    <IconButton>
                        <PrintIcon/>
                    </IconButton>
                    <IconButton>
                        <ExitToAppIcon/>
                    </IconButton>
                </div>
            </div>
            <div className='MailBody'>
                <div className='MailHeader'>
                    <h2>{info.subject}</h2>
                    <LabelImportantIcon/>
                    <p>{info.title}</p>
                    <p className='time'>{info.time}</p>
                </div>
                <div className='MailMessa'>
                    <p>{info.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Mail