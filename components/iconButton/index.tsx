import React from "react";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

interface Props {
    iconSrc: string,
    tooltip: string;
    size: any,
    onClick: (e: React.MouseEvent) => void
}

export const IconButton: React.FC<Props> = (props) => {
    const {tooltip, iconSrc, size} = props
    return (
        <div onClick={props.onClick}>
            <Popup
                trigger={() =>
                    <img src={iconSrc} width={size} height={size} alt={tooltip}/>}
                on={['hover']}
            >
                {tooltip}
            </Popup>
        </div>
    )
}
