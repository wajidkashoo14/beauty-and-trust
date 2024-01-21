import React from 'react'

export default function OurServicesCard({icon, heading, description}) {
  return (
    <div class="w-1/4 h-48 border-solid border-8 p-4 border-[#F4F4F4] flex items-start gap-6 justify-center ease-linear duration-200 hover:shadow-2xl max-[600px]:w-full max-[600px]:mb-3">
        <span class="text-3xl text-[#01B3A7] max-[600px]:text-2xl">{icon}</span>
        <div>
            <h3 class="text-xl text-left mb-4 max-[600px]:text-lg">{heading}</h3>
            <p class="font-light text-left">{description}</p>
        </div>
    </div>
  )
}
