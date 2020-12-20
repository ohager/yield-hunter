import React, { useContext, useEffect, useRef } from 'react'
import { IconButton } from '../iconButton'
import { AppContext } from '../../app/appContext'
import { BurstValue } from '@burstjs/util'
import { PaymentComponentProps } from './paymentComponentProps'
import { mountLegacyDeepLink } from '../../app/createLegacyDeeplink'
import useSWR from 'swr'
import qrcode from 'qrcode'
import Popup from 'reactjs-popup'
import cx from 'classnames'

export const QrCodePayment: React.FC<PaymentComponentProps> = (props) => {
  const { BurstApi } = useContext(AppContext)
  const canvasRef = useRef()
  const { data, error } = useSWR(
    'burst/getSuggestedFees',
    BurstApi.network.getSuggestedFees
  )

  const { value, recipientId, onFinish } = props

  const isLoading = !data && !error

  useEffect(() => {
    if (!canvasRef.current) return
    qrcode.toCanvas(canvasRef.current, getLink(), {
      width: 256,
    })
  }, [data])

  const getLink = (): string => {
    return data
      ? mountLegacyDeepLink({
          value,
          recipientId,
          fee: BurstValue.fromPlanck(data.standard.toString(10)),
        }).toString()
      : "Hey, I'm still loading. You shouldn't be able to scan this text. Respect!"
  }

  return (
    <>
      <form>
        <div className="mt-1 mb-1 flex flex-row justify-center">
          <Popup
            trigger={() => (
              <a href={getLink()} target="_blank">
                <canvas
                  className={cx({ 'loading-code': isLoading })}
                  ref={canvasRef}
                />
              </a>
            )}
            on={['hover']}
          >
            Click to open payment link
          </Popup>
        </div>
        <div className="text-gray-400 text-xs p-0.5">
          To be able to use the code you need the{' '}
          <a href="http://phoenix-wallet.rocks/">Phoenix Wallet</a> to be
          installed on your Android or iOS mobile phone. This payment method is
          more secure as you won't need to send your secret passphrase over the
          internet. The wallet signs the transactions locally.
        </div>
      </form>
      <style jsx>{`
        canvas {
          filter: blur(0px);
          transition: filter 0.5s ease-out;
        }

        canvas.loading-code {
          filter: blur(4px);
        }
      `}</style>
    </>
  )
}
