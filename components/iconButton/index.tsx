import React from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

interface Props {
  iconSrc: string
  tooltip: string
  size: any
  onClick: (e: React.MouseEvent) => void
}

export const IconButton: React.FC<Props> = (props) => {
  const { tooltip, iconSrc, size } = props
  return (
    <div className="drop-shadow cursor-pointer" onClick={props.onClick}>
      <Popup
        trigger={() => (
          <img src={iconSrc} width={size} height={size} alt={tooltip} />
        )}
        on={['hover']}
      >
        {tooltip}
      </Popup>
      <style jsx>{`
        .drop-shadow {
          filter: drop-shadow(0px 0px 3px darkgray);
          transition: filter 250ms ease-in-out;
        }

        .drop-shadow:hover {
          filter: drop-shadow(0px 0px 3px darkgray) brightness(1.1);
        }
      `}</style>
    </div>
  )
}
