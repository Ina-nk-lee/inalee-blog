'use client'

import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import CustomImage from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import Mermaid from './Mermaid'

export const components: MDXComponents = {
  img: CustomImage,
  Image: CustomImage,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  Mermaid,
}
