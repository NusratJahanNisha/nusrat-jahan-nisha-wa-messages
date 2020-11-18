import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';



// -------------FOOTER OF HOME PAGE------------


const Footer = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            color: theme.palette.text.primary,
        },

    }));
    const classes = useStyles();

    return (
        <div style={{ marginTop: "120px", marginBottom: "20px", padding: "60px" }}>
            <div style={{ textAlign: "center" }}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <h1>Still unsure? Step Inside and See
                    What The Future Looks Like.</h1>
                    <Button style={{ marginLeft: "8px", backgroundColor: "#531ABE" }} variant="outlined" >
                        Schedule a Demo
                    </Button>
                </Grid>
            </div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3} >
                    <Paper className={classes.paper} style={{ color: "blue" }} >
                        <ul style={{ listStyleType: "none" }}>
                            <li style={{ color: "black" }}> <b> Product </b></li> <br />
                            <li>Subscription Management</li>
                            <li>Recurring Billing and Invoicing</li>
                            <li>Recurring Payments</li>
                            <li>Accounting and Taxes</li>
                            <li>SaaS Reporting</li>
                            <li>Enterprise Billing</li>
                            <li> Integrations</li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3} >
                    <Paper className={classes.paper} style={{ color: "blue" }}>
                        <ul style={{ listStyleType: "none" }}>
                            <li style={{ color: "black" }}> <b> Help & Support</b> </li> <br />
                            <li>Security</li>
                            <li>FAQs</li>
                            <li>Recurring Payments</li>
                            <li>Product Documentation</li>
                            <li>API Documentation</li>
                            <li> Supported Payment Gateways</li>
                            <li> Sitemap</li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3} >
                    <Paper className={classes.paper} style={{ color: "blue" }}>
                        <ul style={{ listStyleType: "none" }}>
                            <li style={{ color: "black" }}> <b>  Resources</b>    </li> <br />
                            <li>Blog</li>
                            <li>Compare Payment Gateways</li>
                            <li>Tackling Payment Failures</li>
                            <li>Enterprise Billing Guide</li>
                            <li>Webinars</li>
                            <li>Blog</li>
                            <li>Glossaries</li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3} >
                    <Paper className={classes.paper} style={{ color: "blue" }}>
                        <ul style={{ listStyleType: "none" }}>
                            <li style={{ color: "black" }}> <b> Company</b></li> <br />
                            <li>Customers</li>
                            <li>Partners</li>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>Terms</li>
                            <li>Partners</li>
                            <li>Careers</li>
                            <li>Privacy</li>
                        </ul>
                    </Paper>
                </Grid>
            </Grid>

            <div style={{ marginTop: "50px" }}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <img src="https://i.ibb.co/Qp4q1Gc/footer-logo.png" alt="" />
                    <img src="https://i.ibb.co/7KzbfsH/footer-logo-fb.png" alt="" />
                </Grid>
            </div>

        </div>
    );
};

export default Footer;