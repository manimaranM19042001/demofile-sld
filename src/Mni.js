// const inventory = [
//     { name: "apples", quantity: 2 },
//     { name: "bananas", quantity: 0 },
//     { name: "cherries", quantity: 5 },
//   ];
  
//   const result = inventory.find(({ name }) => name === "cherries");
  
//   console.log(result); // { name: 'cherries', quantity: 5 }

const celldata =[

    {
        id : 1,
        name:'manimaran',
        icon:'S',
    },
    {
        id : 2,
        name:'manimaran',
        icon:'S',
    },
    {
        id : 2,
        name:'manimaran',
        icon:'S',
    }
] 
celldata.find((ele)=>ele.id === 1)['new'] = 'dhsuuf'
console.log(celldata)