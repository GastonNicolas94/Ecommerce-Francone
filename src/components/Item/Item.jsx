import { Link } from "react-router-dom"

import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function Item({prod}) {
    return (
        <>
        <Col xs={12} md={6} xl={3}  className='py-4' key={prod.id}>
            <Card id="card">
                <Card.Img src={prod.img} />
                {
                    prod.stock === 0 ?
                    <span className="sold-out-overlay">Sin stock</span>
                    :
                    ''
                }
                <Card.Body>
                <Card.Title>{`${prod.name} - ${prod.category}`}</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/detail/${prod.id}`}>
                        {<button className="btn btn-outline-primary btn-block">
                                DETALLE
                        </button>}
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
        </>
    )
}

export default Item
