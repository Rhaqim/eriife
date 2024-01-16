import React from "react";

interface MusicCardProps {
	title: string;
	producers: string;
	released: string;
	background: string;
	link: string;
}

const MusicCard: React.FC<MusicCardProps> = ({
	title,
	producers,
	released,
	background,
	link,
}) => {
	return (
		<div className="w-full h-72 flex flex-col justify-center items-center">
			<a href={link} target="_blank" rel="noopener noreferrer">
				<div className="w-full h-full flex flex-col justify-center items-center">
					<div className="w-full h-full flex flex-col justify-center items-center">
						<div className="w-full h-full flex flex-col justify-center items-center">
							<p className="text-4xl font-bold text-white">{title}</p>
							<p className="text-2xl font-bold text-white">{producers}</p>
							<p className="text-2xl font-bold text-white">{released}</p>
						</div>
					</div>
				</div>
			</a>
		</div>
	);
};

export default MusicCard;
