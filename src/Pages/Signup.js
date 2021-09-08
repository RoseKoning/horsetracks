import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

export default function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm(){
        return email.length > 7 && password.length > 7;
    }

    function handleSubmit (event) {
        event.preventDefault();
        console.log(this.email)
    }
    return(
        <div>
            <h1>Signup</h1>
            <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
        </div>
    )
}