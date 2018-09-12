import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect, dispatch } from 'react-redux';
import { loadContacts, selectContact, deleteContact } from '../actions';

class ContactList extends Component {

    render() {
        const isData = this.props.contacts.contacts.length > 0;
        return (
            <div>
                {!isData &&  <div>No contacts in directory</div>}
                
                <ul>
                    {this.props.contacts.contacts.map((value, index) =>
                        <li key={index} className="listItem">
                            <span className="item">{value.name}</span>
                            <span className="item">{value.phone}</span>
                            <button className="itemButton" onClick={() => this.props.selectContact(value)}>Update</button>
                            <button className="itemButton" onClick={() => this.props.deleteContact(value)}>Delete</button>
                        </li>)}
                </ul>
            </div>
        )
    }

    componentWillMount() {
        this.props.loadContacts();
    }
}

function mapStateToProps(state) {
    return {
        contacts: state.contacts,
        error: state.error
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectContact, deleteContact, loadContacts }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ContactList);