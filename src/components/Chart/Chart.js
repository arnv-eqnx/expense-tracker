import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {
    const DPvalues = props.datapoints.map(x => x.value);
    const maxval = Math.max(...DPvalues);

    return (
        <div className="chart-container">
            {props.datapoints.map(bar => <ChartBar key={bar.id} value={bar.value} max={maxval} label={bar.label} />)}
        </div>
    );
}

export default Chart;