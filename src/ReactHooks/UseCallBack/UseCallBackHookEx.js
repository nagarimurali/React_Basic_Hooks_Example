import React from 'react';
import { useState, useCallback } from 'react';
import TitleCom from './TitleCom';
import Count from './Count';
import ButtonCom from './ButtonCom';

const UseCallBackHookEx = () => {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(7000);
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age])



  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000)
  }, [salary])


  return (
    <div>
      <TitleCom /><br />
      <Count text={'age'} number={age} /><br />
      <ButtonCom children={'incrementAge'} handleEvent={incrementAge} />
      <Count text={'salary'} number={salary} /><br />
      <ButtonCom children={'incrementSalary'} handleEvent={incrementSalary} />
    </div>
  )
}

export default UseCallBackHookEx
