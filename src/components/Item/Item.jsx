import { Link } from "react-router-dom"

function Item({prod}) {
    return (
        <Link to={`/detail/${prod.id}`}>
            <div 
                key={prod.id}
                className='col-md-4'
            >                        
                <div className="card w-100 mt-5" >
                    <div className="card-header">
                        {`${prod.name} - ${prod.category}`}
                    </div>
                    <div className="card-body">
                        {prod.price}                                                            
                    </div>
                    <div className="card-footer">  
                        
                            {<button className="btn btn-outline-primary btn-block">
                                detalle del producto
                            </button>}
                        
                                                                                    
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Item
