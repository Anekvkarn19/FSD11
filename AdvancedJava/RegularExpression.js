//regex

//regular expression
// let regex=/hello/;
// let regex=new regex("pattern");
let text="hello hello world hello hello";
let pattern=/hello/g;
console.log(pattern.test(text));//.test() method checks if the pattern exists in the text and returns true or false 
console.log(text.match(pattern));//.match() method returns an array of all matches found in the text

//flag(modifiers) used with .match() method
//g-global search
//i-case insensitive search
//m-multiline search

//common pattern
// [abc]//matches any one of the characters a, b, or c
// [a-z]//matches any lowercase letter
// [A-Z]//matches any uppercase letter
// [0-9]//matches any digit
let p="abc123";
let pattern1=/[a-z]/;
let pattern2=/[A-Z]/;
let pattern3=/[0-9]/;
console.log(p.match(pattern1));
console.log(p.match(pattern2));
console.log(p.match(pattern3));
//special characters
// . ->any character data
// $ ->end of the string
// \d ->matches any digit
// \w ->matches any word character (alphanumeric or underscore)
// \s ->matches any whitespace character
// ^ ->start of the string
let c=/^\d+$/;
console.log(c.test("12345"));
//quantifiers
// * ->matches 0 or more occurrences of the preceding character or group
// + ->matches 1 or more occurrences of the preceding character or group
// ? ->matches 0 or 1 occurrence of the preceding character or group
// {n} ->matches exactly n occurrences of the preceding character or group
// {n,} ->matches n or more occurrences of the preceding character or group
// {n,m} ->matches between n and m occurrences of the preceding character or group
let reges=/\d{3}/;
console.log("12345".match(reges));
let newReg=/(cat|dog)/;
console.log(newReg.test("I have a dog"));
let a="hello world";
let result=a.search(/world/);
console.log(result);
let b="a,b,c";
console.log(b.split(/,/));
//E-mail validation
let emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//Password validation
let passwordPattern=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
