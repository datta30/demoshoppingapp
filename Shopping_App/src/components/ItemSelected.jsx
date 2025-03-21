import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ItemSelected = (props) => {
    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [action, setAction] = useState('Add');
    
    const submitEvent = () => {
        if (!name || !quantity) {
            alert('Please select an item and specify quantity');
            return;
        }

        const item = {
            name: name,
            quantity: parseInt(quantity),
        };

        if(action === "Reduce") {
            dispatch({
                type: 'RED_QUANTITY',
                payload: item,
            });
        } else {
                dispatch({
                    type: 'ADD_QUANTITY',
                    payload: item,
                });
        }
        
        // Reset form after submission
        setQuantity('');
    };

    return (
        <div className="item-form p-3">
            <div className='row g-3 align-items-center'>
                <div className='col-md-4'>
                    <div className="form-group">
                        <label className="form-label" htmlFor="inputGroupSelect01">Select Item</label>
                        <select 
                            className="form-select" 
                            id="inputGroupSelect01" 
                            value={name} 
                            onChange={(event) => setName(event.target.value)}
                        >
                            <option value="">Choose...</option>
                            <option value="Shirt">Shirt</option>
                            <option value="Dress">Dress</option>
                            <option value="Jeans">Jeans</option>
                            <option value="Dinner set">Dinner set</option>
                            <option value="Bags">Bags</option>
                        </select>
                    </div>
                </div>
                
                <div className='col-md-3'>
                    <div className="form-group">
                        <label className="form-label" htmlFor="inputGroupSelect02">Action</label>
                        <select 
                            className="form-select" 
                            id="inputGroupSelect02" 
                            value={action}
                            onChange={(event) => setAction(event.target.value)}
                        >
                            <option value="Add">Add</option>
                            <option value="Reduce">Reduce</option>
                        </select>
                    </div>
                </div>
                
                <div className='col-md-3'>
                    <div className="form-group">
                        <label className="form-label" htmlFor="quantity">Quantity</label>
                        <input
                            required='required'
                            type='number'
                            className="form-control"
                            id='quantity'
                            min="1"
                            value={quantity}
                            onChange={(event) => setQuantity(event.target.value)}
                        />
                    </div>
                </div>
                
                <div className='col-md-2 d-flex align-items-end'>
                    <button className="btn btn-primary w-100" onClick={submitEvent}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemSelected;