// console.log('Request data...');


// const prom = new Promise( (resolve, reject) => {
//   setTimeout(() => {
//     console.log('Preparing data...');
//     const backendData = {
//       server: 'AGS',
//       port: 8080,
//       status: "working"
//     }
//     resolve(backendData)
    
//   }, 2000)
// })
// prom.then(data => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//              data.modified = true
//              resolve(data)
//            }, 2000);
//   })
// })
// )
// .then( clientData => {
//   console.log('Data received', clientData);
//   clientData.fromPromise = true
//   return clientData
  
// })
// .then(data => {
//   setTimeout(() => {
//     console.log('new prep data', data);
    
//   }, 2000) 
// })

// .catch( err => console.log('Error: ', err)
// .finally( () => console.log('Finaly');
// )


const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
}

//sleep(2000).then(() => console.log('Affter 2 second'))
  
Promise.all([sleep(2000), sleep(3000), sleep(5000)])
  .then(() => {
    console.log('All promises');
    
  })

  Promise.race([sleep(2000), sleep(3000), sleep(5000)])
  .then(() => {
    console.log('race promises');
    
  })
