import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';


// -------------------BILLING SECTION OF HOME PAGE---------

const BillingSection = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.primary,
        },

    }));
    const classes = useStyles();
    return (
        <div style={{ marginTop: "120px" }}>
            <Grid container spacing={3}
                direction="row"
                justify="flex-start"
                alignItems="center">
                <Grid item xs={12} sm={6} >
                    <Paper className={classes.paper} style={{ color: "black" }} >
                        <p><small style={{ color: "#500AD2" }}>No more spreadsheet errors</small> </p>
                        <h4>Automate Recurring Billing</h4>
                        <p>Scale your SaaS through 480+ recurring billing scenarios that automate who you bill, when, and how. No humans, no spreadsheets, no missed payments!</p>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                        >
                            <p> <img src="https://i.ibb.co/KFzrnLV/right-Mark.png" alt="" />Billing Schedules </p>
                            <p> <img src="https://i.ibb.co/KFzrnLV/right-Mark.png" alt="" />  Proration & Invoicing</p>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                        >
                            <p> <img src="https://i.ibb.co/KFzrnLV/right-Mark.png" alt="" />Tax management
                            </p>
                            <p> <img src="https://i.ibb.co/KFzrnLV/right-Mark.png" alt="" /> Payment Methods</p>
                        </Grid>
                        <Button style={{ marginLeft: "8px" }} variant="outlined" color="primary">
                            Learn more
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} style={{ border: "white" }}>
                    <Paper className={classes.paper}> <img style={{ width: "100%" }} src="https://i.ibb.co/CVjqM77/side-image.png" alt="" /> </Paper>
                </Grid>
            </Grid>
        </div >
    );
};

export default BillingSection;