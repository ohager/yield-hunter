import React, { useState } from 'react'
import { Modal } from '../modal'
import { RadioButton } from '../radioButton'
import { PassphrasePayment } from './PassphrasePayment'
import { BurstValue } from '@burstjs/util'
import { MoneyItem } from '../moneyItem'
import { DeeplinkPayment } from './DeeplinkPayment'
import { QrCodePayment } from './QrCodePayment'

const PaymentMethod = {
  QrCode: 'qrcode',
  DeepLink: 'deeplink',
  Passphrase: 'passphrase',
}

interface PaymentProps {
  method: string
  recipientId: string
  value: BurstValue
  onFinish: (success: boolean) => void
}

const PaymentComponent: React.FC<PaymentProps> = (props) => {
  const { method, ...rest } = props
  switch (method) {
    case PaymentMethod.Passphrase:
      return <PassphrasePayment {...rest} />
    case PaymentMethod.DeepLink:
      return <DeeplinkPayment {...rest} />
    case PaymentMethod.QrCode:
      return <QrCodePayment {...rest} />
  }
}

interface Props {
  value: BurstValue
  recipientId: string
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

  function onPaymentFinished(success) {
    if (success) {
      onClose()
    }
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
            Scan QR-Code with{' '}
            <a href="http://phoenix-wallet.rocks/" target="_blank">
              Phoenix Mobile Wallet
            </a>
          </RadioButton>
          <RadioButton
            value={PaymentMethod.DeepLink}
            checked={selected === PaymentMethod.DeepLink}
            onChange={onSelectedPayment}
          >
            Pay via Link with{' '}
            <a href="http://phoenix-wallet.rocks/" target="_blank">
              Phoenix Desktop Wallet
            </a>
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
          <PaymentComponent
            method={selected}
            onFinish={onPaymentFinished}
            {...props}
          />
        </div>
      </fieldset>
    </Modal>
  )
}
