import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle, FaShoppingCart } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Location } = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };

    return (
        <tr className={props.quantity > 0 ? 'table-row-active' : 'table-row-inactive'}>
            <td>
                <div className="d-flex align-items-center">
                    <FaShoppingCart className="me-2 text-primary" />
                    <span className="fw-medium">{props.name}</span>
                </div>
            </td>
            <td>
                <span className="badge bg-primary">{props.quantity}</span>
            </td>
            <td>{Location}{parseInt(props.unitprice).toLocaleString()}</td>
            <td>
                <strong>{Location}{parseInt(props.quantity)*parseInt(props.unitprice).toLocaleString()}</strong>
            </td>
            <td>
                <button 
                    className="btn btn-sm btn-danger"
                    onClick={handleDeleteItem}
                    disabled={props.quantity === 0}
                >
                    <FaTimesCircle className="me-1" /> Remove
                </button>
            </td>
        </tr>
    );
};

export default ExpenseItem;