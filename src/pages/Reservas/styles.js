import styled from 'styled-components';

export const ListReservas = styled.ul`

	margin-top: 30px;

	list-style: none;

	li{
		padding: 8px;
		border: 1px solid #fff;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;

		& + li{
			margin-top: 20px;
		}

		div{
			display: flex;
			min-width: 120px;
			align-items: center;
			justify-content: space-between;


			small{
				text-align: center;
				margin: 0 2px;
				flex: 2;
				font-size: 16px;
				padding: 6px;
			}
			button{
				flex: 1;

				svg{
					font-size: 18px;
				}
			}
		}

		img{
			width: 180px;
			border-radius: 4px;
			transition: 0.3s;
			cursor: pointer;
		}

		button{
			background: #222;
			padding: 6px;

			svg{
				color: #fff;
				font-size: 18px;
			}
		}

	}

	footer{
		margin-top: 30px;

		button{
			font-size: 14px;
			padding: 8px 16px;
			background: #fff;
			color: #222;
			border: 2px solid #fff;

			transition: 0.3s;

			&:hover{
				color: #fff;
				background: #222;
			}
		}
	}

`;
