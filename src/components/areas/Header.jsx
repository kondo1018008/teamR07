import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Home from '../page/Home';
import AnimeMatching from '../page/AnimeMatching';
import ChurchDetail from '../page/ChurchDetail';
import Map_C from '../page/Map_C';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });
const Header = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div id='header'>

              <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="HOME" />
        <Tab label="教会" />
        <Tab label="地図" />
      </Tabs>
    </Paper>
    <TabPanel value={value} index={0}>
        <Home/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ChurchDetail/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Map_C/>
      </TabPanel>
      {/*      <div >
                <a href={"/home"} >HOME</a>
                <a href={"/anime"} >アニメ</a>
                <a href={"/church"} >教会</a>
                <a href={"/mapC"} >地図</a>
            </div>
      */}
        </div >
    )
}

export default Header;
