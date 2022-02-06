import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import { Doughnut } from 'react-chartjs-2';
import useTransactions from '../../useTransactions';
const DetailsCard = ({ title, subheader }) => {
	const { total, chartData } = useTransactions(title);
	const classes = useStyles();

	return (
		<Card className={title === 'Income' ? classes.income : classes.expense}>
			<CardHeader title={title} subheader={subheader} />
			<CardContent>
				<Typography variant='h5'>${total}</Typography>
				<Doughnut data={chartData} />
			</CardContent>
		</Card>
	);
};

export default DetailsCard;
