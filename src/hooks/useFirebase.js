import { useEffect, useState } from "react"

const useFirebase = () => {

    const [user, setUser] = useState({})

    useEffect(() => {

    }, [])

    const singWithGoogle = () => {
        console.log('sing in google')
    }
    return {user, setUser, singWithGoogle}
}

export default useFirebase ;