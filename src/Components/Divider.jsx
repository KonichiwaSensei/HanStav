import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

export default function Divider() {

    return (
        <Row className='divider'>
            <Col />
            <Col>
                <hr />
            </Col>
            <Col />
        </Row>
    );
}