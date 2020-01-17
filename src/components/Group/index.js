import React from 'react';
import styles from './styles.module.scss';

const Icon = (props) => (
    <div className={styles.icon}>
        <a className={styles.link} href={props.url}>
            <img className={styles.image}src={props.image} alt="#"></img>
            <div className={styles.title}>{props.title}</div>
        </a>
    </div>
);

class Group extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            groups:[
                {id:1, title: '법학', image: require("../../images/law.png"), url:"#"},
                {id:2, title: '경영/경제', image: require("../../images/economics.png"), url:"#"},
                {id:3, title: '인문', image: require("../../images/humanities.png"), url:"#"},
                {id:4, title: '어문', image: require("../../images/linguistics.png"), url:"#"},
                {id:5, title: '사회과학', image: require("../../images/sociology.png"), url:"#"},
                {id:6, title: '자연과학', image: require("../../images/science.png"), url:"#"},
                {id:7, title: '공학', image: require("../../images/engineering.png"), url:"#"},
                {id:8, title: '사범', image: require("../../images/education.png"), url:"#"},
                {id:9, title: '생활환경', image: require("../../images/life.png"), url:"#"},
                {id:10, title: '예체능', image: require("../../images/art.png"), url:"#"},
                {id:11, title: '농축산', image: require("../../images/agriculture.png"), url:"#"},
                {id:12, title: '의약학', image: require("../../images/medical.png"), url:"#"},

            ]
        }
    }

    render(){
        const {groups} = this.state;
        return(
            <div className={styles.group}>
                {groups.map((group)=>
                    <Icon key={group.id} title={group.title} image={group.image}/>)}
            </div>
        )
    }
}

export default Group;