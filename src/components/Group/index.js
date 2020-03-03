import React from 'react';
import styles from './styles.module.scss';
import GroupIcon from 'components/GroupIcon';
import category from 'config/_category';

class Group extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            groups: category,
        }
    }

    render(){
        const {groups} = this.state;
        return(
            <div className={styles.group}>
                {groups.map((group)=>
                    <GroupIcon key={group.id} title={group.title} image={group.imageURL} url={group.url}/>)}
            </div>
        )
    }
}

export default Group;