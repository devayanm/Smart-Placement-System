import Home from './components/Home/Home';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import ForgotPassword from './components/Authentication/ForgotPassword';
import AdminDashboard from './components/AdminPanel/AdminDashboard';
import Settings from './components/AdminPanel/Settings';
import ApplicationsList from './components/Applications/ApplicationsList';
import ApplicationDetails from './components/Applications/ApplicationDetails';
import EligibilityFilter from './components/Eligibility/EligibilityFilter';
import EligibilityResults from './components/Eligibility/EligibilityResults';
import RecommendationsList from './components/JobRecommendations/RecommendationsList';
import JobRecommendation from './components/JobRecommendations/JobDetails';
import JobList from './components/Jobs/JobList';
import JobDetails from './components/Jobs/JobDetails';
import JobApply from './components/Jobs/JobApply';
import StudentProfile from './components/Profiles/StudentProfile';
import CompanyProfile from './components/Profiles/CompanyProfile';
import TPOProfile from './components/Profiles/TPOProfile';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/admin/dashboard', element: <AdminDashboard /> },
  { path: '/admin/settings', element: <Settings /> },
  { path: '/applications', element: <ApplicationsList /> },
  { path: '/applications/:id', element: <ApplicationDetails /> },
  { path: '/eligibility', element: <EligibilityFilter /> },
  { path: '/eligibility/results', element: <EligibilityResults /> },
  { path: '/job-recommendations', element: <RecommendationsList /> },
  { path: '/job-recommendations/:id', element: <JobRecommendation /> },
  { path: '/jobs', element: <JobList /> },
  { path: '/jobs/:id', element: <JobDetails /> },
  { path: '/jobs/apply/:id', element: <JobApply /> },
  { path: '/profiles/student', element: <StudentProfile /> },
  { path: '/profiles/company', element: <CompanyProfile /> },
  { path: '/profiles/tpo', element: <TPOProfile /> },
];

export default routes;
