export const Company = (props) => {
    
    if(typeof props.data === undefined) return <div></div>;

    return (
        <div className='contents-div company-div fullscreen'>
            <div className='home-header'>
                <h1 className='font-main'>{props.data.company.name.toUpperCase()}</h1>
                <h4 className='font-main'>UNOFFICIAL SITE</h4>

                <p className='font-p fs-xs'>{props.data.company.summary}</p>
            </div>
        </div>
    );
}