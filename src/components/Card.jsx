import { FaEnvelope } from 'react-icons/fa6'
import { IoCall, IoCallSharp } from 'react-icons/io5'
import { AiOutlineGlobal } from 'react-icons/ai'
import { CiHeart } from 'react-icons/ci'
import { HiMiniPencil } from 'react-icons/hi2'
import { ImBin } from 'react-icons/im'
import { FcLike } from 'react-icons/fc'
import { useState } from 'react'

const Card = (value) => {
  const { email, id, imgurl, name, phone, url } = value.value
  const { handleShowModal } = value
  const { handleId } = value

  const [isred, setIsred] = useState(false)

  const handleRed = () => {
    setIsred(!isred) // this is short but same

    // // this is ling but same
    // if (isred === true) {
    //     setIsred(false);
    // }
    // else if (isred === false) {
    //     setIsred(true);
    // }
  }

  return (
    <div className="border-2 border-black h-[354px] w-[300px]">
      <img className="w-full h-1/2" src={imgurl} alt="" />

      <div className="p-4">
        <p className="flex justify-center items-center">{name}</p>
        <div className="flex items-center gap-4 ">
          <FaEnvelope />
          <p>{email}</p>
        </div>

        <div className="flex items-center gap-4">
          <IoCallSharp />
          <p>{phone}</p>
        </div>

        <div className="flex items-center gap-4">
          <AiOutlineGlobal />
          <p>{url}</p>
        </div>
      </div>

      <div className="flex bg-[#add9e0da] justify-between">
        <div
          onClick={handleRed}
          className="border-r-2 p-4 w-1/3 flex justify-center cursor-pointer"
        >
          {isred ? <FcLike /> : <CiHeart />}
        </div>

        <div
          onClick={() => {
            handleShowModal(true)
            handleId(id)
          }}
          className="border-r-2 p-4 w-1/3 flex justify-center cursor-pointer"
        >
          <HiMiniPencil />
        </div>

        <div className="border-r-2 p-4 w-1/3 flex justify-center cursor-pointer">
          <ImBin />
        </div>
      </div>
    </div>
  )
}

export default Card
