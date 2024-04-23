import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

export default function Spacer() {

    return (
        <Row className='spacer'>
            <Col />
            <Col>
                <br />
            </Col>
            <Col />
        </Row>
    );
}