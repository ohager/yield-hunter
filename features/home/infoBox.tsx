import React from "react";

export const InfoBox: React.FC = ({children}) => {
    return (
        <div className="absolute h-full info-box right-0 flex flex-row">
            <svg className="absolute h-full w-48 text-white poly"
                 fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100"/>
            </svg>
            <div className="info h-full w-48 bg-red right-0 z-10">
                {children}
            </div>
            <style jsx>{`
                .poly {
                  right: 108px;
                  filter: drop-shadow(-5px -4px 4px rgba(0, 0, 0, 0.06));
                }
                .info {
                  position: absolute;
                  background-color: white;
                }
             `}</style>

        </div>
    )
}
