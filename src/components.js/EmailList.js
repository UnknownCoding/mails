import ArrowDropDown from '@mui/icons-material/ArrowDropDown'
import { Checkbox, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../EmailList.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import Sections from './Sections';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from './EmailRow';
import { collection, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

const EmailList = () => {
    const [emails,setEmails] = useState([])
    useEffect(()=>{
        return onSnapshot(collection(db,'emails'),orderBy('timestamp','desc'),(snapshot)=>{
            setEmails(snapshot.docs)
        })
    },[db])

    return (
        <div className='EmailList'>
            <div className='EmailList-settings'>
                <div className='settings-left'>
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDown/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className='settings-right'>
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>
            <div className='EmailList-sections'>
                <Sections Icon={InboxIcon} title="Primary" color="red" selected/>
                <Sections Icon={PeopleIcon} title="Social" color="#1A73E8"  />
                <Sections Icon={LocalOfferIcon} title="Promotions" color="green"/>
            </div>
            <div className='properList'>
                {emails.length > 0 && emails.map((emails)=>(
                    <EmailRow key={emails?.id} id={emails?.id} title={emails?.data().to} subject={emails?.data().subject} description={emails?.data().message} time={new Date(emails?.data().timestamp *1000).toUTCString()}/>
                ))}

            </div>
        </div>
    )
}

export default EmailList