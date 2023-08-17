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

function highlightMenuItem() {
	sections.forEach((section, index) => {
		const top = section.offsetTop;
		const bottom = top + section.offsetHeight;

		if (window.scrollY >= top && window.scrollY < bottom) {
			navLinks.forEach((link) => link.classList.remove('active'));
			navLinks[index].classList.add('active');
		}
	});
}

window.addEventListener('scroll', highlightMenuItem);
