import { gql } from "@apollo/client";

// Gabisa - API autis
export const SEARCH_LAUNCHES = gql`
    query Launches($find: LaunchFind) {
        launches(find: $find) {
            id
            mission_name
            launch_date_local
            links {
                flickr_images
            }
        }
    }
`;