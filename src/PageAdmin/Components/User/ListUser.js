import React from 'react';
import {FetchUsers} from "./FetchUsers";


function ListUser() {
    const [data, loading] = FetchUsers(
        "https://jsonplaceholder.typicode.com/photos?albumId=1"
    );
        return (
            <>
                <h1>Photos</h1>
                {loading ? (
                    "Loading..."
                ) : (
                    <ul>
                        {data.map(({ id, title, url }) => (
                            <li key={`photo-${id}`}>
                                <img alt={title} src={url} />
                            </li>
                        ))}
                    </ul>
                )}
            </>
        );
}

export default ListUser;