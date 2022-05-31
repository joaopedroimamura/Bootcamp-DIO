function createList() {
    var input = document.getElementById('text_input').value;

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = input;
    checkbox.className = 'checkbox';

    var label = document.createElement('label');
    label.htmlFor = input;
    label.className = 'label';
    label.appendChild(document.createTextNode(input));

    var br = document.createElement('br');
    
    var div = document.createElement('div');
    div.appendChild(checkbox);
    div.appendChild(label);
    div.appendChild(br);

    var container = document.getElementById('tasks');  
    container.appendChild(div)
    container.style.border = '2px solid';
    container.style.borderColor = '#DCDCDC'

    document.getElementById('text_input').value = '';
}


