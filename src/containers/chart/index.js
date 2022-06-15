import React, { useEffect, useState } from 'react'
import Bar from '../../components/bar';
import Line from '../../components/line';
import './style.css'
export default function Chart() {

    const [list, setList] = useState([]);
    const [width, setWidth] = useState(360)
    const height = 150;

    useEffect(() => {
        // string number convert to number array
        const stringList = "7, 51, 48, 68, 22, 99, 15, 64, 78, 22";
        const numberList = stringList.split(",")
        setList(numberList)
    }, [])

    const genList = () => {
        // number array
        const list = [];
        for (let i = 0; i < 12; i++) {
            list[i] = Math.floor(Math.random() * 100);
        }
        setList(list);
        setWidth(500)
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Bar data={list} width={width} height={height} />
            <Line data={list} width={width} height={height} />
            <button onClick={genList}>Generate</button>
        </div>
    );
}
