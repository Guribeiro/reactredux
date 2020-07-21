import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

import logo from '../../assets/Raspberry.svg';
import { HeaderStyled } from './styles';


function Header() {

	const { reserve } = useSelector(state => state)

	return (
		<HeaderStyled>
			<Link to='/'>
				<img src={logo} alt="" />
			</Link>

			<Link to='/reservas'>
				<div>
					<strong>Minhas reservas</strong>
					<span>{reserve.length} reservas</span>
				</div>
			</Link>
		</HeaderStyled>
	)
}
export default Header;
