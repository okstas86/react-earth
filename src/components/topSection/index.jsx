import styled, { keyframes } from "styled-components"

const fadeInFromCenter = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`

const TopSectionContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 30%;
	top: 0;
	left: 0;
	display: flex;

	align-items: center;
	justify-content: center;
	padding-top: 10%;

	margin: auto;
`
const Logo = styled.h1`
	margin: 0;
	color: #e6e6e6;
	font-weight: 700;
	font-size: 80px;
	z-index: 1;
	background-color: rgb(1, 4, 12, 0.3);
	text-transform: uppercase;
`
const Slogan = styled.h4`
	color: #e6e6e6;
	font-weight: 400;
	font-size: 30px;
	z-index: 1;
	background-color: rgb(1, 4, 12, 0.3);
	text-transform: uppercase;
`
const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	width: 80%;
	animation: ${fadeInFromCenter} 5s ease-in-out;
	z-index: 1;
`

export default function TopSection() {
	return (
		<>
			<TopSectionContainer>
				<ContentContainer>
					<Logo>Planеt Earth</Logo>
					<Slogan>Our Planet, Our Future</Slogan>
				</ContentContainer>
			</TopSectionContainer>
		</>
	)
}
