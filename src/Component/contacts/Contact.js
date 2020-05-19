import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import { Consumer } from '../../Context';

class Contact extends Component {
  state = {
    showContactInfo: false,
  };
  onDeleteClick= (id,dispatch) =>
  {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => dispatch({type:'DELETE_CONTACT',payload:id}));
    



    
    };

  render() {
    const {id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;


   
    return (
      <Consumer>
        {value =>{
          const { dispatch } =value;
          return(
            <div className="card card-body mb-3">
        <h4>
          Name:{name}
          <i
            onClick={() =>
              this.setState({ showContactInfo: !this.state.showContactInfo })
            }
            className="fal fa-sort-down"
            style={{cursor:'pointer'}}
          />
          <i 
           onClick={this.onDeleteClick.bind
            (this,id,dispatch)
          }
          
          className="fas fa-times" style={{cursor:'pointer' ,color:'red',float:'right'}} 

         />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item"> Email: {email} </li>
            <li className="list-group-item"> Phone: {phone} </li>
          </ul>
        ) : null}
      </div>
          )
        }}
      </Consumer>
      
    );
  }
}

Contact.defaultProps = {
  name: "Admin",
  email: "admin@gmail.com",
  phone: "123456789",
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,

};

//</li>const nameStyling = { //Styling with the helpof variables
//  color: 'red',
//TextTransform: 'uppercase'
//}
export default Contact;
