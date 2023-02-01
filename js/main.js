let fizz="",buzz="",fizzbuzz="";

for (i=1; i<=100; i++){
    if (i%3==0 && i%5==0){
        fizzbuzz+=JSON.stringify(i)+",";
    }
    else if(i%3==0){
        fizz+=JSON.stringify(i)+",";
    }
    else if (i%5==0){
        buzz+=JSON.stringify(i)+",";
    }
}
console.log("FizzBuzz "+ fizzbuzz);
console.log("Fizz "+ fizz);
console.log("Buzz "+ buzz);