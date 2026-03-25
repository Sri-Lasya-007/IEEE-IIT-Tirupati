import { useLocation } from 'react-router-dom';

const titles: Record<string, string> = {
  '/news-events': 'News & Events',
  '/gallery': 'Gallery',
  '/ieee-fellows': 'IEEE Fellows',
  '/achievements': 'Achievements',
};

const PlaceholderPage = () => {
  const location = useLocation();
  const title = titles[location.pathname] || 'Page';

  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h1>
      <p className="text-lg text-muted-foreground">Will be updated soon!</p>
    </section>
  );
};

export default PlaceholderPage;
