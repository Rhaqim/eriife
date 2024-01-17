import Introduction from "@/components/Intro";
import MusicCard from "@/components/Music/MusicCard";
import MusicSection from "@/components/Music/MusicCoverSections";

const sectionsData = [
	{
		backgroundImage: "adore.jpg",
		music: "/music/albums/adore",
		title: "Adore",
		producers: "Producers: ",
		released: "Released: ",
		background: "Background: ",
		link: "Link: ",
	},
	{
		backgroundImage: "november.jpg",
		music: "/music/albums/november",
		title: "November",
		producers: "Producers: ",
		released: "Released: ",
		background: "Background: ",
		link: "Link: ",
	},
	{
		backgroundImage: "come-on-home.jpg",
		music: "/music/albums/come-on-home",
		title: "Come on Home",
		producers: "Producers: ",
		released: "Released: ",
		background: "Background: ",
		link: "Link: ",
	},
	{
		backgroundImage: "esquire.jpg",
		music: "/music/albums/esquire",
		title: "Esquire",
		producers: "Producers: ",
		released: "Released: ",
		background: "Background: ",
		link: "Link: ",
	},
	{
		backgroundImage: "dfw.jpg",
		music: "/music/albums/esquire",
		title: "Dear Future Wife",
		producers: "Producers: ",
		released: "Released: ",
		background: "Background: ",
		link: "Link: ",
	},
];

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col scroll-smooth">
			<Introduction />
			{sectionsData.map((section, index) => (
				<MusicSection
					key={index}
					backgroundImage={section.backgroundImage}
					music={section.music}
				>
					<MusicCard
						title={section.title}
						producers={section.producers}
						released={section.released}
						background={section.background}
						link={section.link}
					/>
				</MusicSection>
			))}
		</main>
	);
}
