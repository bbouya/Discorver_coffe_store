import {useRouter} from  'next/router'
import Link from "next/link"

const CoffeeStore = () => {
    const router = useRouter();
    console.log('router', router)
    return( 
    <div>
        Coffe Store opage rah 5dama
        <Link href='/' >
            <a>Back to home</a>
        </Link>

    </div>
    );

};




export default CoffeeStore;