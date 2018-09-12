import React from 'react';
import ContactList from '../containers/contact-list';
import ContactNew from '../containers/contact-new';
require('../../scss/style.scss');

const App = () => (
    <div className="app">
        <h2>Create Contact</h2>
        <ContactNew />
        <hr />
        <h2>Contact List</h2>
        <ContactList />
    </div>
);

export default App;
