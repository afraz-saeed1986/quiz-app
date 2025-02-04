export function GET(request){
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("name");

    return new Response(`Query Is: ${query}`, {status : 200});
}