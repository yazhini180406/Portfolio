// Yazhini R Portfolio Interactivity Script

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. System Boot Loader Animation
    const loader = document.getElementById('loader');
    const loaderBar = document.getElementById('loader-bar');
    const loaderPercent = document.getElementById('loader-percent');
    const loaderLog = document.getElementById('loader-log');

    const logs = [
        "Synthesize...",
        "Initializing system registers...",
        "Configuring React.js & Spring Boot abstraction layers...",
        "Loading Machine Learning & Data pipelines...",
        "System Ready."
    ];

    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 8) + 3;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                if (loader) {
                    loader.style.opacity = '0';
                    loader.style.visibility = 'hidden';
                }
            }, 300);
        }

        if (loaderBar) loaderBar.style.width = `${progress}%`;
        if (loaderPercent) loaderPercent.textContent = String(progress).padStart(3, '0');

        const logIndex = Math.min(Math.floor((progress / 100) * logs.length), logs.length - 1);
        if (loaderLog) loaderLog.textContent = logs[logIndex];
    }, 40);

    // 2. Rotating Subtitle Headline
    const rotatingText = document.getElementById('rotating-text');
    const titles = [
        "Full-Stack Software Engineer",
        "React Specialist",
        "Spring Boot & Java Developer",
        "AI & Data Science Enthusiast"
    ];
    let titleIndex = 0;

    if (rotatingText) {
        setInterval(() => {
            titleIndex = (titleIndex + 1) % titles.length;
            rotatingText.style.opacity = '0';
            setTimeout(() => {
                rotatingText.textContent = titles[titleIndex];
                rotatingText.style.opacity = '1';
            }, 250);
        }, 3000);
    }

    // 3. Workflow Tab Switcher (Architect, Frontend, Backend, Analytics, Deploy)
    const workflowTabs = document.querySelectorAll('.workflow-tab');
    const workflowPanes = document.querySelectorAll('.workflow-pane');

    workflowTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');

            workflowTabs.forEach(t => t.classList.remove('active'));
            workflowPanes.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            const targetPane = document.getElementById(`tab-${target}`);
            if (targetPane) targetPane.classList.add('active');
        });
    });

    // 4. Mobile Navigation Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navPill = document.getElementById('nav-pill');

    if (mobileToggle && navPill) {
        mobileToggle.addEventListener('click', () => {
            navPill.classList.toggle('show');
        });

        navPill.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navPill.classList.remove('show');
            });
        });
    }

    // 5. Active Link Highlight on Scroll
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 250;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // 6. Scroll Fade-in Reveal Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 7. Initialize HLS Earth Mux Video Background (Hero & Contact)
    const hlsSource = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
    
    function setupHlsVideo(videoElement) {
        if (!videoElement) return;
        if (typeof Hls !== 'undefined' && Hls.isSupported()) {
            const hls = new Hls({
                maxMaxBufferLength: 10,
                enableWorker: true,
                lowLatencyMode: true,
            });
            hls.loadSource(hlsSource);
            hls.attachMedia(videoElement);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                videoElement.play().catch(() => {});
            });
        } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
            videoElement.src = hlsSource;
            videoElement.addEventListener('loadedmetadata', () => {
                videoElement.play().catch(() => {});
            });
        }
    }

    setupHlsVideo(document.getElementById('hero-video'));
    setupHlsVideo(document.getElementById('contact-video'));
});
