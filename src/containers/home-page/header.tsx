"use client";

import React from "react";
import styled from "styled-components";
import { Container } from "../../components/styled-components";

export const Header = () => {
	return (
		<Wrapper>
			<SubText>
				sustainable smart packaging solutions that prioritize accurately
				reflecting your brand identity
			</SubText>
			<Title>
				<span>Your Brand’s Perfect Packaging</span>
				<br />- <GreyTitleSection>Design, Customize</GreyTitleSection>,
				Order &
				<br />
				<GreyTitleSection>Track</GreyTitleSection>
			</Title>
			<HeaderText>
				Empower your brand with sustainable, smart packaging that’s easy
				to create, customize, and order. Gain valuable insights into
				customer engagement through detailed QR code analytics
			</HeaderText>
            <HeaderCTA>
                <CreateDesignBtn>Create My Own Design</CreateDesignBtn>
                <ExploreTemplateBtn>Explore Templates</ExploreTemplateBtn>
            </HeaderCTA>
		</Wrapper>
	);
};

const Wrapper = styled(Container)`
	margin-top: 50px;
`;

const SubText = styled.p`
	text-align: center;
`;

const Title = styled.h1`
	font-weight: 700;
	font-size: 45px;
	margin: 20px 0;
	text-align: center;
`;

const GreyTitleSection = styled.span`
	color: #767676;
`;

const HeaderText = styled.p`
	text-align: center;
	width: 70%;
	margin: 50px auto 50px auto;
`;

const HeaderCTA = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CreateDesignBtn = styled.button`
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

const ExploreTemplateBtn = styled(CreateDesignBtn)`
	background-color: #EEEEEE;
    margin-top: 15px;
`;
