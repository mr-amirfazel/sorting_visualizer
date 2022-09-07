const InsertionSort = (arr, setArr) =>{
    setTimeout(() => {
        let newArr = [...arr];
        for (let i = 1; i < arr.length ; i++) {
          setTimeout(() => {
            for (let j = 0; j < i; j++) {
              if (newArr[i] < newArr[j]) {
                swap(newArr, i, j);
                let newStep = [...newArr];
                setTimeout(() => {
                  setArr([...newStep]);
                  console.log(newStep);
                }, j * 100);
              }
              
            }
          }, i * 1000);
        }
      }, 500);
}

const swap = (arr, idx1, idx2) => {
    if(idx1!==idx2) [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    
}

export default InsertionSort;