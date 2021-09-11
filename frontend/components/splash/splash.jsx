import React from "react";
import { Link } from 'react-router-dom';

export const Splash = () => (
    <>
        <Link to="/listings">
            <main id="splash1">
                <div>
                    <h2>Not sure where to go? Perfect.</h2>
                    <button className="flexible-btn">I'm flexible</button>
                </div>
            </main>
        </Link>
        <main id="splash2"></main>
        <main id="splash3"></main>
    </>
)

