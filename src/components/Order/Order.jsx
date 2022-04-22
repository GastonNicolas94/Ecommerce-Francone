import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import { useCartContext } from '../../context/CartContext'
import SweetAlert2 from 'react-sweetalert2';
import { useForm } from "react-hook-form";
import { 
    addDoc, 
    collection, 
    documentId, 
    getDocs, 
    getFirestore, 
    query, 
    where, 
    writeBatch 
  } from "firebase/firestore"
  

export const Order = () => {
    
    const {cartList, amount, clear} = useCartContext()
    
    const [show, setShow] = useState(false)

    const [swalProps, setSwalProps] = useState({});

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'all' });

    const handleShow = () => {
        if (cartList.length === 0) {
            alert('Carrito vacio')
        }else{
            setShow(!show)
        }
    }

    const handleClose = () => {
        setShow(false)
    }

    const onSubmit = (data) => {
        

        const onAddOrder = async () =>{
            let order = {}
            const date = new Date()     
    
            order.buyer = {name: data.name, surname: data.surname, phone: data.phone,
                            city: data.city, state: data.state, address: data.address,
                            email: data.email, zip: data.postalCode}
            order.amount = amount();
            order.date = `${date.toLocaleDateString()} ${date.getHours()}:${date.getMinutes()}`
            order.items = cartList.map(product => {
                const id = product.id;
                const name = product.name;
                const price = product.price * product.buy;

                return {id, name, price}
            })
    
            // crear
    
            const db = getFirestore()

            const queryCollectionSet = collection(db, 'orders')

            addDoc(queryCollectionSet, order)
                .then(({ id }) => {
                    setSwalProps({
                        show: true,
                        icon: 'success',
                        title: 'Compra finalizada',
                        text: `El ID de su compra es: ${ id } `,
                        confirmButtonText: 'OK',
                        confirmButtonColor: 'green'
                    })
                })
                .catch(err => console.error(err))

            //update
            const queryCollectionsItems = collection(db, 'product')

            const stockUpdate = await query(queryCollectionsItems,
            
                where(documentId(), 'in', cartList.map(item => item.id)))
            
            const batch = writeBatch(db)


            await getDocs(stockUpdate)
            
                .then(response => response.docs.forEach(res => batch.update(res.ref, {
                    stock: res.data().stock - cartList.find(item => item.id === res.id).buy
                })))
                
                .catch(error => (`Error: ${error}`))
                
                .then(() => clear())

                .then(() => setShow(!show))
                
                .finally(console.log('ORDEN FINALIZADA'))

            batch.commit()
        }

        onAddOrder()
  
    }

  return (
      <>
        <SweetAlert2 {...swalProps} />
        <Button variant="secondary" onClick={handleShow}>Comprar</Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="bg-light shadow-lg">
                <Modal.Title className="text-dark">Checkout</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        placeholder="Nombre" 
                                        {...register("name", { required: true, minLength:1,maxLength: 20 })}
                                    />
                                </Form.Group>
                                {errors.name && <p>Por favor verifique el nombre</p>}
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicSurname">
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control
                                        placeholder="Apellido" 
                                        {...register("surname", { required: true, minLength:1, maxLength: 20 })}
                                    />
                                </Form.Group>
                                {errors.name && <p>Por favor verifique el apellido</p>}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        placeholder="nombre@..."
                                        {...register("email", { required: true,
                                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                        })}
                                    />
                                </Form.Group>
                                {errors.name && <p>Por favor verifique el email</p>}
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicCity">
                                    <Form.Label>Ciudad</Form.Label>
                                    <Form.Control
                                        placeholder="Ciudad" 
                                        {...register("city", { required: true, minLength:1,maxLength: 20 })}
                                    />
                                </Form.Group>
                                {errors.name && <p>Por favor verifique la ciudad</p>}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicState">
                                    <Form.Label>Provincia</Form.Label>
                                    <Form.Control 
                                        placeholder="Provincia" 
                                        {...register("state", { required: true, minLength:1,maxLength: 15 })}
                                    />
                                </Form.Group>
                                {errors.name && <p>Por favor verifique la provincia</p>}
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPostalCode">
                                    <Form.Label>Código postal</Form.Label>
                                    <Form.Control 
                                        placeholder="Codigo postal" 
                                        {...register("postalCode", { required: true, minLength:4,maxLength: 4 })}
                                    />
                                </Form.Group>
                                {errors.name && <p>Por favor verifique el código postal</p>}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicPhone">
                                    <Form.Label>Telefono</Form.Label>
                                    <Form.Control
                                        placeholder="+549..." 
                                        {...register("phone", { required: true, minLength:10,maxLength: 16 })}
                                    />
                                </Form.Group>
                                {errors.name && <p>Por favor verifique el telefono</p>}
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicAddress">
                                    <Form.Label>Dirección</Form.Label>
                                    <Form.Control
                                        placeholder="Direccion" 
                                        {...register("address", { required: true,minLength:1,})}
                                    />
                                </Form.Group>
                                {errors.name && <p>Por favor verifique la dirección</p>}
                            </Col>
                        </Row>

                        <Button variant="primary" onClick={handleSubmit(onSubmit)} disabled={!isValid}>
                            CONFIRMAR
                        </Button>
                    </Form>
                

            </Modal.Body>
        </Modal>
      </>
  )
}
