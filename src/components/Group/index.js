import React, { Component } from 'react';

class Group extends Component.React{
    constructor(props){
        super(props);
        this.state = {
            group:[
                {id:1, title: '법학', image: "../../images/law.png", url:"#"},
                {id:2, title: '경영/경제', image: "../../images/economics.png", url:"#"},
                {id:3, title: '인문', image: "../../images/humanities.png", url:"#"},
                {id:4, title: '어문', image: "../../images/linguistics.png", url:"#"},
                {id:5, title: '사회과학', image: "../../images/sociology.png", url:"#"},
                {id:6, title: '자연과학', image: "../../images/science.png", url:"#"},
                {id:7, title: '공학', image: "../../images/engineering.png", url:"#"},
                {id:8, title: '사범', image: "../../images/education.png", url:"#"},
                {id:9, title: '생활환경', image: "../../images/life.png", url:"#"},
                {id:10, title: '예체능', image: "../../images/art.png", url:"#"},
                {id:11, title: '농축산', image: "../../images/agriculture.png", url:"#"},
                {id:12, title: '의약학', image: "../../images/medical.png", url:"#"},

            ]
        }
    }
}