interface IImageLoader {
  src: string
}

const imageLoader = ({ src }: IImageLoader) => {
    return `./${src}`
}

export default imageLoader
