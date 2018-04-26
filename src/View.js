import React, { Component } from "react";
import Styled from "styled-components";
import data from "./data/test.json";

const Container = Styled.div`
display: flex;
flex-direction: row;
margin: 0 -4px;
`;

const Member = Styled.div`
border: 1px solid #333;
width: 16px;
text-align: center;
padding: 4px;
border-radius: 3px;
`;

const Label = Styled.div`
//border: 1px solid red;
font-style: italic;
text-align: right;
padding: 4px;
border-radius: 3px;
`;

const List = Styled.div`
/* display: flex;
flex-direction: column; */
width: 300px;
//background: #eee;
padding: 0 4px;
margin: 0 4px;
border-left: 1px solid #ccc;
`;

const Card = Styled.div`
border: 1px solid #ccc;
margin-bottom: 8px;
padding: 8px 8px;
//background: #fff;
border-radius: 3px;
`;

const labels = idLabels => {
    const labelsForCard = data.labels.map(
        label =>
            idLabels.includes(label.id) ? (
                <Label key={label.id}>{label.name}</Label>
            ) : null
    );
    return labelsForCard;
};

const members = idMembers => {
    const membersForCard = data.members.map(
        member =>
            idMembers.includes(member.id) ? (
                <Member key={member.id}>{member.fullName}</Member>
            ) : null
    );
    return membersForCard;
};

const cards = idList => {
    const cardsForList = data.cards.map(
        card =>
            card.idList === idList && card.closed === false ? (
                <Card key={card.id}>
                    <h4 style={{ marginTop: 0 }}>{card.name}</h4>
                    {card.due ? <span>Due: {card.due}</span> : null}
                    <div>
                        {members(card.idMembers)}
                        {labels(card.idLabels)}
                    </div>
                </Card>
            ) : null
    );

    return cardsForList;
};

const lists = data.lists.map(
    list =>
        list.closed === false ? (
            <List key={list.id}>
                <h2>{list.name}</h2>
                <div>{cards(list.id)}</div>
            </List>
        ) : null
);

class View extends Component {
    render() {
        return <Container>{lists}</Container>;
    }
}

export default View;
