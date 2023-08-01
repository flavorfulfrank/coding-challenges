//Take an array
//Return true if the array contains a duplicate element
function containsDuplicate(nums) {
    let memo = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in memo) return true;
        memo[nums[i]] = true;
    }
    return false;
};