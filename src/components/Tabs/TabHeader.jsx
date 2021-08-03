import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import '../TodoApp.scss';

/*
This component is responsible for showing creating tabs in header panel -
*/
const TabHeader = ({ 
    handleChange, 
    value 
}) => (
    <AppBar position="static">
        <div className="container-head">
            <div className="tabs">
                <Tabs value={value} onChange={handleChange} aria-label="tabs">
                    <Tab label="All" id="tab-1" />
                    <Tab label="Active" id="tab-2" />
                    <Tab label="Completed" id="tab-3" />
                </Tabs>
            </div>
        </div>    
    </AppBar>
)

TabHeader.propTypes = {
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
}

export default TabHeader;