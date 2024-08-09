"use client";

import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	max-width: 85%;
	margin: auto;

	@media screen and (max-width: 768px) {
		width: 95%;
	}
`;

export const Spacer = styled.div`
    height: 100px;
    width: 100%;
`