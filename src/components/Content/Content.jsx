import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import '../TodoApp.scss';
import TabPanel from '../Tabs/TabPanel';
import TabHeader from '../Tabs/TabHeader';
import AllTodo from './AllTodo';
import { setView } from '../../ducks/view';
import { VIEW_SHOW_ACTIVE, VIEW_SHOW_COMPLETED, VIEW_SHOW_ALL } from '../../constants/view'; 

/*
This component is the entry point & responsible for rendering Tabs and content -
changeTab() : being used to switch the view based on Tab chose
actionSetView() : being used to update redux store
*/
const Content = ({ actionSetView }) => {
  const [tabValue, setTabValue] = React.useState(0);

  const changeTab = (event, newValue) => {
    setTabValue(newValue);
    if(newValue === 0) actionSetView(VIEW_SHOW_ALL);
    if(newValue === 1) actionSetView(VIEW_SHOW_ACTIVE);
    if(newValue === 2) actionSetView(VIEW_SHOW_COMPLETED);
  }

  return (
    <React.Fragment>
      <TabHeader value={tabValue} handleChange={changeTab} />
      <TabPanel value={tabValue} index={0}>
          <AllTodo />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
          <AllTodo />
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
          <AllTodo />
      </TabPanel>
    </React.Fragment>
  );
}

Content.propTypes = {
  actionSetView: PropTypes.func.isRequired,
}

const mapDispatchAsProps = dispatch => {
  return {
      actionSetView: (value) => dispatch(setView(value)),
  };
}

const hocChain = compose(
  connect(null, mapDispatchAsProps),
);

export { Content as TestableContent };

export default hocChain(Content);