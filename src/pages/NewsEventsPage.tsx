import EventCard from '@/components/EventCard';

const NewsEventsPage = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
          News & <span className="text-secondary">Events</span>
        </h1>
        <p className="text-muted-foreground text-center mb-12">Upcoming workshops and events</p>
        <EventCard />
      </div>
    </section>
  );
};

export default NewsEventsPage;
