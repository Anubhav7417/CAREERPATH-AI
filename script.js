// Career data
const careerData = {
    "Full Stack Developer": {
        demand: "High",
        growth: "22% by 2029",
        skills: ["JavaScript", "React", "Node.js", "HTML/CSS", "SQL", "Git", "REST APIs"],
        salary: "₹6-15 LPA",
        trend: "Increasing demand for full-stack developers with cloud experience",
        description: "Full Stack Developers build both the front-end and back-end of web applications. They work with various technologies to create seamless user experiences and robust server-side functionality.",
        resources: [
            { name: "FreeCodeCamp", provider: "Free", type: "Course", duration: "300 hours", free: true, link: "https://www.freecodecamp.org/" },
            { name: "The Complete Web Developer Bootcamp", provider: "Udemy", type: "Course", duration: "60 hours", free: false, link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/" }
        ],
        companies: ["Infosys", "TCS", "Wipro", "HCL", "Startups"]
    },
    "Data Scientist": {
        demand: "Very High",
        growth: "31% by 2029",
        skills: ["Python", "R", "Machine Learning", "Statistics", "Data Visualization", "SQL", "TensorFlow"],
        salary: "₹8-20 LPA",
        trend: "Rising need for AI and machine learning expertise across industries",
        description: "Data Scientists analyze and interpret complex data to help organizations make informed decisions. They use statistical methods, machine learning, and data visualization techniques.",
        resources: [
            { name: "Kaggle Learn", provider: "Free", type: "Courses", duration: "Free", free: true, link: "https://www.kaggle.com/learn" },
            { name: "Data Science Specialization", provider: "Coursera", type: "Specialization", duration: "11 months", free: false, link: "https://www.coursera.org/specializations/jhu-data-science" }
        ],
        companies: ["Google", "Microsoft", "Amazon", "IBM", "JPMorgan Chase"]
    },
    "UX/UI Designer": {
        demand: "High",
        growth: "13% by 2029",
        skills: ["Figma", "User Research", "Wireframing", "Prototyping", "UI Design", "User Testing", "Adobe XD"],
        salary: "₹5-12 LPA",
        trend: "Growing emphasis on user experience in digital products",
        description: "UX/UI Designers create user-friendly interfaces that provide meaningful and relevant experiences to users. They combine design, psychology, and business needs.",
        resources: [
            { name: "Figma Tutorials", provider: "Figma", type: "Tutorials", duration: "Free", free: true, link: "https://www.figma.com/resources/learn/" },
            { name: "UI/UX Design Specialization", provider: "Coursera", type: "Specialization", duration: "6 months", free: false, link: "https://www.coursera.org/specializations/ui-ux-design" }
        ],
        companies: ["Apple", "Google", "Adobe", "Airbnb", "Facebook"]
    },
    "AI Engineer": {
        demand: "Very High",
        growth: "35% by 2029",
        skills: ["Python", "TensorFlow", "PyTorch", "Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
        salary: "₹12-25 LPA",
        trend: "Explosive growth in AI adoption across all industries",
        description: "AI Engineers develop and deploy artificial intelligence systems and machine learning models to solve complex business problems.",
        resources: [
            { name: "Machine Learning by Andrew Ng", provider: "Coursera", type: "Course", duration: "11 weeks", free: false, link: "https://www.coursera.org/learn/machine-learning" },
            { name: "Fast.ai", provider: "Free", type: "Course", duration: "Free", free: true, link: "https://www.fast.ai/" }
        ],
        companies: ["Google", "Microsoft", "Amazon", "IBM", "NVIDIA"]
    },
    "Cloud Architect": {
        demand: "High",
        growth: "25% by 2029",
        skills: ["AWS", "Azure", "Google Cloud", "DevOps", "Networking", "Security"],
        salary: "₹10-22 LPA",
        trend: "Rapid cloud adoption across enterprises",
        description: "Cloud Architects design and implement cloud solutions that are scalable, reliable, and secure for organizations.",
        resources: [
            { name: "AWS Certified Solutions Architect", provider: "AWS", type: "Certification", duration: "80 hours", free: false, link: "https://aws.amazon.com/certification/" },
            { name: "Google Cloud Architecture", provider: "Google", type: "Course", duration: "40 hours", free: true, link: "https://cloud.google.com/training" }
        ],
        companies: ["Amazon", "Microsoft", "Google", "IBM", "Oracle"]
    },
    "DevOps Engineer": {
        demand: "Very High",
        growth: "28% by 2029",
        skills: ["Docker", "Kubernetes", "CI/CD", "Linux", "Scripting", "Monitoring"],
        salary: "₹8-18 LPA",
        trend: "Increasing focus on automation and continuous delivery",
        description: "DevOps Engineers bridge development and operations teams to improve collaboration and productivity through automation.",
        resources: [
            { name: "DevOps Bootcamp", provider: "Udemy", type: "Course", duration: "50 hours", free: false, link: "https://www.udemy.com/course/devopsbootcamp/" },
            { name: "Kubernetes Tutorial", provider: "Kubernetes", type: "Tutorial", duration: "30 hours", free: true, link: "https://kubernetes.io/docs/tutorials/" }
        ],
        companies: ["Netflix", "Spotify", "Uber", "Airbnb", "Startups"]
    }
};

// Career API Integration
class CareerAPI {
    constructor() {
        this.baseURL = 'https://api.careerpath.ai/v1';
        this.cache = new Map();
    }

    async getCareerInsights(skills, interests) {
        const cacheKey = `insights-${skills.join(',')}-${interests.join(',')}`;
        
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }

        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(() => {
                const insights = this.generateMockInsights(skills, interests);
                this.cache.set(cacheKey, insights);
                resolve(insights);
            }, 1000);
        });
    }

    async getMarketTrends(careerField) {
        const trends = {
            'Full Stack Developer': {
                demand: 'very_high',
                remote_opportunities: 65,
                average_salary: 1200000,
                growth_rate: 22
            },
            'Data Scientist': {
                demand: 'very_high',
                remote_opportunities: 70,
                average_salary: 1400000,
                growth_rate: 31
            },
            'UX/UI Designer': {
                demand: 'high',
                remote_opportunities: 60,
                average_salary: 900000,
                growth_rate: 13
            }
        };

        return trends[careerField] || trends['Full Stack Developer'];
    }

    async getLearningResources(skill, level = 'beginner') {
        const resources = {
            'JavaScript': [
                {
                    name: "JavaScript Modern Tutorial",
                    provider: "javascript.info",
                    free: true,
                    rating: 4.8,
                    duration: "40 hours"
                }
            ],
            'Python': [
                {
                    name: "Python for Everybody",
                    provider: "Coursera",
                    free: true,
                    rating: 4.7,
                    duration: "60 hours"
                }
            ],
            'React': [
                {
                    name: "React Official Tutorial",
                    provider: "React.js",
                    free: true,
                    rating: 4.9,
                    duration: "30 hours"
                }
            ]
        };

        return resources[skill] || [];
    }

    generateMockInsights(skills, interests) {
        return {
            high_demand_skills: this.identifyHighDemandSkills(skills),
            skill_gaps: this.identifySkillGaps(skills),
            emerging_trends: this.getEmergingTrends(interests),
            salary_insights: this.generateSalaryInsights(skills),
            learning_recommendations: this.generateLearningRecommendations(skills)
        };
    }

    identifyHighDemandSkills(skills) {
        const highDemandSkills = ['JavaScript', 'Python', 'React', 'AWS', 'Machine Learning'];
        return skills.filter(skill => 
            highDemandSkills.some(hds => 
                skill.toLowerCase().includes(hds.toLowerCase())
            )
        );
    }

    identifySkillGaps(skills) {
        const criticalSkills = ['Git', 'SQL', 'Problem Solving', 'Communication'];
        return criticalSkills.filter(skill => 
            !skills.some(s => s.toLowerCase().includes(skill.toLowerCase()))
        );
    }

    getEmergingTrends(interests) {
        const trends = {
            'AI/ML Engineering': 'AI adoption growing at 45% annually',
            'Cloud Computing': 'Multi-cloud strategies becoming standard',
            'Data Science': 'Real-time analytics demand increasing',
            'UX/UI Design': 'AR/VR interfaces gaining traction'
        };

        return interests.map(interest => trends[interest] || 'Stable growth expected');
    }

    generateSalaryInsights(skills) {
        const skillValues = {
            'JavaScript': 15,
            'Python': 20,
            'React': 18,
            'AWS': 25,
            'Machine Learning': 30
        };

        const totalValue = skills.reduce((sum, skill) => {
            const value = Object.entries(skillValues).find(([key]) => 
                skill.toLowerCase().includes(key.toLowerCase())
            );
            return sum + (value ? value[1] : 5);
        }, 0);

        const baseSalary = 600000;
        const bonus = totalValue * 10000;

        return {
            estimated_salary: baseSalary + bonus,
            market_premium: bonus,
            percentile: Math.min(90, 50 + totalValue)
        };
    }

    generateLearningRecommendations(skills) {
        const recommendations = [];
        
        if (!skills.some(s => s.toLowerCase().includes('git'))) {
            recommendations.push('Learn Git version control');
        }
        
        if (!skills.some(s => s.toLowerCase().includes('cloud'))) {
            recommendations.push('Explore cloud computing (AWS/Azure/GCP)');
        }

        return recommendations.slice(0, 3);
    }

    // Real-time job market data
    async getLiveJobData(careerField, location = 'india') {
        // Simulate real-time data
        return {
            active_jobs: Math.floor(Math.random() * 5000) + 1000,
            average_response_time: '3.2 days',
            remote_ratio: Math.floor(Math.random() * 40) + 30,
            top_companies: ['TCS', 'Infosys', 'Wipro', 'HCL', 'Startups']
        };
    }
}

// GCT Career Advice Module
class GCTCareerAdvice {
    constructor() {
        this.adviceData = {
            assessments: [],
            recommendations: [],
            progress: {}
        };
    }

    // Career assessment based on skills and interests
    assessCareerFit(skills, interests, experience) {
        const assessment = {
            technicalScore: this.calculateTechnicalScore(skills),
            interestAlignment: this.calculateInterestAlignment(interests),
            experienceLevel: this.mapExperienceLevel(experience),
            recommendedPaths: [],
            skillGaps: []
        };

        // Calculate career fit scores
        assessment.recommendedPaths = this.generateCareerRecommendations(assessment);
        assessment.skillGaps = this.identifySkillGaps(skills, assessment.recommendedPaths[0]);

        return assessment;
    }

    calculateTechnicalScore(skills) {
        const technicalSkills = ['JavaScript', 'Python', 'Java', 'React', 'Node.js', 'SQL', 'AWS', 'Machine Learning'];
        const userSkills = skills.toLowerCase().split(',').map(s => s.trim());
        
        const matchedSkills = technicalSkills.filter(skill => 
            userSkills.some(userSkill => userSkill.includes(skill.toLowerCase()))
        );
        
        return Math.round((matchedSkills.length / technicalSkills.length) * 100);
    }

    calculateInterestAlignment(interests) {
        const careerInterests = {
            'Software Development': ['Software Development', 'AI/ML Engineering', 'DevOps'],
            'Data Science': ['Data Science', 'AI/ML Engineering', 'Cloud Computing'],
            'Design': ['UI/UX Design', 'Graphic Design'],
            'Business': ['Business Management', 'Finance', 'Sales', 'Digital Marketing']
        };

        let maxAlignment = 0;
        
        Object.values(careerInterests).forEach(careerInterestGroup => {
            const alignment = interests.filter(interest => 
                careerInterestGroup.includes(interest)
            ).length;
            
            maxAlignment = Math.max(maxAlignment, alignment);
        });

        return Math.round((maxAlignment / Math.max(interests.length, 1)) * 100);
    }

    mapExperienceLevel(experience) {
        const levels = {
            '0': 'Entry Level',
            '0-1': 'Junior',
            '1-3': 'Mid Level',
            '3-5': 'Senior',
            '5-10': 'Expert',
            '10+': 'Leadership'
        };
        
        return levels[experience] || 'Entry Level';
    }

    generateCareerRecommendations(assessment) {
        const recommendations = [];
        
        if (assessment.technicalScore >= 70 && assessment.interestAlignment >= 70) {
            recommendations.push({
                career: 'Full Stack Developer',
                confidence: 85,
                timeline: '3-6 months',
                salary: '₹6-15 LPA'
            });
        }
        
        if (assessment.technicalScore >= 60) {
            recommendations.push({
                career: 'Data Scientist',
                confidence: 75,
                timeline: '6-12 months',
                salary: '₹8-20 LPA'
            });
        }
        
        if (assessment.interestAlignment >= 80) {
            recommendations.push({
                career: 'UX/UI Designer',
                confidence: 70,
                timeline: '4-8 months',
                salary: '₹5-12 LPA'
            });
        }

        return recommendations.sort((a, b) => b.confidence - a.confidence);
    }

    identifySkillGaps(skills, recommendedCareer) {
        const careerSkillRequirements = {
            'Full Stack Developer': ['JavaScript', 'React', 'Node.js', 'HTML/CSS', 'SQL', 'Git'],
            'Data Scientist': ['Python', 'Statistics', 'Machine Learning', 'SQL', 'Data Visualization'],
            'UX/UI Designer': ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'UI Design']
        };

        const userSkills = skills.toLowerCase().split(',').map(s => s.trim());
        const requiredSkills = careerSkillRequirements[recommendedCareer.career] || [];
        
        return requiredSkills.filter(skill => 
            !userSkills.some(userSkill => userSkill.includes(skill.toLowerCase()))
        );
    }

    // Generate learning path
    generateLearningPath(career, skillGaps, timeline) {
        const learningPaths = {
            'Full Stack Developer': {
                phases: [
                    {
                        title: 'Frontend Fundamentals',
                        duration: '6 weeks',
                        skills: ['HTML', 'CSS', 'JavaScript'],
                        resources: [
                            'FreeCodeCamp Responsive Web Design',
                            'JavaScript30 Course',
                            'MDN Web Docs'
                        ]
                    },
                    {
                        title: 'React Development',
                        duration: '8 weeks',
                        skills: ['React', 'State Management', 'Component Architecture'],
                        resources: [
                            'React Official Tutorial',
                            'Fullstack Open Course',
                            'React Patterns'
                        ]
                    },
                    {
                        title: 'Backend & Databases',
                        duration: '6 weeks',
                        skills: ['Node.js', 'Express', 'MongoDB', 'SQL'],
                        resources: [
                            'Node.js Official Docs',
                            'MongoDB University',
                            'SQL Bolt'
                        ]
                    }
                ]
            },
            'Data Scientist': {
                phases: [
                    {
                        title: 'Python & Data Analysis',
                        duration: '8 weeks',
                        skills: ['Python', 'Pandas', 'NumPy', 'Data Cleaning'],
                        resources: [
                            'Python for Everybody',
                            'Kaggle Python Course',
                            'Real Python Tutorials'
                        ]
                    },
                    {
                        title: 'Statistics & Machine Learning',
                        duration: '10 weeks',
                        skills: ['Statistics', 'ML Algorithms', 'Model Evaluation'],
                        resources: [
                            'StatQuest YouTube Channel',
                            'Machine Learning Coursera',
                            'Fast.ai Course'
                        ]
                    }
                ]
            }
        };

        return learningPaths[career] || learningPaths['Full Stack Developer'];
    }

    // Career progression tracker
    trackProgress(userId, milestones) {
        const progress = {
            userId: userId,
            completedMilestones: [],
            currentPhase: 0,
            overallProgress: 0,
            lastUpdated: new Date().toISOString()
        };

        // Calculate progress based on completed milestones
        if (milestones && milestones.length > 0) {
            const completed = milestones.filter(m => m.completed).length;
            progress.overallProgress = Math.round((completed / milestones.length) * 100);
            progress.completedMilestones = milestones.filter(m => m.completed);
        }

        return progress;
    }

    // Get personalized advice
    getPersonalizedAdvice(assessment, goals) {
        const advice = {
            shortTerm: [],
            longTerm: [],
            warnings: [],
            opportunities: []
        };

        // Short-term advice based on current assessment
        if (assessment.technicalScore < 50) {
            advice.shortTerm.push('Focus on building fundamental technical skills through online courses and practice projects.');
        }

        if (assessment.interestAlignment < 60) {
            advice.shortTerm.push('Explore different career paths through internships or volunteer work to better align with your interests.');
        }

        // Long-term advice based on goals
        if (goals.includes('leadership')) {
            advice.longTerm.push('Develop soft skills and consider management training programs for future leadership roles.');
        }

        if (goals.includes('remote work')) {
            advice.opportunities.push('Remote work opportunities are abundant in tech roles. Build a strong online portfolio.');
        }

        return advice;
    }
}

// Particle System for CareerPath AI
class ParticleSystem {
    constructor() {
        this.particles = [];
        this.canvas = document.getElementById('particles-js');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.mouse = { x: 0, y: 0, radius: 100 };
        
        this.init();
    }

    init() {
        this.resizeCanvas();
        this.createParticles();
        this.animate();
        this.setupEventListeners();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        const particleCount = Math.min(80, Math.floor(window.innerWidth / 15));
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 3 + 1,
                speedX: Math.random() * 1 - 0.5,
                speedY: Math.random() * 1 - 0.5,
                color: this.getRandomColor(),
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }

    getRandomColor() {
        const colors = ['#2563eb', '#1d4ed8', '#f59e0b', '#10b981', '#ef4444'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];
            
            // Update position
            p.x += p.speedX;
            p.y += p.speedY;
            
            // Bounce off walls
            if (p.x < 0 || p.x > this.canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > this.canvas.height) p.speedY *= -1;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = p.opacity;
            this.ctx.fill();
            
            // Draw connections
            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                const distance = Math.sqrt(
                    Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2)
                );
                
                if (distance < 100) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = p.color;
                    this.ctx.globalAlpha = 0.2 * (1 - distance / 100);
                    this.ctx.lineWidth = 0.5;
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(() => this.animate());
    }

    setupEventListeners() {
        window.addEventListener('resize', () => this.resizeCanvas());
        
        this.canvas.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });
    }
}

// Advanced CareerPath AI Application with Authentication
class CareerPathAI {
    constructor() {
        this.state = {
            currentStep: 1,
            totalSteps: 5,
            userData: {
                name: '',
                email: '',
                skills: '',
                experience: '',
                employmentStatus: '',
                interests: [],
                goals: '',
                constraints: '',
                salaryRange: '',
                education: '',
                location: ''
            },
            topCareers: [],
            errors: {},
            isAuthenticated: false,
            currentUser: null
        };

        this.careerAPI = new CareerAPI();
        this.gctCareerAdvice = new GCTCareerAdvice();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.checkAuthStatus();
        this.render();
        new ParticleSystem();
    }

    setupEventListeners() {
        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', () => this.toggleDarkMode());
        
        // Login buttons
        document.getElementById('loginBtn').addEventListener('click', () => this.showLoginModal());
        document.getElementById('logoutBtn').addEventListener('click', () => this.logout());
        
        // Modal close buttons
        document.getElementById('loginClose').addEventListener('click', () => this.closeLoginModal());
        document.getElementById('phoneClose').addEventListener('click', () => this.closePhoneModal());
        document.getElementById('modalClose').addEventListener('click', () => this.closeModal());
        
        // Auth tabs
        document.querySelectorAll('.auth-tab').forEach(tab => {
            tab.addEventListener('click', (e) => this.switchAuthTab(e.target));
        });
        
        // Auth forms
        document.getElementById('loginForm').addEventListener('submit', (e) => this.handleLogin(e));
        document.getElementById('signupForm').addEventListener('submit', (e) => this.handleSignup(e));
        document.getElementById('phoneForm').addEventListener('submit', (e) => this.handlePhoneLogin(e));
        
        // Social auth
        document.getElementById('googleLogin').addEventListener('click', () => this.handleGoogleLogin());
        document.getElementById('phoneLogin').addEventListener('click', () => this.showPhoneModal());
        
        // Progress steps navigation - FIXED: Added proper event delegation
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('progress-step')) {
                const step = parseInt(e.target.getAttribute('data-step'));
                this.goToStep(step);
            }
        });
    }

    checkAuthStatus() {
        const savedUser = localStorage.getItem('careerPathUser');
        const savedAuth = localStorage.getItem('careerPathAuth');
        
        if (savedUser && savedAuth === 'true') {
            this.state.isAuthenticated = true;
            this.state.currentUser = JSON.parse(savedUser);
            this.updateAuthUI();
        }
    }

    updateAuthUI() {
        const userInfo = document.getElementById('userInfo');
        const authButtons = document.getElementById('authButtons');
        const progressContainer = document.getElementById('progressContainer');
        
        if (this.state.isAuthenticated && this.state.currentUser) {
            userInfo.style.display = 'flex';
            authButtons.style.display = 'none';
            document.getElementById('userName').textContent = this.state.currentUser.name;
            progressContainer.style.display = 'block';
        } else {
            userInfo.style.display = 'none';
            authButtons.style.display = 'block';
            progressContainer.style.display = 'none';
            this.showLoginModal();
        }
    }

    showLoginModal() {
        document.getElementById('loginModal').style.display = 'flex';
    }

    closeLoginModal() {
        document.getElementById('loginModal').style.display = 'none';
        this.resetAuthForms();
    }

    showPhoneModal() {
        document.getElementById('phoneModal').style.display = 'flex';
        document.getElementById('loginModal').style.display = 'none';
    }

    closePhoneModal() {
        document.getElementById('phoneModal').style.display = 'none';
        this.resetPhoneForm();
    }

    switchAuthTab(tab) {
        document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
        
        tab.classList.add('active');
        const tabName = tab.getAttribute('data-tab');
        document.getElementById(`${tabName}Form`).classList.add('active');
    }

    async handleLogin(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Simple validation
        if (!email || !password) {
            this.showToast('Please fill in all fields', 'error');
            return;
        }
        
        // Mock authentication
        const users = JSON.parse(localStorage.getItem('careerPathUsers') || '[]');
        const user = users.find(u => (u.email === email || u.phone === email) && u.password === password);
        
        if (user) {
            this.state.isAuthenticated = true;
            this.state.currentUser = user;
            localStorage.setItem('careerPathAuth', 'true');
            localStorage.setItem('careerPathUser', JSON.stringify(user));
            this.updateAuthUI();
            this.closeLoginModal();
            this.showToast('Login successful!', 'success');
        } else {
            this.showToast('Invalid credentials', 'error');
        }
    }

    async handleSignup(e) {
        e.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const phone = document.getElementById('signupPhone').value;
        const password = document.getElementById('signupPassword').value;
        const confirm = document.getElementById('signupConfirm').value;
        
        // Validation
        if (!name || !email || !phone || !password || !confirm) {
            this.showToast('Please fill in all fields', 'error');
            return;
        }
        
        if (password !== confirm) {
            this.showToast('Passwords do not match', 'error');
            return;
        }
        
        if (!document.getElementById('acceptTerms').checked) {
            this.showToast('Please accept the terms and conditions', 'error');
            return;
        }
        
        // Check if user already exists
        const users = JSON.parse(localStorage.getItem('careerPathUsers') || '[]');
        if (users.find(u => u.email === email)) {
            this.showToast('User already exists with this email', 'error');
            return;
        }
        
        // Create new user
        const newUser = {
            id: Date.now().toString(),
            name,
            email,
            phone,
            password, // In real app, this should be hashed
            createdAt: new Date().toISOString()
        };
        
        users.push(newUser);
        localStorage.setItem('careerPathUsers', JSON.stringify(users));
        
        this.state.isAuthenticated = true;
        this.state.currentUser = newUser;
        localStorage.setItem('careerPathAuth', 'true');
        localStorage.setItem('careerPathUser', JSON.stringify(newUser));
        this.updateAuthUI();
        this.closeLoginModal();
        this.showToast('Account created successfully!', 'success');
    }

    async handlePhoneLogin(e) {
        e.preventDefault();
        const countryCode = document.getElementById('countryCode').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const otpCode = document.getElementById('otpCode').value;
        const fullPhone = countryCode + phoneNumber;
        
        const submitBtn = document.getElementById('phoneSubmit');
        const submitText = document.getElementById('phoneSubmitText');
        const spinner = document.getElementById('phoneSpinner');
        const otpGroup = document.getElementById('otpGroup');
        
        // Send OTP
        if (!otpCode) {
            submitBtn.disabled = true;
            spinner.style.display = 'inline-block';
            submitText.textContent = 'Sending OTP...';
            
            // Mock OTP sending
            setTimeout(() => {
                submitBtn.disabled = false;
                spinner.style.display = 'none';
                submitText.textContent = 'Verify OTP';
                otpGroup.style.display = 'block';
                this.startOTPTimer();
                this.showToast('OTP sent to your phone', 'success');
            }, 2000);
        } else {
            // Verify OTP (mock verification - always 123456)
            if (otpCode === '123456') {
                const user = {
                    id: Date.now().toString(),
                    name: `User_${phoneNumber}`,
                    phone: fullPhone,
                    createdAt: new Date().toISOString()
                };
                
                this.state.isAuthenticated = true;
                this.state.currentUser = user;
                localStorage.setItem('careerPathAuth', 'true');
                localStorage.setItem('careerPathUser', JSON.stringify(user));
                this.updateAuthUI();
                this.closePhoneModal();
                this.showToast('Phone login successful!', 'success');
            } else {
                this.showToast('Invalid OTP code', 'error');
            }
        }
    }

    startOTPTimer() {
        let timeLeft = 60;
        const timerElement = document.getElementById('countdown');
        const timerContainer = document.getElementById('otpTimer');
        
        const timer = setInterval(() => {
            timeLeft--;
            timerElement.textContent = timeLeft;
            
            if (timeLeft <= 0) {
                clearInterval(timer);
                timerContainer.innerHTML = '<a href="#" onclick="app.resendOTP()" style="color: var(--primary);">Resend OTP</a>';
            }
        }, 1000);
    }

    resendOTP() {
        this.showToast('OTP resent to your phone', 'success');
        this.startOTPTimer();
        document.getElementById('otpTimer').innerHTML = 'Resend OTP in <span id="countdown">60</span>s';
    }

    async handleGoogleLogin() {
        // Mock Google login
        this.showToast('Redirecting to Google...', 'info');
        
        setTimeout(() => {
            const user = {
                id: Date.now().toString(),
                name: 'Google User',
                email: 'user@gmail.com',
                provider: 'google',
                createdAt: new Date().toISOString()
            };
            
            this.state.isAuthenticated = true;
            this.state.currentUser = user;
            localStorage.setItem('careerPathAuth', 'true');
            localStorage.setItem('careerPathUser', JSON.stringify(user));
            this.updateAuthUI();
            this.closeLoginModal();
            this.showToast('Google login successful!', 'success');
        }, 1500);
    }

    logout() {
        this.state.isAuthenticated = false;
        this.state.currentUser = null;
        localStorage.removeItem('careerPathAuth');
        localStorage.removeItem('careerPathUser');
        this.updateAuthUI();
        this.showToast('Logged out successfully', 'success');
    }

    resetAuthForms() {
        document.querySelectorAll('.auth-form input').forEach(input => {
            input.value = '';
        });
        document.getElementById('loginForm').classList.add('active');
        document.getElementById('signupForm').classList.remove('active');
        document.querySelectorAll('.auth-tab').forEach((tab, index) => {
            tab.classList.toggle('active', index === 0);
        });
    }

    resetPhoneForm() {
        document.getElementById('phoneNumber').value = '';
        document.getElementById('otpCode').value = '';
        document.getElementById('otpGroup').style.display = 'none';
        document.getElementById('phoneSubmitText').textContent = 'Send OTP';
        document.getElementById('phoneSpinner').style.display = 'none';
        document.getElementById('phoneSubmit').disabled = false;
    }

    toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        const icon = document.querySelector('#themeToggle i');
        
        if (isDarkMode) {
            icon.className = 'fas fa-sun';
            localStorage.setItem('darkMode', 'true');
        } else {
            icon.className = 'fas fa-moon';
            localStorage.setItem('darkMode', 'false');
        }
    }

    render() {
        if (!this.state.isAuthenticated) {
            this.updateAuthUI();
            return;
        }

        this.updateProgressBar();
        
        switch(this.state.currentStep) {
            case 1:
                this.renderPersonalDetails();
                break;
            case 2:
                this.renderSkillsInterests();
                break;
            case 3:
                this.renderCareerGoals();
                break;
            case 4:
                this.renderAIAnalysis();
                break;
            case 5:
                this.renderResults();
                break;
        }
    }

    updateProgressBar() {
        const progressSteps = document.querySelectorAll('.progress-step');
        const progressFill = document.getElementById('progressFill');
        
        progressSteps.forEach((step, index) => {
            const stepNumber = parseInt(step.getAttribute('data-step'));
            step.classList.toggle('active', stepNumber <= this.state.currentStep);
        });
        
        const progressPercentage = (this.state.currentStep / this.state.totalSteps) * 100;
        progressFill.style.width = `${progressPercentage}%`;
    }

    goToStep(step) {
        if (step >= 1 && step <= this.state.totalSteps) {
            this.state.currentStep = step;
            this.render();
        }
    }

    renderPersonalDetails() {
        const content = `
            <div class="form-container">
                <div class="form-grid">
                    <div class="form-content">
                        <h2 class="form-title">Tell us about yourself</h2>
                        <p class="form-subtitle">We'll use this information to personalize your career recommendations</p>
                        
                        <div class="form-group">
                            <label class="form-label" for="name">Full Name</label>
                            <input type="text" id="name" class="form-input" placeholder="Enter your full name" value="${this.state.userData.name}">
                            ${this.state.errors.name ? `<div class="error-message">${this.state.errors.name}</div>` : ''}
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" for="email">Email Address</label>
                            <input type="email" id="email" class="form-input" placeholder="Enter your email" value="${this.state.userData.email}">
                            ${this.state.errors.email ? `<div class="error-message">${this.state.errors.email}</div>` : ''}
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" for="education">Education Level</label>
                            <select id="education" class="form-input form-select">
                                <option value="">Select education level</option>
                                <option value="High School" ${this.state.userData.education === 'High School' ? 'selected' : ''}>High School</option>
                                <option value="Bachelor's" ${this.state.userData.education === 'Bachelor\'s' ? 'selected' : ''}>Bachelor's Degree</option>
                                <option value="Master's" ${this.state.userData.education === 'Master\'s' ? 'selected' : ''}>Master's Degree</option>
                                <option value="PhD" ${this.state.userData.education === 'PhD' ? 'selected' : ''}>PhD</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" for="location">Location</label>
                            <input type="text" id="location" class="form-input" placeholder="City, Country" value="${this.state.userData.location}">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" for="skills">Your Skills</label>
                            <textarea id="skills" class="form-input form-textarea" placeholder="List your skills (separated by commas)">${this.state.userData.skills}</textarea>
                            ${this.state.errors.skills ? `<div class="error-message">${this.state.errors.skills}</div>` : ''}
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" for="employmentStatus">Employment Status</label>
                            <select id="employmentStatus" class="form-input form-select">
                                <option value="">Select your status</option>
                                <option value="Student" ${this.state.userData.employmentStatus === 'Student' ? 'selected' : ''}>Student</option>
                                <option value="Fresher" ${this.state.userData.employmentStatus === 'Fresher' ? 'selected' : ''}>Fresher (0-1 years)</option>
                                <option value="Experienced" ${this.state.userData.employmentStatus === 'Experienced' ? 'selected' : ''}>Experienced (1+ years)</option>
                                <option value="Job Seeker" ${this.state.userData.employmentStatus === 'Job Seeker' ? 'selected' : ''}>Job Seeker</option>
                            </select>
                            ${this.state.errors.employmentStatus ? `<div class="error-message">${this.state.errors.employmentStatus}</div>` : ''}
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" for="experience">Years of Experience</label>
                            <select id="experience" class="form-input form-select">
                                <option value="">Select experience level</option>
                                <option value="0" ${this.state.userData.experience === '0' ? 'selected' : ''}>Fresher (0 years)</option>
                                <option value="0-1" ${this.state.userData.experience === '0-1' ? 'selected' : ''}>0-1 years</option>
                                <option value="1-3" ${this.state.userData.experience === '1-3' ? 'selected' : ''}>1-3 years</option>
                                <option value="3-5" ${this.state.userData.experience === '3-5' ? 'selected' : ''}>3-5 years</option>
                                <option value="5-10" ${this.state.userData.experience === '5-10' ? 'selected' : ''}>5-10 years</option>
                                <option value="10+" ${this.state.userData.experience === '10+' ? 'selected' : ''}>10+ years</option>
                            </select>
                            ${this.state.errors.experience ? `<div class="error-message">${this.state.errors.experience}</div>` : ''}
                        </div>
                        
                        <div class="form-actions">
                            <button type="button" class="btn btn-primary" onclick="app.validateStep1()">
                                Continue to Skills & Interests
                                <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="form-sidebar">
                        <h3 class="sidebar-title">AI-Powered Career Guidance</h3>
                        <p class="sidebar-description">We analyze your skills, experience, and goals to create a personalized career roadmap.</p>
                        
                        <div class="feature-list">
                            <div class="feature-item">
                                <i class="fas fa-check-circle feature-icon"></i>
                                <div class="feature-text">Personalized career paths matched to your profile</div>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check-circle feature-icon"></i>
                                <div class="feature-text">Skill gap analysis and learning roadmap</div>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check-circle feature-icon"></i>
                                <div class="feature-text">Job readiness score and probability matching</div>
                            </div>
                        </div>
                        
                        <div class="sample-card">
                            <div class="sample-title">Sample Career Match</div>
                            <div class="sample-career">
                                <div class="sample-icon">
                                    <i class="fas fa-code"></i>
                                </div>
                                <div class="sample-details">
                                    <div class="sample-name">Full Stack Developer</div>
                                    <div class="sample-match">85% match</div>
                                </div>
                            </div>
                            <div class="sample-meta">
                                <span>Salary: ₹6-15 LPA</span>
                                <span>Time: 6-9 months</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.getElementById('app-content').innerHTML = content;
    }

    renderSkillsInterests() {
        const techInterests = [
            { name: 'Software Development', icon: 'fa-laptop-code' },
            { name: 'Data Science', icon: 'fa-chart-line' },
            { name: 'UI/UX Design', icon: 'fa-paint-brush' },
            { name: 'Cloud Computing', icon: 'fa-cloud' },
            { name: 'Digital Marketing', icon: 'fa-bullhorn' },
            { name: 'DevOps', icon: 'fa-code-branch' },
            { name: 'Cybersecurity', icon: 'fa-shield-alt' },
            { name: 'AI/ML Engineering', icon: 'fa-robot' }
        ];
        
        const nonTechInterests = [
            { name: 'Business Management', icon: 'fa-briefcase' },
            { name: 'Healthcare', icon: 'fa-heartbeat' },
            { name: 'Education', icon: 'fa-graduation-cap' },
            { name: 'Finance', icon: 'fa-chart-line' },
            { name: 'Sales', icon: 'fa-handshake' },
            { name: 'Content Writing', icon: 'fa-pen' },
            { name: 'Graphic Design', icon: 'fa-palette' },
            { name: 'Photography', icon: 'fa-camera' }
        ];
        
        const content = `
            <div class="form-container">
                <div class="form-grid">
                    <div class="form-content">
                        <h2 class="form-title">Your Skills & Interests</h2>
                        <p class="form-subtitle">Select up to 5 areas that interest you the most</p>
                        
                        <div class="form-group">
                            <label class="form-label">Technical Interests</label>
                            <div class="interest-grid">
                                ${techInterests.map(interest => `
                                    <div class="interest-option ${this.state.userData.interests.includes(interest.name) ? 'selected' : ''}" data-interest="${interest.name}">
                                        <i class="fas ${interest.icon} interest-icon"></i>
                                        <div class="interest-name">${interest.name}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Non-Tech Interests</label>
                            <div class="interest-grid">
                                ${nonTechInterests.map(interest => `
                                    <div class="interest-option ${this.state.userData.interests.includes(interest.name) ? 'selected' : ''}" data-interest="${interest.name}">
                                        <i class="fas ${interest.icon} interest-icon"></i>
                                        <div class="interest-name">${interest.name}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        
                        ${this.state.errors.interests ? `<div class="error-message">${this.state.errors.interests}</div>` : ''}
                        
                        <div class="form-actions">
                            <button type="button" class="btn btn-secondary" onclick="app.prevStep()">
                                <i class="fas fa-arrow-left"></i>
                                Back
                            </button>
                            <button type="button" class="btn btn-primary" onclick="app.validateStep2()">
                                Continue to Career Goals
                                <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="form-sidebar">
                        <h3 class="sidebar-title">Follow Your Passions</h3>
                        <p class="sidebar-description">Your interests help us recommend careers you'll truly enjoy and excel in.</p>
                        
                        <div class="feature-list">
                            <div class="feature-item">
                                <i class="fas fa-check-circle feature-icon"></i>
                                <div class="feature-text">People who work in fields they're passionate about report higher job satisfaction</div>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check-circle feature-icon"></i>
                                <div class="feature-text">Interest alignment leads to better long-term career growth</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.getElementById('app-content').innerHTML = content;
        
        // Add event listeners to interest options
        setTimeout(() => {
            const options = document.querySelectorAll('.interest-option');
            options.forEach(option => {
                option.addEventListener('click', function() {
                    const interest = this.getAttribute('data-interest');
                    
                    if (app.state.userData.interests.includes(interest)) {
                        // Remove if already selected
                        app.state.userData.interests = app.state.userData.interests.filter(i => i !== interest);
                        this.classList.remove('selected');
                    } else {
                        // Add if not selected and less than 5
                        if (app.state.userData.interests.length < 5) {
                            app.state.userData.interests.push(interest);
                            this.classList.add('selected');
                        } else {
                            app.showToast("You can select up to 5 interests only", "warning");
                        }
                    }
                });
            });
        }, 100);
    }

    renderCareerGoals() {
        const content = `
            <div class="form-container">
                <div class="form-grid">
                    <div class="form-content">
                        <h2 class="form-title">Your Career Goals</h2>
                        <p class="form-subtitle">Define what success looks like for your career journey</p>
                        
                        <div class="form-group">
                            <label class="form-label" for="goals">Career Goals & Aspirations</label>
                            <textarea id="goals" class="form-input form-textarea" placeholder="Describe your career goals, what you want to achieve, and your aspirations...">${this.state.userData.goals}</textarea>
                            ${this.state.errors.goals ? `<div class="error-message">${this.state.errors.goals}</div>` : ''}
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" for="constraints">Constraints & Preferences</label>
                            <textarea id="constraints" class="form-input form-textarea" placeholder="Any constraints (time, location, financial, etc.) or preferences...">${this.state.userData.constraints}</textarea>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" for="salaryRange">Target Salary Range (INR)</label>
                            <select id="salaryRange" class="form-input form-select">
                                <option value="">Select expected salary</option>
                                <option value="Under ₹3 LPA" ${this.state.userData.salaryRange === 'Under ₹3 LPA' ? 'selected' : ''}>Under ₹3 LPA</option>
                                <option value="₹3-5 LPA" ${this.state.userData.salaryRange === '₹3-5 LPA' ? 'selected' : ''}>₹3-5 LPA</option>
                                <option value="₹5-7 LPA" ${this.state.userData.salaryRange === '₹5-7 LPA' ? 'selected' : ''}>₹5-7 LPA</option>
                                <option value="₹7-10 LPA" ${this.state.userData.salaryRange === '₹7-10 LPA' ? 'selected' : ''}>₹7-10 LPA</option>
                                <option value="₹10-15 LPA" ${this.state.userData.salaryRange === '₹10-15 LPA' ? 'selected' : ''}>₹10-15 LPA</option>
                                <option value="₹15-20 LPA" ${this.state.userData.salaryRange === '₹15-20 LPA' ? 'selected' : ''}>₹15-20 LPA</option>
                                <option value="₹20+ LPA" ${this.state.userData.salaryRange === '₹20+ LPA' ? 'selected' : ''}>₹20+ LPA</option>
                            </select>
                            ${this.state.errors.salaryRange ? `<div class="error-message">${this.state.errors.salaryRange}</div>` : ''}
                        </div>
                        
                        <div class="form-actions">
                            <button type="button" class="btn btn-secondary" onclick="app.prevStep()">
                                <i class="fas fa-arrow-left"></i>
                                Back
                            </button>
                            <button type="button" class="btn btn-primary" onclick="app.validateStep3()">
                                Start AI Analysis
                                <i class="fas fa-bolt"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="form-sidebar">
                        <h3 class="sidebar-title">Set Clear Goals</h3>
                        <p class="sidebar-description">Define what success looks like for your career journey to get personalized recommendations.</p>
                        
                        <div class="feature-list">
                            <div class="feature-item">
                                <i class="fas fa-check-circle feature-icon"></i>
                                <div class="feature-text">Be specific about your timeline and constraints</div>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check-circle feature-icon"></i>
                                <div class="feature-text">Consider your financial needs and salary expectations</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('app-content').innerHTML = content;
    }

    renderAIAnalysis() {
        const content = `
            <div class="ai-analysis">
                <div class="ai-brain">
                    <i class="fas fa-brain"></i>
                </div>
                <h2 class="analyzing-text">AI Analysis in Progress<span class="analyzing-dots"></span></h2>
                <p class="form-subtitle">Analyzing your profile against thousands of career paths</p>
                
                <div class="loading-spinner"></div>
                
                <div class="analysis-stats">
                    <div class="analysis-stat">
                        <div class="stat-number" id="careersAnalyzed">0</div>
                        <div class="stat-label">Career Paths Analyzed</div>
                    </div>
                    <div class="analysis-stat">
                        <div class="stat-number" id="matchAccuracy">0%</div>
                        <div class="stat-label">Match Accuracy</div>
                    </div>
                    <div class="analysis-stat">
                        <div class="stat-number" id="skillsMapped">0</div>
                        <div class="stat-label">Skills Mapped</div>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('app-content').innerHTML = content;
        this.startAIAnalysis();
    }

    startAIAnalysis() {
        let progress = 0;
        const careersAnalyzed = document.getElementById('careersAnalyzed');
        const matchAccuracy = document.getElementById('matchAccuracy');
        const skillsMapped = document.getElementById('skillsMapped');

        const analysisInterval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress > 100) progress = 100;
            
            // Update stats
            if (careersAnalyzed) {
                careersAnalyzed.textContent = Math.floor(progress * 23);
                matchAccuracy.textContent = `${Math.min(100, Math.floor(progress * 1.2))}%`;
                skillsMapped.textContent = Math.floor(progress * 8);
            }

            if (progress >= 100) {
                clearInterval(analysisInterval);
                setTimeout(() => {
                    this.state.currentStep = 5;
                    this.render();
                }, 1000);
            }
        }, 200);
    }

    renderResults() {
        if (this.state.topCareers.length === 0) {
            this.generateResults();
        }
        
        const content = `
            <div class="results-container">
                <div class="results-header">
                    <h2 class="results-title">Your Career Path Recommendations</h2>
                    <div class="results-actions">
                        <button type="button" class="btn btn-outline" onclick="app.generatePDF()">
                            <i class="fas fa-file-pdf"></i>
                            Export PDF
                        </button>
                        <button type="button" class="btn btn-outline" onclick="app.restartProcess()">
                            <i class="fas fa-redo"></i>
                            Start Over
                        </button>
                    </div>
                </div>
                
                <div class="career-grid">
                    ${this.state.topCareers.map((career, index) => `
                        <div class="career-card">
                            <div class="career-header">
                                <div class="career-icon ${index === 0 ? 'primary' : index === 1 ? 'secondary' : 'tertiary'}">
                                    <i class="fas ${this.getCareerIcon(career.name)}"></i>
                                </div>
                                <div class="career-info">
                                    <div class="career-name">${career.name}</div>
                                    <div class="career-match">${career.match}% Match</div>
                                </div>
                            </div>
                            <div class="career-description">${career.description}</div>
                            <div class="career-stats">
                                <div class="career-stat">
                                    <span class="career-stat-label">Salary Range</span>
                                    <span class="career-stat-value">${career.salary}</span>
                                </div>
                                <div class="career-stat">
                                    <span class="career-stat-label">Market Demand</span>
                                    <span class="career-stat-value">${career.demand}</span>
                                </div>
                                <div class="career-stat">
                                    <span class="career-stat-label">Growth</span>
                                    <span class="career-stat-value">${career.growth}</span>
                                </div>
                            </div>
                            <div class="career-trend">${career.trend}</div>
                            <button type="button" class="btn btn-primary career-action" onclick="app.showCareerDetails('${career.name}')">
                                View Details
                            </button>
                        </div>
                    `).join('')}
                </div>
                
                <div class="skill-analysis">
                    <h3 class="skill-title">Your Skill Gap Analysis</h3>
                    ${this.state.topCareers[0].missingSkills.map((skill, index) => `
                        <div class="skill-item">
                            <div class="skill-header">
                                <span class="skill-name">${skill}</span>
                                <span class="skill-percentage">${(index + 1) * 25}%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: ${(index + 1) * 25}%"></div>
                            </div>
                            <div class="skill-note">Critical skill for ${this.state.topCareers[0].name}. Consider learning through online courses.</div>
                        </div>
                    `).join('')}
                    
                    <div class="skill-strategy">
                        <div class="strategy-title">Skill Improvement Strategy</div>
                        <div class="strategy-text">Based on your current skills, we recommend focusing on ${this.state.topCareers[0].missingSkills.slice(0, 2).join(' and ')} first, as these are fundamental to your chosen career path.</div>
                    </div>
                </div>
                
                <div class="learning-plan">
                    <h3 class="plan-title">12-Week Learning Plan</h3>
                    <div class="plan-timeline">
                        <div class="plan-phase">
                            <div class="plan-marker">1</div>
                            <div class="plan-content">
                                <div class="plan-phase-title">Weeks 1-4: Foundational Skills</div>
                                <div class="plan-phase-desc">Focus on ${this.state.topCareers[0].missingSkills.slice(0, 2).join(' and ')}</div>
                            </div>
                        </div>
                        <div class="plan-phase">
                            <div class="plan-marker">2</div>
                            <div class="plan-content">
                                <div class="plan-phase-title">Weeks 5-8: Intermediate Concepts</div>
                                <div class="plan-phase-desc">Build projects using ${this.state.topCareers[0].missingSkills.slice(2, 4).join(' and ')}</div>
                            </div>
                        </div>
                        <div class="plan-phase">
                            <div class="plan-marker">3</div>
                            <div class="plan-content">
                                <div class="plan-phase-title">Weeks 9-12: Portfolio Development</div>
                                <div class="plan-phase-desc">Create a portfolio showcasing your new skills</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('app-content').innerHTML = content;
        
        // Animate skill bars
        setTimeout(() => {
            document.querySelectorAll('.skill-progress').forEach(bar => {
                bar.style.transition = 'width 1.5s ease';
            });
        }, 500);
    }

    generateResults() {
        const userSkills = this.state.userData.skills.toLowerCase();
        
        this.state.topCareers = Object.keys(careerData).map(careerName => {
            const career = careerData[careerName];
            const requiredSkills = career.skills.map(skill => skill.toLowerCase());
            
            // Calculate match percentage based on skills
            const matchedSkills = requiredSkills.filter(skill => 
                userSkills.includes(skill.toLowerCase())
            );
            
            const matchPercentage = Math.round((matchedSkills.length / requiredSkills.length) * 100);
            
            return {
                name: careerName,
                match: matchPercentage,
                description: career.description,
                salary: career.salary,
                demand: career.demand,
                growth: career.growth,
                trend: career.trend,
                missingSkills: requiredSkills.filter(skill => 
                    !userSkills.includes(skill.toLowerCase())
                )
            };
        }).sort((a, b) => b.match - a.match).slice(0, 3);
    }

    getCareerIcon(career) {
        const icons = {
            'Full Stack Developer': 'fa-code',
            'Data Scientist': 'fa-chart-line',
            'UX/UI Designer': 'fa-paint-brush',
            'AI Engineer': 'fa-robot',
            'Cloud Architect': 'fa-cloud',
            'DevOps Engineer': 'fa-code-branch'
        };
        return icons[career] || 'fa-briefcase';
    }

    showCareerDetails(careerName) {
        const career = careerData[careerName];
        
        document.getElementById('modalTitle').textContent = careerName;
        document.getElementById('modalBody').innerHTML = `
            <div class="career-description mb-4">${career.description}</div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div>
                    <h3 style="margin-bottom: 10px;">Required Skills</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px;">
                        ${career.skills.map(skill => `
                            <span style="background-color: var(--gray-100); padding: 6px 12px; border-radius: 20px; font-size: 14px; color: var(--gray-700);">
                                ${skill}
                            </span>
                        `).join('')}
                    </div>
                    
                    <h3 style="margin-bottom: 10px;">Learning Resources</h3>
                    <div>
                        ${career.resources.map(resource => `
                            <div style="display: flex; justify-content: between; align-items: center; padding: 12px; border: 1px solid var(--gray-200); border-radius: var(--border-radius); margin-bottom: 8px;">
                                <a href="${resource.link}" target="_blank" style="color: var(--primary); text-decoration: none; flex: 1;">
                                    <strong>${resource.name}</strong> - ${resource.provider} (${resource.duration})
                                </a>
                                <span style="padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; background-color: ${resource.free ? 'rgba(16, 185, 129, 0.1)' : 'rgba(37, 99, 235, 0.1)'}; color: ${resource.free ? 'var(--success)' : 'var(--primary)'};">
                                    ${resource.free ? 'Free' : 'Paid'}
                                </span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div>
                    <h3 style="margin-bottom: 10px;">Career Overview</h3>
                    
                    <div style="margin-bottom: 20px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <span>Salary Range</span>
                            <span style="font-weight: 600;">${career.salary}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <span>Market Demand</span>
                            <span style="font-weight: 600;">${career.demand}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <span>Growth Rate</span>
                            <span style="font-weight: 600;">${career.growth}</span>
                        </div>
                    </div>
                    
                    <div style="font-size: 14px; color: var(--gray-600); margin-bottom: 20px;">
                        ${career.trend}
                    </div>
                    
                    <h3 style="margin-bottom: 10px;">Top Companies</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                        ${career.companies.map(company => `
                            <span style="background-color: var(--gray-100); padding: 6px 12px; border-radius: 20px; font-size: 14px; color: var(--gray-700);">
                                ${company}
                            </span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        document.getElementById('careerModal').style.display = 'flex';
    }

    closeModal() {
        document.getElementById('careerModal').style.display = 'none';
    }

    // Navigation functions
    nextStep() {
        if (this.state.currentStep < this.state.totalSteps) {
            this.state.currentStep++;
            this.render();
        }
    }

    prevStep() {
        if (this.state.currentStep > 1) {
            this.state.currentStep--;
            this.state.errors = {};
            this.render();
        }
    }

    // Validation functions
    validateStep1() {
        this.state.errors = {};
        
        // Get form values
        this.state.userData.name = document.getElementById('name').value;
        this.state.userData.email = document.getElementById('email').value;
        this.state.userData.skills = document.getElementById('skills').value;
        this.state.userData.employmentStatus = document.getElementById('employmentStatus').value;
        this.state.userData.experience = document.getElementById('experience').value;
        this.state.userData.education = document.getElementById('education').value;
        this.state.userData.location = document.getElementById('location').value;
        
        // Validate
        if (!this.state.userData.name.trim()) {
            this.state.errors.name = 'Please enter your name';
        }
        
        if (!this.state.userData.email.trim()) {
            this.state.errors.email = 'Please enter your email';
        } else if (!/\S+@\S+\.\S+/.test(this.state.userData.email)) {
            this.state.errors.email = 'Please enter a valid email address';
        }
        
        if (!this.state.userData.skills.trim()) {
            this.state.errors.skills = 'Please enter at least one skill';
        }
        
        if (!this.state.userData.employmentStatus) {
            this.state.errors.employmentStatus = 'Please select your employment status';
        }
        
        if (!this.state.userData.experience) {
            this.state.errors.experience = 'Please select your experience level';
        }
        
        if (Object.keys(this.state.errors).length === 0) {
            this.nextStep();
        } else {
            this.render();
        }
    }

    validateStep2() {
        this.state.errors = {};
        
        if (this.state.userData.interests.length === 0) {
            this.state.errors.interests = 'Please select at least one interest';
        }
        
        if (Object.keys(this.state.errors).length === 0) {
            this.nextStep();
        } else {
            this.render();
        }
    }

    validateStep3() {
        this.state.errors = {};
        
        // Get form values
        this.state.userData.goals = document.getElementById('goals').value;
        this.state.userData.constraints = document.getElementById('constraints').value;
        this.state.userData.salaryRange = document.getElementById('salaryRange').value;
        
        // Validate
        if (!this.state.userData.goals.trim()) {
            this.state.errors.goals = 'Please describe your career goals';
        }
        
        if (!this.state.userData.salaryRange) {
            this.state.errors.salaryRange = 'Please select your expected salary range';
        }
        
        if (Object.keys(this.state.errors).length === 0) {
            this.nextStep();
        } else {
            this.render();
        }
    }

    // Utility functions
    showToast(message, type = 'info') {
        // Create toast element
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <i class="fas fa-${this.getToastIcon(type)}"></i>
            <span>${message}</span>
        `;
        
        // Add to page
        document.body.appendChild(toast);
        
        // Animate in
        setTimeout(() => toast.classList.add('show'), 100);
        
        // Remove after delay
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    getToastIcon(type) {
        const icons = {
            'success': 'check-circle',
            'error': 'exclamation-circle',
            'warning': 'exclamation-triangle',
            'info': 'info-circle'
        };
        return icons[type] || 'info-circle';
    }

    generatePDF() {
        this.showToast('Generating PDF report...', 'info');
        // In a real app, this would generate a PDF using jsPDF
        setTimeout(() => {
            this.showToast('PDF report generated successfully!', 'success');
        }, 2000);
    }

    restartProcess() {
        this.state.currentStep = 1;
        this.state.userData = {
            name: '',
            email: '',
            skills: '',
            experience: '',
            employmentStatus: '',
            interests: [],
            goals: '',
            constraints: '',
            salaryRange: '',
            education: '',
            location: ''
        };
        this.state.topCareers = [];
        this.state.errors = {};
        this.render();
        this.showToast('Process restarted successfully!', 'success');
    }
}

// Initialize the application
let app;

document.addEventListener('DOMContentLoaded', function() {
    // Check for saved theme preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        document.querySelector('#themeToggle i').className = 'fas fa-sun';
    }
    
    // Initialize app
    app = new CareerPathAI();
});
