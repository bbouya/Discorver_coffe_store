import { useRouter } from "next/router";
const NextJs = () => {
    const router = useRouter();
    console.log(router.query.dynamic)
    return (
    <div>
        Welcome to next.js with Ankita {router.query.dynamic}
    </div>)
}

export default NextJs;