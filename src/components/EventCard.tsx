import { Calendar, MapPin, Clock, Users, Mail, ExternalLink } from 'lucide-react';
import workshopQr from '@/assets/workshop_qr.png';

const details = [
  { icon: Calendar, label: 'Dates', value: 'March 14–15, 2026' },
  { icon: MapPin, label: 'Venue', value: 'IIT Tirupati' },
  { icon: Clock, label: 'Duration', value: '2 Days (10 Hours)' },
  { icon: Users, label: 'Format', value: 'Presentations + Hands-On Sessions' },
];

const instructors = [
  { name: 'Dr. Rajeev Gangula', title: 'Research Assistant Professor, Northeastern University, Boston, USA' },
  { name: 'Dr. Rakesh Mundlamuri', title: 'Research Engineer, OpenAirInterface Software Alliance, France' },
  { name: 'Venkatareddy Akumalla', title: 'Senior Engineer at IOS-MCN, FSID, Bengaluru' },
  { name: 'Prof. Chandra R. Murthy', title: 'Indian Institute of Science, Bengaluru' },
  { name: 'Subhas Mondal', title: 'Technology Advisor at IOS-MCN, FSID, Bengaluru' },
];

const EventCard = () => {
  return (
    <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
      {/* Header */}
      <div className="bg-primary px-6 py-5 md:px-8">
        <h2 className="text-xl md:text-2xl font-bold text-primary-foreground">
          5G NR Workshop – Master 5G by Building It
        </h2>
      </div>

      <div className="grid lg:grid-cols-[1fr_320px]">
        {/* Left - Details */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Description */}
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
            <p>
              A hands-on 2-day workshop on 5G New Radio (NR) focused on understanding and building real cellular networks. Participants will learn how to deploy a complete 5G system using OpenAirInterface and gain practical exposure to modern wireless communication technologies.
            </p>
            <p>
              The workshop combines technical presentations and hands-on sessions, providing participants with valuable research and development skills in 5G/6G technologies. It is designed for students and researchers interested in wireless communication, networking, and next-generation mobile systems.
            </p>
            <p>
              Participants will also have the opportunity to interact with experts from academia and industry working in 5G research and development.
            </p>
          </div>

          {/* Workshop Details Grid */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Workshop Details</h3>
            <div className="grid grid-cols-2 gap-3">
              {details.map((d, i) => (
                <div key={i} className="flex items-start gap-3 bg-muted rounded-xl p-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <d.icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{d.label}</p>
                    <p className="text-sm font-medium text-foreground">{d.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Instructors */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Instructors</h3>
            <div className="space-y-3">
              {instructors.map((inst, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted transition-colors">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold text-sm">
                    {inst.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{inst.name}</p>
                    <p className="text-xs text-muted-foreground">{inst.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Registration Panel */}
        <div className="border-t lg:border-t-0 lg:border-l border-border bg-muted/50 p-6 md:p-8 flex flex-col items-center">
          <div className="bg-secondary/10 rounded-xl p-6 w-full text-center space-y-4">
            <span className="inline-block bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Free & Mandatory
            </span>

            <div className="inline-block overflow-hidden rounded-xl">
              <img src={workshopQr} alt="Registration QR Code" className="w-56 h-56 object-cover" />
            </div>

            <a
              href="https://rajeevga.github.io/oai-5gnr-workshop/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity w-full"
            >
              Register Now
              <ExternalLink size={16} />
            </a>

            <p className="text-xs text-muted-foreground leading-relaxed">
              Scan the QR code or visit the website for complete details, prerequisites, and registration.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-muted rounded-xl p-5 w-full mt-6">
            <h3 className="text-base font-semibold text-foreground mb-2">Contact</h3>
            <p className="text-sm text-foreground font-medium">Dr. Sarvendranath Rimalapudi</p>
            <p className="text-xs text-muted-foreground mb-2">Assistant Professor, EE, IIT Tirupati</p>
            <a
              href="mailto:sarvendranath@iittp.ac.in"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <Mail size={14} />
              sarvendranath@iittp.ac.in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
