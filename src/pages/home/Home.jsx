import * as img from '@/assets/Images/images.js'
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <img src={img.logo2} alt="" className='w-80' />
      <h1>welcome to our app </h1>
    </div>
  )
}
