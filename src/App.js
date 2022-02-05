import { Grid } from '@material-ui/core';
import React from 'react';
import Details from './components/Details/Details';
function App() {
	return (
		<div>
			<Grid
				container
				spacing={0}
				alignItems='center'
				justifyContent='center'
				style={{ height: '100vh' }}
			>
				<Grid items xs={12} sm={4}>
					<Details />
				</Grid>
				<Grid items xs={12} sm={4}>
					Main
				</Grid>
				<Grid items xs={12} sm={4}>
					<Details />
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
