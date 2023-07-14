//Take a list of numbers and integers
//Return a list with strings filtered out
function filter_list(list) {
    return list.filter(item => (typeof item !== 'string'));
}