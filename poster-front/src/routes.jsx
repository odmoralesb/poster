import React from 'react'
import { Route, Switch } from 'react-router'

import SignIn from './containers/SignIn'
import Autorizacion from './containers/Autorizacion'
import Layout from './containers/Layout'
import Contenido from './containers/Contenido'
import Registro from './containers/Registro'


export default (
	<Switch>          
        <Route exact path={"/signin"} component={ SignIn } />
        <Route exact path={"/registro"} component={ Registro } />              
		<Layout>
			<Switch>
				<Route exact path="/" component={ Autorizacion(Contenido) } />
			</Switch>
		</Layout>
	</Switch>
)