import React from 'react'
import { FarmLandData } from '../../types/FarmLandData'
import { CSSTransition } from 'react-transition-group'
import { FarmCard } from './FarmCard'

interface Props {
  data: FarmLandData
}

export const TransitionedFarmCard: React.FC<Props> = (props) => {
  const isVisible = !!props.data
  return (
    <>
      <CSSTransition
        in={isVisible}
        appear={isVisible}
        timeout={500}
        classNames={{
          appear: 'transition-start',
          appearActive: 'transition-active',
          enter: 'transition-start',
          enterActive: 'transition-active',
        }}
        mountOnEnter
      >
        <div>
          <FarmCard {...props} />
        </div>
      </CSSTransition>
      <style jsx>{`
        .transition-start {
          opacity: 0;
          transform: scale(0);
        }

        .transition-active {
          opacity: 1;
          transform: scale(1);
          transition: all 500ms ease-out;
        }
      `}</style>
    </>
  )
}
