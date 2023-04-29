import { gql } from "@apollo/client";

export const GET_LAUNCHES = gql`
    query Launches {
        launches {
            id
            mission_name
            launch_date_local
            links {
                flickr_images
            }
        }
    }
`;