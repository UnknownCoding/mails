import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import '../Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='header'>
            <div className='header-left'>
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img src="https://www.freelogovectors.net/svg07/new_gmail_logo.svg" />
            </div>
            <div className='header-middle'>
                <SearchIcon/>
                <input  placeholder="Search Mail" type="text"/>
                <ArrowDropDownIcon className="dropDown"/>
            </div>
            <div className='header-riht'>
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <Avatar src={user?.photoURL} onClick={()=>{signOut(auth)}}/>
            </div>
        </div>
    )
}

export default Header