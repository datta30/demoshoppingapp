import React, { createContext, useReducer } from 'react';

// The reducer - used to update the state based on actions
export const AppReducer = (state, action) => {
    let new_plants = [];
    switch (action.type) {
        case 'ADD_QUANTITY':
            let updatedqty = false;
            state.plants.map((plant)=>{
                if(plant.id === action.payload.id) {
                    plant.quantity = plant.quantity + action.payload.quantity;
                    updatedqty = true;
                }
                new_plants.push(plant);
                return true;
            })
            state.plants = new_plants;
            action.type = "DONE";
            return {
                ...state,
            };

        case 'RED_QUANTITY':
            state.plants.map((plant)=>{
                if(plant.id === action.payload.id) {
                    plant.quantity = plant.quantity - action.payload.quantity;
                }
                plant.quantity = plant.quantity < 0 ? 0: plant.quantity;
                new_plants.push(plant);
                return true;
            })
            state.plants = new_plants;
            action.type = "DONE";
            return {
                ...state,
            };
                
        case 'DELETE_ITEM':
            state.plants.map((plant)=>{
                if(plant.id === action.payload.id) {
                    plant.quantity = 0;
                }
                new_plants.push(plant);
                return true;
            })
            state.plants = new_plants;
            action.type = "DONE";
            return {
                ...state,
            };
            
        case 'CHG_LOCATION':
            action.type = "DONE";
            state.currency = action.payload;
            return {
                ...state
            }

        default:
            return state;
    }
};

// Sets the initial state when the app loads
const initialState = {
    plants: [
        { id: "monstera", name: 'Monstera Deliciosa', quantity: 0, unitprice: 35, category: 'Tropical', image: '/images/monstera.jpg' },
        { id: "snake", name: 'Snake Plant', quantity: 0, unitprice: 25, category: 'Low-Maintenance', image: '/images/snake.jpg' },
        { id: "pothos", name: 'Golden Pothos', quantity: 0, unitprice: 20, category: 'Hanging', image: '/images/pothos.jpg' },
        { id: "fiddle", name: 'Fiddle Leaf Fig', quantity: 0, unitprice: 45, category: 'Tropical', image: '/images/fiddle.jpg' },
        { id: "zz", name: 'ZZ Plant', quantity: 0, unitprice: 30, category: 'Low-Maintenance', image: '/images/zz.jpg' },
        { id: "ivy", name: 'English Ivy', quantity: 0, unitprice: 18, category: 'Hanging', image: '/images/ivy.jpg' },
    ],
    currency: '$'
};

// Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// Provider component - wraps the components we want to give access to the state
export const AppProvider = (props) => {
    // Sets up the app state
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const totalPlants = state.plants.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    const totalCartValue = state.plants.reduce((total, item) => {
        return total + (item.unitprice * item.quantity);
    }, 0);

    return (
        <AppContext.Provider
            value={{
                plants: state.plants,
                totalCartValue: totalCartValue,
                totalPlants: totalPlants,
                dispatch,
                currency: state.currency
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};