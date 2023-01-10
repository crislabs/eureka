import { getDocBySlug } from "@/lib/docs";
import markdownToHtml from "@/lib/markdown";
import { Form } from "@/ui/Form";
import fs from 'fs'
import path from 'path'
import { use } from "react";
export default function Page() {
  const files = fs.readdirSync(path.join('posts'))
  console.log('files', files)
  // const article = fs.readFileSync(
  //   path.join('posts', files[1]),
  //   'utf-8'
  // )
  const doc = getDocBySlug('exponentes');
  // console.log('doc', doc)
  // const content = use(markdownToHtml(doc.content || ''));
  // console.log('content', content)
  return (
    <h1>Hola Mundo</h1>
  );
}
