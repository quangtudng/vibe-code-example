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

		const closeMenu = function() {
			menuTrigger.setAttribute('aria-expanded', 'false');
			menuTrigger.classList.remove('open');
			menu.classList.remove('open');
			body.classList.remove('open-menu');
		};

		// Toggle menu on button click
		menuTrigger.addEventListener('click', function() {
			const isExpanded = menuTrigger.getAttribute('aria-expanded') === 'true';
			menuTrigger.setAttribute('aria-expanded', !isExpanded);
			menuTrigger.classList.toggle('open');
			menu.classList.toggle('open');
			body.classList.toggle('open-menu');

			if (!isExpanded) {
				menu.setAttribute('tabindex', '0');
				menu.focus();
			}
		});

		// Close menu when link is clicked
		menuLinks.forEach(link => {
			link.addEventListener('click', closeMenu);
		});

		// Close menu on Escape key
		document.addEventListener('keydown', function(e) {
			if (e.key === 'Escape' && body.classList.contains('open-menu')) {
				closeMenu();
			}
		});
	};

	// ===== 2. SMOOTH SCROLL (vanilla) =====
	const initSmoothScroll = function() {
		const defaultOffset = 20;
		const menuWrapper = document.querySelector('.menu-wrapper');
		const menu = menuWrapper ? menuWrapper.querySelector('.ed-menu') : null;
		const menuLinks = menu ? menu.querySelectorAll('a') : [];
		const scrollLinks = document.querySelectorAll('.scroll a');
		const ctaLinks = document.querySelectorAll('.ed-button a[href*="#"]');

		const allLinks = Array.from(menuLinks).concat(Array.from(scrollLinks)).concat(Array.from(ctaLinks));

		allLinks.forEach(link => {
			if (!link.hash) return;
			if (link.dataset.smoothBound === 'true') return;
			link.dataset.smoothBound = 'true';

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

				const headerOffset = menuWrapper ? menuWrapper.offsetHeight + 8 : defaultOffset;
				const targetTop = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;

				window.scrollTo({
					top: Math.max(0, targetTop),
					behavior: 'smooth'
				});
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

		// Update on scroll (passive) and debounced resize
		let resizeRaf = 0;
		window.addEventListener('scroll', updateActiveLinks, { passive: true });
		window.addEventListener('resize', function() {
			cancelAnimationFrame(resizeRaf);
			resizeRaf = requestAnimationFrame(updateActiveLinks);
		}, { passive: true });

		// Initial call
		updateActiveLinks();
	};

	// ===== 4. STICKY HEADER =====
	// Navigation uses CSS `position: sticky` — no JS class toggling needed.
	// Box-shadow is applied permanently via CSS. This function is intentionally a no-op.
	const initStickyHeader = function() {};

	// ===== INITIALIZE ALL =====
	const initAll = function() {
		document.addEventListener('touchstart', function() {}, false);
		initMenu();
		initSmoothScroll();
		initActiveLinkHighlight();
		initStickyHeader();
	};

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initAll, { once: true });
	} else {
		initAll();
	}
})();
