import react from 'react';
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/Contactlist";
import Filter from "./components/Filter/Filter";
import LinearProgress from "@material-ui/core/LinearProgress";
import { connect } from "react-redux";
import { getContacts } from "./redux/phoneBook/phoneApiOperations";
import { getLoading } from "./redux/phoneBook/phoneSelector";

import { Component } from "react";
import styles from "./App.module.css";

class App extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    return (
      <div className={styles.App}>
        {this.props.isLoading && <LinearProgress />}
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  getContacts: () => dispatch(getContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
