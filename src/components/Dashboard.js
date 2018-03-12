import React from 'react';
import {Card, CardHeader, CardBody, CardTitle,CardText,CardFooter,Button, Row, Col} from 'reactstrap';
import './Dashboard.css';



class Dashboard extends React.Component {
    render() {
        return (
            <div>
                Dashboard
                <Row className="row-padding">
                    <Col>
                        <Card>
                        <CardHeader tag="h3">Speaking</CardHeader>
                        <CardBody>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </CardBody>
                        <CardFooter className="text-muted">Footer</CardFooter>
                    </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardHeader tag="h3">Reading</CardHeader>
                            <CardBody>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </CardBody>
                            <CardFooter className="text-muted">Footer</CardFooter>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader tag="h3">Writing</CardHeader>
                            <CardBody>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </CardBody>
                            <CardFooter className="text-muted">Footer</CardFooter>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardHeader tag="h3">Listening</CardHeader>
                            <CardBody>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </CardBody>
                            <CardFooter className="text-muted">Footer</CardFooter>
                        </Card>
                    </Col>
                </Row>


            </div>

        );
    }
}

export default Dashboard