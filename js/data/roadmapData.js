// js/data/roadmapData.js
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