        document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.getElementById('menuToggle');
            const mobileNav = document.getElementById('mobileNav');
            const mobileNavLinks = document.querySelectorAll('.header__mobile-nav-link');
            
            menuToggle.addEventListener('click', function() {
                menuToggle.classList.toggle('active');
                mobileNav.classList.toggle('active');
            });
            
            mobileNavLinks.forEach(link => {
                link.addEventListener('click', () => {
                    menuToggle.classList.remove('active');
                    mobileNav.classList.remove('active');
                });
            });
            
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            const scrollDown = document.getElementById('scrollDown');
            if (scrollDown) {
                scrollDown.addEventListener('click', () => {
                    window.scrollTo({
                        top: document.querySelector('#historia').offsetTop - 80,
                        behavior: 'smooth'
                    });
                });
            }
            
            const header = document.getElementById('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
            
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        
                        if (entry.target.classList.contains('conservation__info')) {
                            const listItems = entry.target.querySelectorAll('.conservation__list li');
                            listItems.forEach(item => {
                                item.classList.add('visible');
                            });
                        }
                    }
                });
            }, observerOptions);
            
            const fadeElements = document.querySelectorAll('.fade-in, .curiosity-card, .gallery__item, .stat-card, .habitat__map, .habitat__info, .conservation__info');
            fadeElements.forEach(el => {
                observer.observe(el);
            });
        });