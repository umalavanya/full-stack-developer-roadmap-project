// JavaScript Concepts Data
const conceptsData = [
    {
        heading: "Printing & Logging",
        items: [
            `document.writeln("something")`,
            `window.alert("hello world from alert" );<br>// window is the global object, we can skip the window keyword`,
            `console.log("Hello from console!!!");<br>//Console is useful to debug`,
            `// Using innerHTML<br>document.getElementById("output").innerHTML = "Hello World from innerHTML";`,
            `// ctrl + shift + J - to open and close the developer tools in the browser`
        ]
    },
    {
        heading: "Commenting",
        items: [
            `// single line comments<br>/* multi-line comments */`
        ]
    },
    {
        heading: "Variables",
        items: [
            `4 ways to declare variables:
                <ul>
                    <li>Without keywords (not recommended)</li>
                    <li>var (old - function scoped)</li>
                    <li>let (modern - block scoped)</li>
                    <li>const (constant reference)</li>
                </ul>`,
            `Variable declaration and initialization: 
                <code>let name; // declaration<br>name = "John"; // initialization</code>`,
            `JavaScript is an untyped (dynamically typed) language.`,
            `Identifiers: valid characters, case sensitivity, unicode support, reserved keywords`,
            `$ and _ are allowed in identifiers`,
            `When you don't initialize a variable, it contains the <code>undefined</code> value.`,
            `Scope types: Global, Function, Block`,
            `Variables without keywords become global variables (not recommended).`,
            `var allows redeclaration without losing previous value.`,
            `let → block-scoped (introduced in ES6)`,
            `let improves scoping behaviors and code safety.`,
            `var → function-scoped`,
            `let prevents naming conflicts in different blocks.`,
            `let cannot be redeclared in the same block.`,
            `<strong>Variable Hoisting:</strong><br>var supports hoisting, let and const do not.`,
            `const → constant reference, block-scoped, must be initialized.`,
            `const cannot be reassigned.`,
            `const has block scope like let.`,
            `const with arrays/objects allows modification but not reassignment.`,
            `<table class="comparison-table">
                <tr>
                    <th>Feature</th>
                    <th>var</th>
                    <th>let</th>
                    <th>const</th>
                </tr>
                <tr>
                    <td>Scope</td>
                    <td>Function</td>
                    <td>Block</td>
                    <td>Block</td>
                </tr>
                <tr>
                    <td>Hoisted</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>Reassign</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>Redeclare</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>Bind 'this'</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>No</td>
                </tr>
            </table>`,
            `<strong>Best Practices:</strong>
                <ul>
                    <li>Use const by default</li>
                    <li>Use let when reassignment is needed</li>
                    <li>Avoid var in modern code</li>
                    <li>Never use undeclared variables</li>
                </ul>`
        ]
    },
    {
        heading: "Data Types",
        items: [
            `<strong>Primitive Data Types:</strong><br>String, Number, Boolean, null, undefined, BigInt, Symbol`,
            `<strong>Non-primitive Data Types:</strong><br>Object, Array, Date`,
            `Strings: '', "", \`\` (template literals)`,
            `Numbers: Always stored as 64-bit floating-point (IEEE 754 standard)`,
            `Boolean: true or false`,
            `undefined: Variable declared but not initialized`,
            `null: Intentional absence of value`,
            `BigInt: For large numbers (append 'n': 9007199254740991n)`,
            `Symbol: Creates unique, immutable values`,
            `Object literals: {}`,
            `JSON.stringify() - converts objects to JSON strings`,
            `Arrays: Ordered lists of values: [1, "two", true]`,
            `Date: Working with dates: new Date()`,
            `JavaScript is dynamically typed - types determined at runtime.`,
            `Use typeof operator to check type: typeof variable`
        ]
    },
    {
        heading: "Type Conversion",
        items: [
            `<strong>Implicit Conversion (Coercion):</strong> Automatically done by JavaScript`,
            `<strong>Explicit Conversion:</strong> Programmer manually converts types`,
            `<strong>To String (Implicit):</strong> "Value: " + 42 → "Value: 42"`,
            `<strong>To Number (Implicit):</strong> "5" * 2 → 10`,
            `<strong>To Boolean (Implicit):</strong> if("hello") → true`,
            `<strong>Explicit to String:</strong> String(123) → "123"`,
            `<strong>Explicit to Number:</strong> Number("123") → 123, +"123" → 123`,
            `<strong>parseInt/parseFloat:</strong> parseInt("123.45") → 123, parseFloat("123.45") → 123.45`,
            `<strong>Explicit to Boolean:</strong> Boolean(1) → true, Boolean(0) → false`,
            `<strong>Date conversion:</strong> Number(new Date()), date.getTime(), String(new Date())`,
            `<table class="conversion-table">
                <tr>
                    <th>Value</th>
                    <th>String</th>
                    <th>Number</th>
                    <th>Boolean</th>
                </tr>
                <tr><td>0</td><td>"0"</td><td>0</td><td>false</td></tr>
                <tr><td>1</td><td>"1"</td><td>1</td><td>true</td></tr>
                <tr><td>""</td><td>""</td><td>0</td><td>false</td></tr>
                <tr><td>"hello"</td><td>"hello"</td><td>NaN</td><td>true</td></tr>
                <tr><td>true</td><td>"true"</td><td>1</td><td>true</td></tr>
                <tr><td>false</td><td>"false"</td><td>0</td><td>false</td></tr>
                <tr><td>null</td><td>"null"</td><td>0</td><td>false</td></tr>
                <tr><td>undefined</td><td>"undefined"</td><td>NaN</td><td>false</td></tr>
                <tr><td>[50]</td><td>"50"</td><td>50</td><td>true</td></tr>
                <tr><td>[50,100]</td><td>"[50,100]"</td><td>NaN</td><td>true</td></tr>
            </table>`
        ]
    },
    {
        heading: "Strict Mode",
        items: [
            `<strong>'use strict';</strong> - Introduced in ES5 for more secure code`,
            `<strong>Benefits:</strong>
                <ul>
                    <li>Prevents accidental globals</li>
                    <li>Makes debugging easier</li>
                    <li>Eliminates silent errors</li>
                    <li>Future compatibility</li>
                </ul>`,
            `<strong>Global scope:</strong> 'use strict'; at the top of the file`,
            `<strong>Function scope:</strong> 'use strict'; inside a function`,
            `<strong>What strict mode prevents:</strong>
                <ul>
                    <li>Using variables without declaration</li>
                    <li>Deleting variables/functions</li>
                    <li>Duplicate parameter names</li>
                    <li>Writing to read-only properties</li>
                </ul>`
        ]
    }
];

// Make data available globally
if (typeof module !== 'undefined' && module.exports) {
    module.exports = conceptsData;
}