"use client";

import { Banner } from "@/components/banner";
import { NavigationBar } from "@/components/navigation-bar";
import React from "react";
import { Footer } from "@/components/footer";
import { BlankSection } from "./blank-section";
import { WhatIsTivora } from "./what-is-tivora";
import { OutBeliefSystem } from "./our-belief-system";
import { Spacer } from "@/components/styled-components";

export const AboutPageContainer = () => {
	return (
		<div>
			<Banner />
			<NavigationBar isHomePage={false} />
			<BlankSection />
			<WhatIsTivora />
			<OutBeliefSystem />
			<BlankSection />
            <Spacer />
			<Footer />
		</div>
	);
};
