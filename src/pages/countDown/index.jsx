import "rsuite/dist/rsuite.css";
import '../countDown/styles.css';
import { DatePicker } from 'rsuite';
import { useCountdown } from "./countHook/useCountdown";
import { useState } from 'react';

export function Countdown() {
  const [value, setValue] = useState(new Date());
  const [day, hour, minute, second] = useCountdown(value);

  const Counter = ({ title, number }) => {
    return (
      <div className="counter">
        <p className="counter-number">{number}</p>
        <h3 className="counter-text">{title}</h3>
      </div>
    );
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '4rem' }}>
        <DatePicker
          format="yyyy-MM-dd HH:mm:ss"
          calendarDefaultDate={new Date('')}
          ranges={[
            {
              label: 'Now',
              value: new Date()
            }
          ]}
          style={{ width: 260 }}
          value={value}
          onChange={setValue}
        />
      </div>
    
      <div className="CountDown">
        <div className="container">
          <h1>Pronto para lançar em:</h1>
          <div className="countdownContainer">
            {day > 0 && <Counter title="Dias" number={day} />}
            <Counter title="Horas" number={hour} />
            <Counter title="Minutos" number={minute} />
            <Counter title="Segundos" number={second} />
          </div>
        </div>
      </div>
    </div>
  );
}
