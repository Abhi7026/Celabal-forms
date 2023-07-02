import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data or submit it to a server here
     console.log(formData);

    // Display the form details in a pop-up alert
    alert(JSON.stringify(formData));

    // Reset the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: '',
      message: '',
    });
  };

  return (
    <div>
     
      <h1>Form using Material UI</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contact Number"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={6}
              fullWidth required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="success">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormComponent;
