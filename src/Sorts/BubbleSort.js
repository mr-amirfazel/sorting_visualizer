const BubbleSort = (arr, setArr) => {
    setTimeout(() => {
        let newArr = [...arr];
        for (let i = 0; i < arr.length - 1; i++) {
          setTimeout(() => {
            for (let j = i + 1; j < arr.length; j++) {
              if (newArr[i].value > newArr[j].value) {
                let temp = newArr[i].value;
                newArr[i].value = newArr[j].value;
                newArr[j].value = temp;
                newArr[j].selected = true;
                newArr[i].selected = true;
                let newStep = [...newArr];
                setTimeout(() => {
                  setArr([...newStep]);
                  setTimeout(() => {
                    newArr = newArr.map (item => {
                        return ({
                            value: item.value,
                            selected: false,
                        })
                    }, 100);
                  })
                },  100);
                
              }
              
            }
          }, i * 1000);
        }
      }, 500);
}

export default BubbleSort;