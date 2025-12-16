/* eslint-disable no-loop-func */
import {useState} from 'react'
import './App.css';

const MultistepComp = ({list}) => {

    const [currentStep, setCurrentStep] = useState(0);
    let steps=[]

    for(let i=0;i<Number(list);i++) {
        steps.push(<div className={`step ${currentStep>=i? "active": ''}`} key={i} onClick={()=> setCurrentStep(i)}>{i+1}</div>)
    }

    const progressWidth = ((currentStep / (Number(list)-1)) * 100) // calculation is important


  return (
    <div>
        <label>Multi Step Component</label>
        <div className='stepper-wrapper'>
            <div className='progress-track'>
                <div className='progress-line' style={{width: `${progressWidth}%`}}></div>
            </div>
            <div className='stepper'>
            {steps}
            </div>  
        </div>
    </div>
  )
}

export default MultistepComp