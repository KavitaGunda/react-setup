import './Styles.css'
import IMAGE from './react.png'
import SVG from './svgfile.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  const pro = 'Gunda'
  return (
    <>
      <h1>
        {' '}
        React Setup - {pro} {process.env.NODE_ENV} {process.env.name}{' '}
      </h1>
      <img src={IMAGE} alt="React Logo" width={300} height={200} />
      <img src={SVG} alt="React SVG" width={300} height={200} />
      <ClickCounter />
    </>
  )
}
