"use client";

import React from "react";
import styled from "styled-components";

export const Banner = () => {
	return (
		<Wrapper>
			JOIN OUR COMMUNITY TO STAY UPDATED WITH NEW BUSINESS VENTURES AND
			PACKAGING DEALS
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: #767676;
	color: #ffffff;
	height: 55px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 18px;
	font-weight: 600;
	letter-spacing: 0.8px;

	@media screen and (max-width: 768px) {
		padding: 50px 30px;
        font-size: 15px;
	}
`;
