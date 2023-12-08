<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

-   A: `{}`
-   B: `ReferenceError: greetign is not defined`
-   C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>In this code, there is a object named `greetign` but it was not defined. `greeting` was defined. That's why when we console log `greetign` it will show undefined</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
    return a + b;
}

sum(1, "2");
```

-   A: `NaN`
-   B: `TypeError`
-   C: `"12"`
-   D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>The output is "12" (a string). JavaScript performs type coercion, converting the number 1 to a string, and then concatenates it with "2".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

-   A: `['🍕', '🍫', '🥑', '🍔']`
-   B: `['🍝', '🍫', '🥑', '🍔']`
-   C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
-   D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>In the code we are just console logging the food array that we declared previously. That's why the food array will be displayed.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
    return `Hi there, ${name}`;
}

console.log(sayHi());
```

-   A: `Hi there,`
-   B: `Hi there, undefined`
-   C: `Hi there, null`
-   D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>When we console log a function and dont pass the argument of the function that it automatically gets undefined, that's why we will see `undefined` in space of `name`</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
    if (num) count += 1;
});

console.log(count);
```

-   A: 1
-   B: 2
-   C: 3
-   D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>First we are declaring a variable name count and an array named nums. When we apply for each loop in the nums, the count variable gets added with the nums array number. so finally we will see the added sum of the nums with the count</i>

</p>
</details>
