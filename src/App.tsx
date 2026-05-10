import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Intro from "./pages/Intro";
import Index from "./pages/Index";
import ProjectFour from "./pages/ProjectFour";
import ProjectFive from "./pages/ProjectFive";
import ProjectDeaBakery from "./pages/ProjectDeaBakery";
import ProjectStaffApp from "./pages/ProjectStaffApp";
import NotFound from "./pages/NotFound";

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
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/portfolio" element={<Index />} />
        <Route path="/project/dea-bakery-mobile-app" element={<ProjectDeaBakery />} />
        <Route path="/project/staff-app-dea-bakery" element={<ProjectStaffApp />} />
        <Route path="/project/onboarding-portal-redesign" element={<ProjectFour />} />
        <Route path="/project/production-workflow-optimization" element={<ProjectFive />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
