function fetchingMajorityElement(arr){
    let n = Math.floor(arr.length/2);
    let majority_elements = [];
    for (let each of arr){
        let majority_count = 0;
        for (let each_sub of arr){
            if (each == each_sub){
                majority_count += 1;
                if (majority_count > n){
                    majority_elements.push(each);
                    return each;
                }
            }
        }
    }
    return "No Majority Element";
}

array = [3, 3, 4, 2, 4, 4, 2, 4, 4, 5, 5];
console.log(fetchingMajorityElement(array));