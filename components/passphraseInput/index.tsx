import { Input } from '../input'
import { useContext, useEffect, useState } from 'react'
import useSWR from 'swr'
import { AppContext } from '../../app/appContext'
import { generateMasterKeys, getAccountIdFromPublicKey } from '@burstjs/crypto'
import { BurstValue, convertNumericIdToAddress } from '@burstjs/util'
import { MoneyItem } from '../moneyItem'
import debounce from 'lodash.debounce'
import { Api } from '@burstjs/core'

async function getAccountBalance(
  api: Api,
  accountId: string
): Promise<{ account: string; balance: BurstValue }> {
  let { balanceNQT } = await api.account.getAccountBalance(accountId)
  return {
    account: convertNumericIdToAddress(accountId),
    balance: BurstValue.fromPlanck(balanceNQT),
  }
}

const deferredGetAccountBalance = debounce(getAccountBalance, 500, {
  leading: true,
  trailing: false,
})

interface Props {
  onPassphraseChange: ({
    passphrase,
    isValid,
  }: {
    passphrase: string
    isValid: boolean
  }) => void
}

export const PassphraseInput: React.FC<Props> = (props) => {
  const { BurstApi } = useContext(AppContext)
  const [accountBalance, setAccountBalance] = useState(null)
  const [passphrase, setPassphrase] = useState(null)
  const [isPassphraseVisible, setPassphraseVisibility] = useState(false)

  useEffect(() => {
    async function fetchBalance() {
      try {
        const { publicKey } = generateMasterKeys(passphrase)
        const accountId = getAccountIdFromPublicKey(publicKey)
        const result = await deferredGetAccountBalance(BurstApi, accountId)
        setAccountBalance(result)
        props.onPassphraseChange({ passphrase, isValid: true })
      } catch (e) {
        setAccountBalance(null)
        props.onPassphraseChange({ passphrase, isValid: false })
      }
    }

    fetchBalance()
  }, [passphrase])

  const onPassphraseChange = async ({ target }) => {
    setPassphrase(target.value)
  }

  const togglePassphraseVisibility = () => {
    setPassphraseVisibility(!isPassphraseVisible)
  }

  return (
    <div className="relative">
      <Input
        label="Passphrase"
        placeholder="Enter your passphrase"
        type={isPassphraseVisible ? 'text' : 'password'}
        onChange={onPassphraseChange}
      />
      <div
        className="absolute viewPassphrase cursor-pointer"
        onClick={togglePassphraseVisibility}
      >
        {isPassphraseVisible ? '🙉' : '🙈'}
      </div>
      <div className="ml-0.5 text-xs">
        {accountBalance ? (
          <div className="flex flex-row justify-between items-center">
            <small>{accountBalance.account}</small>
            <MoneyItem value={accountBalance.balance} />
          </div>
        ) : (
          <small className="text-red-400">
            {passphrase ? 'Invalid Passphrase' : 'Passphrase required'}
          </small>
        )}
      </div>
      <style jsx>{`
        .viewPassphrase {
          top: 29px;
          right: 12px;
        }
      `}</style>
    </div>
  )
}
