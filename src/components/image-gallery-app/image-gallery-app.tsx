import Unauthorized from "../../auth/login/unauthorized";
import Lesson from "../../common-components/lesson/lesson";
import cx from "classnames";
import Style from "./image-gallery-app.module.scss";

const text: string[] = [
  "An image gallery is a set of images with corresponding remove buttons. This is the HTML code for a gallery with two images.",
  "Implement the ImageGallery component that accepts a links prop and renders the gallery described above so that the first itm in the links prop is the src attribute of the first image in the gallery.",
  "It should also implement the following logic:",
  "- When the button is clicked, the image that is in the same div as the button should be removed from the gallery.",
];

const links = [
  "https://tinyurl.com/im-gal-1st",
  "https://tinyurl.com/im-gal-2nd",
];

const ImageGallery = ({ links }: { links: string[] }) => {
  const handleOnCLick = (e) => {
    e.target.parentElement.remove();
  };
  return (
    <div id="imageGaleryId">
      {links.map((link, index) => {
        return (
          <div id={index.toString()} className="image">
            <img src={link}></img>
            <button onClick={handleOnCLick}>X</button>
          </div>
        );
      })}
    </div>
  );
};

function Solution() {
  return (
    <div className={cx(Style.solution)}>
      <ImageGallery links={links} />
    </div>
  );
}

export default function ImageGalleryApp() {
  const token = localStorage.getItem("token");

  return (
    <>
      {token ? (
        <Lesson title="Image Gallery App" text={text}>
          <Solution></Solution>
        </Lesson>
      ) : (
        <Unauthorized />
      )}
    </>
  );
}
