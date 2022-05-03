import './ChartBar.css';

function ChartBar(props){

    let barFillHeight = '0%';
    
    if(props.max > 0)
        barFillHeight = Math.round((props.value/props.max) * 100) + '%';

    return(
        <div className='bar-container'>
            <div className='bar-inner'>
                <div className='bar-fill' style = {{height: barFillHeight}}>

                </div>
            </div>
            <div className='bar-label'>
                {props.label}
            </div>
        </div>
    );
}

export default ChartBar;