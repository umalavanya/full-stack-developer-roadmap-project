
        (function () {
            // ---------- DATA MODELS (full‑stack learning roadmaps) ----------
            const roadmapData = {
                java: {
                    displayName: 'Java',
                    subjects: [
                        'Java basics',
                        'OOP / Core concepts',
                        'Collections & Streams',
                        'Exception handling',
                        'Multithreading',
                        'I/O & Files',
                        'JDBC / Database'
                    ],
                    details: {
                        'Java basics': {
                            title: '☕ Java fundamentals',
                            description: 'Start with syntax, data types, loops, and conditionals. Understand JVM, JRE, JDK.',
                            steps: ['Write your first "Hello World"', 'Primitives & arrays', 'Control flow (if/switch, for/while)']
                        },
                        'OOP / Core concepts': {
                            title: 'Object‑oriented programming',
                            description: 'Classes, objects, inheritance, polymorphism, encapsulation, abstraction.',
                            steps: ['Create classes and constructors', 'Use extends & implements', 'Overloading & overriding']
                        },
                        'Collections & Streams': {
                            title: 'Collections Framework & Stream API',
                            description: 'Master List, Set, Map, Queue. Functional operations with streams.',
                            steps: ['ArrayList vs LinkedList', 'HashMap & TreeSet', 'Stream filter/map/collect']
                        },
                        'Exception handling': {
                            title: 'Exceptions & assertions',
                            description: 'Checked/unchecked, try-catch-finally, try-with-resources, custom exceptions.',
                            steps: ['Handle multiple exceptions', 'Create custom exception', 'Use finally block']
                        },
                        'Multithreading': {
                            title: 'Multithreading & concurrency',
                            description: 'Thread class, Runnable, synchronized, locks, executors, fork-join.',
                            steps: ['Extend Thread / implement Runnable', 'Synchronization', 'Thread pools']
                        },
                        'I/O & Files': {
                            title: 'File I/O (NIO.2)',
                            description: 'Read/write files, buffered streams, Path, Files utility.',
                            steps: ['FileReader/FileWriter', 'NIO Files.lines()', 'Serialization']
                        },
                        'JDBC / Database': {
                            title: 'JDBC and persistence',
                            description: 'Connect to DB, execute queries, PreparedStatement, connection pools (overview).',
                            steps: ['Load driver & get connection', 'CRUD operations', 'Batch updates']
                        }
                    }
                },
                springboot: {
                    displayName: 'Spring Boot',
                    subjects: [
                        'Spring core (IoC)',
                        'Spring Boot basics',
                        'REST APIs',
                        'Data JPA / Hibernate',
                        'Security',
                        'Microservices',
                        'Testing (MockMvc)'
                    ],
                    details: {
                        'Spring core (IoC)': {
                            title: '🌱 Inversion of Control / DI',
                            description: 'Beans, ApplicationContext, wiring, component scan.',
                            steps: ['@Component / @Bean', 'Field vs constructor injection', 'Profiles']
                        },
                        'Spring Boot basics': {
                            title: '⚙️ Spring Boot essentials',
                            description: 'Auto-configuration, starters, application.properties, devtools.',
                            steps: ['Create Spring Initializr project', 'Understand @SpringBootApplication', 'External configuration']
                        },
                        'REST APIs': {
                            title: 'Building RESTful web services',
                            description: '@RestController, @RequestMapping, HTTP methods, JSON binding.',
                            steps: ['Create GET / POST endpoints', 'Handle path variables', 'ResponseEntity & error handling']
                        },
                        'Data JPA / Hibernate': {
                            title: 'Spring Data JPA & Hibernate',
                            description: 'Entities, repositories, derived queries, @Transactional.',
                            steps: ['Define JPA entity', 'CrudRepository / JpaRepository', 'JPQL / native queries']
                        },
                        'Security': {
                            title: 'Spring Security',
                            description: 'Authentication, authorization, user details, JWT (optional).',
                            steps: ['In-memory auth', 'UserDetailsService', 'Method security']
                        },
                        'Microservices': {
                            title: 'Microservices with Spring Cloud',
                            description: 'Service discovery, API gateway, config server, resilience4j.',
                            steps: ['Build independent services', 'Eureka client/server', 'Feign clients']
                        },
                        'Testing (MockMvc)': {
                            title: 'Testing in Spring Boot',
                            description: '@WebMvcTest, @DataJpaTest, MockBean, TestRestTemplate.',
                            steps: ['Slice tests', 'MockMvc requests', 'Test service layer']
                        }
                    }
                },
                javascript: {
                    displayName: 'JavaScript',
                    subjects: [
                        'JS fundamentals',
                        'DOM manipulation',
                        'ES6+ modern features',
                        'Async JS (promises)',
                        'Fetch API & AJAX',
                        'Node.js basics',
                        'React / frontend intro'
                    ],
                    details: {
                        'JS fundamentals': {
                            title: '⚡ JavaScript core',
                            description: 'Variables, scopes, functions, objects, type coercion.',
                            steps: ['var / let / const', 'Functions & arrow functions', 'Arrays & object literals']
                        },
                        'DOM manipulation': {
                            title: 'Document Object Model',
                            description: 'Select elements, modify content, events, dynamic styling.',
                            steps: ['getElementById / querySelector', 'addEventListener', 'Create/append elements']
                        },
                        'ES6+ modern features': {
                            title: 'Modern JavaScript (ES6+)',
                            description: 'Destructuring, spread/rest, template literals, modules, classes.',
                            steps: ['Arrow functions & this', 'Modules import/export', 'Map, Set, symbols']
                        },
                        'Async JS (promises)': {
                            title: 'Asynchronous JavaScript',
                            description: 'Callbacks, Promises, async/await, event loop.',
                            steps: ['Create Promise', 'Consume with then/catch', 'Async/await error handling']
                        },
                        'Fetch API & AJAX': {
                            title: 'Fetch & HTTP requests',
                            description: 'GET, POST, headers, handling responses, axios (optional).',
                            steps: ['Basic fetch GET', 'POST with JSON', 'Handle errors']
                        },
                        'Node.js basics': {
                            title: 'Node.js / back‑end JS',
                            description: 'npm, modules, fs, http, Express minimal.',
                            steps: ['Run JS outside browser', 'CommonJS vs ES modules', 'Simple HTTP server']
                        },
                        'React / frontend intro': {
                            title: 'React & component thinking',
                            description: 'Components, props, state, hooks (useState, useEffect).',
                            steps: ['Create react app', 'Functional components', 'useState & events']
                        }
                    }
                }
            };

            // ---------- UI references ----------
            const navItems = document.querySelectorAll('.nav-item');
            const subjectHeading = document.getElementById('subjectHeading');
            const subjectListEl = document.getElementById('subjectListContainer');
            const contentCard = document.getElementById('contentCard');

            // state
            let currentTech = 'java';            // default
            let currentSubject = 'Java basics';  // default for java

            // helper: render side pane subjects based on currentTech
            function renderSubjects() {
                const tech = roadmapData[currentTech];
                if (!tech) return;

                subjectHeading.textContent = `📌 ${tech.displayName} subjects`;

                const subjects = tech.subjects;
                let htmlStr = '';
                subjects.forEach(sub => {
                    const activeClass = (sub === currentSubject) ? 'active-subject' : '';
                    htmlStr += `<li class="subject-item ${activeClass}" data-subject="${sub}">${sub}</li>`;
                });
                subjectListEl.innerHTML = htmlStr;

                // attach click listeners to subject items
                document.querySelectorAll('.subject-item').forEach(item => {
                    item.addEventListener('click', (e) => {
                        const subjectName = e.currentTarget.dataset.subject;
                        if (subjectName) {
                            // update current subject
                            currentSubject = subjectName;
                            // re-render subjects (to reflect active style)
                            renderSubjects();
                            // render main content for (currentTech, currentSubject)
                            renderMainContent();
                        }
                    });
                });
            }

            // render main content (right area) based on currentTech + currentSubject
            function renderMainContent() {
                const tech = roadmapData[currentTech];
                if (!tech) return;

                // if currentSubject somehow not present in this tech, pick first subject
                if (!tech.subjects.includes(currentSubject)) {
                    currentSubject = tech.subjects[0];
                    renderSubjects(); // update active style
                }

                const detail = tech.details[currentSubject];
                if (!detail) {
                    contentCard.innerHTML = `<div class="empty-state">✨ No details for "${currentSubject}" yet.</div>`;
                    return;
                }

                // build steps HTML if steps exist
                let stepsHtml = '';
                if (detail.steps && detail.steps.length) {
                    stepsHtml = '<div class="roadmap-steps">';
                    detail.steps.forEach((step, idx) => {
                        stepsHtml += `<div class="step"><span class="step-badge">${idx + 1}</span><span class="step-text">${step}</span></div>`;
                    });
                    stepsHtml += '</div>';
                }

                const cardHtml = `
          <span class="tech-tag">${tech.displayName} · roadmap</span>
          <div class="content-title">${detail.title}</div>
          <div class="content-description">${detail.description}</div>
          ${stepsHtml}
          <hr />
          <div class="footer-hint">
            <span>🧩 master step by step · </span>
            <span>click subjects on left to navigate</span>
          </div>
        `;

                contentCard.innerHTML = cardHtml;
            }

            // handle tech change (navbar click)
            function switchTech(techKey) {
                currentTech = techKey;
                const tech = roadmapData[techKey];
                // set first subject as default for that tech
                currentSubject = tech.subjects[0];

                // update active class on navbar
                navItems.forEach(item => {
                    const itemTech = item.dataset.tech;
                    if (itemTech === techKey) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });

                // re-render side pane and main
                renderSubjects();      // will also sync active subject
                renderMainContent();
            }

            // ----- attach navbar listeners -----
            navItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    const tech = e.currentTarget.dataset.tech;
                    if (tech && roadmapData[tech]) {
                        switchTech(tech);
                    }
                });
            });

            // ----- initial render (Java active, 'Java basics' subject) -----
            switchTech('java');

            // small fallback: if subject list gets empty clicks – already handled in renderSubjects
        })();
    