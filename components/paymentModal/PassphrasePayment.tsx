import React from 'react'
import { PassphraseInput } from '../passphraseInput'

export const PassphrasePayment: React.FC = () => {
  return (
    <>
      <form>
        <PassphraseInput />
      </form>
      <div className="text-gray-400 text-xs p-0.5">
        Keep in mind, that your passphrase should be kept secret. Transmitting
        it over the internet does not guarantee secrecy at all. If possible,
        prefer the other payment methods over this one!
      </div>
    </>
  )
}
