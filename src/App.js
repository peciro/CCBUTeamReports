import React, { Component } from 'react';
import ReportCardList from './ReportCardList';
import SearchBox from './SearchBox';
import HomeBar from './HomeBar';
import { reports } from './reports';
import {CardDeck} from 'react-bootstrap';


class App extends Component {
    constructor () {
        super()
        this.state = {
            reports: reports,
            searchfield: ''
        }
    }

    componentDidMount() {
        this.setState({ reports:reports })
        console.log('check');
    }


    onSearchChange = (event) => {
        this.setState( {searchfield:event.target.value} )
    }


    render () {
        const filteredReports = this.state.reports.filter(reports => {
            return reports.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <HomeBar />
                <SearchBox searchChange={this.onSearchChange}/>
                <CardDeck style={{padding: 20, display:'flex', flexDirection:'row', justifyContent:'center', alignContent: 'start' }}>
                    <ReportCardList reports={filteredReports}/>
                </CardDeck>
                
            </div>
        );
    }   

}


export default App;