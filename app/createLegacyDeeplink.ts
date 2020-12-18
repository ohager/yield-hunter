import { BurstValue, convertNumericIdToAddress } from '@burstjs/util'

const redirectable = (targetUrl) =>
  new URL(
    process.env.NEXT_PUBLIC_REDIRECT_SERVICE_URL + encodeURIComponent(targetUrl)
  )

interface Props {
  recipientId: string
  value: BurstValue
  fee: BurstValue
  message?: string
}

export function mountLegacyDeepLink(props: Props): URL {
  const { fee, message, recipientId, value } = props
  const amountPlanck = value.getPlanck()
  const feePlanck = fee.getPlanck()
  const address = convertNumericIdToAddress(recipientId)
  const link = `burst://requestBurst?receiver=${address}&amountNQT=${amountPlanck}&feeNQT=${feePlanck}&immutable=false`
  return redirectable(message ? `${link}&message=${message}` : link)
}
