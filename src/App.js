
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className='App'>
     <Row style={{justifyContent:"center"}}>
      <Col xs={8} className='mt-5'>
      <Card  className='p-4'>
        <h1 className='mb-4'>Sign Up</h1>
        <RegistrationForm/>
      </Card>
      </Col>
     </Row>
    </div>
  );
}

export default App;


function RegistrationForm(){
 const {errors,validate,reset,values,handleInput}=UserForm()
 const submitForm=(event)=>{
event.preventDefault()

if(validate()){
  alert("yes");
}

 }

  return(
<Form onSubmit={submitForm}>
<InputField
placeholder="Enter your  Full Name"
type="text"
name="fullName"
label="Full Name"
value={values.fullName}
onChange={handleInput}
errors={errors.fullName}

/>
<InputField
placeholder="Enter your email"
type="email"
name="email"
label="Email Address"
value={values.email}
onChange={handleInput}
errors={errors.email}
/>
<InputField
placeholder="Enter Your Password"
type="password"
name="password"
label="Password"
value={values.password}
onChange={handleInput}
errors={errors.password}
/>
<InputField
placeholder="Repeat Password"
type="password"
name="confirmPassword"
label="Confirm Password"
value={values.confirmPassword}
onChange={handleInput}
errors={errors.confirmPassword}
/>
<div  className="mt-3">
<Button type="submit">Submit</Button>
{"  "}
<Button onClick={reset} variant='outline-secondary'>Reset</Button>
</div>


</Form>
  )
}


function InputField({label,errors,...props}){
  return(
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...props}  className={errors? "is-invalid":""}/>
        <div className='text-danger'>{errors}</div>
      </Form.Group>
  )
}

const UserForm=()=>{
const [errors,setErrors]=useState({})

const [values,setValues]=useState({
  fullName:"",
  email:"",
  password:"",
  confirmPassword:""
})
const handleInput=(event)=>{
 setValues({...values,
  [event.target.name]:event.target.value})

}
const reset=()=>{
setValues({
  fullName:"",
  email:"",
  password:"",
  confirmPassword:""
})

}

const validate=()=>{
  const newError={}
  
   if(values.fullName.length<3){
   newError.fullName="enter full name"
   }

   if(!values.email.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
    newError.email="enter valid email"
   }

   if(values.password.length<6){
    newError.password="enter valid password"
   }

   if(values.password!==values.confirmPassword){
    newError.confirmPassword="password mismatch"
   
   }
   setErrors(newError)
   return Object.keys(newError).length===0

}

return{values,handleInput,reset,validate,errors}

}
