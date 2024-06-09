let arr = [7, 8, 12, 27, 88];
let element = 30;
let index = 2;


for (let i=arr; i>= index; i--) {

    arr[i + 1] = arr[i];
}

arr[index] = element;
console.log(arr);

