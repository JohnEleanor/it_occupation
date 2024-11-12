import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

function Logout({setLogin}) {
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.removeItem("userInfo")
        localStorage.removeItem("isLogin")
        navigate("/login")
        setLogin(false)
        toast.success("ออกจากระบบสำเร็จ")
    }, [])

    return (
        <>
        
        </>
    )
}

export default Logout