
import React from 'react';

import User from '../component/User';
const users = props => {
    const USERS = [
        {
            id: 'u1',
            firstName: 'Max',
            lastName: 'Schwarz',
            image:
                'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            places: 3
        },
        {
            id: 'u2',
            firstName: 'Danny',
            lastName: 'Rom',
            image:
                'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            places: 1
        },


    ];
    return (
        <section className="site-section border-bottom" id="agents-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-7 text-left">
                        <br/>
                        <h2 className="section-title mb-3">Our Users</h2>
                        <p className="lead">Follow our users and the wonderful places they share with us</p>
                    </div>
                </div>
                <div className="row">


                    {USERS.length === 0 ? <h2>No users found.</h2> :
                        USERS.map(user => <User
                            key={user.id}
                            id={user.id}
                            image={user.image}
                            name={user.firstName + ' ' + user.lastName}
                            firstName={user.firstName}
                            placesCount={user.places} />
                        )}

                </div>
            </div>
        </section>
    )
}
export default users;