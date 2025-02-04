import Frame from "@/src/components/modal/Frame";

export default function PhotoPage() {
    const photo = 
    "https://www.guillenphoto.com/data/blog/2016/001-chronique-pourquoi-faire-de-la-photo-I/images/amar-guillen-photographiing-death-valley.jpg";

    return (
        <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto border border-gray-700">
                <Frame photo={photo} />
            </div>
        </div>
    )
}