import React, { useContext, useState } from 'react'
import { Modal, ModalProps } from '../modal'
import { Input } from '../input'
import { RadioButton } from '../radioButton'
import { PassphrasePayment } from './PassphrasePayment'
import { BurstValue } from '@burstjs/util'
import { MoneyItem } from '../moneyItem'

const PaymentMethod = {
  QrCode: 'qrcode',
  DeepLink: 'deeplink',
  Passphrase: 'passphrase',
}

interface PaymentProps {
  method: string
}

const PaymentComponent: React.FC<PaymentProps> = ({ method }) => {
  switch (method) {
    case PaymentMethod.Passphrase:
      return <PassphrasePayment />
    case PaymentMethod.DeepLink:
    case PaymentMethod.QrCode:
      return <h2>To Do</h2>
  }
}

interface Props {
  value: BurstValue
  title?: string
  imageSrc?: string
  onClose: () => void
}

export const PaymentModal: React.FC<Props> = (props) => {
  const { value, title = 'Make a payment', imageSrc = '', onClose } = props
  const [selected, setSelected] = useState(PaymentMethod.QrCode)

  function onSelectedPayment(e) {
    setSelected(e.target.value)
  }

  return (
    <Modal title={title} imageSrc={imageSrc} onClose={onClose}>
      <div className="mb-2 flex flex-row">
        <span className="pr-1">You are about to pay</span>
        <MoneyItem value={value} />
      </div>
      <fieldset>
        <div>
          <p className="text-sm">Choose your payment method</p>
        </div>
        <div className="mt-4 space-y-4">
          <RadioButton
            value={PaymentMethod.QrCode}
            checked={selected === PaymentMethod.QrCode}
            onChange={onSelectedPayment}
          >
            Scan QR-Code with Phoenix Mobile Wallet
          </RadioButton>
          <RadioButton
            value={PaymentMethod.DeepLink}
            checked={selected === PaymentMethod.DeepLink}
            onChange={onSelectedPayment}
          >
            Pay via Link with Phoenix Desktop Wallet
          </RadioButton>
          <RadioButton
            value={PaymentMethod.Passphrase}
            checked={selected === PaymentMethod.Passphrase}
            onChange={onSelectedPayment}
          >
            Use secret passphrase
          </RadioButton>
        </div>
        <div className="mt-4">
          <PaymentComponent method={selected} />
        </div>
      </fieldset>
    </Modal>
  )
}
