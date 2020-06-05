import React from 'react';


const ReportCard = ({id, name, report_url}) => {
    return (
            <div className='br3 tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt='VA Report' src={`https://robohash.org/${id}?200x200`} />
                <div>
                    <h2>{name}</h2>
                    <p>{report_url}</p>
                </div>
            </div>
    );
}


export default ReportCard;