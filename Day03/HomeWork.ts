let dynamicArray:number[]=[];


dynamicArray.push(10);
dynamicArray.push(21);
dynamicArray.push(32);
dynamicArray.push(43);
dynamicArray.push(54);
console.log(dynamicArray);

 dynamicArray.pop();
 console.log(dynamicArray);




console.log("Array elements:");
dynamicArray.forEach((element, index) => {
  console.log(`Element at index ${index}: ${element}`);
});