import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerApi } from "../lib/call/user";


const useRegister = () => {

    const navigate = useNavigate()

    const [formRegister, setFormRegister] = useState<{
        fullname: string;
        email: string;
        password: string;
        phone: string;
    }>({
        fullname: "",
        email: "",
        password: "",
        phone: ""
    })

    const handleChangeRegister = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormRegister({
            ...formRegister,
            [e.target.name]: e.target.value
        })
    }

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await registerApi(formRegister)
            console.log(res)
            navigate('/login')

        } catch (error) {
            console.log(error)
        }
    }

    return {
        handleRegister, handleChangeRegister, formRegister
    }
}

export default useRegister