import './styles.css'
import IMAGE from './kuplinov.png'
export const App = () => {
  return (
    <>
      <h1>
        Анекдот №3052: С утра сантехник Петр Васильевич сделал открытие века.
        Через час он открыл второе веко… - {process.env.NODE_ENV}{' '}
        {process.env.name}
      </h1>
      <img src={IMAGE} alt="kuplinov" width={300} height={200} />
    </>
  )
}
