type ContentImageProps = {
  url: string
  alt?: string
  loading?: 'lazy' | 'eager'
  className?: string
}

function humanReadableName(name?: string) {
  return name?.replace(/&shy;/g, '').replace(/&nbsp;/g, ' ')
}

export const LeftContentImage = ({
  url,
  alt,
  loading,
  className
}: ContentImageProps) => {
  return (
    <img
      className={`${className} content-image float-left`}
      src={url}
      alt={humanReadableName(alt) ?? url}
      loading={loading}
    />
  )
}

export const RightContentImage = ({
  url,
  alt,
  loading,
  className
}: ContentImageProps) => {
  return (
    <img
      className={`content-image float-right ${className ?? ''}`}
      src={url}
      alt={humanReadableName(alt) ?? url}
      loading={loading}
    />
  )
}
