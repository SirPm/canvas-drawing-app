"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Container } from "@/components/styled-components";
import LightGreyIconSrc from "@/assets/icons/light-grey-bg.svg";
import DarkGreyIconSrc from "@/assets/icons/dark-grey-bg.svg";

export const WhatIsTivora = () => {
	return (
		<Wrapper>
			<Container>
				<Content>
					<TextWrapper>
						<Title>What is Tivora Studios? </Title>
						<Text>
							Tivora Studios was created to provide you and your
							business with the tools to create, design and order
							sustainable smart packaging solutions that
							accurately reflect your brand identity.
						</Text>

						<Text>
							Our goal is to simplify the creative process, making
							it easy to create, customize, and order packaging.
							In addition, we provide insights into customer
							engagement and behaviour through detailed QR code
							analytics.
						</Text>

						<Text>
							Our mission is to help you enhance the unboxing
							experience, understand your customers and make
							informed data-driven decisions. Design, create,
							order & track the effectiveness of your packaging.
						</Text>
						<JoinBtn>Join the Community</JoinBtn>
					</TextWrapper>
					<ImageWrapper>
						<Image
							src={LightGreyIconSrc}
							alt="light grey bg"
						/>
						<Image
							src={DarkGreyIconSrc}
							alt="dark grey bg"
						/>
					</ImageWrapper>
				</Content>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	margin: 70px auto 200px;
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const TextWrapper = styled.div`
	width: 60%;

    @media screen and (max-width: 768px) {
       width: 100%;
    }
`;

const ImageWrapper = styled.div`
	width: 35%;
	position: relative;
	margin-top: 0;

	@media screen and (max-width: 1200px) {
		margin-top: -10%;
	}

	img {
		width: 70%;

		@media screen and (max-width: 1200px) {
			width: 80%;
		}
	}

	img:nth-child(2) {
		position: absolute;
		left: 40%;
		top: 40%;
	}
`;

const Title = styled.h2`
	font-size: 30px;
	font-weight: 600;
	margin-bottom: 50px;
`;

const Text = styled.p`
	margin-bottom: 30px;
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
