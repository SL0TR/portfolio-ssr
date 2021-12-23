import {renderSimpleIcon, Cloud, renderImg} from 'react-icon-cloud'
import { makeTagsUnique } from 'constants/iconTags'
import useMediaQuery from 'hooks/useMediaQuery'
import { useIconContext } from 'hooks/useIconContext'

const IconCloud = ({tags}) => {
  // this component is rendering everytime the widthis changed
  // you could possibly refractor this hook to only fire when a new breakpoint is reached
  const { xxl, xl, md } = useMediaQuery();
  const iconMap = useIconContext();
  const canvasSize = xxl ? 520 : xl ? 450 : 300;
  const unquie = makeTagsUnique(tags);
  const size = xxl ? 32 : xl ? 24 : 16

  // in the skills, you may want to pass some icons to useState, so this check can be removed
  if(!tags || tags.length === 0) {
    return null
  }

  const renderdAnchorTags = []

  for(const tag of unquie) {

    if(tag.imgUrl){
      renderdAnchorTags.push(
        renderImg({
          aProps: {
            href: tag.url,
            alt: tag.slug,
            rel: "noreferrer",
            target: "_blank",
          },
          imgProps: {
            src: tag.imgUrl,
            width: size,
            height: size,
            href: tag.url,
            rel: "noreferrer",
            target: "_blank"
          },
        })
      )
      continue
    }

    if(!iconMap[tag.slug]) {
      if(process.env.NODE_ENV === 'development') {
        console.error(`icon ${tag} is not defined in the iconMap`)
      }
      continue
    }

    renderdAnchorTags.push(
      renderSimpleIcon({
        icon: iconMap[tag.slug],
        size,
        bgHex: '#fff',
        fallbackHex: '#000',
        minContrastRatio: 1,
      })
    )
  }

  const options = {
    maxSpeed: 0.08,
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
  }

  return <Cloud
    options={options}
    containerProps={{}}
    canvasProps={{
      width: canvasSize,
      height: canvasSize,
    }}
  >
    {renderdAnchorTags}
  </Cloud>

}
export default IconCloud

