import React from 'react';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PeopleIcon from '@material-ui/icons/People';
import TimelineIcon from '@material-ui/icons/Timeline';
import DescriptionIcon from '@material-ui/icons/Description';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import {Link} from "react-router-dom"



const LeftSidebar = () => {
    const sidebar = [
        {
            title: "Event",
            icon: <AssessmentIcon /> ,
            link: "/events"
        },
        {
            title: "Teams",
            icon: <PeopleIcon /> ,
            link: "/teams"
        },
        {
            title: "Analytics",
            icon: <TimelineIcon /> ,
            link: "/analytics"
        },
        {
            title: "Results",
            icon: <DescriptionIcon /> ,
            link: "/results"
        },
    ]
    

    return (
        <div>
            <ul className="sidebarMenu">
                <Link to="/">
                    <MenuBookIcon  className="logo"/>
                </Link>  
                        
                {
                    sidebar.map((val, key) =>{
                        return <li  className="row"
                                    id={window.location.pathname === val.link ? "active" : ""}
                                    key={key} 
                                    onClick={() => {
                                        window.location.pathname = val.link 
                                    }}
                                >
                                    <div className="icon">{val.icon}</div>
                                    <div className="title">{val.title}</div>
                                </li>
                    })
                }
            </ul>
        </div>  
    )
}

export default LeftSidebar;
