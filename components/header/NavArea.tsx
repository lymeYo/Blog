import { Button } from "@mui/material"
import CreateButton from "./CreateButton"
import LoginArea from "./LoginArea"

function NavArea(props: any) {
   return (
      <div  className="nav-area">
         <CreateButton />
         <LoginArea />
      </div>
   )
}

export default NavArea