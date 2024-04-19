import { create } from 'zustand'
import { Highlight } from 'prism-react-renderer'
import javascriptCode from '../resources/javascript-code'
import typescriptCode from '../resources/typescript-code'

const useStore = create((set, get) => ({
  lang: 'javascript',
  setLang: (lang) => set(() => ({ lang })),
  getCode: () => (get().lang === 'javascript' ? javascriptCode : typescriptCode),
}))

export default function CodePreview() {
  const { getCode } = useStore()
  const code = getCode()

  return (
    <Highlight code={code} language="tsx" theme={undefined}>
      {({ className, style }) => (
        // define how each line is to be rendered in the code block,
        // position is set to relative so the copy button can align to bottom right
        <pre className={className} style={{ ...style, position: 'relative' }}>
          
          <div className="snippet-container">
            <span>Developed by Joseph Cecil Odoi</span>
            
          </div>
        </pre>
      )}
    </Highlight>
  )
}
