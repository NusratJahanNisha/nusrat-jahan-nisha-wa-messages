import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';


// -----------------OPERATION SECTION OF HOME PAGE-----------


const OperationSection = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }));
    const classes = useStyles();
    return (

        <div style={{ marginTop: "120px", marginBottom: "120px" }}>
            <Grid container spacing={3}
                direction="row"
                justify="flex-start"
                alignItems="center">
                <Grid item xs={12} sm={6} >
                    <Paper className={classes.paper} style={{ color: "black" }}>
                        <p><small style={{ color: "#500AD2" }}>No more lost opportunities</small> </p>
                        <h4>Streamline Revenue Operations</h4>
                        <p>Plug revenue leaks by aligning GTM & Finance. Uncover growth opportunities across processes, geographies, and business models.</p>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                        >
                            <p>  <img src="https://i.ibb.co/KFzrnLV/right-Mark.png" alt="" /> SaaS Analytics</p>
                            <p> <img src="https://i.ibb.co/KFzrnLV/right-Mark.png" alt="" />Quote-to-cash</p>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                        >
                            <p> <img src="https://i.ibb.co/KFzrnLV/right-Mark.png" alt="" />Order-to-revenue
                            </p>
                            <p> <img src="https://i.ibb.co/KFzrnLV/right-Mark.png" alt="" />Revenue Recognition</p>
                        </Grid>
                        <Button style={{ marginLeft: "8px" }} variant="outlined" color="primary">
                            Learn more
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}> <img style={{ width: "100%" }} src="https://i.ibb.co/yhzRGMx/side-image3.png" alt="" /> </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default OperationSection;