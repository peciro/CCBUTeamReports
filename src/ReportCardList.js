import React from 'react';
//import ReportCard from './ReportCard';
import CardTwo from './CardTwo';



const ReportCardList = ({reports}) => {
    return (
        <div>
            {
            reports.map((user, i) => {
                return ( 
                        <CardTwo
                        key={reports[i].id} 
                        id={reports[i].id} 
                        name={reports[i].name}
                        description={reports[i].description} 
                        report_url={reports[i].report_url}
                        screen_shot={reports[i].screen_shot}
                        />
                    );
                })
            }
        </div>
    );
}

export default ReportCardList;