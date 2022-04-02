import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Card from 'react-bootstrap/Card'
import {BsPlusLg, BsDashLg} from 'react-icons/bs'
import {useState, useEffect} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

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

        (initial === stock) ? setDisabledAdd(true):setDisabledAdd(false);
        
        (stock === 0 || initial === 0) ? setDisableSubstract(true):setDisableSubstract(false);
    
    },[])

    return (
        <>
            <InputGroup className="mb-3">
                <Button variant="outline-secondary" onClick={handlerSubstractStock} disabled={disabledSubstract}>
                    <BsDashLg/>
                </Button>
                <FormControl value={`${buy}`} onChange = {(event) => this.setState({value: event.target.value })}/>
                <Button variant="outline-secondary" onClick={handlerAddStock} disabled={disabledAdd}>
                    <BsPlusLg/>  
                </Button>
            </InputGroup>
            <div className='d-grid gap-2'>
                <Button variant='outline-primary' size='lg' onClick={() => onAdd({buy})}>Agregar al carrito</Button>
            </div>
        </>

    )
}

export default ItemCount