import Image from "next/image";
import Link from "next/link";
import { getLangs } from "../langs";

export default async function About({params}){
  const dict = await getLangs(params.lang);

    const photo = 
    "https://www.guillenphoto.com/data/blog/2016/001-chronique-pourquoi-faire-de-la-photo-I/images/amar-guillen-photographiing-death-valley.jpg";



    return(
        <main className="p-5 mt-2 bg-gray-50 dark:bg-gray-800 shadow-lg dark:shadow-dark rounded">
            <div>
               <div className="text-gray-300 text-center mb-5">
                 <h1 className="text-lg"> {dict["about"].fullname} </h1>
                 <h2> {dict["about"].info} </h2>
               </div>
               <Link href={`/about/photo`}>
                 <Image alt=""
                        src={photo}
                        height={400}
                        width={400}
                        className="mx-auto rounded object-cover aspect-square"
                 />
               </Link>
            </div>
        </main>
    )
}