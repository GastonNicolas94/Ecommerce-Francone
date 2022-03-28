import { useEffect, useState } from "react"
import Button from "react-bootstrap/esm/Button"

const Tbody = ({cartList, amount, onRemove}) => {

    const [total, setTotal] = useState()

    useEffect(() => {

        setTotal(amount)

    },[cartList])

  return (
    <tbody>
        {
            cartList.map((item, index) => 
            <tr key={item.id}>
                <td>{index}</td>
                <td>{item.name}</td>
                <td>{item.buy}</td>
                <td>{item.price}</td>
                <td>{`$ ${item.price * item.buy}`}</td>
                <td><Button variant='outline-danger' size='sm' onClick={() => onRemove({item})}>ELIMINAR</Button></td>
            </tr>
            )
        }
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>TOTAL:</td>
            <td>
                {`$ ${total}`}
            </td>
        </tr>
    </tbody>
  )
}

export default Tbody