import { Link } from "react-router-dom";
import styles from "./css/navbar.module.css"
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function MenuPopupState() {
  return (
<div className={styles.center}>
    <PopupState className={styles.with} variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Menu
          </Button>
          <Menu  {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}><Link className={styles.text} to="/">Home</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link className={styles.text} to="/about">about</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link className={styles.text} to="/contact">contact</Link></MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
</div>
    
  );
}