import React from 'react';
import Icon from '@mdi/react';
import {mdiCheckboxMarkedCircleOutline} from '@mdi/js'; 
import {mdiCheckboxBlankCircleOutline } from '@mdi/js'; 

const Task = function ({task, ...props}) {

    const ActionBtn = function() {
        return(<div className="action-btn" onClick={props.doneTask}>
            {!task.done?
            (<p ><Icon path={mdiCheckboxBlankCircleOutline} size={1}/></p>)
            :(<p><Icon path={mdiCheckboxMarkedCircleOutline} size={1}/></p>)}
            <p> {task.title}</p>
        </div>)
    }

    // const ActionBtn = function() {
    //     return(<div className="action-btn">
    //         {!task.done?
    //         (<p onClick={props.doneTask}><Icon path={mdiCheckboxBlankCircleOutline} size={1}/></p>)
    //         :(<p onClick={props.doneTask}><Icon path={mdiCheckboxMarkedCircleOutline} size={1}/></p>)}
    //         <p> {task.title}</p>
    //     </div>)
    // }


    return(
        <div className="task">
            <ActionBtn></ActionBtn>      
        </div>
    );
};

export default Task;