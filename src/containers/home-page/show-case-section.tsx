"use client";

import React from "react";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import PaintIconSrc from "@/assets/icons/paint.svg";
import QrIconSrc from "@/assets/icons/qr-code.svg";
import SustainabilityIconSrc from "@/assets/icons/sustainability.svg";
import TrackMgtIconSrc from "@/assets/icons/track-management.svg";
import { Container } from "@/components/styled-components";

const SHOW_CASE_CONTENTS: {
	image: StaticImageData;
	title: string;
	text: string;
}[] = [
	{
		image: PaintIconSrc,
		title: "SELF SERVE DESIGN TOOL",
		text: "Choose from diverse templates, create from scratch, and design packaging that perfectly fits your brand!",
	},
	{
		image: QrIconSrc,
		title: "SMART PACKAGING",
		text: "Incorporate QR codes to promote different products, link to various aspects of your business, and track the effectiveness of your packaging",
	},
	{
		image: SustainabilityIconSrc,
		title: "SUSTAINABILITY",
		text: "Eco-friendly packaging options that reduce your environmental footprint without compromising on quality.",
	},
	{
		image: TrackMgtIconSrc,
		title: "TRACK ENGAGEMENT",
		text: "Gain insights into customer engagement and behavior with detailed QR code analytics to make data-driven decisions",
	},
];

export const ShowCaseSection = () => {
	return (
		<Wrapper>
			<Container>
				<Content>
					<Title>
						<span>Showcase your brand identity through your </span>
						<br />
						<span>packaging and understand your customers</span>
					</Title>
					<ShowCaseWrapper>
						{SHOW_CASE_CONTENTS.map(
							({ image, title, text }, sccidx) => (
								<ShowCaseContent key={`${title}-${sccidx}`}>
									<ImageWrapper>
										<Image
											src={image}
											alt={`${title}'s icon`}
										/>
									</ImageWrapper>
									<ShowCaseContentTitle>
										{title}
									</ShowCaseContentTitle>
									<ShowCaseContentText>
										{text}
									</ShowCaseContentText>
								</ShowCaseContent>
							)
						)}
					</ShowCaseWrapper>
					<CtaSection>
						<JoinBtn>Join the Community</JoinBtn>
					</CtaSection>
				</Content>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	margin: 100px auto;
`;

const Content = styled.div``;

const Title = styled.h3`
	font-size: 30px;
	font-weight: 600;
	text-align: center;
	margin-bottom: 100px;
`;

const ShowCaseWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

const ImageWrapper = styled.div`
	width: 40px;
	height: 40px;

	img {
		width: 100%;
		height: 100%;
	}
`;

const ShowCaseContent = styled.div`
	width: 24%;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (max-width: 768px) {
		width: 100%;
		margin-bottom: 40px;

		&:last-child {
			margin-bottom: 0;
		}
	}
`;

const ShowCaseContentTitle = styled.h4`
	text-align: center;
    margin: 15px; 0;
`;

const ShowCaseContentText = styled.p`
	text-align: center;
	width: 70%;
`;

const CtaSection = styled.div`
	margin: 70px auto;
	display: flex;
	justify-content: center;
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
