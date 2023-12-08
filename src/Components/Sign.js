import React from 'react'
import { useEffect, useState } from 'react'
import './Sign.css'
import BeatLoader from "react-spinners/BeatLoader";




function Sign() {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000);
    }, [])
    return (
        <div>
           {loading ? (
                <div style={{ paddingTop: '17rem', paddingLeft:'37rem' }}>
                    <BeatLoader
                        color={'blue'}
                        loading={loading}
                        size={50}
                    />
                </div>
            )

                
                    : (<div>
                        <h1>jobin joseph</h1>
                    </div>
            )}

        </div>
    )
}

export default Sign
