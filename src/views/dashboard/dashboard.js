import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import AppHeader from '../../components/dashboard/appHeader';
import AppSidebar from '../../components/dashboard/sidebar';
import AppSidebarHeader from '../../components/dashboard/sidebarHeader';
import AppSidebarForm from '../../components/dashboard/sidebarForm';
import AppSidebarNav from '../../components/dashboard/sidebarNav';
import AppSidebarFooter from '../../components/dashboard/sidebarFooter';
import AppSidebarMinimizer from '../../components/dashboard/sidebarMinimizer';
import AppSidebarToggler from '../../components/dashboard/sidebarToggler';
import navigation from '../../components/dashboard/nav';

class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <AppHeader>
                    <AppSidebarToggler className="d-lg-none" display="md" mobile />
                </AppHeader>
                <div className="app-body">
                    <AppSidebar fixed display="lg">
                        <AppSidebarHeader />
                        <AppSidebarForm />
                        <AppSidebarNav navConfig={navigation} {...this.props} />
                        <AppSidebarFooter />
                        <AppSidebarMinimizer />
                    </AppSidebar>
                </div>
            </Fragment >
        );
    }
}

export default Dashboard;