import merlin from '../../assets/Images/Rocket-Details/merlin.jpg';
import raptor from '../../assets/Images/Rocket-Details/raptor.jpg';
import '../../assets/styles/Cards.css'
import commaDigit from '../../lib/functions/commaDigit';

const Engine = (props) => {
    let engineImg = merlin;

    if(props.data.type === 'raptor') engineImg = raptor;

    return (
        <div className="engine-div" style={{backgroundImage:`url(${engineImg})`}}>
            <div className='overview-head'>
                <p className="font-p m-0 fs-xs o-50">ENGINE</p>
                <h1 className="font-main m-0 fs-m">{props.data.type.toUpperCase()}</h1>
            </div>
            <div className="overview-div flex wrap center">
            <table className="overview-table font-p">
                {(props.data.layout) ? (
                    <tr>
                        <td className='font-main fs-xs'>LAYOUT</td>
                        <td className="text-right fs-xs">{props.data.layout.toUpperCase()}</td>
                    </tr>
                    ) : <></>
                }
                
                <tr>
                    <td className='font-main fs-xs'>THRUST SEA LEVEL</td>
                    <td className="text-right fs-xs">{props.data.thrust_sea_level.kN} kN</td>
                </tr>
                <tr>
                    <td className='font-main fs-xs'>THRUST VACUUM</td>
                    <td className="text-right fs-xs">{props.data.thrust_vacuum.kN} kN</td>
                </tr>
                <tr>
                    <td className='font-main fs-xs'>PROPELLANT 1</td>
                    <td className="text-right fs-xs">{props.data.propellant_1.toUpperCase()}</td>
                </tr>
                <tr>
                    <td className='font-main fs-xs'>PROPELLANT 2</td>
                    <td className="text-right fs-xs">{props.data.propellant_2.toUpperCase()}</td>
                </tr>
                <tr>
                    <td className='font-main fs-xs'>VERSION</td>
                    <td className="text-right fs-xs">{props.data.version.toUpperCase()}</td>
                </tr>
            </table>
        </div>
        </div>
    )
}

export default Engine;