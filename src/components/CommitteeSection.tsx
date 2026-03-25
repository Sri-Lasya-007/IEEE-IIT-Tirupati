import { Linkedin } from 'lucide-react';
import abhishekImg from '@/assets/abhishek_jha.jpeg';
import saiImg from '@/assets/sai_haranadh.jpeg';
import chaithanyaImg from '@/assets/p_chaithanya.jpeg';
import ramakrishnaImg from '@/assets/ramakrishna.jpeg';
import shreyanshuImg from '@/assets/shreyanshu.jpeg';

interface CommitteeMember {
  designation: string;
  name: string;
  image: string;
}

const rows: CommitteeMember[][] = [
  [{ designation: 'Advisor', name: 'Abhishek Jha', image: abhishekImg }],
  [{ designation: 'Chair', name: 'Sai Haranadh', image: saiImg }],
  [{ designation: 'Vice Chair', name: 'P Chaithanya', image: chaithanyaImg }],
  [{ designation: 'Treasurer', name: 'Ramakrishna', image: ramakrishnaImg }],
  [{ designation: 'Secretary', name: 'Shreyanshu', image: shreyanshuImg }],
];

const MemberCard = ({ member }: { member: CommitteeMember }) => (
  <div className="committee-card bg-card rounded-xl p-6 shadow-md border border-border flex flex-col items-center text-center">
    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary/20">
      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
    </div>
    <p className="font-medium text-foreground mb-1">{member.name}</p>
    <p className="text-sm text-muted-foreground mb-3">{member.designation}</p>
    <button className="text-primary hover:text-secondary transition-colors">
      <Linkedin size={18} />
    </button>
  </div>
);

const CommitteeSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Our <span className="text-secondary">Committee</span>
        </h2>
        <div className="space-y-8">
          {rows.map((row, rowIdx) => (
            <div key={rowIdx} className="flex flex-wrap justify-center gap-6">
              {row.map((member, i) => (
                <div key={i} className="w-48">
                  <MemberCard member={member} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitteeSection;
