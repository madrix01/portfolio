import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import {Link} from 'react-router-dom';

function AppBarStyled(){
    return (
			<AppBar style={{ background: '#333333' }}>
				<Typography variant="h6">
					<div className="abt">
						<div className="name-small">
							Shlok Patel
						</div>
						<div className="links">
							<Link to="/" style={{ textDecoration: 'none', color:"white" }}>home</Link>
							<Link to="/project" style={{ textDecoration: 'none', color:"white"}}>project</Link>
							<Link to="/skills" style={{ textDecoration: 'none', color:"white"}}>skills</Link>
						</div>
					</div>
				</Typography>
			</AppBar>
    )
}

export default AppBarStyled;