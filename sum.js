let arr = [1,15,8,4,2,3,5,9];
let sum = 5;

for (let i = 0; i < arr.length; i++)
{
  for (let j = i + 1; j < arr.length; j++) 
{
    if (arr[i] + arr[j] == sum) 
    {
      console.log(` element ${arr[i]} & ${arr[j]} at index of ${i} & ${j}`);
    }
}
}