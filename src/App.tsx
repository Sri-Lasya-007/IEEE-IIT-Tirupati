import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import CommitteePage from "./pages/CommitteePage";
import PlaceholderPage from "./pages/PlaceholderPage";
import NewsEventsPage from "./pages/NewsEventsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/news-events" element={<NewsEventsPage />} />
          <Route path="/committee" element={<CommitteePage />} />
          <Route path="/gallery" element={<PlaceholderPage />} />
          <Route path="/ieee-fellows" element={<PlaceholderPage />} />
          <Route path="/achievements" element={<PlaceholderPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
