import React from "react";

interface BadgeProps {
    src: string,
    size: number
}

export const AvatarBadge: React.FC<BadgeProps> = ({src, size}) => {
    return (
        <>
            <div className="badge">
                <img src={src} alt="avatar-badge"/>
            </div>
            <style jsx>{`
                .badge {
                    position: absolute;
                    top: 0;
                    right: 0;
                    height: ${size / 4}px; 
                    width: ${size / 4}px;
                }
             `}</style>
        </>
    )
}
