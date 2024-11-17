{const numbers: number[] = [1, 2, 3, 2, 4, 1, 5];

const removeDuplicates=(array: number[]): number[]=> {
  return array.filter((x, index) => array.indexOf(x) === index);
}

console.log(removeDuplicates(numbers));
}