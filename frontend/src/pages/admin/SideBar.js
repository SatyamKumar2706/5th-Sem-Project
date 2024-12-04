import * as React from 'react';
import { Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import ReportIcon from '@mui/icons-material/Report';
import AssignmentIcon from '@mui/icons-material/Assignment';

// Inline style objects for regular styles
const sidebarWrapperStyle = {
    // background: 'black', /* Semi-transparent background *
    backdropFilter: 'blur(10px)', /* Frosted glass effect */
    width: '230px',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    padding: '0',
};

const sidebarButtonStyle = {
    paddingTop: '0px',
    paddingBottom: '0px',
    paddingLeft: '22px',
    paddingRight: '22px',
};

const sidebarIconStyle = {
    minWidth: '50px',
    color: 'black',
};

const sidebarTextStyle = {
    color: 'black',
};

const sidebarDividerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    margin: 0,
};

const sidebarSubheaderStyle = {
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '0.75rem',
    letterSpacing: '1px',
    textTransform: 'uppercase',
};

// Injecting hover styles with a <style> tag
const injectHoverStyles = `
    .sidebar-button:hover {
        background-color: rgba(255, 255, 255, 0.8);
    }
`;

const SideBar = () => {
    const location = useLocation();

    const menuItems = [
        { to: "/", icon: <HomeIcon />, text: "Home" },
        { to: "/Admin/classes", icon: <ClassOutlinedIcon />, text: "Classes" },
        { to: "/Admin/subjects", icon: <AssignmentIcon />, text: "Subjects" },
        { to: "/Admin/teachers", icon: <SupervisorAccountOutlinedIcon />, text: "Teachers" },
        { to: "/Admin/students", icon: <PersonOutlineIcon />, text: "Students" },
        { to: "/Admin/notices", icon: <AnnouncementOutlinedIcon />, text: "Notices" },
        { to: "/Admin/complains", icon: <ReportIcon />, text: "Complains" },
    ];

    const userItems = [
        { to: "/Admin/profile", icon: <AccountCircleOutlinedIcon />, text: "Profile" },
        { to: "/logout", icon: <ExitToAppIcon />, text: "Logout" },
    ];

    return (
        <div style={sidebarWrapperStyle}>
            {/* Adding hover styles with a style tag */}
            <style>{injectHoverStyles}</style>
            
            {menuItems.map((item) => (
                <ListItemButton  key={item.to} component={Link} to={item.to} className="sidebar-button" style={sidebarButtonStyle}>
                    <ListItemIcon style={sidebarIconStyle}>
                        {React.cloneElement(item.icon, {
                            color: location.pathname.startsWith(item.to) ? 'secondary' : 'inherit'
                        })}
                    </ListItemIcon>
                    <ListItemText primary={item.text} primaryTypographyProps={{ style: sidebarTextStyle }} />
                </ListItemButton>
            ))}
            <Divider style={sidebarDividerStyle} />
            <ListSubheader component="div" style={sidebarSubheaderStyle}>
                User
            </ListSubheader>
            {userItems.map((item) => (
                <ListItemButton key={item.to} component={Link} to={item.to} className="sidebar-button" style={sidebarButtonStyle}>
                    <ListItemIcon style={sidebarIconStyle}>
                        {React.cloneElement(item.icon, {
                            color: location.pathname.startsWith(item.to) ? 'secondary' : 'inherit'
                        })}
                    </ListItemIcon>
                    <ListItemText primary={item.text} primaryTypographyProps={{ style: sidebarTextStyle }} />
                </ListItemButton>
            ))}
        </div>
    );
}

export default SideBar;
