import { useState } from 'react';
import '../App.css';
import ClassLifecycleComponent from './toDo/classComponents/ClassLifecycleComponent';
import FunctionLifecycleComponent from './toDo/functionComponets/FunctionLifecycleComponent';

function ParentComponent() {

  const [stateClass, setStateClass] = useState(true)

  const unMountComponentClass = () => {
    if (stateClass) {
      return setStateClass(false)
    } else {
      return setStateClass(true)
    }
  }

  const [stateFn, setStateFn] = useState(true)

  const unMountComponentFn = () => {
    if (stateFn) {
      return setStateFn(false)
    } else {
      return setStateFn(true)
    }
  }

  return (
    <div className='parent'>

      <div className='ClassLifecycleComponent'>
        {stateClass && <ClassLifecycleComponentm />}
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
