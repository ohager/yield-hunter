import React from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import cx from 'classnames'

interface IconProps {
  iconSrc: string
  tooltip: string
  size: any
  disable?: boolean
  pending?: boolean
}

interface Props extends IconProps {
  onClick: (e: React.MouseEvent) => void
}

export const IconButton: React.FC<Props> = (props) => {
  const { tooltip, disable = false, pending = false, iconSrc, size } = props

  const getTooltip = () => {
    if (pending) return 'Please wait, being busy...'
    if (disable) return `${tooltip} (blocked)`
    return tooltip
  }

  return (
    <div
      className={cx(
        'base',
        'drop-shadow',
        { 'cursor-pointer': !disable && !pending },
        { 'cursor-not-allowed': disable || pending }
      )}
      onClick={(e) => !disable && props.onClick(e)}
    >
      <Popup
        trigger={() => (
          <div className="relative">
            <img
              className={cx({ disable: disable && !pending, pending })}
              src={iconSrc}
              width={size}
              height={size}
              alt={tooltip}
            />
            {disable && !pending && (
              <img
                src="/icon/block.svg"
                className="absolute top-0 right-0"
                width={size / 3}
                height={size / 3}
                alt="disabled"
              />
            )}
            {pending && (
              <img
                src="/icon/loading.anim.svg"
                className="absolute top-0"
                width={size}
                height={size}
                alt="pending"
              />
            )}
          </div>
        )}
        on={['hover']}
      >
        <span>{getTooltip()}</span>
      </Popup>
      <style jsx>{`
        .base {
          width: fit-content;
        }

        .drop-shadow {
          filter: drop-shadow(0px 0px 3px darkgray);
          transition: filter 250ms ease-in-out;
        }

        .drop-shadow:hover {
          filter: drop-shadow(0px 0px 3px darkgray) brightness(1.1);
        }

        .disable,
        .pending {
          filter: saturate(0.25) contrast(0.75) opacity(0.5);
        }
      `}</style>
    </div>
  )
}
