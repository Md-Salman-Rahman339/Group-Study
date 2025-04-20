import React from 'react'
import BannerLottie from '../../assets/lottie/group study.json'
import Lottie from 'lottie-react'
const Banner = () => {
  return (
    <div className='rounded-4xl p-6 bg-amber-900'>
      <Lottie animationData={BannerLottie}></Lottie>
    </div>
  )
}

export default Banner
