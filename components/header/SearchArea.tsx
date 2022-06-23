import { Visibility } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search';
import { Input, OutlinedInput, InputAdornment, TextField } from '@mui/material'
// import { makeStyles } from '@mui/styles';


// const useStyles = makeStyles({
//    root: {
//       background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//       border: 0,
//       borderRadius: 3,
//       boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//       color: 'white',
//       height: 48,
//       padding: '0 30px',
//    },
// });

function SearchArea(props: any) {
   // const classes = useStyles();
   
  return (
    <div className='search-area-wrapper'>
        <div className='search-area'>
           <OutlinedInput
               // className={classes.darkColor}
               required
               fullWidth 
               id="outlined"
               placeholder="Поиск"
               className="input"
               endAdornment={
                  <InputAdornment position="end">
                     <SearchIcon />
                  </InputAdornment>
               }
            />
         </div>
    </div>
  )
}

export default SearchArea