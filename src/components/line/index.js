import React, { useEffect, useState } from 'react'

export default function Line({ width, height, data }) {
    const [list, setList] = useState("")

    useEffect(() => {
        let num = -26;
        data.reverse()
        const test = data.map(x => {
            num += 26; // add space of each value on X-axis
            return `${num}.` + x
        })
        setList(test.toString().replaceAll(",", " ").replaceAll(".", ","))
    }, [data])

    return (
        <div style={{ border: '1px solid black', height: height, }}>
            <svg id='svg-line' transform="rotate(180)" style={{ position: 'relative', left: '-30%' }} width={width} >
                <polyline fill='none' stroke="#0074d9" strokeWidth="2" points={list} />
            </svg>
        </div >
    )
}
