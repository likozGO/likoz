import React from 'react';

import {DEV_USER_API} from "../../../const"
import {FetchUsers} from "./FetchUsers";

function ListUser() {
    const [data, loading] = FetchUsers(DEV_USER_API + 'users');
        return (
            <>
                <h1>Users</h1>
                {loading ? (
                    "Loading..."
                ) : (
                    <div>
                        {data.map(({ username, createdAt, updatedAt }) => (
                            <div key={username}>
                                    <div>{username}</div>
                                    <div>{createdAt}</div>
                                    <div>{updatedAt}</div>
                            </div>
                        ))}
                    </div>
                )}
            </>
        );
}

export default ListUser;