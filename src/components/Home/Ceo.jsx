export const Ceo = (props) => {

    if(typeof props.data === undefined) return <div></div>;

    return (
        <div className='contents-div ceo-div fullscreen'>
            <div className='home-header'>
                <h4 className='font-main'>MEET OUR CEO</h4>
                <h1 className='font-main'>{props.data.company.ceo.toUpperCase()}</h1>

                {(props.data.company.ceo == "Elon Musk") ? (
                    <p className='font-p fs-xs'>Birth : Pretoria, 28th June 1971<br />
                    Companies : SpaceX, Tesla, Twitter, Boring Company<br />
                    "When something is important enough, you do it even if the odds are not in your favor"</p>
                ) : <p className="font-p fs-xs">No data</p>}
                
            </div>
        </div>
    );
}