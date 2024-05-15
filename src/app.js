import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
function init() {
	gsap.registerPlugin(ScrollTrigger);
	const string = document.querySelector(".letters").innerHTML;
	document.querySelector(".letters").innerHTML = "";
	string.split("").forEach((letter) => {
		const span = document.createElement("span");
		span.innerHTML = letter === " " ? "&nbsp;" : letter;
		console.log(letter === " ");
		document.querySelector(".letters").append(span);
	});
	gsap.to(".black", {
		opacity: 0,
		scale: 10,
		duration: 1,
		scrollTrigger: {
			trigger: ".red",
			start: "top bottom",
			end: "center",
			markers: true,
			scrub: false,
			toggleActions: "play pause resume reset",
			id: "first-section",
		},
	});
	gsap.to(".letters span", {
		y: 0,
		duration: 0.25,
		stagger: 0.05,
		ease: "power2.out",
		scrollTrigger: {
			trigger: ".red",
			start: "top top",
			end: "center",
			markers: true,
			scrub: 1,
			id: "second-section",
		},
	});
}

window.addEventListener("load", init);
