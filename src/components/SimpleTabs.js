import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import SimpleTable from "./SimpleTable";
import BasicTextFields from "./BasicTextFields";

//Material UI component//
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

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
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

///////////////////////////////////

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          aria-label="simple tabs example"
          onChange={handleChange}
        >
          <Tab label="Electric" {...a11yProps(0)} />
          <Tab label="Water" {...a11yProps(1)} />
          <Tab label="Phychics" {...a11yProps(2)} />
          <Tab label="Dragon" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <SimpleTable></SimpleTable>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SimpleTable></SimpleTable>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SimpleTable></SimpleTable>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <SimpleTable></SimpleTable>
      </TabPanel>
      <BasicTextFields></BasicTextFields>
    </div>
  );
}
