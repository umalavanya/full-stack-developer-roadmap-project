// JavaScript Concepts Data
const conceptsData = [
    {
        heading: "Printing Logging",
        items: [
            `document.writeln("something")`,
            `window.alert("hello world from alert" );\n// window is the global object, we can skip the window keyword`,
            `console.log("Hello from console!!!")\n//Console is useful to debug`,
            `// Using innerHTML\ndocument.getElementById("output").innerHTML = "Hello World from innerHTML" ;`,
            `// ctrl + shift + J - to open and close the developer tools in the browser`
        ]
    },
    {
        heading: "Commenting",
        items: [
            `single line comments ----> // <br> multi-line comments  ---> /* */`
        ]
    },
    {
        heading: "Variables",
        items: [
            `4 ways
                <ul>
                    <li>without using any keywords</li>
                    <li>var  --> old</li>
                    <li>let</li>
                    <li>const</li>
                </ul>`,
            `Variable declaration and initialiation`,
            `JavaScript is untyped language.`,
            `Identifiers 
                valid characters, case sensitivity, unicode supprt, reserve keywords`,
            `$ _ are allowed in identifiers`,
            `When you don't initialize the variable after declaring, it contains the undefined value. However, you can also assign
            the undefined value to the variable`,
            `Scope: Global, Local`,
            `When we define the variables without using any keyword, JavaScript considers them global variables and can use them
            anywhere inside the code.`,
            `the identifier doesn't lose the previous value if we declare the variable using the <span>var</span> keyword with the value and
            re-declare the same identifier without initialization.`,
            `let --> block-scoped`,
            `The let keyword was introduced in the ES6 (2015) version of JavaScript. It is an alternative to the var keyword.
            The main reason behind introducing the let keyword is to improve the scoping behaviors of variables and the safety of
            the code.`,
            `var --> function-scope`,
            `Sometimes, we require to define the variable with the same name in different blocks of one function. Conflicts may occur
            with the variable value if they use the var keyword.`,
            `the let keyword is used to improve the scoping behaviors of the code.`,
            `You can't redeclare the variables declared with the let keyword in the same block. However, you can declare the
            variables with the same name into the different blocks with the same function.`,
            `<span>Variable Hoisting: </span>
            The hoisting behaviors of JavaScript move the declaration of the variables at the top of the code. The let keyword
            doesn't support hoisting, but the var keyword supports the hosting.`,
            `JavaScript constants are the variables whose values remain unchanged throughout the execution of the program. You can
            declare constants using the const keyword.`,
            `The const keyword is introduced in the ES6 version of JavaScript with the let keyword. The const keyword is used to
            define the variables having constant reference.
            A variable defined with const can't be re-declared, reassigned. The const declaration have block as well as function
            scope.`,
            `In any case, you can't declare the variables with the const keyword without initialization.`,
            `const  -> can't be reassigned`,
            `A JavaScript variable declared with const keyword has block-scope. This means same variable is treated as different
            outside the block.`,
            `We can declare the arrays and objects using the const keyword, but there is a little twist in the array and object
            declaration.
            The variable with the const keyword keeps the constant reference but not the constant value. So, you can update the same
            array or object declared with the const keyword, but you can't reassign the reference of the new array or object to the
            constant variable.
            <span>So, we can't change the reference to the variables (arrays and objects) declared with the const keyword but update the
            elements and properties.</span>`,
            `Variables defined with const keyword are not hoisted at the top of the code.`,
            `<table>
                <tr>
                    <th>Comparision basis</th>
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
                    <td>Re-declare</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>Bind This</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>No</td>
                </tr>
            </table>`,
            `<span>Which should you use among var, let, and const?</span>
                • For the block scope, you should use the let keyword.
                • If you need to assign the constant reference to any value, use the const keyword.
                • When you require to define the variable inside any particular block, like a loop, 'if statement', etc. and need to
                access outside the block but inside the function, you may use the var keyword.
                • However, you can use any keyword to define global variables.
                • Re-declaring variables is not a good practice. So, you should avoid it, but if necessary, you may use the var keyword.`
        ]
    },
    {
        heading: "Data Types",
        items: [
            `Primitive Data-types <br> Non-primitive data types`,
            `Primitive--> Strings, Numbers, Boolean, null, undefined, BigInt, Symbol`,
            `BigInt and Symbol are introduced in ES6. In ES5, there were only five primitive data types. `,
            `In addition to these primitive data types, JavaScript supports a composite data type known as object. We will cover objects in detail in a separate chapter.
                The Object data type contains the 3 sub-data types −
                •	Object
                •	Array
                •	Date`,
                `Strings: '', "", \`\``,
                `Number: is always stored as a floating-point value (decimal number).`,
                `JavaScript does not make a distinction between integer values and floating-point values.
                 JavaScript represents numbers using the 64-bit floating-point format defined by the IEEE 754 standard.`,
                 `JavaScript also support exponential notaion of numbers (98e4)`,
                 `Boolean: true, false`,
                 `undefined: When you declare a variable but don't initialize it, it contains an undefined value. However, you can manually assign an undefined value to the variable also.`,
                 `null: When any variable's value is unknown, you can use the null. It is good practice to use the null for the empty or unknown value rather than the undefined one.`,
                 `JavaScript stores only 64-bit long floating point numbers. If you want to store a very large number, you should use the Bigint. You can create Bigint by appending n to the end of the number.`,
                 `Symbol: The Symbol data type is introduced in the ES6 version of JavaScript. It is used to create unique primitive, and immutable values.
                  The Symbol() constructor can be used to create a unique symbol, and you may pass the string as a parameter of the Symbol() constructor. `,
                  `object literals - {}`,
                  `JSON.stringify`,
                  `Array: the array is a list of elements of the different data types. You can create an array using two square brackets '[]' and insert multiple comma seprated values inside the array.`,
                  `Date: Date()<br>
                  let Date = new Date()`,
                  `JavaScript is a dynamically typed language like Python and Ruby. So, it decides the variable's data type at the runtime but not at the compile time. We can initialize or reassign the value of any data type to the JavaScript variables.`,
                  `The typeof operator allows you to check the type of the variable.`,
                  
        ]
    },
    {
        heading: "Type-conversion",
        items: [
            `Implicit, Explicit`,
            `Implicit is called as coercion --> automatically done by JavaScript. Ex: + for concatenation`,
            `Converting to String --> Implicit `,
            `Converting to Number --> Implicit`,
            `Converting to Boolean --> Implicit <br>
            When you use the Nullish (!!) operator with any variable, it implicitly converts its value to the boolean value.
            <br>
            <code>num = !!0; // !0 = true, !!0 = false <br>
                  num = !!1; // !1 = false, !!1 = true <br>
                  str = !!"";<br> // !"" = true, !!"" = false <br>
                  str = !!"Hello";<br> // !"Hello" = false, !!"Hello" = true <br>
                  </code>`,
            `Null to Number (Implicit conversion):
            In JavaScript, the null represents the empty. So, null automatically gets converted to 0 when we use it as an operand of the arithmetic operator.`,
            `Undefined with Number and Boolean (Implicit conversion)
            Using the undefined with the 'number' or 'boolean' value always gives the NaN in the output. Here, NaN means not a number.`,
            `Programmer changes the type manually --> Explicit conversion`,
            `String()  --> Explicit number, null, boolean to String`,
            `toString() --> its a method of Number object. used to convert number to String`,
            `Number() --> string to Number, also unary +`,
            `Number('100'); // Converts '100' to 100
             Number(false); // Converts false to 0
            Number(null); // Converts null to 0<br>
            num = +"200"; // Using the unary operator`,
            `parseFloat() --> To exrtact the floating point number from the string <br>
            parseInt() --> To extract the integer from the string<br>
            + --> its an unary operator`,
            `Think about the following<br>
            Number(null)<br>Number("200")<br>Number(undefined)`,
            `Converting to Boolean: Boolean<br>Examples: Boolean(100), Boolean(0), Boolean(""),Boolean("Hi"),Boolean(null)`,
            `Converting Date to String/number: <br> Number()<br>getTime()<br>The numeric date represents the total number of milliseconds since 1st January 1970.`,
            `Number(Date), date.getTime(), String(Date), date.toString()`,
            `<table>
  <tr>
    <th>Value</th>
    <th>String conversion</th>
    <th>Number conversion</th>
    <th>Boolean conversion</th>
  </tr>
  <tr>
    <td>0</td>
    <td>"0"</td>
    <td>0</td>
    <td>false</td>
  </tr>
  <tr>
    <td>1</td>
    <td>"1"</td>
    <td>1</td>
    <td>true</td>
  </tr>
  <tr>
    <td>"1"</td>
    <td>"1"</td>
    <td>1</td>
    <td>true</td>
  </tr>
  <tr>
    <td>"0"</td>
    <td>"0"</td>
    <td>0</td>
    <td>true</td>
  </tr>
  <tr>
    <td>""</td>
    <td>""</td>
    <td>0</td>
    <td>false</td>
  </tr>
  <tr>
    <td>"Hello"</td>
    <td>"Hello"</td>
    <td>NaN</td>
    <td>true</td>
  </tr>
  <tr>
    <td>true</td>
    <td>"true"</td>
    <td>1</td>
    <td>true</td>
  </tr>
  <tr>
    <td>false</td>
    <td>"false"</td>
    <td>0</td>
    <td>false</td>
  </tr>
  <tr>
    <td>null</td>
    <td>"null"</td>
    <td>0</td>
    <td>false</td>
  </tr>
  <tr>
    <td>undefined</td>
    <td>"undefined"</td>
    <td>NaN</td>
    <td>false</td>
  </tr>
  <tr>
    <td>[50]</td>
    <td>"50"</td>
    <td>50</td>
    <td>true</td>
  </tr>
  <tr>
    <td>[50, 100]</td>
    <td>"[50, 100]"</td>
    <td>NaN</td>
    <td>true</td>
  </tr>
</table>`


        ]
    },
    {
        heading: "JS - Strict Mode",
        items: [
            `Strict Mode in JavaScript
In JavaScript, the strict mode is introduced in the ES5 (ECMAScript 2009). The purpose behind introducing the "strict mode" is to make the JavaScript code more secure.
The 'use strict' literal expression is used to add the strict mode in the JavaScript code. It removes the silent errors from the code, such as you can't use the variable without declaration, you can't modify the readable property of the object, etc.
`,
`'use strict';`,
`Uses of Strict Mode:
Error prevention,
Safer code,
Future Compatibility`,
`Strict mode in global scope and local scope`

        ]
    }
];

// Function to render concepts
function renderConcepts() {
    const container = document.getElementById('concepts-container');
    
    conceptsData.forEach(section => {
        // Add heading
        const headingDiv = document.createElement('div');
        headingDiv.className = 'concept-heading';
        headingDiv.textContent = section.heading;
        container.appendChild(headingDiv);
        
        // Add items
        section.items.forEach(itemText => {
            const conceptDiv = document.createElement('div');
            conceptDiv.className = 'concept';
            conceptDiv.innerHTML = itemText;
            container.appendChild(conceptDiv);
        });
    });
}

// Render when DOM is loaded
document.addEventListener('DOMContentLoaded', renderConcepts);