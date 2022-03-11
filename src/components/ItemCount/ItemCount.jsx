import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import {BsPlusLg, BsDashLg} from 'react-icons/bs'
import {useState, useEffect} from 'react'

const ItemCount = ({stock, initial, name}) => {
    
    const [buy, setBuy] = useState(initial)

    const [disabledSubstract, setDisableSubstract] = useState(false)

    const [disabledAdd, setDisabledAdd] = useState(false)
  
    const handlerAddStock = () => {
  
        setBuy(buy + 1)
  
    }
  
    const handlerSubstractStock =  () => {
  
        setBuy(buy - 1)
  
    }

    useEffect(() => {
        
        const handlerSetDisabledSubtract = (state) => {

            setDisableSubstract(state)

        }

        const handlerSetDisabledAdd = (state) => {
        
            setDisabledAdd(state)
          
        }


        (buy == 0) ? handlerSetDisabledSubtract(true):handlerSetDisabledSubtract(false);
        (buy == stock) ? handlerSetDisabledAdd(true):handlerSetDisabledAdd(false);

        
    },[buy])

    useEffect(() => {

        (initial == stock) ? setDisabledAdd(true):setDisabledAdd(false);
        
        (stock == 0 || initial == 0) ? setDisableSubstract(true):setDisableSubstract(false);
    
    },[])

    return (
        <>
        <Col>
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header>{name}</Card.Header>
                <Card.Body>
                    <InputGroup className="mb-3">
                        <Button variant="outline-secondary" onClick={handlerSubstractStock} disabled={disabledSubstract}>
                            <BsDashLg/>
                        </Button>
                        <FormControl aria-label="Example text with two button addons" value={buy}/>
                        <Button variant="outline-secondary" onClick={handlerAddStock} disabled={disabledAdd}>
                            <BsPlusLg/>  
                        </Button>
                    </InputGroup>
                    <div className='d-grid gap-2'>
                        <Button variant='outline-primary' size='lg'>Agregar al carrito</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>  
        </>

    )
}

export default ItemCount