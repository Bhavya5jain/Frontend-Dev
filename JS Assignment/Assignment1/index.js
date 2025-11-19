
let bigdata=BigInt(123456789012345678901234567890);
 console.log(bigdata);

//  undefine mena s variable is declared but not assigned any value
 let undefine;
 console.log(undefine);

// null means variable is assigned with no value
 let nulle= null;
 console.log(typeof nulle);//object type---> (its a bug in JS because null is not an object type)

 //symbol data type
 let sym1= Symbol("mySymbol");//Sysbol is used to create unique identifiers
 let sym2= Symbol("mySymbol");// ===(check data type and value) or ==(check only value)
 console.log(sym1===sym2);//false because each symbol is unique
 

//BigInt data type
let a=10n;
let b=20n;
console.log(a==b);//because both are BigInt type but different values
console.log(a+b);


//object data type
let obj={name:"John", age:30, isStudent:true};//works on key-value pair if key is same 
// it will overwrite the previous value example:name:"John", name:"Doe" out
console.log(obj);//object type


//array data type
let arr=[1,"abc",true,10.5];
console.log(arr);
console.log(typeof arr);//object type

//type coercion examples --->- When used in arithmetic (+), JavaScript converts Boolean to Number or vice versa:
console.log(true+true);//1+1=2
console.log(true+false);//1+0=1
console.log(false+false);//0+0=0    
console.log("5"+5);//string concatenation "5"+"5"="55"
console.log("5"-5); //subtraction "5"-5=0 because - operator is not defined for string so it converts string to number
console.log("10"*2); //multiplication "10"*2=20
console.log("10"/2); //division "10"/2=5 
console.log("10"-"2");//subtraction "10"-"2"=8
console.log(1==true);// true because 1 is converted to true
console.log(1===true);// false because === checks data type and value
console.log(0==false);// true because 0 is converted to false
console.log(1==="1");// false because === checks data type and value
console.log(1=="1");// true because == checks only value
console.log(null==undefined);// true because both are considered equal in non-strict comparison
console.log(null===undefined);// false because === checks data type and value

//explicit type conversion
let str1="89";
let num1=Number(str1);//explicit conversion from string to number
console.log(typeof num1);
let num2=100;
let str2=String(num2);//explicit conversion from number to string

