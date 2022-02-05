import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

function Details() {
	const classes = useStyles();
	return (
		<Card className={classes.income}>
			<CardHeader title='Income' />
			<CardContent>
				<Typography variant='h5'>$50</Typography>
				{/* <Doughnut data='Data' /> */}
			</CardContent>
		</Card>
	);
}

export default Details;
