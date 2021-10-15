import { Row, Col } from 'react-bootstrap'
import { SkillMenuEntry } from './skillMenuEntry'
import * as skillData from './skillData'

const SkillPage = () => {

    return (
        <Row md={12}>
            <Col lg={2} md={3} sm={1} className="pb-2" id="content">
                <SkillMenuEntry menuName="Schwerpunkte" entryItem={skillData.schwerpunkteItems} />
            </Col>
            <Col lg={2} md={3} sm={1} className="pb-2">
                <SkillMenuEntry menuName="Methoden" entryItem={skillData.methodenItems} />
            </Col>
            <Col lg={2} md={3} sm={1} className="pb-2">
                <SkillMenuEntry menuName="Java Middleware" entryItem={skillData.javaMiddlewareItems} />
            </Col>
            <Col lg={2} md={3} sm={1} className="pb-2">
                <SkillMenuEntry menuName="Java Database" entryItem={skillData.javaDatabaseItems} />
            </Col>
            <Col lg={2} md={3} sm={1} className="pb-2">
                <SkillMenuEntry menuName="Java Tools" entryItem={skillData.toolItems} />
            </Col>
            <Col lg={2} md={3} sm={1} className="pb-2">
                <SkillMenuEntry menuName="Frontend" entryItem={skillData.frontendItems} />
            </Col>
            <Col lg={2} md={3} sm={1} className="pb-2">
                <SkillMenuEntry menuName="Build Umgebungen" entryItem={skillData.buildItems} />
            </Col>
            <Col lg={2} md={3} sm={1} className="pb-2">
                <SkillMenuEntry menuName="Versionierung" entryItem={skillData.versionItems} />
            </Col>
            <Col lg={2} md={3} sm={1} className="pb-2">
                <SkillMenuEntry menuName="Datenbanken" entryItem={skillData.databaseItems} />
            </Col>
            <Col lg={2} md={3} sm={1} className="pb-2">
                <SkillMenuEntry menuName="Tracking / Dokumentation" entryItem={skillData.trackingItems} />
            </Col>
        </Row>
    )
}

export default SkillPage;