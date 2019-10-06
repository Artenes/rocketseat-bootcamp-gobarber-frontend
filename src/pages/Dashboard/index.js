import React, { useState, useMemo } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { format, addDays, subDays } from 'date-fns';
import en from 'date-fns/locale/en-US';

import { Container, Time } from './styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const formattedDate = useMemo(
    () => format(date, "d',' MMMM", { locale: en }),
    [date]
  );

  function handleNextDay() {
    const nextDay = addDays(date, 1);
    setDate(nextDay);
  }

  function handlePreviousDay() {
    const previousDay = subDays(date, 1);
    setDate(previousDay);
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePreviousDay}>
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>{formattedDate}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Reachel Miller</span>
        </Time>
        <Time available>
          <strong>09:00</strong>
          <span>Open</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Hamona Jennifer</span>
        </Time>
        <Time>
          <strong>11:00</strong>
          <span>Monique Siqueira</span>
        </Time>
      </ul>
    </Container>
  );
}
