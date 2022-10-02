import Image, { ImageProps } from "next/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { imageBuilder } from "../../lib/sanity";

const BASE_URL = "https://cdn.sanity.io/images/";

interface SanityImageProps extends Omit<ImageProps, "src"> {
  src: SanityImageSource;
  quality?: number;
  blur?: number;
}

export default function SanityImageLoader({
  quality = 80,
  blur = 0,
  src,
  alt,
  ...props
}: SanityImageProps) {
  const buildURLSanity = (width: number, blur: number): string => {
    const url =
      imageBuilder
        .image(src)
        // .width(width)
        // .height(Number(props.height) || 256)
        .auto("format")
        .quality(quality)
        .fit("clip")
        .url() ?? "";
    if (!blur) {
      return url;
    }
    return `${url}&blur=${blur}`;
  };

  return (
    <Image
      {...props}
      loader={({ width: srcWidth }) => buildURLSanity(srcWidth, blur)}
      src={
        imageBuilder.image(src).url()?.toString().replace(BASE_URL, "") ?? ""
      }
      alt={alt}
    />
  );
}
