import { Medal } from 'lucide-react';

interface MedalDisplayProps {
  gold: number;
  silver: number;
  bronze: number;
}

export function MedalDisplay({ gold, silver, bronze }: MedalDisplayProps) {
  return (
    <div className="flex items-center justify-center gap-8">
      {/* Gold Medal */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-2 ring-4 ring-gold/30">
          <Medal className="w-8 h-8 text-gold" />
        </div>
        <span className="text-2xl font-bold text-foreground">{gold}</span>
        <span className="text-xs text-muted-foreground uppercase tracking-wide">Gold</span>
      </div>

      {/* Silver Medal */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-silver/20 flex items-center justify-center mb-2 ring-4 ring-silver/30">
          <Medal className="w-8 h-8 text-silver" />
        </div>
        <span className="text-2xl font-bold text-foreground">{silver}</span>
        <span className="text-xs text-muted-foreground uppercase tracking-wide">Silver</span>
      </div>

      {/* Bronze Medal */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-bronze/20 flex items-center justify-center mb-2 ring-4 ring-bronze/30">
          <Medal className="w-8 h-8 text-bronze" />
        </div>
        <span className="text-2xl font-bold text-foreground">{bronze}</span>
        <span className="text-xs text-muted-foreground uppercase tracking-wide">Bronze</span>
      </div>
    </div>
  );
}
