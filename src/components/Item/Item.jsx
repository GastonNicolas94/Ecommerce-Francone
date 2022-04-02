import { Link } from "react-router-dom"

import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function Item({prod}) {
    return (
        
            <Col key={prod.id}>
                <Card>
                    <Card.Img src={prod.img} />
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
        

        // <Link to={`/detail/${prod.id}`}>
        //     <div 
        //         key={prod.id}
        //         className='col-md-4'
        //     >                        
        //         <div className="card w-100 mt-5" >
        //             <div className="card-header">
        //                 {`${prod.name} - ${prod.category}`}
        //             </div>
        //             <div className="card-body">
        //                 {prod.price}                                                            
        //             </div>
        //             <div className="card-footer">  
                        
        //                     {<button className="btn btn-outline-primary btn-block">
        //                         detalle del producto
        //                     </button>}
                        
                                                                                    
        //             </div>
        //         </div>
        //     </div>
        // </Link>
    )
}

export default Item
