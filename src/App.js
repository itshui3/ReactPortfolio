import React from 'react';
//Styles
import { Jumbotron, ListGroup, ListGroupItem } from 'reactstrap'

function App() {
  return (
    <div className="App">
      <Jumbotron className=''>
        <h1>Hi, I'm Hui.<br></br> I build static websites[and apps] in JS/CSS/HTML with the React library</h1>

        <ListGroup>
          <ListGroupItem>
            <a href='https://react-todo-zeta-wheat.now.sh/'>React Todo App</a>
            <a href=''></a>
          </ListGroupItem>
        </ListGroup>

      </Jumbotron>
    </div>
  );
}

export default App;
