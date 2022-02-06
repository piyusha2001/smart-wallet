import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

function Details({ title }) {
	const classes = useStyles();
	return (
		<Card className={title === 'Income' ? classes.income : classes.expense}>
			<CardHeader title={title} />
			<CardContent>
				<Typography variant='h5'>$50</Typography>
				{/* <Doughnut data='Data' /> */}
			</CardContent>
		</Card>
	);
}

export default Details;
