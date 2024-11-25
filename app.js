function MostFrequenceStringLength(arr) {
    lengthCount = arr.map(i => i.length);
    
    lengthCount.sort();

    let max_count = 1, res = arr[0];
    let curr_count = 1;

    for (let i = 1; i < lengthCount.length; i++) {
        if (lengthCount[i] == lengthCount[i - 1])
            curr_count++;
        else
            curr_count = 1;

        if (curr_count > max_count) {
            max_count = curr_count;
            res = lengthCount[i - 1];
        }
    } 	
    const result = arr.filter((str) => str.length == res);
    return result;
}


console.log(MostFrequenceStringLength(['a', 'ab', 'abc', 'cd', 'def', 'gh']));
console.log(MostFrequenceStringLength([ 'Duong', 'Hoang','Hieu', 'Minh']));
console.log(MostFrequenceStringLength(['a', 'ab', 'abc', 'cde', 'def', 'ghi', 'kl', 'mn']));