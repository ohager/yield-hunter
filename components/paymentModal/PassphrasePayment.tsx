import React, { useContext, useState } from 'react'
import { PassphraseInput } from '../passphraseInput'
import { generateMasterKeys, Keys } from '@burstjs/crypto'
import { IconButton } from '../iconButton'
import { AppContext } from '../../app/appContext'
import { BurstValue } from '@burstjs/util'

interface Props {
  recipientId: string
  value: BurstValue
}

export const PassphrasePayment: React.FC<Props> = (props) => {
  const { BurstApi } = useContext(AppContext)
  const [keys, setKeys] = useState<Keys>(null)
  const [isPending, setPending] = useState(false)

  const { value, recipientId } = props

  const isDisabled = !keys

  const onButtonClick = async () => {
    if (isDisabled || isPending) return
    try {
      setPending(true)
      const { standard } = await BurstApi.network.getSuggestedFees()
      // await BurstApi.transaction.sendAmountToSingleRecipient({
      //   senderPrivateKey: keys.signPrivateKey,
      //   senderPublicKey: keys.publicKey,
      //   feePlanck: standard.toString(10),
      //   amountPlanck: value.getPlanck(),
      //   recipientId
      // })
    } catch (e) {
      console.error(e)
      // TODO: messaging
    } finally {
      setPending(false)
    }
  }

  const onPassphraseChange = ({ passphrase, isValid }) => {
    setKeys(isValid ? generateMasterKeys(passphrase) : null)
  }

  return (
    <>
      <form>
        <PassphraseInput onPassphraseChange={onPassphraseChange} />
        <div className="text-gray-400 text-xs p-0.5">
          Keep in mind, that your passphrase should be kept secret. Transmitting
          it over the internet does not guarantee secrecy at all. If possible,
          prefer the other payment methods over this one!
        </div>
        <div className="mt-1 mb-1 flex flex-row justify-center">
          <IconButton
            onClick={onButtonClick}
            iconSrc="./icon/pay-per-click.svg"
            tooltip="Confirm Payment"
            disable={isDisabled}
            pending={isPending}
            size={48}
          />
        </div>
      </form>
    </>
  )
}
