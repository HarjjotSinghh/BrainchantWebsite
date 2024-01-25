import { type ClassValue, clsx } from "clsx"
import sanitizeHtml from "sanitize-html"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function htmlSanitize(html: string) {
  return sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.filter(elem => elem !== "br").concat([ 'img', 'a' ]),
    allowedAttributes: {
      a: [ 'href', 'name', 'target' ],
      img: [ 'src', 'srcset', 'alt', 'title', 'width', 'height', 'loading' ],
      '*': ['src']
    },
    allowedSchemes: [ 'data', 'http', 'https' ]
  })
}