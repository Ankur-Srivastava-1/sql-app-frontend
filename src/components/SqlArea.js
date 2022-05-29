import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import Output from './Output.js';

function SqlArea(props) {
    let arr = [true]
    const [flag, setFlag] = React.useState([true])
    function changeFlag(num) {
        arr[num] = true
        setFlag(arr)
    }
    return(
      <Container>
        <p></p>
        <h3>SQL Statement {props.number}</h3>
        <p></p>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Write Query Here:- </Form.Label>
            <Form.Control as="textarea" className='lined' rows={5} defaultValue="SELECT * FROM ATLAN;" />
          </Form.Group>
        </Form>
        <p>Click "Run Query" to see the result.</p>
        <Button variant="dark" onClick={() => changeFlag(props.number)}>Run Query</Button>
        <p></p>
        <h3>Output </h3>
        <div id="output">
          <p></p>
          {flag[props.number]? <Button variant="dark" href="./Output.html" download>Download Result</Button> : null }
          <p></p>
          {flag[props.number]? <Output/> : null }
        </div>
      </Container>
    );
  }

  export default SqlArea;