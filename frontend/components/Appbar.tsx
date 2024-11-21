import { LinkButton } from "./buttons/LinkButton"
import { useRouter } from "next/router"
import { PrimaryButton } from "./buttons/PrimaryButton";
export const Appbar=()=>{
    const router=useRouter();
    return <div className="flex border-b justify-between">        
        <div>
            Bashier
        </div>
        <div>
            <LinkButton onClick={()=>{}}>Contact Sales</LinkButton>
            <LinkButton onClick={()=>{router.push('/login')}}>Login</LinkButton>
            <PrimaryButton onClick={()=>{
                router.push('signup')
            }}>Signup</PrimaryButton>
        </div>
    </div>
}