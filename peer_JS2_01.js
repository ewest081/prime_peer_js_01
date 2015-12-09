/*
1. Start with the number 42 and set that equal to 'value'

2. Create condition logic to check if the value is great or equal to 53
2-1. If true, add 42 to 'value'
2-2. If false, subtract 13 from 'value'

3. Create a string that is set to 11, add it to 'value'

4. Create an array, loop through 'value' using charAt, set array[i] to each value

5. Remove the first and last values off the array

6. Create a new variable. Loop backwards through the array and store each value into the new Variable, combining each of the values of that array (backwards remember!)

7. parseInt both the 'value' and the new variable created in Step 6, ensure that both 'value' and the new variable are set to these new parsed values;

*/

//step 1
var value = 42;

//step 2
if (value >= 53) {
	value += 42;
} else {
	value -= 13;
};

//step 3
value += "11";

//console.log("value is " + value);

//step 4
var array = [];

for (var i = 0; i < value.length; i++) {
	array.push(value.charAt(i));
}
// console.log("array after step 4: " + array);

//step 5
array.shift();
array.pop();

// console.log("array is " + array);

//step 6
var peer = 0;

for (i = 0; i<=array.length; i++){
	peer += array.pop();
}

// console.log("peer is " + peer);

//step 7
value = parseInt(value);
peer = parseInt(peer);

// console.log("value at step 7: " + value);
// console.log("peer at step 7: " + peer);

/*
******* SWITCH PROGRAMMERS *******

8. Add 'value' and the new variable created in Step 6 together and store them in 'value'

9. If the new value of 'value' is less than 60, set 'value' equal to 14. If not, check to see if it is equal to 2930, if it is, set 'value' equal to 27. 
If neither of these are true, set the value to 2.

10. Create a while loop that counts down from 10 and increments 'value' by 1.

11. Create a function that accepts an argument 'val'. The function should convert 'val' to a String, then drop the first character off the String, but only if there 
is more than 1 character in the String. Return 'val' and set the 'value' to the returned value.

12. Call the function.

13. Console log value. Create an index.html file, link the this Javascript file. Load in the browser, check the value.

14. Your answer should be a String value that equals 7. Is that what you got?
*/

//step 8

value = value + peer;

// console.log("value after step 8 is " + value);

//step 9

if (value < 60){
	value = 14;
} else if (value == 2930){
	value = 27;
} else {
	value = 2;
};

//step 10

i=10;

while(i>0){
	value++;
	i--;
};
// console.log("Value is " + value);

// console.log(value);

//step 11

function jerk(val){
	val = val.toString();
	// console.log(val);
	if (val.length > 1){
	val = val.substring(1);
	}
	// console.log("val in now " + val);
	return val;

};

//step 12

value = jerk(value);

	// console.log("value is " + value);



