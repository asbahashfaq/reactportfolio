import '../styles/nav.scss';
function NavigationPanel (props){

    const generateFocus = e => {
        // document.querySelector('.navBlock').focus();
        
      }

    return (
        <div className="navBlock">
            {/* Absolutely positioned arrow buttons or in fixed css grid*/} 
            <ul>
                <li><span className="tl" status={props.buttons.directions.tl.toString()}></span></li>
                <li><span className="t" status={props.buttons.directions.t.toString()}></span></li>
                <li><span className="tr" status={props.buttons.directions.tr.toString()}></span></li>
                <li><span className="ml" status={props.buttons.directions.ml.toString()}></span></li>
                <li><span className="m" status={props.buttons.directions.m.toString()}></span></li>
                <li><span className="mr" status={props.buttons.directions.mr.toString()}></span></li>
                <li><span className="bl" status={props.buttons.directions.bl.toString()}></span></li>
                <li><span className="b" status={props.buttons.directions.b.toString()}></span></li>
                <li><span className="br" status={props.buttons.directions.br.toString()}></span></li>
            </ul>
            {generateFocus()}
        </div>
    )
}

export default NavigationPanel;