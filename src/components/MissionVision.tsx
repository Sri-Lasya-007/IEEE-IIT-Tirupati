import { Target, Eye } from 'lucide-react';

const cards = [
  {
    icon: Target,
    title: 'Mission Statement',
    content:
      'The IEEE Student Chapter at IIT Tirupati aims to inspire and empower students to explore technological innovation, enhance technical knowledge, and develop professional skills. Through workshops, technical events, collaborative projects, and industry interactions, the chapter strives to cultivate a community of motivated engineers and researchers dedicated to advancing technology for the benefit of society.',
  },
  {
    icon: Eye,
    title: 'Vision Statement',
    content:
      'The IEEE Student Chapter at IIT Tirupati envisions becoming a vibrant hub for technical excellence, innovation, and professional growth. It seeks to nurture future leaders in engineering and technology by fostering creativity, collaboration, and ethical responsibility, while contributing meaningful technological solutions that positively impact society.',
  },
];

const MissionVision = () => {
  return (
    <section className="py-20 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Our <span className="text-secondary">Purpose</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="card-hover bg-card rounded-xl p-8 shadow-md border border-border"
            >
              <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center mb-6">
                <card.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
