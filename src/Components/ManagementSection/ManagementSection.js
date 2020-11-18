import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';


// -------------------MANAGEMENT SECTION OF HOME PAGE----------

const ManagementSection = () => {
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
        <div style={{ marginTop: "120px" }}>
            <Grid container spacing={3}
                direction="row"
                justify="flex-start"
                alignItems="center">
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}> <img style={{ width: "100%" }} src="https://i.ibb.co/CPYJGzN/side-image2.png" alt="" /> </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper} style={{ color: "black" }}>
                        <p><small style={{ color: "#500AD2" }}>No more developer dependency</small> </p>
                        <h4>Smarter Subscription Management</h4>
                        <p>Experiment rapidly with pricing structures, product catalogs, and subscription lifecycles with a business-user-first experience.</p>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                        >
                            <p> <img src="https://i.ibb.co/KFzrnLV/right-Mark.png" alt="" />Price modeling </p>
                            <p> <img src="https://i.ibb.co/KFzrnLV/right-Mark.png" alt="" />  Product Catalog</p>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                        >
                            <p> <img src="https://i.ibb.co/KFzrnLV/right-Mark.png" alt="" /> Trial management
                            </p>
                            <p>  <img src="https://i.ibb.co/KFzrnLV/right-Mark.png" alt="" /> Lifecycle automation</p>
                        </Grid>
                        <Button style={{ marginLeft: "8px" }} variant="outlined" color="primary">
                            Learn more
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default ManagementSection;