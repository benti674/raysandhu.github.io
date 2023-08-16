// CODE TO TRIAL X-AXIS HIGHLIGHTING OF NUCLEOBASES

// const sidebar = document.querySelector('.sidebar');
// const nucleobases = document.querySelectorAll('.nucleobase');

// if (sidebar) {
// 	sidebar.addEventListener('mousemove', (event) => {
// 		const x = event.clientX - sidebar.getBoundingClientRect().left;
// 		console.log($el_size); // not a defined value
// 		nucleobases.forEach((nucleobase, index) => {
// 			const nucleobaseX = index * ($el_size * 1.7); //undefined
// 			if (x >= nucleobaseX && x < nucleobaseX + $el_size) {
// 				nucleobase.classList.add('enlarge');
// 				console.log('Enlarging at ', x);
// 			} else {
// 				nucleobase.classList.remove('enlarge');
// 			}
// 		});
// 		console.log('Something happened');
// 	});
// }

// Get the elements
// const triggerElement = document.querySelector('intro-bio');
// const animatedElement = document.querySelector('intro-bio');

// // Function to add animation class when scrolled to the trigger element
// function handleScroll() {
// 	const triggerPosition = triggerElement.getBoundingClientRect().top;
// 	const windowHeight = window.innerHeight;

// 	if (triggerPosition - windowHeight <= 0) {
// 		animatedElement.classList.add('element-animate');
// 		// Remove the scroll event listener after triggering the animation
// 		window.removeEventListener('scroll', handleScroll);
// 	}
// }

// // Add a scroll event listener to trigger the animation when scrolled to the trigger element
// window.addEventListener('scroll', handleScroll);

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.vertical-navbar a');

function highlightMenuItem() {
	sections.forEach((section, index) => {
		const top = section.offsetTop;
		const bottom = top + section.offsetHeight;

		if (window.scrollY >= top && window.scrollY < bottom) {
			navLinks.forEach((link) => link.classList.remove('active'));
			navLinks[index].classList.add('active');
			console.log(navLinks[index]);
		}
	});
}

window.addEventListener('scroll', highlightMenuItem);
