"use client";

import React from "react";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import DpIconSrc from "@/assets/icons/dp.svg";
import { Container } from "@/components/styled-components";

const OUR_BELIEFS: {
	image: StaticImageData;
	title: string;
	text: string;
}[] = [
	{
		image: DpIconSrc,
		title: "SUSTAINABLE INNOVATION",
		text: "We are committed to sustainable improvement, continuously seeking ways to minimize our environmental impact through compostable, recyclable, and reusable materials and processes. Our dedication drives us to innovate and evolve, ensuring our packaging solutions are both responsible and cutting-edge",
	},
	{
		image: DpIconSrc,
		title: "IMPACTFUL GROWTH",
		text: "We aim to create a significant positive impact on both our clients and the environment. By fostering growth through data-driven insights and strategic partnerships, we empower businesses to thrive while contributing to a more sustainable world.",
	},
	{
		image: DpIconSrc,
		title: "CREATIVITY",
		text: "Creativity is at the heart of everything we do. We strive to make packaging design an enjoyable and engaging experience, offering unique and customizable solutions that reflect our clients' brand identities and captivate their customers.",
	},
];

export const OutBeliefSystem = () => {
	return (
		<Wrapper>
			<Container>
				<Content>
					<Title>Our Belief System </Title>
					<BeliefsWrapper>
						{OUR_BELIEFS.map(({ image, title, text }, obid) => (
							<Belief key={`${title}-${obid}`}>
								<BeliefImageWrapper>
									<BeliefImage>
										<Image
											src={image}
											alt=""
										/>
									</BeliefImage>
								</BeliefImageWrapper>
								<BeliefTitle>{title}</BeliefTitle>
								<BeliefText>{text}</BeliefText>
							</Belief>
						))}
					</BeliefsWrapper>
				</Content>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: #f2f2f2;
	padding: 80px 0;
`;

const Content = styled.div``;

const Title = styled.h3`
	font-size: 30px;
	font-weight: 600;
	text-align: center;
`;

const BeliefsWrapper = styled.div`
	margin: 50px 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	> div:first-child {
		margin-right: 30px;
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

const Belief = styled.div`
	border: 1px solid #000000;
	border-radius: 20px;
	padding: 20px;
	width: 38%;
	height: 400px;
	margin-bottom: 40px;

	&:last-child {
		margin-bottom: 0;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		height: fit-content;
	}
`;

const BeliefImageWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const BeliefImage = styled.div`
	width: 80px;
	height: 80px;

	img {
		width: 100%;
		height: 100%;
	}
`;

const BeliefTitle = styled.h4`
	font-weight: 600;
	font-siz3e: 25px;
	text-align: center;
	margin-top: 20px;
`;

const BeliefText = styled.p`
	margin-top: 15px;
	text-align: center;
	width: 70%l;
`;
