import { lazy } from 'react';

// Import components using lazy loading
const Overview = lazy(() => import('../component/OverView/OverView'));
const Report = lazy(() => import('../component/Report/Report'));
const UserOverview = lazy(() => import('../component/UserOverview/UserOverview'));
const PaymentManagement = lazy(() => import('../component/PaymentManagement/PaymentManagement'));
const UserCreation = lazy(() => import('../component/UserCreation/UserCreation'));
const EmployeeManagement = lazy(() => import('../component/EmployeeManagement/EmployeeManagement'));
const BidSubmission = lazy(() => import('../component/BidSubmission/BidSubmission'));
const BidReview = lazy(() => import('../component/BidReview/BidReview'));
const ShippmentTracking = lazy(() => import('../component/ShippmentTracking/ShippmentTracking'));
const CustomerFeedback = lazy(() => import('../component/CustomerFeedback/CustomerFeedback'));


// Define routes
const routes = [
    {
        path: '/overview', // the url
        component: Overview, // view rendered
        service: true,
    },
    {
        path: '/reports', // the url
        component: Report, // view rendered
        service: true,
    },
    {
        path: '/user-overview', // the url
        component: UserOverview, // view rendered
        service: true,
    },
    {
        path: '/payment-management', // the url
        component: PaymentManagement, // view rendered
        service: true,
    },
    {
        path: '/user-creation', // the url
        component: UserCreation, // view rendered
        service: true,
    },
    {
        path: '/employee-management', // the url
        component: EmployeeManagement, // view rendered
        service: true,
    },
    {
        path: '/bid-submission', // the url
        component: BidSubmission, // view rendered
        service: true,
    },
    {
        path: '/bid-review', // the url
        component: BidReview, // view rendered
        service: true,
    },
    {
        path: '/shipment-tracking', // the url
        component: ShippmentTracking, // view rendered
        service: true,
    },
    {
        path: '/customer-feedback', // the url
        component: CustomerFeedback, // view rendered
        service: true,
    },
    
    
]






// const routes = [
//     {
//         path: `/app/dashboard`,
//         element: <Dashboard />,
//         pageName: "Dashboard",
//         isProtected: true
//     },
//     {
//         path: '/app/library',
//         element: <Library />,
//         pageName: "Library",
//         isProtected: true
//     },
//     {
//         path: '/app/courses',
//         element: <Courses />,
//         pageName: "Courses",
//         isProtected: true
//     },
//     {
//         path: '/login-ch',
//         element: <h1>this is login</h1>,
//         pageName: "Courses",
//         isProtected: false
//     }
// ];

export default routes;
