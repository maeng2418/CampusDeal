import React from 'react';
import { Nav } from 'react-bootstrap';
import styles from './styles.module.scss';
import PasswordChangeForm from 'components/PasswordChange';

class TabView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 'link-0',
        }
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.tabContainer}>
                    <Nav fill variant="tabs" defaultActiveKey="link-0" onSelect={eventKey => this.setState({ index: eventKey })}>
                        <Nav.Item>
                            <Nav.Link className={styles.tabView} eventKey="link-0">정보수정</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={styles.tabView} eventKey="link-1">주문내역</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={styles.tabView} eventKey="link-2">적립금 내역</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={styles.tabView} eventKey="link-3">장바구니</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={styles.tabView} eventKey="link-4">판매내역</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className={styles.subContainer}>
                    {this.state.index === 'link-0' && <PasswordChangeForm/>}
                    {this.state.index === 'link-1' && <div>주문내역</div>}
                    {this.state.index === 'link-2' && <div>적립금 내역</div>}
                    {this.state.index === 'link-3' && <div>장바구니</div>}
                    {this.state.index === 'link-4' && <div>판매내역</div>}
                </div>
            </div>
        );
    }

}

export default TabView;