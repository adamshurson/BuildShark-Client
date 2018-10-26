import React from 'react';
import Profile from "./profile";
import { withRouter } from "react-router";
import "./menu.css";

function Menu(props) {
    const navigate = (route) => {
        props.history.push(route);
        props.toggleMenu();
    };
    return <div className={(props.isOpen ? "open" : "closed") + " menu bg-grey-darkest absolute flex pin-t pin-b"}>
        <div className="flex-1 flex flex-col">
            <Profile/>
            <div className="flex-1 flex flex-col">
                {
                    props.pages.map(page => {
                        if (page.showInMenu) {
                            const bg = props.location.pathname === page.route ? 'bg-blue' : 'bg-transparent';
                            return <button onClick={() => navigate(page.route)} key={page.route} className={bg + " flex items-center p-4"}>
                                {/* <FontAwesome name={page.icon} color="white" size={25}/> */}
                                <h4 className="text-xl text-white ml-4 whitespace-no-wrap">{page.name}</h4>
                            </button>
                        }
                    })
                }
            </div>
            <div className="mt-auto pt-4 mb-8 flex justify-center">
                <button onClick={() => props.logout()} className="px-4 py-2 bg-blue">
                    <h4 className="text-xl text-white whitespace-no-wrap">Logout</h4>
                </button>
            </div>
        </div>
    </div>
}
export default withRouter(Menu);