import React from 'react';
import SimpleCard from './cards';

const JobList = props => {
    if (props.items.length === 0) {
        return <div className="center">
            <div>
                <h2>No Jobs found.</h2>
            </div>
        </div>
    }
    return (
            <React.Fragment>
                {props.items.map(job => 
                    <SimpleCard 
                        key={job.id} 
                        perks={job.perks}
                        org={job.org}
                    />
                )}
            </React.Fragment>
    )
};

export default JobList;