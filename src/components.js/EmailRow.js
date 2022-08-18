import { Checkbox, IconButton } from '@mui/material';
import React from 'react'
import '../EmailRow.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useNavigate } from 'react-router-dom';
import { mailId, mailInfo } from '../atoms/modalAtoms';
import { useRecoilState } from 'recoil';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const EmailRow = ({id,title,subject,description,time}) => {
    const navigate = useNavigate()
    const [ids,setIds] = useRecoilState(mailId)
    const [info,setInfo] = useRecoilState(mailInfo)
    
    return (
        <div className='emailRow' onClick={async()=>{
            setIds(id);
            await setInfo({id:id,title:title,subject:subject,description:description,time:time})
            navigate('/mail');
        }}>
            <div className='emailOpts'>
                <Checkbox/>
                <IconButton>
                    <StarBorderIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantIcon/>
                </IconButton>
            </div>
            <h3 className='emailTitle'>
                {title}
            </h3>
            <div className='emailMessa'>
                <h4>
                    {subject}
                    <span className='emailDesc'>-
                        {description}
                    </span>
                </h4>
            </div>
            <p className='emailTime'>
                {time}
            </p>

        </div>
    )
}

export default EmailRow