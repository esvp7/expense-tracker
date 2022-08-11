import React, { useReducer, createContext } from "react";

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(contextReducer, initialState);

	const deleteTransaction = (id) => {
		dispatch({ type: 'DELETE_TRANSACTION', payload: id});
	}

	const addTransaction = (state) => {
		dispatch({ type: 'ADD_TRANSACTION', payload: state});
	}
	
	const balance = state.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);

	return (
		<ExpenseTrackerContext.Provider value={{ 
			state,
			balance,
			deleteTransaction,
			addTransaction,
		}}>
		    {children}
		</ExpenseTrackerContext.Provider>
	);
}