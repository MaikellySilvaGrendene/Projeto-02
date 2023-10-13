import '../countDown/styles.css';
import { DatePicker } from 'rsuite';
import { useCountdown } from "./countHook/useCountdown";
import { useState } from 'react';

export function Countdown() {
  const [value, setValue] = useState(new Date());
  const [day, hour, minute, second] = useCountdown(value);

  const handleClean = () => {
    setValue(new Date());
  };
  const Counter = ({ title, number }) => {
    return (
      <div className="counter">
        <p className="counter-number">{number}</p>
        <p className="counter-text">{title}</p>
      </div>
    );
  };

  

  return (
    <div>
      <div className="CountDown">
        <div className="container">
          <h4>Contagem Regressiva:</h4>

          <div className="datePicker">
            <DatePicker
              format="yyyy-MM-dd HH:mm:ss"
              calendarDefaultDate={new Date('')}
              ranges={[
               {
                label: 'Now',
                value: new Date()
              }
              ]}
              style={{ width: 260}}
              value={value}
              onChange={setValue}
              onClean={handleClean}
            />
          </div>


          <div className="countdownContainer">
            {day > 0 && <Counter title="Dias" number={day} />}
            {hour > 0 &&<Counter title="Horas" number={hour} />}
            {minute > 0 &&<Counter title="Minutos" number={minute}/>}
            {second > 0 && <Counter title="Segundos" number={second} />}
          </div>

        </div>
      </div>
    </div>
  );
}