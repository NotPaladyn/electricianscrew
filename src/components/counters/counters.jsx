import React, { useEffect, useState } from "react";
import "./counters.css";

const Counters = () => {
    const [counter, setCounter] = useState([0, 0, 0]);

    const values = [500, 5000, 120];
    const speed = 50;

    useEffect(() => {
        const intervalIds = values.map((target, index) => {
            return setInterval(() => {
                setCounter(prev => {
                    const newCounters = [...prev];
                    if (newCounters[index] < target) {
                        newCounters[index] += Math.ceil(target / 100);
                    } else {
                        clearInterval(intervalIds[index]);
                        newCounters[index] = target;
                    }
                    return newCounters;
                });
            }, speed);
        });

        return () => intervalIds.forEach(clearInterval);
    }, []);

    return (
        <div className="counters">
            <div className="counters-box">
                <div className="counter anim-appear-scale">
                    <h2>Wykonanych inwestycji</h2>
                    <h3>+{counter[0]}</h3>
                </div>
                <div className="counter anim-appear-scale">
                    <h2>Łącznie poprowadzonych przewodów (kilometry)</h2>
                    <h3>+{counter[1]}</h3>
                </div>
                <div className="counter anim-appear-scale">
                    <h2>Pracowników i podwykonawców</h2>
                    <h3>+{counter[2]}</h3>
                </div>
            </div>
        </div>
    );
};

export default Counters;
