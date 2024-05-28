import React from 'react';

const Register = () => {
  return (
    <>
    <h3>Register Form</h3>
    <form>
    <table>
    <tr><td>
      <label htmlFor='username'className="username">UserName:</label></td>
      <td><input type="text" id="username" name="username" placeholder='Enter Username'/></td></tr>
      <tr><td><label htmlFor='number'>PhoneNumber:</label></td>
      <td><input type='text' id='number' placeholder='Enter Phonenumber'/></td></tr>
      <tr><td><label htmlFor='email'>Email:</label></td>
      <td><input type='email' id='email' placeholder='Enter Email'/></td></tr>
      <tr><td><label htmlFor='password'className="password">Password:</label></td>
      <td><input type="password" id="password" name="password" placeholder='Enter password'/></td></tr>
      <tr><td><label htmlFor='confirmPassword'className="password">Confirm Password:</label></td>
      <td><input type="password" id="confirmPassword" name="password" placeholder='Re-enter password'/></td></tr>
      <tr><td><label htmlFor='course'>Course</label></td>
      <td><input type='text' id='course'placeholder='Enter course'/></td></tr><br/>
      <button type="submit" className='submit'>Submit</button>
      </table>
      <br/>
      </form>
    
    </>
    
  );
}

export default Register;