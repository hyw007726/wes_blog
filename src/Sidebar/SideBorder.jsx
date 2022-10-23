import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function SideBorder(props){
    function handleClick(){
        props.clp.setCollapsed(!props.clp.collapsed)
    }
    return (
        <div className="SideBorder" onClick={handleClick} style={{"cursor":(props.clp.collapsed)?"e-resize":"w-resize"}} >
            {props.clp.collapsed?<ArrowForwardIosIcon className='arrow' />:<ArrowBackIosIcon className='arrow'  />}
        </div>
    )
}