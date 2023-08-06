//Take a sorted array
//Return index if found, -1 if not found
function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let current = Math.floor(right / 2);

    while (left <= right) {
        if (target === nums[current]) {
            return current;
        } else if (target > nums[current]) {
            left = current + 1;
            current = Math.floor((left + right) / 2);
        } else {
            right = current - 1;
            current = Math.floor(right / 2);
        }
    }
    return -1;
};