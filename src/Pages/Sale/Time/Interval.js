import React from 'react'
import ReactDOM  from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Interval(props) {
    const element = (
        <div>
            <div>Interval</div>
            <div>It is {new Date().toLocaleTimeString()}</div>
        </div>
    )
    root.render(element)

}
function tick(){
    root.render(<Interval date={new Date()}/>)
}
setInterval(tick,1000)

export default Interval