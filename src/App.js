import './index.css';

import { useFormik } from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      if(Object.keys(formik.errors).length == 0) alert("Login Successful")
    },
    validate: values => {
      let errors = {};
      const re = /[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,6}/;
      if(!re.test(values.email) && values.email.length > 0) {
        errors.emailError = "Username should be an email";
      }
      if(values.email.length < 1 || !values.email) {
        errors.emailError = "Field required";
      }
      if(values.password.length < 1 || !values.password) errors.pswError = "Field required";
      return errors;
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input id="emailField" name="email" type="text" onChange={formik.handleChange} value={formik.values.email} />
        <div id="emailError">{formik.errors.emailError}</div>
        <div>Password</div>
        <input id="pswField" name="password" type="text" onChange={formik.handleChange} value={formik.values.password} />
        <div id="pswError">{formik.errors.pswError}</div>
        <button id="submitBtn" type="submit">Click Me</button>
      </form>
    </div>
  );
}

export default App;
