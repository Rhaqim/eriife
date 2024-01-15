import Section from "@/components/Sections";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="section relative h-screen flex overflow-hidden w-full">Introduction</div>
			<Section
				backgroundImage="/images/covers/adore.jpg"
				music="/music/albums/adore"
			>
				<p className="text-4xl font-bold text-white">Adore</p>
			</Section>
			<Section
				backgroundImage="/images/covers/november.jpg"
				music="/music/albums/adore"
			>
				<p className="text-4xl font-bold text-white">November</p>
			</Section>
		</main>
	);
}
