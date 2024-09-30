/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let tempArray = [];
    for(let i = 0; i < m; i++){
        tempArray.push(nums1[i]);
    }

    for (let i = 0; i < n; i++){
        tempArray.push(nums2[i]);
    }
    
    // sort the array with bubble sort

    for (let i = 0; i < tempArray.length; i++){
        for(let j = 0; j < tempArray.length - 1; j++){
            if (tempArray[i] > tempArray[i+1]){
                let temp = tempArray[i];
                tempArray[i] = tempArray[i+1];
                tempArray[i+1] = temp;
            }
            
        }
    }

    // console the output;
    nums1 = tempArray;

    console.log(nums1);
    
    
};

const nums1 = [1,2,3,0,0,0];
const nums2 = [2,5,6];
merge(nums1,3, nums2, 3);