import React from "react";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import makeStyles from "@material-ui/core/styles";

const useStyles = makeStyles(theme => (
  {
    Modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
))

const ModalBox = props => {

  const classes = useStyles();

  return (
    <Modal className={classes.Modal}>
      <Fade>

      </Fade>
    </Modal>
  )
}

export default ModalBox;