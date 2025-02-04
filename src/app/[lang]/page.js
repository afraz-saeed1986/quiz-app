import Link from "next/link";
import { getLangs } from "./langs";

export default async function Home({params}) {
const dict = await getLangs(params.lang);
    return (
        <main>
            <div className="container">
                <h1 className="text-3xl font-bold underline">
                    {dict["main"].appName}
                </h1>
                <Link href="/quiz">
                    <button> 
                        {dict["main"].appStartBtn}
                    </button>
                </Link>
            </div>
        </main>
    )
}