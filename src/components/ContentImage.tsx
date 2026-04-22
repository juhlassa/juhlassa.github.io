type ContentImageProps = {
  url: string
  alt?: string
  loading?: 'lazy' | 'eager'
  styles?: {
    maxWidth?: string
    marginLeft?: string
    marginRight?: string
    float?: string
  }
}

const defaultStyles = {
  borderRadius: '10px',
  margin: '30px',
  width: 'calc(100% - 60px)'
}

function humanReadableName(name?: string) {
  return name?.replace(/&shy;/g, '').replace(/&nbsp;/g, ' ')
}

export const ContentImage = ({
  url,
  alt,
  loading,
  styles
}: ContentImageProps) => {
  return (
    <img
      src={url}
      alt={humanReadableName(alt) ?? url}
      loading={loading}
      // @ts-expect-error compiler confused about float: string
      style={{ ...defaultStyles, ...styles }}
    />
  )
}

export const LeftContentImage = ({
  url,
  alt,
  loading,
  styles
}: ContentImageProps) => {
  const modifiedStyles = {
    ...styles,
    float: 'left',
    marginLeft: styles?.marginLeft ?? '-200px',
    maxWidth: styles?.maxWidth ?? '360px'
  }

  return (
    <img
      src={url}
      alt={humanReadableName(alt) ?? url}
      loading={loading}
      // @ts-expect-error style cannot contain float: string
      style={{ ...defaultStyles, ...modifiedStyles }}
    />
  )
}

export const RightContentImage = ({
  url,
  alt,
  loading,
  styles
}: ContentImageProps) => {
  const modifiedStyles = {
    ...styles,
    float: 'right',
    marginRight: styles?.marginRight ?? '-200px',
    maxWidth: styles?.maxWidth ?? '360px'
  }
  return (
    <img
      src={url}
      alt={humanReadableName(alt) ?? url}
      loading={loading}
      // @ts-expect-error style cannot contain float: string
      style={{ ...defaultStyles, ...modifiedStyles }}
    />
  )
}
