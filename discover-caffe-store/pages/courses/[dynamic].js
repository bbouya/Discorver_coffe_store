import { useRouter } from "next/router";
import head from "next/head";
const NextJs = () => {
    const router = useRouter();
    console.log(router.query.dynamic)
    return (
    <div>
        Welcome to next.js with Ankita {router.query.dynamic}
        <head><title>{router.query.dynamic}</title> </head>
    </div>)
}

export default NextJs;