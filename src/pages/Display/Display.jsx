import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from '../../components/Main/Main'

const Display = (props) => {
	return(
		<Switch>
			<Route exact path="/" render={(props)=> <Main {...props} />} />
		</Switch>
	)
}

export default Display