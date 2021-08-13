function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // ex 1
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for(let i = 0; i < dezDaysList.length; i ++){

    let li = document.createElement('li');
    li.innerHTML = dezDaysList[i];
    li.className = 'day';
    if (i === 0 || i === 1){
      li.style.color = 'black';
    } else if (i === 24 || i === 25 || i === 31){
      li.className = 'day holiday';
    }
    if (i === 4 || i === 11 || i === 18 || i === 25){
      li.classList.add('friday');
    }

    document.getElementById('days').appendChild(li);


  }

