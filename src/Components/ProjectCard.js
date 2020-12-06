import React from 'react';
import { Card, Typography, Button} from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';


function ProjectCard(props){

    const useStyles = makeStyles({
        root : {
            maxWidth : '400px',
            margin : '20px',
            background: "#424242"
        },
        title:{
            margin: 20,
            fontSize : 30,
            textAlign: "center",
            fontFamily: 'Comfortaa',
            fontWeight: 700,
            color: "white"
        },
        description:{
            margin: 20,
            textAlign : "justify",
            color: "white",
            fontFamily: 'Comfortaa'
        },
        btnDiv: {
            margin: 20,
        },
        btn : {
            marginRight : 5
        }
    })

    const classes = useStyles();

    return(
        <a href={props.link} style={{ textDecoration: 'none'}}>
            <Card className={classes.root} elevation={10}  >
                <Typography className={classes.title}>{props.title}</Typography>
                <Typography className={classes.description}>
                    {props.description}
                </Typography>
                <div className={classes.btnDiv}>
                </div>
            </Card>
        </a>
    )
}

export default ProjectCard;