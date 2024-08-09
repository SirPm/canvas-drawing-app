"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Container } from "./styled-components";
import Image from "next/image";
import CartIconSrc from "@/assets/icons/cart.svg";
import NameIconSrc from "@/assets/icons/name-icon.svg";

interface NavigationBarProps {
	isHomePage: boolean;
}

export const NavigationBar = (props: NavigationBarProps) => {
	const { isHomePage } = props;
	const router = useRouter();

	const handleRouteToHomepage = () => {
		router.push("/home");
	};

	return (
		<Wrapper>
			<LogoAndLinks>
				<Logo onClick={handleRouteToHomepage}>tivoraStudios</Logo>
				<LinksWrapper>
					<MenuLink href="/canvas">Our Products</MenuLink>
					<MenuLink href="/about-us">About Us</MenuLink>
					<MenuLink href="/">Contact</MenuLink>
				</LinksWrapper>
			</LogoAndLinks>
			<OtherNavOptions>
				{isHomePage ? (
					<LoginSignupWrapper>
						<Button>Log In</Button>
						<Button>Sign Up</Button>
					</LoginSignupWrapper>
				) : (
					<OtherActionsWrapper>
						<Image
							src={CartIconSrc}
							alt="cart icon"
						/>
						<Image
							src={NameIconSrc}
							alt="user name icon"
						/>
					</OtherActionsWrapper>
				)}
			</OtherNavOptions>
		</Wrapper>
	);
};

const Wrapper = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 30px auto;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

const Logo = styled.p`
	font-weight: 700;
	font-size: 22px;
	cursor: pointer;
`;

const LogoAndLinks = styled.div`
	display: flex;

	@media screen and (max-width: 450px) {
		flex-direction: column;
	}
`;

const LinksWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-left: 30px;

	@media screen and (max-width: 450px) {
		margin-left: 0;
		margin-top: 20px;
	}
`;

const MenuLink = styled(Link)`
	font-weight: 700;
	font-size: 18px;
	color: #000000;
	text-decoration: none;
	display: inline-block;
	margin-right: 10px;

	&:last-child {
		margin-rigth: 0;
	}
`;

const OtherNavOptions = styled.div`
	display: flex;
`;

const LoginSignupWrapper = styled.div`
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		margin-top: 40px;
	}
`;

const Button = styled.button`
	background-color: #767676;
	color: #ffffff;
	border-radius: 15px;
	padding: 15px 25px;
	font-size: 15px;
	border: none;
	outline: none;
	cursor: pointer;
	font-weight: 500;

	&:first-child {
		margin-right: 15px;
	}
`;

const OtherActionsWrapper = styled.div`
	display: flex;
	align-items: center;

	img {
		width: 30px;
		height: 30px;
	}

	img:first-child {
		margin-right: 10px;
	}
`;
