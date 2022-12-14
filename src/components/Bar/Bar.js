import React from 'react';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import classes from './Bar.module.css';

const Bar = (props) => {
    const value = props.value

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          {value}
        </Tooltip>
      );

        // const aha = props.value > 120

    return (
        <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
       <div  label={value} className={classes.bar} style={{ height: `${value * 1.2}px`, width: `${props.size}%` }}>
                            
        </div>
    </OverlayTrigger>
    );

}

export default Bar;