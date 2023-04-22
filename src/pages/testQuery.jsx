import { useQuery } from '@apollo/client';
import { GET_ROCKETS } from '../lib/getRockets';

export default function testQuery() {
    const { loading, error, data } = useQuery(GET_ROCKETS);

    if (loading) return <h1>Loading...</h1>;

    return (
        <div>
        {
            data.rockets.map((media) => {
              return media.name;
            })
        }
        </div>
    );
}
