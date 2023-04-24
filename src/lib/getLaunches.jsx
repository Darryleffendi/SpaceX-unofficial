import { gql } from "@apollo/client";

export const GET_LAUNCHES = gql`
    query Launches {
        launches {
            id
            mission_name
            details
            launch_date_local
            rocket {
                rocket {
                name
                id
                }
            }
            links {
                flickr_images
            }
        }
    }
`;