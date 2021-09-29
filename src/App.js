import React, { useState } from "react";
import "./styles.css";

const allGenres = {
	computerscience: [
		{
			name: "The C Programming Language",
			description:
				"The C Programming Language is a computer programming book written by Brian Kernighan and Dennis Ritchie.",
			rating: "4.6/5",
			ebook: "http://cslabcms.nju.edu.cn/problem_solving/images/c/cc/The_C_Programming_Language_%282nd_Edition_Ritchie_Kernighan%29.pdf"
		},
		{
			name: "Introduction to Algorithms",
			description:
				"Introduction to Algorithms is a book on computer programming by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein.",
			rating: "4.8/5",
			ebook: "https://web.iiit.ac.in/~pratik.kamble/storage/Algorithms/Cormen_Algorithms_3rd.pdf"
		},
		{
			name: "Structure and Interpretation of Computer Programs",
			description:
				"Structure and Interpretation of Computer Programs is a computer science textbook by Massachusetts Institute of Technology professors Harold Abelson and Gerald Jay Sussman with Julie Sussman.",
			rating: "4.5/5",
			ebook: "https://web.mit.edu/alexmv/6.037/sicp.pdf"
		},
		{
			name: "Operating Systems: Three Easy Pieces",
			description:
				"he book is centered around three conceptual pieces that are fundamental to operating systems: virtualization, concurrency, and persistence.",
			rating: "4/5",
			ebook: "https://pages.cs.wisc.edu/~remzi/OSTEP/"
		}
	],

	productivity: [
		{
			name: "Getting Things Done",
			description:
				"Getting Things Done is a personal productivity system developed by David Allen and published in a book of the same name.",
			rating: "4/5",
			ebook: "https://www.amazon.in/Getting-Things-Done-Stress-free-Productivity/dp/0349410151"
		},
		{
			name: "The ONE Thing",
			description:
				"The One Thing: The Surprisingly Simple Truth Behind Extraordinary Results is a non-fiction self-help book written by authors and real estate entrepreneurs Gary W. Keller and Jay Papasan.",
			rating: "4/5",
			ebook: "https://www.amazon.in/One-Thing-Gary-Keller/dp/1848549601"
		},
		{
			name: "Deep Work",
			description:
				"One of the most valuable skills in our economy is becoming increasingly rare. If you master this skill, you'll achieve extraordinary results.",
			rating: "4/5",
			ebook: "https://www.amazon.in/Deep-Work-Focused-Success-Distracted/dp/0349413681"
		},
		{
			name: "Essentialism: The Disciplined Pursuit of Less",
			description:
				"Have you ever found yourself struggling with information overload? Have you ever felt both overworked and underutilised? Do you ever feel busy but not productive? If you answered yes to any of these, the way out is to become an Essentialist.",
			rating: "4/5",
			ebook: "https://www.amazon.in/Essentialism-Disciplined-Pursuit-Greg-McKeown/dp/0804137382"
		}
	],

	startup: [
		{
			name: "Zero to One",
			description:
				"Zero to One: Notes on Startups, or How to Build the Future is a 2014 book by the American entrepreneur and investor Peter Thiel co-written with Blake Masters.",
			rating: "4.8/5",
			ebook: "https://www.amazon.in/Zero-One-Notes-Startups-Future/dp/0804139296"
		},
		{
			name: "The Lean Startup",
			description:
				"The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses is a book by Eric Ries describing his proposed lean startup strategy for startup companies.",
			rating: "4.5/5",
			ebook: "https://www.youtube.com/watch?v=RlfooqeZcdY"
		},
		{
			name: "The $100 Startup",
			description:
				"Chris Guillebeau shows you how to lead a life of adventure, meaning and purpose--and earn a good living. Still in his early thirties, Chris has traveled around the world--and yet he's never held a real job or earned a regular paycheck.",
			rating: "4/5",
			ebook: "https://www.amazon.in/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898"
		},
		{
			name: "The Hard Thing About Hard Things",
			description:
				"Ben Horowitz, cofounder of Andreessen Horowitz and one of Silicon Valley's most respected and experienced entrepreneurs, offers essential advice on building and running a startup.",
			rating: "4/5",
			ebook: "https://www.amazon.in/Hard-Thing-about-Building-Business/dp/0062273205"
		}
	]
};

export default function App() {
	const [genre, setGenre] = useState("computerscience");
	function onClickHandler(genre) {
		setGenre(genre);
	}

	return (
		<div className="App">
			<h1>
				<span role="img" aria-label="Clapper Board">
        📕
				</span>{" "}
				myBook Recommendations
			</h1>
			<p>Check out my favourite books. Select a genre to get started.</p>

			<div>
				{Object.keys(allGenres).map((genre) => (
					<button
						key={genre}
						className="genreSelectorButton"
						onClick={() => onClickHandler(genre)}
					>
						{genre.charAt(0).toUpperCase() + genre.slice(1)}
					</button>
				))}
			</div>
			<hr />

			<div>
				<ul style={{ paddingInlineStart: "0px" }}>
					{allGenres[genre].map((book) => (
						<li className="listItem" key={book.name}>
							<span className="nameTxt">{book.name}</span>
							<span className="ratingTxt">{book.rating}</span>
							<div className="descriptionTxt">
								{book.description}
							</div>
							<div className="ebookDiv">
								<a href={book.ebook} className="ebookLink">
									e/book
								</a>
							</div>
						</li>
					))}
				</ul>
			</div>
			<hr />
			<div>
				Built with{" "}
				<span role="img" aria-label="Red Heart">
					❤️
				</span>{" "}
				by{" "}
				<a
					href="https://harshbisle.github.io/"
					style={{
						textDecoration: "none",
						fontSize: "1.1rem",
						color: "var(--primary-color)"
					}}
				>
					Harshu
				</a>
			</div>
			<a href="https://twitter.com/Harshav33024291/">
				<img
					alt="Twitter Icon"
					src="https://image.flaticon.com/icons/png/512/1384/1384017.png"
				/>
			</a>
			<a href="https://github.com/harshbisle/">
				<img
					alt="GitHub Icon"
					src="https://image.flaticon.com/icons/png/512/733/733609.png"
				/>
			</a>
			<a href="https://in.linkedin.com/in/harshavardhan-b-712358178/">
				<img
					alt="LinkedIn Icon"
					src="https://image.flaticon.com/icons/png/512/1384/1384014.png"
				/>
			</a>
		</div>
	);
}