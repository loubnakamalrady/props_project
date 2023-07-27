import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
function Player(props) {
    return (
        <div className='container'>
        <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            <p>Team: {props.team}</p>
            <p>Nationality: {props.nationality}</p>
            <p>Jersey Number: {props.jerseyNumber}</p>
            <p>Age: {props.age}</p>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    );
  } 
  Player.defaultProps = {
    name: "Unknown",
    team: "Unknown",
    nationality: "Unknown",
    jerseyNumber: 0,
    age: 0,
    image: "images/Cristiano_Ronaldo_2018.jpg",
  };
  
  export default Player;