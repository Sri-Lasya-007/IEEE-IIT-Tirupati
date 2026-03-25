import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomeEventCard = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-md mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
          Events
        </h2>

        <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden card-hover">
          {/* Color accent bar */}
          <div className="h-2 bg-primary" />

          <div className="p-6 space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-foreground">
              5G NR Workshop – Master 5G by Building It
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
              A hands-on 2-day workshop on 5G New Radio (NR) focused on understanding and building real cellular networks using OpenAirInterface.
            </p>

            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar size={15} className="text-primary shrink-0" />
                March 14–15, 2026
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={15} className="text-primary shrink-0" />
                IIT Tirupati
              </span>
              <span className="flex items-center gap-2">
                <Clock size={15} className="text-primary shrink-0" />
                2 Days (10 Hours)
              </span>
            </div>

            <Link to="/news-events" className="block pt-2">
              <Button size="lg" className="w-full rounded-full">
                More Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeEventCard;
