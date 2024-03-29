"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface MusicSectionProps {
	backgroundImage: string;
	music: string;
	children: React.ReactNode;
}

const MusicSection: React.FC<MusicSectionProps> = ({
	backgroundImage,
	music,
	children,
}) => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const [isInViewport, setIsInViewport] = useState<boolean>(false);

	const image = `/images/covers/${backgroundImage}`;

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 0.5, // Adjust the threshold as needed
		};

		const callback: IntersectionObserverCallback = entries => {
			entries.forEach(entry => {
				setIsInViewport(entry.isIntersecting);
			});
		};

		const observer = new IntersectionObserver(callback, options);

		const target = sectionRef.current;
		if (target) {
			observer.observe(target);
		}

		return () => {
			if (target) {
				observer.unobserve(target);
			}
		};
	}, []); // Only run this effect once when the component mounts

	useEffect(() => {
		if (isInViewport) {
			// Update background image and play music when in viewport
			document.body.style.backgroundImage = `url(${image})`;
			document.body.style.backgroundAttachment = "fixed";
			document.body.style.backgroundSize = "cover";
			document.body.style.backgroundPosition = "center";
			document.body.style.backdropFilter = "blur(5px) brightness(0.5)";
			document.body.style.transition = "background-image 1s ease-in-out";

			const audioElement = new Audio(music);
			audioElement.play();

			// Clean up the background image and pause music when leaving the viewport
			return () => {
				document.body.style.backgroundImage = "";
				audioElement.pause();
			};
		}
	}, [isInViewport, image, music]);

	return (
		<div
			ref={sectionRef}
			className="section relative h-screen flex w-full items-center justify-center scroll-smooth"
		>
			<div className="absolute top-0 left-0 w-full h-full bg-cover bg-left filter blur-lg"></div>
			<div className="flex flex-row justify-evenly items-center p-8 w-full">
				{/* Image */}
				<div className="w-[400px] h-[400px]">
					<Image
						src={image}
						alt="Album Cover"
						// layout="responsive"
						width={400}
						height={400}
					/>
				</div>

				{/* Text Description */}
				<div
					className="bg-gray-800 bg-opacity-50 p-4 rounded-xl min-w-[400px]"
					style={{ backdropFilter: "blur(5px)" }}
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export default MusicSection;
