import commaDigit from '../../lib/functions/commaDigit.jsx'
import '../../assets/styles/Cards.css'

const RocketOverview = (props) => {
    return (<>
        <div className='overview-head'>
            <p className="font-p m-0 fs-xs">{props.rocket.name.toUpperCase()}</p>
            <h1 className="font-main m-0 fs-m">OVERVIEW</h1>
        </div>
        <div className="overview-div flex wrap center">
            <table className="overview-table font-p">
                <tr>
                    <td className='font-main fs-xs'>DIAMETER</td>
                    <td className="text-right fs-xs">{props.rocket.diameter.meters} m</td>
                </tr>
                <tr>
                    <td className='font-main fs-xs'>HEIGHT</td>
                    <td className="text-right fs-xs">{props.rocket.height.meters} m</td>
                </tr>
                <tr>
                    <td className='font-main fs-xs'>MASS</td>
                    <td className="text-right fs-xs">{commaDigit(props.rocket.mass.kg)} kg</td>
                </tr>
                {
                    props.rocket.payload_weights.map((payload) => {
                        let name = payload.name.slice(0, payload.name.length - 6);
                        if(name === 'Geosynchronous Transfer') {
                            name = 'GTO'
                        }
                        return (
                            <tr>
                                <td className='font-main fs-xs'>PAYLOAD TO {name.toUpperCase()}</td>
                                <td className='text-right fs-xs'>{commaDigit(payload.kg)} kg</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    </>)
}

export default RocketOverview;