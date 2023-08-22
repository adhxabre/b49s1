// Synchronous Function
// function batch() {
//   return "Hello batch 49"
// }

// batch()


// Asynchronous Function
// function member() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve("Finished")
//     }, 3000)
//   })
// }

// async function runMember() {
//   const data = await member()
//   console.log(data) // data == finished
// }

// // function runMember() {
// //   const data = member()
// //   console.log(data)
// // }

// runMember()


function member() {
  return new Promise((resolve) => {
    const time = 6000
    
    if(time < 5000) {
      resolve("Finished")
    } else {
      reject("Time's Up")
    }
  })
}

async function runMember() {
  try {
    const data = await member()
    console.log(data) // data == finished
  } catch(error) {
    console.log(error)
  }
}

// function runMember() {
//   const data = member()
//   console.log(data)
// }

runMember()