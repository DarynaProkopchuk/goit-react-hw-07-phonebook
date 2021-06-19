import React from 'react';
import * as actions from "../../redux/phoneBook/actions";
import { connect } from "react-redux";

const Filter = ({ filter, onChange }) => {
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={onChange}
      placeholder="Enter name for search"
    />
  );
};

const mapStateToProps = (state) => ({
  filter: state.contacts.filter,
});
const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(actions.filterContacts(e.currentTarget.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
