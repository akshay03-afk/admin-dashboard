import React from 'react'
import { Button, Container, Divider } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import ForumIcon from '@material-ui/icons/Forum';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Switch from "@material-ui/core/Switch";


const AntSwitch = withStyles((theme) => ({
    root: {
      width: 35,
      height: 16,
      padding: 0,
      
      
    },
    switchBase: {
      padding: 2,
      color: theme.palette.common.white,
      "&$checked": {
        transform: "translateX(19px)",
        color: theme.palette.common.white,
        "& + $track": {
          opacity: 1,
          backgroundColor: "#52d869",
        }
      }
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: "none"
    },
    track: {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.grey[500]
    },
    checked: {}
  }))(Switch);

const Modal = () => {

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: false,
        checkedD: true,
        checkedE: true,
        checkedF: false
        
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    return (
        <Container className="container-modal">
            <div className="box">
                <div className="header">
                    <div className="left">
                         <h2> <ForumIcon /> Audience Q&A </h2>
                    </div>
                    <div className="right">
                        <AntSwitch
                                checked={state.checkedA}
                                onChange={handleChange}
                                name="checkedA"
                        />
                        <KeyboardArrowUpIcon className="header-icon" />
                    </div>
                    <Divider />
                    
                     
                </div>
                <Divider  className="divider" />

                <div className="forms">
                    <div className="text">
                        <h3>Moderation</h3>
                        <p>Easily Revive all question before they go live</p>
                    </div>
                    <AntSwitch
                                checked={state.checkedB}
                                onChange={handleChange}
                                name="checkedB"
                    />

                </div>
                <div className="forms">
                    <div className="text">
                        <h3>Moderation</h3>
                        <p>Easily Revive all question before they go live</p>
                    </div>
                    <AntSwitch
                                checked={state.checkedC}
                                onChange={handleChange}
                                name="checkedC"
                    />

                </div>
                <div className="forms">
                    <div className="text">
                        <h3>Moderation</h3>
                        <p>Easily Revive all question before they go live</p>
                    </div>
                    <AntSwitch
                                checked={state.checkedD}
                                onChange={handleChange}
                                name="checkedD"
                    />

                </div>
                <div className="forms">
                    <div className="text">
                        <h3>Moderation</h3>
                        <p>Easily Revive all question before they go live</p>
                            <div className="buttons">
                            <Button style={{ color: "purple", borderColor: "purple"}}
                                variant="outlined"
                                color="primary"
                                >
                                    160
                                </Button>
                                <Button style={{ color: "purple", borderColor: "purple"}}
                                variant="outlined"
                                color="primary"
                                >
                                    240 
                                </Button>
                                <Button style={{ backgroundColor: "purple", borderColor: "purple"}}
                                variant="contained"
                                color="primary"
                                >
                                    300
                            </Button>
                            </div>
                    </div>
                    <AntSwitch
                                checked={state.checkedE}
                                onChange={handleChange}
                                name="checkedE"
                    />

                </div>
                <div className="forms">
                    <div className="text">
                        <h3>Moderation</h3>
                        <p>Easily Revive all question before they go live</p>
                    </div>
                    <AntSwitch
                                checked={state.checkedF}
                                onChange={handleChange}
                                name="checkedF"
                    />

                </div>

                <div className="save">
                    <Button style={{ marginLeft: "800px", width: "100px", backgroundColor: "purple"}}
                        size="large"
                        variant="contained"
                        color="primary"
                        >
                            SAVE
                    </Button>
                </div>
                
            </div>
            {/* <div className="box">
            <div className="heading">
            <Divider />
            <div className="header">
                <h2>Moderatition</h2>
                <p className="text">Easily Revive all question before they go live</p>
                <div className="modal-icons"></div>
            </div>
            <div className="header">
                <h2>Labels</h2>
                <p className="text">Easily Revive all question before they go live</p>
                <div className="modal-icons"></div>
            </div>

            <div className="header">
                <h2>Downvotes</h2>
                <p className="text">Easily Revive all question before they go live</p>
                <div className="modal-icons"></div>
            </div>
            <div className="header">
                <h2>Replies</h2>
                <p className="text">Easily Revive all question before they go live</p>
                <div className="modal-icons"></div>
            </div>
            <div className="header">
                <h2>Anynomous question</h2>
                <p className="text">Easily Revive all question before they go live</p>
                <div className="modal-icons"></div>
            </div>
            <div className="header">
                <h2>Maximun question length</h2>
                <p className="text">Easily Revive all question before they go live</p>
                <Button
                 variant="outlined"
                 color="primary"
                >
                    160
                </Button>
                <Button
                 variant="outlined"
                 color="primary"
                >
                    240
                </Button>
                <Button
                 variant="contained"
                 color="primary"
                >
                    300
                </Button>
            </div>
            <div className="header">
                <h2>Moderatition</h2>
                <p className="text">Easily Revive all question before they go live</p>
                <div className="modal-icons"></div>
            </div>
            </div> */}
            
        </Container>
    )
}

export default Modal;
