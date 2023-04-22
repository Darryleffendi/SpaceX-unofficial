import { gql } from "@apollo/client";

export const GET_COMPANY_INFO = gql`
    query Company {
        company {
            name
            founded
            founder
            ceo
            summary
            valuation
            employees
            launch_sites
            headquarters {
                address
                city
                state
            }
        }
    }
`;