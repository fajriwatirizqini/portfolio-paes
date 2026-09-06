import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Intro from "./pages/Intro";

// Lazy-loaded pages — only downloaded when the user navigates to them
const Index = lazy(() => import("./pages/Index"));
const ProjectBahanBaku = lazy(() => import("./pages/ProjectBahanBaku"));
const ProjectOnlineAttendance = lazy(() => import("./pages/ProjectOnlineAttendance"));
const ProjectFive = lazy(() => import("./pages/ProjectFive"));
const ProjectDeaBakery = lazy(() => import("./pages/ProjectDeaBakery"));
const ProjectStaffApp = lazy(() => import("./pages/ProjectStaffApp"));
const ProjectWebsiteDeaBakery = lazy(() => import("./pages/ProjectWebsiteDeaBakery"));
const ProjectPMProductionScheduling = lazy(() => import("./pages/ProjectPMProductionScheduling"));
const ProjectPMDeliveryTracker = lazy(() => import("./pages/ProjectPMDeliveryTracker"));
const NotFound = lazy(() => import("./pages/NotFound"));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/portfolio" element={<Index />} />
          <Route path="/project/dea-bakery-mobile-app" element={<ProjectDeaBakery />} />
          <Route path="/project/staff-app-dea-bakery" element={<ProjectStaffApp />} />
          <Route path="/project/website-dea-bakery-redesign" element={<ProjectWebsiteDeaBakery />} />
          <Route path="/project/bahan-baku-inventory-system" element={<ProjectBahanBaku />} />
          <Route path="/project/online-attendance-system" element={<ProjectOnlineAttendance />} />
          <Route path="/project/production-workflow-optimization" element={<ProjectFive />} />
          <Route path="/project/bakery-production-scheduling" element={<ProjectPMProductionScheduling />} />
          <Route path="/project/cross-team-delivery-tracker" element={<ProjectPMDeliveryTracker />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
