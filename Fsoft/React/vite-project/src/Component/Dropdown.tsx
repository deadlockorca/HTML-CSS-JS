import React from "react";

interface DropdownProps {
    option: string[];
    title?: string;
}

class Dropdown extends React.Component<DropdownProps>{
    render(){
        console.log(this.props);
        return (
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle">
                    {this.props.title || "This is dropdown"}
                </button>
                <div className="dropdown-menu show">
                    {this.props.option.map((opt: string, index: number) =>(
                        <a key={index} className="dropdown-item" href="#">{opt}</a>
                    ))}
                </div>
            </div>
        );
    }
}

export default Dropdown;