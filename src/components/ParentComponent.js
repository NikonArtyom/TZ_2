import { useState } from 'react';
import '../App.css';
import ClassLifecycleComponent from './toDo/classComponents/ClassLifecycleComponent';
import FunctionLifecycleComponent from './toDo/functionComponets/FunctionLifecycleComponent';

function ParentComponent() {

  const [stateClass, setStateClass] = useState(true)

  const unMountComponentClass = () => stateClass ? setStateClass(!stateClass) : setStateClass(stateClass)
  //типо где было true-false исправить на stateClass-!stateClass????
  //по-другому никак в голову не лезет

  const [stateFn, setStateFn] = useState(true)

  const unMountComponentFn = () => stateFn ? setStateFn(!stateFn) : setStateFn(stateFn)

  return (
    <div className='parent'>

      <div className='ClassLifecycleComponent'>
        {stateClass && <ClassLifecycleComponent />}
        <button onClick={unMountComponentClass}>Удалить или показать компоненту</button>
      </div>

      <div className='FunctionLifecycleComponent'>
        {stateFn && <FunctionLifecycleComponent />}
        <button onClick={unMountComponentFn}>Удалить или показать компоненту</button>
      </div>
    </div>
  );
}

export default ParentComponent;
