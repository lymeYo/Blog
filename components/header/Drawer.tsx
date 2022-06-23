import React from 'react';
import DrawerMui from '@mui/material/Drawer';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

function DrawerList(props: any) {
   const getListItem = (text: string, iconForText: ReactJSXElement) => (
      <div className='list-item' key={text} >
         <ListItem>
            <ListItemButton>
               <ListItemIcon>
                  {iconForText}
               </ListItemIcon>
               <ListItemText primary={text} />
            </ListItemButton>
         </ListItem>
      </div>
   )
   
   return (
      <ul className='list'>
         {getListItem('Популярное', <WhatshotIcon />)}
         {getListItem('Свежее', <AccessTimeIcon />)}
         {getListItem('Моя лента', <AnalyticsIcon />)}
         {getListItem('Закладки', <BookmarkIcon />)} 
      </ul>
   )
}



function Drawer(props: any) {
   const isDrawerOpen = props.isDrawerOpen
   const renderDrawerOpen = props.renderDrawerOpen
   const toggleDrawer = () => {
      console.log('toggle drawer process')
   }

   return (
      <div className='drawer'>
         <DrawerMui
            variant="temporary"
            anchor={'left'}
            open={isDrawerOpen}
            onClose={renderDrawerOpen}
         >
            <DrawerList />
         </DrawerMui>
      </div>
   )
}

export default Drawer