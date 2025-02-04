import {redirect} from "next/navigation";

const fullname ="Saeed Afraz";

export async function GET(){
    redirect(`http://localhost:3000/api/username/${fullname}`);
}