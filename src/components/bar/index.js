import React from 'react'

export default function Bar({ width, height, data, color, percentage }) {
    return (
        <>
            <div >
                <svg height={height} width={width} style={{ border: '1px solid black' }}>
                    {data.map((x, i) => {
                        i++;
                        return (
                            <>
                                <rect key={i} strokeWidth={0.5} className="bar" x={i * 31} width="30" y={height - x} height={x} />
                            </>
                        )
                    })}
                </svg>
            </div>
        </>
    );
}
