import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


// ------------TABPANEL OF HOME PAGE----------


function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div style={{ margin: "50px" }}
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 1200,
    },
}));

export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="
                    Rethink Pricing" {...a11yProps(0)} />
                    <Tab label="Automate FinOps" {...a11yProps(1)} />
                    <Tab label="Go Global" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <img style={{width:"100%"}} src="https://i.ibb.co/cxt61Gw/carousel1.png" alt="" />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <img style={{width:"100%"}} src="https://i.ibb.co/kSZsTnm/carousel2.png" alt="" />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <img style={{width:"100%"}} src="https://i.ibb.co/yyKRH1p/carousel3.png" alt="" />
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}