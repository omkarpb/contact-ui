import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { insertContact, selectContact, updateContact } from '../actions';
import { bindActionCreators } from 'redux';

class ContactNew extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleReset(e) {
        e.preventDefault();
        this.props.reset();
        this.props.selectContact({});
    }
    onSubmit(contact) {
        if (contact.id) {
            this.props.updateContact(contact);
        } else {
            this.props.insertContact(contact);
        }
        this.props.reset();
        this.props.selectContact({});
    }
    render() {
        const { handleSubmit, pristine, submitting } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div className="control">
                    <label>Name</label>
                    <div className="input">
                        <Field
                            name="name"
                            component="input"
                            type="text"
                            placeholder="Your name"
                        />
                    </div>
                </div>
                <div className="control">
                    <label>Phone number</label>
                    <div className="input">
                        <Field
                            name="phone"
                            component="input"
                            type="text"
                            placeholder="Your phone number"
                        />
                    </div>
                </div>
                <button className="formButton" type="submit" disabled={pristine || submitting}>Submit</button>
                <button className="formButton" onClick={this.handleReset}>Clear</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
      return {
        initialValues: state.activeContact
      };
  }

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ insertContact, selectContact, updateContact }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(reduxForm({ form: 'ContactNew', enableReinitialize: true })(ContactNew));
