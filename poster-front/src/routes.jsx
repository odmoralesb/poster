import React from 'react'
import { Route, Switch } from 'react-router'
import Layout from './containers/Layout'
import Contenido from './containers/Contenido'

export default (
	<Switch>
		<Layout>
			<Switch>
				<Route exact path="/" component={ Contenido } />
			</Switch>
		</Layout>
	</Switch>
)