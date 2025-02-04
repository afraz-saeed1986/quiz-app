import { getLangs } from "../langs";
import Quiz from "./page";

export default async function Layout({params}){
    const dict = await getLangs(params.lang);
    return (
        <div className="container">
            <Quiz dict={dict} lang={params.lang} />
        </div>
    )
}