import { IconButton } from "@mui/material"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function StatisticsButtons(props: any) {
   const { downClick, upClick, rate = 0 } = props
   
   return (
      <div className="universal-component statistics-buttons">
         <div onClick={upClick} className="statistics-buttons-item up"><IconButton><KeyboardArrowUpIcon /></IconButton></div>
         <div className="statistics-buttons-counter">{rate}</div>
         <div onClick={downClick} className="statistics-buttons-item down"><IconButton><KeyboardArrowDownIcon /></IconButton></div>
      </div>
   )
}

export default StatisticsButtons