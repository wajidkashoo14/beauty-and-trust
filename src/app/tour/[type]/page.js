"use client"
import data from '../../components/Data/tourCardData'
import { useParams } from 'next/navigation'

export default function Page() {
    const destination = useParams()?.query

  return (
    <div>tour page</div>
  )
}
