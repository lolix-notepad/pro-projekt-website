interface IImageLoader {
  src: string
}

const imageLoader = ({ src }: IImageLoader) => {
    return `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcolorlib.com%2Fwp%2Fwp-content%2Fuploads%2Fsites%2F2%2F404-error-template-16.png&f=1&nofb=1`
}

export default imageLoader
