interface HeadProps {
  title: string
  description?: string
}

export function Head({title, description = ''}: HeadProps) {
  document.title = `Food commerce | ${title}`
  document.querySelector('[name=description]')?.setAttribute('content', description)

  return null
}
