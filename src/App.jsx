import './App.css'
import AutomaticCarousel from './components/automaticCarousel/AutomaticCarousel'
import ManualCarousel from './components/manualCarousel/ManualCarousel'

function App() {


  return (
    <div className='w-full bg-slate-700  p-6 flex flex-col gap-8 items-center justify-center'>

      <ManualCarousel />
      <AutomaticCarousel />
    </div>
  )
}

export default App
