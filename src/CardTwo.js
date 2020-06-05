import React from 'react';
import { Card, Button} from 'react-bootstrap';
import './CardTwo.css';





const CardTwo = ({id, name, description, report_url, screen_shot}) => {
    return (

        <Card  className='tc ma2 grow bw2 shadow-5' style={{width: '18rem', height: '26rem', backgroundColor: '#cdecff', textAlign:"center", display: "inline-block", padding:8}}>
            <h3>{name}</h3>
                <Card.Body>
                  <Card.Img variant="top" src={screen_shot} style={{width:250, height:230}}/>
                  <Card.Text>{description}</Card.Text>
                  <Button style={{backgroundColor: '#357edd'}} href = {report_url} block>View Report</Button>
                </Card.Body>
            
        </Card>
    );

}

export default CardTwo;

