import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function MyBooks( { books }) {
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleClick = (event) => {
        if (books.length > 0) 
        setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button aria-controls="simple-menu" color = "inherit" aria-haspopup="true" onClick={handleClick}>
          My books
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
        { books.map ( book => (           
            <MenuItem key = {book} onClick={handleClose}> { book } </MenuItem> 
        ))}
        </Menu>
      </div>
    );
  }
  