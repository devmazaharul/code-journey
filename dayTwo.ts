function largestNumber(arr: number[]) {
  let init = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > init) {
      init = arr[i];
    }
  }
  console.log(init);
}

const  removeDuplicates=(arr: number[]) =>arr.filter((item, index) => arr.indexOf(item) == index);
//onother way
function removeDuplicatesAnotherway(arr: number[]) {
  const newArr: number[] = [];
  arr.filter((item, index) => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr;
}
