import * as actions from "./actions";

import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export const getContacts = () => (dispatch) => {
  dispatch(actions.getContactsRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(actions.getContactsSuccess(data)))
    .catch((error) => dispatch(actions.getContactsError(error)));
};

export const addContact =
  ({ name, phone }) =>
  (dispatch) => {
    const contact = { name, phone };

    dispatch(actions.addContactRequest());

    axios
      .post("/contacts", contact)
      .then(({ data }) => dispatch(actions.addContactSuccess(data)))
      .catch((error) => dispatch(actions.addContactError(error)));
  };

export const deleteContact = (contactId) => (dispatch) => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(actions.deleteContactSuccess(contactId)))
    .catch((error) => dispatch(actions.deleteContactError(error)));
};
