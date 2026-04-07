/* Refactored behaviors: Menu, Smooth Scroll, Active Nav, Sticky Header */
/* Replace custom.260214183338.js with vanilla JS (no builder dependency) */

(function() {
	// ===== 1. MENU TOGGLE (vanilla) =====
	const initMenu = function() {
		const menuWrapper = document.querySelector('.menu-wrapper');
		if (!menuWrapper) return;

		const body = document.body;
		const menu = menuWrapper.querySelector('.ed-menu');
		const menuTrigger = menuWrapper.querySelector('.menu-trigger');
		const menuLinks = menu ? menu.querySelectorAll('a') : [];

		if (!menuTrigger || !menu) return;

		menuTrigger.setAttribute('aria-expanded', 'false');
		menuTrigger.setAttribute('aria-controls', menu.id);

		// Toggle menu on button click
		menuTrigger.addEventListener('click', function() {
			const isExpanded = menuTrigger.getAttribute('aria-expanded') === 'true';
			menuTrigger.setAttribute('aria-expanded', !isExpanded);
			menuTrigger.classList.toggle('open');
			menu.classList.toggle('open');
			menu.classList.toggle('open-menu');

			if (!isExpanded) {
				menu.setAttribute('tabindex', '0');
				menu.focus();
				menu.addEventListener('blur', function onBlur() {
					menu.removeAttribute('tabindex');
					menu.removeEventListener('blur', onBlur);
				}, { once: true });
			}
		});

		// Close menu when link is clicked
		menuLinks.forEach(link => {
			link.addEventListener('click', function() {
				menuTrigger.setAttribute('aria-expanded', 'false');
				menuTrigger.classList.remove('open');
				menu.classList.remove('open');
				menu.classList.remove('open-menu');
			});
		});
	};

	// ===== 2. SMOOTH SCROLL (vanilla) =====
	const initSmoothScroll = function() {
		const scrollOffset = 20;
		const menuWrapper = document.querySelector('.menu-wrapper');
		const menu = menuWrapper ? menuWrapper.querySelector('.ed-menu') : null;
		const menuLinks = menu ? menu.querySelectorAll('a') : [];
		const scrollLinks = document.querySelectorAll('.scroll a');

		const allLinks = Array.from(menuLinks).concat(Array.from(scrollLinks));

		allLinks.forEach(link => {
			if (!link.hash) return;

			link.addEventListener('click', function(e) {
				let target = null;

				if (link.hash === '#!next') {
					const closest = link.closest('.ed-element');
					target = closest ? closest.nextElementSibling : null;
				} else {
					try {
						target = document.querySelector(link.hash);
					} catch (err) {
						return;
					}
				}

				if (!target) return;
				e.preventDefault();

				// Vanilla smooth scroll
				target.scrollIntoView({ behavior: 'smooth', block: 'start' });

				// Adjust for sticky header offset
				const rect = target.getBoundingClientRect();
				if (rect.top < scrollOffset) {
					window.scrollBy({ top: rect.top - scrollOffset, behavior: 'smooth' });
				}
			});
		});
	};

	// ===== 3. ACTIVE NAV LINK HIGHLIGHT (vanilla) =====
	const initActiveLinkHighlight = function() {
		const menuWrapper = document.querySelector('.menu-wrapper');
		const menu = menuWrapper ? menuWrapper.querySelector('.ed-menu') : null;
		const menuLinks = menu ? menu.querySelectorAll('a') : [];

		const updateActiveLinks = function() {
			const viewportRatio = 2 / 3; // 66%+ visible

			menuLinks.forEach(link => {
				if (!link.hash) return;

				let target = null;
				try {
					target = document.querySelector(link.hash);
				} catch (err) {
					return;
				}

				if (!target) {
					link.classList.remove('active');
					return;
				}

				const rect = target.getBoundingClientRect();
				const viewportHeight = window.innerHeight;
				const targetHeight = rect.height;
				const visibleTop = Math.max(0, rect.top);
				const visibleBottom = Math.min(viewportHeight, rect.bottom);
				const visibleRatio = (visibleBottom - visibleTop) / viewportHeight;

				if (visibleRatio >= viewportRatio) {
					link.classList.add('active');
				} else {
					link.classList.remove('active');
				}
			});
		};

		// Update on scroll and resize
		window.addEventListener('scroll', updateActiveLinks, { passive: true });
		window.addEventListener('resize', updateActiveLinks, { passive: true });

		// Initial call
		updateActiveLinks();
	};

	// ===== 4. STICKY HEADER (vanilla, simplified) =====
	const initStickyHeader = function() {
		const menuWrapper = document.querySelector('.menu-wrapper');
		if (!menuWrapper) return;

		const banner = document.querySelector('#ed-1725307861');
		let stickyThreshold = banner ? banner.getBoundingClientRect().height + banner.offsetTop : menuWrapper.offsetHeight;

		const updateSticky = function() {
			const scrollTop = window.scrollY || document.documentElement.scrollTop;

			if (scrollTop > stickyThreshold) {
				menuWrapper.classList.add('sticky');
				const height = menuWrapper.offsetHeight;
				document.body.style.setProperty('--spacer-height', height + 'px');
			} else {
				menuWrapper.classList.remove('sticky');
				document.body.style.setProperty('--spacer-height', '');
			}
		};

		const resizeObserver = new ResizeObserver(function() {
			stickyThreshold = banner ? banner.getBoundingClientRect().height + banner.offsetTop : menuWrapper.offsetHeight;
			updateSticky();
		});

		resizeObserver.observe(menuWrapper);
		if (banner) resizeObserver.observe(banner);

		window.addEventListener('scroll', updateSticky, { passive: true });
		window.addEventListener('resize', updateSticky, { passive: true });

		// Initial call
		updateSticky();
	};

	// ===== INITIALIZE ALL =====
	document.addEventListener('DOMContentLoaded', function() {
		// iOS touchstart hack
		document.addEventListener('touchstart', function() {}, false);

		initMenu();
		initSmoothScroll();
		initActiveLinkHighlight();
		initStickyHeader();
	});

	// Also run on page load if DOMContentLoaded already fired
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', function() {
			initMenu();
			initSmoothScroll();
			initActiveLinkHighlight();
			initStickyHeader();
		});
	} else {
		initMenu();
		initSmoothScroll();
		initActiveLinkHighlight();
		initStickyHeader();
	}
})();
