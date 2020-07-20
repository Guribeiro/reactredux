import styled from 'styled-components';

export const HeaderStyled = styled.header`
	background: #222;

	display: flex;
	justify-content: space-between;
	align-items: center;

	a{
		text-decoration: none;
		color: #fff;
		img{
			margin-left: 30px;
			max-width: 60px;
			padding: 12px 0;
		}

		div{
			text-align: right;
			margin-right: 30px;

			strong{
				display: block;
			}
			span{
				color: #ddd;
			}
		}
	}

`
