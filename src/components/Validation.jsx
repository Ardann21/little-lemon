import React from 'react';

const Validation = (values) => {
  const errors = {};

  if (!values.firstName) { 
    errors.firstName = 'First Name required.';
  }

  if (!values.lastName) { 
    errors.lastName = 'Last Name required.';
  }

  if (!values.email) { 
    errors.email = 'Email Required.';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) { 
    errors.email = 'Email address is invalid.';
  }

  if (!values.number) { 
    errors.number = 'Number Required.'; 
  } else if (!/^\d{10,}$/.test(values.number)) { 
    errors.number = 'Number must be at least 10 digits.';
  }


  if (!values.privacyChecked) {
    errors.privacyChecked = 'You must agree to the privacy policy.';
  }

  return errors;
};

export default Validation;
