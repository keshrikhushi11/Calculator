## Scientific-Calculator Web App :

A modern and responsive **Scientific-Calculator** built using HTML, CSS, and JavaScript.  
It supports basic operations, scientific functions, and also maintains a persistent calculation history using localStorage.      
I converted the history array into a string using `JSON.stringify()` before saving it,
and while retrieving, I converted it back into an array using `JSON.parse()`.

---

##  Features :

-  Basic operations: `Addition`, `Subtraction` , `Multiplication` ,`Division`
-  Trigonometric functions: `sin`, `cos`, `tan` 
-  Advanced operations: `log`, `square root`, `power`  
-  `π` and `e` constants  
-  Keyboard support  
-  Calculation history  
-  Error handling (invalid expressions)  

---

##  Technologies I have Used :

- **HTML** → Structure  
- **CSS** → Styling (Grid + Flexbox)  
- **JavaScript** → Logic, DOM manipulation(process to accessing and updating HTML elements using Javascript.)
- I used local storage to store the history parmanently. If user wants to delete the history they can delete.
  I converted it back into an array using JSON.parse().

---

##  How It Works :

- User enters expression using buttons or keyboard  
- JavaScript updates display using DOM manipulation  
- Expression is evaluated using `Function()`  
- Trigonometric functions are converted from degrees to radians  
- Result is displayed instantly  
- History is stored dynamically  

---

##  Key Concepts Used :

- DOM Manipulation (`getElementById`)  
- Event Handling (`onclick`, `keydown`)  
- JavaScript Math functions  
- Error handling using `try...catch`  
- String manipulation
- JSON.parase for History `(localStorage)`

---

##  Project Structure :

<img width="1234" height="856" alt="image" src="https://github.com/user-attachments/assets/b14a0bee-c617-4bd4-b22c-e108280413a8" />

---

<img width="1920" height="1018" alt="image" src="https://github.com/user-attachments/assets/f4abf65b-1ddd-4a27-83ac-9fcec6a6a2d4" />

---

<img width="1920" height="1018" alt="image" src="https://github.com/user-attachments/assets/bc024352-e5e0-483e-9c86-5bd5d8795669" />


---

<img width="1920" height="1023" alt="image" src="https://github.com/user-attachments/assets/b3dee213-f723-4eff-87ef-5d4409b830f5" />

