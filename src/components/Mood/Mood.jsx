import React from 'react';
import Button from '@mui/material/Button';
import '../Mood/mood.css'
const Mood = () => {
  return <div>

<h2>Как твое настроение?</h2>
<div className='images'>
    <img src="https://i.ibb.co/Z6N2CTC/Rectangle-2.png" alt="Гнев" />
    <img src="https://i.ibb.co/xh8q0R9/Rectangle-3.png" alt="Зол" />
    <img src="https://i.ibb.co/12jySSt/Rectangle-4.png" alt="Нормально" />
    <img src="https://i.ibb.co/TWYhdjK/Rectangle-5.png" alt="Хорошо" />
    <img src="https://i.ibb.co/r6fBbjr/Rectangle-6.png" alt="Отлично" />



</div>
<h4>Выберите одну или несколько причин</h4>

<div >
  
<Button  className='btn1' variant="outlined">Коллеги</Button>
    <Button className='btn1' variant="contained">Профессиональное развитие</Button>
    <Button className='btn1' variant="contained">Рабочая среда</Button>
    <Button className='btn1' variant="outlined">Оплата</Button>
    <Button className='btn1' variant="outlined">Руководители</Button>
    <Button className='btn1' variant="outlined">Рабочий график</Button>
    <Button className='btn1' variant="outlined">Коммуникация</Button>
    <Button className='btn1' variant="outlined">Организация</Button>
    <Button className='btn1' variant="outlined">Рабочая нагрузка</Button>
</div>
 <textarea name="" id="" cols="30" rows="5"></textarea>


<select name="" id="">
  <option value="">Алишер Шарипов</option>
  <option value="">Имангелди Жолдлшбеков</option>
  <option value="">Иван Иванов</option>
  <option value="">Алмазбек Атамбаев</option>
  <option value="">Аскар Акаев</option>
  <option value="">Садыр Жапаров</option>
  <option value="">Сооронбай Жээнбеков</option>
  <option value="">Роза Отунбаева</option>
  <option value="">Аида Салиева</option>
  <option value="">Владимир Путин</option>
  <option value="">Анонимно</option>
</select>

 <Button className='btk' variant="contained"  >
        Send
      </Button>
  </div>;
};

export default Mood;
