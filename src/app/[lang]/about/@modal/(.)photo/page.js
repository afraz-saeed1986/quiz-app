import Frame from "@/src/components/modal/Frame";
import Modal from "@/src/components/modal/Modal";

export default function PhotoModal() {
    const photo = 
    "https://www.guillenphoto.com/data/blog/2016/001-chronique-pourquoi-faire-de-la-photo-I/images/amar-guillen-photographiing-death-valley.jpg";

    return (
      <Modal>
        <Frame photo={photo} />
      </Modal>
    )
}