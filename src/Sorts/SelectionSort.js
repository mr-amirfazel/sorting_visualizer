const SelectionSort = (arr, setArr) =>{
    setTimeout(() => {
        let newArr = [...arr];
        for (let i = 0; i < arr.length ; i++) {
            let minIdx = i;
          setTimeout(() => {
            for (let j = i+1; j < arr.length; j++) {

              if (newArr[j] < newArr[minIdx]) {
                minIdx = j; 
              }
            }
            swap(newArr, i, minIdx);
                let newStep = [...newArr];
                setTimeout(() => {
                  setArr([...newStep]);
                  console.log(newStep);
                }, i * 100);
          }, i * 1000);
        }
      }, 500);
}

const swap = (arr, idx1, idx2) => {
    if(idx1!==idx2) [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    
}

export default SelectionSort;