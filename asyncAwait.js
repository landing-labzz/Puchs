const delay = ms => {
  return new Promise(
    r => setTimeout(() => r(), ms)
  )
}

// // delay(2000).then(() => console.log('2 sec'))

 const url = 'https://jsonplaceholder.typicode.com/todos';

// function fetchTodo () {
//   console.log('Fetch todo started');
  
//   return delay(2000)
//   .then(() => fetch(url))
//   .then(response => response.json())
// }

// fetchTodo()
//   .then(data => {
//     console.log('Data ', data);
    
//   })
//   .catch( e => console.log('error', e))


async function fetchAsyncTodo () {
  console.log('Fetch todo started');
  try {
    await delay(2000)
    const response = await fetch(url)
    const data = await response.json()
    console.log('Data ', data);
  }catch (e) {
    console.log('Err: ', e);
  }
  finally {
    console.log('finally');
    
  }
}

fetchAsyncTodo().then(() => {
  console.log('fetch then ');
  
})
