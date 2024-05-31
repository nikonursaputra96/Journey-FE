import { useState } from "react";
import { SET_LOGIN } from "../store/slice/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store";
import { loginApi } from "../lib/call/user";
import { getProfile } from "../lib/call/profile";



const useLogin = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [formInput, setFormInput] = useState<{
        email: string;
        password: string
    }>({
        email: "",
        password: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await loginApi(formInput)


            const token = res.data.data
            const resProfile = await getProfile(token)
            localStorage.setItem("token", token)

            dispatch(SET_LOGIN({ user: resProfile.data.data, token }))

            navigate('/')

        } catch (error) {
            console.log(error)
        }
    }

    return {
        handleChange,
        handleLogin,
        formInput
    }


}

export default useLogin