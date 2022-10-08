import {
	Billing,
	Business,
	CardDeal,
	Client,
	CTA,
	Footer,
	Hero,
	Navbar,
	Stats,
	Testimonials,
} from "./components";
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
