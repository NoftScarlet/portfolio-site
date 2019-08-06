import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const ProjectDetails = (props) => {
    return (
        <div className="p-3 bg-success my-2 rounded">
            <Toast>
                <ToastHeader>
                    {props.title}
                </ToastHeader>
                <ToastBody>
                    <img src={props.img} alt={}/>
                    {props.description}
                </ToastBody>
            </Toast>
        </div>
    );
};

export default ProjectDetails;

