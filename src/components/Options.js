import React from 'react';
import Option from './Option';

const Options = (props) => {
    // to avoid binding issues
    // wherever we call this it ensures it is binded correctly
        return (
            <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your options</h3>
                <button className="button button--link"
                    onClick={props.handleDeleteOptions}>
                    Remove all
                </button>
            </div>
            
            
            {props.options.length === 0 && <p className="widget__message">Add an option to get started!</p>}
            {
                props.options.map((option, index) => (
                    <Option 
                    key={option} 
                    optionText={option}
                    count={index + 1}
                    handleDeleteOptionSingular={props.handleDeleteOptionSingular}
                    />
                ))
            }
            
            </div>
        );
};

export default Options;