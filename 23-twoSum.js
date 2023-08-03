//Take an array of integers and a target integer
//Return the indicesof the two numbers that add up to the target
function twoSum(nums, target) {
    let map = new Map();

    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        const complement = target - num;
        if (map.has(complement)) return [index, map.get(complement)];
        map.set(num, index);
    }
}