"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import InstaIconSrc from "@/assets/icons/insta.svg";
import YoutubeIconSrc from "@/assets/icons/youtube.svg";
import TiktokIconSrc from "@/assets/icons/tiktok.svg";

export const Footer = () => {
	const router = useRouter();

	const handleRouteToHomepage = () => {
		router.push("/home");
	};

	return (
		<Wrapper>
			<Content>
				<Text>
					By subscribing, you will be among the first to know when we
					officially launch and have the opportunity to try our demo.
					We promise no spam!
				</Text>
				<FormWrapper>
					<Input
						placeholder="youremailaddress@email.com"
						type="email"
					/>
					<JoinBtn>Join Us</JoinBtn>
				</FormWrapper>
			</Content>
			<FooterTextWrapper>
				<Logo onClick={handleRouteToHomepage}>tivoraStudios</Logo>
				<CopyRight>© tivorastudios 2024</CopyRight>
				<SocialsWrapper>
					<SocialsText>Follow Us: </SocialsText>
					<Socials>
						<Image
							src={InstaIconSrc}
							alt="instagram icon"
						/>
						<Image
							src={YoutubeIconSrc}
							alt="youtube icon"
						/>
						<Image
							src={TiktokIconSrc}
							alt="tiktok icon"
						/>
					</Socials>
				</SocialsWrapper>
			</FooterTextWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 90%;
	margin: auto;
`;

const Content = styled.div`
	border: 1px solid #000000;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 20px;
	padding: 20px;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

const Text = styled.p`
	text-align: left;
	width: 45%;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

const FormWrapper = styled.div`
	width: 50%;
	display: flex;
	justify-content: flex-end;

	@media screen and (max-width: 768px) {
		width: 100%;
		justify-content: space-between;
		margin-top: 30px;
	}
`;

const Input = styled.input`
	border: 1px solid #767676;
	padding: 15px;
	border-radius: 20px;
	width: 60%;
	margin-right: 20px;
`;

const JoinBtn = styled.button`
	background-color: #767676;
	color: #000000;
	border-radius: 15px;
	padding: 15px 25px;
	font-size: 15px;
	border: none;
	outline: none;
	cursor: pointer;
	font-weight: 600;
`;

const FooterTextWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 50px 0;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

const Logo = styled.p`
	font-weight: 700;
	font-size: 22px;
	cursor: pointer;
`;

const CopyRight = styled.p`
	@media screen and (max-width: 768px) {
		margin: 30px 0;
	}
`;

const SocialsWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const SocialsText = styled.p`
	font-weight: 500;
	font-size: 16px;
	margin-right: 15px;
`;

const Socials = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	img {
		margin-right: 10px;

		&:last-child {
			margin-rigth: 0;
		}
	}
`;
