import React from 'react';

export default function Header(props) {
    return props.shouldDisplay
            ? <div className="p-2 pt-0 bg-black flex items-center">
                <button onClick={() => props.toggleMenu()}>
                    <svg
                        viewBox="0 0 100 100"
                        height={50}
                        width={50}
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                    >
                        <path fill="#2779bd" d="M 10 30
                        h 80
                        v 10
                        h -80
                        Z"/>
                        <path fill="#2779bd" d="M 10 50
                        h 80
                        v 10
                        h -80
                        Z"/>
                        <path fill="#2779bd" d="M 10 70
                        h 80
                        v 10
                        h -80
                        Z"/>
                    </svg>
                </button>
                <h4 className="ml-auto text-4xl text-blue">BuildShark</h4>
                <svg
                    viewBox="0 0 100 100"
                    height={65}
                    width={65}
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                >
                    <path fill="#6cb2eb"
                              d="M 16 32
               h 68
               v 35
               l -34 23
               l -34 -23"
                    />
                    <path fill="#2779bd"
                              d="M 16 32
               l 34 -23
               l 34 23
               l -4 3
               h -60"
                    />
                    <path fill="#3490dc"
                              d="M 50 15
               l 30 20
               v 30
               l -30 20
               l -30 -20
               v -30"
                    />
                    <path fill="white"
                              d="M 35 30
               q 17.5 10, 35 35
               q -20 -5, -35 0
               q 5 -17.5, 0 -35"
                    />
                </svg>
            </div>
            : null
}