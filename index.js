// CODE TO TRIAL X-AXIS HIGHLIGHTING OF NUCLEOBASES

// const sidebar = document.querySelector('.dna-bar');
// const nucleobases = document.querySelectorAll('.nucleobase');

// if (sidebar) {
// 	sidebar.addEventListener('mousemove', (event) => {
// 		const x = event.clientX - sidebar.getBoundingClientRect().left;
// 		nucleobases.forEach((nucleobase, index) => {
// 			console.log('working');
// 			const nucleobaseX = index * ($el_size * 1.7); //undefined
// 			if (x >= nucleobaseX && x < nucleobaseX + $el_size) {
// 				nucleobase.classList.add('enlarge');
// 				console.log('Enlarging at ', x);
// 			} else {
// 				nucleobase.classList.remove('enlarge');
// 			}
// 		});
// 	});
// }

const sections = document.querySelectorAll('.main-display-container');
const navLinks = document.querySelectorAll('.vertical-navbar a');

function highlightMenuItem(index) {
	navLinks.forEach((link) => link.classList.remove('active'));
	navLinks[index].classList.add('active');
}

function setActiveSection() {
	let scrollPosition = window.scrollY;

	sections.forEach((section, index) => {
		const top = section.offsetTop - 20;
		const bottom = top + section.offsetHeight;

		if (scrollPosition >= top && scrollPosition < bottom) {
			highlightMenuItem(index);
		}
	});
}

function handleNavLinkClick(event) {
	event.preventDefault();
	const targetId = event.currentTarget.getAttribute('href');
	const targetSection = document.querySelector(targetId);
	const index = [...sections].indexOf(targetSection);

	if (index !== -1) {
		highlightMenuItem(index);

		// Instead of scrollIntoView(), use window.scrollTo() for better control
		const yOffset = targetSection.getBoundingClientRect().top + window.scrollY;
		window.scrollTo({ top: yOffset, behavior: 'smooth' });

		// Ensure the scroll event still fires after the smooth scroll
		setTimeout(setActiveSection, 600);
	}
}

// Ensure mobile browsers re-detect the active section when scrolling
window.addEventListener('scroll', setActiveSection, { passive: true });

// Fix for mobile touch behavior not triggering updates
window.addEventListener('touchmove', setActiveSection, { passive: true });

navLinks.forEach((link) => {
	link.addEventListener('click', handleNavLinkClick);
});