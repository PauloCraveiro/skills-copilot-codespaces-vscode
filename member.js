function skillsMember(){
  // 1. Get the data from the form
  let member = document.getElementById('member').value;
  
  // 2. Check if the data is correct
  if (member == '' || member == undefined || member == null){
    alert('Please fill all the fields');
    return false;
  }

  // 3. Get the data from the local storage
  let members = localStorage.getItem('members');
  members = members == null || members == '' ? [] : JSON.parse(members);

  // 4. Check if the member already exists
  let find = members.find(x => x == member);
  if (find != undefined){
    alert('The member already exists');
    return false;
  }

  // 5. Add the member to the list
  members.push(member);

  // 6. Save the data to the local storage
  localStorage.setItem('members', JSON.stringify(members));

  // 7. Show the success message
  alert('The member was added successfully');

  // 8. Clean the form
  document.getElementById('member').value = '';
    
    // 9. Return false to avoid the form submit
}