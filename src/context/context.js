import React, { createContext, useReducer } from 'react';
import contextReducer from './contextReducer';
const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
	const [transactions, dispatch] = useReducer(contextReducer, initialState);

	//Action
	const deleteTransaction = (id) => {
		dispatch({ type: 'DELETE_TRANSACTION', payload: id });
	};
	console.log(transactions);
	const addTransaction = (transaction) => {
		dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
	};

	return (
		<ExpenseTrackerContext.Provider
			value={{ deleteTransaction, addTransaction }}
		>
			{children}
		</ExpenseTrackerContext.Provider>
	);
};
