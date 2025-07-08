import { AlertCircle, Clock } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface LimitedTimeOfferProps {
  offerText: string
  endDate: string
}

export default function LimitedTimeOffer({ offerText, endDate }: LimitedTimeOfferProps) {
  const remainingTime = new Date(endDate).getTime() - Date.now()
  const daysLeft = Math.ceil(remainingTime / (1000 * 60 * 60 * 24))

  return (
    <Alert className="bg-amber-100 border-amber-300 text-amber-800 my-7 rounded-none">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle className="text-lg font-bold mb-2">{offerText}</AlertTitle>
      <AlertDescription className="flex items-center">
        <Clock className="h-4 w-4 mr-2" />
        Hurry, offer ends in {daysLeft} days!
      </AlertDescription>
    </Alert>
  )
}