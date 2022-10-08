import { useState } from 'react'

const Toggle = ({ values, labels, action }) => {

    const [activeValue, setActiveValue] = useState(values[0])
    const [activeLabel, setActiveLabel] = useState(labels[0])

    const toggleAction = () => {
        const newSelection = (activeValue === values[1])
            ? 0
            : 1
        setActiveValue(values[newSelection])
        setActiveLabel(labels[newSelection])
        action(values[newSelection])
    }

    const getPosition = () => {
        return (activeValue === values[1])
            ? 'right'
            : 'left'
    }

    return (
        <div
            className="toggle"
            role="button"
            aria-label={activeLabel}
            data-position={getPosition()}
            onClick={toggleAction}
        >
            <div className="toggle__switch"></div>
        </div>
    )
}

export default Toggle