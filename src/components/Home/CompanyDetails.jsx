import dollar from "../../lib/functions/dollar";

export const CompanyDetails = (props) => {

    if(typeof props.data === undefined) return <div></div>;

    return (
        <div className='contents-div company-details-div fullscreen'>
            <div className='home-header'>
                <h1 className='font-main'>ABOUT {props.data.company.name.toUpperCase()}</h1>

                <p className='font-p fs-xs'>Founded in {props.data.company.founded} by {props.data.company.founder}, Now SpaceX has {props.data.company.employees} employees 
                    and a valuation of {dollar(props.data.company.valuation)}. SpaceX has {props.data.company.launch_sites} launch 
                    sites and is currently based on {props.data.company.headquarters.address}, {props.data.company.headquarters.city} {props.data.company.headquarters.state}.

                </p>
            </div>
        </div>
    );
}