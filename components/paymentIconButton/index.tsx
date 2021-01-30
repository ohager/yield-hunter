import { IconButton } from '../iconButton'
import { PaymentModal } from '../paymentModal'
import { BurstValue } from '@burstjs/util'
import Popup from 'reactjs-popup'
import React from 'react'

interface Props {
  tooltip: string
  paymentValue: BurstValue
  recipientId: string
  size?: number
}

export const PaymentIconButton: React.FC<Props> = ({
  recipientId,
  paymentValue,
  tooltip,
  size = 48,
}) => (
  <Popup
    trigger={() => (
      <IconButton
        iconSrc="/icon/sow.svg"
        tooltip={tooltip}
        size={size}
        onClick={() => {}}
      />
    )}
    modal
  >
    {(close) => (
      <PaymentModal
        value={paymentValue}
        recipientId={recipientId}
        title={tooltip}
        imageSrc="/img/farmland.small.png"
        onClose={close}
      />
    )}
  </Popup>
)
