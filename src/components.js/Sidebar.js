import { Button, IconButton } from '@mui/material';
import React from 'react'
import '../Sidebar.css';
import AddIcon from '@mui/icons-material/Add';
import SidebarOps from './SidebarOps';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NotesIcon from '@mui/icons-material/Notes';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { modalState } from '../atoms/modalAtoms';
import { useRecoilState } from 'recoil';


const Sidebar = () => {
    const [open,setOpen] = useRecoilState(modalState)
    return (
        <div className='sidebar'>
            <Button startIcon={<AddIcon fontSize='large'/>} className="compose" onClick={()=>setOpen(!open)}>
                Compose
            </Button>
            <div id='yes'>
                <SidebarOps Icon={InboxIcon} title="Inbox" number={54}/>
                <SidebarOps Icon={StarIcon} title="Starred" />
                <SidebarOps Icon={LabelImportantIcon} title="Important" />
                <SidebarOps Icon={NearMeIcon} title="Sent" />
                <SidebarOps Icon={NotesIcon} title="Drafts" />
                <SidebarOps Icon={ExpandMoreIcon} title="More" />

            </div>
            <div className='sidebar-foot'>
                <div className='sidebar-icons'>
                    <IconButton>
                        <PersonIcon/>
                    </IconButton>
                    <IconButton>
                        <DuoIcon/>
                    </IconButton>
                    <IconButton>
                        <PhoneIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar