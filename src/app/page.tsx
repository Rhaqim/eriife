import Section from "@/components/Sections";

const sectionsData = [
	{
		backgroundImage: "/images/covers/adore.jpg",
		music: "/music/albums/adore",
		title: "Adore",
	},
	{
		backgroundImage: "/images/covers/november.jpg",
		music: "/music/albums/november",
		title: "November",
	},
	{
		backgroundImage: "/images/covers/come-on-home.jpg",
		music: "/music/albums/come-on-home",
		title: "Come on Home",
	},
	{
		backgroundImage: "/images/covers/esquire.jpg",
		music: "/music/albums/esquire",
		title: "Esquire",
	},
];

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col">
			<div className="section relative h-screen flex w-full">
				Introduction
			</div>
			{sectionsData.map((section, index) => (
				<Section
					key={index}
					backgroundImage={section.backgroundImage}
					music={section.music}
				>
					<p className="text-4xl font-bold text-white">{section.title}</p>
				</Section>
			))}
		</main>
	);
}
