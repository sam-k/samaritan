import React from 'react';
import RescueBreathingResults from './RescueBreathingResults';
import CPRResults from './CPRResults';
import ChokingResults from './ChokingResults';
import MonitorResults from './MonitorResults';
import Call911 from './Call911';
import OtherResults from './OtherResults';
import UnconsciousChokingResults from './UnconsciousChokingResults';

function Results() {
  const conscious = JSON.parse(localStorage.getItem("conscious"));
  const breathing = JSON.parse(localStorage.getItem("breathing"));
  const rescuebreathing = JSON.parse(localStorage.getItem("chestRose"));
  const pulse = JSON.parse(localStorage.getItem("pulse"));
  const choking = JSON.parse(localStorage.getItem("choking"));

  const rescuebreathingLeaf = !conscious && !breathing && rescuebreathing && pulse;
  console.log(rescuebreathingLeaf)
  const cprLeaf = !conscious && !breathing && rescuebreathing && !pulse;
  const chokingLeaf = conscious && !breathing && choking;
  const unconsciousChokingLeaf = !conscious && !breathing && !rescuebreathing;
  const monitor = !conscious && breathing;
  const call911 = conscious && !breathing && !choking;
  const other = conscious && breathing;

  return (
    <>
      {rescuebreathingLeaf ? <RescueBreathingResults /> : null}
      {cprLeaf ? <CPRResults /> : null}
      {chokingLeaf ? <ChokingResults /> : null}
      {unconsciousChokingLeaf ? <UnconsciousChokingResults /> : null}
      {monitor ? <MonitorResults /> : null}
      {call911 ? <Call911 /> : null}
      {other ? <OtherResults /> : null}
    </>
  );
}

export default Results;
