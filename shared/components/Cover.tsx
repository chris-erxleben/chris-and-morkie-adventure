import { FC } from 'react'
import Image from 'next/image'
import cover from 'public/cover.jpg'

const Cover: FC = () => (
  <>
    <div className="absolute left-0 right-0 top-0 bottom-3/4 flex justify-center items-end">
      <h1 className="relative text-8xl text-primary-300">Karla & Chris</h1>
    </div>
    <Image className="h-screen object-cover" src={cover} alt="TODO" />
  </>
)

export default Cover
