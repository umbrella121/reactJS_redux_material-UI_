import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core/'
import { SearchField } from './'

const Exercices = props =>
	<Grid container>
		<Grid item xs={12}>
			<SearchField 
				user={props.user}
				selectUserDispatch={props.selectUserDispatch}
				getContactsDispatch={props.getContactsDispatch}
				contacts={props.contacts}
				displayContacts={props.displayContacts}
				displayContactsDispatch={props.displayContactsDispatch}/>
		</Grid>
		<Grid item xs={6}>
			Left
		</Grid>
	</Grid>

Exercices.propTypes = {
	user: PropTypes.array.isRequired,
	selectUserDispatch: PropTypes.func.isRequired,
	getContactsDispatch: PropTypes.func.isRequired,
	contacts: PropTypes.array.isRequired,
	displayContacts: PropTypes.array.isRequired,
	displayContactsDispatch: PropTypes.func.isRequired,
}

	export default Exercices