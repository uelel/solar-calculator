import React from "react";

class DropDown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedOption: props.defaultValue,
    };
  }
  
  toggleDropdown = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  handleSelect = (value) => {
    this.setState({
      selectedOption: value,
      isOpen: false
    });
    this.props.onChange(value);
  };
  
  render() {
    const { data } = this.props;
    //const { name, defaultValue, data, onChange } = this.props;
    const { isOpen, selectedOption } = this.state;
    return (
      <div className="relative w-full">
        <div 
          onClick={this.toggleDropdown} 
          className="w-full h-14 px-4 py-2 inline-flex justify-start items-center 
                     border-2 border-light bg-white shadow-sm focus:outline-none 
                     focus:border-dark hover:border-dark transition-colors
                     text-lg text-dark font-medium rounded-md normal-case text-nowrap
                     appearance-none cursor-pointer" 
        >
        {data.find((option) => option.value === selectedOption)?.label}
          <svg
            className="absolute right-4 top-1/2 transform -translate-y-1/2 
                       pointer-events-none w-5 h-5 text-dark"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* Custom Dropdown options */}
        {isOpen && (
          <div className="absolute w-full max-h-80 overflow-y-auto mt-1
                          bg-white border-2 border-light rounded-md shadow-lg z-10">
            {data.map((option) => (
              <div
                key={option.value}
                className={`text-lg py-2 px-4 text-black cursor-pointer 
                            border-b-2 border-light
                            hover:bg-dark hover:text-light hover:font-medium
                           ${option.value === selectedOption
                            ? "bg-light text-dark font-medium"
                            : ""}`}
                onClick={() => this.handleSelect(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default DropDown;