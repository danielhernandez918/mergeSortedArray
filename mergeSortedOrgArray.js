/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
var merge = function(nums1, m, nums2, n) {
    let i, j, k;
    for(i = m - 1, j = n - 1, k = m + n - 1; i >= 0 && j >= 0; k--){
        if(nums1[i] >= nums2[j]){
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
    }
    while(i >= 0) {
        nums1[k] = nums1[i];
        k--;
        i--;
    }

    while(j >= 0) {
        nums1[k] = nums2[j];
        k--;
        j--;
    }
    return nums1;
};
console.log(merge(nums1,m,nums2,n));