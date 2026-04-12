type ContentImageProps = {
  url: string
  maxWidth?: string
  marginLeft?: string
  marginRight?: string
  float?: string
  loading?: 'lazy' | 'eager'
}

const defaultStyles = {
  borderRadius: '10px',
  margin: '30px',
  width: 'calc(100% - 60px)'
}

export const ContentImage = ({
  url,
  maxWidth,
  float,
  loading
}: ContentImageProps) => {
  //const src = new URL(url, import.meta.url).href
  const src = url //new URL(url).href
  const styles = { maxWidth, float, loading }
  // @ts-expect-error compiler confused about float: string
  return <img src={src} alt={src} style={{ ...defaultStyles, ...styles }} />
}

export const LeftContentImage = ({
  url,
  maxWidth,
  marginLeft
}: ContentImageProps) => {
  const src = url
  const styles = {
    float: 'left',
    marginLeft: marginLeft ?? '-200px',
    maxWidth: maxWidth ?? '360px'
  }

  // @ts-expect-error style cannot contain float: string
  return <img src={src} alt={src} style={{ ...defaultStyles, ...styles }} />
}

export const RightContentImage = ({
  url,
  maxWidth,
  marginRight
}: ContentImageProps) => {
  const src = url
  const styles = {
    float: 'right',
    marginRight: marginRight ?? '-200px',
    maxWidth: maxWidth ?? '360px'
  }
  // @ts-expect-error style cannot contain float: string
  return <img src={src} alt={src} style={{ ...defaultStyles, ...styles }} />
}
