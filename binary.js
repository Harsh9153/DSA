let arr=[1,5,9,12,16,18,19,22,25];
let element=16;

function binary(arr,first,last,element)

{

  if(last>=first)
    {
        let mid=Math.floor((first+last)/2)

        if(arr[mid]==element)
            {
                return true;
            }
            if(arr[mid]>element)
                {
                    return binary(arr,mid-1,first,element)
                }
                else{

                    return binary(arr,mid+1,last,element)

                }
            
    }
    return false;
}
let demo=binary(arr[0],arr.length,element);
console.log(demo);