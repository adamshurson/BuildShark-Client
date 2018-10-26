import React from 'react';

export default function Profile(props) {
    return <div className="flex items-center p-4">
        <div className="flex items-center justify-center h-24 w-24 m-2 rounded-full border-2 border-white overflow-hidden">
            <img src='https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/22450041_1855265627820263_143627704589403163_n.jpg?_nc_cat=100&oh=1405671f16138c07b745fb9ede249ada&oe=5C4E6660'/>
        </div>
        <div className="flex-1 flex flex-col pl-4">
            <h4 className="text-3xl text-white">Adam Shurson</h4>
            <h4 className="text-xl text-white mt-1">Creative Building Solutions</h4>
            <h4 className="text-xl text-white mt-1">Vice President</h4>
        </div>
    </div>
}