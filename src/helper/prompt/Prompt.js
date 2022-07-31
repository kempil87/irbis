import React from 'react';
import './Prompt.css'
import {CSSTransition} from "react-transition-group";

const Prompt = ({prompt}) => {

  const promptItem = [
    {letter:'И',
      desc:'Количество проведенных игр'
    },
    {letter:'В',
      desc:'Выигрыши в основное время'
    },
    {letter:'ОТВ',
      desc:'Выигрыши в овертайме'
    },
    {letter:'П',
      desc:'Проигрыши в основное время'
    },
    {letter:'ОТП',
      desc:'Проигрыши в овертайме'
    },
    {letter:'ЗМ',
      desc:'Забитые мячи'
    },
    {letter:'ПМ',
      desc:'Пропущенные мячи'
    },
    {letter:'О',
      desc:'Количество набранных очков'
    },
  ]

  return (
    <div className={prompt ? 'container prompt-wrap opacity-100 ':'container prompt-wrap opacity-0 '}>
        <div className='d-flex flex-wrap mt-3'>
          {promptItem.map((i,index) =>(
            <div key={index} className='col-3 d-flex flex-column justify-content-center '>
              <h5>{i.letter}</h5>
              <p style={{fontSize:13}}>{i.desc}</p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Prompt;