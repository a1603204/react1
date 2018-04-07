import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";

class Carlist extends Component {
  constructor (props){
      super(props);
      
      this.state = {cars: []};
      
  }
    
    componentDidMount() {
        fetch('http://carstockrest.herokuapp.com/cars')
        .then(res => res.json())
        .then(resData => {
            this.setState({cars: resData._embedded.cars});
        })
    }
    
    render() {
        

        
    return (
      <div>
        <h2>My cars</h2>
        <ReactTable
          data={this.state.cars}
          columns={[
            
                {
                  Header: "Brand",
                  accessor: "brand"
                },
                {
                  Header: "Model",
                   accessor: "model",
            
                },
        {
                  Header: "Color",
                   accessor: "color",
            
                },
        {
                  Header: "Fuel",
                   accessor: "fuel",
            
                },
        {
                  Header: "Year",
                   accessor: "year",
            
                },
         {
                  Header: "Price",
                   accessor: "price",
            
                },
              ]
            }
          defaultPageSize={10}
          className="-striped -highlight"
        />
         
      </div>
        
    );
  }
}

export default Carlist;
