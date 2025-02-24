import React from 'react'
import Image from 'next/image'


function PortFolioImage() {
    return (
        <>
            <Image
                src="/portfolio.jpg"
                alt="Portfolio Image"
                width={500} // Set the width as needed
                height={500} // Set the height as needed
                priority // Optional: Loads the image faster
            />
        </>
    )
}

export default PortFolioImage