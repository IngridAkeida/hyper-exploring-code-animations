import { gsap } from "gsap";

function init() {
	const tl = gsap.timeline({});
	tl.to("button", {
		rotate: 360,
		ease: "power2.out",
		duration: 1,
		stagger: 0.05,
	}).to("button", {
		rotateX: 360,
		ease: "power2.out",
		duration: 1,
		stagger: 0.05,
	});
}

window.addEventListener("load", init);
