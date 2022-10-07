import React from "react";
import Billing from "./components/Billing";
import Business from "./components/Business";
import Button from "./components/Button";
import CardDeal from "./components/CardDeal";
import Client from "./components/Client";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import styles from "./style";

const App = () => (
	<div className='bg-primary w-full overflow-hidden'>
		<div className={`${styles.paddingX} ${styles.flexCenter}`}>
			<div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
		</div>

		{/* Hero Section */}

		<div className={`bg-primary ${styles.flexStart}`}>
			<div className={`${styles.box - width}`}>
        <Hero />
      </div>
		</div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
			<div className={`${styles.box - width}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Client />
        <CTA />
        <Footer />
      </div>
		</div>



	</div>
);

export default App;
