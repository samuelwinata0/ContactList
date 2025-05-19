const closes = document.querySelectorAll('.close');

closes.forEach(function (e) {
  e.addEventListener('click', function (el) {
    const target = el.target.parentElement;
    target.style.display = 'none';
    el.preventDefault();
    console.log(target);
  });
});

const inpName = document.querySelector('.inpName');
const inpPhone = document.querySelector('.inpPhone');
const container = document.querySelector('.container');

document.querySelector('.add').addEventListener('click', function () {
  const valueName = inpName.value;
  const valuePhone = inpPhone.value;

  if (valueName && valuePhone) {
    console.log('Menambahkan kartu: ', valueName, valuePhone);
    const div = document.createElement('div');
    div.classList.add('card');

    const newName = document.createElement('span');
    newName.classList.add('name');
    newName.innerText = valueName;

    const newPhone = document.createElement('span');
    newPhone.classList.add('phone');
    newPhone.innerText = valuePhone;

    const closeLink = document.createElement('a');
    closeLink.href = '#';
    closeLink.classList.add('close');
    closeLink.innerText = 'X';

    div.appendChild(newName);
    div.appendChild(newPhone);
    div.appendChild(closeLink);

    container.appendChild(div);

    inpName.value = '';
    inpPhone.value = '';
  } else {
    alert('Fill Name and Phone Number');
  }
});
