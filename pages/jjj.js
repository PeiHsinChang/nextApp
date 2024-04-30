import React from "react";
import styled from "styled-components";

const Contaner = styled.div`
  width: 100%;
  height: 100%;
  background: red;
`;

/* 
- 總共幾個 tasks
- pending 的 tasks
-  一次送幾個 tasks
- task 要花多久時間
*/
// class handleTask{
//   constructor(maxCount){
//     this.maxCount = maxCount; // 3
//     this.count = 0;  // 正在做 pendingTask 第幾個
//     this.pendingTask = [];
//     this.completed = 0;
//   }

//   /**
//    * @param {promise} tasks
//    * @return { null }
//  */

//   run(tasks){
//       if(this.count < this.maxCount){
//         this.count ++;
//         tasks().then(() => {
//           this.count --;
//           this.completed ++;
//           console.log('pendingTask: ', this.pendingTask.length)
//           if(this.pendingTask.length > 0) this.run(this.pendingTask.shift())
//           console.log('completed: ', this.completed)
//         })
//       } else{
//         this.pendingTask.push(tasks);
//       }
//   }

// }

// function task(){
//   return new Promise((resolve, reject) => {
//       // console.log('running')
//       setTimeout(resolve(), Math.random()*1000)
//   }).then(() => {
//       // console.log('done')
//   }).catch(() => {
//       // console.log('error')
//   })
// }

// let myTask = new handleTask(3);
// for(let i=0; i< 10; i++){
//   myTask.run(task);
// }

// 練習遞迴

const test = {
  test1: {
    test2: {
      test3: {
        // ...
      },
    },
  },
};

const recursionObj = (test) => {
  const getObjKeys = Object.keys(test) || [];
  if (getObjKeys.length === 0) {
    return {};
  } else {
    let newObj = {};
    getObjKeys.map((item) => {
      newObj = {
        ...recursionObj(test[item]),
        [item]: test[item],
      };
    });
    newObj = {
      ...newObj,
    };
    return newObj;
  }
  //
};
console.log("recursionObj", recursionObj(test));

function sumRecursion(num) {
  if (num === 0) {
    return 1;
  } else {
    const Sn = sumRecursion(num - 1) + num;
    return Sn;
  }
}

console.log("遞迴加法", sumRecursion(2));

function factorial(num) {
  // const Fn = num * factorial(num - 1)

  // num -= 1
  // console.log(num)
  // return Fn
  // if (num === 0) {
  //   return Fn
  // }

  console.log("num ", num);
  if (num <= 1) {
    console.log("num <= 1 ");

    return 1;
  } else {
    const Fn = num * factorial(num - 1);
    console.log("num in F", num, "Fn", Fn);
    return Fn;
  }
}
console.log(factorial(2));

export default function Page() {
  return (
    <>
      <Contaner>Hello World</Contaner>
      <h1>Hello, Next.js!Index===pages</h1>;
    </>
  );
}
