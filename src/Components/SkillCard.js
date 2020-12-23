import React from 'react';
import { Card, Typography, Button, LinearProgress, CardMedia} from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';


function SkillCard(props){
    const useStyles = makeStyles({
        root : {
          width : '200px',
          margin : '20px',
          padding: '10px'
        },
        title:{
          fontSize : 30,
          textAlign: "center",
          fontFamily: 'Comfortaa',
          fontWeight: 700,
          color: "black"
        },
        logo:{
          display: 'flex',
          flexDirection: 'column',
          alignItems: "center"
        }
    })
    const classes = useStyles();

    return(
        <div className={classes.root} >
          <div className={classes.logo}>
          <img width="48px" src={props.link}/>
          <Typography className={classes.title}>{props.name}</Typography>
          </div>
        </div>
    )
}

export default SkillCard;