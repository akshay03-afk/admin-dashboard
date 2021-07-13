import React from 'react'
import { Avatar } from '@material-ui/core'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ChatIcon from '@material-ui/icons/Chat';
import SettingsIcon from '@material-ui/icons/Settings';

const RIghtSidebar = () => {

    const rightSidebar = [
        {
            icon: <Avatar />
        },
        {
            icon: <NotificationsActiveIcon />
        },
        {
            icon: <ChatIcon />
        },
        {
            icon: <SettingsIcon />
        },
    ]

    return (
        <div>
            <ul className="rightSidebarMenu">
                {
                    rightSidebar.map((val, key) =>{
                        return <li className="icons" key={key}>{val.icon}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default RIghtSidebar;
