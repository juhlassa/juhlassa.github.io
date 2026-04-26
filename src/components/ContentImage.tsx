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

export const LeftContentImage = ({
  url,
  alt,
  loading,
  styles
}: ContentImageProps) => {
  const modifiedStyles = {
    ...styles,
    float: 'left',
    marginLeft: styles?.marginLeft ?? '30px',
    marginRight: styles?.marginRight ?? '30px',
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
    marginLeft: styles?.marginLeft ?? '30px',
    marginRight: styles?.marginRight ?? '30px',
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
