import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaShoppingCart } from 'react-icons/fa';

const CartValue = () => {
    const { expenses, Location } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.unitprice * item.quantity));
    }, 0);

    return (
        <div className='alert alert-primary'>
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <FaShoppingCart className="me-2" size="1.5em" />
                    <span className="fw-bold">Cart Value:</span>
                </div>
                <span className="fs-4">{Location}{totalExpenses.toLocaleString()}</span>
            </div>
        </div>
    );
};

export default CartValue;