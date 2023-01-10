import { Form } from "@/ui/Form";
import fs from 'fs'
import path from 'path'
export default function Page() {
  const files = fs.readdirSync(path.join('posts'))
  const article = fs.readFileSync(
    path.join('posts', files[1]),
    'utf-8'
  )
  return (
    <Form article={article}/>
  );
}
