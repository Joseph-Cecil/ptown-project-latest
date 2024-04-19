import CodePreview from '@/components/CodePreview';
import Details from '@/components/Details';
import Scene from '@/components/Scene';



export default function StaticDelivery() {
  return (
    <>
      <Scene />
      <div className="main">
        <div className="code">
          <div className="code-container">
            <CodePreview />
          </div>
        </div>
        <Details />
      </div>
    </>
  )
}
