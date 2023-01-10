import { getDocBySlug } from '@/lib/docs';
import { Form } from '@/ui/Form'
import React from 'react'

interface Props {
  params: {slug: string}
}

export default function Page(props: Props) {
  const { params } = props

  const doc = getDocBySlug(params.slug);
  return (
    <Form article={doc.content}/>

  )
}
