import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const BookForm = (props) => {
    const [book, setBook] = useState({
        bookname: props.book ? props.book.bookname : '',
        author: props.book ? props.book.author : '',
        quantity: props.book ? props.book.quantity : '',
        price: props.book ? props.book.price : '',
        date: props.book ? props.book.date : '',
    });
    
    const [errorMsg, setErrorMsg] = useState('');
    const {bookname, author, quantity, price} = book;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [bookname, author, price, quantity];
        let errorMsg = '';

        const allFieldFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
        });

        if(allFieldFilled){
            const book = {
                id: uuidv4,
                bookname,
                author,
                price,
                quantity,
                date: new date()
            };
            props.handleOnSubmit(book);
        }else{
            errorMsg = "Please fill out all the fields";
        }
        setErrorMsg(errorMsg);
    };

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        switch(name){
            case 'quantity':
                if(value === '' || parseInt(value) === +value){
                    setBook((prevState) => ({
                        ...prevState,
                        [name] : value
                    }));
                }
                break;
            case 'price':
                if(value == '' || value.match(/^\d{1,}(\.\d{0,2})?$/)){
                    setBook((prevState) => ({
                        ...prevState,
                        [name] : value
                    }));
                }
                break;
            default:
                setBook((prevState) => ({
                    ...prevState,
                    [name] : value
                }));
        }
    };
    
    return(
        <div className="main-form">
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <Form onSubmit={handleOnSubmit}>
                <Form.Group></Form.Group>
            </Form>
        </div>
    )
}
