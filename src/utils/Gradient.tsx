import React from 'react'

function Gradient() {
    return (
        <svg width="760" height="730" viewBox="0 0 760 730" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g style={{ mixBlendMode: 'color-dodge' }} filter="url(#filter0_f_1_16)">
                <path d="M303.389 601.678C428.191 648.404 567.241 585.111 613.967 460.31L623.931 433.697C670.657 308.896 607.364 169.845 482.563 123.119L456.945 113.528C332.143 66.8018 193.093 130.095 146.367 254.896L136.403 281.509C89.6771 406.31 152.97 545.361 277.771 592.087L303.389 601.678Z" fill="url(#paint0_radial_1_16)" />
            </g>
            <defs>
                <filter id="filter0_f_1_16" x="0.372787" y="-22.5026" width="759.589" height="760.211" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="60.323" result="effect1_foregroundBlur_1_16" />
                </filter>
                <radialGradient id="paint0_radial_1_16" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(515.576 321.001) rotate(153.257) scale(237.063 237.557)">
                    <stop stop-color="#7C75FF" />
                    <stop offset="1" stop-color="#484EB7" stop-opacity="0" />
                    <stop offset="1" stop-color="#9FA7FF" stop-opacity="0" />
                </radialGradient>
            </defs>
        </svg>

    )
}

export default Gradient