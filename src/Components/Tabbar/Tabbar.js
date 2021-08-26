import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Vet from '../../Pages/TabPages/Vet';
import Farrier from '../../Pages/TabPages/Farrier';
import Feed from '../../Pages/TabPages/Feed';
import GeneralInfo from '../../Pages/TabPages/GeneralInfo';
import Training from '../../Pages/TabPages/Training';

export default function Tabbar(){
    return(
        <div>
           <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="generalInfo" title="General Info">
                    <GeneralInfo />
                </Tab>
                <Tab eventKey="vet" title="Vet">
                    <Vet />
                </Tab>
                <Tab eventKey="farrier" title="Farrier">
                    <Farrier />
                </Tab>
                <Tab eventKey="feed" title="Feed">
                    <Feed />
                </Tab>
                <Tab eventKey="training" title="Training">
                    <Training />
                </Tab>
            </Tabs> 
        </div>
    );
}