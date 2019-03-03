document.addEventListener('DOMContentLoaded', function(){

  var list = document.querySelector('#book-list ul');
  var forms = document.forms;

  // delete books
  list.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
      var li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  });

  // add books
  var addForm = forms['add-book'];
  addForm.addEventListener('submit', function(e){
    e.preventDefault();

    // create elements
    var value = addForm.querySelector('input[type="text"]').value;
    var li = document.createElement('li');
    var bookName = document.createElement('span');
    var deleteBtn = document.createElement('span');

    // add text content
    bookName.textContent = value;
    deleteBtn.textContent = 'delete';

    // add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    // append to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });

  // hide books
  var hideBox = document.querySelector('#hide');
  hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
      list.style.display = "none";
    } else {
      list.style.display = "initial";
    }
  });

  // filter books
  var searchBar = forms['search-books'].querySelector('input');
  searchBar.addEventListener('keyup', (e) => {
    var term = e.target.value.toLowerCase();
    var books = list.getElementsByTagName('li');
    Array.from(books).forEach((book) => {
      var title = book.firstElementChild.textContent;
      if(title.toLowerCase().indexOf(e.target.value) != -1){
        book.style.display = 'block';
      } else {
        book.style.display = 'none';
      }
    });
  });

  // tabbed content
  var tabs = document.querySelector('.tabs');
  var panels = document.querySelectorAll('.panel');
  tabs.addEventListener('click', (e) => {
    if(e.target.tagName == 'LI'){
      var targetPanel = document.querySelector(e.target.dataset.target);
      Array.from(panels).forEach((panel) => {
        if(panel == targetPanel){
          panel.classList.add('active');
        }else{
          panel.classList.remove('active');
        }
      });
    }
  });

})