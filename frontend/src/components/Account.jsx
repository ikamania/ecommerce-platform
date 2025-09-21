import './styles/Account.css'
import pfp from '../assets/pfp.jpg'

import { CiLogout } from "react-icons/ci";

import { useAuth } from "../auth/Auth"

const Account = () => {
  const { userData } = useAuth()
  const data = userData()

  return (
    <div className="px-[1rem] w-full h-full flex flex-col gap-[1rem]">
      <h1 className="text-[2rem]">Account</h1>

      <div className="info-box h-[15%] flex items-center">
        <div className="h-full aspect-square rounded-full overflow-hidden flex items-center">
          <img src={pfp} alt="cant load" className=""></img>
        </div>

        <div className="text-[.9rem]">
          <h1>{data.username}</h1>
          <h1>{data.email}</h1>
        </div>
      </div>

      <div className="info-box h-[40%]">

      </div>

      <div className="info-box h-[20%]">

      </div>
    </div >
  )
}

export default Account
