import React from "react"
import Appbar from "./Appbar"
import Drawer from "./Drawer"

function Header() {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false)
  const renderDrawerOpen = () => setDrawerOpen(!isDrawerOpen)
  
   return (
     <div className='header'>
       <Appbar renderDrawerOpen={renderDrawerOpen} />
       <Drawer renderDrawerOpen={renderDrawerOpen} isDrawerOpen={isDrawerOpen} />
     </div>
   )
}

export default Header