// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(Response => console.info(Response)).catch(()=> console.log("salah"))

// console.info(data)

// const isVip = true

// const checkingVip = new Promise((resolve, reject) => {
//   if(isVip) {
//     resolve("Member is vip")
//   } else {
//     reject("Member isnt vip")
//   }
// })

// checkingVip
//   .then(response => console.log("yes " + response))
//   .catch(response => console.log("no " + response))


// const isVip = true

// const checkingVip = new Promise((resolve, reject) => {
//   if(isVip) {
//     setTimeout(() => {
//       resolve("Member is vip")
//     }, 2000)
//   } else {
//     setTimeout(() => {
//       reject("Member isnt vip")
//     }, 2000)
//   }
// })

// console.log("start")

// checkingVip
//   .finally(() => console.log("finished"))
//   .then(response => console.log("yes " + response))
//   .catch(response => console.log("no " + response))

// console.log("end")



// console.log(checkingVip)
// console.log(checkingVip.then(response => console.log("yes " + response)))


// const member = new Promise(resolve => {
//   setTimeout(() => {
//     resolve([{
//       id: 1,
//       name: "Dandi Saputra",
//       isVip: true
//     }])
//   }, 1000)
// })


// const product = new Promise(resolve => {
//   setTimeout(() => {
//     resolve([{
//       id: 1,
//       name: "Gayo Beans",
//       price: 499000
//     }])
//   }, 1000)
// })

// member
//   .then(response => console.log(response))
//   .catch(response => console.log(response))

// product
//   .then(response => console.log(response))
//   .catch(response => console.log(response))

// Promise.all([product, member])
//   .then(response => console.log(response))


