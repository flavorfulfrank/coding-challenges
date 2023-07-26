//Take an array
//Return sorted array using Merge Sort O(nlogn)
function mergeSort(array) {
    if (array.length <= 1) return array;

    let mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid, array.length));
    return merge(left, right);
}

function merge(left, right) {
    let mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            mergedArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            mergedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex < left.length) {
        mergedArray.push(left[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < right.length) {
        mergedArray.push(right[rightIndex]);
        rightIndex++;
    }
    
    return mergedArray;
}