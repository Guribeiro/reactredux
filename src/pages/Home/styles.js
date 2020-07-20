import styled from 'styled-components';


export const ListTrips = styled.ul`

	padding: 12px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	list-style: none;

	li{
		padding: 12px;
		background: #fff;
		border-radius: 4px;

		figure{
			width: 360px;
			color: #222;

			img{
				width: 100%;
				border-top-right-radius: 6px;
				border-top-left-radius: 6px;
				cursor: pointer;
				transition: 0.3s;

				&:hover{
					transform: translateY(5px)
				}
			}

			figcaption{

				padding: 6px;

				border-bottom-right-radius: 6px;
				border-bottom-left-radius: 6px;
				background: #222;

				color: #fff;

				p{
					text-align: center;

				}

				span{
					margin-top: 4px;
					text-align: left;
					font-size: 12px;
				}
			}
		}
		button{
			width: 100%;
			margin-top: 6px;
			padding: 10px;
			font-size: 18px;
			color: #fff;

			background: #222;
			border-radius: 4px;
			border: 1px solid #222;

			transition: 0.2s;

			&:hover{
				color: #222;
				background: #fff;
				border: 1px solid #222;
			}
		}
	}
`;

