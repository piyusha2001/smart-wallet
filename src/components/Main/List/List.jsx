import {
	Avatar,
	IconButton,
	List as MUIList,
	ListItem,
	ListItemAvatar,
	ListItemSecondaryAction,
	ListItemText,
	Slide,
} from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import React from 'react';
import useStyles from './styles';

function List() {
	const classes = useStyles();

	const transactions = [
		{
			id: 1,
			type: 'Income',
			category: 'Salary',
			amount: 50,
			date: 'wed dec 16',
		},
		{
			id: 2,
			type: 'Income',
			category: 'Salary',
			amount: 50,
			date: 'wed dec 16',
		},
		{
			id: 3,
			type: 'Expense',
			category: 'Salary',
			amount: 50,
			date: 'wed dec 16',
		},
	];
	return (
		<MUIList dense={false} className={classes.list}>
			{transactions.map((transaction) => (
				<Slide
					direction='down'
					in
					mountOnEnter
					unmountOnExit
					key={transaction.id}
				>
					<ListItem>
						<ListItemAvatar>
							<Avatar
								className={
									transaction.type === 'Income'
										? classes.avatarIncome
										: classes.avatarExpense
								}
							>
								<MoneyOff />
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary={transaction.category}
							secondary={`$${transaction.amount}-${transaction.date}`}
						></ListItemText>
						<ListItemSecondaryAction>
							<IconButton
								edge='end'
								aria-label='delete'
								onClick=''
							>
								<Delete />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				</Slide>
			))}
		</MUIList>
	);
}

export default List;
