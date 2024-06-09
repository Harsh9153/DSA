//its used for search for that the value is there in array or not in linear.
let arr = [5, 10, 15, 20, 25, 30,35];
let element = 15;

function linear() 
{
    for (let i = 0; i < arr.length; i++) 
    {
        if (arr[i] == element) 
        {
            // console.log("True");
            return "True";
        }
        else 
        {
            console.log("False");
            
        }
    }
}
let hrd = linear();
console.log(hrd);