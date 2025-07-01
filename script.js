document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
    feather.replace();
    setCurrentYear();
    fetchGitHubProfile('lucasonline0');
    setupScrollAnimations();
    setupNavHighlighting();
}

async function fetchGitHubProfile(username) {
    const apiUrl = `https://api.github.com/users/${username}`;
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Não foi possível buscar os dados do GitHub.');
        }
        const data = await response.json();

        const profilePic = document.getElementById('profile-pic');
        const githubBio = document.getElementById('github-bio');

        if (profilePic && data.avatar_url) {
            profilePic.src = data.avatar_url;
        }
        if (githubName && data.name) {
            githubName.textContent = data.name;
        }
        if (githubBio && data.bio) {
            githubBio.textContent = data.bio;
        }

    } catch (error) {
        console.error("Erro ao buscar perfil do GitHub:", error);
        const githubBio = document.getElementById('github-bio');
        if (githubBio) {
            githubBio.textContent = "Desenvolvedor Full-Stack apaixonado por criar soluções inovadoras e eficientes através da tecnologia.";
        }
    }
}

function setCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function setupScrollAnimations() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { 
        threshold: 0.1
    });

    revealElements.forEach(element => observer.observe(element));
}

function setupNavHighlighting() {
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const nav = document.querySelector('nav');
    const navHeight = nav ? nav.offsetHeight : 80;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    const isActive = link.getAttribute('href') === `#${entry.target.id}`;
                    link.classList.toggle('active', isActive);
                });
            }
        });
    }, { 
        rootMargin: `-${navHeight}px 0px -75% 0px` 
    });

    sections.forEach(section => observer.observe(section));
    
    setTimeout(() => {
        window.scrollTo(0, 0);
        navLinks.forEach(link => link.classList.remove('active'));
        const homeLink = document.querySelector('a[href="#home"]');
        if (homeLink) {
            homeLink.classList.add('active');
        }
    }, 100);
}