"use client";

import { Container } from "@/components/styled-components";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import QrCodeIconSrc from "@/assets/icons/qr-code.svg";

export const QrCodeSection = () => {
	return (
		<Wrapper>
			<Container>
				<MainContent>
					<QrCodeWrapper>
						<QrCode>
							<Image
								src={QrCodeIconSrc}
								alt="Qr code"
							/>
						</QrCode>
					</QrCodeWrapper>
					<QrCodeInfoSection>
						<QrCodeTitle>
							<span>Unlock Endless Possibilities:</span> <br />
							<span>Link Your QR Code to Any URL!</span>
						</QrCodeTitle>
						<QrCodeText>
							Discover the magic of dynamic QR codes! Easily
							connect your customers to any website, product page,
							or exclusive content with a simple scan.
						</QrCodeText>
					</QrCodeInfoSection>
				</MainContent>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: #bababa;
	margin: 60px auto;
`;

const QrCodeWrapper = styled.div`
	width: 35%;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

const QrCode = styled.div`
	background-color: #d9d9d9;
	border-radius: 16px;
	padding: 30px 20px;
	width: 300px;

	img {
		width: 100%;
		height: 100%;
	}
`;

const MainContent = styled.div`
	padding: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

const QrCodeInfoSection = styled.div`
	width: 60%;

	@media screen and (max-width: 768px) {
		width: 100%;
        margin-top: 50px;
	}
`;

const QrCodeTitle = styled.h3`
	font-size: 30px;
	font-weight: 600;
	margin-bottom: 10px;
`;

const QrCodeText = styled.p`
	font-size: 18px;
`;
