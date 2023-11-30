import React from "react";

interface DropdownProps {
    option: string[],
    title?: string,
    fn?: () => void,
    children?: string;
}
interface StateItem{
    isShow: boolean,
}
class Dropdown extends React.Component<DropdownProps>{
    state = {
        isShow: false,
    };
    constructor(props: DropdownProps) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
        // this.setState({ isShow: !this.setState.isShow });
        this.setState((prevState: StateItem) => ({isShow: !prevState.isShow}));
    }
    mouseEnterHander = (e: any) => {
        console.log(e.target.textContent);
    }
    render(){
        console.log(this.props);
        return (
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" onClick={this.handleClick}>
                    {this.props.title || "This is dropdown"}
                </button>
                <div className={`dropdown-menu ${this.state.isShow? "show" : ""}`}>
                    {this.props.option.map((opt: string, index: number) =>(
                        <a key={index} className="dropdown-item" href="#">{opt}</a>
                    ))}
                </div>
                <div onMouseEnter = {this.mouseEnterHander}>Hover over me</div>
            </div>
        );
    }
}

export default Dropdown;