import { memo } from "react"

const CounterButton = ({ count, setCount }) => {
	console.log('Counter')
	const handleClick = () => {
		setCount(val => ++val)
	}
	return (
		<div>
			<p>{count}</p>
			<button onClick={handleClick}>+1</button>
		</div>
	)
}
export default memo(CounterButton)
