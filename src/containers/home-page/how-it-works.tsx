"use client";

import React from "react";
import styled from "styled-components";

const HOW_IT_WORKS: {
	num: string;
	title: string;
	text: string;
}[] = [
	{
		num: "01",
		title: "Choose the Package Type ",
		text: "Select the type of packaging that best suits your needs. Whether you're looking for options by type or industry, We offer a wide range of sustainable packaging solutions that align with your brand identity.",
	},
	{
		num: "02",
		title: "Customize Your Design or Create From Scratch ",
		text: "Personalize your packaging by choosing from our selection of templates or designing from scratch. Our user-friendly platform makes it easy to create unique and captivating packaging that reflects your brand's personality.",
	},
	{
		num: "03",
		title: " Integrate Your QR Code",
		text: "Enhance your packaging with a dynamic QR code. This feature not only promotes different aspects of your business but also provides valuable insights into customer engagement and behavior.",
	},
	{
		num: "04",
		title: "Order & Track Effectiveness",
		text: "Once your design is finalized, place your order and enjoy the enhanced unboxing experience. Use our detailed QR code analytics to track the effectiveness of your packaging and make informed, data-driven decisions to improve customer engagement.",
	},
];

export const HowItWorks = () => {
	return (
		<Wrapper>
			<Title>How It Works</Title>
			<HowItWorksWrapper>
				{HOW_IT_WORKS.map(({ num, title, text }, hiwidx) => (
					<HowItWorksContent
						key={`${num}-${hiwidx}`}
						flexdirection={hiwidx % 2 < 1 ? "row" : "row-reverse"}
					>
						<HowItWorksInfo>
							<HowItWorksNum>{num}</HowItWorksNum>
							<HowItWorksTitle>{title}</HowItWorksTitle>
							<HowItWorksText>{text}</HowItWorksText>
						</HowItWorksInfo>
						<HowItWorksBg />
					</HowItWorksContent>
				))}
			</HowItWorksWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	margin: 60px auto;
`;

const Title = styled.h3`
	font-size: 30px;
	font-weight: 600;
	text-align: center;
`;

const HowItWorksWrapper = styled.div`
	margin: 50px 0;
`;

const HowItWorksContent = styled.div<{ flexdirection: "row" | "row-reverse" }>`
	height: 500px;
	display: flex;
	flex-direction: ${(props) => props.flexdirection};

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

const HowItWorksInfo = styled.div`
	width: 50%;
	padding: 20px 300px 0 35px;

	@media screen and (max-width: 1200px) {
		padding-right: 140px;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
        padding-bottom: 40px;
	}
`;

const HowItWorksNum = styled.p`
	font-size: 32px;
	font-weight: 600;
`;

const HowItWorksTitle = styled.h4`
	font-size: 28px;
	font-weight: 600;
	margin: 15px 0;
`;

const HowItWorksText = styled.p`
	font-size: 16px;
`;

const HowItWorksBg = styled.div`
	background-color: #767676;
	width: 50%;
	height: 100%;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
