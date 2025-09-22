        document.addEventListener('DOMContentLoaded', () => {
            const menuToggle = document.querySelector('.menu-toggle');
            const navMenu = document.querySelector('.nav-menu');
            const menuOverlay = document.querySelector('.menu-overlay');
            const navLinks = document.querySelectorAll('.nav-menu a');

            function toggleMenu() {
                const isMenuOpen = menuToggle.classList.toggle('open');
                navMenu.classList.toggle('open');
                menuOverlay.classList.toggle('open');
                
                // Prevenir el scroll del body cuando el menú está abierto
                document.body.style.overflow = isMenuOpen ? 'hidden' : '';
                
                if (isMenuOpen) {
                    navLinks.forEach((link, index) => {
                        link.style.transitionDelay = `${0.2 + index * 0.1}s`;
                    });
                } else {
                    navLinks.forEach(link => link.style.transitionDelay = '0s');
                }
            }

            menuToggle.addEventListener('click', () => {
                toggleMenu();
            });

            menuOverlay.addEventListener('click', () => {
                if (navMenu.classList.contains('open')) {
                    toggleMenu();
                }
            });

            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (navMenu.classList.contains('open')) {
                        toggleMenu();
                    }
                });
            });

            // Animación al hacer scroll
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.2,
                rootMargin: "0px 0px -100px 0px"
            });

            document.querySelectorAll('.animate-on-scroll').forEach(element => {
                observer.observe(element);
            });
        });