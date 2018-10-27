import React from 'react';

export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {

        };
        this.projects = [
            {
                _id: "derp",
                clients: [
                    {
                        firstName: "Tim",
                        lastName: "Shurson"
                    },
                    {
                        firstName: "Nancy",
                        lastName: "Shurson"
                    }
                ],
                address: {
                    street: "3183 N. Country Lane",
                    city: "Waukegan",
                    state: "Illinois",
                    zip: 60087,
                    latitude: 42.410475,
                    longitude: -87.923947
                },
                categories: [
                    {
                        _id: "kitch",
                        name: "Kitchen",
                        color: 'bg-blue'
                    },
                    {
                        _id: "bath",
                        name: "Bathroom",
                        color: 'bg-orange'
                    },
                    {
                        _id: "base",
                        name: "Basement",
                        color: 'bg-green'
                    }
                ]
            },
            {
                _id: "derp2",
                clients: [
                    {
                        firstName: "Tim",
                        lastName: "Shurson"
                    },
                    {
                        firstName: "Nancy",
                        lastName: "Shurson"
                    }
                ],
                address: {
                    street: "3183 N. Country Lane",
                    city: "Waukegan",
                    state: "Illinois",
                    zip: 60087,
                    latitude: 42.410475,
                    longitude: -87.923947
                },
                categories: [
                    {
                        _id: "kitch",
                        name: "Kitchen",
                        color: 'bg-blue'
                    },
                    {
                        _id: "bath",
                        name: "Bathroom",
                        color: 'bg-orange'
                    },
                    {
                        _id: "base",
                        name: "Basement",
                        color: 'bg-green'
                    }
                ]
            },
            {
                _id: "derp3",
                clients: [
                    {
                        firstName: "Tim",
                        lastName: "Shurson"
                    },
                    {
                        firstName: "Nancy",
                        lastName: "Shurson"
                    }
                ],
                address: {
                    street: "3183 N. Country Lane",
                    city: "Waukegan",
                    state: "Illinois",
                    zip: 60087,
                    latitude: 42.410475,
                    longitude: -87.923947
                },
                categories: [
                    {
                        _id: "kitch",
                        name: "Kitchen",
                        color: 'bg-blue'
                    },
                    {
                        _id: "bath",
                        name: "Bathroom",
                        color: 'bg-orange'
                    },
                    {
                        _id: "base",
                        name: "Basement",
                        color: 'bg-green'
                    }
                ]
            }
        ];
    }
    render() {
        return <div className="flex-1 flex flex-col">
            projects
        </div>
    }
}