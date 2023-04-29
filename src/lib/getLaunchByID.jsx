import { gql } from "@apollo/client";

export const GET_LAUNCH_BY_ID = gql`
    query Launch($launchId: ID!) {
        launch(id: $launchId) {
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
                video_link
            }
        }
    }
`;