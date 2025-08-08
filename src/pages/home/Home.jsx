import * as img from '@/assets/Images/images.js'
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={img.logo2} alt="" className='w-80' />
      <p>home </p>
    </div>
  )
}
