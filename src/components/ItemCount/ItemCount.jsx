import Button from 'react-bootstrap/Button'
import {BsPlusLg, BsDashLg} from 'react-icons/bs'
import {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

    const [buy, setBuy] = useState(initial)

    const handleCounter = (event) => {

        if(event.target.id === 'substract'){
          (buy === initial) ? 
            alert(`La cantidad mínima es ${initial}`)
            : 
            setBuy(buy - 1);
        }else{
          (buy === stock) ? 
            alert(`La cantidad máxima es ${stock}`)
            : 
            setBuy(buy + 1);
        }
      }
  
    
    return (
        <>
            <div className='w-100'>
                <div className='d-flex counter'>
                    <Button id="substract" disabled={ stock > 0? false:true } className="btn btn-secondary" onClick={handleCounter}>
                        <BsDashLg/>
                    </Button>
                        <input disabled className="form-control text-center" value={buy} type="number" />
                    <Button id='add' disabled={ stock > 0? false:true } className="btn btn-secondary" onClick={handleCounter}>
                        <BsPlusLg/>  
                    </Button>
                </div> 
                <div className='counter_buy'>
                    <Button disabled={ stock > 0? false:true } className="btn" onClick={() => onAdd({buy})}>Agregar al carrito</Button>
                </div>
            </div> 
        </>

    )
}

export default ItemCount