import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/Raspberry.svg';
import { HeaderStyled } from './styles';


function Header() {
	return (
		<HeaderStyled>
			<Link to='/'>
				<img src={logo} alt="" />
			</Link>

			<Link to='/reservas'>
				<div>
					<strong>Minhas reservas</strong>
					<span>3 reservas</span>
				</div>
			</Link>
		</HeaderStyled>
	)
}
export default Header;
