import { FC, useEffect, useState } from 'react'
import { WEDDING_DATE } from '../utils/constants'

interface StatProps {
  label: string
  value: number
}

const getTimeRemaining = () => {
  const weddingDay = new Date(WEDDING_DATE).getTime()
  const now = new Date().getTime()

  let delta = Math.abs(weddingDay - now) / 1000

  const days = Math.floor(delta / 86400)
  delta -= days * 86400
  const hours = Math.floor((delta / 3600) % 24)
  delta -= hours * 3600
  const minutes = Math.floor((delta / 60) % 60)
  delta -= minutes * 60
  const seconds = Math.floor(delta % 60)

  return { days, hours, minutes, seconds }
}

const Stat: FC<StatProps> = ({ label, value }) => (
  <div className="flex flex-col items-center justify-center">
    <span className="text-primary-400">{value}</span>
    <span>{label}</span>
  </div>
)

const CountDown: FC = () => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const update = setInterval(() => {
      const res = getTimeRemaining()
      setDays(res.days)
      setHours(res.hours)
      setMinutes(res.minutes)
      setSeconds(res.seconds)
    }, 1000)

    return () => {
      clearInterval(update)
    }
  }, [])

  return (
    <div className="p-10 bg-slate-200 flex flex-col items-center justify-center space-y-8 py-20">
      <h2>{WEDDING_DATE}</h2>
      <h3>Colorado Springs, CO</h3>
      <div className="flex flex-row space-x-20">
        <Stat value={days} label="Days" />
        <Stat value={hours} label="Hours" />
        <Stat value={minutes} label="Minutes" />
        <Stat value={seconds} label="Seconds" />
      </div>
    </div>
  )
}

export default CountDown
