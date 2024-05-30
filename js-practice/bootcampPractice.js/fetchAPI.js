let getdata=fetch('https://dummyapi.online/api/social-profiles/1')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
    console.log('Data received:', data);
  console.log('Data received:', data.location);
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});
